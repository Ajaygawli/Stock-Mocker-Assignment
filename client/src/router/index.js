import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Register, Login, Portfolio, Transactions, Logout, Explore,News } from '../pages'
import { connect } from 'react-redux'
import { loginUser, registerUser} from '../actions'

const Routes = ({ user, message, loginUser, registerUser }) => {
  const { isLoggedIn, isPageLoading } = user
  return(
    [
      <Route path="/" exact 
        render={() =>
          <Portfolio isLoggedIn={isLoggedIn} isPageLoading={isPageLoading}/>
        } />,
      <Route path="/transactions"
        render={() => 
          <Transactions isLoggedIn={isLoggedIn} isPageLoading={isPageLoading}/>
        } />,
        <Route path="/explore"
        render={() => 
          <Explore isLoggedIn={isLoggedIn} isPageLoading={isPageLoading} message={message}/>
        } />,
      <Route path="/login" 
        render={() => 
          <Login loginUser={loginUser} isLoggedIn={isLoggedIn} message={message}/>
        } />,
      <Route path="/register" 
        render={() => 
          <Register registerUser={registerUser} isLoggedIn={isLoggedIn} message={message}/>
        } />,
      <Route path="/news" 
        render={() => 
          <News registerUser={registerUser} isLoggedIn={isLoggedIn} message={message}/>
        } />,
      <Route path="/logout" 
        render={() => 
          <Logout/>
        } />  
    ]
  )
}

Routes.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  ...state
})

export default connect(
  mapStateToProps,
  { loginUser, registerUser }
)(Routes)