import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState, useEffect, useMemo } from "react";
import ArticleCard from "../../components/ArticleCard";
import { BASE_URL } from "../../config/config";
import axios from "axios";
import "./home.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [latestArticle, setLatestArticle] = useState({});

  const getArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/articles`);
      console.log(response);
      setArticles(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useMemo(() => {
    const latest = articles.reduce(
      (prev, current) =>
        prev.unixTimeStamp > current.unixTimeStamp ? prev : current,
      0
    );
    setLatestArticle(latest);
    console.log(latest);
  }, [articles]);

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Container className="page-container">
      <h1> Read the latest article </h1>
      <ArticleCard
        title={latestArticle.title}
        author={latestArticle.author}
        image={
          "https://www.kindpng.com/picc/m/342-3423390_docker-icon-png-transparent-png.png"
        }
        category={latestArticle.categoryId}
        articleId={latestArticle.id}
        btnText="Read this Article"
      />

      <Link to="/search">
        <Button
          className="btn-news"
          variant="primary"
          size="lg"
          active
          style={{ backgroundColor: "#000000" }}
        >
          Search Articles
        </Button>
      </Link>
    </Container>
  );
};
export default HomePage;
