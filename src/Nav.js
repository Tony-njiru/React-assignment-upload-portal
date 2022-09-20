import {Link} from "react-router-dom";

const Nav = () => {
  return(
      <div className="navbar">
          <ul className="items">
              <Link to="/dashboard" className="link"><li className="item">DASHBOARD</li></Link>
              <Link to="/account" className="link"><li className="item">MY ACCOUNT</li></Link>
              <Link to="/work" className="link"> <li className="item">UPLOADED WORK</li></Link>
          </ul>
          <button className="logout">Log out</button>
      </div>
  )
}

export default Nav