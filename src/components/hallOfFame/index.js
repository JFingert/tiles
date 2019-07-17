import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const HallOfFame = ({ hallOfFame }) => {
  const topTen = hallOfFame.slice(0, 10);
  return (
    <Fragment>
    {topTen.map(user => (
      <h2>{user.name} - {user.level}</h2>
    ))}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  hallOfFame: state.tileReducer.hallOfFame
});

export default connect(
  mapStateToProps
)(HallOfFame);
