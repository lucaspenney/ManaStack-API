#Simulating Decks

Using the Compute engine, you can simulate games between decks using AI or real players.

*Warning: The below methods are subject to change in the near future*

#AI vs AI Simulation

The compute engine assumes Magic games of two players, and will fill any non-human player slots with AI players. To simulate a game between AI, you simply need to pass in the decks. 

Simulate single game with 2 AI players

`api.manastack.com/simulate?deck1=<deckid>&deck2=<deckid>`

Simulate X number of games with 2 AI players

`api.manastack.com/simulate?deck1=<deckid>&deck2=<deckid>&games=<numgames>`

#Playing Against the AI

For games with a human player, the process is more explicit. First, you must create a game resource.

`api.manastack.com/simulate/new`

This will return a game object, with an id you can reference. To see the history of the game, send the game identifier to the same endpoint.

`api.manastack.com/simulate?game=<id>`

To send human commands to their game player, you first must request their list of possible actions.

`api.manastack.com/simulate?game=<id>&actionlist=player1`

Then, send the index of the action you wish to take based on the possible moves.

`api.manastack.com/simulate?game=<id>&player=player1&action=<actionindex>`

Keep repeating this process until there are no actions to take. Constantly retrieving the game history after each action gives you a reliable way to display the game state, as it will update for both player and AI actions. 

Note that there is a session timeout for games with human players - failure to take an action within a certain time period will cause the server to assume that you're no longer playing, and the game will be deleted.