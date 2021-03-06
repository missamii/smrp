# ANOTHER WEEK IN THE BOOKS!

![api](http://i.giphy.com/WipRpqUWGWbKw.gif)

(This gif came up when I searched giphy for "API." I have no idea why. HOWEVER, it seemed like a good image for the end of the week!)

**WHILE THERE ARE TWO PARTS TO THE WEEKEND HOMEWORK, PART 1 IS THE MOST IMPORTANT ONE. ONLY START PART 2 IF YOU'VE COMPLETED PART 1.** However, do try to get to Part 2 if you can -- we're going to be doing more with factory functions in this class, so the practice is good if you have the time!

## PART 1: POKEAPI

I hear there's a new Pokemon game out that everyone's obsessed with. Are you? If so, check out [pokeapi.co](pokeapi.co). It's a Pokemon API! We can get all sorts of Poke-info sent our way. Cool! (I have a confession to make -- I never played Pokemon.)

I am keeping this deliberately open-ended: you guys have used a bunch of APIs now (OMDB, Weather Underground, Colour Lovers ...) so you should be old hands at this. This is what you'll need to do:

1. Build the skeleton of a web app (HTML, CSS, and JS files). Link the CSS and the JS to your HTML and make sure everything's working.
1. To access the API, you'll need jQuery. Grab it from a CDN and load it up in a `<script>` tag on your webpage. You'll also need handlebars so grab that as well and load it up.
1. You'll need to read the Pokeapi docs. There are a *lot* of possible endpoints for you to consider. You'll need to decide which ones you want. I suspect many of you might want the Pokemon endpoint, which returns a bunch of Pokemon(Pokemen?). You can find the full docs [here](http://pokeapi.co/docsv2/) and the section on the Pokemon endpoint [here](http://pokeapi.co/docsv2/#pokemon). (Note that passing in a resource or name is OPTIONAL -- if you don't do so, the API will send you an array of Pokemen in return--20 items is the default, but you can change that as outlined in the docs).
1. Do something cool with the data. This is up to you! But you *must* do the following at a minimum:
    * Build a form that takes some kind of user input and then
    * Use that input to build an API call, which it then makes successfully and gets data back
    * Take the data that the API returns and display it on the page.
    * Apply at least some styling via CSS so that the page looks decent.
    * Add in some filtering options, so only Pokemon with certain characteristics are displayed, for example.
    * BONUS: Only if you get the above working. Research Array.map and Array.filter and see if you can apply those to your code.

**YOU DO NOT NEED TO LIKE OR EVEN KNOW MUCH ABOUT POKEMON FOR THIS HW.** If you truly *hate* the idea of Pokemon and you have an alternate API that we have not yet used that you want to try, you can run it by us, however the API must not include a key. You may also run into security issues with CORS (if you start getting "No-Access-Control-Origin" errors, that's what's going on). If so, you can try getting around it using JSONP as I showed you for the Colour Lovers hw or you can go back to Pokemon.

Think of this as a dry run for Project 2! Have fun! Poke around! (get it? get it!)
