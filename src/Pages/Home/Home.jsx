import React from 'react';
import HeroHome from '../../components/HeroHome/HeroHome'
import Main from '../../Pages/Main/Main';
import Thanks from "../../component/Thanks/thanks";
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
      <Thanks title="Thank you for your Interest in SquareUp." Text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>
    </>
  )
}

export default Home
