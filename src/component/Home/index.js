import {Component} from 'react'
import Cookies from 'js-cookie'

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
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
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
      this.setState({allVideoList: updateData})
    } else {
      console.log('Error')
    }
  }

  AdvertisementBanner = () => {
    this.setState(prev => ({showAd: !prev.showAd}))
  }

  render() {
    const {showAd, allVideoList} = this.state
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
            <h1>All Your Code Goes Here</h1>
            <ul>
              {allVideoList.map(each => (
                <RenderVideoList videoList={each} key={each.id} />
              ))}
            </ul>
          </MainSection>
        </Main>
      </>
    )
  }
}

export default Home
