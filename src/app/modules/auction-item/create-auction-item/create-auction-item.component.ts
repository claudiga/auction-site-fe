import { Auction } from './../../../models/auction';
import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { AuctionService } from '../../../services/auction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionItem } from 'src/app/models/auction-item';
import { AuctionAdmin } from 'src/app/models/auction-admin';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtTokenHelperServiceService } from 'src/app/services/jwt-token-helper-service.service';


@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction-item.component.html',
  styleUrls: ['./create-auction-item.component.scss']
})
export class CreateAuctionItemComponent implements OnInit {
  photoBase64: string;
  auctionItem: AuctionItem = new AuctionItem();
  submitted = false;
  categories: any;
  category: Category;
  createAuction: Auction;
  currentUser: any;
  constructor(private auctionService: AuctionService,
     private jwtTokenHelperServiceService: JwtTokenHelperServiceService,
    private router: Router,
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
     this.currentUser = this.jwtTokenHelperServiceService.getJwtDecodedUser();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(
      data => this.categories = data,
      err => console.log(err)
    );
  }

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(
      data => this.category = data,
      err => console.log(err)
    );
    return this.category;
  }

  save() {
    var tokenPayload = this.currentUser

  
    this.auctionItem.category = this.category;
    this.auctionItem.photoUrl = this.photoBase64;
    this.auctionItem.auctionAdmin = new AuctionAdmin(tokenPayload.ID,null)
    console.log(this.auctionItem)
    this.auctionService.createAuctionItem(this.auctionItem).
      subscribe(data => {
        console.log(data);
        this.auctionItem = new AuctionItem();
        this.goToList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['']);
  }

  public files: any[];

contructor() { this.files = []; }

onFileChanged(event: any) {
  this.files = event.target.files;
  var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);

}

_handleReaderLoaded(readerEvt) {
  var binaryString = readerEvt.target.result;
         this.photoBase64= btoa(binaryString);
 }

}
