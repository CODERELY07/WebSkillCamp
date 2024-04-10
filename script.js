// nav
const burger = document.getElementById('hamburger');
burger.onclick = function (){
    let nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
// up
const up = document.getElementById('up');

up.onclick = function() {
    if(up.classList.contains('fa-chevron-down')) {
        up.classList.remove('fa-chevron-down');
        up.classList.add('fa-arrow-up');
    }
};
// login

let loginBtn = document.getElementById('login');

let signup = document.getElementById('signup');

loginBtn.addEventListener("click",()=>{
    window.location.href = 'login.html';
})
signup.addEventListener("click",()=>{
    window.location.href = 'signup.html';
})




