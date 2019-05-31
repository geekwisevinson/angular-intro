import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CHARACTERS } from './mock-characters';
import { CharacterInterface } from '../interfaces/character-interface';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  newCharacter: CharacterInterface = new Character();

  newAbility: string = '';

  characters: CharacterInterface[];

  type: string | boolean;

  isHero(character: CharacterInterface): boolean { return character.type === "Hero"; }

  renderCharacters() {
    this.type = this.route.snapshot.queryParamMap.get("type");
    if (this.type) {
      this.characters = CHARACTERS.filter(character => character.type === this.type);
    } else {
      this.type = false;
      this.characters = CHARACTERS;
    }
  }

  clearFilter(): void {
    this.type = false;
    this.characters = CHARACTERS;
    this.router.navigateByUrl('/characters');
  }

  addNewAbility(): void {
    const abilities = this.newCharacter.abilities || [];
    abilities.push(this.newAbility);
    this.newCharacter.abilities = abilities;
    this.newAbility = '';
  }

  addNewCharacter(): void {
    const id = CHARACTERS.length + 1;
    this.newCharacter.id = id;
    this.characters.push(this.newCharacter);
    this.newCharacter = new Character();
  }

  ngOnInit() {
    this.renderCharacters();
  }

}
