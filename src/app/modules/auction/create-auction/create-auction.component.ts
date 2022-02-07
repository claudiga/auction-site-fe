import { Auction } from './../../../models/auction';
import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { AuctionService } from '../../../services/auction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionItem } from 'src/app/models/auction-item';
import { AuctionCategory } from 'src/app/models/auction-category';
import * as moment from "moment";
import { JwtTokenHelperServiceService } from 'src/app/services/jwt-token-helper-service.service';
import { TokenDto } from 'src/app/models/token-dto';
import { AuctionAdmin } from 'src/app/models/auction-admin';


@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.scss']
})
export class CreateAuctionComponent implements OnInit {
  auction: Auction = new Auction();
  submitted = false;
  auctionCategories: AuctionCategory[];
  auctionCategory: AuctionCategory;
  auctionItems: any;
  auctionItem: AuctionItem;
  createAuction: Auction;
  currentUser: TokenDto;
  constructor(private auctionService: AuctionService,
    private jwtTokenHelperServiceService: JwtTokenHelperServiceService,
    private router: Router,
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.currentUser = this.jwtTokenHelperServiceService.getJwtDecodedUser();
    this.getAuctionCategories();
    this.getAuctionItems();
  }

  getAuctionCategories() {
    this.categoryService.getAllAuctionCategories().subscribe(
      data => this.auctionCategories = data,
      err => console.log(err)
    );
  }

  getAuctionCategoryById(id: number) {
    var auctionCat = this.auctionCategories.find(i => i.id === id);
    this.auctionCategory = auctionCat
    return auctionCat
  }


  getAuctionItems() {
    this.auctionService.getAllAuctionItems().subscribe(
      data => this.auctionItems = data,
      err => console.log(err)
    );
  }

  getAuctionItemById(id: number) {
    this.auctionService.getAuctionItemById(id).subscribe(
      data => this.auctionItem = data,
      err => console.log(err)
    );
    return this.auctionItem;
  }

  save() {
    var utc = moment(this.auction.startDate).utc();
    this.auction.startDate = utc.format().toString()
    this.auction.auctionItem = { id: this.auctionItem.id} 
    this.auction.auctionCategory = this.auctionCategory;
    this.auction.auctionAdmin = new AuctionAdmin(parseInt(this.currentUser.ID),null)
    console.log(this.auction)
    this.auctionService.createAuction(this.auction).
      subscribe(data => {
        console.log(data);
        this.auction = new Auction();
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

  updateStartDate(dateObject){
    console.log("dateee")
    console.log("DATE in dd/mm/yyyy",dateObject.toLocaleDateString())

  }

}
