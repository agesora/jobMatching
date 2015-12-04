#careerMatching

>   这是一个采用ES6语法的用于计算简历与招聘内容匹配度的组件。匹配规则可根据需求来进行设计，当然组件内自带一套匹配规则模型。

安装方式：
```
npm install node-jobmatch
```

##简单上手:
引用
```javascript
	var jobMatching = require('node-jobmatch');
```


创建一个简历模型
```javascript
	var JobHunter = jobMatching.JobHunter;
	var j = new JobHunter.resume({
	//模块
	need_job: [new JobHunter.need_job({
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
```

创建一个招聘信息模型
```javascript
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

```

进行匹配
```javascript
jobMatching.match({ job_hunter: j, recruitments: r }).addup().exec(function (err, result) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(JSON.stringify(result));
	}
});
```

匹配结果示例
```json
	[
  {
    "recruitment_id": "1",
    "mark": [
      {
        "module": "job",
        "mark": {
          "total": 5,
          "get": 0
        }
      },
      {
        "module": "body",
        "mark": {
          "total": 5,
          "get": 5
        }
      },
      {
        "module": "school_exp",
        "mark": {
          "total": 5,
          "get": 5
        }
      },
      {
        "module": "prize",
        "mark": {
          "total": 5,
          "get": 5
        }
      },
      {
        "module": "ability",
        "mark": {
          "total": 5,
          "get": 5
        }
      },
      {
        "module": "cert",
        "mark": {
          "total": 5,
          "get": 5
        }
      },
      {
        "module": "job_exp",
        "mark": {
          "total": 5,
          "get": 5
        }
      }
    ],
    "create_time": "2015-12-03T14:12:08.711Z",
    "match_degree": 85.71428571428571
  }
]

```

##创建自定义规则匹配

判定完毕后需要返回信息：
```json
{
	mark:分数,
	tonext:指令
}
```
指令有目前有一下几个：
- go:继续执行下一个匹配
- zero:直接记0跳过此模块的匹配
- break:跳过目前对招聘信息
回调函数返回的内容
- j:简历模块中的单一内容
- r:招聘信息模块中的单一内容
- cache:此次匹配使用的缓存，目前赋值为MAP，使用方法详见ES6语法中的MAP


示例

```javascript

	var rule=new jobMatching.Rule(false);
	rule.use('简历中的模块名', '招聘信息中的模块名', 这一模块的总分, function (j, r, cache) {
	对比方法...
	return { mark: 返回分数, tonext: 'go' };
});



```
使用自定义规则:

```javascript

jobMatching.match({ job_hunter: j, recruitments: r,rule:rule },function (err, result) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(JSON.stringify(result));
	}
});

```