import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const HallOfFame = ({ hallOfFame }) => {
  const topTen = hallOfFame.slice(0, 10);
  return (
    <Fragment>
      <h2>Hall of Fame</h2>
      <div className='hall-of-fame'>
        {topTen.map(user => (
          <h2>{user.name} - {user.level}</h2>
        ))}
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  hallOfFame: state.tileReducer.hallOfFame
});

export default connect(
  mapStateToProps
)(HallOfFame);
