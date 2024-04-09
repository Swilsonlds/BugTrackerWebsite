export function submitEditForm(){
  document.getElementById('editForm').addEventListener('submit', function(e) {
      e.preventDefault();
    
      const formData = new FormData(this);
      const json = JSON.stringify(Object.fromEntries(formData));
      const reportId = localStorage.getItem("currentId")
      localStorage.clear();
    
      fetch(`https://bugtracker-hag1.onrender.com/bugs/${reportId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      })
      .then(response => {
        if (response.ok) {
          localStorage.setItem("message", "Report was Successfully Edited")
          window.location.href = 'index.html'; 
        } else {
          console.error('Submission failed');
        }
      })
      .catch(error => console.error('Error:', error));
    });
}

export function submitDeleteForm(){
  document.getElementById('deleteForm').addEventListener('submit', function(e) {
      e.preventDefault();
    
      const formData = new FormData(this);
      const json = JSON.stringify(Object.fromEntries(formData));
      const reportId = localStorage.getItem("currentId")
      localStorage.clear();
    
      fetch(`https://bugtracker-hag1.onrender.com/bugs/${reportId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      })
      .then(response => {
        if (response.ok) {
          localStorage.setItem("message", "Report was Deleted")
          window.location.href = 'index.html'; 
        } else {
          console.error('Creation failed');
        }
      })
      .catch(error => console.error('Error:', error));
    });
}

export function submitCreateForm(){
  localStorage.clear();
  document.getElementById('createForm').addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.clear();
    
      const formData = new FormData(this);
      const json = JSON.stringify(Object.fromEntries(formData));
    
      fetch(`https://bugtracker-hag1.onrender.com/bugs/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      })
      .then(response => {
        if (response.ok) {
          localStorage.setItem("message", "Report was Created")
          window.location.href = 'index.html'; 
        } else {
          console.error('Creation failed');
        }
      })
      .catch(error => console.error('Error:', error));
    });
}