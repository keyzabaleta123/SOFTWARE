class UberX {
    constructor() {
        this.license = "DFG236589";
        this.driver = new Account();
        this.driver.name = "Marcos Caceres";
        this.driver.document = "DFG236589";
        this.driver.email = "marcosc@platzi.pe";
        this.driver.password = "569324";
        this.brand = "Toyota";
        this.model = "Corolla";
    }

    printDataUberX() {
        console.log(`UberX`);
        console.log(`License: ${this.license}`);
        console.log(`Driver: ${this.driver.name}`);
        console.log(`Document: ${this.driver.document}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
    }
}
