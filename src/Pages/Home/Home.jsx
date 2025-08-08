import React from 'react';
import HeroHome from '../../components/HeroHome/HeroHome'
import Main from '../../Pages/Main/Main';
import './Home.css';
const Home = () => {

  return (
    <>
      <HeroHome image="/assets/img/mountain.png"
        title="A Digital Product Studio that will Work"
        btn1="Our Works"
        btn2="Contact Us"
        description="Trusted By 250+ Companies"
      />

      <div className="home">
        <Main />
      </div>
    </>
  )
}

export default Home
