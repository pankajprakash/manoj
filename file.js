function create_data()
{
    // let value=id.data[0];
    // let i=id.data[0].id;
    // console.log(value);
    let form="";
    
            form +=" <form id='form_table'>";
            form +="<label for=''>Name &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='name' id='name' class='input_post_form' placeholder='' ><br><br>";

            form +="<label for=''>Email Id  </label>";
            form +="<input type='text' name='email' id='' class='input_post_form' placeholder=''><br><br>";

            form +="<label for=''>Address&nbsp;</label>";
            form +="<input type='text' name='address' id='' class='input_post_form'><br><br>";

            form +="<label for=''>Phone &nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='phone' id='' class='input_post_form'><br><br>";

            form +="<label for=''>Gender&nbsp;&nbsp;</label>";
            form +="<input type='text' name='gender' id=''  class='input_post_form'><br><br>";

            form +="<label for=''>Country&nbsp;</label>";
            form +="<input type='text' name='country' id=''  class='input_post_form'><br><br>";

            form +="<label for=''>state   &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='state' id='' class='input_post_form'><br><br>";
            form +="<input type='submit' name='name' id='' value='submit' >"
            form +="</form>";
            
            document.getElementById("body").innerHTML=form;

            
            form_table.onsubmit = async (e) => {
                e.preventDefault();

                let response = await fetch(' http://192.168.1.10:80/api/auth/register', {
                method: 'POST',
                body: new FormData(form_table)
                });

                let result = await response.json();

                alert(result.message);
            };
}



function deleterecord(id)
    {
        alert("Delete"+id);
        let key=result[id].id;

        fetch('http://192.168.1.10:80/api/user/delete/'+key,{ method: 'DELETE'})
        .then((response) => response.json())
        .then((data) =>  console.log(data))
        .catch(function (err) {
            console.log(err);
        });
    }





    function form_show(id)
{
    let value=id.data[0];
    let i=id.data[0].id;
    console.log(value.name);
    let form="";
    
            form +=" <form id='form_table'>";
            form +="<label for=''>Name &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +=`<input type='text' name='name' id='name' value="${value.name}" class='input_post_form' placeholder='' ><br><br>`;

            form +="<label for=''>Email Id </label>";
            form +="<input type='text' name='email' id='email' value="+value.email+" class='input_post_form' placeholder=''><br><br>";

            form +="<label for=''>Address&nbsp;</label>";
            form +="<input type='text' name='address' id='address' value="+value.address+" class='input_post_form'><br><br>";

            form +="<label for=''>Phone &nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='phone' id='phone' value="+value.phone+" class='input_post_form'><br><br>";

            form +="<label for=''>Gender&nbsp;&nbsp;</label>";
            form +="<input type='text' name='gender' id='gender' value="+value.gender+" class='input_post_form'><br><br>";

            form +="<label for=''>Country&nbsp;</label>";
            form +="<input type='text' name='country' id='country' value="+value.country+" class='input_post_form'><br><br>";

            form +="<label for=''>state  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='state' id='state' value="+value.state+" class='input_post_form'><br><br>";
            form +="<input type='submit' name='name' id='' value='submit'>"
            form +="</form>";
            
            document.getElementById("body").innerHTML=form;
        form_table.onsubmit = async (e) => {
            e.preventDefault();
            
             let name=document.getElementById("name").value;
             let email=document.getElementById("email").value;
             let address=document.getElementById("address").value;
             let phone=document.getElementById("phone").value;
            let gender=document.getElementById("gender").value;
             let country=document.getElementById("country").value;
             let state=document.getElementById("state").value;

            alert(name);

           let response = await fetch('http://192.168.1.10:80/api/user/update/'+i,{ method: 'PUT' ,  body: JSON.stringify({ 
             "name":name,
            "email":email,
           "address" : address,
            "phone":phone,
            "gender":gender,
         "country" :country,
            "state": state
        }),
             headers: { 
                "Content-type": "application/json;"
            } })

             let result = await response.json();

            alert(result.message);
         };

       
}