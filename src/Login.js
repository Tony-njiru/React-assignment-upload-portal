import {useState} from "react";
import {Link, useHistory} from "react-router-dom";

const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const user= {username,password}

        fetch(' http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(user)
        })
            .then(() =>{
                console.log('new user added')
                history.push('/dashboard')
            })
    }
  return(
      <div className="loginpage">
        <h2 className="title">Login to your account</h2>
          <div className="loginbody">
           <form className="loginform" action="" method="post" onClick={handleSubmit} >
              <input type="text" className="user" placeholder="enter your username or email" required value={username} onChange={(e)=>setUserName(e.target.value)}/>
              <input type="password" className="password" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <input type="submit" />
              <div className="forgotgrid">
                  <label className="checkbox"><input type="checkbox"/>Remember Me</label>
                  <p className="forgot"><Link to="/forgot">Reset password</Link></p>
              </div>
           </form>
          </div>
          <h3>Not a member?<Link to="/signup">sign up here</Link></h3>

      </div>
  )
}

export default Login