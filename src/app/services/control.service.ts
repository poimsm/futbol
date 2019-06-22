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
  showLogin = false;
  showUserProfile = false;
  showMenuPartidos = false;
  textoMenuPartidos = 'Todo';
  showHeader: boolean;

  swapData: any;

  isModal: boolean;
  isPartido: boolean;
  back = '';

  pages = [
    {
      page: 'partidos',
      back: '',
      isActive: false
    },
    {
      page: 'partido',
      back: 'partidos',
      isActive: false
    },
    {
      page: 'mensajes',
      back: '',
      isActive: false
    },
    {
      page: 'mensaje',
      back: 'mensajes',
      isActive: false
    }
  ];

  constructor() { }

  setPage() {

  }

  getCurrentPage() {
    let currentPage = '';
    this.pages.forEach(page => {
      if (page.isActive) {
        currentPage = page.page;
      }
    });
    return currentPage;
  }

  activeOnePage(page) {
    this.pages.forEach(data => {
      if (data.page == page) {
        data.isActive = true;
      } else {
        data.isActive = false;
      }
    });
  }

  getBack() {
    let back = '';
    this.pages.forEach(data => {
      if (data.isActive) {
        back = data.back;
      }
    });
    return back;
  }

  setPageState(page) {
    if (page == 'appInit') {
      this.showHeader = true;
    }
    if (page == 'partidos') {
      this.showHeader = true;
    }
    if (page == 'mensajes') {
      this.showHeader = true;
    }
    if (page == 'partido') {
      this.showHeader = false;
    }
    if (page == 'mensaje') {
      this.showHeader = false;
    }
    if (page == 'pagar') {
      this.showHeader = false;
    }
    if (page == 'compra-exitosa') {
      this.showHeader = true;
    }
  }

  openPage(page, type) {
    if (type == 'modal') {
      this.isModal = true;
    } else {
      this.isModal = false;      
    }
      this.isHome = true;
      this.activeOnePage(page);
      this.back = this.getBack();    
  }

  openModal(page) {
    this.activeOnePage(page);
    this.back = this.getBack();
  }

}
