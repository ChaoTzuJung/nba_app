import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAkfhiADVRL2fwQ4jEGNVcCnO2Jl5Ngsko",
    authDomain: "nba-full-ca345.firebaseapp.com",
    databaseURL: "https://nba-full-ca345.firebaseio.com",
    projectId: "nba-full-ca345",
    storageBucket: "nba-full-ca345.appspot.com",
    messagingSenderId: "991163517180"
  };


firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}