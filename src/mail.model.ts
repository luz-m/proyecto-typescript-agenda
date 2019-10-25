export class Mail{

    /*Atributos*/
    private tipo: number;
    private email: string;

    /*Constructor*/
    constructor(tipo:number, email:string){
        this.tipo = tipo;
        this.email = email;
    }

    /*Métodos*/
    getTipo(){
        return this.tipo;
    }

    setTipo(tipo:number){
        this.tipo = tipo;
    }

    getMail(){
        return this.email;
    }

    setMail(email:string){
        this.email = email;
    }

}