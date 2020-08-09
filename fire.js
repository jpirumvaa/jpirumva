var firebaseConfig = {
    apiKey: "AIzaSyCpZkW_WyIlVBxeNNvN2DWWxQ5BHbnIV50",
    authDomain: "jp-brand.firebaseapp.com",
    databaseURL: "https://jp-brand.firebaseio.com",
    projectId: "jp-brand",
    storageBucket: "jp-brand.appspot.com",
    messagingSenderId: "404159335393",
    appId: "1:404159335393:web:6742dc1c651844e7a260a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth= firebase.auth()
  const db=firebase.firestore()