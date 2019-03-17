// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};
    if (currency >= 10000) {
        money.error = "You are rich, my friend! We don't have so much coins for exchange";
        return money;
    }
    else if (currency <= 0) {
        return money;
    }
    else {
        if (currency >=50) {
            for (let i = currency, j = 1; i >= 50; i-=50, j++) {
                money.H = j;
                currency-=50;
            }
        }
        if (currency >=25) {
            for (let i = currency, j = 1; i >= 25; i-=25, j++) {
                money.Q = j;
                currency-=25;
            }
        }
        if (currency >=10) {
            for (let i = currency, j = 1; i >= 10; i-=10, j++) {
                money.D = j;
                currency-=10;
            }
        }
        if (currency >=5) {
            for (let i = currency, j = 1; i >= 5; i-=5, j++) {
                money.N = j;
                currency-=5;
            }
        }
        if(currency < 5 && currency > 0){
            money.P = currency;
        }

        return money;
    }
}
