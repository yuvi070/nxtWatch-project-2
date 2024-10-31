import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'

import {
  SocialMediaImage,
  SocialMediaDiv,
  SideBarDiv1,
  SideBarRoutes,
  SideBar,
  OptionDiv,
  HomeOption,
  MainSection,
  Main,
} from './styled'

class Saved extends Component {
  showSideBar = () => (
    <SideBar>
      <SideBarDiv1>
        <Link to="/" className="link-text">
          <OptionDiv>
            <AiFillHome />
            <SideBarRoutes>Home</SideBarRoutes>
          </OptionDiv>
        </Link>
        <Link to="/trending" className="link-text">
          <OptionDiv>
            <FaFire />
            <SideBarRoutes>Trending</SideBarRoutes>
          </OptionDiv>
        </Link>

        <Link to="/gaming" className="link-text">
          <OptionDiv>
            <SiYoutubegaming />
            <SideBarRoutes>Gaming</SideBarRoutes>
          </OptionDiv>
        </Link>
        <Link to="/saved" className="link-text">
          <HomeOption>
            <MdPlaylistAdd />
            <SideBarRoutes>Saved Videos</SideBarRoutes>
          </HomeOption>
        </Link>
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

  render() {
    return (
      <>
        <Header />
        <Main>
          {this.showSideBar()}
          <MainSection>
            <h1>This is Saved Video Section</h1>
          </MainSection>
        </Main>
      </>
    )
  }
}

export default Saved
