document.getElementById('btn-calculation').addEventListener('click', function () {
    const foodCost = parseFloat(document.getElementById('food-input').value);
    const rentCost = parseFloat(document.getElementById('rent-input').value);
    const clothsCost = parseFloat(document.getElementById('cloths-input').value);
    const totalCost = foodCost + rentCost + clothsCost;
    //  total expense sum
    const totalExpense = document.getElementById('total-expese').innerText = totalCost;
    // 
    const totalIncome = parseFloat(document.getElementById('income-input').value);

    const incomeAmount = totalIncome - totalExpense;
    //
    const totalBalance = document.getElementById('total-balance').innerText = incomeAmount;
    // clear values
});