import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.loadPage()
  }

  loadPage(){
    console.log("~Component: loadPage() initialzed~")
    let tempObs = this._httpService.getAllProducts();
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadPage() response~", data)
      this.products = data;
    })
  }

}