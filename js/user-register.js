/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

    // Get reference to all elements in register tab
    const registerTab = document.getElementsByClassName("register");
    console.log(registerTab);
   

    // Get reference to all elements in userList tab
    const userTabs = document.getElementsByClassName("users");
    console.log(userTabs);


/* --- Nav references --- */
    const userBtn = document.getElementById("register-tab-button");
    console.log(userBtn);

    const regBtn = document.getElementById("users-tab-button");
    console.log(regBtn);

/* --- Form field references --- */

    const regForm = document.getElementById("register-form");
    console.log(regForm);


/* --- Table list reference --- */

    const userList = userTabs[1];
    console.log(userList);

    userBtn.addEventListener('click', () => {
        userBtn.style.display = "none";
        regForm.style.display = "none";
        regBtn.style.display = "block";
        userList.style.display = "block";
    });

    regBtn.addEventListener('click', () => {
        userBtn.style.display = "block";
        regForm.style.display = "block";
        regBtn.style.display = "none";
        userList.style.display = "none";
    })

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

    // code here...



/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */