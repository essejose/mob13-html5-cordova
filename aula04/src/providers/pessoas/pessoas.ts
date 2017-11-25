import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PessoasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PessoasProvider {

  public pessoas: any;

  public apiUrl : string = "https://randomuser.me/api/?nat=br&results=10&seed=abc";

  constructor(public http: HttpClient) {
    console.log('Hello PessoasProvider Provider');
  }

  public loadByEmail(email: String) : any
  {
    for (let pessoa of this.pessoas){

      if(pessoa.email == email){
        return pessoa
      }

    }

  }



  public load(){

    if(this.pessoas){

      return Promise.resolve(this.pessoas )
    }

    return  new Promise(resolve =>{

      this.http.get<any>(this.apiUrl).subscribe(data =>{

        this.pessoas = data.results;

        resolve(this.pessoas)


      }, err =>{

        console.log(err)

      });

    });

  }

}
