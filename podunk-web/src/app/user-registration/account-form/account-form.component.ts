import { Component } from '@angular/core';

import { FirebaseService } from '../../core/services/firebase/firebase-service.module';

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css'
})
export class AccountFormComponent {

  constructor(private firebaseService: FirebaseService) {}

}
