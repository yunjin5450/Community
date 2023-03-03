const Signup = document.getElementById("Signup");
const SignupForm = Signup.querySelector("form");

function GoSignup(event) {
    event.preventDefault()
    const inputID = SignupForm.querySelector("#SignupID");
    const inputPW = SignupForm.querySelector("#SignupPW");
    const inputConfirmPW = SignupForm.querySelector("#SignupConfirmPW");
    const inputNickname = SignupForm.querySelector("#SignupNickname");
    const inputEmail = SignupForm.querySelector("#Email");
    const inputphone = SignupForm.querySelector("#phone");
    const inputBirth = SignupForm.querySelector("#birth");

    $.ajax({
        type:"POST",
        url:"/users/signup",
        dataType: "json",
        data: {
            id: inputID.value,
            password: inputPW.value,
            confirmPassword: inputConfirmPW.value,
            nickname: inputNickname.value,
            Email: inputEmail.value,
            phone: inputphone.value,
            birth: inputBirth.value,
        },
        success: function(response) {
            alert("회원가입 되었습니다.")
            window.location.href = 'http://localhost:3000/'
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR);
        }
    })
}

Signup.addEventListener("submit", GoSignup)