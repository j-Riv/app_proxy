import React, { useEffect, useState, useReducer } from 'react';
import queryString from 'query-string';
import './App.css';
import { accountRedirect } from './utils';
import { SubscriptionNode, Subscription } from './types/subscription';
import ShippingAddressForm from './components/ShippingAddressForm';
import Loader from './components/Loader';
import Toast from './components/Toast';
import SubscriptionCard from './components/SubscriptionCard';

const ACTIONS = {
  TOGGLE: 'toggle',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.TOGGLE:
      Object.keys(state).forEach((key: any) => {
        state[key] = false;
      });
      return {
        ...state,
        [action.key]: !state[action.key],
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [shop, setShop] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [subscriptions, setSubscriptions] = useState<SubscriptionNode[]>();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  // toast
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isToastError, setIsToastError] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('');

  const [state, dispatch] = useReducer(reducer, () => {
    const count = subscriptions?.length;
    if (count) {
      const initialState: { [key: number]: boolean } = {};
      for (let i = 0; i < count; i++) {
        initialState[i] = false;
      }
      return initialState;
    }
    return null;
  });

  const getSubscriptions = async (
    shopName: string,
    accessToken: string,
    customer: string
  ) => {
    try {
      const response = await fetch(`/apps/app_proxy/subscriptions`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: accessToken,
          shop: shopName,
          customerId: customer,
        }),
      });
      const data = await response.json();
      console.log('DATA', data);
      setSubscriptions(data);
      setLoading(false);
    } catch (e: any) {
      console.log('ERROR', e.message);
      setIsToastError(true);
      setToastMsg('ERROR, Failed to get Subscriptions.');
      setShowToast(true);
      handleHideToast();
      accountRedirect();
    }
  };

  useEffect(() => {
    const params = queryString.parse(window.location.search);
    if (params.customer_id) {
      const shopName = params.shop as string;
      const customer = params.customer_id as string;
      const accessToken = params.token as string;
      if (shopName && accessToken && customer) {
        setShop(shopName);
        setToken(accessToken);
        setCustomerId(customer);
        getSubscriptions(shopName, accessToken, customer);
      }
    }
  }, []);

  const updateStatus = async (
    customerId: string,
    subscriptionId: string,
    status: string
  ) => {
    try {
      const response = await fetch(`/apps/app_proxy/subscription/edit`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          shop: shop,
          customerId: customerId,
          subscriptionContractId: subscriptionId,
          status: status,
        }),
      });
      const data = await response.json();
      setIsToastError(false);
      setToastMsg('Updated Successfully!');
      setShowToast(true);
      handleHideToast();
      if (data.updatedSubscriptionContractId) {
        if (shop && customerId && token) {
          getSubscriptions(shop, token, customerId);
        }
      }
    } catch (e: any) {
      console.log('ERROR', e.message);
      setIsToastError(true);
      setToastMsg('ERROR, Failed to Update.');
      setShowToast(true);
      handleHideToast();
      accountRedirect();
    }
  };

  const updatePaymentMethod = async (
    customerId: string,
    paymentMethodId: string
  ) => {
    try {
      const response = await fetch(`/apps/app_proxy/subscription/payment`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          shop: shop,
          customerId: customerId,
          paymentMethodId: paymentMethodId,
        }),
      });
      const data = await response.json();
      if (data.customerId) {
        setIsToastError(false);
        setToastMsg('Payment Method Update Email Sent.');
        setShowToast(true);
        handleHideToast();
      }
    } catch (e: any) {
      console.log('ERROR', e.message);
      setIsToastError(true);
      setToastMsg('ERROR, Failed to Send Update Email.');
      setShowToast(true);
      handleHideToast();
      accountRedirect();
    }
  };

  const handleUpdateAddress = (subscription: Subscription) => {
    setSubscription(subscription);
    setOpen(true);
  };

  const handleHideToast = () => {
    setTimeout(() => {
      setIsToastError(false);
      setToastMsg('');
      setShowToast(false);
    }, 3000);
  };

  const handleSubscriptionToggle = (type: string, key: number) => {
    dispatch({ type: type, key: key });
  };

  return (
    <div className="App container page-width">
      {loading ? (
        <Loader />
      ) : (
        <>
          {open && customerId && subscription && (
            <ShippingAddressForm
              shop={shop}
              customerId={customerId}
              token={token}
              subscription={subscription}
              setOpen={setOpen}
              getSubscriptions={getSubscriptions}
            />
          )}
          {!open && customerId && subscriptions && (
            <div>
              <h3>Subscriptions</h3>
              <div className="subscriptions-container">
                <div className="subscriptions">
                  {subscriptions.length > 0 ? (
                    subscriptions.map(
                      (subscription: SubscriptionNode, index: number) => {
                        return (
                          <SubscriptionCard
                            key={index}
                            index={index}
                            subscription={subscription}
                            customerId={customerId}
                            updateStatus={updateStatus}
                            updatePaymentMethod={updatePaymentMethod}
                            handleUpdateAddress={handleUpdateAddress}
                            handleSubscriptionToggle={handleSubscriptionToggle}
                            expanded={state[index]}
                          />
                        );
                      }
                    )
                  ) : (
                    <p style={{ textAlign: 'center' }}>
                      No Subscriptions Found!
                      <br />
                      <a href="/account">Go Back To Account.</a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Toast show={showToast} isError={isToastError} toastMsg={toastMsg} />
    </div>
  );
};

export default App;
