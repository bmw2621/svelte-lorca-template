<script>
	export let name;

	let a;
	let b;
	let c;

	const handleEqualButtonClick = async () => {
		c = await window.add(a, b)
	}

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div id="add">
		<input type="number" bind:value={a}/> + <input type="number" bind:value={b}>
	</div>
	<button on:click={handleEqualButtonClick}>Equals</button>
	{#if c}
	<h1>{c}</h1>
	{/if}
</main>

<style>
	#add{
		display: flex;
		justify-content: center;
		align-items: center;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>