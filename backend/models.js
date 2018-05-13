var mongoose = require('mongoose');

const Image = mongoose.model('Image', {
  date: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  }
});

const Todo = mongoose.model('Todo', {
  title: {
    type: String,
    default: "", 
  },  
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = { Todo: Todo , Image: Image}
