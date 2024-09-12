import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data/data.json'; // Import JSON data

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const alpha3Code = this.route.snapshot.paramMap.get('alpha3Code');
    this.country = data.find(c => c.alpha3Code === alpha3Code); // Find the country by alpha3Code
  }

  getLanguages(languages: any[]): string {
    return languages.map(lang => lang.name).join(', ');
  }
}
