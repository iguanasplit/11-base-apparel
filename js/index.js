

document.addEventListener('invalid', (function () {
    return function (e) {
        //prevent the browser from showing default error bubble / hint
        e.preventDefault();
        // optionally fire off some custom validation handler
        // myValidation();
    };
})(), true);

const button = document.getElementById('submitButton');
//   const email = document.getElementById('email');

button.addEventListener('click', function () {

    const email = document.getElementById('email').checkValidity();
    console.log(email);


    let element = document.querySelector('.forma');
    let errorIcon = document.querySelector('.error-icon');
    let errorSubmission = document.querySelector(".errorsubmission");

    if (email) {
        element.classList.remove("invalid");
        // alert("Hey there!");
        errorIcon.style.display = "none";
        errorSubmission.style.display = "none";
    } else {

        element.classList.add("invalid");
        // alert("Hey there!");
        errorIcon.style.display = "inline";
        errorSubmission.style.display = "inline";
    }


}


);
