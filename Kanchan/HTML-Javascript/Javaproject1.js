

let Employeeinfo = [

    {
        "ninumber": "ZS502747A", "fullname": "Chris P Bacon", "phone": "07659-831024", "address":
            "123 Elliot Hill", "department": "IT"
    },
    {
        "ninumber": "XS130502B", "fullname": "Miles A Head", "phone": "07666-616680", "address":
            "321 Haha Road", "department": "Sales"
    },
    {
        "ninumber": "MY034526D", "fullname": "Rick O'Shea", "phone": "07440-003065", "address":
            "64 Zoo Lane", "department": "HR"
    },
    {
        "ninumber": "AK311470", "fullname": "Robyn Banks", "phone": "07342-472921", "address":
            "324 Langton Ridgeway", "department": "HR"
    },
    {
        "ninumber": "LY682275B", "fullname": "Lorne Mowers", "phone": "07822-821023", "address":
            "234 Julian Market", "department": "IT"
    },
    {
        "ninumber": "BK227215B", "fullname": "Frank N Stein", "phone": "07661-522545", "address":
            "12 Springfield Grange", "department": "Sales"
    },
    {
        "ninumber": "XB363374C", "fullname": "Hedda Hare", "phone": "07563-758264", "address":
            "54 Blackbird Crescent", "department": "IT"
    },
    {
        "ninumber": "MY501327A", "fullname": "Upton O Goode", "phone": "07401-414740", "address":
            "2 St Margarets Drive", "department": "IT"
    },
    {
        "ninumber": "TT405395B", "fullname": "Marius Quick", "phone": "07870-297789", "address":
            "98 Earl Path", "department": "IT"
    },
    {
        "ninumber": "AZ764036A", "fullname": "Max E Mumm", "phone": "07872-642897", "address":
            "233 Lady Smith Avenue", "department": "IT"
    },
    {
        "ninumber": "ES73841C", "fullname": "Yul B Allwright", "phone": "07750-872412",
        "address": "45 Fountains Broadway", "department": "Sales"
    },
    {
        "ninumber": "WX465470A", "fullname": "Lori Driver", "phone": "07773-782275", "address":
            "65 Burlington Lodge", "department": "HR"
    },
    {
        "ninumber": "AK625470D", "fullname": "Shirley U Care", "phone": "07569-060117",
        "address": "97 Holderness Drive", "department": "HR"
    },
    {
        "ninumber": "SW098272B", "fullname": "Felix Cited", "phone": "07394-529507", "address":
            "32 Banningham Court", "department": "Sales"
    },
    {
        "ninumber": "OB043941D", "fullname": "Sandy Beech", "phone": "07958-301691", "address":
            "3 Third Mount", "department": "Sales"
    }
];
let Reftable = document.createElement("table")

function updateRecord(ref, index) {
    // btn.value="Save";

    ref.cells[0].innerHTML = "<input id='Aninumber' type='text' value='" + Employeeinfo[index].ninumber + "'>";
    ref.cells[1].innerHTML = "<input id='fullname' type='text' value='" + Employeeinfo[index].fullname + "'>";
    ref.cells[2].innerHTML = "<input id='phone' type='text' value='" + Employeeinfo[index].phone + "'>";
    ref.cells[3].innerHTML = "<input id='address' type='text' value='" + Employeeinfo[index].address + "'>";
    ref.cells[4].innerHTML = "<select id='Adepartment'> " +
            "<option value='HR'> HR Department</option>" +
            "<option value='IT'> IT Department</option>" +
            "<option value='Sales'> Sales Department</option>" +
            "</select>";
}

