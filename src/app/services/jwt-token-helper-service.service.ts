import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { TokenDto } from '../models/token-dto';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenHelperServiceService {

  private jwtHelper = new JwtHelperService();
  constructor( private authenticationService: AuthenticationService,
    ) {
      
     }

   getJwtDecodedUser():TokenDto{
    return this.jwtHelper.decodeToken(this.authenticationService.currentUserValue.token);
  }

  getUser(token):TokenDto{
    return this.jwtHelper.decodeToken(token);
  }

}
