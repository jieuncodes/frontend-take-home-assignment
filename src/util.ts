export const currencyFormatter = (num: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(num);
};

export const formatMonth = (date: Date) =>
  date.toLocaleString('en-US', {
    month: 'long',
  });
