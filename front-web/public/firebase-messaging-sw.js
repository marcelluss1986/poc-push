importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
    apiKey: "AIzaSyDOWabK-hA_EHEnyKdNm8NOqBE195O-zZs",
    authDomain: "class-push-mdss.firebaseapp.com",
    projectId: "class-push-mdss",
    storageBucket: "class-push-mdss.appspot.com",
    messagingSenderId: "767118732343",
    appId: "1:767118732343:web:5e8ee828e4cd0a11aa23b2"  
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
     console.log('sw bg message event: ', payload);
});

// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context
