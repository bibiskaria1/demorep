import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MembersService } from '../shared/members.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public objsignup:MembersService) { }

  ngOnInit(): void {
   this.resetForm();
    }
    resetForm(form?:NgForm){
      if(form!=null)
      {form.form.reset();}
      else{
        this.objsignup.mdata={Mid:0,MName:'',Username:'',Password:'',Address:'',State:'',Country:'',Email:'',Contact:'',DOJ:new Date("2020-03-05")};
      }
    }
    onSubmit(form:NgForm){
      if(this.objsignup.mdata.Mid==0){
        this.insertRecord(form);
      }else{
        this.updateRecord(form);
      }
    }
    insertRecord(form:NgForm){
      this.objsignup.postMember().subscribe(res=>{
        this.resetForm(form);
  
        this.objsignup.getMemberList();
        alert('Record is Inserted');
      },
        err=>{alert('Error!!!'+err);})
    }
  
    updateRecord(form:NgForm){
      this.objsignup.putMember().subscribe(res=>{
        this.resetForm(form);
  
        this.objsignup.getMemberList();
        alert('Record is Updated');
      },
        err=>{alert('Error!!!'+err);})
    }
  }


