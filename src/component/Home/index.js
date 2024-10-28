import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoCloseOutline} from 'react-icons/io5'

import Header from '../Header'

import {
  Main,
  Advertisement,
  AdImage,
  AdDiv1,
  MainSection,
  SocialMediaImage,
  SocialMediaDiv,
  SideBarDiv1,
  SideBarRoutes,
  SideBar,
  OptionDiv,
  MemberShipButton,
} from './styled'

class Home extends Component {
  state = {
    showAd: true,
  }

  AdvertisementBanner = () => {
    this.setState(prev => ({showAd: !prev.showAd}))
  }

  render() {
    const {showAd} = this.state
    return (
      <>
        <Header />
        <Main>
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
          <MainSection>
            {showAd && (
              <Advertisement>
                <AdDiv1>
                  <AdImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt=""
                  />
                  <IoCloseOutline onClick={this.AdvertisementBanner} />
                </AdDiv1>
                <h3>
                  Buy NxtWatch Premium prepaid plans with <br /> UPI
                </h3>
                <MemberShipButton type="button">GET IT NOW</MemberShipButton>
              </Advertisement>
            )}
            <h1>All Your Code Goes Here</h1>
          </MainSection>
        </Main>
      </>
    )
  }
}

export default Home
