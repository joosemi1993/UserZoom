import { Dispatch, SetStateAction, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { getOrganizationRepos } from "../api/organizationApi";
import { RepositoryOutput } from "../interface/github";

interface Props {
  setOrganizationList: Dispatch<SetStateAction<RepositoryOutput[]>>;
}

const OrganizationForm = ({ setOrganizationList }: Props) => {
  const [validated, setValidated] = useState(false);
  const [organizationFormName, setOrganizationFormName] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setOrganizationFormName(e.target.value);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (organizationFormName === "") {
      event.stopPropagation();
    } else {
      const data = await getOrganizationRepos(organizationFormName);
      setOrganizationList(data);
    }
    setValidated(true);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formOrganization">
            <Form.Control required type="text" placeholder="Enter organization name" onChange={handleOnChange}  />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default OrganizationForm;
