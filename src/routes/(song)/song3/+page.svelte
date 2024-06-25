<script lang="ts">

    import Wheel from './wheel/wheel.svelte';

    let wheel : Wheel;

    let selectedKey : number;
    let selectedMode : number;
    
    const changeKey = () => {
        wheel.changeKey(selectedKey);
    };

    const changeMode = () => {
        wheel.changeMode(selectedMode);
    };

</script>

<div class='w-full flex h-full overflow-hidden'>
    <div class='pl-20'>
        <Wheel bind:this={wheel}></Wheel>
    </div>
    <div class='fixed right-0 h-full w-[800px] bg-slate-400 p-5'>
        <p class='text-2xl'>Settings</p>


        <div class="block">
            <div class="inline-block relative w-20 m-5">
                <label>Scale</label>
            </div>
            <div class="inline-block relative w-64 m-5">
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Major/Minor</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        <div class="block">
            <div class="inline-block relative w-20 m-5">
                <label>Mode</label>
            </div>
            <div class="inline-block relative w-64 m-5">
                <select bind:value={selectedMode} on:change="{changeMode}" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">Major (Ionian)</option>
                    <option value="3">Dorian</option>
                    <option value="5">Phrygian</option>
                    <option value="6">Lydian</option>
                    <option value="8">Mixolydian</option>
                    <option value="10">Minor (Aeolian)</option>
                    <option value="12">Locrian</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        <div class="block">
            <div class="inline-block relative w-20 m-5">
                <label>Key</label>
            </div>
            <div class="inline-block relative w-64 m-5">
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


        <div class="block">
            <div class="inline-block relative w-20 m-5">
                <label>Chord</label>
            </div>
            <div class="inline-block relative w-64 m-5">
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Triad</option>
                <option>Triad - Augmented</option>
                <option>Triad - Diminished</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>



    </div>
</div>

    



