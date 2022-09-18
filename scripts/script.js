function Main(innertext, source) {
    var numbers = innertext.length;
    var div = 360 / numbers;
    var radius = 150;
    var parentdiv = document.getElementById('parentdiv');
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
    var offsetToChildCenter = 50;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 0; i <= numbers-1; ++i) {
      var childdiv = document.createElement('div');
      childdiv.className = 'div2';
      var pagename = location.pathname.substring(location.pathname.lastIndexOf("/") + 1); // for html file name
      if(pagename == "index.html" || pagename == "''") {
        childdiv.innerHTML = '<a href='+source[i]+'>'+"<p>"+innertext[i]+"</p>"+'</a>';        
      } else {
        childdiv.innerHTML = '<a href='+source[i]+' target="_blank">'+"<p>"+innertext[i]+"</p>"+'</a>';
      }
      childdiv.style.position = 'absolute';
      childdiv.style.display = 'flex';
      childdiv.style.justifyContent = 'center';
      childdiv.style.alignItems = 'center';
      var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
      var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
      childdiv.style.top = (y + totalOffset).toString() + "px";
      childdiv.style.left = (x + totalOffset).toString() + "px";
      parentdiv.appendChild(childdiv);
    }    
}