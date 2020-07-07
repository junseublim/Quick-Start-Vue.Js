<template>
 <div class = "dashboard">
  <h1 class= "subheading grey--text"> Dashboard</h1>
  <v-container class="my-5">
    <v-layout row class = "mb-3">
      <v-tooltip top>
        <template v-slot:activator= "{on}">
      <v-btn small text color ="grey" v-on="on" @click="sortBy('title')">
        <v-icon left small>mdi-folder</v-icon>
        <span  class= "caption text-lowercase">By project name</span>
      </v-btn>
       </template>
      <span>Sort by projects</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator= "{on}">
      <v-btn small text color ="grey" v-on="on" @click="sortBy('person')">
         <v-icon left small>mdi-account</v-icon>
        <span  class= "caption text-lowercase">By person</span>
      </v-btn>
      </template>
      <span>Sort by Person</span>
      </v-tooltip>
    </v-layout>
    <v-card flat  v-for="project in projects" :key="project.title">
      <v-layout row wrap :class=" `pa-3 project ${project.status} `">
        <v-flex xs12 md6>
          <div class="caption grey--text">Project Title</div>
          <div>{{project.title}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Person</div>
          <div>{{project.person}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Due by</div>
          <div>{{project.due}}</div>
        </v-flex>
        <v-flex xs2 sm4 md2>
        <div class= "right" @click="changeStatus(project.id)" >
          <v-chip small :class = "` white--text caption my-2 ${project.status}`">
            {{project.status}}
          </v-chip>
        </div>  
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-container>
  </div>
</template>

<script>
import db from '@/fb'

export default {
  data() {
    return {
      projects: []
    }
  },

  methods: {
    sortBy: function(prop)  {
      //if -1, change order if 1 leave it
      //if a[prop] is less than b[prop], return -1. which changes order
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
    },
    changeStatus: function(id) {
      this.projects.forEach(project => {
        console.log(project.status);
        if (project.id == id) {
          if (project.status == "ongoing")
            project.status = "complete";
          else if (project.status == "complete")
            project.status = "ongoing";
        }
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    });
  }
}
</script>

<style >
.project.complete {
  border-left : 4px solid #3cd1c2;
}
.project.ongoing {
  border-left : 4px solid orange;
}
.project.overdue {
  border-left : 4px solid tomato;
}

.theme--light.v-chip:not(.v-chip--active).complete {
  background: #3cd1c2;
}
.theme--light.v-chip:not(.v-chip--active).ongoing {
  background: orange;
}
.theme--light.v-chip:not(.v-chip--active).overdue {
  background: tomato;
}

</style>