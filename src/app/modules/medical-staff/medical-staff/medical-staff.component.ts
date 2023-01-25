import { Component, OnInit } from '@angular/core';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'


@Component({
  selector: 'app-medical-staff',
  templateUrl: './medical-staff.component.html',
  styleUrls: ['./medical-staff.component.css']
})
export class MedicalStaffComponent implements OnInit {

  constructor() { }

  private eventData: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  
  ngOnInit(): void {
  }

}
