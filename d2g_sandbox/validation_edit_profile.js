//Email,Password,First Name, Last Name, Phone, Street, City, Country, Gender, Birthday, Services...

function confirm_first_name
{
    var x=document.forms["Edit Profile"]["fname"].value;
    if (x==null || x=="")
    {
        alert("Please enter the first name.");
        return false;
    }

    var letters = /^[A-Za-z]+$/;   
    if(!(document.forms["Edit Profile"]["fname"].value.match(letters)))   
    {  
        alert("First name must have alphabets only."); 
        return false; 
    }  
}
function confirm_last_name
{
    var x=document.forms["Edit Profile"]["lname"].value;

    if (x==null || x=="")
    {
        alert("Please enter the last name.");
        return false;
    }

    if(!(document.forms["Edit Profile"]["lname"].value.match(letters)))   
    {
        alert("Last name must have alphabets only"); 
        return false; 
    }
}

function confirm_email
{
    var x=document.forms["Edit Profile"]["email"].value;
    if (x==null || x=="")
    {
        alert("E-mail Id cannot be an empty field");
        return false;
    }

    var x=document.forms["Edit Profile"]["email"].value;

    var y = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!y.test(x))
    {
        alert("Please enter a valid Email address.");
        return false;
    }
}

function confirm_pass
{
var x=document.forms["Edit Profile"]["pass"].value;

    
    if(x.length<=5)
    {
        alert("Password is too short");
        return false;
    }
}
    var x=document.forms["Edit Profile"]["phone"].value;

    var nums = /^[0-9]+$/;   
    if(!(document.forms["Edit Profile"]["phone"].value.match(nums)))   
    {
        alert("Phone number is invalid");
        return false;
    }
    
function confirm_street
{
    var x=document.forms["Edit Profile"]["street"].value;
    
    var letters_nums = /^[A-Za-z0-9]+$/;   
    if(!(document.forms["Edit Profile"]["street"].value.match(letters_nums)))   
    {  
        alert("Street name is invalid."); 
        return false; 
    }  
}

function confirm_city
{
    var x=document.forms["Edit Profile"]["city"].value;
    
    if(!(document.forms["Edit Profile"]["city"].value.match(letters)))   
    {  
        alert("First name must have alphabets only."); 
        return false; 
    }  
      
}
