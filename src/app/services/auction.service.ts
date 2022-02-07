import { Auction } from './../models/auction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuctionItem } from '../models/auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.auction}`;
  
  constructor(private http: HttpClient) { }

  getAllAuctionItems(): Observable<AuctionItem[]> {
    return this.http.get<AuctionItem[]>(`${this.baseUrl}/items`);
  }

  getAuctionItemById(id: number): Observable<AuctionItem> {
    return this.http.get<AuctionItem>(`${this.baseUrl}/items/${id}`);
  }

  getAllAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(`${this.baseUrl}`);
  }

  getAuctionById(id: number): Observable<Auction> {
    return this.http.get<Auction>(`${this.baseUrl}/${id}`);
  }

  deleteAuctionById(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/${id}`);
  }

  createAuction(auction: Auction): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}`, auction);
  }

  createAuctionItem(auctionItem: AuctionItem): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}/items`, auctionItem);
  }

  updateAuctionById(id: number, value: any): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, value);
  }

  getRecentlyAddedAuctions(): Observable<Auction[]>{
    return this.http.get<Auction[]>(`${this.baseUrl}/recently`);
  }

  getEndingAuctions():Observable<Auction[]>{
    return this.http.get<Auction[]>(`${this.baseUrl}/ending`);
  }

  getRecentlyEndedAuctions():Observable<Auction[]>{
    return this.http.get<Auction[]>(`${this.baseUrl}/recentlyEnded`);
  }

}
