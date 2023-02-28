import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div className="text-center">

    <h1>Page Not Found!</h1>
    <p><Link to="/">Go back home</Link></p>
    
    </div>
    )
}
export default PageNotFound ;