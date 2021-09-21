import React from 'react';
import styled from 'styled-components';
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

  if (subscription.status !== 'CANCELLED') {
    return (
      <div className="actions-container">
        <div className="actions">
          <span className="text-bold">ACTIONS: </span>
        </div>
        <div className="actions">
          {subscription.status === 'ACTIVE' ? (
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
            subscription.status !== 'CANCELLED' && (
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
          {subscription.status !== 'CANCELLED' && (
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
