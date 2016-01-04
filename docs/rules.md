#Rules Support

ManaStack's compute engine is implemented by parsing card and rules text, not by implementing individual cards. As such, it's impossible to say how many cards are fully or partially supported by the engine - rather, specific features are supported. 

Note that Oracle text is used, not printed card text. 

#Keyword Support

The following keywords are supported:

- Defender
- Flying
- Haste
- Reach
- Trample
- Vigilance

The following keywords are planned to be supported:

- Deathtouch
- Double Strike
- Exalted
- Flash
- Hexproof
- Indestructible
- Lifelink
- Shroud

#Card Support

Here are some example card texts templates that are fully supported by the compute engine parser. 

- Destroy target `<qualifier(s)>`
- Return target <qualifier(s)> to `<zone>`
- When <qualifier(s)> enters the battlefield, `<action>`
- Add four +1/+1 counters to target `<qualifier(s)>`

There are some cards that are not planned to be supported, due to how significantly they break the regular assumed rules of the game. Some examples are below.

- Cards that restart the game or create subgames
- Cards from Un-sets are obviously not supported