import Cookies from 'universal-cookie';

export default function({ route, req, redirect }) {
  let isClient = process.client;
  let isServer = process.server;
  let redirectURL = '/login';
  var token, path;

  if (isClient) {
    const cookies = new Cookies();
    token = cookies.get('token');
    path = route.path;
    // console.log('client: ' + isClient);
    // console.log('client token:' + token);
    // console.log('client path:' + path);
  }

  if(isServer) {
    const headerCookies = req.headers.cookie;
    const cookies = new Cookies(headerCookies);
    token = cookies.get('token');
    path = req.originalUrl;
    // console.log('server: '+ isServer);
    // console.log('server token:' + token);
    // console.log('server path:' + path);
  }

  if (path) {
    redirectURL = '/login?ref=' + encodeURIComponent(path)
  }
  if (!token) {
    redirect(redirectURL)
  }
}