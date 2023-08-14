import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {Authorization: `token ${GITHUB_TOKEN}`}
})

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    const fetchedUsers = await response.json();
    return fetchedUsers;

  } catch (error) {
    console.error("Failled to fetch the users: ", error);
  }
};

export const searchUsers = async (handle) => {

  const params = new URLSearchParams({
    q: handle
  });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
}


export const getUserAndRepos = async(handle) => {

  const [user, repos] = await Promise.all([
    github.get(`/users/${handle}`),
    github.get(`/users/${handle}/repos`)
  ])
  return {
    user : user.data, 
    repos : repos.data
  }
}