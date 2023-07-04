import propTypes from 'prop-types';

import { FriendItem } from './FriendItem/FriendItem';
import friendListCSS from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={friendListCSS['friend-list']}>
      <FriendItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};
