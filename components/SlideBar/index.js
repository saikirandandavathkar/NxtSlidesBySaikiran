import './index.css'

const SlideBar = props => {
  const {listDetails, onSelectCurrentSlide, isItSelected, index} = props
  const {description, heading, id} = listDetails

  const selectButton = () => {
    onSelectCurrentSlide(id)
  }

  const addedStyle = isItSelected === id ? 'addedStyle' : ''

  const slideNumber = index + 1

  return (
    <li className={`listStyle ${addedStyle}`}>
      <p>{slideNumber}</p>
      <button className="card-btn" type="button" onClick={selectButton}>
        <div className="slidBar-card">
          <h1 className="slidBar-Heading"> {heading} </h1>
          <p className="slidBar-paragraph"> {description} </p>
        </div>
      </button>
    </li>
  )
}

export default SlideBar
