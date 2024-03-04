function student_data(){
    //alert("yes you clicked submit button");
     let name,city,contact,email;
    //get the values from student information html file
    name=document.getElementById('name').value;
    city=document.getElementById('city').value;
    contact=document.getElementById('contact').value;
    email=document.getElementById('email').value;
    
    //push the content onto localstorage
    localStorage.setItem('name',name);
    localStorage.setItem('city',city);
    localStorage.setItem('contact',contact);
    localStorage.setItem('email',email);

}
