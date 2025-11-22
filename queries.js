// queries.js

// 1️⃣ BASIC CRUD QUERIES
//--------------------------------------------------

// Find all books in a specific genre
db.books.find({ genre: "Sci-Fi" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2015 } });

// Find books by a specific author
db.books.find({ author: "Maya K. Thompson" });

// Update the price of a specific book
db.books.updateOne(
  { title: "The Silent River" },
  { $set: { price: 16.99 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "Dreams of Ivory" });


// 2️⃣ ADVANCED QUERIES
//--------------------------------------------------

// Find books in stock AND published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// Projection: return only title, author, price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// Sorting by price ascending
db.books.find().sort({ price: 1 });

// Sorting by price descending
db.books.find().sort({ price: -1 });

// Pagination – 5 books per page
// Page 1
db.books.find().skip(0).limit(5);

// Page 2
db.books.find().skip(5).limit(5);


// 3️⃣ AGGREGATION PIPELINES
//--------------------------------------------------

// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [{ $toString: { $multiply: ["$_id", 10] } }, "s"] },
      count: 1,
      _id: 0
    }
  }
]);


// 4️⃣ INDEXING
//--------------------------------------------------

// Create index on title
db.books.createIndex({ title: 1 });

// Create compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Use explain() to show performance
db.books.find({ title: "The Silent River" }).explain("executionStats");

db.books.find({ author: "Sam Porter", published_year: { $gt: 2010 } })
  .explain("executionStats");
