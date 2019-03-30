import { PlacesService } from "./../../places.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Place } from "../../place.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"]
})
export class EditOfferPage implements OnInit {
  form: FormGroup;
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (!param.has("offerId")) {
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }
      this.place = this.placesService.getPlace(param.get("offerId"));
      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: "blur",
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description, {
          updateOn: "blur",
          validators: [Validators.required, Validators.maxLength(180)]
        })
      });
    });
  }
  onEditOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }
}
