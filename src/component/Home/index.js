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
    const getCookies = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=`
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
      this.setState({allVideoList: updateData, apiStatus: ApiConstants.success})
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
    this.onChangeSearchInput()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showBottomSection = () => {
    const {allVideoList, searchInput} = this.state
    const searchResult = allVideoList.filter(each => {
      const lowerTitle = each.title.toLowerCase()
      const lowerInput = searchInput.toLowerCase()
      return lowerTitle.includes(lowerInput)
    })
    return (
      <>
        <SearchBoxDiv as="form" onSubmit={this.onSubmitSearchInputs}>
          <SearchInput
            onChange={this.onChangeSearchInput}
            type="text"
            placeholder="Search"
          />
          <SearchInputButton type="submit" disabled>
            <IoIosSearch />
          </SearchInputButton>
        </SearchBoxDiv>
        <VideosUlContainer>
          {searchResult.map(each => (
            <RenderVideoList videoList={each} key={each.id} />
          ))}
        </VideosUlContainer>
      </>
    )
  }

  showRenderingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height={50} width={50} />
    </div>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'PROGRESS':
        return this.showRenderingView()
      case 'SUCCESS':
        return this.showBottomSection()
      default:
        return null
    }
  }

  showSideBar = () => (
    <SideBar>
      <SideBarDiv1>
        <Link to="/" className="link-text">
          <HomeOption>
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

  render() {
    const {showAd} = this.state
    return (
      <>
        <Header />
        <Main>
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
                <MemberShipButton type="button">GET IT NOW</MemberShipButton>
              </Advertisement>
            )}
            {/* Main Section Starts */}
            {this.renderAllViews()}
          </MainSection>
        </Main>
      </>
    )
  }
}

export default Home
