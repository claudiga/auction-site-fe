import { AuctionUser } from './auction-user';
export class AuctionAdmin {
    id: number;
    auctionUser: AuctionUser;
    
    constructor(id: number,
        auctionUser: AuctionUser) {
        this.id = id;
        this.auctionUser = auctionUser;

    }
}
