const costTable = [
    [28020, 35030, 46960, 58410, 64350, 69000],
    [25940, 32430, 43500, 54110, 59610, 63930],
    [23950, 29940, 40150, 49960, 55070, 59050],
    [22860, 28570, 38790, 48590, 53680, 57690],
    [21770, 27210, 37410, 47210, 52320, 56310],
    [21770, 27210, 37410, 47210, 52320, 56310]
];
const proportion = [0.15, 0.09, 0.06];
const mealCost = 2500;
const snackCost = 500;

calc();



function calc() {
    const tbody = document.getElementById('cost');
    const level = Number(document.getElementById('level').value);
    const time = Number(document.getElementById('time').value);
    const meal = Number(document.getElementById('meal').value);
    const snack = 2;
    const date = Number(document.getElementById('date').value);

    const noneSalary = (mealCost * meal + snackCost * snack) * date;
    const Salary = costTable[level][time] * date;

    for (let i = 0; i < proportion.length; i++) {
        let row = tbody.rows[i];
        row.cells[1].innerHTML = Math.floor(noneSalary).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
        row.cells[2].innerHTML = Math.floor(Salary * proportion[i]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
        row.cells[3].innerHTML = Math.floor(noneSalary + Salary * proportion[i]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"; 
    }


}

