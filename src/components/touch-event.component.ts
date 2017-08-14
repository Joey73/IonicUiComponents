import { Component } from "@angular/core";

@Component({
    selector: 'app-touch-event',
    templateUrl: 'touch-event.component.html',
})
export class TouchEventComponent {
  onElementClicked(){
    console.log('I was clicked or touched');
  }
  
  onElementTapped(){
    console.log('I was tapped');
  }

  onElementPressed() {
    console.log('I was pressed');
  }
}