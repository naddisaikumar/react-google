// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetials, updateSearchInput} = props
  const {suggestion} = suggestionsDetials

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-items">
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
