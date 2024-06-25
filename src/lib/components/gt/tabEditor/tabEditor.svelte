<script lang="ts">

    import * as tablang from '$common_modules/tablang';
    import { onMount } from 'svelte';

    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    let input : HTMLTextAreaElement;
    let errors : HTMLDivElement;

    export let tabString : string;

    const textChange = () => {
        update();
    }

    onMount(() => {
        input.value = tabString;
    });

    const update = () => {

        errors.innerText = "";

        const result = tablang.parse(input.value);

        if(result.parserErrors.length > 0){
            errors.innerText = result.parserErrors;
        } 

        if(result.validationErrors.length > 0) {
            errors.innerText = errors.innerText + result.validationErrors;
        } 

        if(result.validationErrors.length == 0 && result.parserErrors.length == 0) {
            dispatch("tabstring_changed", {value: input.value });
        }
    }

</script>

<div class="container">
    <textarea bind:this={input} on:keyup={textChange} cols="90" rows="20" class="p-5"></textarea>
    <div bind:this={errors}></div>
</div>


<style>

    textarea {
        font-family:Consolas;
    }

    .container {
        margin-left: 10px;
    }

</style>