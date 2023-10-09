import React from 'react';
import CommanData from './CommanData';

const Home = () => {
  return (
    <CommanData
        names="Welcome To Home Page"
        name2 = "Get The Latest Update Info Of Your City"
        imgSrc="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/trails/force_com_dev_beginner/39ed2e90cae0e0428a8ea1a110425370_icon.png"
        visit = "/service"
        btnName = "Get Started"
      />
  );
}

export default Home;
