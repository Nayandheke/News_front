import { BannerCard } from "./BannerCard"
import { Loading } from "./Loading"

export const BannerList = ({ article=[], featured = false, loading=false}) => {
    return loading ? <Loading/> : <>
        {article.map(article => <BannerCard article={article} featured={featured} key={article._id}/>)}
    </>
}