abstract class Veiculo {
    constructor(
        public modelo: string,
        public marca: string,
        public cor: string,
        public numeroRodas: number
    ) {}

    abstract clone(): Veiculo;

    abstract represent(): string;
}

class Carro extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        public numeroRodas: number,
        public numeroPortas: number
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): Carro {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    represent(): string {
        return `Carro - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        public numeroRodas: number,
        public cilindradas: number
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): Moto {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }

    represent(): string {
        return `Moto - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Cilindradas: ${this.cilindradas}`;
    }
}


class Aplicacao {
    static criarVeiculos(): Veiculo[] {
        const veiculos: Veiculo[] = [
            new Carro("Sedan", "Toyota", "Preto", 4, 4),
            new Moto("FAN150", "Honda", "Vermelho", 2, 150),
            new Carro("HB20", "Hyundai", "Branco", 4, 5),
            new Moto("Fazer", "Yamaha ", "Preto", 2, 250),
            new Carro("Creta", "Hyundai", "Azul", 4, 5),
            new Moto("Twisted", "Honda", "Prata", 2, 300),
        ];

        return veiculos;
    }

    static clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
        return veiculos.map((veiculo) => veiculo.clone());
    }
}

const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);

clones.forEach((clone) => {
    console.log(clone.represent());
});
