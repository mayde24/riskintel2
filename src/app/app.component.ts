import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBUlFfkFcJ_Zo6VYB5UZVhg1keXp8TW0Ow",
      authDomain: "riskintel-dvio.firebaseapp.com",
      databaseURL: "https://riskintel-dvio-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "riskintel-dvio",
      storageBucket: "riskintel-dvio.appspot.com",
      messagingSenderId: "717894459138",
      appId: "1:717894459138:web:2875e5e5cbfb95c6e0ec1b",
      measurementId: "G-BQ9GQ78RT7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    localStorage.removeItem('firebase:previous_websocket_failure');
  }
}
