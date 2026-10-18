function submitForm(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  if(name&&email&&phone){
    document.getElementById('confirmation').innerText='Thankyou'+name+'For registering successfully';
  }else{
    alert('Please fill all the details');
  }
}