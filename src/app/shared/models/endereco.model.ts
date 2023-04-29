export class Endereco {

    constructor(
        public id?: number,
        public rua?: string,
        public numero?: string,
        public complemento?: string,
        public cep?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string
    ) {
    }
}
