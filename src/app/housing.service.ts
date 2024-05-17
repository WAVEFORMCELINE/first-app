import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  dburl = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.dburl);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.dburl}/${id}`);
    return await data.json() ?? {};
  }


  // getAllHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // }

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find(x => x.id === id)
  // }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
