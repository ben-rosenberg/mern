const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
    constructor(id, firstName, lastName, email, phoneNumber, password) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}

class Company {
    constructor(id, name, street, city, state, zipCode, country) {
        this._id = id;
        this.name = name;
        this.address = {
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            country: country
        };
    }
}


/** THE "DATABASE" */
const users = [];
const companies = [];


/**
 * A utility function for splitting a first and last name. Doesn't work when
 * faker generates a name with a prefix.
 * 
 * @param {String} name - The name to be split
 * @returns {String} An object with the split first name and last name
 */
const splitName = (name) => {
    let firstName = "";
    let lastName = "";

    let i = 0;

    while (name[i] !== " ") {
        firstName += name[i];
        i++;
    }

    while (i < name.length) {
        lastName += name[i];
        i++;
    }

    return { firstName: firstName, lastName: lastName }
}


/** HELPER FUNCTIONS FOR CREATING USERS AND COMPANIES */

const createUser = () => {
    const id = users.length;
    const name = splitName(faker.name.findName());
    const { firstName, lastName } = name;
    const email = faker.internet.email();
    const phoneNumber = faker.phone.phoneNumber();
    const password = faker.internet.password();
    const newUser = new User(id, firstName, lastName, email, phoneNumber, password);
    users.push(newUser);

    return id;
}

const createCompany = () => {
    const id = companies.length;
    const name = faker.company.companyName();
    const street = faker.address.streetName();
    const city = faker.address.city();
    const state = faker.address.state();
    const zipCode = faker.address.zipCode();
    const country = faker.address.country();

    const newCompany = new Company(id, name, street, city, state, zipCode, country);
    companies.push(newCompany);

    return id;
}


app.get("/api/users/new", (req, res) => {
    const newUserId = createUser();

    res.json(users[newUserId]);
});

app.get("/api/companies/new", (req, res) => {
    const newCompanyId = createCompany();

    res.json(companies[newCompanyId]);
});

app.get("/api/user/company", (req, res) => {
    const newUserId = createUser();
    const newCompanyId = createCompany();

    res.json({ user: users[newUserId], company: companies[newCompanyId] });
});


/** Not part of the assignment, but I'm guessing this is where this is going */

app.get("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = users[userId];

    console.log(userId);

    if (isNaN(userId)) {
        res.json({ error: 404, message: "User ID must be numeric" });
    } else if (user === undefined) {
        res.json({ error: 404, message: `User with ID of ${userId} not found` })
    } else {
        res.json(user);
    }
});

app.get("/api/companies/:id", (req, res) => {
    const companyId = req.params.id;
    const company = companies[companyId];

    console.log(companyId);

    if (isNaN(companyId)) {
        res.json({ error: 404, message: "Company ID must be numeric" });
    } else if (company === undefined) {
        res.json({ error: 404, message: `Company with ID of ${companyId} not found` })
    } else {
        res.json(company);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));