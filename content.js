function eddConvertString() {
    var x = document.getElementsByClassName("redactor_editor");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = x[i].innerHTML
            .replace("trusted consultants", "<a href='https://easydigitaldownloads.com/consultants/'>trusted consultants</a>")
            .replace("edd commissions", "<a href='https://easydigitaldownloads.com/downloads/commissions/'>EDD Commissions</a>")
            .replace("frontend submissions", "<a href='https://easydigitaldownloads.com/downloads/frontend-submissions/'>Frontend Submissions</a>")
            .replace("software licensing", "<a href='https://easydigitaldownloads.com/downloads/software-licensing/'>Software Licensing</a>")
            .replace("restrict content pro", "<a href='https://restrictcontentpro.com/'>Restrict Content Pro</a>")
            .replace(" ASON", " <a href='https://easydigitaldownloads.com/downloads/advanced-sequential-order-numbers/'>ASON</a>")
            .replace("recurring payments", "<a href='https://easydigitaldownloads.com/downloads/recurring-payments/'>Recurring Payments</a>")
            .replace("free downloads", "<a href='https://easydigitaldownloads.com/downloads/free-downloads/'>Free Downloads</a>")
            .replace("compare products", "<a href='https://easydigitaldownloads.com/downloads/compare-products/'>Compare Products</a>")
            .replace("discounts pro", "<a href='https://easydigitaldownloads.com/downloads/discounts-pro/'>Discounts Pro</a>")
            .replace("manual purchases", "<a href='https://easydigitaldownloads.com/downloads/manual-purchases/'>Manual Purchases</a>")
            .replace("refund policy", "<a href='http://docs.easydigitaldownloads.com/article/942-terms-and-conditions'>Refund Policy</a>")
            .replace("edd donations", "<a href='https://easydigitaldownloads.com/downloads/donations/'>EDD Donations</a>")
            .replace("fraud monitor", "<a href='https://easydigitaldownloads.com/downloads/fraud-monitor/'>Fraud Monitor</a>")
            .replace("edd stripe", "<a href='https://easydigitaldownloads.com/downloads/stripe/'>EDD Stripe</a>")
            .replace("paypal adaptive payments", "<a href='https://easydigitaldownloads.com/downloads/paypal-adaptive-payments/'>PayPal Adaptive Payments</a>");
    }
    placeCaretAtEnd(x[0]);
}
function eddLoad() {
    var ticket = document.getElementById("wrap");
    ticket.addEventListener("keypress", eddConvertString);
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
document.onload = eddLoad();