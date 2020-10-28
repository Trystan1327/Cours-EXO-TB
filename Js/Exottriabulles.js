

var tab = [8, 14, 12, 1, 7, 31];
var changed;

function sort(tab)
{
    do
    {
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1])
            {
                var result = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = result;
                changed = true;
            }
        }
    } while(changed);
}

sort(tab);
document.write("tableau trié : " + tab);

