import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {VideoCard, ThumbnailImage, VideoDiv1, VideoDiv2} from './styled'

const VideoList = props => {
  const {each} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = each
  const formattedDate = formatDistanceToNowStrict(new Date(publishedAt))
  return (
    <Link to="/" className="link-text">
      <VideoCard as="li">
        <ThumbnailImage src={thumbnailUrl} />
        <VideoDiv1>
          <h3>{title}</h3>
          <p>{each.channel.name}</p>
          <VideoDiv2>
            <p>{`${each.viewCount} views`}</p>
            <BsDot />
            <p>{formattedDate}</p>
          </VideoDiv2>
        </VideoDiv1>
      </VideoCard>
    </Link>
  )
}

export default VideoList
