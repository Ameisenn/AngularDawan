import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import {TaskProviderService} from './task-provider.service';


// le decorateur
@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TaskProviderService,
  ],
  bootstrap: [AppComponent]
})
// la declaration
export class AppModule { }
