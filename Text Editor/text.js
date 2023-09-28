function b1() {

    document.getElementById("textarea1").style.fontWeight = "bold";
    // let a = document.getElementById('textarea1').value
    // console.log(a)
}

function b2() {


    document.getElementById("textarea1").style.fontStyle = "italic";
}
function bU() {

    document.getElementById("textarea1").style.textDecoration = "underline";
}

function b3() {

    document.getElementById("textarea1").style.textAlign = "left";
}

function b4() {

    document.getElementById("textarea1").style.textAlign = "center";
}

function b5() {

    document.getElementById("textarea1").style.textAlign = "right";
}

function b6() {

    document.getElementById("textarea1").style.textTransform = "uppercase";
    // let a = document.getElementById('textarea1').value

    // if (document.getSelection) {
    //     let a = document.getSelection().toString();

    //     let txt = a.toUpperCase();
    //     console.log(txt)
    //     document.getElementById("demo").innerHTML = txt;
    //     document.getElementById("textarea1").innerText = txt;

    // }

}

function b7() {

    document.getElementById("textarea1").style.textTransform = "lowercase";
}

function b8() {

    document.getElementById("textarea1").style.textTransform = "capitalize";
}

function b9() {
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";

}
function bColor() {
    let color = document.getElementById('txtColor')
    document.getElementById('textarea1').style.color = color.value
}

function clearSum() {
    document.getElementById("summary").innerHTML = " "

}
function summary() {
    // if (document.getSelection) {
    //     let a = document.getSelection().toString();
    //     document.getElementById('summary').innerHTML = a
    // }
    let b = document.getElementById('textarea1')
    let txtSum = document.getElementById('summary')
    txtSum.innerHTML = b.value
}

