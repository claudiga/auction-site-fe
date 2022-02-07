import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { JwtTokenHelperServiceService } from 'src/app/services/jwt-token-helper-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user;
  public biddings;
  public address;
  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private jwtTokenHelperServiceService: JwtTokenHelperServiceService
              ) {
  }

  ngOnInit(): void {
    let currentUser = this.jwtTokenHelperServiceService.getJwtDecodedUser();

    this.getUser(currentUser.ID);
    this.getUserBiddings(currentUser.ID);
  }
  getUser(id: string){
    this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      error => console.log()
    );
  }
  getUserBiddings(id: string){
    this.userService.getBiddingsByUserId(id).subscribe(
      data => {
        this.biddings = data;
      },
        error => console.log()
    );
  }

}
