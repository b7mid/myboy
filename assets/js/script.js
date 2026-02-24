function sayHello() {
    alert("Hello, welcome to our website!");
}

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
    const menuIcon = document.getElementById('menu-icon');
    if (menu.classList.contains('active')) {
        menuIcon.innerHTML = '&times;'; // Change to close icon
    } else {
        menuIcon.innerHTML = '&#9776;'; // Change back to hamburger icon
    }
}

// Add event listener to the menu icon
document.getElementById('menu-icon').addEventListener('click', toggleMenu);

// Example of a function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    alert(`Thank you, ${name}! Your email (${email}) has been received.`);
}
// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

// Example of a function to fetch data from an API
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Process the data as needed
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}   
// Call the fetchData function to retrieve data when the page loads
window.addEventListener('load', fetchData);

