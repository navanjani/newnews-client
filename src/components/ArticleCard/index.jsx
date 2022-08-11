import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ArticleCard = ({
  title,
  image,
  btnText,
  author,
  category,
  articleId,
}) => {
  return (
    <Container className="card-container">
      <Card>
        <Row>
          <Col>
            <Card.Img variant="top" src={image} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                <h3>{title}</h3>
              </Card.Title>

              <Card.Text>
                <span>By: {author}</span>
                <br />
                <span>
                  Category:<Link to={`/read/${category}`}>{category} </Link>
                </span>
              </Card.Text>

              <Link to={`/read/${articleId}`}>
                <Button
                  className="btn-news"
                  variant="primary"
                  style={{ backgroundColor: "#000000" }}
                >
                  {btnText}
                </Button>
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
export default ArticleCard;
