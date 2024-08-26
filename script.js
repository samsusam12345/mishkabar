// Ensure that the Telegram Web App script has loaded
const tg = window.Telegram.WebApp;

// Access the initData and initDataUnsafe objects
const initData = tg.initData;
const initDataUnsafe = tg.initDataUnsafe;

// Debugging: Log the initData and initDataUnsafe to the console
console.log("initData:", initData);
console.log("initDataUnsafe:", initDataUnsafe);

// Display the user's first and last name, and username on the front of the card
const fullName = `${initDataUnsafe.user.first_name} ${initDataUnsafe.user.last_name || ''}`.trim();
const username = initDataUnsafe.user.username ? `@${initDataUnsafe.user.username}` : 'No Username';

document.getElementById('first-last-name').textContent = fullName;
document.getElementById('username').textContent = username;

// Display additional information on the back of the card
document.getElementById('extra-info').innerHTML = `
    <p><strong>User ID:</strong> ${initDataUnsafe.user.id}</p>
    <p><strong>Language Code:</strong> ${initDataUnsafe.user.language_code || 'Not Provided'}</p>
    <p><strong>Platform:</str
