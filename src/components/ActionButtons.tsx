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

  if (subscription.status !== Status.CANCEL) {
    return (
      <ActionsContainer>
        <div className="actions-message">
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
        <div className="actions-buttons-container">
          {subscription.status === Status.ACTIVE ? (
            <button
              className="btn yellow-btn"
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
                className="btn yellow-btn"
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
              className="btn red-btn"
              type="button"
              onClick={() =>
                updateStatus(customerId, subscription.id, Status.CANCEL)
              }
            >
              CANCEL
            </button>
          )}
          <button
            className="btn yellow-btn"
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
            className="btn red-btn"
            type="button"
            onClick={() => handleUpdateAddress(subscription)}
          >
            UPDATE SHIP ADDRESS
          </button>
        </div>
      </ActionsContainer>
    );
  }
  return <div></div>;
};

export default ActionButtons;

const ActionsContainer = styled.div`
  .actions-message {
    padding: 0 1em;
  }
  .actions-buttons-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .actions-buttons-container button {
    margin: 1em;
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 1em;
    padding: 10px 15px;
    line-height: 1;
    text-align: center;
  }
  .yellow-btn {
    background-color: var(--yellow);
  }
  .yellow-btn:hover {
    background-color: var(--yellow-focus);
  }
  .red-btn {
    background-color: var(--red);
  }
  .red-btn:hover {
    background-color: var(--red-focus);
  }
  @media only screen and (max-width: 768px) {
    .actions-buttons-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .actions-buttons-container button {
      margin: 0.5em;
    }
  }
  @media only screen and (max-width: 468px) {
    .actions-buttons-container {
      display: grid;
      grid-template-columns: 1fr;
      padding: 1em;
    }
    .actions-buttons-container button {
      margin: 0.5em 0;
    }
  }
`;
