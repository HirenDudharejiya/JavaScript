// write("string")	
// writeln("string")	
// getElementById()	
// getElementsByName()	
// getElementsByTagName()
// getElementsByClassName()

// function printvalue() {
//     let name = document.form1.name.value;
//     alert("Welcome: " + name);
// }


// function addvalue() {
//     let number = parseInt(document.getElementById("number").value);
//     alert(number + number + number);
// }


// function Disp() {
//     let p1 = document.getElementsByName('n')
//     for (i = 0; i < p1.length; i++) {
//         p1[i].style.backgroundColor = "red";
//     }
// }




// function totalLength() {
//     let len = document.getElementsByTagName("input");
//     alert("total input tags are: " + len.length);
// }







// function change() {
//     document.getElementById("demo").innerHTML = "Hello React";
//     document.getElementById("demo").style.color = "white"
//     document.getElementById("demo").style.backgroundColor = "black"
//     document.getElementById("demo").style.width = "100px"
// }


function validate() {
    let msg;
    if (document.form1.pass.value.length > 5) {
        msg = "good";
    }
    else {
        msg = "poor";
    }
    document.getElementById('pass').innerText = msg;
} 
