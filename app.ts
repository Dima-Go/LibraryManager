enum Category { Biography, Poetry, Fiction, History, Children }

function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'A Prisoner of Bitrh', author: 'Jeffrey Archer', available: true, category: Category.Fiction },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: false, category: Category.Fiction },
        { id: 5, title: 'Steve Jobs', author: 'Walter Isaacson', available: true, category: Category.Biography }        
    ]

    return books;
}

function LogFirstAvailable(books: any[]): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books of category: ' + Category[categoryFilter]);
    const library = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of library) {
        if (currentBook.category == categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitle(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookByID(id: number) {
    return GetAllBooks().filter(book => book.id == id)[0];
}

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

 const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
 console.log('\nUsing LogBookTitle and fictionBooks:');
 LogBookTitle(fictionBooks);

 console.log('\nUsing LogBookTitle and lambda:'); 
 LogBookTitle(GetAllBooks().filter(book => book.category == Category.Fiction).map(book => book.title));
 
 console.log('\nUsing fictionBooks and foreach:'); 
 fictionBooks.forEach((val, idx, arr) => console.log(++idx + '-' + val));