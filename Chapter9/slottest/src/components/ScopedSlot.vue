<template>
<div>
    <div class = "child">
        X: <input type="text" v-model="ax" /> <br />
        Y: <input type="text" v-model="ay" /> <br />
        <slot name = "type1" :cx="ax" :cy="ay"></slot>
        <slot name = "type2" :cx="ax" :cy="ay"></slot>
    </div>
    <div class = "child">
        X: <input type="text" v-model="bx" /> <br />
        Y: <input type="text" v-model="by" /> <br />
        <slot name = "type3" :cx="bx" :cy="by"></slot>
        <slot name = "type4" :cx="bx" :cy="by"></slot>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {ax:4, ay:5, bx: 3, by: 7};
    }
}
</script>
<style scoped>
.child {padding:5px; border: solid 1px gray;}
</style>