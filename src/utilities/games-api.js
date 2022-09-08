import sendRequest from './send-request';
const BASE_URL = '/api/games';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function addToCollection(gameId) {
  return sendRequest(`${BASE_URL}/collection/${gameId}`, 'POST')
}

export function search(searchData) {
  return sendRequest(`${BASE_URL}/search/${searchData}`, 'POST')
}

export function getMyGames() {
  return sendRequest(`${BASE_URL}/mycollection`, 'GET')
}

// export function getOneGame(gameId) {
//   return sendRequest(`${BASE_URL}/games/${gameId}`, 'POST')
// }

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}