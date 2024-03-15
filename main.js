document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const postsContainer = document.querySelector('.posts');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    addPost(name, message);
    clearForm();
  });

  function addPost(name, message) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('panel', 'panel-default');
    postDiv.innerHTML = `
      <div class="panel-heading">${name}</div>
      <div class="panel-body">${message}</div>
    `;
    postsContainer.appendChild(postDiv);
  }

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  }
});