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
        outputTextC.change();
        outputKeyC.val(JSON.stringify(dictionary));
        outputKeyC.change();
        dictionary = {};
    });

    // Decrypt
    var inputTextD = $("#inputTextD");
    var outputTextD = $("#outputTextD");
    var enterButtonD = $("#enterButtonD");
    var inputKeyD = $("#inputKeyD");

    enterButtonD.click(function () {
        var text = inputTextD.val();
        text = text.split(" ");
        dictionary = inputKeyD.val();
        dictionary = JSON.parse(dictionary);
        dictionary = swap(dictionary);

        for (var i = 0; i < text.length; i++) {
            text[i] = dictionary[text[i]];
        }
        outputTextD.val(text.join(" "));
        outputTextD.change();
    });

    // Text size
    $('textarea').change(function () {
        var val = $(this).val();
        var size = 0;
        if (val.length !== 0) {
            size = val.length + 1;
        }
        if ($(this).prev('.txtSize').length === 0) {
            $(this).parent().prev('.txtSize').text("Size on file: " + size + " Bytes");
        } else {
            $(this).prev('.txtSize').text("Size on file: " + size + " Bytes");
        }
    });
});

function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}
