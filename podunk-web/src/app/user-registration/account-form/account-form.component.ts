import { Component } from '@angular/core';

import { FirebaseService } from '../../core/services/firebase/firebase-service.module';

@Component({
  selector: 'podunk-account-form',
  standalone: true,
  imports: [],
  providers: [FirebaseService],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css'
})
export class PodunkAccountFormComponent {

  constructor(private firebaseService: FirebaseService) {}

}
