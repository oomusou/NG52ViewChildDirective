import { Component, ViewChild } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChangeColorDirective)
  private changeColorDirective: ChangeColorDirective;
  title = 'app';

  onChangeColorClick() {
    this.changeColorDirective.change('green');
  }
}
