/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

    // Get reference to all elements in register tab
    const registerTab = document.getElementsByClassName("register");
    console.log(registerTab);
    let registerTab1 = registerTab[0];
    let registerTab2 = registerTab[1];
   

    // Get reference to all elements in userList tab
    const userTabs = document.getElementsByClassName("users");
    console.log(userTabs);
    let userTab1 = userTabs[0];
    let userTab2 = userTabs[1];


/* --- Nav references --- */
    // view userlist button
    const viewUserButton = () => {
        userTabs[0].style.display = "block";
        registerTab[0].style.display = "none";
        userTabs[1].style.display = "block";
        registerTab[1].style.display = "none";
    };

    document.getElementById("register-tab-button").addEventListener("click", viewUserButton);

    //register user button
    const registerUserButton = () => {
        userTabs[0].style.display = "none";
        registerTab[0].style.display = "block";
        userTabs[1].style.display = "none";
        registerTab[1].style.display = "block";
    };

    document.getElementById("users-tab-button").addEventListener("click", registerUserButton);

    //register button
    const submitButton = document.getElementById("register-submit");
    const registerSubmit = (event) => {
        event.preventDefault();
        userTabs[0].style.display = "block";
        registerTab[0].style.display = "none";
        userTabs[1].style.display = "block";
        registerTab[1].style.display = "none";
    };

    submitButton.addEventListener("click", registerSubmit);

   

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */
const users = [];
//first function
function createUser(event){
    event.preventDefault();

    let firstName1 = document.getElementById("firstname").value;
    let lastName1 = document.getElementById("lastname").value;
    let userName1 = document.getElementById("username").value;
    let email1 = document.getElementById("email").value;
    let password1 = document.getElementById("password").value;

    if(firstName1 !== ""){
        if(lastName1 == ""){
            alert("Please enter Last Name!");
        }else if(userName1 == ""){
            alert("Please enter User Name!");
        }else if(email1 == ""){
            alert("Please enter Email!");
        }else if(password1 == ""){
            alert("Please enter Password!");
        }else{
            const newUser = {
                firname : firstName1,
                lastName : lastName1,
                userName : userName1,
                email : email1,
                password : password1
            };

            users.push(newUser);
            console.log(users);
            populateUserList(users);
        }
    }else{
        alert("Kindly enter your registration Information");
    };
};

submitButton.addEventListener("click", createUser);

//second function
function creatUserElement(userParam){
    let user1 = `<li class="entry">
    <span>${userParam.userName}</span>
    <span>${userParam.firname}</span>
    <span>${userParam.lastName}</span>
    <span>${userParam.email}</span>
    <span>${userParam.password}</span>
    </li>`;
    return user1;
};

function populateUserList(usersparam){
    let listElements = document.getElementsByClassName("entry");
    let elementLength = listElements.length;

    Array.from(listElements).forEach((el) => {
        el.remove();
    });

    for(let i = 0; i < usersparam.length; i++){
        let user1 = creatUserElement(usersparam[i]);
        console.log(user1);
        document.getElementById("user-list").innerHTML += user1;
    };

    //Update data-index attributes
    listElements = document.getElementsByClassName("entry");

    Array.from(listElements).forEach((el, index) => {
        el.setAttribute("data-index", index);

        el.addEventListener("dblclick", (event) => {
            removeUser(event, index);
        });
    });
};

function removeUser(event, index) {
    const entry = event.target.parentNode;
    users.splice(index, 1);

    entry.parentNode.removeChild(entry);

    populateUserList(users);
};

/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */