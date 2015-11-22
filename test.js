var jobMatching = require('./index');
var JobHunter = jobMatching.JobHunter;
var Recruitment = jobMatching.Recruitment;
var j = new JobHunter.resume({
	need_job: [new JobHunter.need_job({
		job_name: "项目经理",
		type: "IT",
		work_time: {
			start: "8:00",
			end: "10:00"
		},
		job_type: 1,
		salary: {
			type: 0
		}
	}), new JobHunter.need_job({
		job_name: "项目经理",
		type: "金融",
		work_time: {
			start: "8:00",
			end: "10:00"
		},
		job_type: 1,
		salary: {
			type: 0
		}
	})],
	body: new JobHunter.body({
		isDeformity: 0,
		age: 18,
		sex: 'w',
		height: 168,
		sight: 5.0,
		weight: 60
	}),
	school_exp: new JobHunter.school_exp({
		degree: 3,
	}),
	prize: new JobHunter.prize({
		type: "奖学金",
		level: 1
	}),
	ability: new JobHunter.ability({
		aname: "Node.js",
		level: 1
	}),
	cert: new JobHunter.cert({
		cname:"CISCO",
		type:"网络",
		level:10
	}),
	job_exp: new JobHunter.job_exp({
		job:"项目经理",
		num:1
	})
});

var r = new Recruitment.recruitment('1', {
	job: new Recruitment.job({
		job_name: "项目经理",
		type: "IT",
		work_time: {
			start: "8:00",
			end: "10:00"
		},
		job_type: 1,
		salary: {
			type: 0
		}
	}),
	body: new Recruitment.body({
		isDeformity: 1,
		age: [18, 30],
		sex: 'a',
		height: [150, 180],
		sight: [3.0, 5.0],
		weight: [60, 80]
	}),
	school_exp: new Recruitment.school_exp({
		degree: 3,
	}),
	prize: new Recruitment.prize({
		type: "奖学金",
		level: 1
	}),
	ability: new Recruitment.ability({
		aname : "Node.js",
		level : 1,
		need : 1,
	}),
	cert: new Recruitment.cert({
		cname:"CISCO",
		type:"网络",
		level:10,
		need:1
	}),
	job_exp: new Recruitment.job_exp({
		job:"项目经理",
		num:1
	})
});
console.log("start");
var start = new Date();
jobMatching.match({ job_hunter: j, recruitments: r }).addup().exec(function (err, result) {
	console.log("used:" + ((new Date()).getTime() - start.getTime()) + "ms");
	if (err) {
		console.log(err);
	}
	else {
		console.log(JSON.stringify(result));
	}
});
