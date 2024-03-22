import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from
"@angular/common/http";
import { HttpClientInMemoryWebApiModule } from
"angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TypeFilterPipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
