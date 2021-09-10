import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-account-money-add',
  templateUrl: './account-money-add.component.html',
  styleUrls: ['./account-money-add.component.css']
})
export class AccountMoneyAddComponent implements OnInit {

  accounts_money_type: any = [];
  accounts: any = [];
  data: any = {};
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private api: ApiService
  ) { }
  ngOnInit(): void {
    this.Index();
  }
  Index() { 
    this.httpClient.get(this.api.url + "api/accounts_money_type").subscribe((res: any) => {
      this.accounts_money_type = res;
    });

    this.httpClient.get(this.api.url + "api/accounts").subscribe((res: any) => {
      this.accounts = res;
    });
  }
  AddData() {
    this.httpClient.post(this.api.url + "api/account_money/add", this.data).subscribe((res: any) => {
      if (res.status == "OK") {
        this.router.navigate(['/accounts-money']);
      }
    }, (error: any) => {
      var errors = error.error.errors;
      var text = "";
      for (const [i, v] of Object.entries(errors)) {
        let vv: any = v;
        for (const [j, msg] of Object.entries(vv)) {
          text += msg + "\n";
        }
      }
      alert(text);
    });
  }

}
