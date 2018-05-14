enum Category { Biography, Poetry, Fiction, History }

function GetAllBooks() {
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'A Prisoner of Bitrh', author: 'Jeffrey Archer', available: true, category: Category.Fiction },
        { title: 'Moby Dick', author: 'Herman Melville', available: false, category: Category.Fiction },
        { title: 'Steve Jobs', author: 'Walter Isaacson', available: true, category: Category.Biography }        
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
 const biographyBooks = GetBookTitlesByCategory(Category.Biography);
 LogBookTitle(biographyBooks);