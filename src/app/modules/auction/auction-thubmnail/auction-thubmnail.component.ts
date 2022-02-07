import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-auction-thubmnail',
  templateUrl: './auction-thubmnail.component.html',
  styleUrls: ['./auction-thubmnail.component.scss']
})
export class AuctionThumbailComponent implements OnInit {
  public auctions: Auction[];
  public recentlyAuctions: Auction[];
  public endingAuctions: Auction[];
  public recentlyEndedAuctions: Auction[];

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.getAuctions();
    this.getRecentlyAuctions();
    this.getEndingAuctions();
    this.getRecentlyEnded();
  }

  getAuctions() {
    this.auctionService.getAllAuctions().subscribe(
      data => this.auctions = data,
      err => console.error(err)
    );
  }
  getRecentlyAuctions() {
    this.auctionService.getRecentlyAddedAuctions().subscribe(
      data => this.recentlyAuctions = data,
      err => console.error(err)
    );
  }

  getEndingAuctions() {
    this.auctionService.getEndingAuctions().subscribe(
      data => this.endingAuctions = data,
      err => console.error(err)
    );
  }

  getRecentlyEnded() {
    this.auctionService.getRecentlyEndedAuctions().subscribe(
      data => this.recentlyEndedAuctions = data,
      err => console.error(err)
    );
  }

  getQuantityLeft(auction){
    if(auction.bidcount == 0){
      return 0;
    }
    return 100 * (auction.bidcount/auction.quantity);
  }

}
