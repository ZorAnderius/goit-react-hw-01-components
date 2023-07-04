import propTypes from 'prop-types';

import { TransactionHistoryItem } from './TransacrionHistoryItem/TransactionHistoryItem';
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
        <TransactionHistoryItem items={items} />
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
