import React, { useCallback, useEffect, useState } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import FavouritesCard from '../components/FavouritesCard';
import OrganizationForm from '../components/OrganizationForm';
import OrganizationRepoList from '../components/OrganizationRepoList';

const Explore = () => {
  const [organizationList, setOrganizationList] = useState<any[]>([]);
  console.log(organizationList);
  
  return (
    <div className="explore">
      <Container className='mt-5'>
        <Row className='mb-3'>
          <h2>Explore Repos</h2>
        </Row>
        <Row className='mb-3'>
          <OrganizationForm setOrganizationList={setOrganizationList} />
        </Row>
        <Row>
          <ListGroup>
          { organizationList.length > 0 ? organizationList?.map((repo) => {
            console.log("EL REPO", repo);
            return (
              <OrganizationRepoList repository={repo} />
            )
          }) : <></>}
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
}

export default Explore;