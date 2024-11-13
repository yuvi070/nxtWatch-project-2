import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {VideoCard, ThumbnailImage, VideoDiv1, VideoDiv2} from './styled'
import myContext from '../../context/myContext'

const VideoList = props => {
  const {each} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = each
  const formattedDate = formatDistanceToNowStrict(new Date(publishedAt))
  return (
    <>
      <Link to={`/videos/${id}`} className="link-text">
        <myContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <>
                <VideoCard as="li" show={isDark}>
                  <ThumbnailImage src={thumbnailUrl} />
                  <VideoDiv1 show={isDark}>
                    <h3>{title}</h3>
                    <p>{each.channel.name}</p>
                    <VideoDiv2 show={isDark}>
                      <p>{`${each.viewCount} views`}</p>
                      <BsDot />
                      <p>{formattedDate}</p>
                    </VideoDiv2>
                  </VideoDiv1>
                </VideoCard>
              </>
            )
          }}
        </myContext.Consumer>
      </Link>
    </>
  )
}

export default VideoList
