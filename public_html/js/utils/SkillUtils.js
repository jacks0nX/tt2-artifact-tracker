/* global SKILL_LEVEL, TT2 */

var TREE_COLUMNS = 3;

var init = function () {
    initGlobalVariables();
    initSkillTrees();
    initEvents();
};

var initSkillTrees = function () {
    var skills = TT2.Skills,
        treeString,
        treeTable,
        tree,
        i;
    for (i = 0; i < skills.length; i++) {
        treeString = '';
        tree = skills[i];
        treeString += initTable(tree);
        treeTable = document.getElementById('skilltree_' + tree.name);
        if (treeTable) {
            treeTable.innerHTML = treeString;
        }
    }
};

var initTable = function (skillTree) {
    var resultString = '',
        rows = skillTree.rows,
        skillLevel,
        buttonId,
        levelId,
        row,
        col,
        x,
        y;
    resultString += '<tr>' +
        '<th></th>' +
        '<th>' + skillTree.name + '</th>' +
        '<th></th>' +
        '</tr>';
    for (y = 0; y < rows.length; y++) {
        row = rows[y];
        resultString += '<tr>';
        for (x = 0; x < row.length; x++) {
            buttonId = '';
            col = row[x];
            resultString += '<td %ID% class="skill_button">';
            if (col) {
                buttonId = 'id="skid_' + col.id + '"';
                levelId = 'id="sklid_' + col.id + '"';
                skillLevel = SKILL_LEVEL[col.id];
                resultString += '<label>' + col.name + '</label>';
                resultString += '<div %LID% class="skill_lv' + (skillLevel > 0 ? ' on' : '') + '">';
                resultString += skillLevel;
                resultString += '</div>';
            }

            resultString = resultString.replace('%ID%', buttonId);
            resultString = resultString.replace('%LID%', levelId);
            resultString += '</td>';
        }

        resultString += '</tr>';
    }

    resultString += '</tr>';
    return resultString;
};

var initEvents = function () {
    $('.skill_button').contextmenu(function () {
        return false;
    });
    $('.skill_button').mouseup(function (event) {
        var button = event.button,
            levelUp = button === 0,
            levelDown = button === 2,
            id = event.currentTarget.id,
            shift = event.shiftKey,
            requiredMatches,
            requiredSkill,
            canLevelDown,
            requiredSum,
            levelField,
            canLevelUp,
            addValue,
            skill,
            value;

        id = id ? id.split('_')[1] : null;

        if (!id || (!levelUp && !levelDown)) {
            return;
        }

        skill = getSkillById(id);
        requiredSkill = getSkillById(skill.reqId);
        levelField = $('#sklid_' + id);
        value = +levelField.text();

        if (levelUp) {
            value += shift ? 5 : 1;
            value = value > skill.maxLvl ? skill.maxLvl : value;
        } else {
            value += shift ? -5 : -1;
            value = value < 0 ? 0 : value;
        }

        requiredMatches = !requiredSkill || SKILL_LEVEL[requiredSkill.id] > 0;

        if (!requiredMatches) {
            return;
        }

        levelField.text(value);
        SKILL_LEVEL[id] = value;
        saveGlobalSkillVariables();
    });
};

var getSkillById = function (id) {
    var skillTrees = TT2.Skills,
        skillTree,
        columns,
        column,
        rows,
        i,
        y,
        x;

    for (i = 0; i < skillTrees.length; i++) {
        skillTree = skillTrees[i];
        rows = skillTree.rows;
        for (y = 0; y < rows.length; y++) {
            columns = rows[y];
            for (x = 0; x < columns.length; x++) {
                column = columns[x];
                if (column && column.id === +id) {
                    return column;
                }
            }
        }
    }

    return null;
};

var getSkillTreeSum = function (skillTree) {
    var rows = skillTree.rows,
        resultCost = 0,
        columns,
        column,
        y,
        x;

    for (y = 0; y < rows.length; y++) {
        columns = rows[y];
        for (x = 0; x < columns.length; x++) {
            column = columns[x];
            if (column) {
                // TODO real cost
                resultCost += SKILL_LEVEL[column.id];
            }
        }
    }

    return resultCost;
};

init();