import {GamingCard, GameImage} from './styled'

const GamingList = props => {
  const {each} = props
  return (
    <GamingCard>
      <GameImage src={each.thumbnail_url} alt="" />
      <h4>{each.title}</h4>
      <p>{each.view_count} Watching Worldwide</p>
    </GamingCard>
  )
}

export default GamingList
