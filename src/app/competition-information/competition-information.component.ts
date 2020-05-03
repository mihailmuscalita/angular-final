import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-competition-information',
  templateUrl: './competition-information.component.html',
  styleUrls: ['./competition-information.component.scss']
})
export class CompetitionInformationComponent implements OnInit {

  information : boolean;

  constructor( private dialogRef: MatDialogRef<CompetitionInformationComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {

    this.checkValue();
  }

  ngOnInit() {
  }

  private checkValue(){
    console.log("Vini datili!" + "  "+ this.data);
    if (this.data != null){
      this.information = true;
    }
  }

  close(){
    this.dialogRef.close();
  }

}
