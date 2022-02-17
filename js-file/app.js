document.getElementById('btn-calculation').addEventListener('click', function () {
    const foodCost = parseFloat(document.getElementById('food-input').value);
    const rentCost = parseFloat(document.getElementById('rent-input').value);
    const clothsCost = parseFloat(document.getElementById('cloths-input').value);
    const totalCost = foodCost + rentCost + clothsCost;
    // 
    const totalExpense = document.getElementById('total-expese').innerText = totalCost;
    // 
    const totalIncome = document.getElementById('income-input');
    const incomeAmount = parseFloat(totalIncome.value);

    const incomeExpese = incomeAmount - totalExpense;



    //



    console.log(incomeExpese);

    // console.log(foodInput);
})