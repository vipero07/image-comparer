<script>
	import DropInput from '$lib/DropInput.svelte';

	let leftImages = [];
	let rightImages = [];
	let currentIndex = 0;
	let verticalCompare = false;

	$: initImage = leftImages[currentIndex];
	$: imageTitle = leftImages.length !== 0 ? leftImages[currentIndex].name : '';
	$: rightIndex = imageTitle !== '' ? rightImages.findIndex((x) => x.name === imageTitle) : 0;
	$: compareImage = rightImages[rightIndex];

	const leftImagesInput = ({ detail: { files } }) => {
		leftImages = [...leftImages, ...files];
	};

	const rightImagesInput = ({ detail: { files } }) => {
		rightImages = [...rightImages, ...files];
	};

</script>

<header>
	<h1 class="text-xl">Pick images to compare</h1>
	<div>
		{#if currentIndex > 0}
			<button on:click={() => (currentIndex = currentIndex - 1)}>Previous</button>
		{/if}
		{#if currentIndex < leftImages.length - 1}
			<button on:click={() => (currentIndex = currentIndex + 1)}>Next</button>
		{/if}
	</div>
</header>

<main class="flex {verticalCompare ? 'flex-col' : 'flex-row'}">
	<section class="w-1/2">
		<header>
			<h3 class="text-lg">Left Images</h3>
		</header>
		<div>
			<DropInput on:input={leftImagesInput}>
				<div>
					Drag &amp; Drop your file(s) or
					<strong>browse.</strong>
				</div>
				{#if leftImages.length !== 0}
					<img src={URL.createObjectURL(initImage)} class="w-full h-full" alt="initial" />
				{/if}
			</DropInput>
		</div>
	</section>

	<section class="w-1/2">
		<header>
			<h3 class="text-lg">Right Images</h3>
		</header>
		<div>
			<DropInput on:input={rightImagesInput}>
				<div>
					Drag &amp; Drop your file(s) or
					<strong>browse.</strong>
				</div>
				{#if rightImages.length !== 0 && rightIndex !== -1}
					<img src={URL.createObjectURL(compareImage)} class="w-full h-full" alt="compared" />
				{/if}
			</DropInput>
		</div>
	</section>
</main>
