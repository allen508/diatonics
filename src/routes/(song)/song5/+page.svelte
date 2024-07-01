<script lang="ts">

    import { onMount } from "svelte";
    import Circle from "./circle/circle.svelte";

    let circle: Circle;
    let selectedKey: number;
    let selectedMode: number;

    const changeKey = () => {
        circle.changeKey(selectedKey);
    }
    
    const changeMode = () => {
        circle.changeMode(selectedMode);
    }

    onMount(()=> {
        circle.changeKey(1);
        circle.changeMode(1);
    })


</script>


<div class="w-full h-full overflow-hidden">
    <div class="flex flex-nowrap w-full p-5">
        <h1 class="text-2xl font-semibold">Diatonic wheel</h1>
    </div>
    <div class='flex flex-wrap mt-3'>
        <div>
            <div class="block">
                <div class="inline-block relative w-64 ml-5">
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Major</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="block">
                <div class="inline-block relative w-64 ml-5">
                    <select bind:value={selectedMode} on:change="{changeMode}" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="1">Ionian</option>
                        <option value="2">Dorian</option>
                        <option value="3">Phrygian</option>
                        <option value="4">Lydian</option>
                        <option value="5">Mixolydian</option>
                        <option value="6">Aeolian</option>
                        <option value="7">Locrian</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="block">
                <div class="inline-block relative w-64 ml-5">
                    <select bind:value={selectedKey} on:change="{changeKey}" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="1">A</option>
                        <option value="2">A#</option>
                        <option value="3">B</option>
                        <option value="4">C</option>
                        <option value="5">C#</option>
                        <option value="6">D</option>
                        <option value="7">D#</option>
                        <option value="8">E</option>
                        <option value="9">F</option>
                        <option value="10">F#</option>
                        <option value="11">G</option>
                        <option value="12">G#</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>

        </div>
        <div>

            <div class="block">
                <div class="inline-block relative w-64 ml-5">
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">Triad</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-nowrap">
        <Circle bind:this={circle} key={1} mode={1}></Circle>
    </div>
    <div class="flex flex-nowrap w-full ml-5 mt-10">
        Copyright Gary Allen 2024
    </div>

</div>

