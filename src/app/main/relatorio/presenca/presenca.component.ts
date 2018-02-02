import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaService } from '../../services/disciplina.service';
import { RelatorioService } from '../relatorio.service';
@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {
  public disciplina: any;
  public filtred: boolean;
  
  public relatorio= [];
  
  public disciplinas= [];

  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder, 
    private _disciplinaService: DisciplinaService, 
    private _relatorioService: RelatorioService) { 
    this.form = this._formBuilder.group({
      disciplina: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required]
    });
  }

  ngOnInit() {
    this._disciplinaService.listar().subscribe(suc => {
      this.disciplinas = suc;
    });
  }

  gerarRelatorio () {
    this.filtred=true;
    this.relatorio=null;

    this.disciplina = this.disciplinas.find((item) =>  item.id == this.form.value.disciplina );

    this._relatorioService.listarPresencaPorDisciplina(this.form.value).subscribe(suc => {
      this.relatorio = suc;
    })
    
  }

}
