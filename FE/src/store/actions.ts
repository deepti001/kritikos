// actions.ts
export const SET_LOCATION = 'SET_LOCATION';

export interface SetLocationAction {
  type: typeof SET_LOCATION;
  payload: string;
}

export const setLocation = (location: string): SetLocationAction => ({
  type: SET_LOCATION,
  payload: location,
});

export type LocationActionTypes = SetLocationAction;
