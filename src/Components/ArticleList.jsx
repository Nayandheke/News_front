import { ArticleCard } from "./ArticleCard"
import { Loading } from "./Loading"

export const ArticleList = ({ article=[], latest = false, loading=false}) => {
    return loading ? <Loading/> : <>
        {article.map(article => <ArticleCard article={article} latest={latest} key={article._id}/>)}
    </>
}