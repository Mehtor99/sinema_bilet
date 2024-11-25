const prodUrl = 'www.sinema-bilet.com';
const testUrl = 'http://localhost:9090/v1/test';
const devUrl = 'http://localhost:9090/v1/dev';

const server = devUrl;

const apis = {
    authService: server+ '/user',
    userService: server+ '/user',
    postService: server+'/post',
    seatService: server+'/seat'
}

export default apis;