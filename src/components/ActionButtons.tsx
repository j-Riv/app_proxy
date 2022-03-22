import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { Subscription } from "../types/subscription"

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
`

interface Props {
  customerId: string
  subscription: Subscription
  updateStatus: (
    customerId: string,
    subscriptionId: string,
    status: string
  ) => Promise<boolean>
  updatePaymentMethod: (
    customerId: string,
    paymentMethodId: string
  ) => Promise<boolean>
  handleUpdateAddress: (subscription: Subscription) => void
}

const ActionButtons = (props: Props) => {
  const {
    customerId,
    subscription,
    updateStatus,
    updatePaymentMethod,
    handleUpdateAddress,
  } = props

  enum Status {
    ACTIVE = "ACTIVE",
    PAUSE = "PAUSED",
    CANCEL = "CANCELLED",
  }

  const handleActivate = async () =>
    updateStatus(customerId, subscription.id, Status.ACTIVE)

  const handlePause = async () =>
    updateStatus(customerId, subscription.id, Status.PAUSE)

  const handleCancel = async () =>
    updateStatus(customerId, subscription.id, Status.CANCEL)

  const handleUpdatePaymentMethod = async () =>
    updatePaymentMethod(customerId, subscription.customerPaymentMethod.id)

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
            <Button
              color="yellow-btn"
              handleClick={handlePause}
              label="PAUSE SUBSCRIPTION"
            />
          ) : (
            subscription.status !== Status.CANCEL && (
              <Button
                color="yellow-btn"
                handleClick={handleActivate}
                label="ACTIVATE SUBSCRIPTION"
              />
            )
          )}
          {subscription.status !== Status.CANCEL && (
            <Button
              color="red-btn"
              handleClick={handleCancel}
              label="CANCEL SUBSCRIPTION"
            />
          )}
          <Button
            color="yellow-btn"
            handleClick={handleUpdatePaymentMethod}
            label="UPDATE PAYMENT METHOD"
          />
          <button
            className="btn red-btn"
            type="button"
            onClick={() => handleUpdateAddress(subscription)}
          >
            UPDATE SHIP ADDRESS
          </button>
        </div>
      </ActionsContainer>
    )
  }
  return <div />
}

export default ActionButtons
