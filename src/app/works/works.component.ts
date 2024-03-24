import { Component } from '@angular/core';
import { ImageArgs } from '../Graphics/image/image.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  public imageArgs: ImageArgs = {
    src:"assets/flwr-high.png",
    dim: {x: 1000, y: 1000},
    scale: 5/10,
    transform: {translate:{x:30, y: 30},}
  }
}
