import React from 'react';
import { Link} from 'react-router-dom';




function Launchpage() {
  return (
    <div>
    <h1>LIFEGPA</h1>
    

    <Link to={`/SignUp`}>Sign Up</Link>
    <Link to={`/Login`}>Login</Link>

    </div>
  )
}

export default Launchpage
