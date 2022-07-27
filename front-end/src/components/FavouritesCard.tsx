import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { RepositoryOutput } from '../interface/github';
import RepoModal from './RepoModal';

interface Props {
  favRepo: RepositoryOutput;
  handleOnClick: (id: number, owner: string, name: string) => {};
}

const FavouritesCard = ({favRepo, handleOnClick}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const {
    id,
    name,
    description,
    owner,
   } = favRepo;

  const handleFavouritesButton = () => handleOnClick(id, owner.name, name)

  const handleShowModal = () => setShowModal(true);
   
  return (
    <Col sm={6} md={4} lg={3} className="mb-5">
      <Card bg='light'>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{name}</Card.Title>
            </Col>
            <Col style={{display:'flex', justifyContent:'right', alignItems: "start"}}>
              <Button size='sm' variant="link" onClick={handleFavouritesButton}><FaStar /></Button>
            </Col>
          </Row>
          <Card.Text>{description}</Card.Text>
          <Button onClick={handleShowModal} variant="primary">Detailed Info</Button>
        </Card.Body>
      </Card>
      <RepoModal showModal={showModal} setShowModal={setShowModal} repo={favRepo}/>
    </Col>
  );
}

export default FavouritesCard;