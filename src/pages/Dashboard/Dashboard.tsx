import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroBanner from '../../components/common/HeroBanner/HeroBanner';
import UserHeader from '../../components/common/UserHeader/UserHeader';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <UserHeader user={user}/>

    </div>
  );
};

export default Dashboard;
