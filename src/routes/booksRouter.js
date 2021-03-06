const express = require("express");
const booksRouter = express.Router();
function router(navbar){
var books = [
    {
        title : "Tom And Jerry",
        author : "Joseph Barbera",
        about: "an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.",
        genre: "Cartoon",
        details : "Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry.",
        img: "/img/tomandjerry.jpg" 
    },
    {
        title : "Harry Potter",
        author : "J K Rowling",
        about: "a series of seven fantasy novels written by British author J. K. Rowling.",
        details : "Orphaned Harry Potter has been living a dog’s life with his horrible relatives. He sleeps in the broom cupboard under the stairs and is treated as a slave by his aunt and uncle. On his eleventh birthday, mysterious missives begin arriving for him, culminating eventually in the arrival of a giant named Hagrid, who has come to escort him to the Hogwarts School of Witchcraft and Wizardry. Harry learns that his parents died saving him from an evil sorcerer and that he himself is destined to be a wizard of great power.",
        genre: "Fantasy",
        img: "/img/harry.jpg"
    },
    {
        title : "pathumayude aadu",
        author : "Basher",
        about: "Pathummayude Aadu (Pathumma's Goat; 1959) is a humorous novel by Vaikom Muhammad Basheer.",
        genre: "Drama",
        details : "Pathummayude Aadu is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma. Basheer begins the novel with an alternative title for the book, Pennungalude Buddhi.",
        img: "/img/pa.jpg"
    },


    {
        title : "War and Peace",
        author : "Leo Tolstoy",
        about: "Presents the classical epic of the Napoleonic Wars and their effects on four Russian families",
        genre: " Novel (‎Historical novel‎)‎",
        details : "War and Peace is a novel by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains a classic of world literature.",
        img: "/img/warandpeace.jpg"
    },
    {
        title : "Complete Works of Shakespeare",
        author : "William Shakespeare",
        about: "Complete Works of William Shakespeare is the standard name given to any volume containing all the plays and poems of William Shakespeare.",
        genre: "Drama",
        details : "Complete Works of William Shakespeare is the standard name given to any volume containing all the plays and poems of William Shakespeare.",
        img: "/img/completeworks.jpg"
    },
    {
        title : "The Old Man and the Sea",
        author : "Ernest Hemingway",
        about: "The Old Man and the Sea is a short novel written by the American author Ernest Hemingway in 1951 in Cayo Blanco, and published in 1952.",
        genre: "Novel",
        details : "The Old Man and the Sea tells the story of a battle between an aging, experienced fisherman, Santiago, and a large marlin. ... He is so unlucky that his young apprentice, Manolin, has been forbidden by his parents to sail with him and has been told instead to fish with successful fishermen.",
        img: "/img/oldmanandthesea.jpg"
    }
];
booksRouter.get('/', (req,res)=>{
    res.render('books', {title: 'Library App', navbar, heading : 'Library' , books } )
});
booksRouter.get('/:id', (req,res)=>{
    const id = req.params.id
    res.render('book', {title: 'Library App', navbar , heading : 'Library', book : books[id] })
});
return booksRouter;
}
module.exports = router;