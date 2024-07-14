import { Link } from "react-router-dom"
import "../../src/App.css"
import { Earth, Heading, MainNews,} from "../Components"
import { News } from "../Components"
// import { NewsCard } from "../Components"
// import { World } from "../Components/World"
import { ArticleList } from "../Components/ArticleList"
import { useEffect, useState } from "react"
import http from "../http"

export const Home = () => {
    const [featured , setFeatured] = useState([])
    const [latest, setLatest] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        http.get('article/featured')
            .then(({data}) => {
                setFeatured(data)
                return http.get('article/latest')
            })
            .then(({data}) => {
                setLatest(data)
            })
            .catch (err =>{})
            .finally(() => setLoading(false))
    }, [])
    return <>
        <div className="container">
            <h2 className="welcome">Welcome to MetroNews.com</h2>
            <MainNews/>
        </div>


        <div className="container">
            <Heading title="Latest News"/>
            <div className="newsCard">
                <ArticleList article={[...latest].splice(0,3)} loading={loading}/>
            </div>
        </div>
        {/* <div className="container">
            <Link to="/sports"><Sports/></Link>
            
        </div>
        
        <div className="container">
            <Link to="/politics"><Politics/></Link>
        </div>
        <div className="earth">
            <Link to="/earth"><Earth/></Link>
        </div>
        <div className="container">
            <Link to="/world"><World/></Link>
        </div> */}
    </>
}