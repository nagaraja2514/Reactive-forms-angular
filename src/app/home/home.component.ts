import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students = [
    {
      name:"Aditya",
      branch:"EEE",
      rollNumber:"17AK5A0201"
    },
    {
      name:"Balaji",
      branch:"EEE",
      rollNumber:"17AK5A0202"
    },
    {
      name:"Bhanu",
      branch:"EEE",
      rollNumber:"17AK5A0204"
    },
    {
      name:"Baskar",
      branch:"EEE",
      rollNumber:"17AK5A0205"
    },
    {
      name:"Devesh",
      branch:"EEE",
      rollNumber:"17AK5A0206"
    },
    {
      name:"Harsha",
      branch:"EEE",
      rollNumber:"17AK5A0207"
    },
    {
      name:"Hemadri",
      branch:"EEE",
      rollNumber:"17AK5A0208"
    },
    {
      name:"Madhu",
      branch:"EEE",
      rollNumber:"17AK5A0209"
    },
    {
      name:"Mahesh k",
      branch:"EEE",
      rollNumber:"17AK5A0210"
    },
    {
      name:"Mahesh Mettem",
      branch:"EEE",
      rollNumber:"17AK5A0211"
    },
    {
      name:"Munikrishana",
      branch:"EEE",
      rollNumber:"17AK5A0212"
    },
    {
      name:"Nagaraja",
      branch:"EEE",
      rollNumber:"17AK5A0213"
    },
    {
      name:"Rohith",
      branch:"EEE",
      rollNumber:"17AK5A0214"
    },
    {
      name:"Siva",
      branch:"EEE",
      rollNumber:"17AK5A0215"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
