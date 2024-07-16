import { Link } from "react-router-dom"
import { imgUrl } from "../lib"

export const BannerCard = ({article, featured = false}) => {
    return <>
        <Link className="article" to={`/article/${article._id}`}>
            <div className="card-container">
                <div className="banner">
                <h4>{article.title}</h4>
                <img src={imgUrl(article.images[0])} alt="" />
                <p dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
            </div>
        </Link>
    </>
}