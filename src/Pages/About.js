import React from 'react';
import aboutimg from '../images/About image.gif';
import Common from '../components/Common';

const About = () => {
  return (
    <>
      <Common name='Welcome to About Page of' imgsrc={aboutimg} visit='/contact' btname="Contact Now" />
    </>
  );
}

export default About;
