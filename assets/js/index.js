let newButton = document.querySelector(".button");
let newTbody = document.querySelector("tbody")
newButton.addEventListener("click", function () {
    let Name = document.getElementById("Name").value;
    let Price = document.getElementById("Price").value;
    let Count = document.getElementById("Count").value;
    let Category = document.getElementById("Category").value;

    if (!Name.trim().length) {
        alert("Please Input Product Name")
    }
    else {
        if (!Price.trim().length) {
            alert("Please Input Produt Price")
        }
        else {
            if (!Count.trim().length) {
                alert("Please Input Product Count")
            }
            else {
                if (!Category.trim().length) {
                    alert("Please Input Produc Category")
                }
                else{
                    newTbody.innerHTML +=
                    `<tr>
                         <td class="ad">${Name}</td>
                         <td>${Price}</td>
                         <td>${Count}</td>
                         <td>${Category}</td>
                    </tr>`
                
                }
                
            }
        }
    }
})
document.getElementById("search").onkeyup=function(){

    let query = this.value.trim().toUpperCase();
    let table=document.getElementsByTagName("table")[0];
    let tableRow = document.getElementsByTagName("tr")
    let namesRow = document.querySelectorAll("tr .ad");
    for (let i = 0; i < namesRow.length; i++) {
        if (namesRow[i].textContent.toUpperCase().includes(query)) {
            tableRow[i].style.display=""
        }
        else{
            tableRow[i].style.display="none"
        }
        
    }
    // console.log(query);
}
  
 
 

