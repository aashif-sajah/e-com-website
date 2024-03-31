// code for the total to be extracted in the billing page from the cart
const totalDisplay=document.querySelector(".space-value-total");
const subtotal = localStorage.getItem("subtotal");
totalDisplay.innerHTML=`${subtotal}`;



// Functions for the text underneath to be updated
function updateContact(){
    var phone=document.getElementById("phn_number").value;
    var mail=document.getElementById("mail").value;
    var detailsTag = document.createElement("p");
    detailsTag.innerHTML="Phone: "+phone+","+"mail: "+mail
    document.getElementById("updated-detail").appendChild(detailsTag)
    document.getElementById("space-value-1").textContent="Phone: "+phone+","+"mail: "+mail
}
function updateContactaddress(){
    var address=document.getElementById("addname").value;
    var name=document.getElementById("name").value;
    var Town=document.getElementById("townname").value;
    var zipcode=document.getElementById("zip").value;
    var countri=document.getElementById("country").value;
    var addDet=document.createElement("p");
    addDet.innerHTML=address+","+Town+","+zipcode+" "+countri;
    document.getElementById("updated-detail-address").appendChild(addDet)
    document.getElementById("space-value").textContent=name
}

// form validation - Event lisntners
document.getElementById("number").addEventListener("input", function(){
    this.value=this.value.replace(/[a-zA-Z]/g, "");
});
document.getElementById("password").addEventListener("input", function(){
    this.value=this.value.replace(/[a-zA-Z]/g, "");
});

document.getElementById("zip").addEventListener("input", function(){
    this.value=this.value.replace(/[a-zA-Z]/g, "");
});


document.getElementById("phn_number").addEventListener("input", function(){
    this.value=this.value.replace(/[a-zA-Z]/g, "");
});


document.getElementById("number").addEventListener("blur", function(){
    if(this.value.length<16){
        alert("Please enter 16 digits only")
    }

});
