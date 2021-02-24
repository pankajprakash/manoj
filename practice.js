var tbody=document.getElementById("tbody")
getData()

function getData()

{
fetch('http://192.168.1.10:80/api/users/' )
.then(res => res.json())
.then((apidata)=> display(apidata))
.catch((error)=>{
    console.log(error)
})

}


function display(display1)
{
    let tbl="";
    let res=display1.result;
    // let i=0;
    // console.log(res.length)
    for(let i=0;i< res.length ;i++)
    {
        // console.log(res[i].id)
tbl+=`<tr>
<td> ${res[i].id}</td>
<td> ${res[i].name}</td>

<td><button type="button"  id="${res[i].id}"  onclick="cwlick(${i})" class="btn btn-primary">View</button>
<button type="button" id="${res.id}" class="btn btn-secondary">Secondary</button>
<button type="button" id="${res.id}" class="btn btn-success">Success</button></td>
</tr>
`
  
document.getElementById("tbody").innerHTML=tbl
    }

}



function cwlick(id)
{

console.log(id)
    fetch(" http://192.168.1.10:80/api/users/", {"method":"GET"})
    .then((res)=> res.json())
    .then( (apidata) =>{
let res= apidata.result;  

var table=` <tr>
<td>`+res[id].id+`</td>
<td>`+res[id].name+`</td>

<td>`+res[id].address+`</td>

<td>`+res[id].phone+`</td>

<td>`+res[id].email+`</td>




    
</tr>`
tbody.innerHTML = table;
    } )
}
