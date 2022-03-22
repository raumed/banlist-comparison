import { ApiService } from './services/api.service';
import { Component, OnInit, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'angular-bootstrap-examples';
  cartas: any = [];
  cardForm: FormGroup;

  banlist_common: any= [];
  banlist_tcg: any= [];
  banlist_ocg: any=[];

  display = "block";
  
  constructor(private apiService: ApiService, private fb: FormBuilder){
    console.log('componente creado');
    this.cardForm = this.fb.group({});
  }
  
  search(){
    if(this.cardForm.value.cardName){
      this.apiService.getCards(this.cardForm.value.cardName).subscribe((response:any) => this.cartas = response);
    }else{
      console.log("Wrong input");
    }

  }
  banlist(){
    this.apiService.getBanlist("tcg").subscribe((response:any)=> this.banlist_tcg = response);
    this.apiService.getBanlist("ocg").subscribe((response:any)=> this.banlist_ocg = response);
  }

  showDescription(id: any){
    console.log(id);
  }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      cardName: ''
    })
    this.banlist();
  }
  
}
