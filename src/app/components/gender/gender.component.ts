import { Component, OnInit } from '@angular/core';
import { GenderService } from 'src/app/services/gender/gender.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  constructor(private genderService: GenderService) { }

  ngOnInit(): void {}
}