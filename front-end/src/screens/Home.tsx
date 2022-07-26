import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import getFavourites from '../api/favouritesApi';
import FavouritesCard from '../components/FavouritesCard';
import Header from '../components/Header';

const Home = () => {
  const [favouritesList, setFavouritesList] = useState([]);

  const fetchFavouritesList = useCallback(async () => {
    const data = await getFavourites();
    setFavouritesList(data);
  }, [])

  useEffect(() => {
    fetchFavouritesList()
    .catch(console.error);;
  }, [fetchFavouritesList])

  return (
    <div className="App">
      <Header />
      <Container className='mt-5'>
        <Container className='favourites-list'>
          <h2>Favourites List</h2>
          <Row className='mt-3'>
            { favouritesList?.map((favRepo) => (
                <FavouritesCard favRepo={favRepo}/>
              )
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;