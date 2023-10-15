async function sendEmail(user) {
	console.log(user);
	console.log('from sendEmail.js');
	const res = await fetch('/api/email', {
		method: 'POST',
		body: JSON.stringify(user),
		cache: 'no-cache',
	});
	const data = await res.json();
	// console.log(data);
	return data;
}

export default sendEmail;
