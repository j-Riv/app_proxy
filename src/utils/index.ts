export const formatDate = (date: string): string => {
  return date.split('T')[0];
};

export const formatSubscriptionId = (subscriptionId: string): string => {
  const str: string[] = subscriptionId.split('/');
  return str[str.length - 1];
};