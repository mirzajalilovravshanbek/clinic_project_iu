'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/* Promise-based version */
exports.up = function (db) {
  return db.createTable('inspection_child', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    name:{
      type:'string',
      length:50
    },
    norm:{
      type:'string',
      length:20
    },
    parent_id:{
      type: 'int',
    },
    price:{
      type:'decimal(17,2)'
    }
  });
};

exports.down = function (db) {
  return db.dropTable('inspection_child');
};

exports._meta = {
  "version": 1
};
