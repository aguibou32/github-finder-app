import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      isLoading: state.isLoading,
      dispatch
    }}>
      {children}
    </GithubContext.Provider>)
}

export default GithubContext;