function showRecords() {

    Reftable.innerHTML="";
    let Trow = document.createElement("tr");
    let TD_ninumber = document.createElement("td");
    let TD_fullname = document.createElement("td");
    let TD_phone = document.createElement("td");
    let TD_address = document.createElement("td");
    let TD_department = document.createElement("td");
    let TD_Operations = document.createElement("td");

    TD_ninumber.innerHTML = "<b> NI Number </B>";
    TD_fullname.innerHTML = "<b> Full Name </B>";
    TD_phone.innerHTML = "<b> Contact Number </B>";
    TD_address.innerHTML = "<b> Address </B>";
    TD_department.innerHTML = "<b> Department </B>";
    TD_Operations.innerHTML = "Operations";

    Trow.appendChild(TD_ninumber);
    Trow.appendChild(TD_fullname);
    Trow.appendChild(TD_phone);
    Trow.appendChild(TD_address);
    Trow.appendChild(TD_department);
    Trow.appendChild(TD_Operations);




    Reftable.appendChild(Trow);

    for (let i = 0; i < Employeeinfo.length; i++) {

        let Trow = document.createElement("tr");
        Trow.style.backgroundColor = "lightblue";

        let TD_ninumber = document.createElement("td");
        let TD_fullname = document.createElement("td");
        let TD_phone = document.createElement("td");
        let TD_address = document.createElement("td");
        let TD_department = document.createElement("td");
        let TD_Operations = document.createElement("td");

        TD_ninumber.innerHTML = Employeeinfo[i].ninumber;
        TD_fullname.innerHTML = Employeeinfo[i].fullname;
        TD_phone.innerHTML = Employeeinfo[i].phone;
        TD_address.innerHTML = Employeeinfo[i].address;
        TD_department.innerHTML = Employeeinfo[i].department;

        //TD_Operations.innerHTML = "<input type='button' value='delete'>";
        //TD_Operations.innerHTML += "<input type='button' value='update'>";

        let Btn_delete = document.createElement("input");
        Btn_delete.type = "button";
        Btn_delete.value = "delete";
        Btn_delete.onclick = function () {

            let choice = confirm("are you sure?");
            //alert(choice);
            if (choice == true) {
                Employeeinfo.splice(i, 1);
                showRecords();
            }
        };



        function addRecord() {

            Employeeinfo.push(
                {
                    "ninumber": document.getElementById("ninumber").value,
                    "name": document.getElementById("name").value,
                    "phone": document.getElementById("phone").value,
                    "address": document.getElementById("address").value,
                    "department": document.getElementById("department").value,
                }
            );
        }
    
        function addRecordToDom(ninumber, name, phone, address, department) {
            let spanRecord = document.createElement("div");
            let spanNiNumber = document.createElement("span");
            let spanName = document.createElement("span");
            let spanPhone = document.createElement("span");
            let spanAddress = document.createElement("span");
            let spanDepartment = document.createElement("span");
    
            spanNiNumber.innerHTML = ninumber;
            spanName.innerHTML = name;
            spanPhone.innerHTML = phone;
            spanAddress.innerHTML = address;
            spanDepartment.innerHTML = department;
    
            spanName.style.color = "blue";
            spanRecord.appendChild(spanNiNumber);
            spanRecord.appendChild(spanName);
            spanRecord.appendChild(spanPhone);
            spanRecord.appendChild(spanAddress);
            spanRecord.appendChild(spanDepartment);
    
            document.body.appendChild(spanRecord);
        }

    
        let Btn_update = document.createElement("input");
        Btn_update.type = "button";
        Btn_update.value = "update";
        Btn_update.onclick = function () {

            if (Btn_update.value == "update") {
                Btn_update.value == "Save"
                updateRecord(Trow, i);
            } else {
                let ch=confirm("are you sure???????");
                if (ch==true){

                    Employeeinfo[i].ninumber=document.getElementById("ni").value;
                    Employeeinfo[i].fullname=document.getElementById("fullname").value;
                    Employeeinfo[i].phone=document.getElementById("phone").value;
                    Employeeinfo[i].address=document.getElementById("address").value;
                    Employeeinfo[i].department=document.getElementById("department").value;
                    Employeeinfo[i].Operations=document.getElementById("Operations").value;

                }

                Btn_update.value = "update";
            }
        };


        TD_Operations.appendChild(Btn_delete);
        TD_Operations.appendChild(Btn_update);


        Trow.appendChild(TD_ninumber);
        Trow.appendChild(TD_fullname);
        Trow.appendChild(TD_phone);
        Trow.appendChild(TD_address);
        Trow.appendChild(TD_department);
        Trow.appendChild(TD_Operations);






        Reftable.appendChild(Trow);

  
    }
    document.body.appendChild(Reftable);

}



function filterrecords() {

    let Reftable = document.createElement("table")
    let Trow = document.createElement("tr");
    let TD_ninumber = document.createElement("td");
    let TD_fullname = document.createElement("td");
    let TD_phone = document.createElement("td");
    let TD_address = document.createElement("td");
    let TD_department = document.createElement("td");
    let TD_Operations = document.createElement("td");



    TD_ninumber.innerHTML = "<b> NI Number </B>";
    TD_fullname.innerHTML = "<b> Full Name </B>";
    TD_phone.innerHTML = "<b> Contact Number </B>";
    TD_address.innerHTML = "<b> Address </B>";
    TD_department.innerHTML = "<b> Department </B>";
    TD_Operations.innerHTML = "Operations";





    Trow.appendChild(TD_ninumber);
    Trow.appendChild(TD_fullname);
    Trow.appendChild(TD_phone);
    Trow.appendChild(TD_address);
    Trow.appendChild(TD_department);
    Trow.appendChild(TD_Operations);




    Reftable.appendChild(Trow);

    for (let i = 0; i < Employeeinfo.length; i++) {

        if (Employeeinfo[i].department == document.getElementById("dept").value) {
            let Trow = document.createElement("tr");
            Trow.style.backgroundColor = "salmon";

            let TD_ninumber = document.createElement("td");
            let TD_fullname = document.createElement("td");
            let TD_phone = document.createElement("td");
            let TD_address = document.createElement("td");
            let TD_department = document.createElement("td");
            let TD_Operations = document.createElement("td");

            TD_ninumber.innerHTML = Employeeinfo[i].ninumber;
            TD_fullname.innerHTML = Employeeinfo[i].fullname;
            TD_phone.innerHTML = Employeeinfo[i].phone;
            TD_address.innerHTML = Employeeinfo[i].address;
            TD_department.innerHTML = Employeeinfo[i].department;

            TD_Operations.innerHTML = "<input type='button' value='delete'>";
            TD_Operations.innerHTML += "<input type='button' value='update'>";

            Trow.appendChild(TD_ninumber);
            Trow.appendChild(TD_fullname);
            Trow.appendChild(TD_phone);
            Trow.appendChild(TD_address);
            Trow.appendChild(TD_department);
            Trow.appendChild(TD_Operations);

            Reftable.appendChild(Trow);
        }




        // addRecordToDom(QArecords[i].regno,QArecords[i].name,QArecords[i].marks);    
    }
    document.body.appendChild(Reftable);


}

