const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("bd").value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Enter Valid Date");
        displayResult("0")
        return;
    }

    birthYear = currentYear - birthDetails.year;
    displayResult(birthYear);
}

function displayResult(bYear){
    document.getElementById("dis").textContent = bYear + " years";
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}