import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';

import { DisciplinaRouting } from './disciplina.routing';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, MatTooltipModule, MatOptionModule, MatNativeDateModule, MatDatepickerModule, MAT_DATE_LOCALE, MatListModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfessorComponent } from './professor/professor.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ProfessorService } from './professor/professor.service';
import { QrcodeService } from './qrcode/qrcode.service';
import { DisciplinaService } from '../services/disciplina.service';

@NgModule({
  imports: [
    CommonModule,
    DisciplinaRouting,
    RouterModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [
    FormBuilder,
    DisciplinaService,
    QrcodeService,
    HttpClient,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
  ],
  entryComponents: [
    ProfessorComponent, 
    QrcodeComponent
  ],
  declarations: [
    ConsultaComponent, 
    FormularioComponent, 
    QrcodeComponent, 
    ProfessorComponent
  ]
})
export class DisciplinaModule { }