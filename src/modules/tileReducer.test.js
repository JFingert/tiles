import reducer from './tileReducer';

export const LEVEL_UP = 'counter/LEVEL_UP';
export const ADD_NAME = 'counter/ADD_NAME';

const initialState = {
  level: 1,
  tileFactor: 2,
  isIncrementing: false,
  username: '',
  hallOfFame: [
    {
      name: 'Tyshawn Jones',
      level: 5
    },
    {
      name: 'Nora Vasconcellos',
      level: 5
    },
    {
      name: 'Daewon Song',
      level: 4
    },
    {
      name: 'Mark Gonzales',
      level: 4
    },
    {
      name: 'Na-Kel Smith',
      level: 3
    },
    {
      name: 'Dennis Busenitz',
      level: 2
    },
    {
      name: 'Silas Baxter-Neal',
      level: 1
    }
  ]
};

describe('tile reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should add a name to the hall of fame', () => {
    const hallOfFame = [...initialState.hallOfFame];
    hallOfFame.push({ name: 'Test User', level: 0 });
    expect(reducer(initialState, {type: ADD_NAME, payload: 'Test User'})).toEqual(
      {
        ...initialState,
        hallOfFame
      }
    );
  });

  it('should level up', () => {
    expect(reducer(initialState, {type: LEVEL_UP})).toEqual(
      {
        ...initialState,
        level: 2,
        isIncrementing: true,
        tileFactor: 3
      }
    );
  });

});