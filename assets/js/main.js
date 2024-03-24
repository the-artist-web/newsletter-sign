const $states = document.querySelector("[data-states]"),
$error = document.querySelector("[data-error]"),
$email = document.querySelector("[data-email]"),
$btnStates = document.querySelector("[data-btn-states]"),
$success = document.querySelector("[data-success]");

function emailAddress(value) {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    $btnStates.addEventListener("click", () => {
        if (!value.match(emailRegex)) {
            $error.classList.add("active");
            $email.classList.add("active");
        } else {
            $error.classList.remove("active");
            $email.classList.remove("active");
            $states.classList.add("active");
            $success.classList.add("active");
        };
    });
};