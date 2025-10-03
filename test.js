let s=prompt("1=ATM\n2=Quiz\n3=Personal Budget Planner\n4=Travel Fare Calculator");
switch(Number(s)){
    case 1:
        let pin = prompt("Enter your PIN : ");
        let a = confirm("DO you want to open your account !!");
        let amt = 10000;
        let f = true;
        while (f==true) {
            if (a == true) {
                z = Number(prompt("1=Deposit,\n 2=Withdraw,\n 3=Check Balance,\n 4=Exit"));
                switch (z) {
                    case 1:
                        c = prompt("Enter Amount");
                        amt += Number(c);
                        alert("Deposit Successful ! New Balance :" + amt);
                        break;
                    case 2:
                        b = prompt("Enter Amount ?");
                        amt -= Number(b);
                        alert("Withdraw Successful ! New Balance :" + amt);
                        break;
                    case 3:
                        alert("Your Balance is :" + amt);
                        break;
                    case 4:
                        f = false;
                        break;
                    default:
                        alert("Invalid Input");
                        break;
                }
            }
        }
        break;
    case 2:
        let score = 0;
        let q1 = prompt("Q1: What is the capital of France?\n1. Berlin\n2. Paris\n3. Rome");
        switch (q1) {
            case "2":
                score++;
                break;
            default:
                break;
            }
        let q2 = prompt("Q2: What is 2 + 2?\n1. 4\n2. 5\n3. 3");
        switch (q2) {
            case "1":
                score++;
                break;
            default:
                break;
        }
        let q3 = prompt("Q3: Which planet is known as the Red Planet?\n1. Earth\n2. Mars\n3. Jupiter");
        switch (q3) {
            case "2":
                score++;
                break;
            default:
                break;
        }
        alert("Your Final Score: " + score + "/3");
        break;
    case 3:
        let i= Number(prompt("Enter your monthly income:"));
        let r= Number(prompt("Enter your rent expense:"));
        let g= Number(prompt("Enter your groceries expense:"));
        let t= Number(prompt("Enter your transport expense:"));
        let te= r+g+t;
        let rb= i-te;
        let percentage = (te/i) * 100;
        let message = te > i ? "You are overspending." : "You are within budget.";
        alert("Total Expenses:"+te+"\nRemaining Balance:"+rb+"\nPercentage Spent:"+percentage+"\nMessage:"+message);
        break;
    case 4:
        let d=Number(prompt("Distance:"));
        let ttx=prompt("Transport Type:");
        let tt=ttx.toLowerCase();
        if (tt=="train")
        {
            alert("Total Fare:"+(d*5));
        }
        else if (tt=="bus")
        {
            alert("Total Fare:"+(d*2));
        }
        else if (tt=="car")
        {
            alert("Total Fare:"+(d*10));
        }
        else if (tt=="bike")
        {
            alert("Total Fare:"+(d*9));
        }
        else{
            alert("Invalid Input.");
        }
        break
        default:
        break; 
        

}