let form = document.querySelector("form")
form.addEventListener("submit",function(ele){
    ele.preventDefault()
    let input1 = document.getElementById("task")
    let input2 = document.getElementById("priority")
    let tbody = document.querySelector("tbody")
    let tableRoW = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td1.innerText = input1.value;
    td2.innerText = input2.value;
    tableRoW.append(td1,td2)
    tbody.append(tableRoW)
    let row = document.querySelectorAll("tbody > tr")
    for(let i=0; i< row.length; i++){ 
        if(row[i].getElementsByTagName("td")[1]){
            if(row[i].getElementsByTagName("td")[1].innerText=="High"){
                row[i].style.backgroundColor = "red";
            }else{
                row[i].style.backgroundColor = "green"
            }
        }
    }
    input1.value="";
    input2.value="";
    
})