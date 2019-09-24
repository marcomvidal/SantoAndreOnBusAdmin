import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideLinkComponent } from './side-link/side-link.component';
import { SideLinkBarComponent } from './side-link-bar/side-link-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    SideLinkComponent,
    SideLinkBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideLinkComponent,
    SideLinkBarComponent,
    TopBarComponent
  ]
})
export class StructureModule { }
