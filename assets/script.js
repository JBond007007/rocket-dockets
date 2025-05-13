// Set username dynamically if needed
const username = localStorage.getItem('username') || 'User';
document.getElementById('user-name-pc').textContent = username;
document.getElementById('user-name-mobile').textContent = username;
