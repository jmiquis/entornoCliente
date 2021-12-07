function fibo(params) {
    num1=0;
    num2=1;
    for (let i = 0; i < params-1; i++) {
        aux=num1+num2;
        num1=num2;
        num2=aux;
    }
    return aux;
}
console.log(fibo(10));
