import axios from 'axios';

export const FETCH_FILE = 'FETCH_FILE';

var ROOT_URL = 'http://localhost:4000/documents/research/index.html';

export function fetchFile() {
  const request = axios.get(`${ROOT_URL}`);
  return {type: FETCH_FILE, payload: request};
}
