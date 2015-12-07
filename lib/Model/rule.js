"use strict";
Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var rule = (function () {
	function rule(use_default) {
		_classCallCheck(this, rule);

		this._map = new Map();
		use_default && this.useDefault();
	}

	//添加匹配规则(求职者中的某一模块,招聘信息中的某一模块,匹配方法)

	_createClass(rule, [{
		key: 'use',
		value: function use(j, r, total, m) {
			var f = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

			this._map.set({ j: j, r: r }, { total: total, m: m, f: f });
		}
	}]);

	return rule;
})();

exports.rule = rule;

var Rule = rule;
var default_rule = new Rule(false);
exports.default_rule = default_rule;
default_rule.use('need_job', 'job', 5, function (j, r) {
	var determine = [j.job_name == r.job_name, j.type == r.type, j.work_time.start >= r.work_time.start, j.work_time.end <= r.work_time.end, j.job_type == r.job_type, j.salary.type == r.salary.type, j.salary.type == 1 ? j.salary.min >= r.salary.min : true, j.salary.type == 1 ? j.salary.max <= r.salary.max : true];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = determine[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var d = _step.value;

			if (!d) return { mark: 0, tonext: 'go' };
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

	return { mark: 5, tonext: 'break' };
});

default_rule.use('body', 'body', 5, function (j, r) {
	var determine = [j.isDeformity <= r.isDeformity, j.age >= r.age[0] && j.age <= r.age[1], r.sex == 'a' ? true : j.sex == r.sex, j.height >= r.height[0] && j.height <= r.height[1], j.sight >= r.sight[0] && j.sight <= r.sight[1], j.weight >= r.weight[0] && j.weight <= r.weight[1]];
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = determine[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var d = _step2.value;

			if (!d) return { mark: 0, tonext: 'zero' };
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

	return { mark: 5, tonext: 'break' };
});

default_rule.use('school_exp', 'school_exp', 5, function (j, r) {
	var determine = [j.degree >= r.degree];
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = determine[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var d = _step3.value;

			if (!d) return { mark: 0, tonext: 'zero' };
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3['return']) {
				_iterator3['return']();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return { mark: 5, tonext: 'break' };
});

default_rule.use('prize', 'prize', null, function (j, r) {
	var determine = [j.type == r.type, j.level >= r.level];
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = determine[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var d = _step4.value;

			if (!d) return { mark: 0, tonext: 'go' };
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4['return']) {
				_iterator4['return']();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	return { mark: 5, tonext: 'go' };
});

default_rule.use('ability', 'ability', null, function (j, r, cache) {
	var determine = [j.aname == r.aname, j.level >= r.level];
	if (r.need == 1 && cache.has(r)) {
		cache.set(r, false);
	}
	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
		for (var _iterator5 = determine[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
			var d = _step5.value;

			if (!d) return { mark: 0, tonext: 'go' };
		}
	} catch (err) {
		_didIteratorError5 = true;
		_iteratorError5 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion5 && _iterator5['return']) {
				_iterator5['return']();
			}
		} finally {
			if (_didIteratorError5) {
				throw _iteratorError5;
			}
		}
	}

	cache.set(r, true);
	return { mark: 5, tonext: 'go' };
}, function (mark, cache) {
	var _iteratorNormalCompletion6 = true;
	var _didIteratorError6 = false;
	var _iteratorError6 = undefined;

	try {
		for (var _iterator6 = cache[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
			var _step6$value = _slicedToArray(_step6.value, 2);

			var key = _step6$value[0];
			var value = _step6$value[1];

			if (!value) {
				mark.get = 0;
			}
		}
	} catch (err) {
		_didIteratorError6 = true;
		_iteratorError6 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion6 && _iterator6['return']) {
				_iterator6['return']();
			}
		} finally {
			if (_didIteratorError6) {
				throw _iteratorError6;
			}
		}
	}

	return true;
});

default_rule.use('cert', 'cert', null, function (j, r, cache) {
	var determine = [j.cname == r.cname, j.type == r.type, j.level >= r.level];
	if (r.need == 1 && cache.has(r)) {
		cache.set(r, false);
	}
	var _iteratorNormalCompletion7 = true;
	var _didIteratorError7 = false;
	var _iteratorError7 = undefined;

	try {
		for (var _iterator7 = determine[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
			var d = _step7.value;

			if (!d) {
				if (j.type == r.type && j.level >= r.level) {
					return { mark: 3, tonext: 'go' };
				} else {
					return { mark: 0, tonext: 'go' };
				}
			}
		}
	} catch (err) {
		_didIteratorError7 = true;
		_iteratorError7 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion7 && _iterator7['return']) {
				_iterator7['return']();
			}
		} finally {
			if (_didIteratorError7) {
				throw _iteratorError7;
			}
		}
	}

	cache.set(r, true);
	return { mark: 5, tonext: 'go' };
}, function (mark, cache) {
	var _iteratorNormalCompletion8 = true;
	var _didIteratorError8 = false;
	var _iteratorError8 = undefined;

	try {
		for (var _iterator8 = cache[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
			var _step8$value = _slicedToArray(_step8.value, 2);

			var key = _step8$value[0];
			var value = _step8$value[1];

			if (!value) {
				mark.get = 0;
			}
		}
	} catch (err) {
		_didIteratorError8 = true;
		_iteratorError8 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion8 && _iterator8['return']) {
				_iterator8['return']();
			}
		} finally {
			if (_didIteratorError8) {
				throw _iteratorError8;
			}
		}
	}

	return true;
});

default_rule.use('job_exp', 'job_exp', null, function (j, r, cache) {
	var determine = [j.job == r.job, j.num >= j.num];
	var _iteratorNormalCompletion9 = true;
	var _didIteratorError9 = false;
	var _iteratorError9 = undefined;

	try {
		for (var _iterator9 = determine[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
			var d = _step9.value;

			if (!d) {
				return { mark: 0, tonext: 'go' };
			}
		}
	} catch (err) {
		_didIteratorError9 = true;
		_iteratorError9 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion9 && _iterator9['return']) {
				_iterator9['return']();
			}
		} finally {
			if (_didIteratorError9) {
				throw _iteratorError9;
			}
		}
	}

	return { mark: 5, tonext: 'go' };
});