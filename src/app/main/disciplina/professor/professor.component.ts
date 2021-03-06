import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfessorService } from './professor.service';

@Component({
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  public listaProfessores = [];

  constructor(public dialogRef: MatDialogRef<ProfessorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _professorService : ProfessorService) 
  { }

  ngOnInit() {
    this.data.professores.forEach(id => {
      this._professorService.obter(id).subscribe(suc => {
        this.listaProfessores.push(suc);
      })      
    });
  }

}
