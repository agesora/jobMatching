

//匹配(求职者模型,招聘信息模型组,匹配规则)
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports.matching = matching;

function matching(j, r, rule) {
	var marks = new Array();
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rule._map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2);

			var mod = _step$value[0];
			var method = _step$value[1];

			marks.push({
				module: mod.r,
				mark: getScore(j[mod.j], r[mod.r], method.total, method.m, method.f)
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

	return marks;
}

//获取分数
function getScore(j, r, t, m, f) {
	var ja = j;
	var ra = r;

	if (!(j instanceof Array)) {
		ja = new Array(j);
	}
	if (!(r instanceof Array)) {
		ra = new Array(r);
	}
	if (!t) {
		t = ra.length * 5;
	}
	var mark = {
		total: t,
		get: 0
	};
	var flag = false;
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;
	var cache = new Map();
	try {
		for (var _iterator2 = ja[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var jm = _step2.value;

			
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = ra[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var rm = _step3.value;

					var result = m(jm, rm, cache);
					// if(result.totalAdd){
					// 	mark.total+=result.totalAdd;
					// }
					if (result.tonext == 'go') {
						mark.get += result.mark;
					} else if (result.tonext == 'break') {
						mark.get += result.mark;
						break;
					} else if (result.tonext == 'zero') {
						mark.get = 0;
						flag = true;
						break;
					}
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

			if (flag) break;
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

	if (typeof f == 'function') f(mark, cache);
	return mark;
}