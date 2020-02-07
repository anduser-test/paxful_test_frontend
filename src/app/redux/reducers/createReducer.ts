export const createReducer = (initialState: any, reducerMap: any) => (
  state = initialState,
  action: any,
) => {
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action.payload) : state;
};
