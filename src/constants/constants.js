exports.MESSAGE_SEPERATOR = String.fromCharCode( 30 ); // ASCII Record Seperator 1E
exports.MESSAGE_PART_SEPERATOR = String.fromCharCode( 31 ); // ASCII Unit Separator 1F

exports.LOG_LEVEL = {};
exports.LOG_LEVEL.DEBUG = 0;
exports.LOG_LEVEL.INFO = 1;
exports.LOG_LEVEL.WARN = 2;
exports.LOG_LEVEL.ERROR = 3;
exports.LOG_LEVEL.OFF = 4;

exports.EVENT = {};
exports.EVENT.INVALID_AUTH_MSG = 'INVALID_AUTH_MSG';
exports.EVENT.INVALID_AUTH_DATA = 'INVALID_AUTH_DATA';
exports.EVENT.AUTH_ATTEMPT = 'AUTH_ATTEMPT';
exports.EVENT.TOO_MANY_AUTH_ATTEMPTS = 'TOO_MANY_AUTH_ATTEMPTS';
exports.EVENT.AUTH_SUCCESSFUL = 'AUTH_SUCCESSFUL';

exports.TOPIC = {};
exports.TOPIC.AUTH = 'AUTH';

exports.ACTIONS = {};
exports.ACTIONS.ACK = 'A';
exports.ACTIONS.CREATE = 'C';
exports.ACTIONS.READ = 'R';
exports.ACTIONS.UPDATE = 'U';
exports.ACTIONS.DELETE = 'D';
exports.ACTIONS.SUBSCRIBE = 'S';
exports.ACTIONS.UNSUBSCRIBE = 'US';
exports.ACTIONS.INVOKE = 'I';
exports.ACTIONS.LISTEN = 'L';
exports.ACTIONS.PROVIDE = 'P';
exports.ACTIONS.UNPROVIDE = 'UP';
exports.ACTIONS.CREATEORREAD = 'CR';
exports.ACTIONS.RPC = 'RPC';
exports.ACTIONS.EVENT = 'EVT';
exports.ACTIONS.ERROR = 'E';
exports.ACTIONS.REQUEST = 'REQ';