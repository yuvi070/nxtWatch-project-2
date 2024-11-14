import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import VideoList from '../VideosList'
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
  VideoCard,
  ThumbnailImage,
  VideoDiv1,
  VideoDiv2,
  Div1,
  TrendingSectionHead,
  TrendingUlContainer,
  HeaderDiv,
} from './styled'

const ApiConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Saved extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: ApiConstants.initial,
  }

  //   componentDidMount() {
  //     this.getTrendingVideos()
  //   }

  //   getTrendingVideos = async () => {
  //     this.setState({apiStatus: ApiConstants.progress})
  //     const jwtToken = Cookies.get('jwt_token')
  //     const apiUrl = 'https://apis.ccbp.in/videos/trending'
  //     const options = {
  //       headers: {
  //         Authorization: `bearer ${jwtToken}`,
  //       },
  //     }
  //     const response = await fetch(apiUrl, options)
  //     if (response.ok) {
  //       const data = await response.json()
  //       const formattedData = data.videos.map(each => ({
  //         id: each.id,
  //         channel: each.channel,
  //         publishedAt: each.published_at,
  //         thumbnailUrl: each.thumbnail_url,
  //         title: each.title,
  //         viewCount: each.view_count,
  //       }))
  //       this.setState({
  //         trendingVideosList: formattedData,
  //         apiStatus: ApiConstants.success,
  //       })
  //     } else {
  //       this.setState({apiStatus: ApiConstants.failure})
  //     }
  //   }

  showProgress = () => <h1>Progress</h1>

  showSuccess = () => {
    const {trendingVideosList} = this.state
    return (
      <myContext.Consumer>
        {value => {
          const {savedList, isDark} = value
          return (
            <MainSection show={isDark}>
              {savedList.length === 0 ? (
                <div className="failure-div">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    className="failure-image"
                  />
                  <h3>No Saved Videos Found</h3>
                  <p>You can save your videos while watching them.</p>
                </div>
              ) : (
                <>
                  <TrendingSectionHead>
                    <Div1>
                      <MdPlaylistAdd />
                    </Div1>
                    <h1>Saved</h1>
                  </TrendingSectionHead>
                  <TrendingUlContainer>
                    {savedList.map(each => (
                      <VideoList each={each} key={each.id} />
                    ))}
                  </TrendingUlContainer>
                </>
              )}
            </MainSection>
          )
        }}
      </myContext.Consumer>
    )
  }

  showFailureView = () => (
    <div className="failure-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
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

  renderView = () => {
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
                <OptionDiv>
                  <SiYoutubegaming />
                  <SideBarRoutes>Gaming</SideBarRoutes>
                </OptionDiv>
              </Link>
              <Link to="/saved" className="link-text">
                <HomeOption show={isDark}>
                  <MdPlaylistAdd />
                  <SideBarRoutes>Saved Videos</SideBarRoutes>
                </HomeOption>
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
                <MainSection>{this.showSuccess()}</MainSection>
              </Main>
            </>
          )
        }}
      </myContext.Consumer>
    )
  }
}

export default Saved
