<script>
	import DropInput from '$lib/DropInput.svelte';

	let leftImages = [];
	let rightImages = [];
	let currentIndex = 0;
	let verticalCompare = false;
	let timeout = 5;
	let timer;

	$: initImage = leftImages[currentIndex];
	$: imageTitle = leftImages.length !== 0 ? leftImages[currentIndex].name : '';
	$: rightIndex = imageTitle !== '' ? rightImages.findIndex((x) => x.name === imageTitle) : 0;
	$: compareImage = rightImages[rightIndex];
	$: timeout >= 0 && leftImages.length && rightImages.length && setTimer();

	const setTimer = () => {
		if (timer) {
			clearTimeout(timer);
		}
		if (timeout === 0) {
			return;
		}
		timer = setTimeout(() => {
			if (currentIndex < leftImages.length - 1) {
				incrementIndex();
			} else {
				currentIndex = 0;
			}
			setTimer.call();
		}, timeout * 1000);
	};

	const leftImagesInput = ({ detail: { files } }) => {
		leftImages = [...leftImages, ...files];
	};

	const rightImagesInput = ({ detail: { files } }) => {
		rightImages = [...rightImages, ...files];
	};

	const handleKeydown = (event) => {
		switch (event.keyCode) {
			case 37:
				// left arrow
				decrementIndex();
				break;
			case 39:
				incrementIndex();
				// right arrow
				break;
			default:
				break;
		}
	};

	const incrementIndex = () => {
		if (currentIndex < leftImages.length - 1) {
			currentIndex = currentIndex + 1;
		}
	};

	const decrementIndex = () => {
		if (currentIndex > 0) {
			currentIndex = currentIndex - 1;
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="h-full grid {verticalCompare ? 'grid-cols-1 grid-rows-2' : 'grid-cols-2 grid-rows-1'}">
	<section>
		<header>
			<h3 class="text-lg text-center">Initial</h3>
		</header>
		<div>
			<DropInput on:input={leftImagesInput}>
				<div class="text-center">
					Drag &amp; Drop your image(s) or
					<strong class="text-red-500 font-semibold">browse.</strong>
				</div>
				{#if leftImages.length !== 0}
					<img
						src={URL.createObjectURL(initImage)}
						class="mx-auto max-w-full max-h-screen"
						alt="initial"
					/>
				{/if}
			</DropInput>
		</div>
	</section>

	<section>
		<header>
			<h3 class="text-lg text-center">Compare</h3>
		</header>
		<div>
			<DropInput on:input={rightImagesInput}>
				<div class="text-center">
					Drag &amp; Drop your images(s) or
					<strong class="text-red-500 font-semibold">browse.</strong>
				</div>
				{#if rightImages.length !== 0 && rightIndex !== -1}
					<img
						src={URL.createObjectURL(compareImage)}
						class="mx-auto max-w-full max-h-screen"
						alt="compared"
					/>
				{/if}
			</DropInput>
		</div>
	</section>
</main>

<footer
	class="grid grid-cols-3 place-content-center sticky inset-x-0 bottom-0 bg-white bg-opacity-70 h-12"
>
	{#if currentIndex > 0}
		<div class="mx-auto">
			<button
				class="p-2 py-1 rounded shadow text-red-500 ring-red-200 bg-white focus:ring hover:ring"
				on:click={decrementIndex}>Previous</button
			>
		</div>
	{/if}
	{#if leftImages.length || rightImages.length}
		<div class="col-start-2 mx-auto">
			Next Image Every <input bind:value={timeout} class="w-12" type="number" min="0" /> Seconds
		</div>
	{/if}
	{#if currentIndex < leftImages.length - 1}
		<div class="col-start-3 mx-auto">
			<button
				class="p-2 py-1 rounded shadow text-red-500 ring-red-200 bg-white focus:ring hover:ring"
				on:click={incrementIndex}>Next</button
			>
		</div>
	{/if}
</footer>
