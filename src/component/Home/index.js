import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoIosSearch} from 'react-icons/io'
import {IoCloseOutline} from 'react-icons/io5'
import Header from '../Header'
import SideBarComponent from '../SideBar'
import RenderVideoList from '../RenderVideoList'

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
    const {searchInput, allVideoList} = this.state
    // filter array based on input value;
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showBottomSection = () => {
    const {allVideoList} = this.state
    return (
      <>
        <SearchBoxDiv as="form" onSubmit={this.onSubmitSearchInputs}>
          <SearchInput
            onChange={this.onChangeSearchInput}
            type="text"
            placeholder="Search"
          />
          <SearchInputButton type="submit">
            <IoIosSearch />
          </SearchInputButton>
        </SearchBoxDiv>
        <VideosUlContainer>
          {allVideoList.map(each => (
            <RenderVideoList videoList={each} key={each.id} />
          ))}
        </VideosUlContainer>
      </>
    )
  }

  showRenderingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
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

  render() {
    const {showAd} = this.state
    return (
      <>
        <Header />
        <Main>
          <SideBarComponent />
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
