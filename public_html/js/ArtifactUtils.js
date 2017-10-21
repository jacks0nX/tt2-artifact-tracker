var relicsPerSec = 0,
    relicsBestStage = 0,
    relicsFarmStage = 0,
    farmTime = 0,
    artLvArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    artToLvArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    RELIC_PER_SEC_STORAGE_NAME = 'tt2_relic_per_sec',
    RELIC_BEST_STORAGE_NAME = 'tt2_relic_at_best',
    FARM_TIME_STORAGE_NAME = 'tt2_farm_time',
    FARM_STAGE_STORAGE_NAME = 'tt2_farm_stage',
    ART_LV_STORAGE_NAME = 'tt2_art_lv_arr',
    ART_TO_LV_STORAGE_NAME = 'tt2_art_to_lv_arr',
    relicCalcMult1 = 3,
    relicCalcMult2 = 1.5,
    relicCalcBase = 1.21,
    relicCalcExpo = .48,
    relicCalcOffset = -110;

var init = function () {

    //TT2.serialize(RELIC_PER_SEC_STORAGE_NAME, 0);
    //TT2.serialize(RELIC_BEST_STORAGE_NAME, 0);
    //TT2.serialize(FARM_TIME_STORAGE_NAME, 0);
    //TT2.serialize(FARM_STAGE_STORAGE_NAME, 4800);

    if (TT2.deserialize(ART_LV_STORAGE_NAME)) {
        artLvArr = TT2.deserialize(ART_LV_STORAGE_NAME);
    }
    if (TT2.deserialize(ART_TO_LV_STORAGE_NAME)) {
        artToLvArr = TT2.deserialize(ART_TO_LV_STORAGE_NAME);
    }

    if (TT2.deserialize(RELIC_PER_SEC_STORAGE_NAME)) {
        relicsPerSec = TT2.deserialize(RELIC_PER_SEC_STORAGE_NAME);
        $('.farm_per_second').val(relicsPerSec);
        $('.farm_per_hour').val(TT2.numFormat(relicsPerSec * 60 * 60));
    }
    if (TT2.deserialize(FARM_STAGE_STORAGE_NAME)) {
        relicsFarmStage = TT2.deserialize(FARM_STAGE_STORAGE_NAME);
        $('.farm_stage').val(relicsFarmStage);
        calcRelicsFromStage();
    }
    if (TT2.deserialize(FARM_TIME_STORAGE_NAME)) {
        farmTime = TT2.deserialize(FARM_TIME_STORAGE_NAME);
        $('.farm_time').val(getFarmTimeString(farmTime));
    }

    var artiTable = '<tr>' +
        '<th>??</th>' +
        '<th>Tier</th>' +
        '<th>Icon</th>' +
        '<th>Name</th>' +
        '<th>Effect</th>' +
        // '<th>Effect<br>per Lv.</th>'+
        // '<th>Dmg<br>per Lv.</th>'+
        // '<th>Max<br>Lv.</th>'+
        '<th>Current<br>Lv.</th>' +
        '<th>Cur<br>Eff</th>' +
        '<th>Cur<br>Dmg</th>' +
        '<th>??</th>' +
        '<th>??  to</th>' +
        '<th>??  Cost<span class="tce_mark" title="Based on the data filled in \'Optimiser Page\'">?</span></th>' +
        '</tr>';

    for (var i = 0; i < TT2.Artifacts.length; i++) {

        var a = TT2.Artifacts[i];

        artiTable += '<tr class="tr_color' + a.tier + '">' +
            '<td align="right">' + (i + 1) + '</td>' +
            '<td align="middle" class="color' + a.tier + '"><b>' + a.tier + '</b></td>' +
            '<td><img src="./img/a' + a.id + '.png" width="47" height="47"></td>' +
            '<td align="left" class="small">' + a.name + '</td>' +
            '<td class="small">' + a.effect + '</td>' +
            // '<td>'+ a.addupPerLvl +' <span class="small colorC">'+ a.app +'</span></td>'+
            // '<td>'+ 100 * a.damPerLvl +'<span class="small colorC"> %</span></td>'+
            // '<td>'+ (a.maxLvl ? '<span style="color:#d2b96a;">'+ a.maxLvl +'</span>':'8') +'</td>'+

            '<td class="small" style="text-align:center;">' + //Cur Lv input
            '<input class="art_cur_input" id="ai' + i + '" value="' + artLvArr[i] + '" min="0" max="' + (a.maxLvl ? a.maxLvl : '') + '" step="1" style="width:50px" type="number">' +
            '<span style="color:#d2b96a;"> / ' + (a.maxLvl ? a.maxLvl : '&infin;') + '</span>' +
            '</td>' +
            '<td align="left" class="small td_a">' + //Cur Effect
            '<span class="a_mark">' + a.pref + '</span> ' +
            '<span class="aeff orange" id="aeff' + i + '"></span> ' +
            '<span class="colorC"> ' + a.app + '</span>' +
            '</td>' +
            '<td align="middle" class="td_a">' +
            '<span class="a_mark">+</span> ' +
            '<span class="orange adam" id="adam' + i + '"></span>' +
            '<span class="colorC small"> %</span>' +
            '</td>' + //Cur Dmg

            '<td align="right" class="small td_a">' + //Next Cost
            '<span class="orange art" id="a' + i + '"></span> ' +
            '<img src="./img/relic.png" width="15" height="13" style="vertical-align:middle;">' +
            '</td>' +
            '<td class="small" align="left">' + //To Lv Cost

            '<input class="art_to_input" id="atoi' + i + '" value="' + artToLvArr[i] + '" min="1" max="' + (a.maxLvl ? a.maxLvl : '') + '" step="1" style="width:50px" type="number"> ' +
            '<span>=</span> ' +
            '<span class="orange ato" id="ato' + i + '"></span> ' +
            '<img src="./img/relic.png" width="15" height="13" style="vertical-align: middle;">' +
            '</td>' +
            '<td align="right" style="text-align:center;">' + //Estimate
            '<span class="orange atce" id="atce' + i + '"></span> ' +
            '<span class="colorC small"> h</span>' +
            '<span></span><span class="orange atte" id="atte' + i + '"></span><span class="small"> prst</span><span></span>' +
            '</td>' +
            '</tr>';
    }

    var artiDiv = document.getElementById("artifacts");
    artiDiv.innerHTML = artiTable;

    //events
    $('.art_cur_input').bind('change', function (o) {
        refresh();
    });
    $('.art_to_input').bind('change', function (o) {
        refresh();
    });
    $('.farm_stage').bind('blur', function (o) {
        relicsFarmStage = $('.farm_stage')[0].value;
        refresh();
    });
    $('.farm_time').bind('blur', function (o) {
        farmTime = getFarmTimeSeconds();
        refresh();
    });
    refresh();
}

