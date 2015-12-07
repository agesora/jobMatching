"use strict";
Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorMessage = " is not correct";

var resume = (function () {
	function resume(_ref) {
		var need_job = _ref.need_job;
		var body = _ref.body;
		var school_exp = _ref.school_exp;
		var prize = _ref.prize;
		var ability = _ref.ability;
		var cert = _ref.cert;
		var job_exp = _ref.job_exp;

		_classCallCheck(this, resume);

		//初始化
		this.need_job = new Array();
		this.school_exp = new Array();
		this.prize = new Array();
		this.ability = new Array();
		this.cert = new Array();
		this.job_exp = new Array();
		//初次赋值
		this.set_need_job = need_job;
		this.set_body = body;
		this.set_school_exp = school_exp;
		this.set_prize = prize;
		this.set_ability = ability;
		this.set_cert = cert;
		this.set_job_exp = job_exp;
	}

	//需求职位信息

	_createClass(resume, [{
		key: "throwError",
		value: function throwError(propName) {
			throw new Error(propName + ErrorMessage);
		}
	}, {
		key: "set_need_job",
		set: function set(obj) {
			if (obj instanceof Array) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var o = _step.value;

						this.need_job.push(o);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			} else if (obj instanceof need_job) {
				this.need_job.push(obj);
			} else {
				this.throwError('need_job');
			}
		}
	}, {
		key: "set_body",
		set: function set(obj) {
			if (obj instanceof body) {
				this.body = obj;
			} else {
				this.throwError('body');
			}
		}
	}, {
		key: "set_school_exp",
		set: function set(obj) {
			if (obj instanceof Array) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = obj[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var o = _step2.value;

						this.school_exp.push(o);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			} else if (obj instanceof school_exp) {
				this.school_exp.push(obj);
			} else {
				this.throwError('school_exp');
			}
		}
	}, {
		key: "set_prize",
		set: function set(obj) {
			if (obj instanceof Array) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = obj[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var o = _step3.value;

						this.prize.push(o);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			} else if (obj instanceof prize) {
				this.prize.push(obj);
			} else {
				this.throwError('prize');
			}
		}
	}, {
		key: "set_ability",
		set: function set(obj) {
			if (obj instanceof Array) {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = obj[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var o = _step4.value;

						this.ability.push(o);
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			} else if (obj instanceof ability) {
				this.ability.push(obj);
			} else {
				this.throwError('ability');
			}
		}
	}, {
		key: "set_cert",
		set: function set(obj) {
			if (obj instanceof Array) {
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = obj[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var o = _step5.value;

						this.cert.push(o);
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
							_iterator5["return"]();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			} else if (obj instanceof cert) {
				this.cert.push(obj);
			} else {
				this.throwError('cert');
			}
		}
	}, {
		key: "set_job_exp",
		set: function set(obj) {
			if (obj instanceof Array) {
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = obj[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var o = _step6.value;

						this.job_exp.push(o);
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
							_iterator6["return"]();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}
			} else if (obj instanceof job_exp) {
				this.job_exp.push(obj);
			} else {
				this.throwError('job_exp');
			}
		}
	}]);

	return resume;
})();

exports.resume = resume;

var need_job = (function () {
	function need_job(_ref2) {
		var job_name = _ref2.job_name;
		var type = _ref2.type;
		var work_time = _ref2.work_time;
		var job_type = _ref2.job_type;
		var salary = _ref2.salary;

		_classCallCheck(this, need_job);

		this.job_name = job_name;
		this.type = type;
		this.set_work_time = work_time;
		this.job_type = job_type;
		this.set_salary = salary;
	}

	//身体情况

	_createClass(need_job, [{
		key: "set_work_time",
		set: function set(_ref3) {
			var start = _ref3.start;
			var end = _ref3.end;

			var start_time = start.split(":");
			var end_time = end.split(":");
			this.work_time = {
				start: parseInt(start_time[0]) * 60 + parseInt(start_time[1]),
				end: parseInt(end_time[0]) * 60 + parseInt(end_time[1])
			};
		}
	}, {
		key: "set_salary",
		set: function set(_ref4) {
			var type = _ref4.type;
			var max = _ref4.max;
			var min = _ref4.min;

			switch (type) {
				case 0:
					this.salary = {
						type: type,
						max: max,
						min: min
					};
					break;
				case 1:
					this.salary = {
						type: type
					};
					break;
				default:
					throw new Error(ErrorMessage);
			}
		}
	}]);

	return need_job;
})();

exports.need_job = need_job;

var body = function body(_ref5) {
	var isDeformity = _ref5.isDeformity;
	var age = _ref5.age;
	var sex = _ref5.sex;
	var height = _ref5.height;
	var sight = _ref5.sight;
	var weight = _ref5.weight;

	_classCallCheck(this, body);

	this.isDeformity = isDeformity;
	this.age = age;
	this.sex = sex;
	this.height = height;
	this.sight = sight;
	this.weight = weight;
}

//学校经历
;

exports.body = body;

var school_exp = function school_exp(_ref6) {
	var degree = _ref6.degree;
	var start = _ref6.start;
	var end = _ref6.end;

	_classCallCheck(this, school_exp);

	this.degree = degree;
}

//获奖情况
;

exports.school_exp = school_exp;

var prize = function prize(_ref7) {
	var type = _ref7.type;
	var level = _ref7.level;

	_classCallCheck(this, prize);

	this.type = type;
	this.level = level;
}

//技能
;

exports.prize = prize;

var ability = function ability(_ref8) {
	var aname = _ref8.aname;
	var level = _ref8.level;

	_classCallCheck(this, ability);

	this.aname = aname;
	this.level = level;
}

//证书
;

exports.ability = ability;

var cert = function cert(_ref9) {
	var cname = _ref9.cname;
	var type = _ref9.type;
	var level = _ref9.level;

	_classCallCheck(this, cert);

	this.cname = cname;
	this.type = type;
	this.level = parseInt(level);
}

//工作经历
;

exports.cert = cert;

var job_exp = function job_exp(_ref10) {
	var job = _ref10.job;
	var num = _ref10.num;

	_classCallCheck(this, job_exp);

	this.job = job;
	this.num = num;
}

//求职者模型
/*求职者匹配模型
需求职位信息
	职位名称
	分类
	工作时间
			时起
			时末
	职位类型  0全职 1实习 2兼职
	月薪
		类型 0面议 1固定
		最小
		最大
身体情况
		是否残疾
		年龄
		性别
		身高
		视力
		体重
学校经历[]
	学历 0初中及以下 1中专/技校 2大专 3本科 4硕士 5博士
获奖[]
	奖项类型
	奖项等级 0区级 1市级 2国家级 3世界级
技能[]
	能力名称
	掌握情况 0 掌握 1精通
证书[]
	证书颁发机构
	证书类型
	证书等级0~10
工作经历[]
	职位
	年数
*/
;

exports.job_exp = job_exp;