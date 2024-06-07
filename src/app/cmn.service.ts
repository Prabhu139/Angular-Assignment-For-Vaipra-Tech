import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CmnService {
  private pinsData: any =  [
    { title: 'Pin 1', images: 'app', collaborators: 'Collaborators 1 Collaborators 2', privacy: 'private' },
    { title: 'Pin 2', images: 'app', collaborators: 'Collaborators 5 Collaborators 2', privacy: 'public' },
    { title: 'Pin 3', images: 'app', collaborators: 'Collaborators 3 Collaborators 2', privacy: 'public' },
    { title: 'Pin 4', images: 'app', collaborators: 'Collaborators 1 Collaborators 4', privacy: 'public' },
  ];

  constructor() { }

  getPins(): Observable<[]> {
    return of(this.pinsData);
  }
}
