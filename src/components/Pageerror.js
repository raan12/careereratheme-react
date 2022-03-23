import React from 'react';
import {Link} from "../../node_modules/react-router-dom";


export default function Pageerror() {
    return (
        <div className="container error-404 py-5 my-4">
        <h2 className="font-bold">Oops 404! That page can’t be found.</h2>
    
        <div className="error-desc">
            Sorry, but the page you are looking for was either not found or does not exist. <br/>
            Try refreshing the page or click the button below to go back to the Homepage.
            <div className="main-menu__right-search-box m-0"><br/>
                <Link to="/" className="thm-btn search-toggler">
                <i className="fas fa-home me-2 d-inline-block"></i>
                    Go back to Homepage
                    </Link>
            </div>
        </div>
    </div>
    )
}
