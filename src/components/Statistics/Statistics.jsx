import propTypes from 'prop-types';
import { StatisticItem } from './StatisticItem/StatisticItem';

import statisticCSS from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticCSS.statistics}>
      <h2 className={statisticCSS.title}>{title ? title : 'Upload stats'}</h2>

      <ul className={statisticCSS.stat_list}>
        <StatisticItem data={stats} />
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
