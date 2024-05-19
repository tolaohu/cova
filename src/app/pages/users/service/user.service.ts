import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;

  access = sessionStorage.getItem('access');
  refresh = sessionStorage.getItem('refresh');

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.post(`${this.baseUrl}user/profile`, null, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
    });
  }

  logout() {
    return this.http.post(`${this.baseUrl}auth/logout`, null, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
    });
  }

  changePassword(passObj: any) {
    return this.http.post(`${this.baseUrl}/user/password`, passObj, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),

      observe: 'response',
    });
  }

  refreshToken() {
    return this.http.post(`${this.baseUrl}auth/refresh/token`, null, {
      headers: new HttpHeaders({
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  getAllMerchant() {
    return this.http.get(`${this.baseUrl}customer`, {
      headers: new HttpHeaders({
        token: `sk_live_e8p1w28tRRMAEPwP38tPXKkqdgNL0bmpb94ojBGM5CCWoq4b`,
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  getMerchantById(customerId: string) {
    return this.http.get(`${this.baseUrl}customer/${customerId}`, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  getMerchantByPhoneNumber(phoneNumber: string) {
    return this.http.get(
      `${this.baseUrl}customer/phone?phoneNumber=${phoneNumber}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  updateMerchantInfo(infoObj: any, customerId: string) {
    return this.http.put(`${this.baseUrl}customer/${customerId}`, infoObj, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  createWallet(walletObj: any) {
    return this.http.post(`${this.baseUrl}wallet`, walletObj, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  getAllWallet() {
    return this.http.get(`${this.baseUrl}wallet`, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  getWalletByMerchant(customerId: string) {
    return this.http.get(
      `${this.baseUrl}wallet/customer?customerId=${customerId}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  creditWallet(creditInfo: any) {
    return this.http.post(`${this.baseUrl}customer/credit`, creditInfo, {
      headers: new HttpHeaders({
        token: `sk_live_e8p1w28tRRMAEPwP38tPXKkqdgNL0bmpb94ojBGM5CCWoq4b`,
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  debitWallet(debitInfo: any) {
    return this.http.post(`${this.baseUrl}customer/debit`, debitInfo, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  freezeWallet(info: any) {
    return this.http.post(`${this.baseUrl}customer/close`, info, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  unFreezeWallet(info: any) {
    return this.http.post(`${this.baseUrl}customer/enable`, info, {
      headers: new HttpHeaders({
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  batchCreditWallet(creditInfo: any) {
    return this.http.post(
      `${this.baseUrl}wallet/batch-credit-customer-wallet`,
      creditInfo,
      {
        headers: new HttpHeaders({
          token: `sk_live_e8p1w28tRRMAEPwP38tPXKkqdgNL0bmpb94ojBGM5CCWoq4b`,
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  batchDebitWallet(debitInfo: any) {
    return this.http.post(
      `${this.baseUrl}wallet/batch-debit-customer-wallet`,
      debitInfo,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  merchantBatchCreditWallet(creditInfo: any) {
    return this.http.post(
      `${this.baseUrl}wallet/customer-batch-credit-customer-wallet`,
      creditInfo,
      {
        headers: new HttpHeaders({
          token: `sk_live_e8p1w28tRRMAEPwP38tPXKkqdgNL0bmpb94ojBGM5CCWoq4b`,
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  fundMerchantWallet(fundInfo: any) {
    return this.http.post(`${this.baseUrl}/merchant/fund-wallet`, fundInfo, {
      headers: new HttpHeaders({
        token: `sk_live_e8p1w28tRRMAEPwP38tPXKkqdgNL0bmpb94ojBGM5CCWoq4b`,
        'X-Access-Token': this.access ? this.access : '',
        'X-Refresh-Token': this.refresh ? this.refresh : '',
      }),
      observe: 'response',
    });
  }

  merchantTransaction(
    page: number,
    type: string,
    status: string,
    category: string
  ) {
    return this.http.get(
      `${this.baseUrl}/merchant/transactions?page=${page}&type=${type}&status=${status}&category=${category}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  merchantTransactionDetail(transactionReference: string) {
    return this.http.get(
      `${this.baseUrl}/merchant/transaction/${transactionReference}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  customerTransaction(
    page: number,
    type: string,
    perPage: number,
    customerId: string
  ) {
    return this.http.get(
      `${this.baseUrl}/transaction/customer?customerId=${customerId}&page=${page}&type=${type}&perPage=${perPage}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  walletTransaction(page: number, customerId: string) {
    return this.http.get(
      `${this.baseUrl}/wallet/transactions?customerId=${customerId}&page=${page}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  batchTransaction(
    page: number,
    type: string,
    perPage: number,
    search: string,
    category: string
  ) {
    return this.http.get(
      `${this.baseUrl}/transaction/batch?search=${search}&category=${category}&type=${type}&page=${page}&perPage=${perPage}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }

  batchTransactionDetail(transactionReference: string) {
    return this.http.get(
      `${this.baseUrl}/transaction/batch/${transactionReference}`,
      {
        headers: new HttpHeaders({
          'X-Access-Token': this.access ? this.access : '',
          'X-Refresh-Token': this.refresh ? this.refresh : '',
        }),
        observe: 'response',
      }
    );
  }
}
