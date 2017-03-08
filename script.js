var dictionary = {};

$(function () {
    // Encrypt & Compress
    var inputTextC = $("#inputTextC");
    var outputTextC = $("#outputTextC");
    var enterButtonC = $("#enterButtonC");
    var outputKeyC = $("#outputKeyC");

    enterButtonC.click(function () {
        var iterator = 0;
        var text = inputTextC.val();
        text = text.split(" ");
        for (var i = 0; i < text.length; i++) {
            if (dictionary.hasOwnProperty(text[i])) {
                text[i] = dictionary[text[i]];
            } else {
                dictionary[text[i]] = iterator;
                text[i] = dictionary[text[i]];
                iterator++;
            }
        }
        outputTextC.val(text.join(" "));
        outputKeyC.val(JSON.stringify(dictionary));
        dictionary = {};
    });

    // Decrypt
    var inputTextD = $("#inputTextD");
    var outputTextD = $("#outputTextD");
    var enterButtonD = $("#enterButtonD");
    var inputKeyD = $("#inputKeyD");

    enterButtonD.click(function () {
        var text = inputTextD.val();
        console.log(text);
        text = text.split(" ");
        dictionary = inputKeyD.val();
        dictionary = JSON.parse(dictionary);
        dictionary = swap(dictionary);
        console.log(dictionary);

        for (var i = 0; i < text.length; i++) {
            console.log(text[i]);
            text[i] = dictionary[text[i]];
            console.log(text[i]);
        }
        outputTextD.val(text.join(" "));
        console.log(outputTextD.val());
    });
});

function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}
