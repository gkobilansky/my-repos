import axios from 'axios';

const getRepo = user => axios.get(`https://api.github.com/users/${user}/repos`);

export { getRepo };
