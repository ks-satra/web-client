import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {
  prefixs: any = [];
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
    this.httpClient.get(this.api.url + "api/prefixs").subscribe((res: any) => {
      this.prefixs = res;
    });
  }
  AddData() {
    this.httpClient.post(this.api.url + "api/account/add", this.data).subscribe((res: any) => {
      if (res.status == "OK") {
        this.router.navigate(['/accounts']);
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
