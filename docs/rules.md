#Rules Support

ManaStack's compute engine is implemented by parsing card and rules text, not by implementing individual cards. As such, it's impossible to say how many cards are fully or partially supported by the engine - rather, specific features are supported. 

Note that Oracle text is used, not printed card text. 

#Keyword Support

The following keywords are supported:

- Haste
- Vigilance

The following keywords are planned to be supported:

- Deathtouch
- Defender
- Double Strike
- Exalted
- Flash
- Flying
- Hexproof
- Indestructible
- Lifelink
- Reach
- Shroud
- Trample


#Card Support

Here are some example card texts templates that are fully supported by the compute engine parser. 

- Destroy target <qualifier(s)>
- Return target <qualifier(s)> to <zone>
- When <qualifier(s)> enters the battlefield, <action>