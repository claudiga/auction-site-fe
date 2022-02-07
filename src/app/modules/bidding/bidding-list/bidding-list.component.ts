import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Bidding } from 'src/app/models/bidding';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { JwtTokenHelperServiceService } from 'src/app/services/jwt-token-helper-service.service';

@Component({
  selector: 'app-bidding-list',
  templateUrl: './bidding-list.component.html',
  styleUrls: ['./bidding-list.component.scss']
})
export class BiddingListComponent implements OnInit {
  biddings: Bidding[];
  constructor(private userService: UserService,
    private authenticationService: AuthenticationService,
    private jwtTokenHelperServiceService: JwtTokenHelperServiceService
    ) { }

  ngOnInit(): void {
    let currentUser = this.jwtTokenHelperServiceService.getJwtDecodedUser();

    this.getBiddingsByUserId(currentUser.ID);
  }

  getBiddingsByUserId(id: string) {
    this.userService.getBiddingsByUserId(id).subscribe(
      data => {
        console.log(data)
        this.biddings = data;
      }, error => console.log(error)
    );
  }

}
