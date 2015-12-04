

//匹配(求职者模型,招聘信息模型组,匹配规则)
export function matching(j, r, rule) {
	let marks = new Array();
	for (let [mod, method] of rule._map) {
		marks.push({
			module: mod.r,
			mark: getScore(j[mod.j], r[mod.r], method.total, method.m,method.f)
		});
	}
	return marks;
}
//获取分数
function getScore(j,r,t,m,f) {
	let [ja,ra]=[j,r];
	if(!(j instanceof Array)){
		ja=new Array(j);
	}
	if(!(r instanceof Array)){
		ra=new Array(r);
	}
	if(!t){
		t=ra.length*5;
	}
	let mark={
		total:t,
		get:0,
	}
	let flag=false;
	for(let jm of ja){
		var cache=new Map();
		for(let rm of ra){
			let result=m(jm,rm,cache);
			// if(result.totalAdd){
			// 	mark.total+=result.totalAdd;
			// }
			if(result.tonext=='go'){
				mark.get+=result.mark;
			}
			else if(result.tonext=='break'){
				mark.get+=result.mark;
				break;
			}
			else if(result.tonext=='zero'){
				mark.get=0;
				flag=true;
				break;
			}
		}
		if(flag)break;
	}
	if(typeof f =='function')f(mark,cache);
	return mark;
}