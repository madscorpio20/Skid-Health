import React from 'react';
import pic1 from '../assets/pic1.jpg';

const LandingPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${pic1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      height: '86vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      color: 'white',
      fontSize: '24px',
    }}>
      <h1>Welcome to Skid Health</h1>
      <p>Protecting Children’s Health today for a better tomorrow</p>
      <p>SKIDS empowers schools and parents to monitor their children’s health and identify risks for early interventions</p>
    </div>
  );
}

export default LandingPage;
