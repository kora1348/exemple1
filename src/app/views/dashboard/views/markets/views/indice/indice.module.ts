import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IndiceComponent} from './indice.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [IndiceComponent],
})
export class IndiceModule {}
