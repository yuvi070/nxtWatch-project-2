import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  width: 100%;
`

export const MainSection = styled.div`
  width: 80%;
  max-height: 90vh;
  overflow: auto;
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
`
export const SideBarDiv1 = styled.div`
  line-height: 2px;
`
export const SocialMediaDiv = styled.div`
  display: flex;
`
export const SideBar = styled.div`
  width: 20%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-right: 25px;
`
export const OptionDiv = styled.div`
  display: flex;
  font-size: 23px;
  align-items: center;
`
export const HomeOption = styled(OptionDiv)`
  background-color: #cdb5e1;
  color: #ff0000;
`
