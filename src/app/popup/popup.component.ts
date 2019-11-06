import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public isCollapsed = true;
  currentJustify = 'start';
  titleBig = 'task';
  display = 'none';
  subModules=[{active:true,name:"S"},{active:false,name:"M"},{active:false,name:"L"},{active:false,name:"XL"}];
  subTitles=[{title:"Man"},{title:"women"},{title:"Kides"}];
  sizeModule=[];
  constructor() { }

  ngOnInit() {
  }
  openModal(){
    this.display='block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  clickTabs(event){
    console.log(event);
  }
  activateClass(subModule){
    subModule.active = !subModule.active; 
    // this.subModules = this.subModules.map((item,key)=>{
    //   return item.name === subModule.name?{active:true,name:item.name}:{active:false,name:item.name};
    // });
  }
  aisCollapsed(){
    this.isCollapsed  = !this.isCollapsed;

  }
}
