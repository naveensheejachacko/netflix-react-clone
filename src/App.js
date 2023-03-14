import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import {originals,trending,action,comedy,romance} from './urls'


function App() {
  return (
<div className='App'>
  <NavBar/>
  <Banner/>
  <RowPost url={originals} title='Netflix Originals' />
  <RowPost url={trending} title="Trending" isSmall/>
  <RowPost url={action} title="Action" isSmall/>
  <RowPost url={comedy} title="Comedy" isSmall/>
  <RowPost url={romance} title="Romance" isSmall />
  <Footer />
</div>
  );
}

export default App;
