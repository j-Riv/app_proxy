import React from 'react';
import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import { formatDate, formatSubscriptionId } from '../utils';
import {
  SubscriptionNode,
  Subscription,
  LineNode,
} from '../types/subscription';

interface Props {
  index: number;
  subscription: SubscriptionNode;
  customerId: string;
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
  handleSubscriptionToggle: (type: string, key: number) => void;
  expanded: boolean;
}

const SubscriptionCard: React.FC<Props> = ({
  index,
  subscription,
  customerId,
  updateStatus,
  updatePaymentMethod,
  handleUpdateAddress,
  handleSubscriptionToggle,
  expanded,
}) => {
  const s = subscription.node;

  const getTotalPrice = () => {
    let total = 0;
    s.lines.edges.forEach((line: LineNode) => {
      const l = line.node;
      total += parseFloat(l.currentPrice.amount) * parseInt(l.quantity);
    });
    // add shipping
    total += parseFloat(s.deliveryPrice.amount);
    return total.toFixed(2);
  };

  const getItemCount = () => {
    let total = 0;
    s.lines.edges.forEach((line: LineNode) => {
      const l = line.node;
      total += parseInt(l.quantity);
    });
    return total;
  };
  console.log('INDEX', index);
  return (
    <SubscriptionContainer
      className="section subscription"
      onClick={() => handleSubscriptionToggle('toggle', index)}
    >
      <div className="subscription-details">
        <div className="subscription-id">
          <p className="text-bold">ID</p>
          <p>#{formatSubscriptionId(s.id)}</p>
        </div>
        <div className="subscription-status">
          <p className="text-bold">STATUS</p>
          <p>{s.status}</p>
        </div>
        <div className="subscription-frequency">
          <p className="text-bold">FREQUENCY</p>
          <p>
            Every {s.billingPolicy.intervalCount}{' '}
            {s.billingPolicy.interval.toLowerCase()}
          </p>
        </div>
        <div className="subscripiton-next-order-date">
          <p className="text-bold">NEXT ORDER DATE</p>
          <p>{formatDate(s.nextBillingDate)}</p>
        </div>
        <div className="subscription-item-count">
          <p className="text-bold">ITEMS</p>
          <p>{getItemCount()}</p>
        </div>
        <div className="subscription-total">
          <p className="text-bold">TOTAL</p>
          <p>${getTotalPrice()}</p>
        </div>
      </div>

      {expanded && (
        <div className="collapsible">
          <div className="subscription-more-details">
            <p>
              <span className="text-bold">SHIPPING: </span> $
              {parseFloat(s.deliveryPrice.amount).toFixed(2)}
            </p>
          </div>
          <div className="order-box">
            <div className="grid-container">
              {s.lines.edges.map((line: LineNode) => {
                const l = line.node;
                return (
                  <div key={line.node.id} className="product">
                    <div className="product-image">
                      {l.variantImage && (
                        <img
                          key={line.node.id}
                          src={l.variantImage.originalSrc}
                          alt={l.variantImage.altText}
                          className="responsive-img"
                        />
                      )}
                    </div>
                    <div className="product-information">
                      <h4 className="product-title">
                        {l.title} {l.variantTitle && ` - ${l.variantTitle}`}
                      </h4>
                      <p>${parseFloat(l.currentPrice.amount).toFixed(2)}</p>
                    </div>
                    <div className="product-quantity">
                      <p>Quantity: {l.quantity}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ActionButtons
            customerId={customerId}
            subscription={s}
            updateStatus={updateStatus}
            updatePaymentMethod={updatePaymentMethod}
            handleUpdateAddress={handleUpdateAddress}
          />
        </div>
      )}
    </SubscriptionContainer>
  );
};

const SubscriptionContainer = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 1em;
  margin-bottom: 1em;
  .subscription-details {
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #000;
    background-color: #ccc;
  }
  .subscription-more-details {
    padding: 1em;
  }
  .subscription-details p {
    margin: 0;
  }
  .product {
    display: grid;
    grid-template-columns: 20% 1fr 20%;
    grid-template-rows: 1fr;
  }
  .product div {
    padding: 1em;
  }
  .product-title {
    color: var(--red);
    font-size: 1.3em;
  }
  @media only screen and (max-width: 768px) {
    .subscription-details {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (max-width: 468px) {
    .subscription-details {
      grid-template-columns: repeat(2, 1fr);
    }
    .subscription-details div {
      padding: 1em 0;
    }
    .product {
      grid-template-columns: 100%;
    }
  }
`;

export default SubscriptionCard;
