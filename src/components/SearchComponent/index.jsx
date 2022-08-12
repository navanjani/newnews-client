import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const SearchComponent = () => {
  return (
    <Container className="search-container">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Container>
  );
};
export default SearchComponent;
