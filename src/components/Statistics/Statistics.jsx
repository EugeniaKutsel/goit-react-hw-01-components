import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css";

const Statistics = ({ title, stats }) => {
  const randomColor =
    '#' + (((1 << 24) * Math.random()) | 0).toString(16) + '35';
  return (
<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.stat__list} style={{ backgroundColor: `${randomColor}` }}>
      {stats.map(({id, label, percentage}) => (
        <li className={css.stat__item} key={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
        ))}
  </ul>
</section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}

export default Statistics;