import React, { useState } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import OrganizationForm from '../components/OrganizationForm';
import OrganizationRepoList from '../components/OrganizationRepoList';
import { RepositoryOutput } from '../interface/github';

const Explore = () => {
  const [organizationList, setOrganizationList] = useState<RepositoryOutput[]>([]);
  
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
          <Container>
            <ListGroup>
            { organizationList.length > 0
              ? React.Children.toArray(organizationList?.map((repo) => (
                <OrganizationRepoList repository={repo} />
              )))
              : <></>}
            </ListGroup>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Explore;