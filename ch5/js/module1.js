function init(options) {

    function charToNumber(char) {
        return char.charCodeAt(0) - 96;
    }

    function StringManipulation() {
    }

    var StringManipulation = new StringManipulation();

    StringManipulation.contains = function(a, b) {
        return a.indexOf(b) > -1;
    }

    StringManipulation.stringToOrdinal = function(str) {
        var result = "";
        for (var i = 0, len = str.length ; i < len ; i++) {
            result += charToNumber(str[i]);
        }
        return result;
    }

    return StringManipulation;
}

module.exports = init;