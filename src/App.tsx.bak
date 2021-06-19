import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.css';
import { formatDate, formatSubscriptionId } from './utils';

const App = () => {
  console.log(window.location);
  const shop_name = 'https://sample-embedded-app-development.myshopify.com';

  const [customerId, setCustomerId] = useState<string | null>(null);
  const [subscriptions, setSubscriptions] = useState<any[]>();

  const getSubscriptions = async (customerId: string) => {
    try {
      console.log('LETS POST');
      const response = await fetch(
        `${shop_name}/apps/app_proxy/subscriptions`,
        {
          method: 'POST',
          body: JSON.stringify({
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
    console.log('ON MOUNT');
    const values = queryString.parse(window.location.search);
    console.log('VALUSES', values);
    if (values.customerId) {
      const customer = values.customerId as string;
      console.log('CUSTOMER', customer);
      setCustomerId(customer);
      getSubscriptions(customer);
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
            customerId: customerId,
            subscriptionContractId: subscriptionId,
            status: status,
          }),
        }
      );
      const data = await response.json();
      getSubscriptions(customerId);
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
              {subscriptions.map((subscription: any) => {
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
                      {s.lines.edges.map((line: any) => {
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

export default App;
