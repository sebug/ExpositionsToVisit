(function () {
  'use strict';

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  var message = function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var m;
          return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                  switch (_context.prev = _context.next) {
                      case 0:
                          _context.next = 2;
                          return p;

                      case 2:
                          m = _context.sent;
                          return _context.abrupt('return', m);

                      case 4:
                      case 'end':
                          return _context.stop();
                  }
              }
          }, _callee, this);
      }));

      return function message() {
          return _ref.apply(this, arguments);
      };
  }();

  var p = new Promise(function (resolve, reject) {
      setTimeout(function () {
          resolve('Ohai, promised');
      }, 100);
  });

  message().then(function (m) {
      console.log(m);
  });

}());
