import React from 'react';
import { Subscription } from '../types/subscription';

interface Props {
  customerId: string;
  subscription: Subscription;
  updateStatus: (
    customerId: string,
    subscriptionId: string,
    status: string
  ) => Promise<void>;
  updatePaymentMethod: (
    customerId: string,
    paymentMethodId: string
  ) => Promise<void>;
  handleUpdateAddress: (subscription: Subscription) => void;
}

enum Status {
  ACTIVE = 'ACTIVE',
  PAUSE = 'PAUSED',
  CANCEL = 'CANCELLED',
}

const ActionButtons = (props: Props) => {
  const {
    customerId,
    subscription,
    updateStatus,
    updatePaymentMethod,
    handleUpdateAddress,
  } = props;

  if (subscription.status !== Status.CANCEL) {
    return (
      <div className="actions-container">
        <div className="actions">
          <span className="text-bold">ACTIONS: </span>
          {subscription.status === Status.PAUSE && (
            <>
              <br />
              <span className="text-italic">
                When re-activating a subscription. The next billing date will be
                set to 2 days from today.
              </span>
            </>
          )}
        </div>
        <div className="actions">
          {subscription.status === Status.ACTIVE ? (
            <button
              className="btn btn--small btn-action"
              type="button"
              onClick={() =>
                updateStatus(customerId, subscription.id, Status.PAUSE)
              }
            >
              PAUSE
            </button>
          ) : (
            subscription.status !== Status.CANCEL && (
              <button
                className="btn btn--small btn-action"
                type="button"
                onClick={() =>
                  updateStatus(customerId, subscription.id, Status.ACTIVE)
                }
              >
                Activate
              </button>
            )
          )}
          {subscription.status !== Status.CANCEL && (
            <button
              className="btn btn--small btn-action"
              type="button"
              onClick={() =>
                updateStatus(customerId, subscription.id, Status.CANCEL)
              }
            >
              CANCEL
            </button>
          )}
          <button
            className="btn btn--small btn-action"
            type="button"
            onClick={() =>
              updatePaymentMethod(
                customerId,
                subscription.customerPaymentMethod.id
              )
            }
          >
            UPDATE PAYMENT METHOD
          </button>
          <button
            className="btn btn--small btn-action"
            type="button"
            onClick={() => handleUpdateAddress(subscription)}
          >
            UPDATE SHIP ADDRESS
          </button>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ActionButtons;
