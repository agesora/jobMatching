"use strict";
const ErrorMessage = " is not correct";
export class recruitment {
	constructor(_id,{job, body, school_exp, prize, ability, cert, job_exp}) {
		//初始化
		this._id=_id;
		this.school_exp = new Array();
		this.prize = new Array();
		this.ability = new Array();
		this.cert = new Array();
		this.job_exp = new Array();
		//初次赋值
		this.set_job = job;
		this.set_body = body;
		this.set_school_exp = school_exp;
		this.set_prize = prize;
		this.set_ability = ability;
		this.set_cert = cert;
		this.set_job_exp = job_exp;
	}
	set set_job(obj) {
		if (obj instanceof job) {
			this.job = obj;
		} else {
			this.throwError('job');
		}
	}

	set set_body(obj) {
		if (obj instanceof body) {
			this.body = obj;
		} else {
			this.throwError('body');
		}
	}

	set set_school_exp(obj) {
		if (obj instanceof Array) {
			for (let o of obj) {
				this.school_exp.push(o);
			}
		}
		else if (obj instanceof school_exp) {
			this.school_exp.push(obj);
		}
		else {
			this.throwError('school_exp');
		}
	}

	set set_prize(obj) {
		if (obj instanceof Array) {
			for (let o of obj) {
				this.prize.push(o);
			}
		}
		else if (obj instanceof prize) {
			this.prize.push(obj);
		} else {
			this.throwError('prize');
		}
	}

	set set_ability(obj) {
		if (obj instanceof Array) {
			for (let o of obj) {
				this.ability.push(o);
			}
		}
		else if (obj instanceof ability) {
			this.ability.push(obj);
		} else {
			this.throwError('ability');
		}
	}

	set set_cert(obj) {
		if (obj instanceof Array) {
			for (let o of obj) {
				this.cert.push(o);
			}
		}
		else if (obj instanceof cert) {
			this.cert.push(obj);
		} else {
			this.throwError('cert');
		}
	}

	set set_job_exp(obj) {
		if (obj instanceof Array) {
			for (let o of obj) {
				this.job_exp.push(o);
			}
		}
		else if (obj instanceof job_exp) {
			this.job_exp.push(obj);
		} else {
			this.throwError('job_exp');
		}
	}

	throwError(propName) {
		throw new Error(propName + ErrorMessage);
	}
}

//招聘职位信息
export class job {
	constructor({job_name, type, work_time, job_type, salary}) {
		this.job_name = job_name;
		this.type = type;
		this.set_work_time = work_time;
		this.job_type = job_type;
		this.set_salary = salary;
	}
	set set_work_time({start, end}) {
		let start_time = start.split(":");
		let end_time = end.split(":");
		this.work_time = {
			start: parseInt(start_time[0]) * 60 + parseInt(start_time[1]),
			end: parseInt(end_time[0]) * 60 + parseInt(end_time[1])
		}
	}
	set set_salary({type, max, min}) {
		switch (type) {
			case 0:
				this.salary = {
					type: type,
					max: max,
					min: min
				}
				break;
			case 1:
				this.salary = {
					type: type
				}
				break;
			default:
				throw new Error(ErrorMessage);
		}
	}
}

//身体情况
export class body {
	constructor({isDeformity, age, sex, height, sight, weight}) {
		this.isDeformity = isDeformity;
		this.age = age;
		this.sex = sex;
		this.height = height;
		this.sight = sight;
		this.weight = weight;
	}
}

//学校经历
export class school_exp {
	constructor({degree}) {
		this.degree = degree;
	}
}

//获奖情况
export class prize {
	constructor({type, level}) {
		this.type = type;
		this.level = level;
	}
}

//技能
export class ability {
	constructor({aname, level, need}) {
		this.aname = aname;
		this.level = parseInt(level);
		this.need = parseInt(need);
	}
}

//证书
export class cert {
	constructor({cname, type, level,need}) {
		this.cname = cname;
		this.type = type;
		this.level = parseInt(level);
		this.need = parseInt(need);
	}
}

//工作经历
export class job_exp {
	constructor({job, num}) {
		this.job = job;
		this.num = parseInt(num);
	}
}

/*职位匹配模型
	职位编号
	职位信息
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
	身体要求
		是否接收残疾 0不接收 1接收 
		年龄
			最小
			最大
		性别
		身高
			最小
			最大
		视力
			最小
			最大
		体重
			最小
			最大
	学校经历
		学历 0初中及以下 1中专/技校 2大专 3本科 4硕士 5博士
	获奖
		奖项类型
		奖项等级 0区级 1市级 2国家级 3世界级
		加分 1~5
	技能[]
		能力名称
		掌握情况 0 掌握 1精通
	需要证书类型[]
			证书颁发机构
			证书类型
			证书等级0~10
			证书需求类型 0优先 1 必须
	工作经历[]
			职位 /正则匹配/
			年数
*/