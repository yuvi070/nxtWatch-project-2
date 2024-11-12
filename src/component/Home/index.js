import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoIosSearch} from 'react-icons/io'
import {IoCloseOutline} from 'react-icons/io5'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import SideBarComponent from '../SideBar'
import RenderVideoList from '../RenderVideoList'
import myContext from '../../context/myContext'
import './index.css'

import {
  Main,
  Advertisement,
  AdImage,
  AdDiv1,
  MainSection,
  MemberShipButton,
  VideosUlContainer,
  SearchBoxDiv,
  SearchInput,
  SearchInputButton,
  SocialMediaImage,
  SocialMediaDiv,
  SideBarDiv1,
  SideBarRoutes,
  SideBar,
  OptionDiv,
  HomeOption,
  HeaderDiv,
} from './styled'

const ApiConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showAd: true,
    apiStatus: ApiConstants.initial,
    allVideoList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getAllVideos()
    // setInterval(this.getAllVideos, 1000)
  }

  getAllVideos = async () => {
    this.setState({apiStatus: ApiConstants.progress})
    const {searchInput} = this.state
    const getCookies = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `bearer ${getCookies}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updateData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        allVideoList: updateData,
        apiStatus: ApiConstants.success,
        searchInput: '',
      })
    } else {
      this.setState({apiStatus: ApiConstants.failure})
    }
  }

  AdvertisementBanner = () => {
    this.setState(prev => ({showAd: !prev.showAd}))
  }

  onSubmitSearchInputs = event => {
    event.preventDefault()
    // const {searchInput, allVideoList} = this.state
    // // filter array based on input value;
    // // const filteredArray = allVidoeList.inlcude
    // const filteredArray = allVideoList.filter(each => {
    //   const lowerTitle = each.title.toLowerCase()
    //   const lowerInput = searchInput.toLowerCase()
    //   return lowerTitle.includes(lowerInput)
    // })
    // this.setState({allVideoList: filteredArray})
    this.getAllVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  noVideosView = () => (
    <div className="failure-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="failure-image"
      />
      <p>No Search Result Found</p>
      <p>
        Try different keywords or remove search filters.
        <br />
        Please try again.
      </p>
    </div>
  )

  showBottomSection = () => {
    const {allVideoList, searchInput} = this.state
    const searchResult = allVideoList.filter(each => {
      const lowerTitle = each.title.toLowerCase()
      const lowerInput = searchInput.toLowerCase()
      return lowerTitle.includes(lowerInput)
    })
    return (
      <myContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <SearchBoxDiv as="form" onSubmit={this.onSubmitSearchInputs}>
                <SearchInput
                  onChange={this.onChangeSearchInput}
                  type="text"
                  placeholder="Search"
                  show={isDark}
                />
                <SearchInputButton show={isDark} type="submit">
                  <IoIosSearch />
                </SearchInputButton>
              </SearchBoxDiv>
              {allVideoList.length === 0 ? (
                this.noVideosView()
              ) : (
                <VideosUlContainer>
                  {searchResult.map(each => (
                    <RenderVideoList videoList={each} key={each.id} />
                  ))}
                </VideosUlContainer>
              )}
            </>
          )
        }}
      </myContext.Consumer>
    )
  }

  showRenderingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height={50} width={50} />
    </div>
  )

  showFailureView = () => (
    <div className="failure-div">
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
      <button type="button" onClick={this.getAllVideos}>
        Retry
      </button>
    </div>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'PROGRESS':
        return this.showRenderingView()
      case 'SUCCESS':
        return this.showBottomSection()
      case 'FAILURE':
        return this.showFailureView()
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
                <HomeOption show={isDark}>
                  <AiFillHome />
                  <SideBarRoutes>Home</SideBarRoutes>
                </HomeOption>
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
      }}
    </myContext.Consumer>
  )

  render() {
    const {showAd} = this.state
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
                {/* <SideBarComponent /> */}
                {this.showSideBar()}
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
                      <MemberShipButton type="button">
                        GET IT NOW
                      </MemberShipButton>
                    </Advertisement>
                  )}
                  {/* Main Section Starts */}
                  {this.renderAllViews()}
                </MainSection>
              </Main>
            </>
          )
        }}
      </myContext.Consumer>
    )
  }
}

export default Home
