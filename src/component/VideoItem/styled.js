import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`

export const MainSection = styled.div`
  width: 80%;
  max-height: 90vh;
  overflow: auto;
  padding-bottom: 25px;
`

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
`
export const OptionDiv = styled.div`
  display: flex;
  font-size: 23px;
  align-items: center;
  text-decoration: none;
  padding-left: 25px;
`
// export const HomeOption = styled(OptionDiv)`
//   background-color: #cdb5e1;
//   color: #ff0000;
//   text-decoration: none;
// `
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

export const VideoPlayer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const VideoDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const VideoDiv2 = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`

export const VideoDiv3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  margin-right: 30px;
`
export const VideoDiv4 = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  background-color: transparent;
  border: 0px;
  color: ${props => (props.value ? '#2563eb' : '#64748b')};
  outline: none;
  cursor: pointer;
`
export const ChannelDetails = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0px;
`

export const ChannelDescription = styled.div`
  margin-left: 25px;
  font-size: 17px;
`
