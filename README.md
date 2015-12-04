#jobMatching

>   这是一个采用ES6语法的用于计算简历与招聘内容匹配度的组件。匹配规则可根据需求来进行设计，当然组件内自带一套匹配规则模型。

安装方式：
```
npm install node-jobmatch
```

##基础示例:
引用
```javascript
	var jobMatching = require('node-jobmatch');
```


创建一个简历模型
```javascript
	var JobHunter = jobMatching.JobHunter;
	var Recruitment = jobMatching.Recruitment;
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

##创建简历信息以及招聘信息

> 组件自带两种模型分别为，带有严格的检查。

> 当然，组件也支持自由化定义模型，但是自由化的模型不能使用默认匹配规则。

自带的定义方法请查看[基础示例](#基础示例)

自由化定义示例：
```javascript
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

//创建自定义规则
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

//使用匹配
jobMatching.match({ job_hunter: j, recruitments: r,rule:rule },function (err, result) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(JSON.stringify(result));
	}
});

```


##创建自定义匹配规则


指令有目前有以下几个：
- go:继续执行下一个匹配
- zero:直接记0跳过此模块的匹配
- break:跳过目前对招聘信息

回调函数返回的内容：

- j:简历模块中的单一内容
- r:招聘信息模块中的单一内容
- cache:此次匹配使用的缓存，目前赋值为MAP，使用方法详见ES6语法中的MAP

总分一栏不填则会以招聘信息模块内容数量*5来记为这一模块的总分

判定完毕后需要返回信息：
```json
{
	mark:分数,
	tonext:指令
}
```

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

##后续处理函数
> 用于运算完毕后对全部的结果进行处理的函数,使用的话原方法不要使用回调函数

目前拥有的方法有以下几个：
1. addup()单个匹配结果进行累加,使用后结果会面会多出"match_degree"表示累加结果，调用一次后，此函数不可在被调用。
2. exec()输出处理完毕的结果

示例
```javascript
jobMatching.match({ job_hunter: j, recruitments: r }).addup().exec(function (err, result) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(JSON.stringify(result));
	}
```

