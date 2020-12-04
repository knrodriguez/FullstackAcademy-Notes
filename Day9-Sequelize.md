# Sequelize
## Object Relational Mapper
- Acts as a bridge between code and the RDBMS
- Using ORM, data can be stored easily and retrieved from a database without wirting SQL statements directly
- Used to convert data between incompatible type systems using OOP languages. Thsi creates a "virtual object database" that can be used from within the programming language.

## Sequelize
- Access SQL databases from Node.js
- JS objects and methods instead of SQL statements
- Represents tables as classes and rows as objects.

|PostgreSQL||Sequelize|
|:---|:---|:---|
|Tables|-->|Models|
|Rows|-->|Instances|

```js
//Instantiate Sequelize
  const Sequelize = require('sequelize');
  const db = new Sequelize('postgres://localhost/wiki');

//Define your Model(s)
  //Add options to Model fields (validations, defaults, etc.)
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
  pictureUrl: Sequelize.STRING
}); //User = model, 'user' = table, table name will add an 's' to become 'users'

//Connect/sync the Model to an actual table in the database
await User.sync();

// Use the Model(table) to create Instances (row)
const person = new User({
  name: 'Kate',
  pictureUrl: 'http://fillmurray.com/10/10'
});

// Use the Instances to save update/delete
await person.save();

//Use the Model (table) to find Instances (rows)
const users = await User.findAll(); //SELECT * FROM user
```

- Sequelize models can be extended Hooks, Class & Instance Methods, Getter & Setters, Virtuals, etc.

### Hooks
- When you perform operations in Sequelize (creating, updating, reading, deleting), various events occur called 'lifecycle events'.
- Hooks are like adding an event listener to these events:
  - *"Every time a journal entry is created or updated, escape any dangerous sequences that could results in an XSS atack."*
  - *"Every time a user is updated with a new passowrd, hash it so that the plaintext password doesn't get saved in the database."*

```js
const pug = await User.create({
  name: 'Cody',
  pictureUrl: 'http://fillmurray.com/10/10'
})
```
### Lifecycle Events
- beforeValidate (HOOK) = User.beforeValidate((user) => {...})
- validate ~~(HOOK)~~
- afterValidate (HOOK) = User.afterValidate((user) => {...})
- beforeCreate (HOOK) = User.beforeCreate((user) => {...})
- creation ~~(HOOK)~~
- afterCreate (HOOK) = User.afterCreate((user) => {...})

## Associations
- Establishes a relationship betweeen 2 tables (using foreign-key or join table)
- Creates secveral special instance methods (like getAssociation) that an instance can user to search for the instances that they are related to.

```js
const User = db.define("user", {...});
const Pet = db.define("pet", {...});

//Need to define both relationships so you can access getters and setters on User relating to Pet
Pet.belongsTo(User); // Pet belongs to a (type) User
User.hasMany(Pet); // User has many of a (type) Pet

const someUser = await User.findByPk(12);
const andHisPet = await someUser.getPets();
```
###
- Sequelize lives in Node.js
- Knows how to communicate to a dew SQL DBMs

enter value into url
- dom tree
- JS will be executed then
- loading database and serve on computer
- server will be in one computer, database will be in difference computer -> they will talk to each other and the browser will talk to node server

browser - express -sequelize - pg - postgres- pg - sequelize - express - browser

## Summary

We covered a lot in this lab! Here are a few important takeaways:
Connecting

    We first need to create a connection object and point it to a database. We do this by passing a URL to new Sequelize
    Then, we need to sync to the database with db.sync()
    If we want Sequelize to override the tables already in the database, we can use db.sync({force: true})

Creating Models

    We can create a new model with db.define('table_name', { /*fields go here*/ })
    Each field must have a type. You can define a field's type like this: age: { type: Sequelize.INTEGER }
    db.define returns a reference to the model. Sequelize models have class methods, such as create.

Creating Instances

    We can create a new instance with Model.create. It's asynchronous, so we may need to use await in front of it.
    Instances have instance methods, such as update

Other Useful Class Methods

    Model.bulkCreate -- Creates many rows (pass it an array of objects)
    Model.findAll -- Retrieves all rows in a table. You can filter the results by passing a where clause
    Model.findByPk -- Retrieves a single row with the given primary key.
        Model.findById -- Older versions of Sequelize use findById instead of findByPk. It accomplishes the same thing.
    Model.update -- Updates all rows matching a given where clause
    Model.destroy -- Deletes all rows matching a given where clause

<!-- @nested-tags:sequelize-->
