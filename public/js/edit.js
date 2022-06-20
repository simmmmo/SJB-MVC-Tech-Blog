const editFormHandler = async (event) => {
  event.preventDefault();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const title = document.querySelector('#edit-post-title').value.trim();
  const body_content = document.querySelector('#edit-post-content').value.trim();

  if (title && body_content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('#edit-btn')
  .addEventListener('click', editFormHandler);


const deleteBtnHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteBtnHandler);