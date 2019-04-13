export const environment = {
  production: true,
  firebase:{
    apiKey: "AIzaSyBAMTvZISVKpaRlizJW4WBkUNatchMEKXo",
    authDomain: "pack-hack.firebaseapp.com",
    databaseURL: "https://pack-hack.firebaseio.com",
    projectId: "pack-hack",
    storageBucket: "pack-hack.appspot.com",
    messagingSenderId: "150932035513"
  },
  credentials:{
    client:{
      id: '67f4df5a3037476aaf5e3cf792bc44d6', //Spotify Client ID
      secret: '75c4580629964e78912a639855832ce8', //Spotify Client Secret
    },
    auth: {
      tokenHost: 'https://accounts.spotify.com',
      tokenPath: '/api/token'
    }
   }
};
