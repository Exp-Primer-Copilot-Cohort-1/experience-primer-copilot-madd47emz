//create a web server
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');
const { Comment } = require('../models/comment');
const { User } = require('../models/user');
const { Post } = require('../models/post');
const auth = require('../middleware/auth');