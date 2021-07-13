import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { formatDate, formatSubscriptionId, accountRedirect } from './utils';
import { SubscriptionNode, Subscription, LineNode } from './types/subscription';
import ShippingAddressForm from './components/ShippingAddressForm';
import ActionButtons from './components/ActionButtons';
import Loader from './components/Loader';

const App = () => {
  console.log(window.location);
  const [loading, setLoading] = useState<boolean>(true);
  const [shop, setShop] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [subscriptions, setSubscriptions] = useState<SubscriptionNode[]>();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [open, setOpen] = useState<boolean>(false);

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
      setSubscriptions(data);
      setLoading(false);
    } catch (e) {
      console.log('ERROR', e.message);
      M.toast({
        html: 'ERROR: Failed to get Subscriptions.',
        classes: 'toast-error',
      });
      // accountRedirect();
    }
  };

  useEffect(() => {
    const params = queryString.parse(window.location.search);
    console.log('PARAMS', params);
    if (params.customer_id) {
      const shopName = params.shop as string;
      const customer = params.customer_id as string;
      const accessToken = params.token as string;
      if (shopName && accessToken && customer) {
        console.log('OK LETS RUN THIS');
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
      M.toast({ html: 'Updated Successfully!' });
      if (shop && customerId && token) {
        getSubscriptions(shop, token, customerId);
      }
      console.log('UPDATE STATUS', data);
    } catch (e) {
      console.log('ERROR', e.message);
      M.toast({ html: 'ERROR: Failed to Update.', classes: 'toast-error' });
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
      console.log('UPDATE PAYMENT', data);
      // alert('Payment Method Update Email Sent!');
      M.toast({ html: 'Payment Method Update Email Sent.' });
    } catch (e) {
      console.log('ERROR', e.message);
      M.toast({
        html: 'ERROR: Failed to Send Update Email.',
        classes: 'toast-error',
      });
      accountRedirect();
    }
  };

  const handleUpdateAddress = (subscription: Subscription) => {
    setSubscription(subscription);
    setOpen(true);
  };

  return (
    <div className="App container">
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
            <div className="row">
              <h3>Subscriptions</h3>
              <div className="col s12">
                <div className="subscriptions">
                  {subscriptions.length > 0 ? (
                    subscriptions.map((subscription: SubscriptionNode) => {
                      const s = subscription.node;
                      return (
                        <div
                          key={subscription.node.id}
                          className="row subscription"
                        >
                          <div className="subscription-id col s12 m6">
                            #{formatSubscriptionId(s.id)}
                          </div>
                          <div className="subscription-status col s12 m6">
                            <b>Status: </b>
                            {s.status}
                          </div>
                          <div className="subscription-billing-policy col s12">
                            <b>Billing Policy: </b> Every{' '}
                            {s.billingPolicy.intervalCount}{' '}
                            {s.billingPolicy.interval.toLowerCase()}
                            (s)
                          </div>
                          <div className="subscription-next-billing-date col s12">
                            <b>Next Billing Date: </b>
                            {formatDate(s.nextBillingDate)}
                          </div>

                          <div className="subscription-products col s12">
                            <b>Products: </b>
                          </div>
                          {s.lines.edges.map((line: LineNode) => {
                            const l = line.node;
                            return (
                              <div key={line.node.id} className="col s12">
                                {l.title} - {l.variantTitle} x {l.quantity}
                              </div>
                            );
                          })}
                          <ActionButtons
                            customerId={customerId}
                            subscription={s}
                            updateStatus={updateStatus}
                            updatePaymentMethod={updatePaymentMethod}
                            handleUpdateAddress={handleUpdateAddress}
                          />
                        </div>
                      );
                    })
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
    </div>
  );
};

export default App;
