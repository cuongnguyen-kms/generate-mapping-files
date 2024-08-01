import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { InputFormComponentComponent } from './components/input-form-component/input-form-component.component';
import { InputFormFieldComponentComponent } from './components/shared/input-form-field-component/input-form-field-component.component';
import { ChooseFileFormFieldComponentComponent } from './components/shared/choose-file-form-field-component/choose-file-form-field-component.component';
import { FileProgressComponent } from './components/shared/choose-file-form-field-component/file-progress/file-progress.component';
import { RadioButtonsComponentComponent } from './components/shared/radio-buttons-component/radio-buttons-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponentComponent,
    InputFormFieldComponentComponent,
    ChooseFileFormFieldComponentComponent,
    FileProgressComponent,
    RadioButtonsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
