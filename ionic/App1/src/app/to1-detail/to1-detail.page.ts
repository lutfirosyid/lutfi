import { Component } from '@angular/core';

@Component({
  selector: 'app-to-detail',
  templateUrl: 'to1-detail.page.html',
  styleUrls: ['to1-detail3.page.scss']
})
export class To1DetailPage {


  public namalengkap: any;
  public noktp: any;
  public email: any;
  public gender: string;
  public class: string;
  public notbot: string;
  public date: string;
  public month: string;
  public year: string;
  constructor() {}

  pesan(){
    console.log("Nama Lengkap   :  " + this.namalengkap);
    console.log("Nomor Identitas:  " +this.noktp);
    console.log("Email          :  " +this.email);
    console.log("Gender         :  " +this.gender);
    console.log("Date           :  " +this.date);
    console.log("Month          :  " +this.month);
    console.log("Year           :  " +this.year);
    console.log("Class          :  " +this.class);
    console.log("NotBot         :  " +this.notbot);
  }


}
