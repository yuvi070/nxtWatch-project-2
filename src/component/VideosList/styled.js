// VideoCard, ThumbnailImage, VideoDiv1, VideoDiv2

import styled from 'styled-components'

export const VideoCard = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  list-style: none;
  font-family: Roboto;
  color: ${props => (props.show ? 'white' : 'black')};
`

export const ThumbnailImage = styled.img`
  width: 35%;
`
export const VideoDiv1 = styled.div`
  margin-left: 15px;
  background-color: ${props => (props.show ? '#181818' : 'white')};
`
export const VideoDiv2 = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.show ? 'white' : 'black')};
`
