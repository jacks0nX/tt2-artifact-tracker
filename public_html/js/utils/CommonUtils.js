if (!TT2) {
    TT2 = {};
}

var RELIC_PER_SEC_STORAGE_NAME = 'tt2_relic_per_sec',
    RELIC_BEST_STORAGE_NAME = 'tt2_relic_at_best',
    FARM_TIME_STORAGE_NAME = 'tt2_farm_time',
    FARM_STAGE_STORAGE_NAME = 'tt2_farm_stage',
    ART_LV_STORAGE_NAME = 'tt2_art_lv_arr',
    ART_TO_LV_STORAGE_NAME = 'tt2_art_to_lv_arr',
    ARTIFACT_TO_LEVEL = {},
    ARTIFACT_LEVEL = {},
    RELICS_PER_SEC = 0,
    RELICS_FARM_STAGE = 0,
    RELICS_BEST_STAGE = 0,
    FARM_TIME = 0;
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
        level = TT2.deserialize(ART_LV_STORAGE_NAME);

    ARTIFACT_LEVEL = level || initEmptyLevels();
    ARTIFACT_TO_LEVEL = levelTo || initEmptyLevels();

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
};
var saveGlobalVariables = function () {
    var farmStage = farmStageInputValue();
    TT2.serialize(ART_LV_STORAGE_NAME, ARTIFACT_LEVEL);
    TT2.serialize(ART_TO_LV_STORAGE_NAME, ARTIFACT_TO_LEVEL);
    TT2.serialize(FARM_STAGE_STORAGE_NAME, farmStage);
    TT2.serialize(FARM_TIME_STORAGE_NAME, getFarmTimeSeconds());
    TT2.serialize(RELIC_PER_SEC_STORAGE_NAME, calcRelicsPerSecond());
};

// INPUT FIELDS
var farmStageInputValue = function (value) {
    var field = $('.farm_stage');

    if (value === null || value === undefined) {
        return field.val();
    }

    field.val(value);
};
var farmTimeInputValue = function (value) {
    var field = $('.farm_time');

    if (value === null || value === undefined) {
        return field.val();
    }

    field.val(value);
};
var farmPerSecInputValue = function (value) {
    var field = $('.farm_per_second');

    if (value === null || value === undefined) {
        return field.val();
    }

    field.val(value);
};
var farmPerHourInputValue = function (value) {
    var field = $('.farm_per_hour');

    if (value === null || value === undefined) {
        return field.val();
    }

    field.val(value);
};
var farmRelicsInputValue = function (value) {
    var field = $('.farm_relics');

    if (value === null || value === undefined) {
        return field.val();
    }

    field.val(value);
};

// CALCULATION
var calcRelicsFromStage = function () {
    var exponentialTerm = relicCalcMult1 * Math.pow(relicCalcBase, Math.pow(RELICS_FARM_STAGE, relicCalcExpo)),
        firstOrderTerm = relicCalcMult2 * (parseInt(RELICS_FARM_STAGE) + parseInt(relicCalcOffset)),
        t = Math.max(Math.ceil(exponentialTerm + firstOrderTerm), 0),
        bos = ARTIFACT_LEVEL[1],
        e = .05 * parseInt(bos),
        l = t + (a = Math.max(Math.ceil(t * e), 0));

    RELICS_BEST_STAGE = l;
    farmRelicsInputValue(RELICS_BEST_STAGE);
    return l;
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