export class rule{
	constructor(use_default){
		this._doc=new Object();
		use_default&&this.useDefault();
	}
	//添加匹配规则(匹配模式,求职者中的某一模块,招聘信息中的某一模块,匹配方法)
	use(mode,j,r,m){
		this._doc[r]={
			mode:mode,
			j:j,
			m:m	
		};
	}
}
var Rule=rule;
export var default_rule=new Rule(false);
default_rule.use('JhaveR','need_job','job',function(j,r){
	
});