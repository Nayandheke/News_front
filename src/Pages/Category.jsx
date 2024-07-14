import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../http"; // Assuming http is configured to make API calls
import { ArticleCard, Heading, Loading } from "../Components";

export const Category = () => {
  const [category, setCategory] = useState({});
  const [articles, setArticles] = useState([]);  
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoading(true)

    http.get(`categories/${params.id}/articles`)
        .then(({ data }) => {
            setCategory(data)

            return http.get(`categories/${params.id}/articles`)
        })
        .then(({ data }) => setArticles(data))
        .catch(err => {})
        .finally(() => setLoading(false))
        // console.log(articles);
}, [params.id])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
            <Heading title={category?.name || "Category"} />
          <div className="newsCard">
            {Array.isArray(articles) && articles.length > 0 ? (
              articles.map(article => (
                <ArticleCard article={article} key={article._id} />
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};