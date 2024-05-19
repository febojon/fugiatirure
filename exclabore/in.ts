interface CountryData {
  data: string | null;
}

class Country {
  data: CountryData;

  constructor(data: CountryData) {
    this.data = data;
  }

  displayData(): void {
    if (this.data && this.data.data) {
      console.log(this.data.data);
    } else {
      console.error('No data available to display.');
    }
  }
}

// Assuming 'myCountryData' is fetched or defined elsewhere in your code
const myCountryData: CountryData = { data: 'Country information' };

const myCountry = new Country(myCountryData);
myCountry.displayData();
