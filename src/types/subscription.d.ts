export interface SubscriptionNode {
  node: Subscription
}

export interface Subscription {
  id: string
  status: string
  billingPolicy: {
    intervalCount: number
    interval: string
  }
  nextBillingDate: string
  deliveryPrice: {
    amount: string
  }
  customerPaymentMethod: {
    id: string
  }
  deliveryMethod: {
    address: {
      company: string
      address1: string
      address2: string
      city: string
      province: string
      country: string
      zip: string
      firstName: string
      lastName: string
      phone: string
    }
  }
  lines: {
    edges: LineNode[]
  }
}

export interface LineNode {
  node: Line
}

export interface Line {
  id: string
  title: string
  variantTitle: string
  quantity: string
  variantImage: {
    altText: string
    originalSrc: string
  }
  currentPrice: {
    amount: string
  }
  pricingPolicy: {
    basePrice: {
      amount: string
    }
  }
}
