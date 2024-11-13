import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => (props.show ? '#181818' : 'white')};
  padding: 10px;
`

export const MainSection = styled.div`
  width: 80%;
  max-height: 90vh;
  overflow: auto;
  padding-left: 10px;
  color: ${props => (props.show ? 'white' : 'black')};
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
