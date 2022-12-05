import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from './plan.model';
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  ppData:Plan=new Plan();
  readonly ppApiUrl='http://localhost:31094/api/Plans';
  ppList:Plan[];
  
  constructor(private objcHttp:HttpClient) {  }
  
  putPlan()
  {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.PId,this.ppData);
  }
  postPlan()
  {
    console.log(this.ppData);
    
    return this.objcHttp.post(this.ppApiUrl,this.ppData);
  }
  getPlanList()
  {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList=res as Plan[]);
  
}  

}
