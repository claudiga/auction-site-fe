import { Auction } from './auction';
export class AuctionCategory {
    id: number;
    auctionCategoryName: string;
    displayRank: string;

    
    constructor(id: number,
        auctionCategoryName: string,
        displayRank: string
        ) {
        this.id = id;
        this.auctionCategoryName = auctionCategoryName
        this.displayRank = displayRank;

    }
}
