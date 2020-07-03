<template>
    <div>
        <h1>연락처</h1>
        <div class = "wrapper">
            <div class="box"  v-for="c in contacts" :key = "c.no">
                <router-link v-bind:to="{name: 'contactbyno', params: {no: c.no}}">
                    {{c.name}}
                </router-link>
            </div>
        </div>
        <div>
            <span class= "addButton" @click = "addContact" style = 'cursor:pointer'>
            연락처 추가
            </span> 
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import contactlist from '../Contactlist';

export default {
    name : "contact",
    data: function() {
        return {
            contacts : contactlist.contacts
        }
    },
    methods : {
        addContact() {
            this.$router.push({name: 'contactadd', params : {contactadd : ''}});
        }
    },
    watch : {

    }
}
</script>

<style>
.wrapper { background-color:#fff; clear:both; display:table; }
.box { float:left; background-color:aqua; border-radius:5px;
    padding: 10px; margin:3px; text-align:center; font-size:120%;
    width:100px; font-weight:bold; }
a:link, a:visited { text-align:center; text-decoration:none;
    display:inline-block; }
.addButton {
    float: left;
    border-radius: 5px;
    margin: 3px;
    text-align: center;
    color: white;
    font-weight: bold;
    width: 100px;
    background-color: blueviolet;
    padding: 10px;;
}
</style>