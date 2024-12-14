import './index.css'

const CountriesList = props => {
  const {eachCountry, onClickVistitButton} = props
  const {name, isVisited, id} = eachCountry

  const onClickButton = () => {
    onClickVistitButton(id)
  }
  return (
    <li className="list-item">
      <div className="countries-card">
        <p>{name}</p>
        {isVisited ? (
          <p>{isVisited ? 'Visited' : 'visit'}</p>
        ) : (
          <button type="button" onClick={onClickButton}>
            {isVisited ? 'Visited' : 'visit'}
          </button>
        )}
      </div>
    </li>
  )
}

export default CountriesList
