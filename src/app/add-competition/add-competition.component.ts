import { Component, OnInit } from '@angular/core';
import {AddMotel} from '../models/add-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiServices} from '../../services/api.services';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss']
})
export class AddCompetitionComponent implements OnInit {

  addModel = new AddMotel();
  competitionForm: FormGroup;

  constructor(private router: Router,
              private apiService: ApiServices,
              private competitionFormBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddCompetitionComponent>) { }

  ngOnInit() {
    this.competitionForm = this.competitionFormBuilder.group({
      competitionTitleCurrent: [this.addModel.competitionTitleCurrent , [
        Validators.required
      ]],
      competitionRewardCurrent: [this.addModel.competitionRewardCurrent, [
        Validators.required
      ]]
    });
  }

  addCompetition(){
    this.apiService.addCompetition(this.addModel.competitionTitleCurrent, this.addModel.competitionRewardCurrent)
      .subscribe(data=>{
        console.log(data);
        this.dialogRef.close();
      });
  }

  close(){
    this.dialogRef.close();
  }

}
