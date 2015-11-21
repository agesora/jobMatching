import * as JobHunter from './Model/jobHunter';
import * as Recruitment from './Model/recruitment';
import { rule as Rule,default_rule as default_rule} from './Model/rule';
import * as JobMatching from './jobMatching';
export {JobHunter, Recruitment,Rule,default_rule};
export function match({job_hunter, recruitments, rule}, callback) {
	try {
		let result = new Array();
		if (recruitments instanceof Array) {
			for (let r of recruitments) {
				result.push({
					recruitment: r._id,
					mark: JobMatching.matching(job_hunter, r, rule),
					create_time: new Date()
				});
			}
			callback(null, result);
		}
		else {
			result.push({
				recruitment: recruitments._id,
				mark: JobMatching.matching(job_hunter, recruitments, rule),
				create_time: new Date()
			});
			callback(null, result);
		}
	}
	catch (e) {
		callback(e);
	}
}