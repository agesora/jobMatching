'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.match = match;
exports.addup = _addup;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ModelJobHunter = require('./Model/jobHunter');

var JobHunter = _interopRequireWildcard(_ModelJobHunter);

var _ModelRecruitment = require('./Model/recruitment');

var Recruitment = _interopRequireWildcard(_ModelRecruitment);

var _ModelRule = require('./Model/rule');

var _jobMatching = require('./jobMatching');

var JobMatching = _interopRequireWildcard(_jobMatching);

exports.JobHunter = JobHunter;
exports.Recruitment = Recruitment;
exports.Rule = _ModelRule.rule;
exports.default_rule = _ModelRule.default_rule;

function match(_ref, callback) {
	var job_hunter = _ref.job_hunter;
	var recruitments = _ref.recruitments;
	var _ref$rule = _ref.rule;
	var rule = _ref$rule === undefined ? _ModelRule.default_rule : _ref$rule;

	try {
		var result = new Array();
		if (recruitments instanceof Array) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = recruitments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var r = _step.value;

					result.push({
						recruitment: r._id,
						mark: JobMatching.matching(job_hunter, r, rule),
						create_time: new Date()
					});
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		} else {
			result.push({
				recruitment_id: recruitments._id,
				mark: JobMatching.matching(job_hunter, recruitments, rule),
				create_time: new Date()
			});
		}
		if (typeof callback == 'function') {
			callback(null, result);
		} else {
			return new next(null, result);
		}
	} catch (e) {
		if (typeof callback == 'function') {
			callback(e);
		} else {
			return new next(e);
		}
	}
}

var next = (function () {
	function next(err, result) {
		_classCallCheck(this, next);

		this.err = err;
		this.result = result;
	}

	_createClass(next, [{
		key: 'addup',
		value: function addup() {
			for (var i in this.result) {
				this.result[i] = _addup(this.result[i]);
			}
			delete this.addup;
			return this;
		}
	}, {
		key: 'exec',
		value: function exec(callback) {
			callback(this.err, this.result);
		}
	}]);

	return next;
})();

function _addup(result) {
	var total = 0,
	    get = 0;
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = result.mark[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var m = _step2.value;

			total += m.mark.total;
			get += m.mark.get;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2['return']) {
				_iterator2['return']();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	result.match_degree = get / total * 100;
	return result;
}