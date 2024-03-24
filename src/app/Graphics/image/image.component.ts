import { Component, Input, OnInit } from '@angular/core';
import { Dimension, Transform2D } from '../../MathLib/Transform2D';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit{
 
  @Input({required: true}) args!: ImageArgs;
  
  ngOnInit(): void {
    if(this.args.scale) {
      this.args.dim.x *= this.args.scale;
      this.args.dim.y *= this.args.scale;

      console.log(this.args.transform);
    }
  }
  
}


export interface ImageArgs{
  src: string;
  dim: Dimension;
  scale?: number;
  pointer?: boolean;
  transform?: Transform2D;
}
