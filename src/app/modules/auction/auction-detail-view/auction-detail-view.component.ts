import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction';

@Component({
  selector: 'app-auction-detail-view',
  templateUrl: './auction-detail-view.component.html',
  styleUrls: ['./auction-detail-view.component.scss']
})
export class AuctionDetailViewComponent implements OnInit {

  @Input() auction: Auction;

  constructor() { }

  ngOnInit(): void {
  }

  getQuantityLeft(auction){

    if(auction.bidCount == 0){
      return 0;
    }
    var a = 100 * (auction.bidCount/auction.quantity);

    return a;
  }

}
