import { Link } from "react-router-dom"
import { imgUrl } from "../lib"

export const ArticleCard = ({article,latest = false}) =>  {
    return <>
        <Link className="article" to={`/article/${article._id}`}>
            <div className="card-container">
                <div className="card">
                <img src={imgUrl(article.images[0])} alt="" />
                <h4>{article.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
            </div>
        </Link>
    </>
}