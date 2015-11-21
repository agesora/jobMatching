var jobMatching = require('./index');
var person = new jobMatching.JobHunter.need_job({
	job_name: "项目经理",
	type: "IT",
	work_time: {
		start: "8:00",
		end: "10:00"
	},
	job_type: 1
	, salary: {
		type: 0
	}
});
console.log(person);