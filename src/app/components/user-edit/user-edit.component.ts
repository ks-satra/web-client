import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  prefixs: any = [];
  data: any = {};
  id: any = "";
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.Index();
  }
  Index() {
    this.httpClient.get(this.api.url + "api/prefixs").subscribe((res: any) => {
      this.prefixs = res;
    });
    this.httpClient.get(this.api.url + "api/user/" + this.id).subscribe((res: any) => {
      this.data = res;
    });
  }
  EditData() {
    this.httpClient.put(this.api.url + "api/user/edit/" + this.id, this.data).subscribe((res: any) => {
      if (res.status == "OK") {
        this.router.navigate(['/']);
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
