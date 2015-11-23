#Cards Search

To perform a basic card search, send a GET request to the card search endpoint: 

`api.manastack.com/cardSearch?name=<name>`

You must provide at least one parameter for results to be returned.


 | Parameter | Example | Description |
 |-----------|---------|-------------|
 | name | ghoultree | search by card name |
 | type | creature | search by card type |
 | text | destroy target creature | search by card text |
 | sets | m13 m14 | space separated list of set shortcodes to filter results by |
 | limit | 50 | integer maximum amount of results to return |


#Individual Cards

You can also access a single card by it's ManaStack ID

`api.manastack.com/card?id=<id>`

This doesn't return any extra information, but allows you to store cards by their ID only and then retrieve the card again later.

#Packs

You can get a random pack of cards from a particular set by passing the set code as follows.

`api.manastack.com/pack/<set>`


#Card Images

For legal reasons, we can't provide documentation on how ManaStack utilizes card images as historically Wizards of the Coast has shut down sites that provide them in an easy to use manner. You're on your own here, sorry. 


