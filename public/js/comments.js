const commentFormHandler = async (event) => {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const body_comment = document.querySelector('#body-comment').value.trim();

  if ( body_comment ) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, body_comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);

