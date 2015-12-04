var jobMatching = require('./index');
//招聘
var r={
	//模块
	rneed_job: [{
		//内容
		job_name: "项目经理",
		type: "IT",
		work_time: {
			start: "12:00",
			end: "21:00"
		},
		job_type: 1,
		salary: {
			type: 0
		}
	}]
}
//简历
var j={
	//模块
	jneed_job: [{
		//内容
		job_name: "项目经理",
		type: "IT",
		work_time: {
			start: "12:00",
			end: "21:00"
		},
		job_type: 1,
		salary: {
			type: 0
		}
	},{
		job_name: "技术经理",
		type: "金融",
		work_time: {
			start: "8:00",
			end: "10:00"
		},
		job_type: 1,
		salary: {
			type: 0
		}
	}]
}

var rule=new jobMatching.Rule(false);
rule.use('jneed_job', 'rneed_job', null, function (j, r, cache) {
	if(j.job_name==r.job_name){
		return {mark:5,tonext:'break'};
	}
	else{
		return {
			mark:0,
			tonext:'go'
		}
	}
});


jobMatching.match({ job_hunter: j, recruitments: r,rule:rule },function (err, result) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(JSON.stringify(result));
	}
});
