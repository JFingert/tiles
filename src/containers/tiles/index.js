import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTile, resetState, level, tileFactor, isIncrementing } from '../../modules/tileReducer';

class Tiles extends Component {
  state = {
    tileRows: [],
    factor: 0
  };
  
  componentDidMount() {
    this.props.resetState();
    this.buildTiles();
  }

  componentDidUpdate() {
    this.buildTiles();
  }

  handleClick = special => {
    const { selectTile } = this.props;
    if (special) {
      return selectTile();
    }
    this.addName();
  }

  addName = () => this.props.history.push('/add-name');

  buildTiles = () => {
    const { tileRows, factor } = this.state;
    const { tileFactor, level } = this.props;

    if (tileFactor === factor) return;
    if (level > 5) {
      return this.addName();
    }

    const tiles = [];
    const totalTiles = tileFactor * tileFactor;
    const specialTile = Math.floor(Math.random() * totalTiles) + 1; // correct tile in the lineup
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // hex code
    const tileSize = 500 / tileFactor / 2;

    for (let i = 1; i < totalTiles + 1; i++) {
      const isSpecial = i === specialTile;
      tiles.push(
        <div 
          className={'tile ' + (isSpecial ? 'special' : '')}
          style={{ 
            background: `#${randomColor}`,
            height: `${tileSize}px`,
            width: `${tileSize}px`
          }}
          onClick={() => this.handleClick(isSpecial ? 'special' : null)}>
        </div>)
      if (i >= tileFactor && i % tileFactor === 0) {
        tiles.push(<br />);
      }
    }
    this.setState({ tileRows: tiles, factor: tileFactor });
  }
  
  render() {
    const { tileRows } = this.state;
    const { tileFactor, level } = this.props;
      return (
        <div className="container">
          <h2>Tiles</h2>
          <div className="key">
            <p>Select the tile which differs from the rest.</p>
            <h2>Level {level}</h2>
          </div>
          <div className='tiles inline border-top'>
            {tileRows}
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  level: state.tileReducer.level,
  tileFactor: state.tileReducer.tileFactor,
  isIncrementing: state.tileReducer.isIncrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectTile,
  resetState
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tiles);