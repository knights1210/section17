import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://firestore.googleapis.com/v1/projects/vuejs-http-217c0/databases/(default)/documents'
});

export default instance;