export const changeForMoney = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
