import propTypes from 'prop-types';

import statisticCSS from './Statistics.module.css';
import { getRandomHexColor } from 'support/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticCSS.statistics}>
      <h2 className={statisticCSS.title}>{title ? title : 'Upload stats'}</h2>

      <ul className={statisticCSS.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={statisticCSS.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={statisticCSS.label}>{label}</span>
            <span className={statisticCSS.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: propTypes.string,
  stats: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }).isRequired,
};
