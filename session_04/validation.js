function validate() {
  if( document.myForm.Name.value == "")
{
   alert( "Please provide your name!" );
   document.myForm.Name.focus() ;
   return false;
}

if( document.myForm.EMail.value == "")
{
   alert( "Please provide your EMail!");
   document.myForm.EMail.focus();
   return false;
}

var emailID = document.myForm.EMail.value;
atpos = emailID.indexOf("@");
dotpos = emailID.LASTIndexOf(".");

if (atpos < 1 || ( dotpos - atpos < 2 )) {
   alert("Please enter correct email ID")
   document.myForm.EMail.focus() ;
   return false;
}

if( document.myForm.EMail.value == "")
{
   alert("Please provide a postcode i the format #### ###.");
   document.myForm.Postcode.focus() ;
   return false;
}

if( document.myForm.Choice.value == "-1")
{
   alert( "Please select your choice!");
   return false;
}
return( true );
}
