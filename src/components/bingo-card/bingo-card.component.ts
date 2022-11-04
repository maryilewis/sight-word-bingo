import { Component, OnInit } from '@angular/core';
import { WordDefinition, WordState } from 'src/common/common';
import { BingoService } from 'src/services/bingo.service';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {

	public cardGrid: WordDefinition[][] = [[]];
	public wordState = WordState;

	// just for testing
	public currentWord = "";

	/**
	 * singleton
	 * 9 word list
	 * randomized order card list
	 * bingo service has ask list and does the asking
	 * 
	 */
  constructor(private bingoService: BingoService) {
	this.bingoService.cardList$.subscribe(list => {
		this.cardGrid = this.cardify(list);
	});
  }

  cardify(list: WordDefinition[]): WordDefinition[][] {
	const result = [];
	result [0] = list.slice(0, 3);
	result [1] = list.slice(3, 6);
	result [2] = list.slice(6, 9);
	return result;
  }

  checkWord(word: WordDefinition) {
	console.log("this is the word you clicked", word);
	this.bingoService.checkWord(word);
	this.currentWord = this.bingoService.getCurrentWord().word;
  }

  ngOnInit(): void {
  }

}
