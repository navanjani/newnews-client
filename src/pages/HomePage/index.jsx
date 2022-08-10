import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
const HomePage = () => {
  return (
    <Container className="page-container">
      <h1> Read the latest article </h1>

      <Button
        className="btn-news"
        variant="primary"
        size="lg"
        active
        style={{ backgroundColor: "#000000" }}
      >
        Search Articles
      </Button>
    </Container>
  );
};
export default HomePage;
