import { Purchasing } from './purchasing';
import { Bidding } from './bidding';
import { Category } from './category';
import { AuctionItem } from './auction-item';
import { AuctionCategory } from './auction-category';
import { AuctionAdmin } from './auction-admin';


export class Auction{
    id: number;
   startDate: string;
   title: string;
    description:string;
   scheduledEndDate: string;
    auctionItem: AuctionItem;
   auctionPrice: string;
   auctionAdmin?: AuctionAdmin;
   bidCount: number;
   quantity: number; 
   auctionCategory: AuctionCategory;


}
