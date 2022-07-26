import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';

const Home = () => {

  return (
    <div className="App">
      <Header />
      <Container className='mt-5'>
        <Container className='favourites-list'>
          <h2>Favourites List</h2>
        </Container>
      </Container>
    </div>
  );
}

export default Home;