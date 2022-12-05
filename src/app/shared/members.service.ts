import { Injectable } from '@angular/core';
import { Members } from './members.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  readonly ApiUrl='http://localhost:31094/api/Members';
  mlist:Members[];
  mdata:Members=new Members();
  constructor(private obj:HttpClient) { }
  getMemberList(){
    this.obj.get(this.ApiUrl).toPromise().then(res=>this.mlist=res as Members[]);
   }
  putMember(){
    return this.obj.put(this.ApiUrl+"/"+this.mdata.Mid,this.mdata);
  }
  postMember(){
    return this.obj.post(this.ApiUrl,this.mdata);
  }
}