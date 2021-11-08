import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: any = {};

  constructor(private activateRoute: ActivatedRoute, private service: CharactersService) { }

  async ngOnInit() {
    const params = this.activateRoute.snapshot.params.id;
    this.character = await this.service.getSingle(params);
    console.log(this.character)
  }

}
