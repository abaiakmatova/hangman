class Hangman {
    constructor(word,remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = "playing"
    }

    calculateStatus(){
        const finished = this.word.every((letter)=> this.guessedLetters.includes(letter) || letter === ' ') 
        if (this.remainingGuesses === 0){
            this.status = "failed"
        }else if (finished){
            this.status = "finished"
        }else{
            this.status = "playing"
        }
    }

    get statusMessage(){
        if (this.status === 'playing'){
            return `Guesses left ${this.remainingGuesses}`
        } else if (this.status === 'failed'){
            return `Nice try the word was "${this.word.join('')}" `
        }else{
            return 'Great job!'
        }
    }

    get puzzle(){
        let puzzle = ''

        this.word.forEach((letter)=>{
            if (this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else{
                puzzle += '*'
            }
        })
    
        return puzzle
    }

    makeGuess(char){
        char = char.toLowerCase()
        const isUnique = !this.guessedLetters.includes(char)
        const isBadGuess = !this.word.includes(char)
    
        if (this.status !== 'playing'){
            return
        }
    
        if (isUnique){
            this.guessedLetters.push(char)
        }
        
        if (isUnique && isBadGuess){
            this.remainingGuesses --
        }
    
        this.calculateStatus()
    }
}





