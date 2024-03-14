import { Component, OnInit } from '@angular/core';
import { PollutionService } from '../pollution.service';
import { PollutionData } from '../PollutionData';
@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent implements OnInit {
pollutionData: PollutionData[]=[];
currentPage=1;
itemsPerPage=5;
totalItems=0;
  constructor(private pollutionService:PollutionService){}

  ngOnInit(): void {
    this.fetchPollutionData();
    
  }
  fetchPollutionData():void{
    this.pollutionService.viewPollutionData().subscribe(pollutionData=>{this.pollutionData=this.convertResponseToObjectArray(pollutionData);
      this.totalItems=this.pollutionData.length;});
  }

  
private convertResponseToObjectArray(responseData: any[]): PollutionData[] {
  const objectsArray: PollutionData[] = [];
  for (const item of responseData) {
    console.log(item);
    const myObject: PollutionData = {
      id: item.id, 
      year2017 : item._2017,  
      year2018:item._2018,
      year2019:item._2019,
      year2020:item._2020,
      year2021:item._2021,
      year2022:item._2022,
      year2023:item._2023,
      city:item.city,
      country:item.country
    };
    console.log(myObject);
    objectsArray.push(myObject);
  }
  return objectsArray;
}

  onPageChange(pageNumber: number):void{
    this.currentPage=pageNumber;
  }

  getPaginatedData():PollutionData[]{
   const startIndex=(this.currentPage-1)*this.itemsPerPage;
   return this.pollutionData.slice(startIndex,startIndex+this.itemsPerPage); 
  }


  get totalPages():number{
return Math.ceil(this.totalItems/this.itemsPerPage)
  }
}