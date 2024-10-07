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
  return db.runSql(`INSERT INTO neighboarhood (id, district_id, name) VALUES
(8265, 178, 'Azimobod SHFY'),
(8266, 178, 'Beglar MFY'),
(8267, 178, 'Beruniy MFY'),
(8268, 178, 'Beshkovok MFY'),
(8269, 178, 'Birlashgan MFY'),
(8270, 178, 'Bozorboshi MFY'),
(8271, 178, 'Bugdoychi MFY'),
(8272, 178, 'Bunyodkor MFY'),
(8273, 178, 'Burbonlik SHFY'),
(8274, 178, 'Buston MFY'),
(8275, 178, 'Butabekov MFY'),
(8276, 178, 'Chinor SHFY'),
(8277, 178, 'Chinortagi MFY'),
(8278, 178, 'Dostlik MFY'),
(8279, 178, 'Eskiarab SHFY'),
(8280, 178, 'Farovon MFY'),
(8281, 178, 'Fayziobod QFY'),
(8282, 178, 'Gayrat-1 MFY'),
(8283, 178, 'Gulobod MFY'),
(8284, 178, 'Ibn Sino MFY'),
(8285, 178, 'Jararik MFY'),
(8286, 178, 'Jarkurgon MFY'),
(8287, 178, 'Jonibek MFY'),
(8288, 178, 'Jurak SHFY'),
(8289, 178, 'Kapchugay QFY'),
(8290, 178, 'Katput SHFY'),
(8291, 178, 'Kaxramon MFY'),
(8292, 178, 'Kiziltepa QFY'),
(8293, 178, 'Kokir MFY'),
(8294, 178, 'Kulbuyi MFY'),
(8295, 178, 'Kumirchi MFY'),
(8296, 178, 'Kurgoncha MFY'),
(8297, 178, 'Kuvirboshi MFY'),
(8298, 178, 'Maorif MFY'),
(8299, 178, 'Mirfozil MFY'),
(8300, 178, 'Mukimiy MFY'),
(8301, 178, 'Mustakillik MFY'),
(8302, 178, 'Navkuron MFY'),
(8303, 178, 'Navoiy MFY'),
(8304, 178, 'Obod MFY'),
(8305, 178, 'Okbuyra SHFY'),
(8306, 178, 'Olmazor MFY'),
(8307, 178, 'Oltiarik SHFY'),
(8308, 178, 'Pavulgon SHFY'),
(8309, 178, 'Poloson SHFY'),
(8310, 178, 'Sertut MFY'),
(8311, 178, 'Shalola MFY'),
(8312, 178, 'Shark MFY'),
(8313, 178, 'Sodiyona MFY'),
(8314, 178, 'Shodlik MFY'),
(8315, 178, 'Tegirmonboshi MFY'),
(8316, 178, 'Tinchlik MFY'),
(8317, 178, 'Tinchlik SHFY'),
(8318, 178, 'Tolkucha MFY'),
(8319, 178, 'Toshkent MFY'),
(8320, 178, 'Toshobod MFY'),
(8321, 178, 'Usmonobod MFY'),
(8322, 178, 'Ustoz MFY'),
(8323, 178, 'Uzbekiston MFY'),
(8324, 178, 'Uzumchi MFY'),
(8325, 178, 'X.Olimjon MFY'),
(8326, 178, 'Yangi Fargona MFY'),
(8327, 178, 'Yangiarab MFY'),
(8328, 178, 'Yangiarab SHFY'),
(8329, 178, 'Yangiarik MFY'),
(8330, 178, 'Yangichek MFY'),
(8331, 178, 'Yangikurgon SHFY'),
(8332, 178, 'Yangiturmush MFY'),
(8333, 178, 'Yangixayot MFY'),
(8334, 178, 'Yoshlik MFY'),
(8335, 178, 'Yuksalish MFY'),
(8336, 178, 'Zarxal MFY'),
(8337, 178, 'Zilxa SHFY');
  `);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
