<template>
  <tr v-bind:class="'present-'+student.present">
    <td>{{student.name}}</td>
    <td>{{student.starID}}</td>
    <td><input type="checkbox" v-model="student.present" v-on:change="checked(student)" /></td>
    <td v-show="edit"><img class="delete-icon" v-on:click="deleteStudent(student)" src="@/assets/delete.png" height="16px" width="16px"></td>
  </tr>
</template>
<script>
export default {
  name: "StudentRow",
  props: {
    student: Object,
    edit: Boolean
  },
  methods: {
    checked: function(student) {
      this.$emit("checked", student);
    },
    deleteStudent: function (student){
      if(confirm(`Delete ${student.name}`)){
        this.$emit('delete-student', student)
      }
    }
  }
};
</script>
<style>
.present-true {
  color: grey;
  font-style: italic;
}
.present-false {
  font-weight: bold;
}
</style>