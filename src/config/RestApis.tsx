const prodUrl = 'www.sinema-bilet.com';
const testUrl = 'http://localhost:9090/v1/test';
const devUrl = 'http://localhost:9090/v1/dev';

const server = devUrl;

const apis = {
    userService: server+ '/user',
    seatService: server+'/seat',
    movieService: server+'/movie'
}

export default apis;