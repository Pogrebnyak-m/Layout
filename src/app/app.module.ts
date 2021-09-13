import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SideMenuComponent } from './main-page/side-menu/side-menu.component';
import { SearchBarComponent } from './main-page/search-bar/search-bar.component';
import { MainTitleComponent } from './main-page/main-title/main-title.component';
import { MainContentComponent } from './main-page/main-content/main-content.component';
import { SecondPageTitleComponent } from './second-page/second-page-title/second-page-title.component';
import { SecondPageContentComponent } from './second-page/second-page-content/second-page-content.component';
import { ListComponent } from './main-page/main-content/list/list.component';

const routes = [
  {path: '', component: MainPageComponent},
  {path: 'second-page', component: SecondPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SecondPageComponent,
    SideMenuComponent,
    SearchBarComponent,
    MainTitleComponent,
    MainContentComponent,
    SecondPageTitleComponent,
    SecondPageContentComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
