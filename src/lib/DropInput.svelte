<script>
	import { getFilesFromDropEvent, getFilesFromInputEvent } from '$lib/file-input-utils';
	import { createEventDispatcher } from 'svelte';
	export let multiple = true;
	let dragging = false;

	const dispatch = createEventDispatcher();
	const startDragging = () => {
		dragging = true;
	};
	const stopDragging = () => {
		dragging = false;
	};
	const onFile = (getFilesFunction) => (event) => {
		stopDragging();
		const files = getFilesFunction(event);
		if (files.length) {
			dispatch('input', { files: multiple ? files : files[0] });
		}
	};

</script>

<label
	class:dragging
	on:drop|preventDefault={onFile(getFilesFromDropEvent)}
	on:dragover|preventDefault={startDragging}
	on:dragleave|preventDefault={stopDragging}
>
	<slot {dragging}>
		<div>
			Drag &amp; Drop your file(s) or
			<strong>browse.</strong>
		</div>
	</slot>
	<input type="file" {multiple} on:input={onFile(getFilesFromInputEvent)} />
</label>

<style>
	input {
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px);
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap;
	}
	label:hover {
		cursor: pointer;
	}

</style>
