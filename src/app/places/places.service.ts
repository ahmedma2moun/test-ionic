import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
      new Place('1', 'Radeson Blue Sharm', 'Fucken good', 'https://images.oyster.com/photos/pool--v5165711-w902.jpg', 750),
      new Place('2', 'Soma bay', 'Fucken fuken good', 'https://awscloudfront.kempinski.com/34367871/ksb_drone-exterior_4.jpg', 800),
      new Place('3', 'Dahab', 'Bitching', 'http://www.travelstart.com.eg/blog/wp-content/uploads/2018/03/WhatsApp-Image-2018-03-19-at-10.26.47-PM-780x451.jpeg', 750)
  ];
  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p =>  p.id === id)};
  }
  constructor() {}
}
