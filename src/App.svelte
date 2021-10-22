<script>
	export let name;
	let age = 27;

	const incrementAge= () => {
		age += 1;
	};
</script>

<main>
	<h1>Hello {name}, my age is {age}!</h1>
	<button on:click="{incrementAge}">Change Age</button>
</main>

<style>
	h1 {
		color: purple;
	}
</style>