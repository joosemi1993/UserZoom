import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegStar, FaStar } from "react-icons/fa";


function FavouritesCard({favRepo}: any) {
  const [isFavourite, setIsFavourite] = useState(true);
  const { 
    id,
    name,
    private: isPrivate,
    url,
    description,
    created_at,
    updated_at,
    owner,
   } = favRepo;

  const handleFavourites = (id: number) => { 
    // Call to remove from favourites
    setIsFavourite(!isFavourite)
  }

   const showModal = () => {
    console.log("cocuño")
   }
   
  return (
    <Col sm={6} md={4} lg={3} className="mb-5">
      <Card bg='light'>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{name}</Card.Title>
            </Col>
            <Col style={{display:'flex', justifyContent:'right'}}>
              { isFavourite ? <FaStar onClick={() => handleFavourites(id)} /> : <FaRegStar onClick={() => handleFavourites(id)} /> }
            </Col>
          </Row>
          <Card.Text>{description}</Card.Text>
          <Button onClick={showModal} variant="primary">Detailed Info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FavouritesCard;