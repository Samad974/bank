export const cardReduser = (state = { cards: [], trans:[] }, action) => {
  switch (action.type) {
    case "addCards":
      return {
        ...state,
        cards: action.payload,
      };
      case "addTrans" :
      return{
        ...state,
        trans: action.payload,

      }
    default:
      return state;
  }
  };
