# Rouding Out
## Getting Started
1. `npm install`
2. `createdb hogwarts`
3. `npm run seed` to seed your database
4. `npm start` to run your application on PORT 8080!

### What we are covering
#### Express
- 404 Not Found Page
- Custom Error Handling
#### Sequelize
- Eager Loading
- Class and instance methods
- many to many relationships

app.js - Table of Contents
routes/... - chapters


//many students to one house
- 1 to many relationship
House.hasMany(Student);
Student.belongsTo(House) <- establish foreign key on the Students table.

//one to one
House.hasOne(Student)
Student.belongsTo(House)

//many to many

<!-- @nested-tags:express,sequelize,sequelize/associations-->
