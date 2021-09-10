import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-accounts-money',
  templateUrl: './accounts-money.component.html',
  styleUrls: ['./accounts-money.component.css']
})
export class AccountsMoneyComponent implements OnInit {

  datas: any = [];
  // show = true;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private api: ApiService
  ) { }
  ngOnInit(): void {
    this.LoadData();
  }
  LoadData() {
    this.httpClient.get(this.api.url + "api/accounts_money").subscribe((res: any) => {
      this.datas = res;
    });
  }
  Delete(id: any) {
    if (!confirm("คุณต้องการลบข้อมูลไหม ?")) return;
    this.httpClient.delete(this.api.url + "api/accounts_money/del/" + id).subscribe((res: any) => {
      if (res.status == "OK") {
        this.LoadData();
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
  Edit(id: any) {
    this.router.navigate(['/accounts-money-edit/' + id]);
  }

}
