var table = createtable();
console.log(table);

function createtable(){
var table1 = [];
var valuetable = document.getElementsByClassName('square');
console.log(valuetable);
for (var i =0; i < valuetable.length; i++)
{
    if(valuetable[i].value != "" ){
        table1.push(parseInt(valuetable[i].value));
        }
        if(valuetable[i].value == "" ){
            table1.push(0);
}
}
return table1;

}



function checkrow(i, number){
var rownumber = Math.floor(i/9);
var k = rownumber *9;
var check =  false;
for (var l = k; l < rownumber + 9; l++)
{
    if (number == table[l] && table[l] != 0){
    
        check = true
        return check;
    }
     
}

return check;
}

function checkcolumn(i, number){
var columnumber = (i %9 );
var check = false;
for (var k = columnumber; k < 81; k = k+9)
{
    if(number == table[k] && table[k] != 0)
    {
        check = true
        return check;
    }
}
return check;
}
function checksquare(i, number)
{
var check = false;
var row = (i%9);
var column = Math.floor(i/9);

i = i - (row %3);
i = i - (column % 3)*9;
var k = i;
for (var l = k; l < k+3   ;l++){
    if (number == table[l] && table[l] != 0)
    check = true
    return check;
}

for ( l = k +9; l < k+12; l++){
    if (number == table[l] && table[l] != 0)
    check = true
    return check;
}

for ( l = k+18; l < k+21; l++){
    if (number == table[l]&& table[l] != 0)
    check = true
    return check;
}

return check;
}

export function solving(){

    var value = 1;
    var position = [];
    var valueini = [];
    var i = 0;

    
    while ( i < 81){
        console.log(i);
        console.log(value);
        console.log(checkrow(i,value));
        console.log(checkcolumn(i,value));
        console.log(checksquare(i,value));
        
    
    if (table[i] == 0){
    if ((checkrow(i,value) == false) && (checkcolumn(i,value) == false) && (checksquare(i, value)== false) && (value < 10))
    {
    
            console.log('hello');
            console.log(i);
            // document.getElementById(i).value = value;
            table[i]= value;
            position.push[i];
            valueini.push(value);
            value = 0;
            i = i+1;
            
           
     
    
    }
    if (value > 8){
            //document.getElementById(i).value = 0;
              table[i]= 0;
              i = position.pop();
              value = valueini.pop();
              console.log('hello1');
              
             
    }
    }
    if (table[i] != 0) {
              i = i+1;
              console.log('hello2');
              
              
              
    }
              value = value + 1;
              console.log(table);
              console.log('hello3');
             
             
             
    }
    }



