import { GET_FIELD_EVENTS, GET_DAY_EVENTS, GET_AVAIL_TIMES, ADD_EVENT } from '../actionTypes/actionTypes';

const initialState = {
  currentFieldEvents: [],
  currentDayEvents: [],
  currentDayAllTimes: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
  currentDayStartTimes: [],
  currentDayAvailTimes: [],
  eventsData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIELD_EVENTS:
      return { ...state, currentFieldEvents: action.payload }

    case GET_DAY_EVENTS:
      return {
        ...state, currentDayEvents: state.currentFieldEvents.filter(el => el.date === action.payload),
        currentDayStartTimes: state.currentFieldEvents.filter(el => el.date === action.payload).map(el => el.start)
        // .map(el => {
        //   for (let elem of state.currentDayAllTimes) {
        //     if (elem !== el) {
        //       return el;
        //     }
        //   }
        // }),
        ,
        eventsData: state.currentFieldEvents.filter(el => el.date === action.payload).map(el => { return { title: el.title, cardTitle: el.title, cardText: el.content, cardDetailedText: el.start } }),
      };

    case GET_AVAIL_TIMES:
      return { ...state, currentDayAvailTimes: state.currentDayAllTimes.filter((el) => !state.currentDayStartTimes.includes(el)) }
    // for (let i = 0; i < state.currentDayStartTimes.length; i++) {
    //   if (state.currentDayStartTimes[i] == el) {
    //     console.log(state.currentDayStartTimes)
    //     console.log('popalsya')
    //   } else {
    //     return el;
    //   }
    // }

    case ADD_EVENT:
      return { ...state, currentFieldEvents: [...state.currentFieldEvents, action.payload] };

    default:
      return { ...state };
  }
};

export default reducer;
