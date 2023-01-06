function exchange() {
    let x = document.getElementById("a").value;
    let y = document.getElementById("b").value;
    let z = document.getElementById("c").value;
    let Result;
    if (y == "USD" && z == "VND")
    {
        Result = x * 23000;
    }


else if (y == "VND" && z == "USD")
    {
        Result = x / 23000;
    }


else if (y == "VND" && z == "VND")
    {
        Result = x;
    }

    document.getElementById("result").innerHTML = Result;

}