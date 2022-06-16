<template>
    <div class="card">
        <span >
            <slot name="cardImage" >
                <img class="card-image"  src="../assets/noImage.png" alt="no Image here">
            </slot>
        </span>
        <p>
            <slot name="cardName">
                No Card Name
            </slot>
        </p>
    </div>
</template>

<style scoped>
.card {
    display: inline-block;
    width: 250px;
}
.card-image {
    width: 237px;
    height: 198px;
}
p{
    text-align: center;
    font: var(--Body-fonts);
    font-weight: bold;
}
</style>