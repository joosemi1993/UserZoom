import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getFavourites, removeFromFavourites } from '../api/favouritesApi';
import FavouritesCard from '../components/FavouritesCard';
import { RepositoryOutput } from '../interface/github';

const Home = () => {
  const [favouritesList, setFavouritesList] = useState<RepositoryOutput[]>([]);

  const fetchFavouritesList = useCallback(async () => {
    const data = await getFavourites();
    setFavouritesList(data);
  }, [])

  useEffect(() => {    
    fetchFavouritesList()
    .catch(console.error);
  }, [fetchFavouritesList]);

  const fetchRemoveFavourite = useCallback(async (id: number, owner: string, name: string) => {
    await removeFromFavourites(owner, name);
    const test = favouritesList.filter((repo) => repo.id !== id)
    setFavouritesList(test);
  }, [favouritesList]);

  const handleFavourites = async (id: number, owner: string, name: string) => { 
    await fetchRemoveFavourite(id, owner, name);
  };

  return (
    <div className="home">
      <Container className='mt-5'>
        <Container className='favourites-list'>
          <h2>My Favourites List</h2>
          <Row className='mt-3'>
            { React.Children.toArray(favouritesList?.map((favRepo) => (
                <FavouritesCard favRepo={favRepo} handleOnClick={handleFavourites} />
              )
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;