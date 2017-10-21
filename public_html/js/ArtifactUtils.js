/* global TT2 */
﻿var RELIC_PER_SEC_STORAGE_NAME = 'tt2_relic_per_sec',
    RELIC_BEST_STORAGE_NAME = 'tt2_relic_at_best',
    FARM_TIME_STORAGE_NAME = 'tt2_farm_time',
    FARM_STAGE_STORAGE_NAME = 'tt2_farm_stage',
    ART_LV_STORAGE_NAME = 'tt2_art_lv_arr',
    ART_TO_LV_STORAGE_NAME = 'tt2_art_to_lv_arr',
    SHOW_COLUMN_DAMAGE = false,
    SHOW_COLUMN_COST = false,
    relicCalcOffset = -110,
    relicCalcMult2 = 1.5,
    relicCalcBase = 1.21,
    relicCalcExpo = .48,
    relicCalcMult1 = 3,
    relicsFarmStage = 0,
    relicsBestStage = 0,
    relicsPerSec = 0,
    ART_TO_LEVEL = {},
    ART_LEVEL = {},
    farmTime = 0;

var init = function () {
    initGlobalVariables();
    initArtifactsTable();
    initEvents();
    refresh();
};

var initArtifactsTable = function () {
    var artifactsDiv = document.getElementById("artifacts"),
        estimateString,
        effect1String,
        effect2String,
        artifactTable,
        upgradeString,
        numberString,
        damageString,
        levelString,
        tierString,
        iconString,
        costString,
        nameString,
        artifact,
        maxLevel,
        valueTo,
        value,
        tier,
        id,
        i;

    artifactTable = '<tr>' +
        '<th>#</th>' +
        '<th>Tier</th>' +
        '<th align="left">Icon</th>' +
        '<th align="left">Name</th>' +
        '<th align="left">Effect</th>' +
        '<th align="center">Level</th>' +
        '<th>Effect</th>' +
        (SHOW_COLUMN_DAMAGE ? '<th>Damage</th>' : '') +
        (SHOW_COLUMN_COST ? '<th>Cost</th>' : '') +
        '<th>Upgrade</th>' +
        '<th>Prestiges</th>' +
        '</tr>';

    for (i = 0; i < TT2.Artifacts.length; i++) {
        artifact = TT2.Artifacts[i];
        maxLevel = artifact.maxLvl;
        id = artifact.id;
        value = ART_LEVEL[id];
        valueTo = ART_TO_LEVEL[id];
        tier = artifact.tier;

        numberString = '<td align="right">' + (i + 1) + '</td>';
        tierString = '<td align="middle" class="color' + tier + '"><b>' + tier + '</b></td>';
        iconString = '<td><img src="./img/a' + id + '.png" width="47" height="47"></td>';
        nameString = '<td align="left" class="small">' + artifact.name + '</td>';
        effect1String = '<td class="small">' + artifact.effect + '</td>';
        levelString = '<td class="small" style="text-align:center;">' +
            '<input class="art_cur_input" id="ai' + i + '" value="' + value + '" min="0" max="' + (maxLevel || '') + '" step="1" style="width:50px" type="number">' +
            '<span style="color:#d2b96a;"> / ' + (maxLevel ? maxLevel : '&infin;') + '</span>' +
            '</td>';
        effect2String = '<td align="left" class="small td_a">' +
            '<span class="a_mark">' + artifact.pref + '</span> ' +
            '<span class="aeff orange" id="aeff' + i + '"></span> ' +
            '<span class="colorC"> ' + artifact.app + '</span>' +
            '</td>';
        damageString = '<td align="middle" class="td_a">' +
            '<span class="a_mark">+</span> ' +
            '<span class="orange adam" id="adam' + i + '"></span>' +
            '<span class="colorC small"> %</span>' +
            '</td>';
        costString = '<td align="right" class="small td_a">' + //Next Cost
            '<span class="orange art" id="a' + i + '"></span> ' +
            '<img src="./img/relic.png" width="15" height="13" style="vertical-align:middle;">' +
            '</td>';
        upgradeString = '<td class="small" align="left">' +
            '<input class="art_to_input" id="atoi' + i + '" value="' + valueTo + '" min="1" max="' + (maxLevel || '') + '" step="1" style="width:50px" type="number"> ' +
            '<span class="orange ato" id="ato' + i + '"></span> ' +
            '<img src="./img/relic.png" width="15" height="13" style="vertical-align: middle;">' +
            '</td>';
        estimateString = '<td align="right" style="text-align:center;">' +
            '<span class="orange atce" id="atce' + i + '"></span> ' +
            '<span class="colorC small"> h</span>' +
            '<span></span><span class="orange atte" id="atte' + i + '"></span><span class="small"> prst</span><span></span>' +
            '</td>';

        artifactTable += '<tr class="tr_color' + tier + '">';
        artifactTable += numberString;
        artifactTable += tierString;
        artifactTable += iconString;
        artifactTable += nameString;
        artifactTable += effect1String;
        artifactTable += levelString;
        artifactTable += effect2String;
        artifactTable += SHOW_COLUMN_DAMAGE ? damageString : '';
        artifactTable += SHOW_COLUMN_COST ? costString : '';
        artifactTable += upgradeString;
        artifactTable += estimateString;
        artifactTable += '</tr>';
    }

    artifactsDiv.innerHTML = artifactTable;
};

