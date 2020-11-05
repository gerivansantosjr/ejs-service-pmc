const findElement = identifier => document.querySelector(identifier)

document.querySelector('#imageForm').addEventListener('submit', async (e) => {
    e.preventDefault();

		fetch('http://localhost:1234/teste', {
			method: 'POST',
			body: {
				name: 'anderson'
			},
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		})
			.then(data => data.json())
			.then(console.log)
			.catch(e => console.error('deu ruim: ', e))
  })