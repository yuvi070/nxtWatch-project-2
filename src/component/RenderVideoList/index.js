import {ListCard, ThumbnailImage} from './styled'

const RenderVideoList = props => {
  const {videoList} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoList
  return (
    <ListCard>
      <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
      <p>{title}</p>
    </ListCard>
  )
}

export default RenderVideoList
