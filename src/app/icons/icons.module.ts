import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Star, Heart, X, Play } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Star,
  Heart,
  X,
  Play
};

@NgModule({
  imports: [
    FeatherModule.pick(icons),
	CommonModule
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }