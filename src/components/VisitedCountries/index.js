import './index.css'

const VisitedCountries = props => {
  const {visitedCountry, onRemoveCountry} = props
  const {name, id, imageUrl} = visitedCountry
  const onClickRemove = () => {
    onRemoveCountry(id)
  }
  return (
    <li className="item">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <p>{name}</p>
      <button type="button" onClick={onClickRemove}>
        Remove
      </button>
    </li>
  )
}
export default VisitedCountries
