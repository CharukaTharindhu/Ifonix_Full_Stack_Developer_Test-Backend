const express = require('express');
const app = express();
const service = require('../Services/CommentService')

app.get('/:id',service.getAllCommentAccPost);

app.post('/',service.createComment)

module.exports = app;