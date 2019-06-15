import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  isHome = false;
  showSidenav = false;
  isUser = true;
  showBuyNow = false;
  showBestPlayer = false;
  showRankingGame = false;

  constructor() { }
  
}
