import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QrcodeService } from './qrcode.service';

@Component({
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  public urlQrCode = null;

  constructor(public dialogRef: MatDialogRef<QrcodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _qrcodeService : QrcodeService) { }

  ngOnInit() {
    this.urlQrCode = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=207x207&chl=" +
    btoa(JSON.stringify(this.data));
  }

}
