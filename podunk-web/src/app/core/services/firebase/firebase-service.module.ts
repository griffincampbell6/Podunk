import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './firebase.config';

export class FirebaseService {
  private app: any;
  private analytics: any;

  constructor() {
    try {
      this.app = initializeApp(firebaseConfig);
      this.analytics = getAnalytics(this.app);
    } catch (e) {
      console.error("Error initializing Firebase: ", e);
    }
  }

  getAuth() {
    return getAuth(this.app);
  }
}