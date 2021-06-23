import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { formatDate, formatSubscriptionId } from './utils';
import { SubscriptionNode, Subscription, LineNode } from './types/subscription';
import ShippingAddressForm from './components/ShippingAddressForm';
import ActionButtons from './components/ActionButtons';
import Loader from './components/Loader';

const App = () => {
  console.log(window.location);
  const shopName = 'https://sample-embedded-app-development.myshopify.com';
  const [loading, setLoading] = useState<boolean>(true);
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [subscriptions, setSubscriptions] = useState<SubscriptionNode[]>();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const getSubscriptions = async (customerId: string) => {
    try {
      console.log('LETS POST');
      const response = await fetch(`${shopName}/apps/app_proxy/subscriptions`, {
        method: 'POST',
        body: JSON.stringify({
          customerId: customerId,
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
    }
  };

  useEffect(() => {
    const values = queryString.parse(window.location.search);
    if (values.customer_id) {
      const customer = values.customer_id as string;
      setCustomerId(customer);
      getSubscriptions(customer);
    }
  }, []);

  const updateStatus = async (
    customerId: string,
    subscriptionId: string,
    status: string
  ) => {
    try {
      const response = await fetch(
        `${shopName}/apps/app_proxy/subscription/edit`,
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
      M.toast({ html: 'Updated Successfully!' });
      getSubscriptions(customerId);
      console.log('UPDATE STATUS', data);
    } catch (e) {
      console.log('ERROR', e.message);
      M.toast({ html: 'ERROR: Failed to Update.', classes: 'toast-error' });
    }
  };

  const updatePaymentMethod = async (
    customerId: string,
    paymentMethodId: string
  ) => {
    try {
      const response = await fetch(
        `${shopName}/apps/app_proxy/subscription/payment`,
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
      // alert('Payment Method Update Email Sent!');
      M.toast({ html: 'Payment Method Update Email Sent.' });
    } catch (e) {
      console.log('ERROR', e.message);
      M.toast({
        html: 'ERROR: Failed to Send Update Email.',
        classes: 'toast-error',
      });
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
              shopName={shopName}
              customerId={customerId}
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
                  {subscriptions.map((subscription: SubscriptionNode) => {
                    const s = subscription.node;
                    return (
                      <div
                        key={subscription.node.id}
                        className="row subscription"
                      >
                        <div className="id col s12 m6">
                          <b>ID: </b>
                          {formatSubscriptionId(s.id)}
                        </div>
                        <div className="status col s12 m6">
                          <b>Status: </b>
                          {s.status}
                        </div>
                        <div className="billing-policy col s12">
                          <b>Billing Policy: </b> Every{' '}
                          {s.billingPolicy.intervalCount}{' '}
                          {s.billingPolicy.interval.toLowerCase()}
                          (s)
                        </div>
                        <div className="next-billing-date col s12">
                          <b>Next Billing Date: </b>
                          {formatDate(s.nextBillingDate)}
                        </div>

                        <div className="col s12">
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
                  })}
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
