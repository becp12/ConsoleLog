import sendRequest from './send-request';
const BASE_URL = '/api/playsessions';

export function addSession(playSession, gameObjId) {
  return sendRequest(`${BASE_URL}/${gameObjId}`, 'POST', playSession);
}

export function getAll(gameId) {
  return sendRequest(`${BASE_URL}/${gameId}/playsessions`, 'GET');
}