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
  return db.createTable('registration_recipe', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    doc_id : {
      type: 'int',
    },
    registration_id : {
      type: 'int',
    },
    pill_id:{
      type:'int'
    },
    time : {
      type: 'int'
    },
    day : {
      type: 'int'
    },
    comment : {
      type: 'string'
    }
  });
};

exports.down = function (db) {
  return db.dropTable('registration_recipe');
};

exports._meta = {
  "version": 1
};
