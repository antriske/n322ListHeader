import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  notes: any = [
        {
         listHead: "Back 2 Skool List",
            things: [
                {
                    thingName: "Pencil",
                    dets: {
                      price: "$4.59",
                    }
                },
                {
                    thingName: "Highlighters",
                    dets: {
                        price: "$3.42",
                    }
                },
                {
                    thingName: "Expo markers",
                    dets: {
                        price: "$8.69",
                    }
                }
            ]
        },
      {
          listHead: "GOLDEN BDAY LIST",
          things: [
              {
                  thingName: "13in Macbook Pro",
                  dets: {
                      price: "$1,400",
                      // store: "walmart keystone"
                  }
              },
              {
                  thingName: "Nintendo Switch",
                  dets: {
                      price: "$299",
                      // store: "walmart fishers"
                  }
              },
              {
                  thingName: "Fix coolant and oil light",
                  dets: {
                      price: "$230",
                      // store: "walmart indianapolis"
                  }
              }
          ]
      }
      ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
