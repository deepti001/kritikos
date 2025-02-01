import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroBanner from '../../components/common/HeroBanner/HeroBanner';
import UserHeader from '../../components/common/UserHeader/UserHeader';
import Message from '../../components/specific/Message/Message';
import UserInfo from '../../components/specific/UserInfo/UserInfo';
import Quiz from '../../components/specific/Quiz/Quiz';
import Feed from '../../components/specific/Feed/Feed';
import Recognition from '../../components/specific/Recognition/Recognition';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <UserHeader user={user}/>
      <main className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <Message />
          <UserInfo />
        </div>
        <div className="grid grid-cols-3 gap-8 mb-8">
          <Quiz />
          <Feed />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Recognition />
        </div>


      </main>

    </div>
  );
};

export default Dashboard;
