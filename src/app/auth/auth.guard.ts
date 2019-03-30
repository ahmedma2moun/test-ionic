import { Injectable } from "@angular/core";
import { CanLoad, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Route } from "@angular/compiler/src/core";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.userIsAuthenticated) {
      this.router.navigateByUrl("/auth");
    }
    return this.authService.userIsAuthenticated;
  }
  constructor(private authService: AuthService, private router: Router) {}
}
