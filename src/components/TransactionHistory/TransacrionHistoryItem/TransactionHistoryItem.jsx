import propTypes from 'prop-types';
import TransactionHistoryItemCSS from './TransactionHistiryItem.module.css';

export const TransactionHistoryItem = ({ items }) => {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id} className={TransactionHistoryItemCSS.tb_row}>
        <td className={TransactionHistoryItemCSS.tb_row_unit}>{type}</td>
        <td className={TransactionHistoryItemCSS.tb_row_unit}>{amount}</td>
        <td className={TransactionHistoryItemCSS.tb_row_unit}>{currency}</td>
      </tr>
    );
  });
};

TransactionHistoryItem.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};
