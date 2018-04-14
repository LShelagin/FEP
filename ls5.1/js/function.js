var str = 'Some string';
var strWithSpaces = '         Some               string          ';
var result = '';

function last(str, result) {
    for (var i = 0; i < str.length; i++) {
        result = str[i];
    }
    return result;
}

console.log('Последний символ строки "Some string" - ', last(str, result));

function withoutLast(str, result) {
    for (var i = 0; i < (str.length - 1); i++) {
        result += str[i];
    }
    return result;
}

console.log('Строка "Some string" без последнего символа - ', withoutLast(str, result));

function reversStr(str, result) {
    for (var i = str.length-1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log('Отзеркаленая строка "Some string - "', reversStr(str, result));

function spaces(strWithSpaces) {
    for (var i = 0; i < strWithSpaces.length; i++) {
        if (strWithSpaces[i] != ' '){
            result += strWithSpaces[i];
            if (strWithSpaces[i + 1] == ' '){
                result += ' ';
            }
        }
    }
    return result;
}

console.log('"         Some               string          " без лишних пробелов', spaces(strWithSpaces))