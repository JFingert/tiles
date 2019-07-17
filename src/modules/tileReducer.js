export const LEVEL_UP = 'counter/LEVEL_UP';
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const ADD_NAME = 'counter/ADD_NAME';
export const RESET_STATE = 'counter/RESET_STATE';


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

export default (state = initialState, action) => {

  switch (action.type) {

    case LEVEL_UP:
      return {
        ...state,
        level: state.level + 1,
        tileFactor: state.tileFactor + 1,
        isIncrementing: !state.isIncrementing
      };

    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case ADD_NAME:
      const { level, hallOfFame } = state;
      const completedLevel = level - 1;
      const userObject = {
        name: action.payload,
        level: completedLevel
      }
      const index = hallOfFame.map(user => user.level).lastIndexOf(completedLevel) + 1;
      if (index < 1) {
        hallOfFame.push(userObject);
      } else {
        hallOfFame.splice(index, 0, userObject);
      }
      return {
        ...initialState,
        hallOfFame 
      };

    case RESET_STATE:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export const selectTile = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: LEVEL_UP
    });
  };
};

export const resetState = () => {
  return dispatch => {
    dispatch({
      type: RESET_STATE
    });
  };
};

export const addName = payload => {
  return dispatch => {
    dispatch({
      type: ADD_NAME,
      payload
    });
  };
};

export const hallOfFame = state => state.hallOfFame;
export const level = state => state.level;

