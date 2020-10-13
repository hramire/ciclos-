class E {
    constructor() {
        this.factorial;
        this.suma;
    }
    factorial(numero) {
        this.factorial = 1;
        for (let i = numero; i > 1; i--) {
            this.factorial = this.factorial * i;
        }
        return this.factorial;
    }
    exponencial(cantidad, valor) {
        this.suma = 1;
        if (cantidad === 1) {
            return 1;
        } else {
            for (let i = 1; i < cantidad; i++) {
                let app = new E;
                this.suma += (Math.pow(valor, i)) / app.factorial(i);
            }
        }
        return this.suma;
    }
}


let app = new E;
console.log(app.factorial(10));
console.log(app.exponencial(50, 5));