const fetch = require('node-fetch');

module.exports = {
    sendRequestTwitch,
}

async function sendRequestTwitch(url, method = 'POST', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json', 'Client-ID': process.env.CLIENT_ID };
    options.headers.Authorization = `Bearer ${process.env.IGDB_BEARER}`
    options.body = payload;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code is not 200-299
  // res.json() returns a promise that resolves
  // to the data that was sent back by the server
  if (res.ok) return res.json();
  console.log(await res.json())
  throw new Error('Bad Request');
}
