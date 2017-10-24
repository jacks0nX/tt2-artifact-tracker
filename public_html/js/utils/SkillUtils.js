var selected = 1,
	lvList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	
	SKILL_LV_STORAGE_NAME = 'tt2_skill_lv_arr';

var refresh = function(){
	refTree();
	refIntro();
	refreshCnt();
	TT2.serialize(SKILL_LV_STORAGE_NAME, lvList);
};

var refTree = function(){
	for(var i=0; i<lvList.length; i++){
		var skillBtn = $('#skill_s'+(i+1)),
			skillLv = $('.skill_lv', skillBtn);

		if(i == selected-1){			
			skillBtn.addClass('s_selected');
		}
		else{
			skillBtn.removeClass('s_selected');
		}

		if(lvList[i] > 0){
			skillBtn.addClass('on');
			skillLv.text(lvList[i]);
		}
		else{
			skillBtn.removeClass('on');
		}
	}
};

var refIntro = function(){
	var logo = $('#skill_intro_logo'),
		name = $('#skill_name'),
		eff = $('#skill_value'),
		intro = $('#skill_intro'),
		cost = $('#skill_btn_cost'),
		btnTxt = $('#skill_btn_lower'),
		btn = $('#skill_upgrade_btn'),
		downBtn = $('#skill_downgrade_btn'),
		lv = lvList[selected-1],
		sk = TT2.Skills[selected-1];

	logo.attr('src','./img/s'+selected+'.png');
	name.text(sk.name);	
	intro.text(sk.intro);

	btn.removeClass('skill_locked');
	btn.removeClass('skill_upg');

	if(sk.precon>0 && lvList[sk.precon-1]==0){
		eff.text(sk.pre+'0'+sk.app);
		cost.text(sk.costArr[lv]);
		btnTxt.text("Locked");
		btn.addClass('skill_locked');
	}
	else if(lv==0){
		eff.text(sk.pre+'0'+sk.app);
		cost.text(sk.costArr[lv]);
		btnTxt.text("Unlock");
	}
	else if(lv==sk.max){
		eff.text(sk.pre+sk.effArr[lv-1]+sk.app);
		cost.text('');
		btnTxt.html("<span class=\"orange\">Maxed<span>");
		btn.addClass('skill_upg');
	}
	else{
		eff.text(sk.pre+sk.effArr[lv-1]+sk.app);
		cost.text(sk.costArr[lv]);
		btnTxt.text("Upgrade");
		btn.addClass('skill_upg');
	}

	//check downgrade btn visibility
	downBtn.show();
	if(lv==0){
		downBtn.hide();
	}
	else if(lv==1){
		for(var i=0; i<TT2.Skills.length; i++){
			if(TT2.Skills[i].precon == selected){
				if(lvList[i]>0){
					downBtn.hide();
				}
			}
		}
	}
};

var refreshCnt = function(){
	var cntDom = $('#skill_used'),
		cnt = 0;

	for(var i=0; i<lvList.length; i++){
		var lv = lvList[i];
		if(lv>0){
			var sk = TT2.Skills[i];
			for(var j=0; j<lv; j++){
				cnt += sk.costArr[j];
			}
		}
	}
	cntDom.text(cnt);
};

var init = function(){

	$('.skill_btn').bind('click', function(o){
		var t = $(o.currentTarget),
			num = t.attr('id').slice(7);

		selected = num;
		refresh();
	})

	$('#skill_upgrade_btn').bind('click', function(o){

		var skill = TT2.Skills[selected-1],
			pre = skill.precon;

		if(lvList[selected-1]<skill.max){
			if(skill.precon==0 || lvList[pre-1]>0){
				lvList[selected-1]+=1;
				refresh();
			}
		}
	})

	$('#skill_downgrade_btn').bind('click', function(o){

		var skill = TT2.Skills[selected-1],
			pre = skill.precon;

		if(lvList[selected-1]>0){
			lvList[selected-1] -= 1;
			if(lvList[selected-1] == 0){
				selected = pre ? pre : selected;
			}
			refresh();
		}
	})

	$('#reset_btn').bind('click', function(o){
		selected = 1;
		for(var i=0;i<lvList.length;i++){
			lvList[i] = 0;
		}
		refresh();
	})

	if(TT2.deserialize(SKILL_LV_STORAGE_NAME)){
		lvList = TT2.deserialize(SKILL_LV_STORAGE_NAME);
	}

	refresh();
}
init()