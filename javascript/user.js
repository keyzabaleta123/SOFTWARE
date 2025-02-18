
class User extends Account {
    constructor() {
        super();
        this.name = "Damian Rios";
        this.document = "KLOIS12536";
        this.email = "damian@platzi.pe";
        this.password = "523698563";

    }

    printDataUser() {
        console.log("****User****");
        console.log(`Nombre: ${this.name}`);
        console.log(`Document: ${this.document}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Password: ${this.password}`);
    }
}


