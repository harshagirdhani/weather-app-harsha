import React, { useEffect, useState } from "react";
import './Sidebar.css'
import { Link, useLocation, useParams } from "react-router-dom";

const initialBackgroundColor = {
    home: "yellow",
    cities: "purple"
};

const Sidebar = () => {
    const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/") {
            return setBackgroundColor(initialBackgroundColor);
        }
        if(location.pathname === "/cities") {
            return setBackgroundColor({
                home: "purple",
                cities: "yellow"
            })
        }
    }, [location])
    return (
        <div className="sidebar">
                <Link to="/" className="link" style={{backgroundColor: backgroundColor.home}}>Home</Link> 
                <Link to="/cities" className="link" style={{backgroundColor: backgroundColor.cities}}>Cities</Link>
        </div>
    )

}
export default Sidebar