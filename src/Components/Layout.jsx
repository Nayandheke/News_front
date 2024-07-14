import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Layout.css"
import { FrontNav } from "./FrontNav";

export const Layout = () => {
    const [formattedDate, setFormattedDate] = useState('');
    const [term, setTerm] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        const currentDateObject = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        const formattedDate = currentDateObject.toLocaleString('en-US', options);
        setFormattedDate(formattedDate);
    }, []);

    const handleSubmit = ev => {
        ev.preventDefault()
        navigate(`/search?term=${term}`)
    }

    return <>
        <div>
            {/* Top Nav */}
                <nav className="navbar">
                    <div className="left-side">
                    <h4>{formattedDate}</h4>
                    </div>
                    <div className="right-side">
                    <ul>
                        <li>
                        <h2><i className="fa-brands fa-facebook"></i></h2>
                        </li>
                        <li>
                        <h2><i className="fa-brands fa-twitter"></i></h2>
                        </li>
                        <li>
                        <h2><i className="fa-brands fa-instagram"></i></h2>
                        </li>
                        <li>
                        <h2><i className="fa-brands fa-youtube"></i></h2>
                        </li>
                    </ul>
                    </div>
                </nav>
            {/* Top Nav */}

            {/* Main Nav */}
                <nav>
                    <div className="navbar1">
                        <div className="logo">
                            <Link to="/">
                                <h1 className="logo">Metro News</h1>
                            </Link>
                        </div>
                       

                        <div className="search-form">
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="search-input" name="search" placeholder="Search..." onChange={ev => setTerm(ev.target.value)} required />
                            <button type="submit" className="search-button"> <i className="fa-solid fa-magnifying-glass"></i> Search</button>
                        </form>
                        </div>
                        
                    </div>
                </nav>

                <div className="navbar2">
                    <FrontNav/>
                </div>

            {/* Main Nav */}
            <Outlet />

            {/* Footer */}
                <footer>
                    <div className="container">
                    <h2>Explore the MetroNews</h2>
                    <div className="content">
                        <p>Home</p>
                        <p>Sports</p>
                        <p>Politics</p>
                        <p>Earth</p>
                        <p>World</p>
                    </div>
                    <div className="content1">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                        <p>Accessibility Help</p>
                        <p>Parental Guidance</p>
                        <p>Advertise with us</p>
                    </div>
                    <p>Copyright © 2024 MetroNews. The MetroNews is not responsible for the content of external sites. Read about our approach to external linking.</p>
                    </div>
                    
                </footer>
            {/* Footer */}
        </div>

    </>
}