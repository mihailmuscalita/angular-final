import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-active-competition-details',
  templateUrl: './active-competition-details.component.html',
  styleUrls: ['./active-competition-details.component.scss']
})
export class ActiveCompetitionDetailsComponent implements OnInit {

  title : string;
  reward : string;
  information:boolean;

  constructor(private router: Router,
              private dialogRef: MatDialogRef<ActiveCompetitionDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

      this.setProperties();
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  private setProperties(){
    if (this.data !== null){
      this.title = this.data.competitionTitle;
      this.reward = this.data.competitionReward;
      this.information = true;
    }
  }

}
