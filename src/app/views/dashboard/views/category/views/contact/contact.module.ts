import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ContactComponent} from './contact.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ContactComponent],
})
export class ContactModule {}
