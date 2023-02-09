import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppService } from './app.service';

@NgModule({
  imports: [BrowserModule, FormsModule, InfiniteScrollModule, MatCardModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
