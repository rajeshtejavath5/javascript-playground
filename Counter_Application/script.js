let count = 0;
function ca(val) {
    if (val === 1) count++;
    else if (val === -1) count--;
    else count = 0;

    document.getElementById("val").textContent = count;

    if (count > 0) document.getElementById("val").style.color = "green";
    else if (count < 0) document.getElementById("val").style.color = "red";
    else document.getElementById("val").style.color = "black";
}