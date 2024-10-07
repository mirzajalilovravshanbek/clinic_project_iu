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
  return db.createTable('register_doctor_diagnos', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    diagnos_id : {
      type: 'int'
    },
    parent_id : {
      type: 'int'
    },
    registration_id : {
      type: 'int'
    },
  });
};

exports.down = function (db) {
  return db.dropTable('register_doctor_diagnos');
};

exports._meta = {
  "version": 1
};
