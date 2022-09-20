import {useState} from "react";
import {Link} from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState('')


    return(
      <div className="loginpage">
          <h2 className="title">Forgot password</h2>
          <div className="loginbody">
              <form method="post">
                  <h5>Enter your email below:</h5>
                  <input type="email" className="user" placeholder="enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <input type="submit" />
              </form>
          </div>
          <h3> Back to login page <Link to="/">Log in</Link></h3>
      </div>
  )
}

export default ForgotPassword