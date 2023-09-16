import React from 'react';

import reactLogo from 'assets/react.svg';
import viteLogo from 'assets/vite.svg';

import './Home.css';

function Home() {
  return (
    <div className='home'>
      <>
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Electron + Vite + React</h1>
      </>
    </div>
  );
}

export default Home;
