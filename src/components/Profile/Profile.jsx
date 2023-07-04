import propTypes from 'prop-types';
import profileCSS from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={profileCSS.profile}>
      <div className={profileCSS.description}>
        <img src={avatar} alt={username} className={profileCSS.avatar} />
        <p className={profileCSS.name}>{username}</p>
        <p className={profileCSS.tag}>@{tag}</p>
        <p className={profileCSS.location}>{location}</p>
      </div>

      <ul className={profileCSS.stats}>
        <li className={`${profileCSS.statsItem} ${profileCSS.first}`}>
          <span className={profileCSS.label}>Followers</span>
          <span className={profileCSS.quantity}>{followers}</span>
        </li>
        <li className={profileCSS.statsItem}>
          <span className={profileCSS.label}>Views</span>
          <span className={profileCSS.quantity}>{views}</span>
        </li>
        <li className={`${profileCSS.statsItem} ${profileCSS.last}`}>
          <span className={profileCSS.label}>Likes</span>
          <span className={profileCSS.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};
