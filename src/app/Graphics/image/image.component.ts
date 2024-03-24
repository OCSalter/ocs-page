import { Component, Input, OnInit } from '@angular/core';
import { Dimension, Transform2D } from '../../MathLib/Transform2D';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit{
 
  @Input({required: true}) args!: ImageArgs;
  
  public x: number = 1;
  public y: number = 1;

  ngOnInit(): void {
    this.x = this.args.dim.x;
    this.y = this.args.dim.y;
    if(this.args.scale) {
      this.x *= this.args.scale;
      this.y *= this.args.scale;
    }
  }
}


export interface ImageArgs{
  src: string;
  dim: Dimension;
  scale?: number;
  pointer?: boolean;
  filters?: ImageFilters;
  transform?: Transform2D;
}

interface ImageFilters{
  greyScale?: number;
  brightness?: number;
  invert?: number;
}