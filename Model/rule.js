"use strict";
export class rule {
	constructor(use_default) {
		this._map = new Map();
		use_default && this.useDefault();
	}
	//添加匹配规则(求职者中的某一模块,招聘信息中的某一模块,匹配方法)
	use(j, r, total, m, f = null) {
		this._map.set({ j: j, r: r }, { total: total, m: m, f: f });
	}
}
var Rule = rule;
export var default_rule = new Rule(false);
default_rule.use('need_job', 'job', 5, function (j, r) {
	let determine = [
		j.job_name == r.job_name,
		j.type == r.type,
		j.work_time.start >= r.work_time.start,
		j.work_time.end <= r.work_time.end,
		j.job_type == r.job_type,
		j.salary.type == r.salary.type,
		j.salary.type == 1 ? j.salary.min >= r.salary.min : true,
		j.salary.type == 1 ? j.salary.max <= r.salary.max : true,
	];
	for (let d of determine) {
		if (!d) return { mark: 0, tonext: 'go' };
	}
	return { mark: 5, tonext: 'break' };
});

default_rule.use('body', 'body', 5, function (j, r) {
	let determine = [
		j.isDeformity <= r.isDeformity,
		j.age >= r.age[0] && j.age <= r.age[1],
		r.sex == 'a' ? true : (j.sex == r.sex),
		j.height >= r.height[0] && j.height <= r.height[1],
		j.sight >= r.sight[0] && j.sight <= r.sight[1],
		j.weight >= r.weight[0] && j.weight <= r.weight[1],
	];
	for (let d of determine) {
		if (!d) return { mark: 0, tonext: 'zero' };
	}
	return { mark: 5, tonext: 'break' };
});

default_rule.use('school_exp', 'school_exp', 5, function (j, r) {
	let determine = [
		j.degree >= r.degree,
	];
	for (let d of determine) {
		if (!d) return { mark: 0, tonext: 'zero' };
	}
	return { mark: 5, tonext: 'break' };
});

default_rule.use('prize', 'prize', null, function (j, r) {
	let determine = [
		j.type == r.type,
		j.level >= r.level,
	];
	for (let d of determine) {
		if (!d) return { mark: 0, tonext: 'go' };
	}
	return { mark: 5, tonext: 'go' };
});

default_rule.use('ability', 'ability', null, function (j, r, cache) {
	let determine = [
		j.aname == r.aname,
		j.level >= r.level,
	];
	if (r.need == 1 && !cache.has(r)) {
		cache.set(r, false);
	}
	for (let d of determine) {
		if (!d) return { mark: 0, tonext: 'go' };
	}
	cache.set(r, true);
	return { mark: 5, tonext: 'go' };
}, function (mark, cache) {
	for (let [key, value] of cache) {
		if (!value) {
			mark.get = 0
		}
	}
	return true;
});


default_rule.use('cert', 'cert', null, function (j, r, cache) {
	let determine = [
		j.cname == r.cname,
		j.type == r.type,
		j.level >= r.level,
	];
	if (r.need == 1 && cache.has(r)) {
		cache.set(r, false);
	}
	for (let d of determine) {
		if (!d) {
			if (j.type == r.type && j.level >= r.level) {
				return { mark: 3, tonext: 'go' };
			}
			else {
				return { mark: 0, tonext: 'go' };
			}
		}

	}
	cache.set(r, true);
	return { mark: 5, tonext: 'go' };
}, function (mark, cache) {
	for (let [key, value] of cache) {
		if (!value) {
			mark.get = 0	
		}
	}
	return true;
});

default_rule.use('job_exp', 'job_exp', null, function (j, r, cache) {
	let determine = [
		j.job == r.job,
		j.num >= j.num
	];
	for (let d of determine) {
		if (!d) {
			return { mark: 0, tonext: 'go' };
		}

	}
	return { mark: 5, tonext: 'go' };
});