const Social = document.getElementById("Social");
const SocialLoginForm = document.querySelector("form");

const kakaoButton = SocialLoginForm.querySelector("#kakao");
const googleButton = SocialLoginForm.querySelector("#google");
const naverButton = SocialLoginForm.querySelector("#naver");

kakaoButton.addEventListener("click", LoginKakao)
googleButton.addEventListener("click", LoginGoogle)
naverButton.addEventListener("click", LoginNaver)

function LoginKakao(){
    window.location.href = 'http://localhost:3000/auth/kakao' 
}

function LoginGoogle(){
    window.location.href = 'http://localhost:3000/auth/google'   
}

function LoginNaver(){
    window.location.href = 'http://localhost:3000/auth/naver'   
}