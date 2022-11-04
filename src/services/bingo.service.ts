import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WordDefinition, WORDS, WordState } from '../common/common';

const CARD_SIZE = 9;

@Injectable({
	providedIn: 'root'
})
export class BingoService {
	currentWord: WordDefinition;

	cardList: BehaviorSubject<WordDefinition[]> = new BehaviorSubject<WordDefinition[]>([]);
	cardList$: Observable<WordDefinition[]> = this.cardList.asObservable();

	callWords: WordDefinition[] = [];
	bingo: boolean = false;

	getCurrentWord() {
		return this.currentWord;
	}

	constructor() {
		this.initializeCard();
		this.currentWord = this.callWords.shift() as WordDefinition;
		this.readWord()
	}

	/**
	 * observables:
	 * - bingo card: a 9-length list of words and states
	 * 
	 * functions
	 * - handle word click
	 * 
	 * -
	 * @returns 
	 */

	initializeCard() {
		let list = this.shuffle(WORDS).slice(0, CARD_SIZE);

		// make sure two and to and too aren't in the same puzzle

		this.cardList.next(list);
		this.callWords = this.shuffle(list);
    }

	shuffle(list: Array<WordDefinition>): WordDefinition[] {
		return list
			.map(value => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	}

	nextWord() {
		// It won't be empty, I promise
		this.currentWord = this.callWords.shift() as WordDefinition;
		this.readWord();
	}

	readWord() {
		let audio = new Audio();
		audio.src = this.currentWord.audioPath;
		audio.load();
		audio.play();
	}

	checkWord(word: WordDefinition) {
		if (word == this.currentWord) {
			word.state = WordState.correct;
			this.checkForBingo();
			if (!this.bingo) {
				this.nextWord();
			}
		} else {
			word.state = WordState.incorrect;
		}
		// find word in cardList and update state
	}

	checkForBingo(): void {
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
				if (list[index].state !== WordState.correct) {
					allCorrect = false;
				}
			})
			if (allCorrect) {
				this.bingo = true;
				set.forEach(index => {
					list[index].state = WordState.bingo;
				});
			}
		})
		this.cardList.next(list);
	}

}
