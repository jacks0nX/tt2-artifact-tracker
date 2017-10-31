if (!TT2) {
    TT2 = {};
}

var RELIC_PER_SEC_STORAGE_NAME = 'tt2_relic_per_sec',
    RELIC_BEST_STORAGE_NAME = 'tt2_relic_at_best',
    FARM_TIME_STORAGE_NAME = 'tt2_farm_time',
    FARM_STAGE_STORAGE_NAME = 'tt2_farm_stage',
    ART_LV_STORAGE_NAME = 'tt2_art_lv_arr',
    ART_TO_LV_STORAGE_NAME = 'tt2_art_to_lv_arr',
    SKILL_LEVEL_STORAGE_NAME = 'tt2_skill_lv_arr',
    CURRENT_RELICS_STORAGE_NAME = 'tt2_current_relics',
    TIER_COLLAPSE_NAME = 'tt2_tier_collapse',
    ARTIFACT_TO_LEVEL = {},
    ARTIFACT_LEVEL = {},
    SKILL_LEVEL = {},
    TIER_COLLAPSE = {},
    RELICS_FARM_STAGE = 0,
    RELICS_BEST_STAGE = 0,
    RELICS_PER_SEC = 0,
    CURRENT_RELICS = 0,
    FARM_TIME = 0,
    relicCalcOffset = -110,
    relicCalcMult2 = 1.5,
    relicCalcBase = 1.21,
    relicCalcExpo = .48,
    relicCalcMult1 = 3;

// GLOBAL VARIABLES
var initGlobalVariables = function () {
    var perSec = TT2.deserialize(RELIC_PER_SEC_STORAGE_NAME),
        stage = TT2.deserialize(FARM_STAGE_STORAGE_NAME),
        time = TT2.deserialize(FARM_TIME_STORAGE_NAME),
        levelTo = TT2.deserialize(ART_TO_LV_STORAGE_NAME),
        level = TT2.deserialize(ART_LV_STORAGE_NAME),
        skills = TT2.deserialize(SKILL_LEVEL_STORAGE_NAME),
        relics = TT2.deserialize(CURRENT_RELICS_STORAGE_NAME),
        tiers = TT2.deserialize(TIER_COLLAPSE_NAME);

    ARTIFACT_LEVEL = level || initEmptyArtifacts();
    ARTIFACT_TO_LEVEL = levelTo || initEmptyArtifacts();
    SKILL_LEVEL = skills || initEmptySkills();
    TIER_COLLAPSE = tiers || initEmptyTiers();

    if (perSec) {
        RELICS_PER_SEC = perSec;
        farmPerSecInputValue(perSec);
        farmPerHourInputValue(TT2.numFormat(perSec * 60 * 60));
    }

    if (stage) {
        RELICS_FARM_STAGE = stage;
        farmStageInputValue(stage);
        calcRelicsFromStage();
    }

    if (time) {
        FARM_TIME = time;
        farmTimeInputValue(getFarmTimeString(time));
    }

    if (relics) {
        CURRENT_RELICS = relics;
        currentRelicsInputValue(relics);
    }
};
var saveGlobalArtifactVariables = function () {
    TT2.serialize(ART_LV_STORAGE_NAME, ARTIFACT_LEVEL);
    TT2.serialize(ART_TO_LV_STORAGE_NAME, ARTIFACT_TO_LEVEL);
    TT2.serialize(FARM_STAGE_STORAGE_NAME, farmStageInputValue());
    TT2.serialize(FARM_TIME_STORAGE_NAME, getFarmTimeSeconds());
    TT2.serialize(RELIC_PER_SEC_STORAGE_NAME, calcRelicsPerSecond());
    TT2.serialize(CURRENT_RELICS_STORAGE_NAME, getCurrentRelicsNumber());
    TT2.serialize(TIER_COLLAPSE_NAME, TIER_COLLAPSE);
};
var saveGlobalSkillVariables = function () {
    TT2.serialize(SKILL_LEVEL_STORAGE_NAME, SKILL_LEVEL);
};

var initEmptyArtifacts = function () {
    var artifacts = TT2.Artifacts,
        map = {},
        artifact,
        i;

    for (i = 0; i < artifacts.length; i++) {
        artifact = artifacts[i];
        map[artifact.id] = 0;
    }

    return map;
};
var initEmptySkills = function () {
    var skillTrees = TT2.Skills,
        map = {},
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

                if (column) {
                    map[column.id] = 0;
                }
            }
        }
    }

    return map;
};
var initEmptyTiers = function () {
    var map = {};
    map.A = false;
    map.B = false;
    map.C = false;
    map.D = false;
    map.E = false;
    return map;
};

// INPUT FIELDS
var inputValue = function (fieldName, value) {
    var field = $('.' + fieldName);

    if (value === null || value === undefined) {
        return field.val();
    }

    field.val(value);
};
var farmStageInputValue = function (value) {
    return inputValue('farm_stage', value);
};
var farmTimeInputValue = function (value) {
    return inputValue('farm_time', value);
};
var farmPerSecInputValue = function (value) {
    return inputValue('farm_per_second', value);
};
var farmPerHourInputValue = function (value) {
    return inputValue('farm_per_hour', value);
};
var farmRelicsInputValue = function (value) {
    return inputValue('farm_relics', value);
};
var currentRelicsInputValue = function (value) {
    if (value) {
        value = TT2.numFormat(value);
    }

    return inputValue('current_relics', value);
};

// CALCULATION
var calcRelicsFromStage = function () {
    var stage = RELICS_FARM_STAGE,
        bosEffect = TT2.artifactEff(0, ARTIFACT_LEVEL[1]),
        baseRelics,
        bosRelics,
        summand1,
        rounded,
        factor,
        relics;

    /*
     * relics_2.2 = np.maximum(0,
        np.round(
            3 * 1.21^stage^0.48
            + 1.5*(stage - 110)
            + 1.002^stage^(1.005*(stage^1.1 * 5e-7 + 1))
        ))
     */

    factor = 3 * Math.pow(1.21, Math.pow(stage, 0.48));
    summand1 = 1.5 * (stage - 110);
    summand2 = Math.pow(1.002, Math.pow(stage, (1.005 * (Math.pow(stage, 1.1) * 5e-7 + 1))));
    rounded = Math.ceil(factor + summand1 + summand2);

    baseRelics = Math.max(rounded, 0);
    bosRelics = baseRelics *  bosEffect - baseRelics;
    relics = baseRelics + bosRelics;

    RELICS_BEST_STAGE = relics;
    farmRelicsInputValue(relics);
    return relics;
};
var calcRelicsPerSecond = function () {
    var relicsPerSec = RELICS_BEST_STAGE / getFarmTimeSeconds();
    farmPerSecInputValue(relicsPerSec);
    farmPerHourInputValue(TT2.numFormat(relicsPerSec * 60 * 60));
    return relicsPerSec;
};
var getFarmTimeSeconds = function () {
    var time = farmTimeInputValue().split(':');
    FARM_TIME = (time[1] * 60) + (time[0] * 60 * 60);
    return FARM_TIME;
};
var getFarmTimeString = function (time) {
    var text,
        h,
        m;

    time = Number(time);
    h = Math.floor(time / 3600);
    m = Math.floor(time % 3600 / 60);
    text = ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2);
    farmTimeInputValue(text);
    return text;
};
var getCurrentRelicsNumber = function () {
    var relicsText = currentRelicsInputValue();
    return TT2.textToNumFormat(relicsText);
};