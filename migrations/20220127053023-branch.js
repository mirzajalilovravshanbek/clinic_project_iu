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
  return db.createTable('branch', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    district_id : {
      type: 'int',
    },
    name : {
      type: 'string',
      length: 60
    }
  });
};

exports.down = function (db) {
  return db.dropTable('branch');
};

exports._meta = {
  "version": 1
};
