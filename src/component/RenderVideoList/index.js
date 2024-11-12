import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import {
  ListCard,
  VideoDetailsDiv1,
  ChannelLogo,
  ThumbnailImage,
  VideoDetails,
  VideoDetailsDiv2,
  ViewCount,
} from './styled'
import myContext from '../../context/myContext'

const RenderVideoList = props => {
  const {videoList} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoList
  const formattedDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <myContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <ListCard show={isDark}>
            <Link to={`/videos/${id}`} className="link-text">
              <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
              <VideoDetails>
                <div>
                  <ChannelLogo src={channel.profile_image_url} alt="" />
                </div>
                <VideoDetailsDiv1 show={isDark}>
                  <p>{title}</p>
                  <p>{channel.name}</p>
                  <VideoDetailsDiv2>
                    <ViewCount>{`${viewCount} views`}</ViewCount>
                    <p>{`-${formattedDate}`}</p>
                  </VideoDetailsDiv2>
                </VideoDetailsDiv1>
              </VideoDetails>
            </Link>
          </ListCard>
        )
      }}
    </myContext.Consumer>
  )
}

export default RenderVideoList
