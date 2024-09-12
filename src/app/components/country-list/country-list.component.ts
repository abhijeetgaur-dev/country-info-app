import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../data/data.json'; 

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];
  searchTerm: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.countries = data;  // Use the imported data
  }

  viewCountryDetails(country: any): void {
    // Navigate to the detail page
    this.router.navigate(['/country', country.alpha3Code]);
  }

  get filteredCountries() {
    if (!this.searchTerm) {
      return this.countries;
    }
    return this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
