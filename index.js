
//1-function displat
function displayBookList() {
    var bookListElement = document.getElementById("myList");

    // Clear existing content
    bookListElement.innerHTML = "";

    // Loop through the books and create list items
    books.forEach(function(book) {
      var listItem = document.createElement("li");
      bookListElement.appendChild(listItem);
    });
  }
//2-Add book function
function AddBook() {
    var bookList = document.getElementById("myList");
// Create a new list item for the book
    var newBook = document.createElement("li");
    newBook.textContent = "New Book";
    // Add the new book to the list
    bookList.appendChild(newBook);
}
//3-remove book function
function Remove() {
    // Select the list of book elements
    var bookList = document.getElementById("myList");

    // Check if there are any child elements in the list
    if (bookList.children.length > 0) {
        // Remove the last child element from the list
        bookList.removeChild(bookList.lastChild);
    } else {
        alert("The list of books is empty.");
    }
}
//4-search function

var myArray = [
    { namebook: 'book title 1' },
    { namebook: 'book title 2' },
    { namebook: 'book title 3' },
    { namebook: 'book title 4' }
];

// Search for an object with a specific property value
function filter(array, predicate) {
    var result = [];
    array.forEach(function (element) {
        if (predicate(element)) {
            result.push(element);
        }
    });
    return result;
}

var result = filter(myArray, function (element) {
    return element.namebook === 'book title 2';///////////////////
});
if (result.length > 0) {
    console.log("Element found:", result);
} else {
    console.log("Element not found");
}

