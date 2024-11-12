import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import {IoIosMoon, IoIosSunny} from 'react-icons/io'

import myContext from '../../context/myContext'

import {
  HeaderDiv,
  AccountSection,
  HeaderHome,
  AccountImage,
  HeaderLogo,
  PopupDiv,
  PopupButtonDiv,
  PopupButton,
  ThemeIcon,
  LogoutButtton,
} from './styled'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <myContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const showLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <HeaderDiv show={isDark}>
            <div>
              <Link to="/">
                <HeaderLogo src={showLogo} alt="" />
              </Link>
            </div>
            <AccountSection>
              <ThemeIcon
                show={isDark}
                as="button"
                type="button"
                onClick={changeTheme}
              >
                {isDark ? <IoIosSunny /> : <IoIosMoon />}
              </ThemeIcon>
              <AccountImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={<LogoutButtton type="button">Logout</LogoutButtton>}
              >
                {close => (
                  <PopupDiv>
                    <p>Are you sure you want to logout ?</p>
                    <PopupButtonDiv>
                      <PopupButton outline onClick={() => close()}>
                        Cancel
                      </PopupButton>
                      <PopupButton onClick={onClickLogout}>Confirm</PopupButton>
                    </PopupButtonDiv>
                  </PopupDiv>
                )}
              </Popup>
            </AccountSection>
          </HeaderDiv>
        )
      }}
    </myContext.Consumer>
  )
}

export default withRouter(Header)
