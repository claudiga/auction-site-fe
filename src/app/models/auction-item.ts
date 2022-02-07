import { Category } from './category';
import { AuctionUser } from './auction-user';
import { AuctionAdmin } from './auction-admin';

export class AuctionItem {
    id: number;
    itemName?: string;
    category?: Category;
    auctioner?: AuctionUser;
    photoUrl?: string;
    description?: string;
    auctionAdmin?: AuctionAdmin;
    
    // constructor(id: number,
    //     name: string,
    //     category: Category,
    //     auctioner: AuctionUser,
    //     photoUrl: string
    //     ) {
    //     this.id = id;
    //     this.name = name;
    //     this.category = category;
    //     this.auctioner = auctioner;
    //     this.photoUrl = photoUrl;
    // }

    constructor(){}    
}
