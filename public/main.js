window.addEventListener('DOMContentLoaded', async () => {
    const userList = document.getElementById('userList');

    try {
      const res = await fetch('/api/users');
      const users = await res.json();

      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  });
