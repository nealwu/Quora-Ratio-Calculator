function checkThousand(string) {
    return string.indexOf('k') != -1;
}

function removeCommas(string) {
    return string.replace(/,/g, '')
}

var upvotes = 0;
var upvotesString = $('.numbers')[0].innerHTML;

if (checkThousand(upvotesString)) {
    upvotesString = $('.more_link:contains(" more")')[0].innerHTML;
    upvotes = parseInt(upvotesString) + 4;
} else {
    upvotes = parseInt(upvotesString);
}

var viewsString = $('span:contains(" views")');
viewsString = viewsString[viewsString.length - 1].innerHTML;
var startIndex = viewsString.indexOf('<strong>') + 8;
var views = parseInt(removeCommas(viewsString.substring(startIndex)));
var ratio = 100.0 * upvotes / views;
var ratioString = '<strong>' + ratio.toFixed(2) + '%</strong> upvote-to-view ratio';
$('.view_count').append($('<div>').html(ratioString));
$('.answer_voters, .board_item_voters').append($('<div>').html(ratioString));