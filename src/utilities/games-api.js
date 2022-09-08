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