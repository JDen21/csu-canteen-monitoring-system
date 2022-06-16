<template>
<div>
    <button @click="$emit('click-event')" >
        <slot>
            Button here
        </slot>
    </button>
</div>    
</template>

<style scoped>
button {
    border : none;
    background-color: var(--navigation-red);
    font: var(--btn-fonts);
    color: var(--pref-white);
    padding: 3% 8%;
    width: 100%;
    border-radius: 20px;
}

button:active {
    background-color: var(--primary-red);
}
</style>