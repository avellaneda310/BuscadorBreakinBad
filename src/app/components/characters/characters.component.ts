import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any = [];
  

  constructor(private service: CharactersService) { }

  async ngOnInit() {
    const allCharacters: any = await this.service.getAll();
    this.characters = allCharacters;
    console.log(this.characters)
  }
  character: string = '';
  filterCharacter: any = [];

  
  submitButton() {
    this.filterCharacter = this.characters.filter((item: any) => item.name.toLowerCase() === this.character.toLowerCase())
    this.character = '';
    console.log(this.filterCharacter)
  }

}
