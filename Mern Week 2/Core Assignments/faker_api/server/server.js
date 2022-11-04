const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Welcome to faker: ${port}`));

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber('916-###-###');
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

console.log(new User);

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name('faker industries');
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

console.log(new Company)

app.get("/api/users/new", (req, res) => {
    let user = new User();
    res.json({ results: user });
});

app.get("/api/companies/new", (req, res) => {
    let company = new Company();
    res.json({ results: company });
});

app.get("/api/user/company", (req, res) => {
    let user = new User();
    let company = new Company();
    res.json({
        user: user,
        company: company,
    });
});