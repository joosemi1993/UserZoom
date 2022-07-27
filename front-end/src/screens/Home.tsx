import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import favouritesApi from '../api/favouritesApi';
import FavouritesCard from '../components/FavouritesCard';

const Home = () => {
  const [favouritesList, setFavouritesList] = useState([]);

  const fetchFavouritesList = useCallback(async () => {
    const data = await favouritesApi.getFavourites();
    setFavouritesList(data);
  }, [])

  useEffect(() => {
    fetchFavouritesList()
    .catch(console.error);;
  }, [fetchFavouritesList])

  return (
    <div className="home">
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