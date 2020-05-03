import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { Competitionmodel } from '../../appmodels/competitionmodel';
import {ApiServices} from '../../services/api.services';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AddCompetitionComponent} from '../add-competition/add-competition.component';
import {ActiveCompetitionDetailsComponent} from '../active-competition-details/active-competition-details.component';
import {CompetitionInformationComponent} from '../competition-information/competition-information.component';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  dataSource;
  displayedColumns = ['competitionTitle', 'competitionReward', 'buttonStop'];
  currentCompetition = new Competitionmodel;
  existCompetition: boolean;
  competitionStopped : boolean;
  isPopupOpened = true;

  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;
  constructor(private router: Router,
              private apiService: ApiServices,
              private dialog?: MatDialog) {
      this.loadData();
  }

  ngOnInit(){
  }

  loadData() {
    this.apiService.getCompetitions()
      .subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data.filter(eachObject =>  eachObject.competitionStatus === 0));
        this.dataSource.paginator = this.paginator;
        console.log(this.currentCompetition);
      });
  }

  onCompetitionSubmit(event: any) {
      const target = event.currentTarget.id;
      this.apiService.startCompetition(target).subscribe(competition => {
        this.currentCompetition = competition;
        this.existCompetition = true;
        this.competitionStopped = false;
        this.isPopupOpened = true;
        console.log("Comeptitia curenta ="+ competition);
        const dialogRef = this.dialog.open(CompetitionInformationComponent, {
          data : this.currentCompetition
        });

        dialogRef.afterClosed().subscribe(result => {
          this.isPopupOpened = false;
        });
      });
  }

  addCompetition(){
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddCompetitionComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      this.loadData();
    });
  }

  searchForCompetition(){
    this.apiService.getActiveCompetition()
      .subscribe(competition=>{
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(ActiveCompetitionDetailsComponent, {
          data: competition
        });


        dialogRef.afterClosed().subscribe(result => {
          this.isPopupOpened = false;
        });
      });
  }

  stopCompetition(){
      this.apiService.stopCompetition()
        .subscribe(data=>{
          console.log(data);
          if (data){
            this.competitionStopped = true;
          }
        });
    alert('Competition stopped !');
  }

  sendEmails(){
    this.apiService.sendEmails()
      .subscribe(data=>{
        if (data){
          this.competitionStopped = false;
        }
        else {
          alert('We have a internal problem with the server sending emails ! Just wait for us ! ');
        }
      });
  }

  logout(): void {
    console.log('Logout');
    window.location.replace('http://localhost:4200/');
  }

  private hideWindow(){
    document.getElementById('myNav').style.display = 'none';
  }
}
