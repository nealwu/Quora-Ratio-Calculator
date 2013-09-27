function checkThousand(string) {
    return string.indexOf('k') != -1;
}

function removeCommas(string) {
    return string.replace(/,/g, '')
}

var upvotes = 0;
var upvotesString = $('.numbers')[0].innerHTML;

if (checkThousand(upvotesString)) {
    upvotesString = $('.more_link')[0].innerHTML;
    upvotes = parseInt(upvotesString) + 3;
} else {
    upvotes = parseInt(upvotesString);
}

var views = parseInt(removeCommas($('span:contains(" views")').children()[0].innerHTML));
var ratio = 100.0 * (upvotes - 1) / views;
var ratioString = '<strong>' + ratio.toFixed(2) + '%</strong> upvote-to-view ratio';
$('.view_count').append($('<div>').html(ratioString));
$('.answer_voters').append($('<div>').html(ratioString));