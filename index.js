const fetch = require('node-fetch')
const apiUrl= 'http://192.168.1.231:8080'

const accreditamento = () =>{
	return fetch(`${apiUrl}/accreditamento`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			nome: 'Matteo Spaggiari'
		})
	})
	.then(res => res.json() )
	.then(console.log)
	.catch(console.log)
}

/*const es1 = () =>{
	return fetch(`${apiUrl}/esercizi/1`, {
		method: 'GET',
		headers: {
			'x-data': 'true'
		}})
	.then(res => res.json())
	.then(({ message, data }) => {
		console.log(message);
		console.log(data);

	})
	.then(res => res.json())
	.catch(console.log)
} 
*/

const es1 = () =>{
	return fetch(`${apiUrl}/esercizi/1`, {
		method: 'GET',
		headers: {
			'x-data': 'true'
		}})
	.then(res => res.json())
	.then(({ message, data }) => {
		const result = data.reduce ((acc,e) => acc + e, 0)
		return fetch(`${apiUrl}/esercizi/1`, {
			method: 'POST',
			headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			data: result})
		})
	})
	.then(res => res.json())
	.then(console.log)
	.catch(console.log)
}

const es2 = () =>{
	return fetch(`${apiUrl}/esercizi/2`, {
		method: 'GET',
		headers: {
			'x-data': 'true'
		}})
	.then(res => res.json())
	.then(({ message, data }) => {
		const min = data.reduce((acc, e) => {
			if (e > acc){
				e = acc
				return acc 
			}
			else {
				return e 
			}
			}, data[0])
		const result = data.map( item => min*item) 
		return fetch(`${apiUrl}/esercizi/2`, {
			method: 'POST',
			headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			data: result})
		})
	})
	.then(res => res.json())
	.catch(console.log)
} 

es2();
