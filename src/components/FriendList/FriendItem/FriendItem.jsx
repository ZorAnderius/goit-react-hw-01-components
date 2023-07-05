import propTypes from 'prop-types';
import friendItemCSS from './FriendItem.module.css';
import clsx from 'clsx';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li
      className={clsx(
        friendItemCSS.item,
        isOnline ? friendItemCSS['green-border'] : friendItemCSS['red-border']
      )}
    >
      <span
        className={clsx(
          friendItemCSS.status,
          isOnline ? friendItemCSS.green : friendItemCSS.red
        )}
      ></span>
      <div className={friendItemCSS.frame}>
        <img
          className={friendItemCSS.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
      </div>
      <p className={friendItemCSS.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
};
