import {default_rule} from './Model/rule';

//匹配(求职者模型,招聘信息模型组,匹配规则)
export function matching(j,r,rule) {
	var mark={};
	if(!rule){
		rule=default_rule;
	}
	for(let rm in r){
		mark[rm]=outputMethod[rule._doc[rm].mode](j[rule._doc[rm].j],rm,rule._doc[rm].m);
	}
	return 100;
}
class outputMethod{
	JhaveR(j,r,m){
		let mark={
			total:1,
			get:0
		};
		let flag=false;
		for(let jm of j){
			if(m(jm,r)){
				flag=false;
				break;
			}
		}
		flag&&(mark.get=1);
		return mark;
	}
}