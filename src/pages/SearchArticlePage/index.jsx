import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { BASE_URL } from "../../config/config";
import ArticleCard from "../../components/ArticleCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchComponents from "../../components/SearchComponent";

const SearchArticlePage = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/articles`);
      console.log(response);
      setArticles(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container className="page-container">
      <h1>Search Articles</h1>
      <Row>
        <Col>
          <SearchComponents
        </Col>
        <Col>
          <h5>{articles.length} Articles found</h5>
        </Col>
      </Row>
      {articles
        ? articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              author={article.author}
              category={article.categoryId}
              image={article.imgUrl}
              btnText="Read Article"
              articleId={article.id}
            />
          ))
        : "Loading.."}
    </Container>
  );
};
export default SearchArticlePage;