var calcRelicsFromStage = function () {
    var exponentialTerm = relicCalcMult1 * Math.pow(relicCalcBase, Math.pow(relicsFarmStage, relicCalcExpo)),
        firstOrderTerm = relicCalcMult2 * (parseInt(relicsFarmStage) + parseInt(relicCalcOffset)),
        t = Math.max(Math.ceil(exponentialTerm + firstOrderTerm), 0),
        bos = artLvArr[0],
        e = .05 * parseInt(bos),
        l = t + (a = Math.max(Math.ceil(t * e), 0));

    relicsBestStage = l;
    $('.farm_relics').val(relicsBestStage);
    return l;
}

var calcRelicsPerSecond = function () {
    var relicsPerSec = relicsBestStage / getFarmTimeSeconds();
    $('.farm_per_second').val(relicsPerSec);
    $('.farm_per_hour').val(TT2.numFormat(relicsPerSec * 60 * 60));
    return relicsPerSec;
}

var getFarmTimeSeconds = function () {
    var time = $('.farm_time')[0].value.split(':');
    farmTime = (time[1] * 60) + (time[0] * 60 * 60);
    return farmTime;
}

var getFarmTimeString = function (time) {
    time = Number(time);
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var text = ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2);
    $('.farm_time').text(text);
    return text;
}

var refresh = function () {
    var artNum = 0;
    var farmStage = $('.farm_stage')[0].value;
    for (var i = 0; i < TT2.Artifacts.length; i++) {

        var ipt = $('.art_cur_input')[i],
            lv = ipt.value ? +ipt.value : 0,
            max = TT2.Artifacts[i].maxLvl,
            relicDom1 = $('#a' + i),
            effDom = $('#aeff' + i),
            dmgDom = $('#adam' + i);

        if (lv >= 0) {
            var relicNum = TT2.artifactUpg1(i, lv);

            if (max > 0 && lv >= max) {
                lv = max;
                ipt.value = lv;
                relicDom1.html('<span class="small white">MAX</span>');
            } else {
                if (lv == 0) {
                    relicDom1.text('-');
                } else {
                    relicDom1.text(TT2.numFormat(relicNum));
                }

            }
            effDom.text(new Number(parseFloat(TT2.artifactEff(i, lv))).toFixed(2));
            dmgDom.text(TT2.numFormat(TT2.artifactDmg(i, lv) * 100));
            upgToRefresh(i);

            artLvArr[i] = lv;
        } else {
            relicDom1.text('-');
            effDom.text('');
            dmgDom.text('');
        }
        if (lv > 0) {
            artNum += 1;
        }
    }
    refreshArtNum(artNum);
    calcRelicsFromStage();
    TT2.serialize(ART_LV_STORAGE_NAME, artLvArr);
    TT2.serialize(ART_TO_LV_STORAGE_NAME, artToLvArr);
    TT2.serialize(FARM_STAGE_STORAGE_NAME, farmStage);
    TT2.serialize(FARM_TIME_STORAGE_NAME, getFarmTimeSeconds());
    TT2.serialize(RELIC_PER_SEC_STORAGE_NAME, calcRelicsPerSecond());
}

var upgToRefresh = function (i) {
    var ipt1 = $('#ai' + i)[0],
        ipt2 = $('#atoi' + i)[0],
        cur = ipt1.value ? +ipt1.value : 0,
        to = ipt2.value ? +ipt2.value : 0,
        max = TT2.Artifacts[i].maxLvl,
        relicDom2 = $('#ato' + i),
        relic = TT2.artifactUpgTo(i, cur, to);

    if (max > 0 && to > max) {
        ipt2.value = max;
        to = max;
    }

    relic = TT2.artifactUpgTo(i, cur, to);
    artToLvArr[i] = to;

    if (relic > 0) {
        relicDom2.text(TT2.numFormat(relic));
        if (relicsPerSec > 0) {
            var t = 0,
                num = 0;

            if (relicsBestStage > 0) {
                num = Math.ceil(relic / relicsBestStage);
                t = num * farmTime / 3600;
            }

            $('#atce' + i).text(t.toFixed(2));
            $('#atte' + i).text(TT2.numFormat(num));
        }

        if (relicsBestStage > 0) {
            var num = Math.ceil(relic / relicsBestStage);
            $('#atte' + i).text(TT2.numFormat(num));
        }

    } else {
        relicDom2.text('');
        $('#atce' + i).text('');
        $('#atte' + i).text('');
    }
}
init();