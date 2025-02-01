import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../../components/common/UserHeader/UserHeader';
import Message from '../../components/specific/Message/Message';
import UserInfo from '../../components/specific/UserInfo/UserInfo';
import Quiz from '../../components/specific/Quiz/Quiz';
import Feed from '../../components/specific/Feed/Feed';
import Recognition from '../../components/specific/Recognition/Recognition';
import styled from 'styled-components';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const user = location.state?.user; // Correctly assign user without destructuring
  const [newUser, setNewUser] = useState(user);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <UserHeader user={newUser}/>
      <main className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <Message />
          <UserInfo />
        </div>
        <FeedQuiz className="grid grid-cols-3 gap-8 mb-8">
          <Quiz />
          <Feed user={newUser}/>
        </FeedQuiz>
        <div className="grid grid-cols-2 gap-8">
          <Recognition />
        </div>
      </main>
    </div>
  );
};

const FeedQuiz = styled.div`
  min-height: 452px;
`;

export default Dashboard;
