/* global TT2, ARTIFACT_TO_LEVEL, RELICS_PER_SEC, ARTIFACT_LEVEL, RELICS_BEST_STAGE */
﻿var SHOW_COLUMN_DAMAGE = false,
    SHOW_COLUMN_COST = false,
    SHOW_BUTTON_CLEAR_TO = true,
    SHOW_BUTTON_ADD = true;

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
        '<th align="left">Level</th>' +
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
        value = ARTIFACT_LEVEL[id];
        valueTo = ARTIFACT_TO_LEVEL[id];
        tier = artifact.tier;

        numberString = '<td align="right">' + (i + 1) + '</td>';
        tierString = '<td align="middle" class="color' + tier + '"><b>' + tier + '</b></td>';
        iconString = '<td><img src="./img/a' + id + '.png" width="47" height="47"></td>';
        nameString = '<td align="left" class="small">' + artifact.name + '</td>';
        effect1String = '<td class="small">' + artifact.effect + '</td>';
        levelString = '<td class="small" style="text-align:left;">' +
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
        upgradeString = '<td class="small" align="center">' +
            (SHOW_BUTTON_CLEAR_TO ? '<button type="button" class="clear_to_button" id="cb' + i + '">&#10005</button>' : '') +
            (SHOW_BUTTON_ADD ? '<button type="button" class="add_to_button" id="ab' + i + '">	&#10010;</button>' : '') +
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
        relicsFarmStage = farmStageInputValue();
        refresh();
    });
    $('.farm_time').bind('blur', function () {
        FARM_TIME = getFarmTimeSeconds();
        refresh();
    });
    $('.clear_to_button').bind('click', function (event) {
        var target = event.target,
            targetId = target.id,
            atoiId = targetId.substring(targetId.length - 1, targetId.length);
        $('#atoi' + atoiId).val(0);
        refresh();
    });
    $('.add_to_button').bind('click', function (event) {
        var target = event.target,
            targetId = target.id,
            id = targetId.substring(targetId.length - 1, targetId.length),
            toField = $('#atoi' + id),
            levelField = $('#ai' + id),
            currentLevel = +levelField.val(),
            toLevel = +toField.val(),
            value = toLevel < currentLevel ? currentLevel : toLevel;

        toField.val(value + 100);
        refresh();
    });
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

var refresh = function () {
    var artNum = 0,
        currentInputField,
        currentInputLevel,
        efficiencyField,
        costToUpgrade,
        levelToField,
        damageField,
        artifactMax,
        costField,
        artifact,
        i;

    for (i = 0; i < TT2.Artifacts.length; i++) {
        artifact = TT2.Artifacts[i];
        currentInputField = $('.art_cur_input')[i];
        currentInputLevel = currentInputField.value ? +currentInputField.value : 0;
        levelToField = $('#atoi' + i);
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
                levelToField.prop('readonly', true);
            } else {
                levelToField.prop('readonly', false);

                if (currentInputLevel === 0) {
                    costField.text('-');
                } else {
                    costField.text(TT2.numFormat(costToUpgrade));
                }
            }

            efficiencyField.text(new Number(parseFloat(TT2.artifactEff(i, currentInputLevel))).toFixed(2));
            damageField.text(TT2.numFormat(TT2.artifactDmg(i, currentInputLevel) * 100));
            upgToRefresh(i);
            ARTIFACT_LEVEL[artifact.id] = currentInputLevel;
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

var upgToRefresh = function (i) {
    var artifact = TT2.Artifacts[i],
        ipt1 = $('#ai' + i)[0],
        ipt2 = $('#atoi' + i)[0],
        currentLevel = ipt1.value ? +ipt1.value : 0,
        levelTo = ipt2.value ? +ipt2.value : 0,
        max = artifact.maxLvl,
        relicDom2 = $('#ato' + i),
        upgradeCost = TT2.artifactUpgTo(i, currentLevel, levelTo);

    if (max && levelTo > max) {
        ipt2.value = max;
        levelTo = max;
    }

    ARTIFACT_TO_LEVEL[artifact.id] = levelTo;

    if (upgradeCost > 0) {
        relicDom2.text(TT2.numFormat(upgradeCost));
        if (RELICS_PER_SEC > 0) {
            var t = 0,
                num = 0;

            if (RELICS_BEST_STAGE > 0) {
                num = Math.ceil(upgradeCost / RELICS_BEST_STAGE);
                t = num * FARM_TIME / 3600;
            }

            $('#atce' + i).text(t.toFixed(2));
            $('#atte' + i).text(TT2.numFormat(num));
        }

        if (RELICS_BEST_STAGE > 0) {
            var num = Math.ceil(upgradeCost / RELICS_BEST_STAGE);
            $('#atte' + i).text(TT2.numFormat(num));
        }

    } else {
        relicDom2.text('');
        $('#atce' + i).text('');
        $('#atte' + i).text('');
    }
};

init();