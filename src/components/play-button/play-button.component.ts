import { Component, OnInit } from '@angular/core';
import { BingoService } from 'src/services/bingo.service';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {

  constructor(private bingoService: BingoService) { }

  ngOnInit(): void {
  }

  playGame() {
	this.bingoService.newGame();
  }

}
