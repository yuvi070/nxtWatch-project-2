import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {AiFillHome, AiFillLike, AiFillDislike} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'

import Header from '../Header'
import './index.css'

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
  VideoPlayer,
  VideoDiv1,
  VideoDiv2,
  VideoDiv3,
  VideoDiv4,
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
    VideoDetails: [],
    like: false,
    dislike: false,
    save: false,
  }

  componentDidMount() {
    this.getVideoItem()
  }

  onClickLike = () => {
    this.setState(prev => ({like: !prev.like, dislike: !prev.dislike}))
  }

  onClickDislike = () => {
    this.setState(prev => ({dislike: !prev.dislike, like: !prev.like}))
  }

  onClickLike = () => {
    this.setState(prev => ({like: !prev.like}))
  }

  getVideoItem = async () => {
    this.setState({apiStatus: ApiConstants.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({
        apiStatus: ApiConstants.success,
        VideoDetails: data.video_details,
      })
      console.log(data)
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

  showSuccess = () => {
    const {VideoDetails, like, dislike, save} = this.state
    const formattedDate = formatDistanceToNowStrict(
      new Date(VideoDetails.published_at),
    )
    console.log(VideoDetails)
    const showLike = like ? 'like' : ''

    return (
      <>
        <VideoPlayer>
          <ReactPlayer
            url={VideoDetails.video_url}
            width="800px"
            height="420px"
            className="video-player"
            controls="true"
          />
        </VideoPlayer>
        <h3>{VideoDetails.title}</h3>
        <VideoDiv1>
          <VideoDiv2>
            <p>{VideoDetails.view_count} views</p>
            <BsDot />
            <p>{`${formattedDate} ago`}</p>
          </VideoDiv2>
          <VideoDiv3>
            <VideoDiv4
              like
              as="button"
              type="button"
              onClick={this.onClickLike}
            >
              <BiLike />
              <p>Like</p>
            </VideoDiv4>
            <VideoDiv4 as="button" type="button" onClick={this.onClickDislike}>
              <BiDislike />
              <p>Dislike</p>
            </VideoDiv4>
            <VideoDiv4 as="button" type="button" onClick={this.onClickSave}>
              <MdPlaylistAdd />
              <p>Save</p>
            </VideoDiv4>
          </VideoDiv3>
        </VideoDiv1>
      </>
    )
  }

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
