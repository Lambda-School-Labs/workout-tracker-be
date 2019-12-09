const db = require('../database/db-config')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('member_status')
}

function findById(id) {
    return db('member_status').where({ id }).first();
}

function add(status) {
    return db('member_status').insert(status)
    .then(ids => {
        return "Status added successfully"
    });
}

function update(id, changes) {
    return db('member_status').where({ id }).update(changes);
}

function remove(id) {
    return db('member_status').where({ id }).del()
}