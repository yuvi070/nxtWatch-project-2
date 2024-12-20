import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  Home,
  Body,
  CheckboxInput,
  InputBox,
  LoginLogoImage,
  Input,
  LabelText,
  CheckboxInputBox,
  LoginButton,
  ErrorMsg,
} from './styled'

import myContext from '../../context/myContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    // Make ApiCall
    const apiUrl = 'https://apis.ccbp.in/login'
    const body = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 7})
      this.setState(prev => ({
        username: '',
        password: '',
        showError: !prev.showError,
      }))
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await response.json()
      this.setState(prev => ({
        showError: !prev.showError,
        errorMsg: data.error_msg,
      }))
    }
  }

  render() {
    const getCookies = Cookies.get('jwt_token')
    if (getCookies !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showPassword, showError, errorMsg} = this.state
    return (
      <myContext.Consumer>
        {value => {
          const {isDark} = value
          const showLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <Home show={isDark}>
              <Body show={isDark}>
                <LoginLogoImage src={showLogo} alt="" />
                <form onSubmit={this.onSubmitForm}>
                  <InputBox show={isDark}>
                    <LabelText show={isDark} htmlFor="username">
                      USERNAME
                    </LabelText>
                    <Input
                      type="text"
                      placeholder="Username"
                      value={username}
                      id="username"
                      onChange={this.onChangeUsername}
                      show={isDark}
                    />
                  </InputBox>
                  <InputBox show={isDark}>
                    <LabelText show={isDark} htmlFor="password">
                      PASSWORD
                    </LabelText>
                    <Input
                      show={isDark}
                      value={password}
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      onChange={this.onChangePassword}
                    />
                  </InputBox>
                  <CheckboxInputBox>
                    <CheckboxInput
                      onClick={this.onClickShowPassword}
                      type="checkbox"
                      id="checkbox"
                    />
                    <LabelText show={isDark} htmlFor="checkbox">
                      Show Password
                    </LabelText>
                  </CheckboxInputBox>
                  <LoginButton type="submit" onClick={this.onSubmitForm}>
                    Login
                  </LoginButton>
                </form>
                {showError && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
              </Body>
            </Home>
          )
        }}
      </myContext.Consumer>
    )
  }
}

export default Login
