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
  return db.createTable('queue', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    room_id : {
      type: 'int'
    },
    patient_id:{
      type:'int'
    },
    number:{
      type:'int'
    },
    datetime:{
      type:'int'
    },
    branch_id:{
      type:'int'
    },
    status:{
      type:'string',
      length:20
    }
  });
};

exports.down = function (db) {
  return db.dropTable('queue');
};

exports._meta = {
  "version": 1
};
