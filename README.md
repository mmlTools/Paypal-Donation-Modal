# Paypal Donation Modal using Bootstrap
 Button that creates a PayPal donation form when clicked

## How to build a button
```javascript
$("#donate").donationModal({
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
        buttonHTML: '<i class="fab fa-paypal"></i> Continue to paypal'
    });
```

## Settings
- currencies - Array of paypal available currencies, pick the ones you need from the list ['EUR', 'USD', 'AUD', 'BRL', 'CAD', 'CNY', 'CZK', 'DKK', 'HKD', 'HUF', 'ILS', 'JPY', 'MYR', 'MXN', 'TWD', 'NZD', 'NOK', 'PHP', 'PLN', 'GBP', 'RUB', 'SGD', 'SEK', 'CHF', 'THB']
- modalSize - By default, modal size is set to sm but you can chose between sm, md and lg
- email - Your paypal email (attention email not .me link)
- selectedCurrency - The default selected currency in the list, by default is 'EUR'
- defaultAmount - Initial donation amount, by default is 2.99
- amountLabel - Text that appears as label for the donation form, by default is 'Donation amount'
- itemName - Used if you want to catch the log from IPN, by default is, 'Donation'
- itemNumber - Item SKU used if you want to catch the log from IPN, by default is, '000001'
- redirectSuccess - Full path where you want your user to be redirected if donation is complete
- redirectFailed - Full path where you want your user to be redirected if donation failed
- buttonHTML - Text that you want to apper on your button, by default is  Continue to paypal

![image](https://user-images.githubusercontent.com/11877277/168586484-fc3e867b-4554-46e9-8df5-0fe1c415dc3e.png)
