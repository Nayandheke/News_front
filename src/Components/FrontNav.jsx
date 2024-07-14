import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import http from "../http";

export const FrontNav = () => {
    const [categories, setCategories] = useState([]);
    const location = useLocation();

    useEffect(() => {
        http.get('categories')
            .then(({ data }) => {
                setCategories(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="nav-items">
            {categories.map(category => (
                <Link
                    to={`/category/${category._id}`}
                    className={`nav-item ${location.pathname === `/category/${category._id}` ? 'active' : ''}`}
                    key={category._id}
                >
                    {category.name}
                </Link>
            ))}
        </div>
    );
};
