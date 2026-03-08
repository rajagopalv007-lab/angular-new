import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ProfilePhotoComponent } from '../profile-photo/profile-photo.component';
import { AnalyticsService } from '../../services/tracker.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ProfilePhotoComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  //define a event emitter
  @Output() profilePhotoUpdated = new EventEmitter<string>();
  analyticsService = inject(AnalyticsService);



  //define a method to update profile photo
  updateProfilePhoto(photo: string) {
    this.profilePhotoUpdated.emit(photo);
    this.analyticsService.track('profilePhotoUpdated', { photo });
  }

}
