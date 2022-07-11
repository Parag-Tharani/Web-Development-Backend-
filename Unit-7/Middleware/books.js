
var booksData=[
    {
        id:1,
        title:"Rich Dad, Poor Dad",
        timestamp: new Date()
    },
    {
        id:2,
        title:"Atomic Habits",
        timestamp: new Date()
    },
    {
        id:3,
        title:"The Subtle Art of not giving a f**k",
        timestamp: new Date()
    },
    {
        id:4,
        title:"Ankur Warikoo",
        timestamp: new Date()
    },
]

function booksDataList(req,res){

    return res.status(200).send(booksData)
}



function bookName(req,res){
    const id = +req.params.id;

    
    booksData.map((items) => {
        if(items.id === id){
            res.status(200).send(items.title)
        }
    })
    res.status(404).send("Bad request")

}


module.exports = {
    booksDataList,
    bookName
}