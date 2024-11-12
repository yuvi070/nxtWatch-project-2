import styled from 'styled-components'

export const ListCard = styled.li`
  width: 30%;
  background-color: ${props => (props.show ? '#181818' : 'white')};
  height: 370px;
  margin-bottom: 30px;
  color: black;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
`

export const ChannelLogo = styled.img`
  width: 30px;
  margin-top: 20px;
  margin-right: 10px;
`
export const VideoDetailsDiv1 = styled.div`
  line-height: 20px;
  color: ${props => (props.show ? 'white' : '#181818')};
`
export const VideoDetailsDiv2 = styled.div`
  display: flex;
`
export const ViewCount = styled.p`
  margin-right: 6px;
`
