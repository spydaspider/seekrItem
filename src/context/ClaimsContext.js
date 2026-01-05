import { createContext, useReducer } from 'react';

export const ClaimsContext = createContext();

const claimsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLAIMS':
      return { claims: action.payload };

    case 'APPROVE_CLAIM':
      return {
        ...state,
        claims: state.claims.map((claim) =>
          claim._id === action.payload._id
            ? { ...claim, ...action.payload }
            : claim
        )
      };

    case 'DELETE_CLAIM':
      return {
        ...state,
        claims: state.claims.filter(
          (claim) => claim._id !== action.payload._id
        )
      };

    default:
      return state;
  }
};

export const ClaimsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(claimsReducer, { claims: [] });

  return (
    <ClaimsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ClaimsContext.Provider>
  );
};
