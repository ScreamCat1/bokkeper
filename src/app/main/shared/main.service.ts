import { Injectable } from '@angular/core';

@Injectable()

export class MainService {
  defaultData = {
    firstName: 'Maksym',
    lastName: 'Pushkarov'
  };

  constructor() { }

}
