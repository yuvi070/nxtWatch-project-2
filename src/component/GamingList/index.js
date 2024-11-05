import {GamingCard, GameImage} from './styled'

const GamingList = props => {
  const {each} = props
  return (
    <GamingCard>
      <GameImage src="" alt="" />
      <h4>Title</h4>
      <p>Para</p>
    </GamingCard>
  )
}

export default GamingList
