import {Component} from 'react'
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
} from './styled'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
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

  onSubmitForm = event => {
    event.preventDefault()
    const {username, password} = this.state
    // Make ApiCall
  }

  render() {
    const {username, password, showPassword} = this.state
    console.log(showPassword)
    return (
      <Home>
        <Body>
          <LoginLogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt=""
          />
          <form onSubmit={this.onSubmitForm}>
            <InputBox>
              <LabelText htmlFor="username">USERNAME</LabelText>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                id="username"
              />
            </InputBox>
            <InputBox>
              <LabelText htmlFor="password">PASSWORD</LabelText>
              <Input
                value={password}
                placeholder="Password"
                type="password"
                id="password"
              />
            </InputBox>

            <CheckboxInputBox>
              <CheckboxInput
                onClick={this.onClickShowPassword}
                type="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">Show Password</label>
            </CheckboxInputBox>
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </Body>
      </Home>
    )
  }
}

export default Login
