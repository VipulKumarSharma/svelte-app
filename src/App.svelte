<script>
	export let name;
	let age = 30;

	const incrementAge= () => {
		age += 1;
	};

	$: uppercaseName = name.toUpperCase();

	const changeName = () => {
		name = 'vipul';
	};

	$: console.log(name);

	$: if (name === 'vipul') {
		age = 27;
	}
</script>

<main>
	<h1>Hello {uppercaseName}, my age is {age}!</h1>
	
	<button on:click="{incrementAge}">Change Age</button>
	<button on:click="{changeName}">Change Name</button>
</main>

<style>
	h1 {
		color: purple;
	}
</style>