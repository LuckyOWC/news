import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function NewsComponent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=300eb435478b4f2396b2498c09f965ef"
    )
      .then((response) => response.json())
      .then((json) => setNews(json.articles));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Top business headlines in the US right now</h1>
        {news.length > 0 ? (
          news.map((article, index) => (
            <div className="col-sm-4 my-2" key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  src={article.urlToImage}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <p>
                    <b>PublishedAt: </b>
                    {article.publishedAt}
                  </p>
                  <p>
                    <b>Author:</b> {article.author}
                  </p>
                  <a href={article.url} target="_blank">
                    <Button variant="primary">Read more...</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default NewsComponent;
