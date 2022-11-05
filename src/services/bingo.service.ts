import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameState, WordDefinition, WORDS, WordState } from '../common/common';
import { environment } from './../environments/environment';

const CARD_SIZE = 9;
// confetti.js functions
declare var startConfetti: any;
declare var stopConfetti: any;

@Injectable({
	providedIn: 'root'
})
export class BingoService {

	// The current word being asked for
	currentWord: WordDefinition | undefined;

	// The words ont he current bingo card
	cardList: BehaviorSubject<WordDefinition[]> = new BehaviorSubject<WordDefinition[]>([]);
	cardList$: Observable<WordDefinition[]> = this.cardList.asObservable();

	// The user must click a button to start the game, or sound won't work
	// Is the game in progress or over
	gameState: BehaviorSubject<GameState> = new BehaviorSubject<GameState>(GameState.notStarted);
	gameState$: Observable<GameState> = this.gameState.asObservable();

	callWords: WordDefinition[] = [];
	bingo: boolean = false;

	constructor() {

	}

	newGame() {
		console.log("New game");
		this.initializeCard();
		this.nextWord();
		this.gameState.next(GameState.inProgress);
		stopConfetti();
	}

	private initializeCard() {
		let list = this.shuffle(WORDS).slice(0, CARD_SIZE).map(word => { word.state = WordState.new; return word; });

		// make sure two and to and too aren't in the same puzzle

		this.cardList.next(list);
		this.callWords = this.shuffle(list);
    }

	private shuffle(list: Array<WordDefinition>): WordDefinition[] {
		return list
			.map(value => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	}

	private nextWord() {
		// It won't be empty, I promise
		this.currentWord = this.callWords.shift() as WordDefinition;
		this.readWord();
	}

	readWord() {
		if (this.currentWord) {
			console.log("read", this.currentWord.word);
			let audio = new Audio();
			audio.src = environment.assetFolder + this.currentWord.audioPath;
			audio.load();
			audio.play();
		}
	}

	private resetIncorrects() {
		const list = this.cardList.getValue();
		list.forEach(word => {
			if (word.state == WordState.incorrect) {
				word.state = WordState.new;
			}
		})
	}

	checkWord(word: WordDefinition) {
		if (word == this.currentWord) {
			word.state = WordState.correct;
			this.resetIncorrects();
			this.checkForBingo();
			if (this.gameState.getValue() != GameState.over) {
				this.nextWord();
			}
		} else {
			word.state = WordState.incorrect;
		}
	}

	private confettiFive() {
		startConfetti();
		setTimeout(() => {
			stopConfetti();
		}, 5000);
	}

	private checkForBingo(): void {
		const list = this.cardList.getValue();
		const indexes = [[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]];
		indexes.forEach(set => {
			let allCorrect = true;
			set.forEach(index => {
				if (list[index].state !== WordState.correct && list[index].state !== WordState.bingo) {
					allCorrect = false;
				}
			})
			if (allCorrect) {
				this.confettiFive();
				set.forEach(index => {
					list[index].state = WordState.bingo;
				});
				this.gameState.next(GameState.over);
			}
		})
		this.cardList.next(list);
	}

}
