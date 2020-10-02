var ascii = {
  art: {
    soldiers: `    |\\                |\\                |\\                |\\           \r
    || .---.          || .---.          || .---.          || .---.     \r
    ||\/_____\\         ||\/_____\\         ||\/_____\\         ||\/_____\\    \r
    ||( \'.\' )         ||( \'.\' )         ||( \'.\' )         ||( \'.\' )    \r
    || \\_-_\/_         || \\_-_\/_         || \\_-_\/_         || \\_-_\/_    \r
    :-\"\`\'V\'\/\/-.       :-\"\`\'V\'\/\/-.       :-\"\`\'V\'\/\/-.       :-\"\`\'V\'\/\/-.  \r
   \/ ,   |\/\/ , \`\\    \/ ,   |\/\/ , \`\\    \/ ,   |\/\/ , \`\\    \/ ,   |\/\/ , \`\\\r
  \/ \/|Ll \/\/Ll|| |   \/ \/|Ll \/\/Ll|| |   \/ \/|Ll \/\/Ll|| |   \/ \/|Ll \/\/Ll|| |\r
 \/_\/||__\/\/   || |  \/_\/||__\/\/   || |  \/_\/||__\/\/   || |  \/_\/||__\/\/   || |\r
 \\ \\\/---|[]==|| |  \\ \\\/---|[]==|| |  \\ \\\/---|[]==|| |  \\ \\\/---|[]==|| |\r
  \\\/\\__\/ |   \\| |   \\\/\\__\/ |   \\| |   \\\/\\__\/ |   \\| |   \\\/\\__\/ |   \\| |\r
  \/\\|_   | Ll_\\ |   \/|\/_   | Ll_\\ |   \/|\/_   | Ll_\\ |   \/|\/_   | Ll_\\ |\r
  \`--|\`^\"\"\"^\`||_|   \`--|\`^\"\"\"^\`||_|   \`--|\`^\"\"\"^\`||_|   \`--|\`^\"\"\"^\`||_|\r
     |   |   ||\/       |   |   ||\/       |   |   ||\/       |   |   ||\/ \r
     |   |   |         |   |   |         |   |   |         |   |   |   \r
     |   |   |         |   |   |         |   |   |         |   |   |   \r
     |   |   |         |   |   |         |   |   |         |   |   |   \r
     L___l___J         L___l___J         L___l___J         L___l___J   \r
      |_ | _|           |_ | _|           |_ | _|           |_ | _|    \r
     (___|___)         (___|___)         (___|___)         (___|___)   \r
           ^^^ ^^^           ^^^ ^^^           ^^^ ^^^           ^^^ ^^^     `,
    merchant: `                .---.            
               |   '.|  __       
               | ___.--'  )      
             _.-'_\` _%%%_/       
          .-'%%% a: a %%%        
              %%  L   %%_        
              _%\\'=' |  /-.__    
           .-' / )--' #/     '\\  
          /'  /  /---'(    :   \\ 
         /   |  /( /|##|  \\     |
        /   ||# | / | /|   \\    \\
        |   ||##| I \\/ |   |   _|
        |   ||: | o  |#|   |  / |
        |   ||  / I  |:/  /   |/ 
        |   ||  | o   /  /    /  
        |   \\|  | I  |. /    /   
         \\  /|##| o  |.|    /    
          \\/ \\::|/\\_ /  ---'|    
           \\ |\\ |    |     :\\    
           | |  /     \\...' |    
           | |# |/\\    \\    |    
           | | :|  |    |   |    
                | |  |  |    |   |   `,
    glibrary: ` _____________________________________________
|_|\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`,\`|_|
|_|__\`,\`,\`,\`,\`,\`InfinityDude777\`,\`,\`,\`,\`,\`__|_|
|_|::| \`,\`,\`,\`,\`,\`technodoggo\`,\`,\`,\`,\`,\` |::|_|
|_|::|   \`,\`,\`,\`,\`,\`ch1ck3n\`,\`,\`,\`,\`,\`   |::|_|
|_|__|    |\`,\`,\`,\`,\`,\`,|,\`,\`,\`,\`,\`,\`|    |__|_|
|_|  |    |===;\`,\`,\`,\`,|,\`,\`,\`,\`;===|    |::|_|
|_|  |    |:::|\`,\`,\`,\`,|,\`,\`,\`,\`|:::|    |::|_|
|_|__|    |---|  |,\`_______\`,|  |---|    |__|_|
|_|  |    |:::|  | |_|_|_|_| |  |:::|    |::|_|
|_|  |    |---|  | |_|_|_|_| |  |---|    |::|_|
|_|__|    |:::|  | |_|_|_|_| |  |:::|    |__|_|
|_|::|    |---| ,\`,\` /%X%\ \`,\`, |---| _  |::|_|
|_|::|    |===:\` /  /%/%\%\  \ \`:===|| | |::|_|
|_|__|    |%%%%%%%%%%%%%%%%%%%%%%%%%|| | |__|_|
|_|::|   ,\`   ,\`  /%/\/%\/\%\  \`,   \`, | |::|_|
|_|::| ,\`    /   /%X%/\%/\%X%\   \    \`, |::|_|
|_|__|\`    ,\`   /%/%X%%X%%X%\%\   \`,    \`|__|_|
|_|,\`     /    /%/%/%\/^\/%\%\%\    \     \`,|_|
|_|___________/%/%/%%/\|/\%%\%\%\___________|_|`,
    yummypizza: `                                    ._           
                                   ,(  \`-.       
                                 ,': \`.   \`.     
                               ,\` *   \`-.   \\    
                             ,'  \` :+  = \`.  \`.  
                           ,~  (o):  .,   \`.  \`. 
                         ,'  ; :   ,(__) x;\`.  ; 
                       ,'  :'  itz  ;  ; ; _,-'  
                     .'O ; = _' C ; ;'_,_ ;      
                   ,;  _;   \` : ;'_,-'   i'      
                 ,\` \`;(_)  0 ; ','       :       
               .';6     ; ' ,-'~                 
             ,' Q  ,  ;',-.'                     
           ,( :\` ; _,-'~  ;                      
         ,~.\`c _','                              
       .';^_,-' ~                                
     ,'_;-''                                     
    ,,~                                          
    i'                                           
    :  `,
    pizza: `// ''--.._         
||  (_)  _ '-._    
||    _ (_)    '-. 
||   (_)   __..-'  
 \\\\__..--''        
 calories: 300
 money: 5.00$`,
    gingerbreadman: `   ,-.    
 _(*_*)_  
(_  o  _) 
  / o \\   
 (_/ \\_)  
 money: 5.00$
 calories: 290`,
    storemilk: `   _________    
  | _______ |   
 / \\         \\  
/___\\_________\\ 
|   | \\ Techno| 
|   |  \\ doggo| 
|   |   \\     | 
|   | M  \\    | 
| <span class='clickable' onclick='triggerstore2door()'>^</span> |     \\   | 
| <span class='clickable' onclick='triggerstore2door()''>|</span> |\\  I  \\  | 
| <span class='clickable' onclick='triggerstore2door()''>|</span> | \\     \\ | 
|   |  \\  L  \\| 
|   |   \\     | 
|   |    \\  K | 
|   |     \\   | 
|   |ckn   \\  | 
|___|_______\\_| 
cost: 3.00$
calories: 299 (i didn't choose the calories.)`,
    storecake: `                          (             )                            \r
                  )      (*)           (*)      (                    \r
         *       (*)      |             |      (*)                   \r
                  |      |~|           |~|      |          *         \r
                 |~|     | |           | |     |~|                   \r
                 | |     | |           | |     | |                   \r
                ,| |a@@@@| |@@@@@@@@@@@| |@@@@a| |.                  \r
           .,a@@@| |@@@@@| |@@@@@@@@@@@| |@@@@@| |@@@@a,.            \r
         ,a@@@@@@| |@@@@@@@@@@@@.@@@@@@@@@@@@@@| |@@@@@@@a,          \r
        a@@@@@@@@@@@@@@@@@@@@@\' . \`@@@@@@@@@@@@@@@@@@@@@@@@a         \r
        ;\`@@@@@@@@@@@@@@@@@@\'   .   \`@@@@@@@@@@@@@@@@@@@@@\';         \r
        ;@@@\`@@@@@@@@@@@@@\'     .     \`@@@@@@@@@@@@@@@@\'@@@;         \r
        ;@@@;,.aaaaaaaaaa       .       aaaaa,,aaaaaaa,;@@@;         \r
        ;;@;;;;@@@@@@@@;@      @.@<span class=\"clickable\" onclick=\"foundcheese();\">cheese<\/span>;@@@;;;@@@@@@;;;;@@;         \r
        ;;;;;;;@@@@;@@;;@    @@ . @@    ;;@;;;;@@;@@@;;;;;;;         \r
        ;;;;;;;;@@;;;;;;;  @@   .   @@  ;;;;;;;;;;;@@;;;;@;;         \r
        ;;;;;;;;;;;;;;;;;@@     .     @@;;;;;;;;;;;;;;;;@@a;         \r
    ,%%%;;;;;;;;@;;;;;;;;       .       ;;;;;;;;;;;;;;;;@@;;%%%,     \r
 .%%%%%%;;;;;;;a@;;;;;;;;     ,%%%,     ;;;;;;;;;;;;;;;;;;;;%%%%%%,  \r
.%%%%%%%;;;;;;;@@;;;;;;;;   ,%%%%%%%,   ;;;;;;;;;;;;;;;;;;;;%%%%%%%, \r
%%%%%%%%\`;;;;;;;;;;;;;;;;  %%%%%%%%%%%  ;;;;;;;;;;;;;;;;;;;\'%%%%%%%% \r
%%%%%%%%%%%%\`;;;;;;;;;;;;,%%%%%%%%%%%%%,;;;;;;;;;;;;;;;\'%%%%%%%%%%%% \r
\`%%%%%%%%%%%%%%%%%,,,,,,,%%%%%%%%%%%%%%%,,,,,,,%%%%%%%%%%%%%%%%%%%%\' \r
  \`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\'   \r
      \`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\'       \r
             \"\"\"\"\"\"\"\"\"\"\"\"\"\"\`,,,,,,,,,\'\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"              \r
                            \`%%%%%%%\'                                \r
                             \`%%%%%\'                                 \r
                               %%%                                   \r
                              %%%%%                                  \r
                           .,%%%%%%%,.                               \r
                      ,%%%%%%%%%%%%%%%%%%%,                          \r
         Arr. this item\' is outta\' stock. come back later\'.            \r
          ---------------------------------------------               `,
    frog : `                                                                                                              WWNNNWWWWWW         WW                                                                                                                                                                       \r
                                                                                                               WXK0OOOO00KKXNNWWWWWNXXXNW                                                                                                                                                                   \r
                                                                                                                 WNK0kxdddxxkkO0KXNNX0OO0KXWW                                                                                                                                                               \r
                                                                                                                    WNKOxxddddddxxkO0K0OkxkO0XNW                                                                                                                                                            \r
                                                                                                                      WNXOxxddddddddxxkOOkxdxxOKNW                                                                                                                                                          \r
                                                                                                                        WNXOxdddddddddddxxxddddxOKNW                                                                                                                                                        \r
                                                                                                                          WN0kdddddddddddddddddddxOXWW                                                                                                                                                      \r
                                                                                                                            WKkddddddddddddddddddddk0NWWW                                                                                                                                                   \r
                                                                                                                      WWWWWWWN0kddddddddddddddddddddxO0KXNNNWWWWWWWWWWW                                                                                                                                     \r
                                                                                                           WWWNNNXKK0000OOOOOOkxdddddddooodddddddddddddxkkkOOOOOOOOOO0000KKXNNWWW                                                                                                                           \r
                                                                                                      WWNNX00OkkxxxdddddddddddddddddddddoollooddddddddddddddddddddddddddddxxxkOO0KXNWWW                                                                                                                     \r
                                                                                                  WWNK0OkkxdddddddddddddddddddddddddddddddollllodddddddddddddddddddddddddddddddddxxkOO0XNNWW                                                                                                                \r
                                                                                             WWNXK0kxxdddddddooollllllllllllooodddddddddddddolcclodddddddddddddddddddddddddddddddddddddxkO0KXNWW                                                                                                            \r
                                                                                         WWNXKOkxxdddddddddddddoooooooolllccccccclodddddddddddlc:clddddddddddddddddddddddddddddddddddddddddxxk0KXNW                                                                                                         \r
                                                                                      WWNK0kxxddddddddddddddddddddddddddddddddolcc:cloddddddddolc:cldddddddddddddddddddddddddddddddddddddddddddxxO0XNW                                                                                                      \r
                                                                                     WNX0Okkkxxkxxxxxdddddddddddddddddddddddddddddoc::cloddddddoc::codddddddddddddddddddddddddddddddddxxxxxxxxxkkkkO0XW                                                                                                     \r
                                                                                      WWWNNNNNNNNXK0Oxddddddddddddddddddddddddddddddolc::coddddoc::coddddddddddddddddddddddddddddddddxk0KKXXXNNNNNNNWWW                                                                                                     \r
                                                                                             WWNXKOkxddddddddooooooooooooooooooodddddddoc:::lool:;:codddddddddooooooooooodddddddddddddxxkO0KXNWW                                                                                                            \r
                                                                                          WNXKOkxxddddoooolllllllooooooooooooooooodddddddolc::;;;:codddddddoooooooooolllollloooooddddddddddxxkOKXWW                                                                                                         \r
                                                                                       WWX0kxxddddoollllloooddddddddddddddddddddddddddddddddolc:cloddddddddddddddxxxxxxxxddddoollllloodddddddddxxOKXWW                                                                                                      \r
                                                                                     WNKOxddddddollloodddddddddddddddddddddxxxxxxxxxxddddddddddddddxxxxxxxxxxxxxkkkkkkkkkkkxxxxxddoollllodddddddddxk0XNW                                                                                                    \r
                                                                                    NKOxdddddoolloddddddddxxxxxxkkkkkkxxxxxkkkkkkkkkkxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdddooolooddddddddxkOXW                                                                                                   \r
                                                                                  WX0xddddddooooddddddxxxkkkkkkkkkkkkkkkkkkkkkkkkxxxxdddddddddddddddxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkxxdddddooooodddddddxk0NW                                                                                                 \r
                                                                                 WXOxdddddooodddddddxxkkkOOkkkkkkkkkkkkkkkkkxxddddooddddddddxdddddddddddddddxxkkkkkkkkkkkkkOOOOOOOkkkkxxdddddoooddddddddxOXW                                                                                                \r
                                                                                NKkxdddddddddddddxxkO00000000OkkkkkkkkkkxxdddddxxxxkkkkkkkkkkkkkkkkkkkkkxxxdddddxxkkkkkkkkO00KKK0000OOkkxxddddddoddddddddxOXW                                                                                               \r
                                                                               WKkdddddddddddddxkO0KKKKKKKKK0OkkkkkkkxddddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxddxxkkkkkO0KKKKKKOxxxkkOkkxddddddddddddddxOXW                                                                                              \r
                                                                              WXkdddddddddddxkO0OOOO0KKKKKKK0OkkkkxxddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxkkO0KKKKOo\'....\';codxxdddddddddddddxOXW                                                                                             \r
                                                                             WNOxddddddddxkkxo:,\'..\':xKKKKKK0OkkxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxkOKKK0d\'         .cxxdddddddddddddx0NW                                                                                            \r
                                                                             WKkdddddddxkxc\'.       ;kKKKKK0OkkxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdddodxkkkkkO0KK0o.          .okxdddddddddddddkXW                                                                                            \r
                                                                             NOxddddddxxc.          .lkOKK0Okxxkkxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdollodxkkkk0KKKo.           :OOxddddddddddddx0W                                                                                            \r
                                                                            WXkdddddxkx;.            .,dKKOkkkkxdoodxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdolodxkkkOKKKd\'           \'xOxddddddddddddxONW                                                                                           \r
                                                                            WKxddddk0O:               .o00OkkkxolodxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdooxkkkO0KKOc.          .:dxddxOOkxxdddddOXW                                                                                           \r
                                                                            WKxddxOXNk,               \'d00OkkxdooxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxkkkkO0KKk:.          .;dddx0XNX0OxxddkXW                                                                                           \r
                                                                            WKkkk0NWWO;               :O0OkkkxddxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkO0KKkc.          ;dxddkXWWWNX0kxOXW                                                                                           \r
                                                                             NXXNWW WXl.             \'xK0OkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkOKKK0d\'        .lddddx0N   WWNXXN                                                                                            \r
                                                                                     W0:.           ,x00OkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkO0KKKk:.     .:xxdddxOXW                                                                                                    \r
                                                                                      W0l.        .:kK0OkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkO0KK0d,.  .:xkxdddxOKWW                                                                                                   \r
                                                                                      WN0xc\'.  ..:d0K0Okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk0KKKko::okOxddddx0XNW                                                                                                   \r
                                                                                       N0OOOkdodk0KK0Okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxk0KK000000kxddddx0NW                                                                                                    \r
                                                                                       W0xxOKKKKKKK0OOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxO0OOOOOkxxdddddx0N                                                                                                     \r
                                                                                       N0xdxk000K00kxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxdkO0KK0OOkxxddddx0W                                                                                                     \r
                                                                                      WN0xddxkkOOOkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxkOOOOkkkxxddddx0NWW                                                                                                   \r
                                                                                     WNKkddddxkkkkkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxkkkkkkkkkxdddddkO0KXNW                                                                                                \r
                                                                                   WNKOxddddxkkkkkxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxkkkkkkkkxdddddddddxkOXN                                                                                              \r
                                                                                WWN0kdddddddxkkkkkxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxkkkkkkkkxdddddddddddxOKN                                                                                            \r
                                                                              WNKkxdddddddddxkkkkkxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxkkkkkkkkxddddddddddddddkXW                                                                                          \r
                                                                             WXkdodddddddddxkkkkkxxxdddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxddxxxkkOOOkxdddddddddddddod0NW                                                                                        \r
                                                                           WN0dodddddddddddx0XXKXXKK0OkxddddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdddddxxkOO0XXXXXKOxddddddddddddddooxKW                                                                                       \r
                                                                          WXkooddddddddddddx0NNNNNNNNNNK0OxddddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdddddkO0KXXXNNNNNNNNKkdddddddddddddddddodONW                                                                                     \r
                                                                         N0dloddddddddddddddkKNNNNNNNNNNNNXK0kxddddxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxddoddxk0KXNNNNNNNNNNNNNXOxddddddddddddddddddooxKW                                                                                    \r
                                                                        N0olddddddddddddddddx0XXXNNNNNNNNNNNNNXKOkddodddxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxddooddkOKXNNNNNNNNNNNNNNNNNKkddddddddddddddddddddolxKW                                                                                   \r
                                                                       N0olodddddddddddddddddkKKkOXNNNNNNNNNNNNNNXK0OkddooodddxxxxkkkkkkkkkkkkkkkkkkkkkkkxxxxdddoooddxO0KXNNNNNNNNNNNNNNNNNNNXOkxddddddddddddddddddddolxKW                                                                                  \r
                                                                      N0olodddddddddddddddddxkKXKKXNNNNNNNNNNNNNNNNNNXK0OkxddooooodddddxxxxxxxxxxxxddddddoooooddxkOKKXNNNNNNNNNNNNNNNNNNNNNNX0kkkxddddddddddddddddddddolxXW                                                                                 \r
                                                                     WKdcoddddddddddddddddddxkOKNX00KNNNNNNNNNNNNNNNNNNNNNXKK0OkkxdddooooooooooooooooddddxxkO0KXXNNNNNNNNNNNNNNNNNNNNX00XNNX0OkkkkxddddddddddddddddddddlckXW                                                                                \r
                                                                    WXxclddddoloddddddddddddxkk0K0dod0XNNNNNNNNNNNNNNNNNNNNNNNNNXXXKK00OOOOOOOOOOOO00KKKXXXNNNNNNNNNNNNNNNNNNNNNNNNNNKO0XNXKOkkkkkkxdddddddddddddllddddoclOW                                                                                \r
                                                                    NOlcodddoc:ldddddddddddxxkkk0KOxdkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXKKXNNNKOkkkkkkkkxdddddddddddoc:lddddo:oKW                          WWWWWWNNNNXXXXNNNNWWWWWW                             \r
                                 WWWWWWWNNNNNNNWWWWWW              WXdclddddl;:ldddddddddddxkkkkO0XXKXXK0KXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKkddOXNNX0kkkkkkkkkxxdddddddddddc;:lddddcckN                  WWWWNNXK000OOkkkxxxxxxxxkkkOO00KXNWWW                        \r
                            WWNNXK00OOOkkkkkkkkOOO000KXXNWWW       WOccodddlc::lddddddddddxkkkkkkOKXNNNXOOKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKkddkKNNNX0Okkkkkkkkkxdddddddddddl::codddl:oKW            WWWNXK0OOkxxxdddddddddddddddddddddddxxkO0KXNW                     \r
                         WNXK0kkxxdddddddddddddddddddxxxkOO0KXNWWWWKo:ldddocllclddddddddddxkkkkkkkOXNNNNNXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXK0KNNNNNNX0OkkkkkkkkxdddddddddddlclcldddocckN       WWWNXK0OkxxdddddddddddddddddddddddddddddddddddxkO0XNW                  \r
                      WNX0kxxdddddddddddddddddddddddddddddddxxkO0KKkc:odddlcolclddddddddddxkkkkkOOKXNNNX00XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOkkkkkkkkkxddddddddddlcllcodddl:oKW   WWNK0OkxxdddddddddddddddddddddddddddddddddddddddddddxxOKNW                \r
                  WWWXKOxxdddddddddddddddddddddddddddddddddddddddddl:coddocldlcoddddddddddxkkkkk0XNNNNNNKKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOkkkkkkkkxddddddddddlcoocloddo:cONWNX0Okxdddddddddddddddddddddddddddddddddddddddddddddddddddxk0NW              \r
                WXKK0kxdddddddddddddddddddddddddddddddddddddddddddo::ldddlcodocoddddddddddxkkkkOXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0Okkkkkkkxddddddddddlcodlcoddoc:dO0kxdddddddddddddddddddddddddddddddddddddddddddddddddddddddddxOKNW            \r
               WKkxxxdddddddddddddddddddddddddddddddddddddddddddddl;:oddollodocoddddddddddxkkkOKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0Okkkkkkxddddddddddlcodolldddl;:oddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddxOXWW          \r
              WXkdddddddddddddddddddddddddddddddddddddddddddddddddc;:oddollddoloddddddddddxkkO0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOkkkkkkxddddddddddolodolloddl::ldddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddxOKW          \r
             WXOxddddddddddddddddddddddddddddddddddddddddddddddddoc;coddoloddoloddddddddddxkkOKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXNNNX0Okkkkkxddddddddddoloddlloddo:;lddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddxkKW         \r
            WNOxdddddddddddddddddddddddddddddddddddddddddddddddddo:;coddlloddoloddddddddddxkO0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN0kkKNNNXOkkkkxxddddddddddoloddoloddo:;coddddddddddddddddddddddddoooollllllllllooddddddddddddddddddddddddxkKW        \r
            NKkdddddddddddddddddddddddddoooooooooddddddddddddddddo:;cdddlldddoodddddddddddxkOKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNK00XNNNX0Okkkxxddddddddddoodddoloddoc;codddddddddddddddddoollcc::::::ccccccllllllloodddddddddddddddddddddxOXW       \r
           WXOxdddddddddddddddddddddooollllllccccccccclloodddddddl;:lddoooddddddddddddddddxk0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXK00KNNNKOkkkxdddddddddddddddddooddoc;:odddddddddddoolcc:::::ccllooodddddddddddddddoodddddddddddddddddddddx0W       \r
           N0xdddddddddddddddddddddddddddddddddoooollcc:::cclloddl;:lddoooddddddddddddddddxk0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXOdoodONNX0Okkxdddddddddddddddddoodddc;:odddddddolcc::::cclooodddddddddddddddddddddddddddddddddddddddddddddxOXW      \r
          WNOxdddddddddddddddddddddddddddddddddddddddddoolcc::::c:;:odddodddddddddddddddddxkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXOdlloOXNX0Okkxddddddddddddddddddodddl;:ldddolc:::::clooddddddddddddddddddddddddddddddddddddddddddddddddddddx0W      \r
          WXkxddddddddddddddddddddddddddddddddddddddddddddddoolc:;,:oddddddddddddddddddddddkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0OO0XNNXKOkxxddddddddddddddddddddddl;;clc:;;::clodddddddddddddddddddddddddddddddddddddddddddddddddddddddddxONW     \r
          WKkdddddddddddddddddddddddddddddddddddddddddddddddddddoc;:oddddddddddddddddddddddkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOkxxddddddddddddddddddddddl;,;;::cloddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddkKW     \r
          WKkdddddddddddddddddddddddddddddddddddddddddddddddddddoc;:oddddddddddddddddddddddx0XNNXOO0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOkxdddddddddddddddddddddddl;;:loddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddx0N     \r
          WXOxdddddddddddddddddddddddddddddddddddddddddddddddddddc;:oddddddddddddddddddddddxOXNNXOk0NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOkxdddddddddddddddddddddddl;;lddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddxONW    \r
           N0xddddddddddddddddddddddddddddddddddddddddddddddddddoc;:oddddoodddddddddddddddddkKNNNXKKKKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0Oxddddddddddddddddddooddddl;;lddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddx0NW    \r
           WXkxdddddddddddddddddddddddddddddddddddddddddddddddddoc;:ldddolodddddddddddddddddxOXNNKkdodkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0kxddddddddddddddddddolodddl;;lddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddx0N     \r
           WN0xddddddddddddddddddddddddddddddddddddddddddddddddddc;:lddoccoddddddddddddddddddkKNN0dllox0NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOxdddddddddddddddddddocloddc;:lddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddkKW     \r
            WN0xdddddddddddddddddddddddddddddddddddddddddddddddddl;;ldoc:ldddddddddddddddddddxOXNX0OkOKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0kxdddddddddddddddddddoc:looc;:ldddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddxONW     \r
             WXOxddddddddddddddddddddddddddddddddddddddddddddddddl;;llc;:oddddddolldddddddddddk0NNNNXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXOxxddddddddddolodddddddl;:loc;:odddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddkXW      \r
              WXOxdddddddddddddddddddddddddddddddddddddddddddddddl;;::;;coddddddl:lodddddddddddkKNXOkkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0kxdddddddddddoccoddddddl:;:c:;:oddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddkKWW      \r
               WNOxddddddddddddddddddddddddddddddddddddddddddddddl;;;;;;codddddl::lddddddddddddxOXX0kOKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKkxddddddddddddoc;codddddoc;;;;;:odddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddx0NW       \r
                WN0xdddddddddddddddddddddddddddddddddddddddddddddl:,,,;:ldddddoc:cldddddddddddddx0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOxdddddddddddddoc::cdddddoc;,,,;coddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddk0NW        \r
                 WNKkxdddddddddddddddddddddddddddddddddddddddddddo:,,,;:odddddlccclddddddddddddddx0NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOxddddddddddddddolcccldddddc;,,,;codddddddddddddddddddddddddddddddddddddddddddddddddddddddxdddddddkKNW         \r
                   WXOxddxxddddddddddddddddddddddddddddddddddddddoc;;;;:oddddoclllldddddddddddddddkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOxdddddddddddddddolloccoddddl;;;;;lddddddddddddddddddddddddddddddddddddddddddddddddddddddxO0kddddxkKWW          \r
                    WN0kx0KOxxddddddddddddddddddddddddddddddddddddc:c:;:odddoccoolldddddddddddddddxkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXKOxxdddddddddddddddollolclddddl;;ccclddddddddddddddddddddddddddddddddddddddddddddddddddddxk0XXOdddxOXW            \r
                     WWX0XWNX0kxddddddddddddddddddddddddddddddddddoooc;:odddlcldollddddddddddddddddxOKNNNNN0OKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0Oxxddddddddddddddddolldolcodddl;;cooodddddddddddddddddddddddddddddddddddddddddddddddddddxOXWWXOddx0NW             \r
                       WWW  WWNKOxxdddddddddddddddddddddddddddddddddoc;:odddlcodolodddddddddddddddddxkKNNNX0OKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKOkkxdddddddddddddddddollddlcodddl:;cddddddddddddddddddddddddddddddddddddddddddddddddddddxkKNW WNOxkKNW              \r
                               WWX0kxxddddddddddddddddddddddddddddddoc;coddollddolodddddddddddddddddddk0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0Okxxdddddddddddddddddddloddolldddl:;cdddddddddddddddddddddddddddddddddddddddxxxddddddddxk0XW    NK0XW                \r
                                  WNX0kxxdddddddddddddddddddddddddddoc;:oddoloddoooddddddooodddddddddddxOKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0Okkxxdddddddddddoooddddddoodddlloddl;:ldddddddddddddddddddddddddddddddddddxxkO0Okddddddxk0XW      WWW                  \r
                                    WWNX0Oxxddddddddddddddddddddddddoc;:oddlloddooodddddoccoddddddddddddxkOKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0OOkkxxddddddddddddl:codddddoodddoloddl;:ldddddddddddddddddddddddddddddddxxk0KXNWN0kddxxk0KNW                             \r
                                        WNXKOkxddddddddddddddddddddddl;:lddllddddodddddoc:codddddddddddddxkkOKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXK0Okkkkxxdddddddddddddo::ldddddoodddoloddl;:oddddddddddddddddddddddddddxkkO0KXNWW   NOxkO0XNWW                               \r
                                           WWNKOkxdddddddddddddddddddl:;lddlodddddddddoc::coddddddddddddddxxkOO0KXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXX0OOkkkkkxdddddddddddddddoc::ldddddddddolodoc;:odddddddddddddddddddxxxkO0KXNNWW       WNXXNWW                                   \r
                                               WNXKOkxxddddddddddddddo:;coooodddddddddlcccloddddddddddddddddxkkkOO0KXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXK0OOkkkkkkkxddddddddddddddddoccccodddddddddoodo:;coddddddddddddxxxkkkO00KXNW                                                       \r
                                                  WNX0kxxxdddddddddddoc;cooodddddddddocclclodddddddddddddddddxkkkkkOOO0KXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXKK0OOkkkkkkkkxxdddddddddddddddddocllclddddddddddool::lddddddxxxxxxkkO0XNNNWWW                                                          \r
                                                WNXK0Okkkkxxxxddddddddl::loddddddddddlcoolloddddddddddddddddddxkkkkkkkkOOO0KKXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXKK00OOkkkkkkkkkkkxxddddddddddddddddddoclolcodddddddddooc:cdxxxxkkkkkkkkkkOO0XXNNNXXKK0KXNWW                                                 \r
                                       WWWWNNNXXK0Okkkkkkkkkkkkxxxxdddoc:codddddddddocloollddddddddddddddddddddxxkkkkkkkkkkkOOO000KKXXXXXNNNNNNNNNNXXXXXXKKK00OOOOkkkkkkkkkkkkkkxddddddddddddddddddddolldoclddddddddddoc:oxkkkkkkkkkkkkkkkkkkOOOkddooooodxOKNW                                              \r
                                   WNK0Okxxdxxkkkkkkkkkkkkkkkkkkkkkkkxdl::odddddddddlcodolldddddddddddddddddddddxxkkkkkkkkkkkkkkkkkkOOOOOOO0000000OOOOOOOOkkkkkkkkkkkkkkkkkkkkkxdddddddddddddddddddddolldollodddddddddl:cdkkkkkkkkkkkkkkkkkkkkxdollllllllllox0XW                                            \r
                                WNKOxolllllllodxkkkkkkkkkkkkkkkkkkkkkkkdc:ldddddddddlloddllddddddddddddddddddddddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxddddddddddddddddddddddoloddlcoddddddddoc:lxkkkkkkkkkkkkkkkkkkkxdollllllllllllloxKN                                           \r
                               N0xolllllllllllodxkkkOOkkkkkkkkkkkkkkkkkxo:codddddddolldddloddddddddddddddddddddddddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdddddddddddddddddddddddoloddollddddddddl:cdkkkkkkkkkkkkkkkkkkkkxollllllllllllllloxKW                                          \r
                              NOdlllllllllllllloxkkO00OkkkkkkkkkOOOOOOkkxl:cdddddddolodddoodddddddddddddddddddddddddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxdddddddddddddddddddddddddooodddlldddddddoc:lxkOOOOOkkkkkkkkkkOOOkxolllllllllllllllldOXW                                         \r
                              NOdlllllllllllllodkkOKKOkkkkkkkkkkkO0KKKKKOxlclddddddolodddoodddddddddddddddddddddddddddxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxddddddddddddddddddddddddddddddoodddoloddddddllok0KXK00OkkkkkOkkkkk00OxollllllllllllllllokXW                                         \r
                              WXkolllllllllllodkO00OxxxkkkO0K0kkkkkOOKXNNN0dlodddddoloddddddddddddddddddddddddddddddddddddddxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxddddddddddddddddddddddddddddddddddddddddoloddddoodkKKK00OkkkkkkOKKOkkkxxkOOxolllllllllllllloxKW                                          \r
                               WXOdoollllllodxO0KOdoloodxkk0NN0xddddxxkO0XNXxllddddoodddddddddddddddddddddddddddddddddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddddddddddddddddddddddddddddooodddodk00OkkxxxddddxOXNKOkkxdoldkOkdollllllllllloxKW                                           \r
                                WN0kxxddddxkO0X0xollooddxkk0NWNOolllloodxO0XKxlldddoodddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddoodooxOOOkkkxddoollld0WXOkkxxdoolldkOkxdooooooodk0NW                                            \r
                                  WNK0OOOOOKXN0dllloddxxxkkOXWWXkllllllloxkOKKkllddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddxxddddddddddddddddddddddddddddddddddddddddddoooxOOkkkkxxddoolloONWKOkkxxxddolllx0XKOkkkkO0XNW                                              \r
                                     WWNNNNWW0dlloodxxxkkkkOKN WKdllllllooxkOKXklodddddddddddddddddddddddddddddddddddddddddddxkO000OOOOOOkkkkkkkkkkkOOOOOOOO0000KK0kxdddddddddddddddddddddddddddddddddddddddddok0OkkkkkxxddoolldKWN0OkkkkxxddooloxKWWNNNNWW                                                 \r
                                            Nklloddxxxkkkkkk0N  Nkolllllloxkk0NXxloddddddddddddddddddddddddddddddddddddddddddx0NWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWX0xdddddddddddddddddddddddddddddddddddddddddddOKOkkkkxxxddoolldOXN0OkkkkkxxxdoolokN                                                        \r
                                            Nkoodxxxkkkkkkkk0N  W0olllllodxkkKWWKdodddddddddddddddddddddddddddddddddddddddddddk0NW                             WXOxddddddddddddddddddddddddddddddddddddddddddodKKOkkkkkxxddoolokXWWXOkkkkkkkxxddookN                                                        \r
                                            W0xxxxxkkkkkkkk0XW   Kdllllodxkk0NW NOoodddddddddddddddddddddddddddddddddddddddddddx0NW                           WXOxdddddddddddddddddddddddddddddddddddddddddddlxNN0OkkkkkxxdooookNW WKOkkkkkkkkkxxxKW                                                        \r
                                             NKOOkkkkkkkkO0XW    XOdoodxxkOKNW   NOoodddddddddddddddddddddddddddddddddddddddddddx0NW                         WXOxdddddddddddddddddddddddddddddddddddddddddddooOWWNKOOkkkkxxddod0W   WXK0OOkkOOO0KXN                                                         \r
                                              WNNXK00000KXNW     WNK0OOO0XNW      NOoodddddddddddddddddddddddddddddddddddddddddddkKNW                       WNOxddddddddddddddddddddddddddddddddddddddddddoookXW  WNXK0OkkkkkOKW      WWNXXXXNNWW                                                           \r
                                                  WWWWWWW           WWNNW         WN0dodddddddddddddddddddddddddddddddddddddddddddOXW                       WKxddddddddddddddddddddddddddddddddddddddddddooxKNW      WWNNXXXNW                                                                              \r
                                                                                    WKxoddddddddddddddddddddddddddddddddddddxxxxxxkKW                       N0xdddddddddddddddddddddddddddddddddddddddddodkXW                                                                                               \r
                                                                                     WXkddddddddddddxxdddddddddddddddddxxxxkkkkkkkkOKNW                     WKkdddddddddddxxxddddddddddddddddxxxxxxxdddodONW                                                                                                \r
                                                                                      WNOxdddddddddxxkxxdddddddddddxxxkkkkkkkkkkkkkkO0KNW                   WN0xdddddddddxxkkxdddddddddddxxxxkkkkkkkkxdxKW                                                                                                  \r
                                                                                        WKkdddddddxkkkkxxdddddxxxxkkkkkkkkkkkkkkkkkkkkOOKXWW                 N0kxdddddddxxkkkkxxdddddxxxkkkkkkkkkkkkkkkOKNW                                                                                                 \r
                                                                                        WN0xdddddxkkkkkkkxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkO0KXNWWW           WXOkxxdddddxxkkkkkkxxxxkkkkkkkkkkkkkkkkkkkkkOOKXWW                                                                                              \r
                                                                                        WN0kdddxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxkO0XNW       WN0OkkxxdddxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkO0KNW                                                                                            \r
                                                                                      WWX0kkxdxxkkkOOOkkkkkkkkkkkkkkkkkkkkkOOOOOkkkkkkkkkxdollllodk0XW     WXOkkkkxxdxkkkkkkkkkkkkkkkkkkkkkkkkkkkkOOOkkkkkkkkO0KXWW                                                                                         \r
                                                                               WNXXXXKK0OkkkxxxkkkOKKOkkkkkkkkkkkkkOO0KKXXXNNNNXK0Okkkkkxdlllllllllox0XNW   N0OkkkkxxkkkO0KK000O00OOOOkkkkkkkkkkkkOKKOOkkkkkkkkOO0KXNWW                                                                                     \r
                                                                            WX0kxooodxxkkkkkkkkkk0XNKOkkkkkkkkkkkkOOO000KKXNWW  WNX0kkkkdollllllllllldxONW WXOkkkkkkkkkkOXWWWWWNNXK0OOkkkkkkkkkkkkOKNX0kkkkkkkkkkkkkkxkOKXW                                                                                 \r
                                                                          WKkdlllllllodxkkkkkkkkOXWWKOkkkkkkkkkkkkkkkkkkkOO0KXNW  WX0kkxdllllllllllllllxKWXOdoooddxkkkkkOKW  WNXK0OOkkkkkkkkkkkkkkOKNWXOkkkkkkkkkxdollllodk0XW                                                                              \r
                                                                        WNOollllllllloodxkkkkkkOKNWN0kkkkkkOOOkkkkkkkkkkkkkOO0KXWW WXOkkdolllllllllllooOXKxollllllodxkkkOKWWNKOkxxxxkkkkkkOOOkkkkkO0NWWX0kkkkkkkxdollllllllod0N                                                                             \r
                                                                        NkolllllllllloooxkkkkkO0NW NKkkkkkkOO00OkkxxxxxkkkkkkOOKXWW WX0kxdolllllllllok0K0dlllllllllodxkO0NNKkdooolooodxkOO00Okkkkkk0XW WNKOkkkkkxolllllllllllokX                                                                            \r
                                                                       W0ollllllllllloodxkkkkk0NW  WKOkkkkkkkOKKOxooodxxxkkkkkO0KNW  WNKOkxdoolllllokXN0dllllllllooodxk0NXOdolllllllllodOKXKOkkkkkkO0XW  WKOkkkkxolllllllllllloON                                                                           \r
                                                                       NOollllllllllloodxkkkk0XW   WKOkkkkkkkkOXKkllloddxxxkkkkOKXW   WWNXKOkkxxdddOXXKkolllllooooodxk0XXOdllllllllllodk0XKkxdddddxxkKN   WXOkkkxdollllllllllloxXW                                                                          \r
                                                                       WKxollllllllloodxkkkO0NW    WKOkxxxdxxkk0XKkollloddxxxkkO0NW       WWNNXXXKXNWX0xllllloooodddxOXN0xollllllloodOKXX0xolllllllodxKW   WX0kkkxdolllllllllodkXW                                                                          \r
                                                                        WKkoollllooodxxkkO0XN      WKxdolllloodxOXXkolllooodxxkOKN                   NKOdooooodddxxxkKNN0dolloooddxk0XWXOollllllllooodkXW   WNK0OkxxdoololoodxOXW                                                                           \r
                                                                         WNKOkxdddxxkkO0KXW        W0dlllllllllox0NWXkdolloodxOKNW                   WNXOxxxxdxxxxkk0NWW0xoooodxxk0KNWXkollllllooooddxOKN     WNXK0OkkxxxxkOKXWW                                                                            \r
                                                                            WWNXXKKXXXNW           WXkollllllllodkXW WXKOkkkO0XNW                      WX0OkkkkkkO0KNW WXOkxxxkO0KXW NOollllloooodddxkOKN         WNNXXXXNWW                                                                                \r
                                                                                                    WXkollllllllokKW    WWWWWW                           WNXXXXXXNWW    WNXXKXXXNWW  XxllllooooodddxkO0XW                                                                                                   \r
                                                                                                     WX0xolllllodOXW                                                                 XxllloooodddxxkO0KNW                                                                                                   \r
                                                                                                       WX0xooooxOKW                                                                  XkolloodddxxxkO0XNW                                                                                                    \r
                                                                                                         WX0OkkOKNW                                                                  N0dlloodxxxkkOKXNW                                                                                                     \r
`,
    linkbot : `                  ,--.    ,--.             \r
                 ((O ))--((O ))            \r
               ,\'_\`--\'____\`--\'_\`.          \r
              _:  ____________  :_         \r
             | | ||::::::::::|| | |        \r
             | | ||::::::::::|| | |        \r
             | | ||::::::::::|| | |        \r
             |_| |\/__________\\| |_|        \r
               |________________|          \r
            __..-\'            \`-..__       \r
         .-| : .----------------. : |-.    \r
       ,\\ || | |\\______________\/| | || \/.  \r
      \/\`.\\:| | ||  __  __  __  || | |;\/,\'\\ \r
     :\`-._\\;.| || \'--\'\'--\'\'--\' || |,:\/_.-\':\r
     |    :  | || .----------. || |  :    |\r
     |    |  | || \'----LNB---\' || |  |    |\r
     |    |  | ||   _   _   _  || |  |    |\r
     :,--.;  | ||  (_) (_) (_) || |  :,--.;\r
     (\`-\'|)  | ||______________|| |  (|\`-\')\r
      \`--\'   | |\/______________\\| |   \`--\' \r
             |____________________|        \r
              \`.________________,\'         \r
               (_______)(_______)          \r
               (_______)(_______)          \r
               (_______)(_______)          \r
               (_______)(_______)          \r
              |        ||        |         \r
              \'--------\'\'--------\'         `,
    rightclickmenu : `      <div class=\"menu\">\r
         <div class=\"menu-item\" onClick=\"window.location.replace(\'https:\/\/the-eating-simulator.fandom.com\/wiki\/The_Eating_Simulator_Wiki\')\">\r
            <pre>\u25B2Visit the wiki\u25B2<\/pre>\r
         <\/div>\r
         <div class=\"menu-item\" onClick=\"window.location.replace(\'https:\/\/github.com\/Eating-simulator\/Eating-simulator.github.io\')\">\r
            <pre>\u25B2Source code\u25B2<\/pre>\r
         <\/div>\r
         <hr>\r
         <div class=\"menu-item\" onClick=\"window.location.replace(\'https:\/\/ch1ck3n.com?bootstrap=on\')\">\r
            <pre>\u25B2Visit ch1ck3n.com\u25B2<\/pre>\r
         <\/div>\r
         <div class=\"menu-item\" onClick=\"window.location.replace(\'https:\/\/sites.google.com\/view\/id7-e\')\">\r
            <pre>\u25B2Visit ID7.com\u25B2<\/pre>\r
         <\/div>\r
         <hr>\r
         <div id=\"menu-developer\" style=\"display:none\">\r
            <div class=\"menu-item\" onClick=\"window.open(\'https:\/\/eating-simulator.github.io\/Console\')\">\r
               <pre>\u25B2Open Console\u25B2<\/pre>\r
            <\/div>\r
         <\/div>\r
      <\/div>`,
    castle : `                           ____                       ____                                                              \r
                          |####|_   _   _   _   _   _|####|                                                             \r
 _    __    __    _       |####| \'-\' \'-\' \'-\' \'-\' \'-\' |####|                                                             \r
|#|__|##|__|##|__|#|      |====|=====================|====|       O                                                     \r
|__|__|__[]__|__|__|      \`.###|\'._.\'._.\'._.\'._.\'._.\'|###.\'      \/#\\                                                    \r
|_|__|__|__|__|__|_|        \`.#|OoOOooOoOOoOoOOooOoOO|#.\'       \/###\\                                                   \r
 \\================\/ _   _   _ \\=======================\/ _   _  \/_####\\                                                  \r
  \\\'._.\'.__.\'._.\'\/_| |_| |_| |_|     _               |_| |_| |_| |####\\                                                 \r
   |    .--.    |==============|   .\'|\'.       _     |===========\/#####\\                                                \r
   |    |  |    |OOoOOOooOooOoo|   |-+-|     .\'|\'.   |OOoOOOOoO||=====|                                                 \r
   |    |__|    |oOoooOoOOOoOoO|   |_|_|     |-+-|   |oOooOooOo|| .-. |                                                 \r
   |    ====    |==============|   =====     |_|_|   |=========|| | | |                                                 \r
   |            |\'._.\'.__.\'._.\'|             =====   |\'._.\'._.\'|| | | |                                                 \r
  [==============]         .--[=======================]--.     || |_| |                                                 \r
   |._.\'.__.\'._.|      _    \`.[=======================].\' .-.  || === |                                                 \r
   |            |    .\'|\'.     ||.-.    _.o._    .-.||    | |  ||     |                                                 \r
   |            |    |-+-|     ||| |  _)  =  (_  | |||    | |  ||======]                                                \r
   |    .--.    |    |_|_|     ||| |  )  ~@~  (  | |||    |_|  ||####.\`                                                 \r
   |    |  |    |    =====     |||_|   \\  =  \/   |_|||    ===  ||##.\'                                                   \r
   |    |__|    |              ||===    \'._.\'    ===||         ||.\'                                                     \r
   |    ====    |==============|| _________________ ||=========||                                                       \r
   |            |\'._.\'.__.\'._.\'||[_________________]||\'._.\'._.\'||                                                       \r
  [==============]   _    _    || ]| \/    |    \\ |[ ||    _    ||                                                       \r
   \\============|  .\'|\'..\'|\'.  || ]|\/     |     \\|[ ||  .\'|\'.  ||                                                       \r
    \\___________|  |-+-||-+-|  || ]|      |      |[ ||  |-+-|  ||                                                       \r
       ||          |_|_||_|_|  || ]|      |      |[ ||  |_|_|  ||                                                       \r
       ||          ==========  || ]|     ~|<span class=\"clickable\" onClick=\"openTab(\'landon\',  )\">~<\/span>     |[ ||  =====  ||                                                       \r
   ,,  ||Castle de pizza       || ]|      |      |[ ||         ||  ,,                                                   \r
  ,;;,[======================,,|| ]|      |      |[ ||,,=========],;;,                                                  \r
 ,;;;;,||OooOOOooOoOoooOooOO,;;,|_]|______|______|[_|,;;,OoOoOo||,;;;;,                                                 \r
 .----.||OooOoOooOooOoOoOOo,;;;;,\/_________________\\,;;;;,OOolc||.----.                                                 \r
 \'.__.\'====================.----.[_________________].----.=======\'.__.\'                                                 \r
 [_________________________\'.__.\'\/                 \\\'.__.\'____________]                                                 \r
                           [____]                   [____]                    \r
Turns out that the fortress wasn\'t a fortress. it was just a wall protecting this massive castle!\r
Woah! This castle is named \"Castle de pizza\"! This must contain the ancient scroll of the pizza.`,
    library : `  \r
     
\r
<span id=\"librarianhello\">\"Hello, i\'m the librarian. how can i help you?\"<\/span>\r
    ______________________________________________________                            \r
    |____________________________________________________|    |                       \r
    | __     __   ____   ___ ||  ____    ____     _  __  |    |                       \r
    ||  |__ |--|_| || |_|   |||_|**|*|__|+|+||___| ||  | |    |                       \r
    ||==|^^||--| |=||=| |=*=||| |~~|~|  |=|=|| | |~||==| |    |                       \r
    ||  |##||  | | || | |JRO|||-|  | |==|+|+||-|-|~||__| |    |                       \r
    ||__|__||__|_|_||_|_|___|||_|__|_|__|_|_||_|_|_||__|_|    |                       \r
    ||_______________________||__________________________|    |                       \r
    | _____________________  ||      __   __  _  __    _ |    |     <span class=\"lockeddoor\">A locked door<\/span>     \r
    ||=|=|=|=|=|=|=|=|=|=|=| __..\\\/ |  |_|  ||#||==|  \/ \/|    |     ______________    \r
    || | | | | | | | | | | |\/\\ \\  \\\\|++|=|  || ||==| \/ \/ |    |    \/              \\   \r
    ||_|_|_|_|_|_|_|_|_|_|_\/_\/\\_.___\\__|_|__||_||__|\/_\/__|    |   \/                \\  \r
    |____________________ \/\\~()\/()~\/\/\\ __________________|    |  \/                  \\ \r
    | __   __    _  _     \\_  (_ .  _\/ _    ___     _____|    |  |                  | \r
    ||~~|_|..|__| || |_ _   \\ \/\/\\\\ \/  |=|__|~|~|___| | | |    |  |                  | \r
    ||--|+|^^|==|1||2| | |__\/\\ __ \/\\__| |==|x|x|+|+|=|=|=|    |  |                  | \r
    ||__|_|__|__|_||_|_| \/  \\ \\  \/ \/  \\_|__|_|_|_|_|_|_|_|    |  |                  | \r
    |_________________ _\/    \\\/\\\/\\\/    \\_ _______________|    |  |                  | \r
    | _____   _   __  |\/      \\..\/JBS   \\|  __   __   ___|    |  |                  | \r
    ||_____|_| |_|##|_||   |   \\\/ __|   ||_|==|_|++|_|-|||    |  |            <span style=\"cursor: pointer\" onClick=\"lockdoor()\"> _<\/span>    | \r
    ||______||=|#|--| |\\   \\   o    \/   \/| |  |~|  | | |||    |  |           <span style=\"cursor: pointer\" onClick=\"lockdoor()\"> (_)<\/span>   | \r
    ||______||_|_|__|_|_\\   \\  o   \/   \/_|_|__|_|__|_|_|||    |  |                  | \r
    |_________ __________\\___\\____\/___\/___________ ______|    |  |                  | \r
    |__    _  \/    ________     ______           \/| _ _ _|    |  |                  | \r
    |\\ \\  |=|\/   \/\/    \/| \/\/   \/  \/  \/ |        \/ ||%|%|%|    |  |                  | \r
    | \\\/\\ |*\/  .\/\/____\/\/.\/\/   \/__\/__\/ (_)      \/  ||=|=|=|    |  |                  | \r
  __|  \\\/\\|\/   \/(____|\/ \/\/                    \/  \/||~|~|~|____|  |__________________| \r
    |___\\_\/   \/________\/\/   ________         \/  \/ ||_|_|_|<span class=\"clickable\" onClick=\"librarypathway()\"><--<\/span> |                     \r
    |___ \/   (|________\/   |\\_______\\       \/  \/| |______|____|                     \r
        \/                  \\|________)     \/  \/ | |                                 \r
    \r
    <input value=\"ask him a question...\"><button onClick=\"AskLibrarian()\">Ask<\/button>\r
\r
  <button onClick=\"document.getElementById(\'librarianhello\').innerHTML = \'I dont know! My best bet is the chef. he has a LOT of stuff that he doesnt know what it is. he will ALWAYS ask you to find him cheese and dorito, no matter what. try doing that! maybe he might give it to you.\'\">Where do i get an world map?<\/button>\r
  <button onClick=\"document.getElementById(\'librarianhello\').innerHTML = \'A pizza, known to be 5 dollars, has a strange effect on you. you can do magic!! Well, at least the legend says that.\'\">What does an pizza do?<\/button>\r
  <button onClick=\"ifound()\">I found the world map!<\/button>\r
  <button onClick=\"document.getElementById(\'librarianhello\').innerHTML = \'I cant! If you look in one of our scripts, you need a world map to open it.\'\">Open that door<\/button>`;
    giantlibrary : `            .                                        \r
      .                    |~~             .          \r
                  .     ___|___      .                 \r
                       ((((())))                       \r
          .           (((((()))))         .            \r
                    |-------------|                    \r
              +    I_I_I_I_I_I_I_I_I    +              \r
             (()   |---------------|   (()             \r
            |---|  ||-| |-| |-| |-||  |---|            \r
  _________|-----|_|---------------|_|-----|_________  \r
  I_I_I_I_I_I_I_I|I_I_I_I_I_I_I_I_I_I|I_I_I_I_I_I_I_|  \r
  |-------|------|-------------------|------|-------|  \r
  ||-| |-||  |-| ||-| |-| |-| |-| |-|| |-|  ||-| |-||  \r
((|-------|------|-------------------|------|-------|))\r
()|  |_|  |  |_| |::::: ------- :::::| |_|  |  |_|  |()\r
))|  |_|  |  |_| | |_| |_.-\"-._| |_| | |_|  |  |_|  |((\r
()|-------|------| |_| | <span id=\"door1\">| | |<\/span> | |_| |------|-------|()\r
@@@@@@@@@@@@@@@@@|-----|_<span id=\"door2\">|_|_|<\/span>_|-----|@@@@@@@@@@@@@@@@@\r
                @@@@\/=============\\@@@@                \r
                       \/       \\                       \r
   The giant library of eating simulator world!`,
    vault : `          _________________________________________________________ \r
       ||-------------------------------------------------------|| \r
       ||.--.    .-._   the vault            .----.             || \r
       |||==|____| |H|___            .---.___|\"\"\"\"|_____.--.___ || \r
       |||  |====| | |xxx|_          |+++|=-=|_  _|-=+=-|==|---||| \r
       |||==|    | | |   | \\         |   |   |_\\\/_|Black|  | ^ ||| \r
       |||  |    | | |   |\\ \\   .--. |   |=-=|_\/\\_|-=+=-|  | ^ ||| \r
       |||  |    | | |   |_\\ \\_( oo )|   |   |    |Magus|  | ^ ||| \r
       |||==|====| |H|xxx|  \\ \\ |\'\'| |+++|=-=|\"\"\"\"|-=+=-|==|---||| \r
       ||\`--^----\'-^-^---\'   \`-\' \"\"  \'---^---^----^-----^--^---^|| \r
       ||-------------------------------------------------------|| \r
       ||-------------------------------------------------------|| \r
       ||               ___                   .-.__<span class=\"clickable\" onClick=\"alert(\'you just obtained a dorito!\');  founddorito();\">.-----.<\/span> .---.|| \r
       ||              |===| .---.   __   .---| |XX<span class=\"clickable\" onClick=\"alert(\'you just obtained a dorito!\');  founddorito();\'\">| (*) |<\/span>_|^^^||| \r
       ||         ,  \/(|   |_|III|__|\'\'|__|:x:|=|  <span class=\"clickable\" onClick=\"alert(\'you just obtained a dorito!\');  founddorito();\">|     |<\/span>=| Q ||| \r
       ||      _a\'{ \/ (|===|+|   |++|  |==|   | |  <span class=\"clickable\" onClick=\"alert(\'you just obtained a dorito!\');  founddorito();\">| DOR |<\/span> | R ||| \r
       ||      \'\/\\\\\/ _(|===|-|   |  |\'\'|  |:x:|=|  <span class=\"clickable\" onClick=\"alert(\'you just obtained a dorito!\');  founddorito();\">| ITO |<\/span> | Y ||| \r
       ||_____  -\\{___(|   |-|   |  |  |  |   | |  |     | | Z ||| \r
       ||       _(____)|===|+|[I]|DK|\'\'|==|:x:|=|XX| (*) |=|^^^||| \r
       ||              \`---^-^---^--^--\'--^---^-^--^-----^-^---^|| \r
       ||-------------------------------------------------------|| \r
       ||_______________________________________________________|| `,
    secondstore : `_____________________________________________________                     \r
____________________________________________________\\\\                    \r
|.-------.-------.|_.----._.----._|.-------.-------.\\\\\\                   \r
|]       |       [|       .       |]       |       [ \\\\\\                  \r
||       |       ||     .\':\'.     ||       |       |  |\\\\                 \r
||       |       ||    .\' : \'.    ||       |       |  |\\\\\\                \r
||     (O|O)     ||   .\'  :  \'.   ||     (O|O)     |  | \\\\\\               \r
||       |       ||  .\'===:===\'.  ||       |       | O|  |\\\\              \r
||       |       ||==\'    :    \'==||       |       |  |  |\\\\\\             \r
|]       |       [|  )    :    (  |]       |       [  |O | \\\\\\            \r
||_______|_______||\"\" ____:_____\"\"||_______|_______|  |  |  |\\\\           \r
\'-----------------\'_______________\'----------------\'  |  |  |\\\\\\          \r
|.--------.  |    \'---------------\'  (o)______)(0)  \\ |  |  | \\\\\\         \r
||        |::|_________________________________())___\\|  | O|  \\\\\\______  \r
||        |::|-----______*!*______-------------))( .\'.\\  |  |   | _____ | \r
||________|::|  _ \/       \'       \\  _        _   (__.\'\\ |  |O  ||     || \r
|____________| _  \\_______________\/     _           (_.\'\\|  |   ||  _  || \r
 ___________________________________________      _  (___\\  |   ||     || \r
||.-----.|.------.|.-.-.--.--.-.-.||.-----.||\\   _        \\ |   ||     || \r
||| === ||| ==== ||| | |  |  | | |||| === ||| \\     _      \\|   ||    _|| \r
||\'-----\'|\'------\'|\'-\'-\'--\'--\'-\'-\'||\'-----\'||. \\  \\       _ \\   ||     || \r
||.-----.|.------.|.------.------.||.-----.|| \`|\\       _    \\  || _   || \r
||| === |||      |||      |      |||| === |||\\ | \\  _         \\ ||_____|| \r
||\'-----\'|]      ||]      |      [||\'-----\'|| \\|. \\        _   \\|_______| \r
||.-----.||    (O|||    (O|O)    |||.-----.||  | \`|\\                   || \r
||| === |||      |||      |      |||| === |||  |\\ | \\__________________|| \r
|||     ||]      ||]      |      [|||     ||| O| \\|. |  _____________  || \r
||\'-----\'||______|||______|______|||\'-----\'||  |  | \`| |             | || \r
||LGB____|________|_______________||_______||  |O |\\ | |   _         | || \r
\'\'-----------------------------------------\' \\ |  | \\| |          _  | || \r
   ____                 _______               \\|  |  | | _     _     | || \r
           _________                  ______   \\  |O | |<span class=\"clickable\" onclick=\"libraryKey=true;output(\'You found the keys to the Great Library of the Eating Simulator World!\')\">(_)<\/span>          | || \r
                                                \\ |  | |   _      _  | || \r
                                _________        \\|  | |             | || \r
      ___________        __                       \\  | | _        _  | || \r
    __                              _________      \\ | |_____________| || \r
               ___________                          \\|_________________|| `,
    copyright : `            <div class=\"modal-content\">\r
               <span class=\"close\">&times;<\/span>\r
               <pre>EATING SIMULATOR V2.8.6<\/pre>\r
               <pre>\r
               \u00A9 Copyright 2020 <a href=\"https:\/\/ch1ck3n.com\" target=\"popup\" onclick=\"window.open(\'https:\/\/ch1ck3n.com\',\'name\',\'width=1000,height=700\')\">ch1ck3n<\/a>, <a href=\"https:\/\/jonkoo.com\" target=\"popup\" onclick=\"window.open(\'https:\/\/jonkoo.com\',\'name\',\'width=1000,height=700\')\">technodoggo<\/a>, <a href=\"https:\/\/sites.google.com\/view\/id7-e\" target=\"popup\" onclick=\"window.open(\'https:\/\/sites.google.com\/view\/id7-e\',\'name\',\'width=1000,height=700\')\">ID7<\/a>,  All rights reserved.<\/a>\r
               <pre>This project is licenced under the MIT licence.<\/pre>\r
               <pre>Copyright (c) 2020 Eating simulator team (ch1ck3n, technodoggo)\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy\r
of this software and associated documentation files (the \"Software\"), to deal\r
in the Software without restriction, including without limitation the rights\r
to use, copy, modify, merge, publish, distribute, sublicense, and\/or sell\r
copies of the Software, and to permit persons to whom the Software is\r
furnished to do so, subject to the following conditions:\r
\r
The above copyright notice and this permission notice shall be included in all\r
copies or substantial portions of the Software.\r
\r
THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r
SOFTWARE.<\/pre>\r
               <footer>\r
                  <pre>Created by ch1ck3n (doge) and technodoggo.<\/pre>\r
                  <pre><a href=\"https:\/\/github.com\/Eating-simulator\/Eating-simulator.github.io\/\">Get the source code<\/a> Or <a href=\"https:\/\/the-eating-simulator.fandom.com\/wiki\/The_Eating_Simulator_Wiki\">visit the wiki<\/a><\/pre>\r
            <\/div>`,
    factory : `                  _________________________________     \r
                 |  __    __    ___  _____   __    |    \r
                 | \/ _\\  \/ \/   \/___\\\/__   \\ \/ _\\   |    \r
                 | \\ \\  \/ \/   \/\/  \/\/  \/ \/\\ \\\\ \\  25|    \r
                 | _\\ \\\/ \/___\/ \\_\/\/  \/ \/  \\\/_\\ \\ []|    \r
                 | \\__\/\\____\/\\___\/   \\\/     \\__\/ []|    \r
                 |====<span class=\"clickable\" id=\"factorymoney\"  onClick=\"lotterymachine(\'money\')\" style=\"color:red\">MONEY<\/span>====_______===<span class=\"clickable\" id=\"factorycandies\" style=\"color:red\" onclick=\"alert(\'This lottery machine cant make candies yet!\')\">CANDIES<\/span>===|    \r
                 ||*|\\_     |*| _____ |*|\\_     |*||    \r
                 ||*|| \\ _  |*||     ||*|| \\ _  |*||    \r
                 ||*| \\_(_) |*||*BAR*||*| \\_(_) |*||    \r
                 ||*| (_)   |*||_____||*| (_)   |*|| __ \r
                 ||*|_______|*|_______|*|_______|*||<span class=\"clickable\">(__)<\/span>\r
                 |===_______===_______===_______===| || \r
                 ||*| _____ |*|\\_     |*|  ___  |*|| || \r
                 ||*||     ||*|| \\ _  |*| |_  | |*|| || \r
                 ||*||*BAR*||*| \\_(_) |*|  \/ \/  |*|| || \r
                 ||*||_____||*| (_)   |*| \/_\/   |*|| || \r
                 ||*|_______|*|_______|*|_______|*||_\/\/ \r
                 |===_______===_______===_______===|_\/  \r
                 ||*|  ___  |*|   |   |*| _____ |*||    \r
                 ||*| |_  | |*|  \/ \\  |*||     ||*||    \r
                 ||*|  \/ \/  |*| \/_ _\\ |*||*BAR*||*||    \r
                 ||*| \/_\/   |*|   O   |*||_____||*||    \r
                 ||*|_______|*|_______|*|_______|*||    \r
                 |lc=___________________________===|    \r
                 |  \/___________________________\\  |    \r
                 |   |                         |   |    \r
                _|    \\_______________________\/    |_   \r
               (_____________________________________)  \r
  <span>This machine has generated <strong><span class=\"factoryhowmany\">0<\/span><\/strong> money.<\/span>`,
    desert : `     .    _    +     .  _________      .          .     \' uuu======uuu     .            \'+                          \r
  (      \/|\\      _   _|         \\______   .   +    \'    .| |======| |        *                                     \r
    \/\\  ||||| .  | | |          _       |        .    \'   | | .==. | |     .    \'                                   \r
 __||||_|||||____| |_|_________<span onclick=\"openTab(\'mexmia\');output(\'You went into the cave of Mexmia!\')\" class=\"clickable\">| |<\/span>_______\\________________|___|<span class=\"clickable\" id=\"fortressdoor\" onClick=\"fortresdoor()\">##<\/span>|___|______________                                                    . \r
   |||| |||||  \/\\   _____      _____  .   .       . <span class=\"fortressresponce\"><\/span>                    \r
  . \\|\`-\'|||| ||||    __________            .                                                                 \r
     \\__ |||| ||||      <span onclick=\"librarykey = true;\" class=\"clickable\">*<\/span>          .     .     .        -            .   .                                    \r
  __    ||||\`-\'|||  .       .    __________                                                                   \r
 .    . |||| ___\/  ___________             .                                                                  \r
 _   ___|||||__  _           .          _                                                                     \r
      _ \`---\'    .   .    .   _   .   .    .                                                                 \r
You walk outside the door. you see a desert fortress! that thing looks pretty cool.`,
    mexmia : `                               \\                       \r
                               \\\\                      \r
                                \\\\                     \r
                                 >\\\/7                  \r
                             _.-(<span id=\"mexmiaeyes\" style=\"color:black\">6<\/span>\'  \\                 \r
                            (=___._\/\` \\                \r
                                 )  \\ |                \r
                                \/   \/ |                \r
                               \/    > \/                \r
                              j    < _\\                \r
                          _.-\' :      \`\`.              \r
                          \\ r=._\\        \`.            \r
                         <\`\\\\_  \\         .\`-.         \r
                          \\ r-7  \`-. ._  \' .  \`\\       \r
                           \\\`,      \`-.\`7  7)   )      \r
                            \\\/         \\|  \\\'  \/ \`-._  \r
                                       ||    .\'        \r
cjr                                     \\\\  (          \r
10mar02                                  >\\  >         \r
                                     ,.-\' >.\'          \r
                                    <.\'_.\'\'            \r
                                      <\'     `,
    upgrades : ` __    __  .______     _______ .______          ___       _______   _______     _______.\r
|  |  |  | |   _  \\   \/  _____||   _  \\        \/   \\     |       \\ |   ____|   \/       |\r
|  |  |  | |  |_)  | |  |  __  |  |_)  |      \/  ^  \\    |  .--.  ||  |__     |   (----\`\r
|  |  |  | |   ___\/  |  | |_ | |      \/      \/  \/_\\  \\   |  |  |  ||   __|     \\   \\    \r
|  \`--\'  | |  |      |  |__| | |  |\\  \\----.\/  _____  \\  |  \'--\'  ||  |____.----)   |   \r
 \\______\/  | _|       \\______| | _| \`._____\/__\/     \\__\\ |_______\/ |_______|_______\/    \r
`,
    chef : `       .--,--.        \r
       \`.  ,.\'        \r
        |___|         \r
        :o o:   O     \r
       _\`~^~\'_  |     \r
     \/\'   ^   \`\\=)    \r
   .\'  _______ \'~|    \r
   \`( =|<span class=\"clickable\" onclick=\"aprontalk()\">     <\/span>|= \/\'    \r
       |<span class=\"clickable\" onclick=\"aprontalk()\">     <\/span>|        \r
       |_____|        \r
~~~~~~~ ===== ~~~~~~~~`,
    store2door : ` ____________ \r
|     NO     |\r
|TRESSPASSING|\r
|            |\r
|         <span class=\"clickable\" onclick=\"triggerstore2()\">_<\/span>  |\r
|        <span class=\"clickable\" onclick=\"triggerstore2()\">(_)<\/span> |\r
|            |\r
|  THE STORE |\r
|            |\r
|____________|\r
`,
    textload : `               <pre>\r
                                   ____              _                                              \r
                                  \/ ___|  __ ___   _(_)_ __   __ _                                  \r
                                  \\___ \\ \/ _\` \\ \\ \/ \/ | \'_ \\ \/ _\` |                                 \r
                                   ___) | (_| |\\ V \/| | | | | (_| |                                 \r
                                  |____\/ \\__,_| \\_\/ |_|_| |_|\\__, |                                 \r
                                             |___\/                 \r
                                                             \r
 <\/pre>\r
               <center>\r
                  <pre><strong>LOCALSTORAGE SAVING<\/strong><\/pre>\r
               <\/center>\r
               <pre>When you save locally on your computer. does not save across computers.<\/pre>\r
               <button onclick=\"save()\">Save<\/button>\r
               <button onclick=\"setInterval(function() {\r
                  save();\r
                  }, 60000);\">Save every minute<\/button>\r
               <button onclick=\"localStorage.clear()\">Reset game<\/button>\r
               <center>\r
                  <pre><strong>TEXT SAVING<\/strong><\/pre>\r
               <\/center>\r
               <pre>When you clear your local storage (for whatever reason) and you lose your save,\r
                             You can text save! Get the text save here and just paste it in the loading area and you go back RIGHT where you left off!\r
                             (Warning: when game updates, when you text load, there is a chance game might break)<\/pre>\r
               <button onClick=\"textsave.save()\">Get the current game as text<\/button>                         
\r
               <textarea rows=6 cols=\"96\" id=\"textareasave\" onClick=\"document.getElementById(\'textareasave\').select();\" readonly><\/textarea>\r
               <pre>\r
                                 _                    _ _                                           \r
                                | |    ___   __ _  __| (_)_ __   __ _                               \r
                                | |   \/ _ \\ \/ _\` |\/ _\` | | \'_ \\ \/ _\` |                              \r
                                | |__| (_) | (_| | (_| | | | | | (_| |                              \r
                                |_____\\___\/ \\__,_|\\__,_|_|_| |_|\\__, |                              \r
                                                                  |___\/                                \r
  <\/pre>\r
               <textarea rows=6 cols=\"96\" id=\"textareasave\"><\/textarea>\r
               
\r
               <button onClick=\"textsave.load()\">Load game<\/button>                   \r
            <\/center>\r
         <\/div>\r
      <\/div>\r
      <div class=\"center\">\r
         <div id=\"vault\" class=\"tabcontent\">\r
            <pre id=\"vaultascii\">\r
  \r
  <\/pre>`
  },
  reload: function () {
    document.getElementById("merchant").innerHTML = this.art.merchant
    document.getElementById("soldierascii").innerHTML = this.art.soldiers
    document.getElementById("yumpizzaascii").innerHTML = this.art.yummypizza
    document.getElementById("storepizza").innerHTML = this.art.pizza
    document.getElementById("storegingerbreadman").innerHTML = this.art.gingerbreadman
    document.getElementById("storemilk").innerHTML = this.art.storemilk
    document.getElementById("storecake").innerHTML = this.art.storecake
    document.getElementById("landonthefrog").innerHTML = this.art.frog
    document.getElementById("linkbotascii").innerHTML = this.art.linkbot
    document.getElementById("rightclickmenu").innerHTML = this.art.rightclickmenu
    document.getElementById("castleascii").innerHTML = this.art.castle
    document.getElementById("libraryascii").innerHTML = this.art.library
    document.getElementById("giantlibraryascii").innerHTML = this.art.giantlibrary
    document.getElementById("vaultascii").innerHTML = this.art.vault
    document.getElementById("store2ascii").innerHTML = this.art.secondstore
    document.getElementById("copyrightnotice").innerHTML = this.art.copyright
    document.getElementById("factoryascii").innerHTML = this.art.factory
    document.getElementById("desertascii").innerHTML = this.art.desert
    document.getElementById("mexmiaascii").innerHTML = this.art.mexmia
    document.getElementById("upgradesascii").innerHTML = this.art.upgrades
    document.getElementById("chefascii").innerHTML = this.art.chef
    document.getElementById("notrespassing").innerHTML = this.art.store2door
    document.getElementById("loadingarea").innerHTML = this.art.textload
    //document.getElementById("glibraryascii").innerHTML = this.glibrary
  }


}
ascii.reload()
