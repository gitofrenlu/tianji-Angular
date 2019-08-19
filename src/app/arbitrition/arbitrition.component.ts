import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arbitrition',
  templateUrl: './arbitrition.component.html',
  styleUrls: ['./arbitrition.component.css']
})

// class SearchformClass {
//   contractNo: string;
//   name: string;
// }

export class ArbitritionComponent implements OnInit {

  formData = {
    contractNo: '',
    name: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
