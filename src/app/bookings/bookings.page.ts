import { Component, OnInit } from "@angular/core";
import { BookingService } from "./booking.service";
import { Booking } from "./booking.model";
import { IonItemSliding } from "@ionic/angular";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"]
})
export class BookingsPage implements OnInit {
  bookings: Booking[];
  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings = this.bookingService.bookings;
  }
  onCancel(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    //cancel booking with id
  }
}
