import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  isName(name): boolean {
    // tslint:disable-next-line: prefer-const
    var regex = /^[\sa-zA-Z-']+$/;
    return regex.test(name);
  }
  isAddress(name): boolean {
    // tslint:disable-next-line: prefer-const
    var regex = /^[\sa-zA-Z#']+$/;
    return regex.test(name);
  }
  isAlphaNumeric(name): boolean {
    var regex = /^[\sa-zA-Z0-9']+$/;
    return regex.test(name);
  }
  isTitle(text): boolean {
    var regex = /^[\sa-zA-Z0-9-()']+$/;
    return regex.test(text);
  }

  isWebsite(website): boolean {
    var regex = /^((http:\/|https:\/)(\/))?(www.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return regex.test(website);
  }

  isURL(textval): boolean {
    var urlregex = /^(?:(http|https|ftp)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return urlregex.test(textval);
  }

  isEmailId(string) {
    var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    return regex.test(string);
  }
}
