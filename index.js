function convertToRoman() {
    const decimalInput = parseInt(document.getElementById('decimalInput').value);

    if (isNaN(decimalInput) || decimalInput < 1 || decimalInput > 3999) {
        document.getElementById('romanOutput').value = "Invalid Input";
        return;
    }

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';
    let remaining = decimalInput;

    for (let i = 0; i < romanNumerals.length; i++) {
        while (remaining >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            remaining -= romanNumerals[i].value;
        }
    }

    document.getElementById('romanOutput').value = result;
}
