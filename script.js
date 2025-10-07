document.getElementById('contact-form').addEventListener('submit', async (e) => {
	e.preventDefault();
  
	const formData = {
	  name: e.target.name.value,
	  email: e.target.email.value,
	  message: e.target.message.value
	};
  
	const res = await fetch('https://your-backend-api.com/contact', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(formData)
	});
  
	const result = await res.json();
	document.getElementById('response-msg').textContent = result.message;
  });
  