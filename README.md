# etch-a-sketch


a web sketching app, very simple, very nice. Very hard to get by...


Notes:

Getting the code readable was hard this time...

But this time I did everything with the language that fits the task: html to elements, CSS to style and JS to
create the interaction part.


I used almost the same code for the colorGrabber Shading and Lighten because they share
a lot of similarity, you can see it (i left it that way for two reasons= 1- I did not know how to do it 2- it is a lesson learned)
I may change it on the future, I think I can do it with a better aproach, maybe an easier one.

I got this challenge (colorGrabber, shading and lighten) from https://github.com/bscottnz/esketch as he is the only one that has this functions...
I was unable to understand all his code, but as Sinatra says 'I did it my way'. None the less, if you have some
guidance or advice on how to do this in a better,cleaner and simpe way, please let me know, I will thank you a lot.



getting the on click colored div was the bug I have to debug later... so... was hard to do. I had a mistake:
                        function changingTheColor(e) {
                         if (currentMode === "color" && theMouse === true)

that made my code useless I just get rid of the && theMouse=== true and of course, everything worked just fine. why? because thanks to this line "   if (e.type === "mouseover" && !theMouse) return   " that I learned
from michalosman you can see how you prevent the activation of the functions.

I learned too how to addEventListener and also how to e.target them.



I learned from michalosman that you can have two "if" statements to ask for two conditions on the same time.
first time I saw this was on his code.





I had my own rainbow mode:

else if (currentMode === "rainbowMode"){
       let red = Math.floor(Math.random()*256);
       let green =  Math.floor(Math.random()*256);
       let blue =  Math.floor(Math.random()*256);
        let redHex = red.toString(16);
        let greenHex = green.toString(16);
        let blueHex= blue.toString(16);
        randomColor = "#"+redHex+greenHex+blueHex;
        e.target.style.backgroundColor = randomColor

        I do not know why, but this crashed my browser from time to time.... and it give me some errors too...
        so I saw other peoples code and learned that I do not need to converted to hex... so I let it be on RGB
        from the beginning.
    
I learned a lot and have a wonderfull time reading other peoples code.

Thank you all for being my teachers and guides during this little project. Specially to michalosman and Scotty.

Soon I will add a "print image" button when I'm able and a little better on coding.

Michalosman's github: https://github.com/michalosman/ (nice and clean btw)

Scotty's github: https://github.com/bscottnz/