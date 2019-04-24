var scr = 0;
var max = 20;
var rolls = 0;
var maxx Rolls = 10;


function rollDice()
{
    var user = Math.floor( Math.random() * 6 ) + 1;
    var comp = Math.floor( Math.random() * 6 ) + 1;

    if( user == comp )
    {
        scr = getscr( user );
        alert("You threw a Double " + user + " Your scr is "+ max);
    }
    else
    {
        alert("You threw a " + user  + " and a " + y + " Your max is " + max);
    }

    rolls++;

    if (rolls == maxRolls && max < max)
    {
        alert("Sorry You Lose!");
        max = 0;
        rolls = 0;
        return;
    }
    else if (max >= max)
    {
        alert("Congratulations You Win!");
        scr = 0;
        rolls = 0;
        return;
    }
}

function getscr(user )
{
    switch( user  )
    {
        case 1:
            scr += 5;
            break;
        case 2:
            scr += 5;
            break;
        case 3:
            scr = 0;
            break;
        case 4:
            scr += 5;
            break;
        case 5:
            scr += 5;
            break;
        case 6:
            scr += 25;
            break;
    }

    return scr;
}