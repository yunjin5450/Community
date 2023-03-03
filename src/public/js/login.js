const Login = document.getElementById("Login");
const LoginForm = Login.querySelector("form");
const Signup = document.getElementById("goSignup");
const Social = document.getElementById("goSocial");

function goSignup() {
    window.location.href = 'http://localhost:3000/signup'
}

function goSocial() {
    window.location.href = 'http://localhost:3000/social'
}

function GoLogin(event) {
    event.preventDefault();
    const loginID = LoginForm.querySelector('#LoginID');
    const loginPW = LoginForm.querySelector('#LoginPW');

    $.ajax({
        type:"POST",
        url:"/users/login",
        dataType: "json",
        data: {
            id: loginID.value,
            password: loginPW.value
        },
        success: function(response) {
            console.log(response)
            token = response.createToken.accessToken
            localStorage.setItem("id", loginID.value)
            setCookie("Access",`${token}`,1)
            window.location.href = 'http://localhost:3000/main'
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(jqXHR);
        }
    })
}



function setCookie(key, value, expiredays) {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays); // 현재 시각 + 일 단위로 쿠키 만료 날짜 변경
    //todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000)); // 밀리세컨드 단위로 쿠키 만료 날짜 변경
    document.cookie = key + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

Social.addEventListener("click", goSocial)
Signup.addEventListener("click", goSignup)
Login.addEventListener("submit", GoLogin) 