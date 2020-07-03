<template>
    <div>
        <hr class="divider"></hr>
        <h1>연락처 추가</h1>
        <div>
            <form class= "inputform">
                <input type="text" placeholder= "이름" v-model ="name"><br>
                <input type="text" placeholder= "전화" v-model="tel"><br>
                <input type="text" placeholder= "주소" v-model="address"><br>
                <button @click="add" >추 가</button>
            </form>
        </div>
    </div>
</template>

<script>
import contactlist from '../Contactlist'
import contact from './Contacts.vue'
export default {
    name: 'contactadd',
    data: function() {
        return {
            no: contactlist.contactNum,
            contacts: contactlist.contacts,
            name: '',
            tel: '',
            address: ''

        }
    },
   computed : {
    contact : function() {
        var arr = this.contacts.filter((item)=>{
            return item.no == this.no;
        })
        if (arr.length == 1)  return arr[0];
        else return {};
    }
  },
  methods: {
      add: function() {
          console.log(this.name);
            contactlist.contactNum++;
            contactlist.contacts.push({
            no: contactlist.contactNum,
            name: this.name,
            address: this.address,
            tel: this.tel
            
        });
        this.$router.push('/contacts');
      }
  }
    
}
</script>

<style>
table.detail { width:400px; }
.divider { height: 3px; margin-top: 5px; margin-left: auto; margin-right: auto; background-color: #FF0066; border : 0 none; clear: both}
.inputform input, button {
   margin: 3px;
}
</style>    