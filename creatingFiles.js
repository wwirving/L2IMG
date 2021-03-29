var fs = require ('fs');


// method one 

fs.appendFile('mynewfile1.txt', 'Hello content!', function(err){
    if (err) throw err;
    console.log('Saved!');
});


// method two
// open takes a flag as a second argument, if flag is w ('writing') then the specified file is opened for writing, if not it is created
fs.open('mynewfile2.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('Saved!');
});


// method three
// writeFile replaces the specified file and content if it exists, and if not creates a new file

fs.writeFile('mynewfile3.txt','Hello content!', function (err){
    if (err) throw err;
    console.log('Saved!');
});

// Appending text to existing files

fs.appendFile('mynewfile1.txt', 'This is my text.', function(err){
    if (err) throw err;
    console.log('Updated');
});

// Deleting files

fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

// Renaming files

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err){
    if (err) throw err;
    console.log('File Renamed!');
});


