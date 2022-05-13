# Using MongoDB

Practice querying a database in MongoDB

## Inserting Documents

### Syntax for One Insertion

```bash
db.students.insertOne({name: "Ben", home_state: "Colorado", lucky_number: 4, birthday: {month: 1, day: 29, year: 1997}})
```

### After Five Inserts

```json
[
  {
    "_id": ObjectId("627ea702b6d8bda30db156f6"),
    "name": "Ben",
    "home_state": "Colorado",
    "lucky_number": 4,
    "birthday": { month: 1, day: 29, year: 1997 }
  },
  {
    "_id": ObjectId("627ea9286163b260316d2437"),
    "name": "Austin",
    "home_state": "Washington",
    "lucky_number": 17,
    "birthday": { month: 4, day: 16, year: 1994 }
  },
  {
    "_id": ObjectId("627eac6bd67c67a4665c6f13"),
    "name": "Caliguy",
    "home_state": "California",
    "lucky_number": 69,
    "birthday": { month: 6, day: 9, year: 1969 }
  },
  {
    "_id": ObjectId("627eaf866df3c3a6f38aed4e"),
    "name": "Danniel",
    "home_state": "Washington",
    "lucky_number": 10,
    "birthday": { month: 5, day: 10, year: 1992 }
  },
  {
    "_id": ObjectId("627eb0106df3c3a6f38aed4f"),
    "name": "Another",
    "home_state": "Idaho",
    "lucky_number": 40,
    "birthday": { month: 10, day: 10, year: 1995 }
  }
]
```

## Read All Students Whose Home State is Washington or California

### Command

```bash
my_first_db> db.students.find({home_state: {$in: {"California", "Washington"}}}).pretty()
```

### Results

```json
[
  {
    "_id": ObjectId("627ea9286163b260316d2437"),
    "name": "Austin",
    "home_state": "Washington",
    "lucky_number": 17,
    "birthday": { month: 4, day: 16, year: 1994 }
  },
  {
    "_id": ObjectId("627eac6bd67c67a4665c6f13"),
    "name": "Caliguy",
    "home_state": "California",
    "lucky_number": 69,
    "birthday": { month: 6, day: 9, year: 1969 }
  },
  {
    "_id": ObjectId("627eaf866df3c3a6f38aed4e"),
    "name": "Danniel",
    "home_state": "Washington",
    "lucky_number": 10,
    "birthday": { month: 5, day: 10, year: 1992 }
  }
]
```

## Get All Students Whose Lucky Number is Greater than 3

### Command with `$gt`

```bash
my_first_db> db.students.find({lucky_number: {$gt: 3}}).pretty()
```

Returned all collections

## Get all students whose lucky number is less than or equal to 10

```bash
my_first_db> db.students.find({lucky_number: {$lte: 10}}).pretty()
```

```json
[
  {
    "_id": ObjectId("627ea702b6d8bda30db156f6"),
    "name": 'Ben',
    "home_state": 'Colorado',
    "lucky_number": 4,
    "birthday": { month: 1, day: 29, year: 1997 }
  },
  {
    "_id": ObjectId("627eaf866df3c3a6f38aed4e"),
    "name": "Danniel",
    "home_state": "Washington",
    "lucky_number": 10,
    "birthday": { month: 5, day: 10, year: 1992 }
  }
]
```

## Get all students whose lucky number is between 1 and 9 (inclusive)

```bash
my_first_db> db.students.find({lucky_number: {$gte: 1, $lte: 9}}).pretty()
```

```json
[
  {
    "_id": ObjectId("627ea702b6d8bda30db156f6"),
    "name": 'Ben',
    "home_state": 'Colorado',
    "lucky_number": 4,
    "birthday": { month: 1, day: 29, year: 1997 }
  }
]
```

## Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation

```bash
my_first_db> db.students.updateMany({}, {$set: {interests: ["coding", "brunch", "MongoDB"]}})
```

## Add some unique interests for each particular student into each of their interest arrays

```bash
my_first_db> db.students.updateOne({name: "Ben"}, {$push: {interests: "music"}})
my_first_db> db.students.updateOne({name: "Austin"}, {$push: {interests: "hiking"}})
my_first_db> db.students.updateOne({name: "Danniel"}, {$push: {interests: "beards"}})
my_first_db> db.students.updateOne({name: "Another"}, {$push: {interests: "potatoes"}})
my_first_db> db.students.updateOne({name: "Caliguy"}, {$push: {interests: "avacados"}})
```

## Add the interest 'taxes' into someone's interest array

```bash
my_first_db> db.students.updateOne({name: "Ben"}, {$push: {interests: "taxes"}})
```

## Remove the 'taxes' interest you just added

```bash
my_first_db> db.students.updateOne({name: "Ben"}, {$pop: {interests: 1}})
```

## Remove all students who are from California

```bash
my_first_db> db.students.deleteMany({home_state: "California"})
```

## Remove a student by name

```bash
my_first_db> db.students.deleteOne({name: "Another"})
```

## Remove a student whose lucky number is greater than 5 (JUST ONE)

```bash
my_first_db> db.students.deleteOne({lucky_number: {$gt: 5}})
```

## Add a field to each student collection called 'number_of_belts' and set it to 0

```bash
my_first_db> db.students.updateMany({}, {$set: {number_of_belts: 0}})
```

## Increment this field by 1 for all students in Washington

```bash
my_first_db> db.students.updateMany({home_state: "Washington"}, {$inc: {number_of_belts: 1}})
```

## Rename the 'number_of_belts' field to 'belts_earned'

```bash
my_first_db> db.students.updateMany({}, {$rename: {number_of_belts: "belts_earned"}})
```

## Remove the lucky_number field

```bash
my_first_db> db.students.updateMany({}, {$unset: {lucky_number: ""}})
```

## Add an 'updated_on' field, and set the value as the current date

```bash
my_first_db> db.students.updateMany({}, {$currentDate: {updated_on: true}})
```
