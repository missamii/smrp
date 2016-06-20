//ETHAN NOTES:
console.log('hangman.js loaded');

var Game = {
/*
let's start by initializing the properties of the Game object.
we will set the following properties (I've given you the properties, just set the values)
guesses -- set it to 10 initially
guessedLetters -- initially an empty array
currentWord -- initally an empty string
hangmanWord -- initally an empty array
wordsArray -- an array of strings, where each string is one of the words in the game.
E.g., my wordsArray when I wrote this was:
[ "javascript", "python", "developer", "programmer", "general", "assembly"]

then we need the various methods to actually run the game. Remember: the properties
of an object (which is all Game is) can be any value: primitives like strings,
numbers, Booleans, undefined, etc., or data structures like arrays and other objects.
Since functions are themselves a kind of object in JavaScript, they too can be the
properties of an object (in which case we call them the object's "methods"). For
example, the built-in Math object has lots of methods you've used already, like
Math.random() and Math.floor(). Other properies of the Math object are numbers,
not methods, like Math.PI (3.14159...)

Go ahead and replace 'null' in the different properties below with the correct values.
*/

  guesses: null,
  guessedLetters: null,
  currentWord: null,
  hangmanWord: null,
  wordsArray: null,

/*
Now we get into the meat of the game: the methods that give it life! For each
function (aka "method" since it's a property of the Game object), you'll need to
write the code to perform the tasks required.
*/

  startGame: function(wordsArray) {

    /*
    this one starts off easy:
   first thing you need to do is set the guesses property you just created
   above to 10 (I know you did that already -- but what if it's the second time
   you played the game? Just to be safe, we want to initialize each start of this
   game with guesses = 10.)

   there's only one thing tricky about this: SCOPE
   you need to refer to the guesses property above. But it's a property on the
   Game object. fortunately we know a special keyword: 'this' which inside an
   object, refers to the object itself. So inside the startGame function, which
   is a property of the Game object, 'this' will refer to the Game object. So
   you'll need to set not simply
   guesses = 10;
   but
   this.guesses = 10;

   you're going to be using 'this' throughout this game to refer to other functions
   and properties in the game object! Get used to it! IF YOU'RE EVER UNSURE OF
   THE SCOPE, I.E., WHAT THE CURRENT VALUE OF 'THIS'IS, THEN CONSOLE.LOG IT!!

   so first of all, do that. insert a console.log(this); statement below.

   then set this.guess = 10.

    */

    // your code here

    /*
    now we also need to make sure the guessedLetters array is blank (in case
    there are letters in it from the last time we played the game). Do the same
    thing you just did, but this time setting this.guessedLetters = []
    */

    // your code here

    /*
    ok now we get a little more complex. We want to select a random word from our
    array of words. This means we need a random number between 0 and the *length*
    of the array, rounded down to the nearest integer. I.e., if we have 7 words in
    our word array, we want a random integer between 0 and 6. (0,1,2,3,4,5, or 6).

    create a variable called 'index' and set it equal to that.
    /if you're stuck, Google 'random number JavaScript')
    */

    //your code here

    /*
    now set this.currentWord equal to the word in this.wordsArray at that index!
    // so that if this.wordsArray = ["apples", "bananas", "pears"]
    // and the value of your index variable was 2, then this.currentWord would be
    set equal to this.wordsArray[2], which is "pears"
    */

    //your code here

    /*
    ok, now we need to loop over each letter in this.currentWord and push an
    underscore ("_") into our hangmanWord array for each letter.vso if our current
    word was "pie" then when you're done hangmanWord would look like this:
    ["_", "_", "_"] (3 underscores)
    while if the current word was "apple", it would look like this:
    ["_","_","_","_","_"] (5 underscores)
    */

    //your code here

    /*
    alright!
    now let's start the game going! We need to start by displaying the current
    state of the hangmanWord (at first it's completely unknown), the number of
    guesses remaining, and the letters that have been guessed so far. We call
    displaying something to the page (or in this case, the console), 'rendering'
    it. So we're going to call another function here, which we'll write below,
    called this.render(). render takes THREE parameters: the hangmanWord, the number of
    guesses remaining, and the letters guessed so far. Call render here, passing
    in the appropriate values as arguments (we'll write the render function itself next):
    */

    //your code here

    /*
    one last step in startGame() and the game has started in earnest. We need to
    us prompt() to tell the user to enter a letter, and then we need to evaluate it.
    let's do it in two steps here.
    (1)create a variable called userGuess. Set it equal to the result of calling
    this.promptUser() (we're going to write that function in a minute).
    (2) call this.guess() (again, we'll write this function below). This function will
    take one argument, the letter the player guessed.Which is what we just stored
    in userGuess. So pass that in as an argument.
    */

    //your code here

    /*
    BONUS IF YOU'VE FINISHED THE GAME! you can do the above two steps in one line of
    code instead of two. Try to do it that way.
    */

    //we're all done with the startGame() function! let's move on to render(). Yay!
  },

  //OK HERE'S OUR RENDER FUNCTION!
  //you'll notice I've written the skeleton for you.
  render: function(word, guesses, letters) {
    /*
    notice this argument takes three parameters: 'word', which is the hangmanWord to
    display, guesses (remaining), and letters (guessed so far).
    scroll back up to where you called this function in startGame() and make sure you
    passed those three things in, in that order!

    I'm going to leave this part up to you. What this function needs to do is display
    in the console the current word (i.e., if the word was 'hangman' and the user
    has guessed 'a' so far, then the display should look like '_ a _ _ _ a _'),
    how many guesses the user has left, and what letters have been guessed so far.
    */

    //your code here.

  },
  promptUser: function() {
    /*
    now let's write our prompt user function.
    /irst step is to create a variable called letter and sent it equal to the result
    of prompting the user for a letter.
    */

    //your code here

    /*
    now what if the user guessed a letter (s)he has already guessed so far! PROTIP: **always**
    assume users are either (a) morons or (b) malevolent; either way, they'll do
    everything they can to f--k up your app ...

    there's different ways to handle this. Probably the simplest is to loop over
    the guessedLetters array one at a time and check each letter to see if it matches
    the letter stored in our letter variable we just created. If it DOES (i.e., if
    the letter is one that's already guessed) you need to return this.promptUser();
    if we've looped through the WHOLE array without a match (our player guessed a
    letter that hasn't been guessed yet) you want to return the letter variable itself.

    does this make sense? this concept -- a function returning the result of calling
    itself (which is what happens if the user makes an invalid entry and tries to guess
    the same letter twice) -- is called recursion and we'll go into it in more detail, don't worry!

    since this is hard, I'm going to help you out with it
    */

    //fill in the parentheses in the for loop so that it loops over the guessedLetters array
    for () {
      // fill in the conditional in the 'if' statement appropriately here (re-read
      // the comment above if you're confused)
      if () {
        return this.promptUser();
      }
    }

    /*
    now an important thing about the keyword return is that it immediately terminates the function
    execution -- once a function returns something it stops executing. that means, that if we've
    reached this line of code, then guess what! our user managed to successfully pick a letter
    that (s)he hadn't already chosen! Way to go user!

    now we want to return that letter (if you look up above in startGame() you'll
    see that we stored the result of calling this promptUser() function in our
    userGuess variable. That's another way of saying whatever this function RETURNS
    is going to be stored in userGuess. So what we need to return here is the letter
    the user chose. Do that now)
    */

    // your code here

    /* BONUS: what if the user entered a capital letter? i.e., first they guess "a"
    then the next time they type "A" -- we don't want the computer thinking the user's
    guessed a different letter! (remember, to the computer, "a" and "A" ARE different
    letters!) JavaScript provides built-in functions for changing the case of a string.
    Go here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String,
    find the appropriate methods, and use it to make sure all our letters are the
    same case (uppercase or lowercase, your choice).
    */

    /*
    ANOTHER BONUS *ONLY* IF YOU'VE COMPLETED THE GAME! Writing a loop to go through every letter
    one-by-one in our guessedLetters Array is a pain. Fortunately, JavaScript provides
    a nice array method called indexOf that returns the index number in an array
    of a given value, **or -1 if the item isn't in the array**. Look up Array.indexOf
    in the Mozilla documentation, and re-write your code above to make use of it instead of looping!
    */
  },
  /*
  OK, if you scroll back up to startGame() you'll see that we called promptUser
  and stored the result of the user's entry in userGuess. We then called guess()
  and passed in userGuess to that function.

  here's our guess function below. You'll notice as I wrote it, it doesn't take
  any arguments. You need to fix that. Give it one argument and call it `ltr`
  (let's be short and concise!)
  */
  guess: function() {

    /*
    first thing we need to do is add ltr to our guessedLetters array and decrease
    the number of guesses the user has left by 1. Do that here:
    */

    //your code here

    /*
    next step: we need to loop over this.currentWord letter by letter and check
    to see if each letter is the same as the ltr parameter passed into this function.
    if they ARE they same, you need to change the corresponding entry in this.hangmanWord
    from an underscore to the letter guessed.

    i.e., if ltr == "a" and our currentWord is "hangman" and hangmanWord is currently
    an array of underscores,
    ["_","_","_","_","_","_","_"],
    then when we're done looping, hangmanWord will look like this:
    ["_","a","_","_","_","a","_"]
    */

    //your code here

    /*
    SUPER DUPER BONUS ONLY IF YOU COMPLETE THE GAME: read about Array.map and use
    it instead of looping over this.currentWord. THIS IS HARD! But very like what
    you might see in more advanced code ...
    */

    /*
    finally, we're going to need to see if the game is over! There's two ways the
    game is over:
    (1) the user won (guessed all the letters)
    (2) the user lost (didn't guess all letters AND is out of guesses)

    If neither of those is true, the game is still ongoing.

    We're going to use another function called isOver (below) to check to see if
    the game is over. It's going to return false if the game is NOT over and a
    truthy value (a string) if the game is over and the user has won or lost.
    Remember that "" (the empty string) is falsey and and any other string is truthy.

    Call isOver and store it in a variable called result. isOver takes one parameter,
    in this case our hangmanWord. So make sure to pass that into isOver when you
    call it!

    Then create an 'if' statement to see is result  is truthy or false.
    if the if statement is true (i.e., the game is over), you need to call the
    'overMessage' function (which we'll write below) and pass in result.

    if the if statement is false (the game isn't over) you need to do two things
    (1) call render and pass in the current hangmanWord, guesses remaining, and
    guessed letters.
    (2) do exactly what you did waaaaay up in the startGame function: get a user
    prompt for a new letter, store it in a variable, and then call guess, passing
    in the result of the user prompt.
    */

    //your code here

  },
  isOver: function(word) {
    /*
    just two functions left!

    this function needs to check to see if the user has won or lost the game.
    remember, when you called this function up above in guess() you passed in
    this.hangmanWord as an argument. so modify isOver so it takes one parameter,
    which we'll call word. Do that now....

    I'm going to help you with the first part of the function. hangmanWord which
    we passed in was an array (it'll look something like this ["_","t","h","_","n"])
    but this.currentWord is a string("ethan"). How can we check to see if they match?

    Fortunately, JavaScript has a function to convert an array to a string. It's
    called join(). Here's the documentation on it:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    So first thing, you need to do is convert word to a string using the join method. Do that now
    */

    //your code here

    /*
    now we need to check to see if word == currentWord. I'm going to leave the
    actual coding of this to you, but here's what needs to happen:
    (1) if word == currentWord the user has correctly guessed the entire word! The
    function needs to return "victory" if so
    (2) if the user has NOT correctly guessed the word, we need to check to see
    if the user is out of guesses. If the user ran out of guesses, they lost!
    stupid user. return "defeat"
    (3) if the user hasn't correctly guessed the word and still has guesses
    remaining the game isn't over. Remember the name of this function is "isOver"
    so if the game ISN'T over you should return false
    */

    //your code here

  },
  /* THE VERY LAST FUNCTION!
  overMessage is going to take one parameter, called result, so make sure to add that in.

  now remember, result is going to be equal to either "victory" or "defeat"
  overMessage should display the appropriate message depending on what the value
  of result is (i.e., something like "Congrats! you won" or "You dumbo. you lose.")

  make it display the winning and losing messages of your choice.
  */
  overMessage: function() {
  //your code here

  }
};

// here we call startGame and pass in the wordsArray to begin playing ...
console.log("type Game.startGame(Game.wordsArray); to begin playing");

/*
SUPER BONUSES: if you've finished the game and want to play around more, think
how you might handle some of the following:

1. keep track of games won/lost
2. Get the user's name so you can address them by name "Ethan, you dumbo, you lost!"
3. Draw a little stick figure hangman that grows with incorrect guesses. Here's my terrible
example:

  ______
  |    |
  |    |
  O    |
\---/  |
  |    |
 /\    |
       |
  ----------
  |        |
  |        |


*/