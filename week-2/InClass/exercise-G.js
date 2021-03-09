var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8;


/* WHILE */

let i = countdown;
    while (i >= 0) {
        console.log(i);
        i--;
    }
console.log(apolloCountdownMessage);

/* FOR COUNTING UP */

for (let i = 0; i < countdown +1; i++) {
    console.log(i);
}
console.log(apolloCountdownMessage);

/* FOR COUNTING DOWN */

for (let i = countdown; i >= 0 ; i--) {
    console.log(i);
}
console.log(apolloCountdownMessage);

