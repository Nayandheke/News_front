import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import http from "../http";
import { Loading } from "../Components";
import { imgUrl } from "../lib";

export const  Article = () => {

    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        setLoading(true)
        http.get(`article/${params.id}`)
            .then (({data}) => {
                setArticle(data)
            })
            .catch((err) => {})
            .finally(() => setLoading(false))
    },[params.id])

    return <>
        {loading ? <Loading/> : <div className="container">
            <h2 className="center">{article.title}</h2>

            <div className="img-container">
                <img src={imgUrl(article.images[0])} alt="" />
                <div className="social">
                    <div className="date">
                        <h3><i className="fas fa-calendar-days"></i> {article.createdAt}</h3>
                    </div>
                    <div className="socialMedia">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="desc" >
                <p dangerouslySetInnerHTML={{__html:article.content}}></p>
                <p dangerouslySetInnerHTML={{__html:article.description}}></p>
            </div>
        </div>}
    </>
}