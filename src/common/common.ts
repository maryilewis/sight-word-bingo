export enum WordState {
	new,
	incorrect,
	attention,
	correct,
	bingo,
};

export enum GameState {
	inProgress,
	over
};

export interface WordDefinition {
	word: string;
	audioPath: string; // path to audio asset
	state: WordState;
}

export const WORDS: WordDefinition[] = [
    {
        "word": "I",
        "audioPath": "../assets/audio/I.wav", state: WordState.new
    },
    {
        "word": "at",
        "audioPath": "../assets/audio/at.wav", state: WordState.new
    },
    {
        "word": "is",
        "audioPath": "../assets/audio/is.wav", state: WordState.new
    },
    {
        "word": "to",
        "audioPath": "../assets/audio/to.wav", state: WordState.new
    },
    {
        "word": "like",
        "audioPath": "../assets/audio/like.wav", state: WordState.new
    },
    {
        "word": "me",
        "audioPath": "../assets/audio/me.wav", state: WordState.new
    },
    {
        "word": "it",
        "audioPath": "../assets/audio/it.wav", state: WordState.new
    },
    {
        "word": "am",
        "audioPath": "../assets/audio/am.wav", state: WordState.new
    },
    {
        "word": "come",
        "audioPath": "../assets/audio/come.wav", state: WordState.new
    },
    {
        "word": "and",
        "audioPath": "../assets/audio/and.wav", state: WordState.new
    },
    {
        "word": "a",
        "audioPath": "../assets/audio/a.wav", state: WordState.new
    },
    {
        "word": "this",
        "audioPath": "../assets/audio/this.wav", state: WordState.new
    },
    {
        "word": "in",
        "audioPath": "../assets/audio/in.wav", state: WordState.new
    },
    {
        "word": "here",
        "audioPath": "../assets/audio/here.wav", state: WordState.new
    },
    {
        "word": "up",
        "audioPath": "../assets/audio/up.wav", state: WordState.new
    },
    {
        "word": "go",
        "audioPath": "../assets/audio/go.wav", state: WordState.new
    },
    {
        "word": "see",
        "audioPath": "../assets/audio/see.wav", state: WordState.new
    },
    {
        "word": "my",
        "audioPath": "../assets/audio/my.wav", state: WordState.new
    },
    {
        "word": "you",
        "audioPath": "../assets/audio/you.wav", state: WordState.new
    },
    {
        "word": "look",
        "audioPath": "../assets/audio/look.wav", state: WordState.new
    },
    {
        "word": "the",
        "audioPath": "../assets/audio/the.wav", state: WordState.new
    },
    {
        "word": "said",
        "audioPath": "../assets/audio/said.wav", state: WordState.new
    },
    {
        "word": "we",
        "audioPath": "../assets/audio/we.wav", state: WordState.new
    },
    {
        "word": "on",
        "audioPath": "../assets/audio/on.wav", state: WordState.new
    },
    {
        "word": "can",
        "audioPath": "../assets/audio/can.wav", state: WordState.new
    },
    {
        "word": "do",
        "audioPath": "../assets/audio/do.wav", state: WordState.new
    },
    {
        "word": "got",
        "audioPath": "../assets/audio/got.wav", state: WordState.new
    },
    {
        "word": "had",
        "audioPath": "../assets/audio/had.wav", state: WordState.new
    },
    {
        "word": "has",
        "audioPath": "../assets/audio/has.wav", state: WordState.new
    },
    {
        "word": "he",
        "audioPath": "../assets/audio/he.wav", state: WordState.new
    },
    {
        "word": "his",
        "audioPath": "../assets/audio/his.wav", state: WordState.new
    },
    {
        "word": "are",
        "audioPath": "../assets/audio/are.wav", state: WordState.new
    },
    {
        "word": "did",
        "audioPath": "../assets/audio/did.wav", state: WordState.new
    },
    {
        "word": "for",
        "audioPath": "../assets/audio/for.wav", state: WordState.new
    },
    {
        "word": "get",
        "audioPath": "../assets/audio/get.wav", state: WordState.new
    },
    {
        "word": "have",
        "audioPath": "../assets/audio/have.wav", state: WordState.new
    },
    {
        "word": "him",
        "audioPath": "../assets/audio/him.wav", state: WordState.new
    },
    {
        "word": "of",
        "audioPath": "../assets/audio/of.wav", state: WordState.new
    },
    {
        "word": "play",
        "audioPath": "../assets/audio/play.wav", state: WordState.new
    },
    {
        "word": "she",
        "audioPath": "../assets/audio/she.wav", state: WordState.new
    },
    {
        "word": "will",
        "audioPath": "../assets/audio/will.wav", state: WordState.new
    },
    {
        "word": "an",
        "audioPath": "../assets/audio/an.wav", state: WordState.new
    },
    {
        "word": "no",
        "audioPath": "../assets/audio/no.wav", state: WordState.new
    },
    {
        "word": "so",
        "audioPath": "../assets/audio/so.wav", state: WordState.new
    },
    {
        "word": "one",
        "audioPath": "../assets/audio/one.wav", state: WordState.new
    },
    // {
    //     "word": "two",
    //     "audioPath": "../assets/audio/two.wav", state: WordState.new
    // },
    {
        "word": "jump",
        "audioPath": "../assets/audio/jump.wav", state: WordState.new
    },
    {
        "word": "big",
        "audioPath": "../assets/audio/big.wav", state: WordState.new
    },
    {
        "word": "little",
        "audioPath": "../assets/audio/little.wav", state: WordState.new
    },
    {
        "word": "put",
        "audioPath": "../assets/audio/put.wav", state: WordState.new
    },
    {
        "word": "want",
        "audioPath": "../assets/audio/want.wav", state: WordState.new
    },
    {
        "word": "what",
        "audioPath": "../assets/audio/what.wav", state: WordState.new
    },
    {
        "word": "saw",
        "audioPath": "../assets/audio/saw.wav", state: WordState.new
    }
]