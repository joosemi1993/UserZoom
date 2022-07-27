import moment from 'moment';
import { Dispatch, SetStateAction } from 'react';
import { Col, Modal, Row, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface Props {
  repo: any;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const RepoModal = ({repo, showModal, setShowModal}: Props) => {
  const { 
    name,
    url,
    description,
    updated_at,
    owner,
  } = repo;

  const date = moment(updated_at).format('d MMM');

  const handleClose = () => setShowModal(false);

  const navigateToRepo = () => window.open(url, '_blank')
   
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Row>
              <Col>
                <Image src={owner.avatar} rounded thumbnail/>
              </Col>
              <Col>
                <h6>Author</h6>
                <p>{owner.name}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <h6>Last Update</h6>
            <p>{date}</p>
          </Col>
        </Row>
        { description && (
          <><hr />
            <Row>
              <h6>Description</h6>
              <p>{description}</p>
            </Row>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={navigateToRepo}>
          Navigate to Repository
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RepoModal;