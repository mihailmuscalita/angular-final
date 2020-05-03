import {NgModule} from '@angular/core';


import {MatButtonModule, MatInputModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule
  ]
})

export class MaterialModule { }
