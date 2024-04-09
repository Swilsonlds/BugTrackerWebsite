export function submitEditForm(){
  document.getElementById('editForm').addEventListener('submit', function(e) {
      e.preventDefault();
    
      const formData = new FormData(this);
      const json = JSON.stringify(Object.fromEntries(formData));
      const reportId = localStorage.getItem("currentId")
    
      fetch(`https://bugtracker-hag1.onrender.com/bugs/${reportId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    });
  }

export function submitDeleteForm(){
  document.getElementById('deleteForm').addEventListener('submit', function(e) {
      e.preventDefault();
    
      const formData = new FormData(this);
      const json = JSON.stringify(Object.fromEntries(formData));
      const reportId = localStorage.getItem("currentId")
    
      fetch(`https://bugtracker-hag1.onrender.com/bugs/${reportId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    });
  }