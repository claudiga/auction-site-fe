import { Auction } from './auction';
export class AuctionUser {
    id: number;
    name: string;
    
    constructor(id: number,
        name: string) {
        this.id = id;
        this.name = name;

    }
}
