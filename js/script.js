document.getElementById('sketch').style.visibility="hidden";
document.getElementById("do").addEventListener('click' , textchange , false);
document.getElementById("delete").addEventListener('click' , del , false);
function del(){
    var x= document.getElementById("art");
    x.style.display="none";
}
function textchange() {
    var x =document.getElementById('getinput');
    x.style.border = "1px solid gray";
    var a = x.value.split('\n');
    console.log(a);
    if (a[0].trim().split(' ').length === 1 ) {
        alert('The number of nodes and total edges of the graph not present');
        x.value = "";
        x.style.border = "1px solid red";
        return;
    }
    var aa = a[0].trim().split(' ');
    
    if (aa.length !== 2) {
        alert('Wrong');
        x.value = "";
        x.style.border = "1px solid red";
        return;
    }
    if (isNaN(aa[0]) || isNaN(aa[1])) {
        alert('The number of nodes and edges must be numbers and integers')
        x.value = "";
        x.style.border = "1px solid red";
        return;
    }
    for (var i = 0; i < 2; i++) {
       
        if (!Number.isInteger(+aa[i]) || Number(+aa[i]) > 100) {
            alert('Must be integer and less than 100');
            x.value = "";
            x.style.border = "1px solid red";
            return;
        }
    }
    if ( a.length -1 !== +aa[1]){
        alert('No of edges should be equal to :' + aa[1] );
        x.value = "";
        x.style.border = "1px solid red";
        return;
    }
    for ( var i =1 ; i < a.length; i++ ){
        var bb = a[i].trim().split(' ');
        console.log(bb);
        
        if (bb.length !== 2) {
            alert('Wrong input ');
            x.value = "";
            x.style.border = "1px solid red";
            return;
        }
        if (isNaN(bb[0]) || isNaN(bb[1])) {
            alert('The connecting vertices should be integers');
            x.value = "";
            x.style.border = "1px solid red";
            return;
        }
        for (var j = 0; j < 2; j++) {

            if (!Number.isInteger(+bb[j]) || Number(+bb[j]) > 100) {
                alert('Must be integer and less than 100');
                x.value = "";
                x.style.border = "1px solid red";
                return;
            }
            if (Number(+bb[j]) > aa[0]){
                alert('Vertex more than ' + aa[0]);
                x.value = "";
                x.style.border = "1px solid red";
                return;

            }
        }
    }
    
    cells = [];
    connections = [];
    for (let i = 1; i <= aa[0]; i++) {
        cells.push(new Cell(i.toString()));
        // cells[i-1].addEventListener('mousedown' , mousePressed ,false);
        // cells[i-1].addEventListener('mousemove', mouseDragged , false);
        // cells[i-1].addEventListener('mouseup' , mouseReleased , false);
    };
    for (var i = 1; i <= aa[1]; i++) {
        var bb = a[i].trim().split(' ');
        connections.push(new Connection(cells[Number(+bb[0])-1], cells[Number(+bb[1])-1]));
    }
    redraw();
    document.getElementById('sketch').style.visibility = "visible";

}