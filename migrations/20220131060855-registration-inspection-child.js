'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/* Promise-based version */
exports.up = function (db) {
  return db.createTable('registration_inspection_child', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    parent_id : {
      type: 'int',
    },
    registration_id:{
      type:'int'
    },
    text:{
      type:'string'
    },
    norm : {
      type: 'string',
      length:60
    },
    name : {
      type: 'string',
      length:60
    },
    status : {
      type: 'string',
      length:20
    },
    price:{
      type:'decimal(17,2)'
    },
    checked:{
      type: 'boolean',
      defaultValue: false,
    },
    file:{
      type:'string',
      length: 100
    }
  });
};

exports.down = function (db) {
  return db.dropTable('registration_inspection_child');
};

exports._meta = {
  "version": 1
};
