function eddStrings() {
    var strings = [
        "trusted consultants",
        "edd commissions",
        "frontend submissions",
        "software licensing",
        "restrict content pro",
        "ASON",
        "recurring payments",
        "free downloads",
        "compare products",
        "discounts pro",
        "manual purchases",
        "refund policy",
        "edd donations",
        "fraud monitor",
        "edd stripe",
        "paypal adaptive payments"
    ];
    return strings;
}
function eddURLs() {
    var urls = [
        "https://easydigitaldownloads.com/consultants/",
        "https://easydigitaldownloads.com/downloads/commissions/",
        "https://easydigitaldownloads.com/downloads/frontend-submissions/",
        "https://easydigitaldownloads.com/downloads/software-licensing/",
        "https://restrictcontentpro.com/",
        "https://easydigitaldownloads.com/downloads/advanced-sequential-order-numbers/",
        "https://easydigitaldownloads.com/downloads/recurring-payments/",
        "https://easydigitaldownloads.com/downloads/free-downloads/",
        "https://easydigitaldownloads.com/downloads/compare-products/",
        "https://easydigitaldownloads.com/downloads/discounts-pro/",
        "https://easydigitaldownloads.com/downloads/manual-purchases/",
        "http://docs.easydigitaldownloads.com/article/942-terms-and-conditions",
        "https://easydigitaldownloads.com/downloads/donations/",
        "https://easydigitaldownloads.com/downloads/fraud-monitor/",
        "https://easydigitaldownloads.com/downloads/stripe/",
        "https://easydigitaldownloads.com/downloads/paypal-adaptive-payments/"
    ];
    return urls;
}
function eddConvertString() {
    var x = document.getElementsByClassName("redactor_editor");
    var strings = eddStrings();
    var urls = eddURLs();
    var i;
    var ii;
    for (i = 0; i < x.length; i++) {
        for (ii = 0; ii < strings.length; ii++) {
            if (x[i].innerHTML.indexOf(" " + strings[ii]) > -1) {
                x[i].innerHTML = x[i].innerHTML.replace(strings[ii], eddLink(strings[ii], urls[ii]));
                placeCaretAtEnd(x[0]);
            }
        }
    }
}
function eddLoad() {
    var ticket = document.getElementById("wrap");
    if (ticket != null) {
        ticket.addEventListener("keypress", eddConvertString);
    }
}
function eddLink(string, url) {
    var url = "<a href='" + url + "'>" + string + "</a>";
    return url;

}
// copied from http://stackoverflow.com/a/4238971
function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
        && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}
function eddListStrings() {
    var strings = eddStrings();
    var urls = eddURLs();
    var gohere = document.getElementById( "eddstringlist" );
    var output = '<br/>';
    var i;
    for (i = 0; i < strings.length; i++) {
        output = output + "<a href='" + urls[i] + "'>" + strings[i] + "</a><br/>";
    }
    if ( gohere != null ) {
         gohere.innerHTML = output;
    }
}
document.onload = eddLoad() + eddListStrings();