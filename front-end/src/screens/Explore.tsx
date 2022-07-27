import React, { useState } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import OrganizationForm from '../components/OrganizationForm';
import OrganizationRepoList from '../components/OrganizationRepoList';

const Explore = () => {
  const [organizationList, setOrganizationList] = useState<any[]>([]);
  
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
          { organizationList.length > 0
            ? React.Children.toArray(organizationList?.map((repo) => (
              <OrganizationRepoList repository={repo} />
            )))
            : <></>}
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
}

export default Explore;