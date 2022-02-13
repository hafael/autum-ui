const GlobalFilters = {
    
    /**
     * Format the given date.
     */
    date(value) {
        return moment(value).local().format('L');
    },

    datetime(value) {
        return moment.unix(value).local().format('LLL');
    },

    fromDateTime(value, format = 'lll') {
        return moment(value).local().format(format);
    },

    round2date(value, format = 'lll') {

        return moment().unix(value).local().format(format);
    },

    fancyDate(value) {
        return moment(value).local().format('dddd,  D \\d\\e MMMM \\d\\e YYYY, h:mm:ss a');
    },

    dateRelativeFromTimestamp(value) {
        return moment.unix(value).local().locale('pt-br').fromNow();
    },

    dateRelativeShort(value) {
        return moment(value).local().locale('pt-br-short').fromNow();
    },

    dateRelative(value) {
        return moment(value, 'YYYY-MM-DD HH:mm').local().locale('pt-br').fromNow();
    },

    monthDay(value) {
        return moment(value).local().format('MMM DD');
    },

    birthDay(value) {
        return moment(value).local().format('DD \\d\\e MMMM');
    },

    microToAlgo(value) {
        return Number(value) / 1000000;
    },

    algoToMicro(value) {
        return Number(value) * 1000000;
    },
    
    slug(value) {
        return String(value).toLowerCase()
                            .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a')       // Special Characters #1
                            .replace(/[èÈéÉêÊëË]+/g, 'e')       	// Special Characters #2
                            .replace(/[ìÌíÍîÎïÏ]+/g, 'i')       	// Special Characters #3
                            .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o')       	// Special Characters #4
                            .replace(/[ùÙúÚûÛüÜ]+/g, 'u')       	// Special Characters #5
                            .replace(/[ýÝÿŸ]+/g, 'y')       		// Special Characters #6
                            .replace(/[ñÑ]+/g, 'n')       			// Special Characters #7
                            .replace(/[çÇ]+/g, 'c')       			// Special Characters #8
                            .replace(/[ß]+/g, 'ss')       			// Special Characters #9
                            .replace(/[Ææ]+/g, 'ae')       			// Special Characters #10
                            .replace(/[Øøœ]+/g, 'oe')       		// Special Characters #11
                            .replace(/[%]+/g, 'pct')       			// Special Characters #12
                            .replace(/\s+/g, '-')           		// Replace spaces with -
                            .replace(/[^\w\-]+/g, '')       		// Remove all non-word chars
                            .replace(/\-\-+/g, '-')         		// Replace multiple - with single -
                            .replace(/^-+/, '')             		// Trim - from start of text
    },

    cep(value) {
        return String(value).padEnd(5, 0).substr(0, 5) + '-' + String(value).padStart(3, 0).substr(5, 3);
    },

    capitalize(value) {
        if (! value && value !== 0) {
            return '';
        }
        return value.toString().charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    },

    trans(value, def) {
        return value ? window.I18n.trans(value, def) : value;
    },

    limitTo(text, length, clamp) {
        clamp = clamp || '...';
        if(typeof text === 'string'){
            text = text.toString();
            return text.length > length ? text.slice(0, length) + clamp : text;
        }
        return text;
    },

    onlyNumbers(value) {
        return parseInt(String(value).replace(/[^0-9]/g, ""));
    },
    
    int2dec(value, decimals) {
        let div =  String('1').padEnd(decimals + 1, '0');
        return Number(value / Number(div)).toFixed(decimals);
    },

    amt2cts(value, currency, locale) {
        return (value * 100).toLocaleString(locale, {style:"currency", currency: currency});
    },

    cts2amt(value, currency, locale) {

        let currencyFractionDigits = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
        }).resolvedOptions().maximumFractionDigits;

        return (value / 100).toLocaleString(locale, {style:"currency", maximumFractionDigits: currencyFractionDigits});
    },

    cts2amt(value, currency, locale) {

        if(!locale) {
            locale = 'en-US';
        }

        let currencyFractionDigits = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
        }).resolvedOptions().maximumFractionDigits;

        return (value / 100).toLocaleString(locale, {maximumFractionDigits: currencyFractionDigits});
    },

    cts2amts(value, currency, locale) {

        return (value / 100).toLocaleString(locale, {style:"currency", currency: currency});
    },

    _currency(value) {
        value = parseFloat(value);

        if (! isFinite(value) || (! value && value !== 0)){
            return '';
        }

        var stringified = Math.abs(value).toFixed(2);

        var _int = stringified.slice(0, -1 - 2);

        var i = _int.length % 3;

        var head = i > 0
            ? (_int.slice(0, i) + (_int.length > 3 ? window.I18n.currencyThousandsSeparator : ''))
            : '';

        var _float = stringified.slice(-1 - 2).replace('.', window.I18n.currencyFractionSeparator);

        var sign = value < 0 ? '-' : '';

        var symbol = window.I18n.currencySymbol || 'R$';

        return sign + symbol + ' ' + head +
            _int.slice(i).replace(/(\d{3})(?=\d)/g, '$1,') +
            _float;
    },

    dinero(value) {
        return Dinero({amount: value, currency: String(window.Spark.currency)
            .toUpperCase()})
            .setLocale(window.Spark.currencyLocale)
            .toFormat();
    },

    currency(value, symbol = '', precision = 2, decimal = '.', separator = ',', fromCents = true) {
        return window.currency(value, {
            symbol: symbol + ' ',
            precision: precision,
            decimal: decimal,
            separator: separator,
            fromCents: fromCents
        }).format();
    },

    assetAmount(amount, unitName = '', decimals = 0, thousand = '.', fraction = ',') {
        let multiplier = 0;
        if(decimals) {
            multiplier = parseInt(String('1').padEnd(decimals + 1, '0'));
        }
        return window.currency(multiplier ? amount / multiplier  : amount, {
            symbol: unitName + ' ',
            precision: decimals,
            decimal: thousand,
            separator: fraction,
        }).format();
    },

    dec2int(amount, decimals = 0) {
        if(decimals) {
            return Math.abs(amount * parseInt(String('1').padEnd(decimals + 1, '0')));
        }
        return parseInt(String(amount).replace(/[^0-9]/g, ""));
    },
    int2dec(amount, decimals = 0) {
        if(decimals) {
            return Number(Math.abs(amount / parseInt(String('1').padEnd(decimals + 1, '0'))).toFixed(decimals));
        }
        return Number(parseFloat(amount));
    },

    reaisFromCents(value, symbol = 'R$ ') {
        return window.currency(value, {
            symbol: symbol,
            precision: 2,
            decimal: ',',
            separator: '.',
            fromCents: true
        }).format();
    },

    reais(value, symbol = 'R$ ') {
        return window.currency(value, {
            symbol: symbol,
            precision: 2,
            decimal: ',',
            separator: '.',
            fromCents: false
        }).format();
    },

};

export default GlobalFilters;

