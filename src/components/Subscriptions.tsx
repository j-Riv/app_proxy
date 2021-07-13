import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import '../App.css';
import { formatDate, formatSubscriptionId } from '../utils';
import { SubscriptionNode, LineNode } from '../types/subscription';

const Subscriptions = () => {
  console.log(window.location);
  const shop_name = 'https://sample-embedded-app-development.myshopify.com';
  const [shop, setShop] = useState<string>();
  const [token, setToken] = useState<string>();
  const [customerId, setCustomerId] = useState<string>();
  const [subscriptions, setSubscriptions] = useState<SubscriptionNode[]>();

  const getSubscriptions = async (
    shop: string,
    customerId: string,
    token: string
  ) => {
    try {
      console.log('LETS POST THIS SHIT');
      // shop_name
      const response = await fetch(
        `https://${shop}/apps/app_proxy/subscriptions`,
        {
          method: 'POST',
          body: JSON.stringify({
            token: token,
            customerId: customerId,
          }),
        }
      );
      console.log('RESPONSE', response);
      const data = await response.json();
      console.log('DATA', data);
      setSubscriptions(data);
    } catch (e) {
      console.log('ERROR', e.message);
    }
  };

  useEffect(() => {
    console.log('ON MOUNT ===>');
    const params = queryString.parse(window.location.search);
    console.log('PARAMS', params);
    if (params.customerId) {
      const shopName = params.shop as string;
      const customer = params.customerId as string;
      const accessToken = params.token as string;
      console.log('CUSTOMER', customer);
      if (shopName && accessToken && customer) {
        setShop(shopName);
        setToken(accessToken);
        setCustomerId(customer);
        getSubscriptions(shopName, customer, accessToken);
      }
    }
  }, []);

  enum Status {
    ACTIVE = 'ACTIVE',
    PAUSE = 'PAUSED',
    CANCEL = 'CANCELLED',
  }

  const updateStatus = async (
    customerId: string,
    subscriptionId: string,
    status: string
  ) => {
    try {
      console.log('SENDING BODY', {
        customerId: customerId,
        subscriptionContractId: subscriptionId,
        status: status,
      });
      const response = await fetch(
        `${shop_name}/apps/app_proxy/subscription/edit`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            customerId: customerId,
            subscriptionContractId: subscriptionId,
            status: status,
          }),
        }
      );
      const data = await response.json();
      if (shop && customerId && token) {
        getSubscriptions(shop, customerId, token);
      }
      console.log('UPDATE STATUS', data);
    } catch (e) {
      console.log('ERROR', e.message);
    }
  };

  const updatePaymentMethod = async (
    customerId: string,
    paymentMethodId: string
  ) => {
    try {
      const response = await fetch(
        `${shop_name}/apps/app_proxy/subscription/payment`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            customerId: customerId,
            paymentMethodId: paymentMethodId,
          }),
        }
      );
      const data = await response.json();
      console.log('UPDATE PAYMENT', data);
      alert('Payment Method Update Email Sent!');
    } catch (e) {
      console.log('ERROR', e.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {customerId && subscriptions && (
          <table className="responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Status</th>
                <th scope="col">Billing Policy</th>
                <th scope="col">Next Billing Date</th>
                <th scope="col">Products</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((subscription: SubscriptionNode) => {
                console.log('SUBSCRIPTION', subscription);
                const s = subscription.node;
                return (
                  <tr key={subscription.node.id}>
                    <td>{formatSubscriptionId(s.id)}</td>
                    <td>{s.status}</td>
                    <td>
                      {s.billingPolicy.intervalCount}{' '}
                      {s.billingPolicy.interval.toLowerCase()}
                      (s)
                    </td>
                    <td>{formatDate(s.nextBillingDate)}</td>
                    <td>
                      {s.lines.edges.map((line: LineNode) => {
                        const l = line.node;
                        return (
                          <span key={line.node.id}>
                            {l.title} - {l.variantTitle} x {l.quantity}
                          </span>
                        );
                      })}
                    </td>
                    <td>
                      {s.status === 'ACTIVE' ? (
                        <button
                          className="btn btn--small"
                          type="button"
                          onClick={() =>
                            updateStatus(customerId, s.id, Status.PAUSE)
                          }
                        >
                          PAUSE
                        </button>
                      ) : (
                        <button
                          className="btn btn--small"
                          type="button"
                          onClick={() =>
                            updateStatus(customerId, s.id, Status.ACTIVE)
                          }
                        >
                          Activate
                        </button>
                      )}
                      <button
                        className="btn btn--small"
                        type="button"
                        onClick={() =>
                          updateStatus(customerId, s.id, Status.CANCEL)
                        }
                      >
                        CANCEL
                      </button>
                      <button
                        className="btn btn--small"
                        type="button"
                        onClick={() =>
                          updatePaymentMethod(
                            customerId,
                            s.customerPaymentMethod.id
                          )
                        }
                      >
                        UPDATE PAYMENT METHOD
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
};

export default Subscriptions;
