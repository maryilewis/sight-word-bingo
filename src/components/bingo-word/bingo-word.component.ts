import { Component, Input, OnInit } from '@angular/core';
import { WordDefinition, WordState } from 'src/common/common';
import { BingoService } from 'src/services/bingo.service';

@Component({
  selector: 'app-bingo-word',
  templateUrl: './bingo-word.component.html',
  styleUrls: ['./bingo-word.component.scss']
})
export class BingoWordComponent implements OnInit {
	@Input() word: string = "test";
	@Input() state: WordState = WordState.new;

	public wordState = WordState;
  constructor(private bingoService: BingoService) { }

  ngOnInit(): void {
  }

  checkWord(word: string) {
	this.bingoService.checkWord(word);
  }

}
