/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, adding} = props
  const {suggestion} = eachSuggestion
  const onAdd = () => adding(suggestion)
  return (
    <li>
      <div className="container">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onAdd}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
