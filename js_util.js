console.log = function(){
    var args = Array.prototype.slice.call(arguments, 0);
    var op= document.createElement('output');
    var logdiv=document.getElementById('output');
    if(logdiv==null)
    {
            var newdiv=document.createElement('div');
        newdiv.id="output"
        document.body.appendChild(newdiv);
    }
    logdiv=document.getElementById('output');
          document.getElementById('output').innerHTML += args.join(" ") + "\n";
    
    
};
