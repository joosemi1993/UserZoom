import { useCallback, useEffect, useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegStar, FaStar } from "react-icons/fa";
import favouritesApi from '../api/favouritesApi';
import RepoModal from './RepoModal';

interface Props {
  repository: any;
}

const OrganizationRepoList = ({repository}: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { name, description, owner } = repository;

  const fetchIsFavourite = useCallback(async () => {
    const getIsFavurite = await favouritesApi.isFavourite(owner.name, name);
    setIsFavourite(getIsFavurite);
  }, [])

  useEffect(() => {
    if (Object.keys(repository).length) {
      fetchIsFavourite()
      .catch(console.error);
    }
  }, [fetchIsFavourite, setIsFavourite])

  const handleFavourites = async () => {
    if (isFavourite) {
      await favouritesApi.removeFromFavourites(owner.name, name);
      setIsFavourite(false);
    } else {
      await favouritesApi.addToFavourites(owner.name, name);
      setIsFavourite(true);
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
          { isFavourite ? (
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