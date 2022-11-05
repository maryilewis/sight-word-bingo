import { Component, OnInit } from '@angular/core';
import { GameState, WordDefinition, WordState } from 'src/common/common';
import { BingoService } from 'src/services/bingo.service';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {

	public cardGrid: WordDefinition[][] = [[]];
	public currentGameState: GameState = GameState.inProgress;

	//make enum public to use in html
	public wordState = WordState;
	public GameState = GameState;

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

	this.bingoService.gameState$.subscribe(gameState => {
		this.currentGameState = gameState;
	});
  }

  cardify(list: WordDefinition[]): WordDefinition[][] {
	const result = [];
	result [0] = list.slice(0, 3);
	result [1] = list.slice(3, 6);
	result [2] = list.slice(6, 9);
	return result;
  }

  repeatWord() {
	this.bingoService.readWord();
  }

  newGame() {
	this.bingoService.newGame();
  }

  ngOnInit(): void {
  }

}
