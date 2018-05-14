enum Category { Biography, Poetry, Fiction, History, Children }

function GetAllBooks()
{
    let books =
    [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'A Prisoner of Birth', author: 'Jeffrey Archer', available: true, category: Category.Fiction },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: false, category: Category.Fiction },
        { id: 5, title: 'Steve Jobs', author: 'Walter Isaacson', available: true, category: Category.Biography },
        { id: 6, title: 'Kane and Abel', author: 'Jeffrey Archer', available: true, category: Category.Fiction },
    ]

    return books;
}

function LogFirstAvailable(books: any[] = GetAllBooks()): void
{
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books)
    {
        if (currentBook.available)
        {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string>
{
    console.log('Getting books of category: ' + Category[categoryFilter]);
    const library = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of library)
    {
        if (currentBook.category == categoryFilter)
        {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitle(titles: string[]): void
{
    for (let title of titles)
    {
        console.log(title);
    }
}

function GetBookByID(id: number) {
    return GetAllBooks().filter(book => book.id == id)[0];
}

function CreateCustomerID(name: string, id: number)
{
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void
{
    console.log('Creating customer ' + name);
    if (age && age >= 0)
    {
        console.log('\tAge: ' + age);
    }
    if (city)
    {
        console.log('\tCity: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[]
{
    console.log('Checking out for ' + customer);
    let booksToCheckout : string[] = [];
    for (let id of bookIDs)
    {
        let book = GetBookByID(id);
        if (book.available)
        {
            booksToCheckout.push(book.title);
        }
    }

    return booksToCheckout;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[]
{
    let foundTitles: string[] = [];
    const library = GetAllBooks();
    if (typeof bookProperty == 'string')
    {
        console.log('Looking by author: ' + bookProperty);
        for (let book of library)
        {
            if (book.author == bookProperty)
            {
                foundTitles.push(book.title)
            }
        }
    }
    else if (typeof bookProperty == 'boolean')
    {
        console.log('Looking by availability: ' + bookProperty);        
        for (let book of library)
        {
            if (book.available == bookProperty)
            {
                foundTitles.push(book.title)
            }
        }
    }

    return foundTitles;
}

function LogTitle(prefix: string = '\t'): (value: string, index: number, array: string[]) => void
{
    return title => console.log(prefix + title);
}

function BreakLine()
{
    console.log("-----------------------");
}
/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

//Default, Optional, Rest parameters
CreateCustomer('Dima', 28, "PT");
CreateCustomer('Gregg');
CreateCustomer('Arik', 0);

BreakLine();
let fictionBooks = GetBookTitlesByCategory();
fictionBooks.forEach(LogTitle());
let biographyBooks = GetBookTitlesByCategory(Category.Biography);
biographyBooks.forEach(LogTitle());

BreakLine();
LogFirstAvailable();

BreakLine();
CheckoutBooks('Dima', 1, 4).forEach(LogTitle());
CheckoutBooks('Alan', 1, 4, 5).forEach(LogTitle());
CheckoutBooks('Dave', 2).forEach(LogTitle());

BreakLine();
GetTitles(false).forEach(LogTitle());
GetTitles('Jeffrey Archer').forEach(LogTitle());

// Lambdas and Function types
// let x: number;
// let IdGenerator: (chars: string, nums: number) => string;
// let InlineIdGenerator: (chars: string, nums: number) => string;

// x = 5;
// IdGenerator = CreateCustomerID;
// InlineIdGenerator = (name: string, id: number) => { return name + id;}
// let myID: string  = CreateCustomerID('Dima', 17);
// let myID2: string  = IdGenerator('Andrei', 47);
// let myID3: string  = InlineIdGenerator('Tim', 21);

// console.log(myID);
// console.log(myID2);
// console.log(myID3);

// Types and Enums
//  const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//  console.log('\nUsing LogBookTitle and fictionBooks:');
//  LogBookTitle(fictionBooks);

//  console.log('\nUsing LogBookTitle and lambda:'); 
//  LogBookTitle(GetAllBooks().filter(book => book.category == Category.Fiction).map(book => book.title));
 
//  console.log('\nUsing fictionBooks and foreach:'); 
//  fictionBooks.forEach((val, idx, arr) => console.log(++idx + '-' + val));