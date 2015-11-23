#Known Limitations of Card Data

Sadly, Magic card data is a big mess, which is what you'd expect of a game being developed for so long without much planning ahead of major features. As such, there's some issues with the ways that computers can handle card data. 

#Special Cards

- Flip Cards are treated as two individual cards. There is currently no roadmap or plans for this to be fixed any time soon. Best case is you don't have to use them. 
- Split cards are treated as two individual cards. There is currently no roadmap or plans for this to be fixed any time soon. Best case is you don't have to use them. 

In the two above cases, the cards still function normally as a single card, but any abilities/rules text referencing their other half will be ignored.

#Compute Engine Limitations

- Combos resulting in infinite recursion of actions (either through following game rules or a loop requiring input allowing a player to intentionally break a loop, but never does) are limited to a fixed number (different depending on the type of loop) before terminating. This may be fixed eventually but is a hardcoded limitation for now. 
- Missing card functionality. Not all cards are currently 100% implemented. ManaStack implements cards by parsing rules text, so the majority of cards will have at least a partial implementation, and cards with more specific rules text (not shared between other cards) will need more specific implementation.
- 'Stupid' AI when specifically using control/combo-centric decks. The AI uses learned historical data as part of it's decision making process. For actions that have a delayed reward (for example, a combo across several turns) this can generally result in fairly random decisions, often failing to execute the combo properly. This will improve over time as the AI learns from good data. 
- When the compute engine is asked to simulate a large number of games, it will attempt to distribute the request across multiple machines to complete the request quickly. This can end up resulting in high costs, so (occasionally) instead the engine will simply reduce the number to something more manageable. As such, you might not always get the requested number of simulated games in your response. 

