import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addName } from '../../modules/tileReducer';

class AddName extends Component {
  state = {
    name: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name } = this.state;
    const { addName, history } = this.props;
    await addName(name);
    history.push('/hall-of-fame');
  }

  render() {
    const { level } = this.props;
    const levelCompleted = level - 1;
    return (
      <div className='add-name border-top'>
        <form onSubmit={this.handleSubmit}>
          {levelCompleted === 5 ? (
            <h2>You beat the game!</h2>
          ) : (
            <h2>Levels completed: {levelCompleted}</h2>
          )}
          <p>
            <strong>Enter your name into the hall of fame!</strong>
          </p>
          <p>
            <label htmlFor='title'>Title: </label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  level: state.tileReducer.level
});
const mapDispatchToProps = dispatch => bindActionCreators({
  addName
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddName);
