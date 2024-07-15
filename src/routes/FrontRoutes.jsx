import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Components";
import * as Pages from "../Pages"

export const FrontRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Pages.Home/>}/>
                <Route path="category/:id" element={<Pages.Category/>}/>
                <Route path="article/:id" element={<Pages.Article/>}/>
                <Route path="search" element={<Pages.Search />} />
            </Route>
        </Routes>
    </BrowserRouter>
}