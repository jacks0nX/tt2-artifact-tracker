/* global TT2, FARM_TIME, RELICS_PER_SEC, RELICS_BEST_STAGE */
var ARTIFACTS_AMOUNT = TT2.Artifacts.length,
    ARTIFACTS_PER_ROW = 4,
    COLUMNS_PER_ROW = ARTIFACTS_PER_ROW * 2,
    ARTIFACT_COST_INCREASE = 41;

var calculateNextArtifactCost = function (currentArtifact) {
    var nextArtifact = currentArtifact + 1,
        increasedCost = currentArtifact >= ARTIFACT_COST_INCREASE;

    if (increasedCost) {
        switch (nextArtifact) {
            case 41:
                return 2630000;
            case 42:
                return 4270000;
            case 43:
                return 6540000;
            case 44:
                return 10080000;
            case 45:
                return 15610000;
            case 46:
                return 24290000;
            case 47:
                return 37980000;
            case 48:
                return 59710000;
            case 49:
                return 94320000;
            case 50:
                return 150000000;
            case 51:
                return 238984254;
            case 52:
                return 383276658;
            case 53:
                return 617770000;
            case 54:
                return 1000762986;
            case 55:
                return 1629292101;
            case 56:
                return 2665833882;
            case 57:
                return 4383580899;
            case 58:
                return 7244059100;
            case 59:
                return 12030591780;
            case 60:
                return 20078853674;
        }
    }

    return nextArtifact * Math.pow(1.31, nextArtifact);
};

var refreshArtNum = function (currentArtifact) {
    var nextCost = calculateNextArtifactCost(currentArtifact),
        nextCostFormatted = TT2.numFormat(Math.round(nextCost));

    $('#art_num').text(currentArtifact);
    $('.art_next_label').show();
    $('#art_next_relic').text(nextCostFormatted);

    if (RELICS_PER_SEC && RELICS_PER_SEC > 0) {
        var amountTime = 0,
            amountPrestiges = 0;

        if (RELICS_BEST_STAGE > 0) {
            amountPrestiges = Math.ceil(nextCost / RELICS_BEST_STAGE);
            amountTime = amountPrestiges * FARM_TIME / 3600;
        }

        amountPrestiges = TT2.numFormat(amountPrestiges);
        amountTime = amountTime.toFixed(2);
        $('#art_next_time').text(amountTime);
        $('#art_next_rest').text(amountPrestiges);

        refreshNextArtEstimates(currentArtifact);

    }
};

var refreshNextArtEstimates = function (currentArtifact) {
    var estimateField,
        prestiges = 0,
        estimateText,
        costField,
        time = 0,
        cost,
        i;

    for (i = currentArtifact + 1; i <= ARTIFACTS_AMOUNT; i++) {
        costField = $('#nartid' + i);
        estimateField = $('#narte' + i);
        costField.addClass('half_size');

        cost = calculateNextArtifactCost(i - 1);

        prestiges = Math.ceil(cost / RELICS_BEST_STAGE);

        if (RELICS_BEST_STAGE > 0) {
            time = prestiges * FARM_TIME / 3600;
        }

        time = time.toFixed(1);
        prestiges = TT2.numFormat(prestiges);

        estimateText = '(' + time + 'h, ' + prestiges + ')';
        estimateField.text(estimateText);
    }
};

var initTableContent = function () {
    var table = $('#arti_cost'),
        appendString = '<tbody>',
        rowAmount = Math.ceil(ARTIFACTS_AMOUNT / ARTIFACTS_PER_ROW),
        artifactCounter = 1,
        artifactCalcCounter = 1,
        evenColumn,
        value,
        k,
        i;

    for (i = 0; i < rowAmount; i++) {
        appendString += '<tr>';

        for (k = 0; k < COLUMNS_PER_ROW; k++) {
            evenColumn = k % 2 === 0;
            appendString += '<td align="left" class="';
            appendString += evenColumn ? 'arti_cost_even' : 'arti_cost_odd';
            appendString += '">';

            if (artifactCounter > ARTIFACTS_AMOUNT && artifactCalcCounter > ARTIFACTS_AMOUNT) {

            } else if (evenColumn) {
                appendString += artifactCounter;
                artifactCounter++;
            } else {
                appendString += '<div id="nartid' + artifactCalcCounter + '">';
                value = calculateNextArtifactCost(artifactCalcCounter - 1);
                value = TT2.numFormat(value);
                appendString += value;
                appendString += '</div>';

                appendString += '<div id="narte' + artifactCalcCounter + '" class="half_size next_art_estimate">';
                appendString += '</div>';

                artifactCalcCounter++;
            }

            appendString += '</td>';
        }

        appendString += '</tr>';
    }

    appendString += '</tbody>';
    table.append(appendString);
};

initTableContent();