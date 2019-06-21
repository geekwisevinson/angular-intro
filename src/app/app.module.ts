import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { CharactersComponent } from './characters/characters.component';
import { IndividualCharacterComponent } from './individual-character/individual-character.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './components/email.component';
import { PhoneComponent } from './components/phone.component';
import { PhonePipe } from './pipes/phone.pipe';
import { AmiibosComponent } from './amiibos/amiibos.component';
import { IndividualAmiiboComponent } from './individual-amiibo/individual-amiibo.component';
import { SearchPipe } from './pipes/search.pipe';
import { SimpleFormComponent } from './views/simple-form/simple-form.component';
import { DesignedComponent } from './shared/designed/designed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    CharactersComponent,
    IndividualCharacterComponent,
    ContactComponent,
    EmailComponent,
    PhoneComponent,
    PhonePipe,
    AmiibosComponent,
    IndividualAmiiboComponent,
    SearchPipe,
    SimpleFormComponent,
    DesignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
