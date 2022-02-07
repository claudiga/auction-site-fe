import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionDetailViewComponent } from './auction-detail-view.component';

describe('AuctionDetailViewComponent', () => {
  let component: AuctionDetailViewComponent;
  let fixture: ComponentFixture<AuctionDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
