import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  width: 100%;
`

export const MainSection = styled.div`
  background-color: yellowgreen;
  width: 80%;
  max-height: 90vh;
  overflow: auto;
`
export const Advertisement = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 220px;
  background-size: cover;
  padding-right: 25px;
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
