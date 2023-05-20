    m="";//STORING THE DISPLAY MSG
    s="";//STORING EXPRESSIONS TO USE IN EVAL FUNCTION
    clean();
    //= CALCULATION
    function eq() {

        m = eval(s);
        document.getElementById("output").textContent = m.toFixed(4);
        s=m;
    }
    function clean() {
        document.getElementById("output").textContent = '0';
        m="";
        s="";
    }
    function msg(x){
        m +=x;
        document.getElementById("output").textContent = m;
        if (x == 'tan(' || x == 'cos(' || x == 'sin(' || x == 'PI' || x=='E' || x=='log(')
        s+="Math."+x;
        else 
        s+=x;
        //document.getElementById("output").textContent = s;
    }
    
