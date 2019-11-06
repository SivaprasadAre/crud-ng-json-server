import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { stringify } from '@angular/core/src/render3/util';
// import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // public isCollapsed = true;
  // currentJustify = 'start';
  // titleBig = 'task';
  // display = 'none';
  // subModules=[{active:true,name:"S"},{active:false,name:"M"},{active:false,name:"L"},{active:false,name:"XL"}];
  // subTitles=[{title:"Man"},{title:"women"},{title:"Kides"}];
  // sizeModule=[];
  constructor(){}
  navbarOpen = false;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
}
