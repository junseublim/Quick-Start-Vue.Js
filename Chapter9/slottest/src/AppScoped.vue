<template>
    <div class="parent">
        <child>
            <template slot="type1" scope="p1">
                <div>
                    {{p1.cx}} + {{p1.cy}} = {{ parseInt(p1.cx) + parseInt(p1.cy)}} 
                </div>
            </template>
            <template slot = "type2" scope = "p2">
                <div>
                    {{p2.cx}} 더하기 {{p2.cy}} 는 {{parseInt(p2.cx) + parseInt(p2.cy)}} 입니다.
                </div>    
            </template>
             <template slot="type3" scope="p3">
                <div>
                    {{p3.cx}} * {{p3.cy}} = {{ parseInt(p3.cx) * parseInt(p3.cy)}} 
                </div>
            </template>
            <template slot = "type4" scope = "p4">
                <div>
                    {{p4.cx}} 곱하기 {{p4.cy}} 는 {{parseInt(p4.cx) * parseInt(p4.cy)}} 입니다.
                </div>    
            </template>
        </child>
    </div>
</template>
<script>
import Child from './components/ScopedSlot.vue'
export default {
    components: {Child}
}
</script>
<style scoped>
.parent {border: dashed 2px black; padding: 5px;}
</style>