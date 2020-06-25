import React from 'react';

class Search extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };

  render() {
    return (
      <div data-aos="fade-up">
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group input-group-lg">
            <input
              className="form-control test"
              type="text"
              placeholder="&#128269; &nbsp; Search Videos"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default Search;
