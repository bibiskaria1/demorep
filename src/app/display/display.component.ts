import { Component, OnInit } from '@angular/core';
import { PlanService } from '../shared/plan.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public objSrv:PlanService) { }

  ngOnInit(): void {
    this.objSrv.getPlanList();
  }
 fillForm(selectedPP)
 {
  this.objSrv.ppData=Object.assign({},selectedPP);
 }

}
