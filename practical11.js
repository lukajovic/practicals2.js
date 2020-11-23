a = 0;
b = 120;
c = 40;

if (a > b && a > c && b > c) {
    console.log(" Najveci je " + a + ", a drugi po redu je " + b + ", dok je treci " + c + ". ");
} else if (a > b && a > c && b < c) {
    console.log(" Najveci je " + a + ", a drugi po redu je. " + c + ", dok je treci. " + b + ". ");
} else if (b > a && b > c && a > c) {
    console.log(" Najveci je " + b + ", a drugi po redu je " + a + ", dok je treci " + c + ". ")
} else if (b > a && b > c && c > a) {
    console.log(" Najveci je " + b + ", a drugi po redu je " + c + ", dok je treci " + a + ". ")
} else if (c > a && c > b && a > b) {
    console.log(" Najveci je " + c + ", a drugi po redu je " + a + ", dok je treci " + b + ". ")
} else if (c > a && c > b && b > a) {
    console.log(" Najveci je " + c + ", a drugi po redu je " + b + ", dok je treci " + a + ". ")
}

