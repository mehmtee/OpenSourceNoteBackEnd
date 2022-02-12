const { Schema,model } = require("mongoose");

const Note = new Schema(
  {
    name: String,
    content: String,
    author: {type: Schema.Types.ObjectId,ref:'User'},
    hidden: Boolean,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    meta: {
      votes: Number,
      favs: Number,
    },
  },
  {
    timestamps: true,
  }
);

NoteModel = model('Note',Note);


module.exports = NoteModel;
