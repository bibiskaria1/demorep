import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlanService } from '../shared/plan.service';
@Component({
  selector: 'app-newreg',
  templateUrl: './newreg.component.html',
  styleUrls: ['./newreg.component.css']
})
export class NewregComponent implements OnInit {

  constructor(public objservice:PlanService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    {form.form.reset();}
    else{
      this.objservice.ppData={PId:0,Pname:'',Amount:0,Start:new Date("2001-11-11"),End:new Date("2001-11-11"),MrefID:0};
    }
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objservice.ppData);
  if(this.objservice.ppData.PId==0){
  this.insertRecord(form);}
  else{

    this.updateRecord(form);
  }

}

  insertRecord(form:NgForm)
    {
      this.objservice.postPlan().subscribe(res=>
        {
          this.resetForm(form);
          this.objservice.getPlanList();
          alert('Plan Registration Success!!!');
        },
        err=>{
          console.log(err);

          alert('Error!!!'+err);})
    }
  updateRecord(form:NgForm)
    {

      this.objservice.putPlan().subscribe(res=>
      {
        this.resetForm(form);
        this.objservice.getPlanList();
        alert('Plan record Updated!!!');
      },
      err=>{alert('Error!!!'+err);}
      )
    }
}

