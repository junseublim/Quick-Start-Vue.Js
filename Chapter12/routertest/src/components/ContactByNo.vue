<template>
    <div>
        <hr class="divider"></hr>
        <h1>연락처 상세</h1>
        <div>
            <table class= "detail table table-bordered">
                <tbody>
                    <tr class = "active">
                        <td>일련번호</td>
                        <td>{{contact.no}}</td>
                    </tr>
                    <tr class = "active">
                        <td>이름</td>
                        <td>{{contact.name}}</td>
                    </tr>
                    <tr class = "active">
                        <td>전화</td>
                        <td>{{contact.tel}}</td>
                    </tr>
                    <tr class = "active">
                        <td>주소</td>
                        <td>{{contact.address}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import contactlist from '../Contactlist'

export default {
    name: 'contactbyno',
    data: function() {
        return {
            no: 0,
            contacts: contactlist.contacts
        };
    },
    created : function() {
    this.no = this.$route.params.no;
  },
  watch : {
    '$route'(to, from) {
        this.no = to.params.no;
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
  }
    
}
</script>

<style>
table.detail { width:400px; }
.divider { height: 3px; margin-top: 5px; margin-left: auto; margin-right: auto; background-color: #FF0066; border : 0 none; clear: both}
</style>    