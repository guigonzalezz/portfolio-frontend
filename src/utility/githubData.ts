
import axios from 'axios'
const URL = process.env.GITHUB_API_URL

async function getGithubReposData() {
  return {
    name: 'repositories',
    data: await axios.get(`${URL}/repos?sort=created&per_page=100`)
      .then(response => response.data)
      .catch(error => [])
  };
}

async function getGithubGistData() {
  return {
    name: 'gist',
    data: await axios.get(`${URL}/gists?sort=created&per_page=100`)
      .then(response => response.data)
      .catch(error => [])
  };
}



export { getGithubReposData,  getGithubGistData}