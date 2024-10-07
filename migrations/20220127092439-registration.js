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
  return db.createTable('registration', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    user_id : {
      type: 'int',
    },
    created_at : {
      type: 'int',
    },
    updated_at : {
      type: 'int',
    },
    status : {
      type: 'string',
      length: 20
    },
    patient_id:{
      type:'int',
    },
    type_service:{
      type:'string',
      length:20
    },
    complaint:{
      type:'string'
    },
    height:{
      type:'decimal(17,2)'
    },
    weight:{
      type:'decimal(17,2)'
    },
    branch_id:{
      type:'int'
    }
  });
};

exports.down = function (db) {
  return db.dropTable('registration');
};

exports._meta = {
  "version": 1
};
