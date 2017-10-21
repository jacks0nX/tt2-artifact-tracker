/* global TT2 */
//var ARTIFACTS_AMOUNT = 40,
var ARTIFACTS_AMOUNT = TT2.Artifacts.length,
    ARTIFACTS_PER_ROW = 4,
    COLUMNS_PER_ROW = ARTIFACTS_PER_ROW * 2;

var calculateNextArtifactCost = function (currentArtifact) {
    var nextArtifact = currentArtifact + 1;
    return nextArtifact * Math.pow(1.31, nextArtifact);
};

var refreshArtNum = function (currentArtifact) {
    var nextCost = calculateNextArtifactCost(currentArtifact),
        nextCostFormatted = TT2.numFormat(Math.round(nextCost));

    $('#art_num').text(currentArtifact);
    $('.art_next_label').show();
    $('#art_next_relic').text(nextCostFormatted);

    if (relicsPerSec && relicsPerSec > 0) {
        var amountTime = 0,
            amountPrestiges = 0;

        if (relicsBestStage > 0) {
            amountPrestiges = Math.ceil(nextCost / relicsBestStage);
            amountTime = amountPrestiges * farmTime / 3600;
        }

        amountPrestiges = TT2.numFormat(amountPrestiges);
        amountTime = amountTime.toFixed(2);
        $('#art_next_time').text(amountTime);
        $('#art_next_rest').text(amountPrestiges);
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
                value = calculateNextArtifactCost(artifactCalcCounter);
                value = TT2.numFormat(value);
                appendString += value;
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