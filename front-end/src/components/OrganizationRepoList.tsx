import { useCallback, useEffect, useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { isFavourite, addToFavourites, removeFromFavourites } from '../api/favouritesApi';
import { RepositoryOutput } from '../interface/github';

interface Props {
  repository: RepositoryOutput;
}

const OrganizationRepoList = ({repository}: Props) => {
  const [isFavouriteRepo, setIsFavouriteRepo] = useState<Boolean>(false);
  const { name, description, owner } = repository;

  const fetchIsFavourite = useCallback(async () => {
    const getIsFavourite = await isFavourite(owner.name, name);
    setIsFavouriteRepo(getIsFavourite.isFavourite);
  }, [owner.name, name])

  useEffect(() => {
    if (Object.keys(repository).length) {
      fetchIsFavourite()
      .catch(console.error);
    }
  }, [fetchIsFavourite, setIsFavouriteRepo, repository])

  const handleFavourites = async () => {
    if (isFavouriteRepo) {
      await removeFromFavourites(owner.name, name);
      setIsFavouriteRepo(false);
    } else {
      await addToFavourites(owner.name, name);
      setIsFavouriteRepo(true);
    }
  }

  return (
    <ListGroup.Item>
      <Row>
        <Col>
          <h5>{name}</h5>
          <p>{description}</p>
        </Col>
        <Col style={{display:'flex', justifyContent:'right'}}>
          { isFavouriteRepo ? (
            <Button variant="danger" size="sm" onClick={handleFavourites}>
              Remove from Favourites
            </Button>
          ) : (
            <Button variant="primary" size="sm" onClick={handleFavourites}>
              Add to Favourites
            </Button>
          )}
          
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default OrganizationRepoList;