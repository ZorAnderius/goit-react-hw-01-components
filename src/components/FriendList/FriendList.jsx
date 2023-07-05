import propTypes from 'prop-types';

import { FriendItem } from './FriendItem/FriendItem';
import friendListCSS from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={friendListCSS['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};
