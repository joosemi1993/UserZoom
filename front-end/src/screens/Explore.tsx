import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import getFavourites from '../api/favouritesApi';
import FavouritesCard from '../components/FavouritesCard';
import Header from '../components/Header';
import OrganizationForm from '../components/OrganizationForm';

const Explore = () => {
  const [organizationList, setOrganizationList] = useState([]);

  return (
    <div className="explore">
      <Container className='mt-5'>
        <Row className='mb-3'>
          <h2>Explore Repos</h2>
        </Row>
        <Row>
          <OrganizationForm />
        </Row>
      </Container>
    </div>
  );
}

export default Explore;