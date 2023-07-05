import propTypes from 'prop-types';

import TransactionHistoryCSS from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={TransactionHistoryCSS['transaction-history']}>
      <thead>
        <tr className={TransactionHistoryCSS['thead-block']}>
          <th className={TransactionHistoryCSS['thead-title']}>Type</th>
          <th className={TransactionHistoryCSS['thead-title']}>Amount</th>
          <th className={TransactionHistoryCSS['thead-title']}>Currency</th>
        </tr>
      </thead>

      <tbody className={TransactionHistoryCSS['tbody-units']}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={TransactionHistoryCSS.tb_row}>
            <td className={TransactionHistoryCSS.tb_row_unit}>{type}</td>
            <td className={TransactionHistoryCSS.tb_row_unit}>{amount}</td>
            <td className={TransactionHistoryCSS.tb_row_unit}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ).isRequired,
};
