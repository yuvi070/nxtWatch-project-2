import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {
  HeaderDiv,
  AccountSection,
  HeaderHome,
  AccountImage,
  HeaderLogo,
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
          <button type="button" onClick={onClickLogout}>
            Logout
          </button>
        </AccountSection>
      </HeaderDiv>
    </HeaderHome>
  )
}

export default withRouter(Header)
