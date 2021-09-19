import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// declarations:
// declarations specifies the components that are defined in this module. This is an
// important idea in Angular:
// You have to declare components in a NgModule before you can use them in your
// templates.
// You can think of an NgModule a bit like a “package” and declarations states what
// components are “owned by” this module.
// You may have noticed that when we used ng generate, the tool automatically added
// our components to this declarations list! The idea is that when we generated a new
// component, the ng tool assumed we wanted it to belong to the current NgModule.

// imports:
// imports describes which dependencies this module has. We’re creating a browser
// app, so we want to import the BrowserModule.
// If your module depends on other modules, you list them here.

// providers:
// providers is used for dependency injection. So to make a service available to be
// injected throughout our application, we will add it here.

// bootstrap:
// bootstrap tells Angular that when this module is used to bootstrap an app, we need
// to load the AppComponent component as the top-level component.
