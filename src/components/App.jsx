import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from '../data/user_data.json';
import statistics_data from '../data/statistics_data.json';
import friends from '../data/friends_data.json';
import transactions from '../data/transactions_data.json';

import appCSS from './App.module.css';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div className={appCSS.container}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={statistics_data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
