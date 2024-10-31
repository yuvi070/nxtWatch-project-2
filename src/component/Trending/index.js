import {Component} from 'react'
import Cookies from 'js-cookie'
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

class Trending extends Component {
  state = {
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({trendingVideosList: data.videos})
    } else {
      console.log('Error')
    }
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
          <HomeOption>
            <FaFire />
            <SideBarRoutes>Trending</SideBarRoutes>
          </HomeOption>
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

  render() {
    const {trendingVideosList} = this.state
    return (
      <>
        <Header />
        <Main>
          {this.showSideBar()}
          <MainSection>
            <h1>This is Trending Section</h1>
          </MainSection>
        </Main>
      </>
    )
  }
}

export default Trending
