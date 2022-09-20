import {useState} from "react";
import {Link, useHistory} from "react-router-dom";

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const user= {name,email,password}

        fetch(' http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(user)
        })
            .then(() =>{
                console.log('new user added')
                history.push('/')
            })
    }

  return(
      <div className="loginpage">
        <h2 className="title">Create your Account</h2>
        <div className="loginbody">
            <form action="" className="signupform" method="post" onSubmit={handleSubmit}>
                <input type="text" className="user" placeholder="enter your name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" className="user" placeholder="enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="password" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="submit" />
                <div className="forgotgrid">
                    <label className="checkbox"><input type="checkbox"/>Remember Me</label>
                    <p className="forgot"><Link to="/forgot">Reset password</Link></p>
                </div>
            </form>
        </div>
          <h3>Already have an account?<Link to="/">Login Now »</Link>  </h3>
      </div>
  )
}

export default SignUp