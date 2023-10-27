import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text}) => {

  const starCountArr = [
    {
    fullStar: 1,
    halfStar: 0.5},
    {
    fullStar: 2,
    halfStar: 1.5},
    {
    fullStar: 3,
    halfStar: 2.5},
    {
    fullStar: 4,
    halfStar: 3.5},
    {
    fullStar: 5,
    halfStar: 4.5}
    ]    

  return(
    <div className='rating'>
    {starCountArr.map(({fullStar, halfStar}) => {
      return(
        <span>
        {value >= fullStar ? <FaStar /> : value >= halfStar ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>
      )
    })}
      <span className="rating-text">{text && text}</span>
    </div>
  )
}

export default Rating