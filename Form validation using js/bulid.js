function validationForm() {
    var n = document.getElementById("name");
    var p = document.getElementById("password");
    var a = document.getElementById("age");
    var e = document.getElementById("email");


    if (n.value == "") {
        document.getElementById("p1").innerHTML = "Please enter your name";
        n.style.border = "2px red solid"
        document.form1.name.focus();
        return false;
    } else {
        document.getElementById("pg").innerHTML = "Your name is valid"

    }
    if (!isNaN(n.value)) {
        document.getElementById("p1").innerHTML = "Please enter only character";
        n.style.border = "2px red solid"
        document.form1.name.focus();
        return false;
    }

    if (a.value == "") {
        document.getElementById("p3").innerHTML = "please enter your age";
        a.style.border = "2px solid red";
        document.form1.age.focus();
        return false;
    }

    if (a.value < 18) {
        document.getElementById("p3").innerHTML = "You're minor not register thi site";
        a.style.border = "2px solid red";
        document.form1.age.focus();
        return false;
    }

    if (e.value == "") {
        document.getElementById("p5").innerHTML = "Please Enter you email id";
        e.style.border = "2px res solid";
        document.form1.email.focus();
        return false;

    }
    if (p.value == "") {
        document.getElementById("p2").innerHTML = "Please enter your password";
        p.style.border = "2px red solid"
        document.form1.password.focus();
        return false;
    }
    if (p.value.length < 8) {
        document.getElementById("p2").innerHTML = "Please enter 8 character long";
        document.form1.password.focus();
        p.style.border = "2px red solid"
        return false;
    }
    return true;
}