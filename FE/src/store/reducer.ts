// reducer.ts
import { SET_LOCATION, LocationActionTypes } from './actions';

interface LocationState {
  locations: string[];
  selectedLocation: string;
}

const initialState: LocationState = {
  locations: [
    'Working from Gurgaon Office',
    'Working from Home',
    'Working from Client Site',
  ],
  selectedLocation: '',
};

const locationReducer = (state = initialState, action: LocationActionTypes): LocationState => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
