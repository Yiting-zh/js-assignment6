let running = true;


const library = [
  {
    title: "The power of now",
    author: "Eckhart Tolle",
    isRead: true
  },
  {
    title: "How to stop worrying and start living",
    author: "Dale Carnegie",
    isRead: false
  }
];  


function addBook() {
  let title = prompt("Enter the book's name");
  let author = prompt("Enter the author name");
  let isReadInput; 

  let isRead = false;

  while (true) {
    isReadInput = prompt("Have you read the book (yes/no)");

    if (isReadInput.toLowerCase() === "yes") {
      isRead = true;
      break;
    } else if (isReadInput.toLowerCase() === "no") {
      isRead = false;
      break;
    } else {
      alert("Invalid input, please write between (yes/no)");
    }
  }

  const newBook = {
    title: title,
    author: author,
    isRead: isRead
  };


  library.push(newBook);
  alert("Book added successfully!");

}





  function listBooks() {
    library.forEach(function(book) {
      console.log("Title: " + book.title);
      console.log("Author: " + book.author);
      console.log("Read: " + (book.isRead ? "Yes" : "No"));
      console.log("---------------");
    });
  }





function markAsRead(title) {
  const book = library.find(function(book) {
    return book.title.toLowerCase() === title.toLowerCase();
  });

  if (book) {
    if (book.isRead) {
      alert("This book is already marked as read.");
    } else {
      book.isRead = true;
      alert(`Marked "${book.title}" as read.`);
    }
  } else {
    alert("Book not found.");
  }
}