import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import http from "../http"; // Assuming http is configured to make API calls
import { ArticleCard, Heading, Loading } from "../Components";

export const Search = () => {
  const [articles, setArticles] = useState([]);  
  const [loading, setLoading] = useState(false);

  const [params] = useSearchParams()

  useEffect(() => {
    setLoading(true)

    http.get(`article/search?term=${params.get('term')}`)
        .then(({ data }) => setArticles(data))
        .catch(err => { })
        .finally(() => setLoading(false))
  }, [params.get('term')])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
            <Heading title={params.get('term')} />
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