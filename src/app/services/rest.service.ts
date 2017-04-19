import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RestEntity } from "../shared/rest-entity.class";

@Injectable()
export class RestService {

  constructor(private http: Http) {
  }

  newRestEntity(entityName:string){
    let restEntity = new RestEntity(entityName);
    restEntity.http = this.http;
    return restEntity;
  }

}

// om jag får tillbaka nåt betyder det att jag har gjort rätt
// rest-router på backend. inject:a den där du vill använda den. sen kan du prata med backend

