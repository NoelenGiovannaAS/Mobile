import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public cash;
  public current = 0;
  public maxValue = 0;

  public deposit(){
    if (this.cash == null){
      this.cash = this.current;
    }else{
      this.current += this.cash;
    }
  }
  public withdraw(){
    this.current -= this.cash;
    /*if(this.current < 0){
      this.current = 0;
    }*/
  }
  public reset(){
    this.cash = this.current;
  }
  
  public getItAll(){
    if(this.current > 0){
      this.current -= this.current;
    }
    
  }
  
  public erase(){
    this.cash = null;
  }
}
