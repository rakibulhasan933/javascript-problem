function vaxTrail(people) {
	let A = [];
	let B = [];
	let C = [];
	let D = [];


	for (let i = 0; i < people.length; i++) {
		const person = people[i];


		if (person.temperature < 100) {


			if (person.age >= 20 && person.age <= 30) {
				A.push(person);
			} else if (person.age >= 31 && person.age <= 40) {
				B.push(person);
			} else if (person.age >= 41 && person.age <= 50) {
				C.push(person);
			} else {
				D.push(person);
			}
		}
	}

	A = A.filter(person => person.age % 2 === 0).sort((a, b) => a.age - b.age);
	B = B.filter(person => person.age % 2 === 0).sort((a, b) => a.age - b.age);
	C = C.filter(person => person.age % 2 === 0).sort((a, b) => a.age - b.age);
	D = D.filter(person => person.age % 2 === 0).sort((a, b) => a.age - b.age);

	return { A, B, C, D };
}
