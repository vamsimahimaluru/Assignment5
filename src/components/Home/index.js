import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/loginform" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find the Job That Fits Your Life</h1>
          <img
            alt="small"
            className="home-mobile-img"
            src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
          />
          <p className="home-description">
            Millions of people are searching for jobs,salary information,company
            reviews.Find the job that fits your abilities and potential.
          </p>
          <button className="shop-now-button " type="button">
            Find Jobs
          </button>
        </div>
        <img
          alt="big"
          className="desktop-image"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-bg.png"
        />
      </div>
    </>
  )
}
export default Home
