import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.show ? '#181818' : 'white')};
`

export const MainSection = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  padding-left: 10px;
  color: ${props => (props.show ? 'white' : 'black')};
`
export const Advertisement = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 220px;
  background-size: cover;
  padding-right: 25px;
  margin-bottom: 10px;
`

export const AdDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
`
export const AdImage = styled.img`
  width: 150px;
`
export const MemberShipButton = styled.button`
  background-color: transparent;
  border: 1px solid blueviolet;
  padding: 7px;
  font-size: 18px;
  cursor: pointer;
`
export const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const VideosUlContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
export const SearchBoxDiv = styled.form`
  display: flex;
  width: 45%;
`
export const SearchInput = styled.input`
  width: 88%;
  height: 30px;
  outline: none;
  padding-left: 12px;
`
export const SearchInputButton = styled.button`
  width: 12%;
  cursor: pointer;
  outline: none;
`

// SideBar Styling

export const SocialMediaImage = styled.img`
  width: 40px;
  margin-right: 10px;
`

export const SideBarRoutes = styled.p`
  margin-left: 15px;
  text-decoration: none;
`
export const SideBarDiv1 = styled.div`
  line-height: 2px;
`
export const SocialMediaDiv = styled.div`
  display: flex;
  margin-left: 25px;
`
export const SideBar = styled.div`
  width: 20%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-right: 25px;
  background-color: ${props => (props.show ? '#212121' : 'white')};
`
export const OptionDiv = styled.div`
  display: flex;
  font-size: 23px;
  align-items: center;
  text-decoration: none;
  padding-left: 25px;
`
export const HomeOption = styled(OptionDiv)`
  background-color: ${props => (props.show ? '#383838' : 'yellowgreen')};
  color: #ff0000;
  text-decoration: none;
`
// VideoCard, ThumbnailImage, VideoDiv1, VideoDiv2

export const VideoCard = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  list-style: none;
  font-family: Roboto;
`

export const ThumbnailImage = styled.img`
  width: 35%;
`
export const VideoDiv1 = styled.div`
  margin-left: 15px;
`
export const VideoDiv2 = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingSectionHead = styled.div`
  display: flex;
  align-items: center;
`
export const Div1 = styled.div`
  background-color: yellowgreen;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 25px;
`
export const TrendingUlContainer = styled.ul`
  padding-left: 0px;
`
export const HeaderDiv = styled.div`
  background-color: ${props => (props.show ? '#212121' : 'white')};
`
