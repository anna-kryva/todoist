import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/modules/material.module';
import { SharedModule } from './shared/modules/shared.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TaskComponent } from './home/components/task/task.component';
import { CreateTaskComponent } from './home/components/create-task/create-task.component';
import { SearchComponent } from './shared/components/search/search.component';

import { SearchPipe } from './shared/pipes/search.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    HeaderComponent,
    SidebarComponent,
    TaskComponent,
    CreateTaskComponent,
    SearchComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
