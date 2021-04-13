import { el } from 'date-fns/locale';
import { INIT_EVENTS, GET_FIELD_EVENTS, GET_DAY_EVENTS } from '../actionTypes/actionTypes';

const initialState = {
  currentFieldEvents: [],
  currentDayEvents: [],
  eventsData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIELD_EVENTS:
      return { ...state, currentFieldEvents: action.payload }

    case GET_DAY_EVENTS:
      return {
        ...state, currentDayEvents: state.currentFieldEvents.filter(el => el.date === action.payload),
        eventsData: state.currentFieldEvents.filter(el => el.date === action.payload).map(el => { return { title: el.title, cardTitle: el.title, cardText: el.content, cardDetailedText: el.start } })
      }

    default:
      return { ...state };
  }
};

// const data = [
//   {
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     cardText:
//       "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
//     cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.
//       To save the BEF, an evacuation by sea was organised under the direction of Admiral Bertram Ramsay. Over nine days, warships of the Royal and French navies together with civilian craft, including the “little ships” made famous in a BBC broadcast by JB Priestley, successfully evacuated more than 338,000 British and Allied troops from the beaches of Dunkirk, in the remarkable Operation Dynamo. Churchill called it a “miracle of deliverance”, but warned, “Wars are not won by evacuations.”`,
//     cardDetailedText: 'blalblbla',
//     media: {
//       name: "dunkirk beach",
//       source: {
//         url: "http://someurl/image.jpg"
//       },
//       type: "IMAGE"
//     }
//   }
// ];

export default reducer;
