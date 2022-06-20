const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const body_content = document.querySelector('#post-content').value.trim();

  if (title && body_content) {
    const response = await fetch(`/api/posts/new`, {
      method: 'POST',
      body: JSON.stringify({ title, body_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

$('#new-post-button').click(() => {
  $('#new-post-row').addClass('show');
  $('#new-post-button').addClass('hide');
});

$('#cancel-post-button').click(() => {
  $('#new-post-row').removeClass('show');
  $('#new-post-button').removeClass('hide');
});


document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);