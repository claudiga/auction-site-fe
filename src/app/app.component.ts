import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenDto } from './models/token-dto';
import { User } from './models/user';
import { AuthenticationService } from './security/authentication.service';
import { CategoryService } from './services/category.service';
import { JwtTokenHelperServiceService } from './services/jwt-token-helper-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AuctionFE';
  public categories;
  currentUser: TokenDto;
  constructor(private categoryService: CategoryService,
    private authenticationService: AuthenticationService,
    private jwtTokenHelperServiceService: JwtTokenHelperServiceService,
    private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x != null ? this.jwtTokenHelperServiceService.getUser(x.token) : null);
  }

  ngOnInit() {
  
    this.getCategories();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(
      data => this.categories = data,
      err => console.log(err)
    );
  }

  isAdmin(){
    //console.log(this.currentUser.AUCTION_ADMIN)
    return this.authenticationService.isLoggedIn() && Boolean(JSON.parse(this.currentUser.AUCTION_ADMIN))
  }

}
