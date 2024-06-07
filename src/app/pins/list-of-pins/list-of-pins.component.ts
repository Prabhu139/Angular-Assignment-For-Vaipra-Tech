import { Component, OnInit } from '@angular/core';
import { Pin } from '../pin.model';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCustomerComponent } from '../add-new-customer/add-new-customer.component';
import { AddNewPinComponent } from '../add-new-pin/add-new-pin.component';
import { CmnService } from 'src/app/cmn.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-of-pins',
  templateUrl: './list-of-pins.component.html',
  styleUrls: ['./list-of-pins.component.scss']
})

export class ListOfPinsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'images', 'collaborators', 'privacy'];
  dataSource = new MatTableDataSource([]);

  constructor(private dialog: MatDialog, private pinsService: CmnService) { }

  ngOnInit(): void {
    this.pinsService.getPins().subscribe(
      (res: any) => {
        this.dataSource = res;
      },
      (error: any) => {
        console.error('Error fetching pins:', error);
      }
    );
  }

  addCustomer(fromData :any){
    const dialogRef = this.dialog.open(AddNewCustomerComponent, {
      width: '500px',
      data : fromData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

  addPin(fromData :any){
    const dialogRef = this.dialog.open(AddNewPinComponent, {
      width: '500px',
      data : fromData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

  getCollaborators(collaborators: string): string[] {
    return collaborators.split(/ (?=[A-Za-z])/);
  }




}
