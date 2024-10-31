import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import myContext from '../../context/myContext'

import {
  SocialMediaImage,
  SocialMediaDiv,
  SideBarDiv1,
  SideBarRoutes,
  SideBar,
  OptionDiv,
} from './styled'

const SideBarComponent = () => (
  <SideBar>
    <SideBarDiv1>
      <OptionDiv>
        <AiFillHome />
        <SideBarRoutes>Home</SideBarRoutes>
      </OptionDiv>
      <OptionDiv>
        <FaFire />
        <SideBarRoutes>Trending</SideBarRoutes>
      </OptionDiv>
      <OptionDiv>
        <SiYoutubegaming />
        <SideBarRoutes>Gaming</SideBarRoutes>
      </OptionDiv>
      <OptionDiv>
        <MdPlaylistAdd />
        <SideBarRoutes>Saved Videos</SideBarRoutes>
      </OptionDiv>
    </SideBarDiv1>
    <div>
      <h3>Contact Us</h3>
      <SocialMediaDiv>
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linkedin logo"
        />
      </SocialMediaDiv>
      <p>Enjoy! Now you can see your recommendations</p>
    </div>
  </SideBar>
)

export default SideBarComponent
