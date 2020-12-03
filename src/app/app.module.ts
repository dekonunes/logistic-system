import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { paginationReducer } from './store/reducers/pagination.reducer';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableModule } from './table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { GreetingComponent } from './greeting/greeting.component';
import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GreetingComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    TableModule,
    StoreModule.forRoot({ pagination: paginationReducer }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
