import { User } from './user';
import { Auction } from './auction';
export class Bidding {
    id?: number;
    auction?: Auction;
    user?: User;
    bidderId?: number;
    auctionId?: number;


auctionName?: string;
bidId?: number;
boughtDate?: string;
endDate?: string;
itemId?: number;
paidAmount?: number;
photoBase64?: string;

}
