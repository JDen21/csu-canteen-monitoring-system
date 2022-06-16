<template>
    <div class="table-body" >
        <div class="table-name" >
            <slot>
                No Table Name
            </slot>
        </div>
        <div class="table" >
            <div class="table-title" >
                <div class="column-name" >
                    Product Name
                </div>
                <div class="column-name" >
                    Used Stocks
                </div>
                <div class="column-name" >
                    Total Stock
                </div>
                <div class="column-name" >
                    Price
                </div>
            </div>

            <div class="table-content" v-for="product in products" :key="product.name" > <!--v-for here products-->
                <div class="column-content" >
                    {{ product.name }}
                </div>
                <div class="column-content" >
                    {{ product.usedStocks }}
                </div>
                <div class="column-content" >
                    {{ product.totalStocks }}
                </div>
                <div class="column-content" >
                    {{ product.price }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        products : []
    }
}
</script>

<style scoped>
.table-body {
    display: grid;
    grid-template-columns: 1fr 6fr;
}

.table-name {
    font: 20px 'Roboto';
    font-weight: bold;
}


.table-title, .table-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin: 0 2%;
}   

.column-name {
    background-color: #A1DD70;
    font-family: 'Roboto';
    text-align: center;
    padding: 2% 0;
}

.column-content {
    text-align: center;
    padding: 10px 0;
}

.column-content-white {
    background-color: var(--pref-white);
}

.column-content-gray {
    background-color: #E8ECD6;
}
</style>