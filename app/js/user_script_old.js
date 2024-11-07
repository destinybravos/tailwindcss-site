/**
 * Create a function to toggle the modal
 * The function should recieve an option either to open or close the modal
 */
let toggleModal = (option) => {
    if (option == 'open') {
        if (modal.classList.contains('hidden') == true) {
            modal.classList.remove('hidden');
            modal.classList.add('flex')
        }
    } else {
        if (modal.classList.contains('flex') == true) {
            modal.classList.remove('flex')
            modal.classList.add('hidden');
        }
    }
}

let modal = document.getElementById('modal');

// Add Event Listener to the action buttons
// document.getElementById('btn_open_modal').addEventListener('click', () => {
//     if (modal.classList.contains('hidden') == true) {
//         modal.classList.remove('hidden');
//         modal.classList.add('flex')
//     }
// })

// document.getElementById('btn_close_modal').addEventListener('click', () => {
//     if (modal.classList.contains('flex') == true) {
//         modal.classList.remove('flex')
//         modal.classList.add('hidden');
//     }
// })


/**
 * This section handles data
 */
// Decalre an empty array of object where the users will be pushed into
let userArray = [];

// Create a function to populate the UI List with the array elements
let populateUiList = () => {
    let listItem = '';
    userArray.forEach((user, index) => {
        listItem += `<li class="py-2 px-4 odd:bg-slate-50">
                        <h1 class="text-lg font-bold">${user.firstname} ${user.lastname}</h1>
                        <h3 class="text-xs">${user.email}</h3>
                    </li>`;
    })

    document.getElementById('ui-user-list').innerHTML = listItem;
}

populateUiList();





// Save the user from the modal
let saveUser = (ev) => {
    ev.preventDefault(); // prevent the form from reloading our page

    // First save the user
    // let form = ev.target;
    let form = document.forms['frm_user'];

    // Collect the values from all form inputs
    let firstname = form['firstname'].value;
    let lastname = form['lastname'].value;
    let email = form['email'].value;
    let phone = form['phone'].value;
    let gender = form['gender'].value;
    let address = form['address'].value;

    // Create a user object with the values collected
    let user = {
        firstname, 
        lastname, 
        email, 
        phone, 
        gender, 
        home_address : address
    }
    
    // Push the user object into the users array
    userArray.push(user);

    // Call the populate UI function to update user interface
    populateUiList();

    // reset the form
    form.reset();

    // then close the modal
    toggleModal('close')
}