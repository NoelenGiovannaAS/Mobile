import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public currentValue = 100;

  public maxValue = 0;

  public increment(){
    this.currentValue++;
    if (this.maxValue < this.currentValue){
      this.maxValue = this.currentValue;
    }
  }
  public decrement(){
    this.currentValue--;
    if(this.currentValue < 0){
      this.currentValue = 0;
    }
  }
  public reset(){
    this.currentValue = 0;
  }
  public full(){
    this.currentValue = this.maxValue;
  }

  p

  
  public jsonExemplo = {
    name:'joão',
    age:23
  }

}
