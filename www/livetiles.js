

var exec = require('cordova/exec');

var emptyFunk = function(){};

module.exports = {

    updateAppTile: function (win, lose, options) {
        exec(win || emptyFunk, lose || emptyFunk, "LiveTiles", "updateAppTile", [options]);
    },
    createSecondaryTile: function (win, lose, options) {
        exec(win || emptyFunk, lose || emptyFunk, "LiveTiles", "createSecondaryTile", [options]);
    },
    updateSecondaryTile: function (win, lose, options) {
        exec(win || emptyFunk, lose || emptyFunk, "LiveTiles", "updateSecondaryTile", [options]);
    },
    deleteSecondaryTile: function (win, lose, options) {
        exec(win || emptyFunk, lose || emptyFunk, "LiveTiles", "deleteSecondaryTile", [options]);
    }
};

