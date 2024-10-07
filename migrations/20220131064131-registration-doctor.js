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
  return db.createTable('registration_doctor', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    doctor_id : {
      type: 'int',
    },
    registration_id:{
      type:'int'
    },
    price:{
      type:'decimal(17,2)'
    },
    complaint:{
      type:'string'
    },
    medical_history:{
      type:'string'
    },
    objective_vision:{
      type:'string'
    },
    instrumental:{
      type:'string'
    },
    diagnos:{
      type:'int'
    },
    procedure:{
      type:'string'
    },
    recommended:{
      type:'string'
    }
  });
};

exports.down = function (db) {
  return db.dropTable('registration_doctor');
};

exports._meta = {
  "version": 1
};
