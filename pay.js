//using regex
function payValidate() {
    let name = document.forms["PayForm"]["Name"];
    let address = document.forms["PayForm"]["Address"];
    let phone = document.forms["PayForm"]["Phone"];
    let ccnumber = document.forms["PayForm"]["CCNumber"];
    let cchname = document.forms["PayForm"]["CCHName"];
    let cvc = document.forms["PayForm"]["CVC"];
    let done = document.forms["PayForm"]["Submit"];
    
    let errname = document.getElementById("name");
    let erraddress = document.getElementById("address");
    let errphone = document.getElementById("phone");
    let errcnum =document.getElementById("ccnumber");
    let errccholder = document.getElementById("cchname");
    let errccvc = document.getElementById("cvc");
    let submit = document.getElementById("done");

    if (name.value == "") {
        errname.innerHTML = "Name is Required";
        name.focus();
        return false;
    } else if (name.value.length < 8 || name.value.length > 15) {
        errname.innerHTML = "Atleast 8 to 15 characters is required";
        name.focus();
        return false;
    } else {
        errname.innerHTML = "";
    }

    if (address.value == "") {
        erraddress.innerHTML = "Kindly fill Address field";
        address.focus();
        return false;
    } else {
        erraddress.innerHTML = "";
    }

    if (phone.value == "") {
        errphone.innerHTML = "Kindly fill phone number field";
        phone.focus();
        return false;
    } else if (phone.value.length < 10 || phone.value.length > 10) {
        errphone.innerHTML = "Phone number field should contain 10 digits";
        phone.focus();
        return false;
    } else if (phone.value.match(/(?=.*\d[0-9])/)) errphone.innerHTML = "";
    else {
        errphone.innerHTML = "Kindly fill valid phone number";
        phone.focus();
        return false;
    }
    if (ccnumber.value == "") {
        errcnum.innerHTML = "Kindly fill credit card number field";
        ccnumber.focus();  
        return false;
    } else if (ccnumber.value.length < 16 || ccnumber.value.length > 16) {
        errcnum.innerHTML = "card number field should contain only 16 digits";
        ccnumber.focus();
        return false;
    } else if (ccnumber.value.match(/(?=.*\d[0-9])/)) errcnum.innerHTML = "";
    else {
        errcnum.innerHTML = "Kindly fill valid card number";
        ccnumber.focus();
        return false;
    }
    if (cchname.value == "") {
        errccholder.innerHTML = "CCHolder Name is Required";
        cchname.focus();
        return false;
    } else if (cchname.value.length < 8 || cchname.value.length > 25) {
        errccholder.innerHTML = "Atleast 8 to 25 characters is required";
        cchname.focus();
        return false;
    } else {
        errccholder.innerHTML = "";
    }
    if (cvc.value == "") {
        errccvc.innerHTML = "Kindly fill cvc number field";
        cvc.focus();  
        return false;
    } else if (cvc.value.length < 3 || cvc.value.length > 3) {
        errccvc.innerHTML = "cvc number field should contain only 3 digits";
        cvc.focus();
        return false;
    } else if (cvc.value.match(/(?=.*\d[0-9])/)) errccvc.innerHTML = "";
    else {
        errccvc.innerHTML = "Kindly fill valid cvc number";
        cvc.focus();
        return false;
    } 
    submit.innerHTML = "Payment Successful. Thank You come again!";
    done.focus();
    return false;
}