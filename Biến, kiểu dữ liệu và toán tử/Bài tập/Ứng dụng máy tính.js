function Tong(){
    let a = parseFloat( document.getElementById("1").value);
    let b = parseFloat(document.getElementById("2").value);
    let t = a + b;
    document.getElementById("kq").innerHTML= t;
}
function Hieu(){
    let a = parseFloat( document.getElementById("1").value);
    let b = parseFloat(document.getElementById("2").value);
    let h = a - b;
    document.getElementById("kq").innerHTML= h;
}
function Nhan() {
    let a = parseFloat(document.getElementById("1").value);
    let b = parseFloat(document.getElementById("2").value);
    let h = a * b;
    document.getElementById("kq").innerHTML = h;
}
function Chia() {
    let a = parseFloat(document.getElementById("1").value);
    let b = parseFloat(document.getElementById("2").value);
    let h = a / b;
    document.getElementById("kq").innerHTML = h;

