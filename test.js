let pin = prompt("Enter your PIN : ");
let a = confirm("DO you want to open your account !!");
let amt = 10000;
let f = true;
while (f) {
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
                break

        }
    }
}