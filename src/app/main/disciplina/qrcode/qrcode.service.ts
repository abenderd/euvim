import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class QrcodeService {

  constructor(private _httpClient: HttpClient ) { }
  
  private _urlQrcode = environment.url + "/api/v1/disciplinas";

  obter(id) {
    return this._httpClient.get<any>(this._urlQrcode + '/' + id);
  }

}