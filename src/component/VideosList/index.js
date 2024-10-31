import {BsDot} from 'react-icons/bs'

import {VideoCard, ThumbnailImage, VideoDiv1, VideoDiv2} from './styled'

const VideoList = props => {
  const {each} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = each
  return (
    <VideoCard>
      <ThumbnailImage src={thumbnailUrl} alt="" />
      <VideoDiv1>
        <h1>{title}</h1>
        <p>{channel}</p>
        <VideoDiv2>
          <p>{`${viewCount} views`}</p>
          <BsDot />
          <p>{publishedAt}</p>
        </VideoDiv2>
      </VideoDiv1>
    </VideoCard>
  )
}

export default VideoList
