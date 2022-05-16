(function($){
    $.fn.donationModal = function(options) {

        let settings = $.extend({
            currencies: ['EUR', 'USD'],
            modalSize: 'md',
            email: '',
            selectedCurrency: 'EUR',
            defaultAmount: 2.99,
            amountLabel: 'Donation amount',
            itemName: 'Donation',
            itemNumber: '000001',
            redirectSuccess: '',
            redirectFailed: '',
            buttonClass: '',
            buttonHTML: '<i class="fab fa-paypal"></i> Continue to paypal'
        }, options);


        let ShowModal = function(){
            let html = '',
                modal = $('<div class="modal" tabindex="-1" role="dialog" id="DonationModal"></div>'),
                dialog = $('<div class="modal-dialog modal-' + settings.modalSize + '" role="document"></div>'),
                content = $('<div class="modal-content"></div>'),
                body = $('<div class="modal-body mt-4"></div>'),
                close = $('<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>');

            close.css({
                position: "absolute",
                right: "5px",
                opacity: 1
            });
            content.append(close);

            html += '<form target="paypal" name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">';
            html += '    <input type="hidden" name="custom" value="587">';
            html += '    <div class="form-group">';
            html += '        <label for="amount">' + settings.amountLabel + '</label>';
            html += '        <div class="input-group flex-nowrap mb-3">';
            html += '            <input class="form-control" id="amount" type="number" name="amount" value="' + settings.defaultAmount + '">';
            html += '            <div class="input-group-append">';
            html += '                <select name="currency_code" class="form-control" aria-label="">';
            $.each(settings.currencies, function (k, v) {
                html += '                    <option value="' + v + '">' + v + '</option>';
            });
            html += '                </select>';
            html += '            </div>';
            html += '        </div>';
            html += '    </div>';
            html += '    <input type="hidden" name="cmd" value="_donations">';
            html += '    <input type="hidden" name="item_name" value="' + settings.itemName + '">';
            html += '    <input type="hidden" name="item_number" value="' + settings.itemNumber + '">';
            html += '    <input type="hidden" name="business" value="' + settings.email + '">';
            html += '    <input type="hidden" name="return" value="' + settings.redirectSuccess + '">';
            html += '    <input type="hidden" name="cancel_return" value="' + settings.redirectFailed + '">';
            html += '    <div class="form-group mb-0 d-flex justify-content-end w-100">';
            html += '        <button type="submit" name="submit" class="btn btn-' + settings.buttonClass + '" id="payout" style="position:relative;">' + settings.buttonHTML + '</button>';
            html += '    </div>';
            html += '</form>';

            body.append(html);
            content.append(body);
            dialog.append(content);
            modal.append(dialog);

            $("body").append(modal);
            modal.modal("show");
        };

        let build = function (e) {
            if(settings.email.length === 0)
            {
                console.log("Donation Button: Invalid business email");
                return false;
            }

            // Create modal element
            $(e).click(function (event) {
                event.preventDefault();
                ShowModal();
            });

            // Clear te DOM after modal element is closed/disappear
            $(document).on("bs.hide.modal", "#DonationModal", function () {
                $(this).remove();
            })
        };

        return this.each(function() {
            return new build(this, settings);
        });

    };
})(jQuery);


$("#demo1").donationModal({
    currencies: ['EUR', 'USD'],
    modalSize: 'sm',
    email: 'yourpaypalemail@email.com',
    selectedCurrency: 'EUR',
    defaultAmount: 2.99,
    amountLabel: 'Donation amount',
    itemName: 'Donation',
    itemNumber: '000001',
    redirectSuccess: '',
    redirectFailed: '',
    buttonClass: 'primary',
    buttonHTML: '<i class="fab fa-paypal"></i> Continue to paypal'
});

$("#demo2").donationModal({
    currencies: ['EUR', 'USD'],
    modalSize: 'md',
    email: 'yourpaypalemail@email.com',
    selectedCurrency: 'EUR',
    defaultAmount: 2.99,
    amountLabel: 'Donation amount',
    itemName: 'Donation',
    itemNumber: '000001',
    redirectSuccess: '',
    redirectFailed: '',
    buttonClass: 'warning',
    buttonHTML: '<i class="fab fa-paypal"></i> Continue to paypal'
});

$("#demo3").donationModal({
    currencies: ['EUR', 'USD'],
    modalSize: 'lg',
    email: 'yourpaypalemail@email.com',
    selectedCurrency: 'EUR',
    defaultAmount: 2.99,
    amountLabel: 'Donation amount',
    itemName: 'Donation',
    itemNumber: '000001',
    redirectSuccess: '',
    redirectFailed: '',
    buttonClass: 'danger',
    buttonHTML: '<i class="fab fa-paypal"></i> Continue to paypal'
});