<template>
<v-row justify="center">
    <v-dialog max-width="600px" v-model="dialog" >
        <template v-slot:activator="{on, attrs}">
        <v-btn text class="success my-5" v-on="on"  v-bind="attrs" >Add new project</v-btn>
        </template>
    <v-card>
        <v-card-title>
            <h2>Add a New Project</h2>
        </v-card-title>
        <v-card-text>
            <v-form ref="form">
            <v-container>
                
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="[rules.title]" required ></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="[rules.info]" required ></v-textarea>
                <v-menu>
                    <template v-slot:activator="{on ,attrs}">
                    <v-text-field v-model= "due" label="Due date" v-on="on" v-bind="attrs" prepend-icon="mdi-calendar">
                    </v-text-field>
                    </template>
                    <v-date-picker v-model= "due" required></v-date-picker>
                    
                </v-menu>
            </v-container>
            </v-form>
                </v-card-text>
                <v-card-actions>
                <v-btn text class="success mx-0 mt-3" @click="submit" :loading=
                "loading" >Add project</v-btn>
                </v-card-actions>
                <v-container class= "pl-3">
                    <span v-show= "error" id="errorMSG">All forms are required.</span>
                </v-container>
    </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import db from '@/fb'
export default {
    data: () => ({
            title:'',
            content: '',
            due: null,
            loading : false,
            dialog : false,
            rules: {
                title: v => v.length >=3 || "Must be atleast 3 letters long.",
                info: v => v.length >= 10 || "Must be atleast 10 letters long."
            },
            error: false
    }),
    methods: {
        submit() {
            if(this.$refs.form.validate() && this.due !== null) {
                console.log(this.due)
            this.loading = true
            const project = {
                title: this.title,
                content: this.content,
                due: this.due,
                person: 'The Net Ninja',
                status : 'ongoing'
            }
            
            db.collection('projects').add(project)
            .then(() => {
                console.log('added to db');
                this.loading = false
                this.dialog = false
                this.$emit('projectAdded');
                })
            } else {
                this.error = true;
            }
        }
    }
}
</script>
<style>
    #errorMSG {
        color: tomato;
    }
</style>