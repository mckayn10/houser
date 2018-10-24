function getHouses(req, res){
    const db = req.app.get('db')

    return db.get_houses()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => {
            res.status(500).send('error getting houses', err)
        })
}

function addHouse(req, res){
    const db = req.app.get('db')
    const {name, address, city, state, zipcode} = req.body;

    return db.add_house(name, address, city, state, zipcode)
    .then(response => {
        res.status(200).send('New House successfully added to db')
    })
    .catch(err => {
        console.log('error creating new house', err)
    })
}

function deleteHouse(req, res){
    const db = req.app.get('db')
    
    return db.delete_house([req.params.id])
    .then(response => {
        res.status(200).send('House has been deleted')
    })
}

module.exports = {
    getHouses,
    addHouse,
    deleteHouse
}