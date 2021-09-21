import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import './App.css';
import { formatDate, formatSubscriptionId, accountRedirect } from './utils';
import { SubscriptionNode, Subscription, LineNode } from './types/subscription';
import ShippingAddressForm from './components/ShippingAddressForm';
import ActionButtons from './components/ActionButtons';
import Loader from './components/Loader';
import Toast from './components/Toast';

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
      if (shop && customerId && token) {
        getSubscriptions(shop, token, customerId);
      }
      console.log('UPDATE STATUS', data);
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
      console.log('UPDATE PAYMENT', data);
      setIsToastError(false);
      setToastMsg('Payment Method Update Email Sent.');
      setShowToast(true);
      handleHideToast();
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
                    subscriptions.map((subscription: SubscriptionNode) => {
                      const s = subscription.node;
                      return (
                        <>
                          <SubscriptionContainer
                            key={subscription.node.id}
                            className="section subscription"
                          >
                            <GridTwoColumn>
                              <div className="subscription-id">
                                #{formatSubscriptionId(s.id)}
                              </div>
                              <div className="subscription-status">
                                <span className="align-right">
                                  <span className="text-bold">STATUS: </span>
                                  {s.status}
                                </span>
                              </div>
                            </GridTwoColumn>
                            <div className="subscription-billing-policy">
                              <span className="text-bold">DELIVERY: </span>{' '}
                              Every {s.billingPolicy.intervalCount}{' '}
                              {s.billingPolicy.interval.toLowerCase()}
                              (s)
                            </div>
                            <div className="subscription-next-billing-date">
                              <span className="text-bold">
                                NEXT ORDER DATE:{' '}
                              </span>
                              {formatDate(s.nextBillingDate)}
                            </div>
                            <div className="subscription-delivery-price">
                              <span className="text-bold">SHIPPING COST: </span>
                              ${parseFloat(s.deliveryPrice.amount).toFixed(2)}
                            </div>
                            <SubscriptionProducts>
                              <div className="grid-container">
                                {s.lines.edges.map((line: LineNode) => {
                                  const l = line.node;
                                  return (
                                    <div key={line.node.id} className="product">
                                      {l.variantImage && (
                                        <img
                                          key={line.node.id}
                                          src={l.variantImage.originalSrc}
                                          alt={l.variantImage.altText}
                                          className="responsive-img"
                                        />
                                      )}
                                      <span>
                                        {l.title}
                                        {l.variantTitle &&
                                          ` - ${l.variantTitle}`}
                                        <br />$
                                        {parseFloat(
                                          l.currentPrice.amount
                                        ).toFixed(2)}{' '}
                                        x {l.quantity}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </SubscriptionProducts>
                            <ActionButtons
                              customerId={customerId}
                              subscription={s}
                              updateStatus={updateStatus}
                              updatePaymentMethod={updatePaymentMethod}
                              handleUpdateAddress={handleUpdateAddress}
                            />
                          </SubscriptionContainer>
                          <div className="divider"></div>
                        </>
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
      <Toast show={showToast} isError={isToastError} toastMsg={toastMsg} />
    </div>
  );
};

const SubscriptionProducts = styled.div`
  .grid-container {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(4, 1fr);
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 468px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const SubscriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, fr);
  grid-gap: 1em;
`;

const GridTwoColumn = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
`;

export default App;
