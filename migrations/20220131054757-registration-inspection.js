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
  return db.createTable('registration_inspection', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    inspection_id : {
      type: 'int',
    },
    registration_id : {
      type: 'int',
    },
    price : {
      type: 'int',
    },
    user_id : {
      type: 'int'
    },
    status:{
      type:'string',
      length:20
    },
    type:{
      type:'boolean',
      defaultValue: false,
    }
  });
};

exports.down = function (db) {
  return db.dropTable('registration_inspection');
};

exports._meta = {
  "version": 1
};
