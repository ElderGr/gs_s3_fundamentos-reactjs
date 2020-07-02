const formatMoney = (value: number): string =>
  new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatMoney;
