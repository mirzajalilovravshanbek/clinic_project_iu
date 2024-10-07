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
  return db.createTable('user', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    username : {
      type: 'string',
      unique:true,
      length: 25
    },
    password : {
      type: 'string',
      length: 60
    },
    role : {
      type: 'string',
      length: 20
    },
    room_id : {
      type: 'int'
    },
    doctor_id : {
      type: 'int',
    },
    inspection_category_id : {
      type: 'int',
    },
    type : {
      type: 'string',
      length:20
    },
    salary:{
      type:'decimal(17,3)'
    },
    branch_id : {
      type: 'int',
    }
  });
};

exports.down = function (db) {
  return db.dropTable('user');
};

exports._meta = {
  "version": 1
};
