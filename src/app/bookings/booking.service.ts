import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";

@Injectable({ providedIn: "root" })
export class BookingService {
  private _booking: Booking[] = [
    {
      id: "Xyz",
      placeId: "p1",
      placeTitle: "Sharm",
      guestNumber: 2,
      userId: "abc"
    }
  ];
  get bookings() {
    return [...this._booking];
  }
}
