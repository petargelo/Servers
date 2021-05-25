import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

   this.route.params.subscribe(
    (params: Params) => {       //ES6 arrow funkcija s anonimnom funkcijom koja prima params svaki put kad se izmijeni i mijenja users objekt. 
                                //Subscribe omogućava da se funkcija izvršava samo kod promjena, tj. klika na nekog usera.
    this.user.id = params ['id'];
    this.user.name= params ['name'];
    })
  }

  ngOnDestroy(){

  }

}