var initEvents = function () {
    $('.art_cur_input').bind('change', function () {
        refresh();
    });
    $('.art_to_input').bind('change', function () {
        refresh();
    });
    $('.farm_stage').bind('blur', function () {
        relicsFarmStage = $('.farm_stage')[0].value;
        refresh();
    });
    $('.farm_time').bind('blur', function () {
        farmTime = getFarmTimeSeconds();
        refresh();
    });
};

var initGlobalVariables = function () {
    var relicsPerSec = TT2.deserialize(RELIC_PER_SEC_STORAGE_NAME),
        farmStage = TT2.deserialize(FARM_STAGE_STORAGE_NAME),
        farmTime = TT2.deserialize(FARM_TIME_STORAGE_NAME),
        levelTo = TT2.deserialize(ART_TO_LV_STORAGE_NAME),
        level = TT2.deserialize(ART_LV_STORAGE_NAME);

    this.ART_LEVEL = level || initEmptyLevels();
    this.ART_TO_LEVEL = levelTo || initEmptyLevels();

    if (relicsPerSec) {
        this.relicsPerSec = relicsPerSec;
        $('.farm_per_second').val(relicsPerSec);
        $('.farm_per_hour').val(TT2.numFormat(relicsPerSec * 60 * 60));
    }

    if (farmStage) {
        this.relicsFarmStage = farmStage;
        $('.farm_stage').val(relicsFarmStage);
        calcRelicsFromStage();
    }

    if (farmTime) {
        this.farmTime = farmTime;
        $('.farm_time').val(getFarmTimeString(farmTime));
    }
};

var initEmptyLevels = function () {
    var emptyObject = {},
        artifact,
        i;

    for (i = 0; i < TT2.Artifacts.length; i++) {
        artifact = TT2.Artifacts[i];
        emptyObject[artifact.id] = 0;
    }

    return emptyObject;
};

var calcRelicsFromStage = function () {
    var exponentialTerm = relicCalcMult1 * Math.pow(relicCalcBase, Math.pow(relicsFarmStage, relicCalcExpo)),
        firstOrderTerm = relicCalcMult2 * (parseInt(relicsFarmStage) + parseInt(relicCalcOffset)),
        t = Math.max(Math.ceil(exponentialTerm + firstOrderTerm), 0),
        bos = ART_LEVEL[1],
        e = .05 * parseInt(bos),
        l = t + (a = Math.max(Math.ceil(t * e), 0));

    relicsBestStage = l;
    $('.farm_relics').val(relicsBestStage);
    return l;
};

var calcRelicsPerSecond = function () {
    var relicsPerSec = relicsBestStage / getFarmTimeSeconds();
    $('.farm_per_second').val(relicsPerSec);
    $('.farm_per_hour').val(TT2.numFormat(relicsPerSec * 60 * 60));
    return relicsPerSec;
};

