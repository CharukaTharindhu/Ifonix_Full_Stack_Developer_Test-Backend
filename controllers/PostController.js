const express = require('express');
const app = express();
const service = require('../Services/PostServices')

app.get('/',service.getAllPost);

app.get('/public',service.getAllApprovedPosts)

app.post('/',service.createPost);

app.put('/:id',service.approvedRejectPost);

app.delete('/:id',service.deletePost);

module.exports = app;