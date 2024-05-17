import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './core/firebase.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  title = 'podunk-web';
  app: any;
  analytics: any;

  // Initialize Firebase
  ngOnInit(): void {
    try {
      this.app = initializeApp(firebaseConfig);
      this.analytics = getAnalytics(this.app);
    } catch (e) {
      console.error("Error initializing Firebase: ", e);
    }

    console.log(this.app); // Debugging

    // Initialize Firebase Auth
    const auth = getAuth(this.app);

    console.log(auth); // Debugging
  }
}