// add calculate button handlers for money calculation
document.getElementById('btn-calculation').addEventListener('click', function () {
    const foodCost = parseFloat(document.getElementById('food-input').value);
    const rentCost = parseFloat(document.getElementById('rent-input').value);
    const clothsCost = parseFloat(document.getElementById('cloths-input').value);
    const totalCost = foodCost + rentCost + clothsCost;
    //  total expense sum
    const totalExpense = document.getElementById('total-expese').innerText = totalCost;
    // get current income
    const totalIncome = parseFloat(document.getElementById('income-input').value);

    const incomeAmount = totalIncome - totalExpense;
    // add currrent income and total money
    const totalBalance = document.getElementById('total-balance').innerText = incomeAmount;
    const balanceLeft = totalBalance.value;
    // clear values
    document.getElementById('income-input').value = '';
    document.getElementById('food-input').value = '';
    document.getElementById('rent-input').value = '';
    document.getElementById('cloths-input').value = '';


});
// add save button handelers
document.getElementById('btn-save').addEventListener('click', function () {
    const saveMoney = parseInt(document.getElementById('saving-input').value);
    const beforeIncome = parseInt(document.getElementById('total-balance').value);
    const saveCalc = (beforeIncome / saveMoney) * 100;
});

//
