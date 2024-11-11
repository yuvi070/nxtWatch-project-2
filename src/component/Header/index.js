import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {
  HeaderDiv,
  AccountSection,
  HeaderHome,
  AccountImage,
  HeaderLogo,
  PopupDiv,
  PopupButtonDiv,
  PopupButton,
} from './styled'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <HeaderHome>
      <HeaderDiv>
        <div>
          <HeaderLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt=""
          />
        </div>
        <AccountSection>
          <AccountImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <Popup modal trigger={<button type="button">Logout</button>}>
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
    </HeaderHome>
  )
}

export default withRouter(Header)
