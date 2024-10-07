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

exports.up = function(db) {
  return db.runSql(`INSERT INTO region (id, name) VALUES
  (1, 'Қорақалпоғистон Республикаси'),
  (2, 'Андижон вилояти'),
  (3, 'Бухоро вилояти'),
  (4, 'Жиззах вилояти'),
  (5, 'Қашқадарё вилояти'),
  (6, 'Навоий вилояти'),
  (7, 'Наманган вилояти'),
  (8, 'Самарқанд вилояти'),
  (9, 'Сурхандарё вилояти'),
  (10, 'Сирдарё вилояти'),
  (11, 'Тошкент вилояти'),
  (12, 'Фарғона вилояти'),
  (13, 'Хоразм вилояти'),
  (14, 'Тошкент шаҳри');`);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
