import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

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
  MainSection,
  Main,
  TrendingSectionHead,
  Div1,
} from './styled'

const ApiConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItem extends Component {
  state = {
    apiStatus: ApiConstants.initial,
  }

  componentDidMount() {
    this.getVideoItem()
  }

  getVideoItem = async () => {
    const {prop} = this.props
    console.log(prop)
  }

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
          <OptionDiv>
            <MdPlaylistAdd />
            <SideBarRoutes>Saved Videos</SideBarRoutes>
          </OptionDiv>
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

  showProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height={50} width={50} />
    </div>
  )

  renderAllView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'PROGRESS':
        return this.showProgress()
      case 'SUCCESS':
        return this.showSuccess()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          {this.showSideBar()}
          <MainSection>{this.renderAllView()}</MainSection>
        </Main>
      </>
    )
  }
}

export default VideoItem
