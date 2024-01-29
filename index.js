//1-display Book list

function DisplayList (){
    if (bookListElement.style.display === 'none') {
        bookListElement.style.display = 'block';
      } else {
        bookListElement.style.display = 'none';
      }
    };
const bookListElement = document.getElementById('myList');
            const toggleListButton = document.getElementById('displaybook');
        
//2- Add Book to list
function AddBook (){
     $(document).ready(function () {
     $("#myList").append("<li><strong>" + BookName + "</strong></li>")
    })
    
                       ;  
                };
                 
//3-Remove book from list
function removeLast() {
     var listItems = $("#myList li");
    if (listItems.length > 0) {
    listItems.last().remove();
    }
    }

$(document).ready(function () {
    $("#mybookadded").submit(function (event) {
        event.preventDefault();
        var BookName = $("#BookName").val();
        if (BookName.trim() !== "") {
            $("#myList").append("<li><strong>" + BookName + "</strong></li>");
        }
    });
});
//4-search book in list
function SearchBook() {
    var filter = $("#search1").val().toUpperCase();
    var bookList = $("#mybooklist");
    var books = bookList.find("li");

    books.each(function () {
      var title = $(this).find("a").text().toUpperCase();
      $(this).toggle(title.includes(filter));;
    });
  }
  $(document).ready(function () {
    $("#searchButton").on("click", SearchBook);
 
  });
  


    
