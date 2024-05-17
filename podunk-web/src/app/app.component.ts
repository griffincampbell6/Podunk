import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FirebaseService } from './core/services/firebase/firebase-service.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [FirebaseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}
  // Initialize Firebase
  ngOnInit(): void {
    const auth = this.firebaseService.getAuth();
    console.log(auth); // Debugging
  }
}