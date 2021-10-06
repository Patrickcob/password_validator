function ValidateForm() {
    var validationResult = true;
    str = "";
    var i = 0;
    var enforceWhenEmpty = true;
    var value = window.document.frmEdt.pwd1.value;
    if (enforceWhenEmpty || !enforceWhenEmpty && value != '') {
        var lengthRegex = new RegExp("^[ -ÿ]{8,80}$");
        var hexa32_255Regex = new RegExp("[ -/:-ÿ]");
        var numberRegex = new RegExp("[0-9]");
        if (!lengthRegex.test(value) || !hexa32_255Regex.test(value) || !numberRegex.test(value)) {
            AccessibilityForm.addValidationError("Your password must have a minimum of 8 characters and must contain at least 1 numeric and 1 alphabetic or special character.", window.document.frmEdt.pwd1);
            validationResult = false;
        }
    }
    str = trim(window.document.frmEdt.pwd2.value);
    if (str.length < 0) {
        AccessibilityForm.addValidationError("Your password must have a minimum of 8 characters and must contain at least 1 numeric and 1 alphabetic or special character.", window.document.frmEdt.pwd2);
        validationResult = false;
    } else if (str.length > 80) {
        AccessibilityForm.addValidationError("Your password must have a minimum of 8 characters and must contain at least 1 numeric and 1 alphabetic or special character.", window.document.frmEdt.pwd2);
        validationResult = false;
    }
    if (HasInvalidChar(str)) {
        AccessibilityForm.addValidationError("Invalid character!", window.document.frmEdt.pwd2);
        validationResult = false;
    }
    str = trim(window.document.frmEdt.fname.value);
    var nameReg = /^[a-zéèëêçîïòôöùûüàâäÿ]+[a-zéèëêçîïòôöùûüàâäÿ \-`‘’'.]*[a-zéèëêçîïòôöùûüàâäÿ.]$/i;
    var regextst = nameReg.test(str);
    if ((str.length < 2) || (str.length > 20)) {
        AccessibilityForm.addValidationError("You must enter a valid first name (2-20 characters).", window.document.frmEdt.fname);
        validationResult = false;
    } else if (str.length >= 2 && !regextst) {
        AccessibilityForm.addValidationError("Special/international characters are not permitted, please enter a valid name.", window.document.frmEdt.fname);
        validationResult = false;
    }
    str = trim(window.document.frmEdt.lname.value);
    var nameReg = /^[a-zéèëêçîïòôöùûüàâäÿ]+[a-zéèëêçîïòôöùûüàâäÿ \-`‘’'.]*[a-zéèëêçîïòôöùûüàâäÿ.]$/i;
    var regextst = nameReg.test(str);
    if ((str.length < 2) || (str.length > 30)) {
        AccessibilityForm.addValidationError("You must enter a valid last name (2-30 characters).", window.document.frmEdt.lname);
        validationResult = false;
    } else if (str.length >= 2 && !regextst) {
        AccessibilityForm.addValidationError("Special/international characters are not permitted, please enter a valid name.", window.document.frmEdt.lname);
        validationResult = false;
    }
    str = trim(window.document.frmEdt.email.value);
    var emailPat = /^(?!\.)([a-zA-Z0-9._+'-](?!\.\.)(?!\.\@))+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,6}$/;
    var regextst = emailPat.test(str);
    if ((str.length < 1) || (str.length > 60) || (str.length > 0 && regextst == false)) {
        AccessibilityForm.addValidationError("You must enter a valid e-mail address.", window.document.frmEdt.email);
        validationResult = false;
    }
    cStr = trim(window.document.frmEdt.postalcode.value);
    var cndRex = /^([abceghjklmnprstvxy]\d[abceghjklmnprstvwxyz])[ -]{0,1}(\d[abceghjklmnprstvwxyz]\d)$/i;
    var usRex = /^\d{5}$/;
    var countryCode = document.frmEdt.country.value;
    if (!cndRex.test(cStr) && countryCode == 'CA' && cStr.length != 0) {
        AccessibilityForm.addValidationError("Invalid format, Canadian postal code should follow this format: A1A 1A1", window.document.frmEdt.postalcode);
        validationResult = false;
    } else if (!usRex.test(cStr) && countryCode == 'US' && cStr.length != 0) {
        AccessibilityForm.addValidationError("Invalid entry, United States zip code must contain 5 digits.", window.document.frmEdt.postalcode);
        validationResult = false;
    } else if (cStr.length > 10) {
        AccessibilityForm.addValidationError("You must enter a postal code.", window.document.frmEdt.postalcode);
        validationResult = false;
    } else if ((countryCode === 'US' || countryCode === 'CA') && cStr.length < 1) {
        AccessibilityForm.addValidationError("You must enter a postal code.", window.document.frmEdt.postalcode);
        validationResult = false;
    }
    if (HasInvalidChar(str)) {
        AccessibilityForm.addValidationError("Invalid character!", window.document.frmEdt.postalcode);
        validationResult = false;
    }
    str = GetSelected(window.document.frmEdt.province_lst);
    if (str.length < 2) {
        AccessibilityForm.addValidationError("You must enter a valid province/state.", window.document.frmEdt.province_lst);
        validationResult = false;
    } else if (str.length > 2) {
        AccessibilityForm.addValidationError("You must enter a valid province/state.", window.document.frmEdt.province_lst);
        validationResult = false;
    }
    if ((document.frmEdt.country.value == "CA") || (document.frmEdt.country.value == "US") || (document.frmEdt.country.value == "")) {
        strArea = document.frmEdt.phone_Area.value;
        strLocal = document.frmEdt.phone_Local.value;
        if (((!IsNumeric(strArea)) || (strArea < 100) || (strArea > 999)) || (CountNumber(strLocal) != 7)) {
            AccessibilityForm.addValidationError("You must enter a valid phone number.", document.frmEdt.phone_Area);
            validationResult = false;
        }
    } else {
        strCountry = document.frmEdt.phone_Country.value;
        strInter = document.frmEdt.phone_Inter.value;
        if ((CountNumber(strCountry) == 0 && CountNumber(strInter) == 0) || CountNumber(strCountry) == 0) {
            AccessibilityForm.addValidationError("You must enter a valid phone number.", document.frmEdt.phone_Country);
            validationResult = false;
        } else if ((!IsNumeric(strCountry)) && CountNumber(strInter) != 0) {
            AccessibilityForm.addValidationError("Only numbers are allowed for the phone number. A valid number has 10 to 14 numerical digits.", document.frmEdt.phone_Country);
            validationResult = false;
        } else if ((!IsNumeric(strInter)) || (strInter.length < 7)) {
            AccessibilityForm.addValidationError("Only numbers are allowed for the phone number. A valid number has 10 to 14 numerical digits.", document.frmEdt.phone_Inter);
            validationResult = false;
        }
    }
    str = GetSelected(window.document.frmEdt.country);
    if (str.length < 0) {
        AccessibilityForm.addValidationError("You must enter a valid country.", window.document.frmEdt.country);
        validationResult = false;
    } else if (str.length > 3) {
        AccessibilityForm.addValidationError("You must enter a valid country.", window.document.frmEdt.country);
        validationResult = false;
    }
    return validationResult;
}

function InitializeForm() {
    window.document.frmEdt.pwd1.maxLength = 80;
    window.document.frmEdt.pwd2.maxLength = 80;
    window.document.frmEdt.fname.maxLength = 20;
    window.document.frmEdt.lname.maxLength = 30;
    window.document.frmEdt.email.maxLength = 60;
    document.frmEdt.phone_Area.maxLength = 3;
    document.frmEdt.phone_Local.maxLength = 8;
    document.frmEdt.phone_Country.maxLength = 3;
    document.frmEdt.phone_Inter.maxLength = 11;
    return true;
}

function onLoadFunction() {
    disableHrefStatus();
    CtrlPhoneInit_phone();
    InitializeForm();
}