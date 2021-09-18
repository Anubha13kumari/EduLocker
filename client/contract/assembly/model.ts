import {PersistentVector} from 'near-sdk-as';

@nearBindgen
export class DayFees{
      day:i32;
      fees:string;
      constructor(day:i32,fees:string){
            this.day=day;
            this.fees=fees;
      }
}

@nearBindgen
export class Certificates{
      studnetClass:string;
      id:string;
      cid:string;
      constructor(studentClass:string,id:string,cid:string){
            this.studnetClass=studentClass;
            this.id=id;
            this.cid=cid;
      }
}