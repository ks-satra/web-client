import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  datas: any = [];
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private api: ApiService
  ) { }
  ngOnInit(): void {
    this.LoadData();
  }
  LoadData() {
    this.httpClient.get(this.api.url + "api/users").subscribe((res: any) => {
      this.datas = res;
    });
  }
  Delete(id: any) {
    if (!confirm("ลบไหม ?")) return;
    this.httpClient.delete(this.api.url + "api/user/del/" + id).subscribe((res: any) => {
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
    this.router.navigate(['/user-edit/' + id]);
  }
}
