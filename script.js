var numbPeriods = document.getElementById("inputSearch1");
var numbSub = document.getElementById("inputSearch2");
var nSub = document.getElementById("inputSearch3");
var bttn = document.getElementById("bttn");
var timeTable = document.getElementById("table");
var Table = document.getElementById("periodTable");
var sub = new Array();
var day = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
timeTable.style.display = "none";
nSub.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        sub.push(nSub.value);
        nSub.value = "";

    }
    if (sub.length > numbSub.value) {
        nSub.disabled = true;
        alert("You reach the maximum subjects");
        tableCreation();
    }
});
function tableCreation() {
    var row = document.createElement("tr");
    row.classList.add("tr");
    periodTable.appendChild(row);
    var periods = document.createElement("td");
    periods.classList.add("td");
    row.appendChild(periods);
    periods.textContent = "Time table";
    periods.style.backgroundColor="black";
    periods.style.color="white";
    for (var i = 0; i < numbPeriods.value; i++) {
        var periods = document.createElement("td");
        periods.classList.add("td");
        periodTable.appendChild(row);
        row.appendChild(periods);
        periods.textContent = i + 1;
        periods.style.backgroundColor="black";
        periods.style.color="white";
        timeTable.style.display="block"
    }
    for (j = 0; j < 5; j++) {
        var row = document.createElement("tr");
        row.classList.add("tr");
        periodTable.appendChild(row);
        var periods = document.createElement("td");
        periods.classList.add("td");
        row.appendChild(periods);
        periods.textContent = day[j];
        for (i = 0; i < numbPeriods.value; i++) {
            var m = Math.floor(Math.random() * numbSub.value);
            var periods = document.createElement("td");
            periods.classList.add("td");
            periodTable.appendChild(row);
            row.appendChild(periods);
            periods.textContent = sub[m];
        }
    }


}

