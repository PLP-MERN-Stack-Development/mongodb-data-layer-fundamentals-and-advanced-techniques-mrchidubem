// insert_books.js
import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    await books.insertMany([
      {
        title: "The Silent River",
        author: "Maya K. Thompson",
        genre: "Mystery",
        published_year: 2015,
        price: 14.99,
        in_stock: true,
        pages: 320,
        publisher: "BlueLeaf Publishing"
      },
      {
        title: "Stars Beneath Us",
        author: "Derek Hunt",
        genre: "Sci-Fi",
        published_year: 2020,
        price: 19.5,
        in_stock: true,
        pages: 410,
        publisher: "Galactic Press"
      },
      {
        title: "Harvest of Dawn",
        author: "Leila Morris",
        genre: "Romance",
        published_year: 2012,
        price: 12.99,
        in_stock: false,
        pages: 298,
        publisher: "Sunrise Books"
      },
      {
        title: "Broken Compass",
        author: "Sam Porter",
        genre: "Adventure",
        published_year: 2008,
        price: 10.5,
        in_stock: true,
        pages: 275,
        publisher: "Horizon House"
      },
      {
        title: "The Last Oracle",
        author: "Maya K. Thompson",
        genre: "Fantasy",
        published_year: 2018,
        price: 17.99,
        in_stock: true,
        pages: 380,
        publisher: "BlueLeaf Publishing"
      },
      {
        title: "Echoes of Tomorrow",
        author: "Derek Hunt",
        genre: "Sci-Fi",
        published_year: 2011,
        price: 16.2,
        in_stock: false,
        pages: 360,
        publisher: "Galactic Press"
      },
      {
        title: "Whispering Pines",
        author: "Amelia Gray",
        genre: "Horror",
        published_year: 2021,
        price: 18.0,
        in_stock: true,
        pages: 340,
        publisher: "Nightshade Media"
      },
      {
        title: "Dreams of Ivory",
        author: "Leila Morris",
        genre: "Romance",
        published_year: 2009,
        price: 9.99,
        in_stock: true,
        pages: 260,
        publisher: "Sunrise Books"
      },
      {
        title: "Crimson Earth",
        author: "Jordan Ricks",
        genre: "Thriller",
        published_year: 2016,
        price: 13.5,
        in_stock: true,
        pages: 305,
        publisher: "BoldLine Publishers"
      },
      {
        title: "Paths Uncharted",
        author: "Sam Porter",
        genre: "Adventure",
        published_year: 2022,
        price: 21.0,
        in_stock: false,
        pages: 450,
        publisher: "Horizon House"
      }
    ]);

    console.log("Books inserted successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

run();
