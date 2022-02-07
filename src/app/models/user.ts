import { Purchasing } from './purchasing';
import { Bidding } from './bidding';
import { Address } from './address';
export class User {
    id?: number;
    email?: string;
    password?: string;
    creationDate?: Date;
    username?: string;
    firstName?: string;
    surname?: string;
    phoneNumber?: string;
    type?: string;
    address?: Address[];
    bidding?: Bidding[];
    purchasing?: Purchasing[];
    token?: string;
}
