/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearching = event => {
    this.setState({searchInput: event.target.value})
  }

  adding = suggestion => {
    const {searchInput} = this.state
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div>
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
          <div className="sub-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-bar"
              onChange={this.onSearching}
              value={searchInput}
            />
            <div>
              <ul>
                {searchResults.map(eachSuggestion => (
                  <SuggestionItem
                    eachSuggestion={eachSuggestion}
                    key={eachSuggestion.id}
                    adding={this.adding}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
