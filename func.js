import * as JobHunter from './Model/jobHunter';
import * as Recruitment from './Model/recruitment';
import { rule as Rule, default_rule as default_rule} from './Model/rule';
import * as JobMatching from './jobMatching';
export {JobHunter, Recruitment, Rule, default_rule};
export function match({job_hunter, recruitments, rule = default_rule}, callback) {
	try {
		let result = new Array();
		if (recruitments instanceof Array) {
			for (let r of recruitments) {
				result.push({
					recruitment: r,
					mark: JobMatching.matching(job_hunter, r, rule),
					create_time: new Date()
				});
			}
		}
		else {
			result.push({
				recruitment: recruitments,
				mark: JobMatching.matching(job_hunter, recruitments, rule),
				create_time: new Date()
			});
		}
		if (typeof callback == 'function') {
			callback(null, result);
		}
		else {
			return new next(null,result);
		}
	}
	catch (e) {
		if (typeof callback == 'function') {
			callback(e);
		}
		else {
			return new next(e);
		}
	}
}

class next {
	constructor(err,result) {
		this.err=err;
		this.result=result;
	}
	addup(){
		for(let i in this.result){
			this.result[i]=addup(this.result[i]);
		}
		delete this.addup;
		return this;
	}
	exec(callback){
		callback(this.err,this.result);
	}
}

export function addup(result){
	let total=0,get=0;
	for(let m of result.mark){
		total+=m.mark.total;
		get+=m.mark.get;
	}
	result.match_degree=get/total*100
	return result;
}