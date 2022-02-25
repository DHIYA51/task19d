let entry = document.getElementById("entry");
entry.addEventListener("click", display);

let row = 1;

function display() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let Aname = document.getElementById("Aname").value;
    let Pname = document.getElementById("Pname").value;
    let Gender = document.getElementById("Gender").value;
    let food = document.getElementById("food").value;
    let state = document.getElementById("state").value;
    let co = document.getElementById("co").value;

    if (!fname || !lname || !Aname || !Pname || !Gender || !food || !state || !co) {
        alert("please fill all the boxes");
        return;
    }

    let display = document.getElementById("display");

    let newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = Aname;
    cell4.innerHTML = Pname;
    cell5.innerHTML = Gender;
    cell6.innerHTML = food;
    cell7.innerHTML = state;
    cell8.innerHTML = co;
    row++;
}