var getFarmTimeSeconds = function () {
    var time = $('.farm_time')[0].value.split(':');
    farmTime = (time[1] * 60) + (time[0] * 60 * 60);
    return farmTime;
};

var getFarmTimeString = function (time) {
    var text,
        h,
        m;

    time = Number(time);
    h = Math.floor(time / 3600);
    m = Math.floor(time % 3600 / 60);
    text = ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2);
    $('.farm_time').text(text);
    return text;
};

var refresh = function () {
    var farmStage = $('.farm_stage')[0].value,
        artNum = 0,
        currentInputField,
        currentInputLevel,
        efficiencyField,
        costToUpgrade,
        damageField,
        artifactMax,
        costField,
        artifact,
        i;

    for (i = 0; i < TT2.Artifacts.length; i++) {
        artifact = TT2.Artifacts[i];
        currentInputField = $('.art_cur_input')[i];
        currentInputLevel = currentInputField.value ? +currentInputField.value : 0;
        artifactMax = artifact.maxLvl;
        costField = $('#a' + i);
        efficiencyField = $('#aeff' + i);
        damageField = $('#adam' + i);

        if (currentInputLevel >= 0) {
            costToUpgrade = TT2.artifactUpg1(i, currentInputLevel);

            if (artifactMax && currentInputLevel >= artifactMax) {
                currentInputLevel = artifactMax;
                currentInputField.value = currentInputLevel;
                costField.html('<span class="small white">MAX</span>');
            } else {
                if (currentInputLevel == 0) {
                    costField.text('-');
                } else {
                    costField.text(TT2.numFormat(costToUpgrade));
                }

            }
            efficiencyField.text(new Number(parseFloat(TT2.artifactEff(i, currentInputLevel))).toFixed(2));
            damageField.text(TT2.numFormat(TT2.artifactDmg(i, currentInputLevel) * 100));
            upgToRefresh(i);

            ART_LEVEL[artifact.id] = currentInputLevel;
        } else {
            costField.text('-');
            efficiencyField.text('');
            damageField.text('');
        }

        if (currentInputLevel > 0) {
            artNum += 1;
        }
    }

    refreshArtNum(artNum);
    calcRelicsFromStage();
    saveGlobalVariables();
};

var saveGlobalVariables = function () {
    TT2.serialize(ART_LV_STORAGE_NAME, ART_LEVEL);
    TT2.serialize(ART_TO_LV_STORAGE_NAME, ART_TO_LEVEL);
    TT2.serialize(FARM_STAGE_STORAGE_NAME, farmStage);
    TT2.serialize(FARM_TIME_STORAGE_NAME, getFarmTimeSeconds());
    TT2.serialize(RELIC_PER_SEC_STORAGE_NAME, calcRelicsPerSecond());
};

var upgToRefresh = function (i) {
    var artifact = TT2.Artifacts[i],
        ipt1 = $('#ai' + i)[0],
        ipt2 = $('#atoi' + i)[0],
        currentLevel = ipt1.value || 0,
        levelTo = ipt2.value || 0,
        max = artifact.maxLvl,
        relicDom2 = $('#ato' + i),
        upgradeCost = TT2.artifactUpgTo(i, currentLevel, levelTo);

    if (max && levelTo > max) {
        ipt2.value = max;
        levelTo = max;
    }

    ART_TO_LEVEL[artifact.id] = levelTo;

    if (upgradeCost > 0) {
        relicDom2.text(TT2.numFormat(upgradeCost));
        if (relicsPerSec > 0) {
            var t = 0,
                num = 0;

            if (relicsBestStage > 0) {
                num = Math.ceil(upgradeCost / relicsBestStage);
                t = num * farmTime / 3600;
            }

            $('#atce' + i).text(t.toFixed(2));
            $('#atte' + i).text(TT2.numFormat(num));
        }

        if (relicsBestStage > 0) {
            var num = Math.ceil(upgradeCost / relicsBestStage);
            $('#atte' + i).text(TT2.numFormat(num));
        }

    } else {
        relicDom2.text('');
        $('#atce' + i).text('');
        $('#atte' + i).text('');
    }
};

init();