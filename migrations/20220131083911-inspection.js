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
  return db.createTable('inspection', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    name:{
      type:'string',
      length:100
    },
    price:{
      type:'decimal(17,2)'
    },
    type:{
      type: 'boolean',
      defaultValue: false,
    },
    user_id:{
      type:'int'
    },
    category_id:{
      type:'int'
    },
    percent_bonus:{
      type:'decimal(5,2)'
    },
    parent_id:{
      type:'int'
    },
    branch_id:{
      type:'int'
    }
  });
};

exports.down = function (db) {
  return db.dropTable('inspection');
};

exports._meta = {
  "version": 1
};
