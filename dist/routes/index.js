"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(require("@koa/router"));

var _constants = _interopRequireDefault(require("../config/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const router = new _router.default();
  router.get('/isHealthy', ctx => {
    ctx.status = _constants.default.HTTP.CODES.OK;
    ctx.body = 'isHealthy';
  });
  router.post('/mutant', async ctx => {});
  router.get('/stats', async ctx => {});
  return router;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJnZXQiLCJjdHgiLCJzdGF0dXMiLCJDT05TVFMiLCJIVFRQIiwiQ09ERVMiLCJPSyIsImJvZHkiLCJwb3N0Il0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAna29hJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnQGtvYS9yb3V0ZXInO1xuXG5pbXBvcnQgQ09OU1RTIGZyb20gJy4uL2NvbmZpZy9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgcm91dGVyLmdldCgnL2lzSGVhbHRoeScsIChjdHg6IENvbnRleHQpID0+IHtcbiAgICBjdHguc3RhdHVzID0gQ09OU1RTLkhUVFAuQ09ERVMuT0s7XG4gICAgY3R4LmJvZHkgPSAnaXNIZWFsdGh5JztcbiAgfSk7XG5cbiAgcm91dGVyLnBvc3QoJy9tdXRhbnQnLCBhc3luYyAoY3R4OiBDb250ZXh0KSA9PiB7XG4gIH0pO1xuXG4gIHJvdXRlci5nZXQoJy9zdGF0cycsIGFzeW5jIChjdHg6IENvbnRleHQpID0+IHtcbiAgfSk7XG4gIHJldHVybiByb3V0ZXI7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7Ozs7ZUFFZSxNQUFNO0VBQ25CLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxlQUFKLEVBQWY7RUFDQUQsTUFBTSxDQUFDRSxHQUFQLENBQVcsWUFBWCxFQUEwQkMsR0FBRCxJQUFrQjtJQUN6Q0EsR0FBRyxDQUFDQyxNQUFKLEdBQWFDLGtCQUFBLENBQU9DLElBQVAsQ0FBWUMsS0FBWixDQUFrQkMsRUFBL0I7SUFDQUwsR0FBRyxDQUFDTSxJQUFKLEdBQVcsV0FBWDtFQUNELENBSEQ7RUFLQVQsTUFBTSxDQUFDVSxJQUFQLENBQVksU0FBWixFQUF1QixNQUFPUCxHQUFQLElBQXdCLENBQzlDLENBREQ7RUFHQUgsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxFQUFxQixNQUFPQyxHQUFQLElBQXdCLENBQzVDLENBREQ7RUFFQSxPQUFPSCxNQUFQO0FBQ0QsQyJ9