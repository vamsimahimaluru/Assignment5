import './index.css'

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-container">
        <img
          alt="website logo"
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
        <ul className="unorder">
          <li>Home</li>
          <li>Jobs</li>
        </ul>
        <button type="button" className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Home)
