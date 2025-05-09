document.querySelector('form').addEventListener('submit',function(event){
event.preventDefault();

const email=document.querySelector('input[type=email]').value;
const message=document.querySelector('textarea').value;

console.log("ایمیل",email)
console.log("پیام",message)

alert("پیام ارسال شد")

document.querySelector('form').reset();})
