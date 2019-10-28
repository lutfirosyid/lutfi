import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TkkPageRoutingModule } from './tkk.router.module';

import { TkkPage } from './tkk.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TkkPageRoutingModule
  ],
  declarations: [TkkPage]
})
export class TkkPageModule {}
