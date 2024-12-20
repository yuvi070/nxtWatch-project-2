import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import GamingList from '../GamingList'
import myContext from '../../context/myContext'

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
  TrendingSectionHead,
  Div1,
  GamingSectionMainDiv,
  HeaderDiv,
} from './styled'

const ApiConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    apiStatus: ApiConstants.initial,
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({apiStatus: ApiConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({gamesList: data.videos, apiStatus: ApiConstants.success})
    } else {
      this.setState({apiStatus: ApiConstants.failure})
    }
  }

  showSideBar = () => (
    <myContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SideBar show={isDark}>
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
                <HomeOption show={isDark}>
                  <SiYoutubegaming />
                  <SideBarRoutes>Gaming</SideBarRoutes>
                </HomeOption>
              </Link>
              <Link to="/saved" className="link-text">
                <OptionDiv>
                  <MdPlaylistAdd />
                  <SideBarRoutes>Saved Videos</SideBarRoutes>
                </OptionDiv>
              </Link>
            </SideBarDiv1>
            <div className="contacts-div">
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
      }}
    </myContext.Consumer>
  )

  showProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height={50} width={50} />
    </div>
  )

  showSuccess = () => {
    const {gamesList} = this.state
    gamesList.map(each => console.log(each))
    return (
      <myContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <TrendingSectionHead>
                <Div1>
                  <SiYoutubegaming />
                </Div1>
                <h1>Gaming</h1>
              </TrendingSectionHead>
              <GamingSectionMainDiv show={isDark}>
                {gamesList.map(each => (
                  <GamingList key={each.id} each={each} />
                ))}
              </GamingSectionMainDiv>
            </>
          )
        }}
      </myContext.Consumer>
    )
  }

  showFailureView = () => (
    <myContext.Consumer>
      {value => {
        const {isDark} = value
        const showDarkBackground = isDark ? 'dark-failure-div' : 'failure-div'
        return (
          <div className={showDarkBackground}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt=""
              className="failure-image"
            />
            <h3>Oops! Something Went Wrong</h3>
            <p>
              We are having some trouble completing your request.
              <br />
              Please try again.
            </p>
            <button type="button" onClick={this.getGamingList}>
              Retry
            </button>
          </div>
        )
      }}
    </myContext.Consumer>
  )

  renderAllView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'PROGRESS':
        return this.showProgress()
      case 'SUCCESS':
        return this.showSuccess()
      case 'FAILURE':
        return this.showFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <myContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <HeaderDiv show={isDark}>
                <Header />
              </HeaderDiv>

              <Main show={isDark}>
                {this.showSideBar()}
                <MainSection>{this.renderAllView()}</MainSection>
              </Main>
            </>
          )
        }}
      </myContext.Consumer>
    )
  }
}

export default Gaming
