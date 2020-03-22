<template>
  <div id="app">
    <NewStudentFrom v-on:add-student="addStudent"></NewStudentFrom>
    <StudentTable v-bind:students="students" v-on:checked="checked" v-on:delete-student="deleteStudent"></StudentTable>
    <StudentMessage
      v-bind:see-message="seeMessage"
      v-bind:message="message"
      v-bind:most-recent-sign-in="mostRecentSignIn"
    ></StudentMessage>
  </div>
</template>

<script>
import NewStudentFrom from "./components/NewStudentFrom.vue";
import StudentMessage from "./components/StudentMessage.vue";
import StudentTable from "./components/StudentTable.vue";

export default {
  name: "App",
  components: {
    NewStudentFrom,
    StudentMessage,
    StudentTable
  },
  data: function() {
    return {
      mostRecentSignIn: "",
      message: "",
      seeMessage: false,
      students: [
        {
          name: "Student A",
          starID: "aa1234aa",
          present: false
        }
      ],
      errors: [],
      newStudentName: "",
      newStarID: ""
    };
  },
  methods: {
    addStudent: function(student) {
      this.students.push(student);
      this.students.sort(function(s1, s2) {
        let name1 = s1.name.toLowerCase();
        let name2 = s2.name.toLowerCase();
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
        return 0;
      });
    },
    deleteStudent: function (student) {
     this.students = this.students.filter(s => s.starID !== student.starID)
    },
    checked: function(student) {
      this.message = student.present ? "Hello" : "Goodbye";
      this.mostRecentSignIn = student.name;
      this.showMessage();
    },
    showMessage: function() {
      this.seeMessage = true;
      setTimeout(() => {
        this.seeMessage = false;
      }, 3000);
    }
  }
};
</script>

<style>
</style>
