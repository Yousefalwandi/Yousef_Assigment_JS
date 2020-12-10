"use strict"

var books = [];

function book(name, genre, pages, isbnNum){
    this.name = name;
    this.genre = genre;
    this.pages = pages;
    this.isbnNum = isbnNum;
    this.getBookInfo = function(){
        console.log("book: " + this.name + "\nGenre: " + this.genre + "\nPages: " + this.pages + "\nISBN: " + this.isbnNum + "\n------------------");
    };
}

books.push(new book("Permanent Recordr", "Data & IT", 352, "9781529035650"));
books.push(new book("Jag är Zlatan Ibrahimovic : min historia", "Sport", 415, "9789175032849"));
books.push(new book("World Records", "Records", 200, "15788"));

function btnAddBooks(){
    let bookAdd = prompt("How many books?", "Enter a numeric number");
    
    for(let i = 0; i < bookAdd; i++){
        books.push(new book(prompt("Enter book name"), prompt("Enter genre"), prompt("Enter pages"), prompt("Enter ISBN number")));
    }
};

function btnBookInfo(){
    books.forEach(function(e){
        e.getBookInfo();
    });
};