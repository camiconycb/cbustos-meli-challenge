"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  _dotenv.default.config();

  const Env = {
    api: {
      port: process.env.DEFAULT_APP_PORT
    },
    db: {
      user: process.env.USER_MONGO,
      password: process.env.PASSWORD_MONGO,
      port: process.env.DB_PORT
    }
  };
  return Env;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb3RlbnYiLCJjb25maWciLCJFbnYiLCJhcGkiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIkRFRkFVTFRfQVBQX1BPUlQiLCJkYiIsInVzZXIiLCJVU0VSX01PTkdPIiwicGFzc3dvcmQiLCJQQVNTV09SRF9NT05HTyIsIkRCX1BPUlQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2Vudmlyb21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGRvdGVudi5jb25maWcoKTtcblxuICBjb25zdCBFbnYgPSB7XG4gICAgYXBpOiB7XG4gICAgICBwb3J0OiBwcm9jZXNzLmVudi5ERUZBVUxUX0FQUF9QT1JULFxuICAgIH0sXG4gICAgZGI6IHtcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVJfTU9OR08sXG4gICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRfTU9OR08sXG4gICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBFbnY7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFFZSxNQUFNO0VBQ25CQSxlQUFBLENBQU9DLE1BQVA7O0VBRUEsTUFBTUMsR0FBRyxHQUFHO0lBQ1ZDLEdBQUcsRUFBRTtNQUNIQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztJQURmLENBREs7SUFJVkMsRUFBRSxFQUFFO01BQ0ZDLElBQUksRUFBRUosT0FBTyxDQUFDQyxHQUFSLENBQVlJLFVBRGhCO01BRUZDLFFBQVEsRUFBRU4sT0FBTyxDQUFDQyxHQUFSLENBQVlNLGNBRnBCO01BR0ZSLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlPO0lBSGhCO0VBSk0sQ0FBWjtFQVVBLE9BQU9YLEdBQVA7QUFDRCxDIn0=