import propTypes from 'prop-types';
import statisticItemCSS from './StatisticItem.module.css';
import { getRandomHexColor } from '../../../support/getRandomHexColor';

export const StatisticItem = ({ data }) => {
  return data.map(({ id, label, percentage }) => {
    return (
      <li
        key={id}
        className={statisticItemCSS.item}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <span className={statisticItemCSS.label}>{label}</span>
        <span className={statisticItemCSS.percentage}>{percentage}%</span>
      </li>
    );
  });
};

StatisticItem.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};
