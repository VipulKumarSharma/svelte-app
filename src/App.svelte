<script>
	import ContactCard from "./component/ContactCard.svelte";

	let name = 'Max';
	let jobTitle = '';
	let userImage = '';
	let description = '';
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

	const inputEvent = (e) => {
		name = e.target.value;
	};
</script>

<main>
	<h1>Hello {uppercaseName}, my age is {age}!</h1>
	
	<button on:click="{incrementAge}">Change Age</button>
	<!-- <button on:click="{changeName}">Change Name</button> -->
	<!-- <input type="text" value="{name}" on:input="{inputEvent}"> -->
	<input type="text" bind:value="{name}">
	<input type="text" bind:value="{jobTitle}">
	<input type="text" bind:value="{userImage}">
	<textarea rows="3" bind:value="{description}"></textarea>

	<ContactCard 
		userName="{name}"
		{jobTitle}
		{userImage}
		{description}
	/>
</main>

<style>
	h1 {
		color: purple;
	}
</style>