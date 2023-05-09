<template>
  <q-page class="flex items-center justify-around">
    <div class="flex-break">
      <h4>Welcome to my ToDo List</h4>
      <img 
        alt="girl avatar"
        src="~assets/girl.png"
        style="width: 400px; height: 300px"
      >
    </div>
    <div class="q-pa-md" style="max-width: 600px">
      <q-form
        @keyup.enter="addTask"
        class="q-gutter-md flex flex-center"
      >
        <q-input
          filled
          v-model="newTask"
          label="Add your task"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
          <q-btn @click="addTask" label="Add task" type="submit" color="dark"/>
      </q-form>
   
      <q-list separator>
        <q-item 
          @click="task.done = !task.done"
          clickable
          :class="{ 'done bg-pink-1': task.done }"
          v-for="(task, index) in tasks" 
          :key="task.title" 
          v-ripple>
          <q-item-section avatar>
            <q-checkbox class="no-pointer-events"
            v-model="task.done" val="teal" color="dark" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
          </q-item-section>
          <q-item-section v-if="task.done" side> 
            <q-btn @click.stop="deleteTask(index)" size="10px" round color="dark" icon="delete_forever" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      newTask: "",
      tasks:[
        {
          title: "Go to shop",
          done: false,
        },
        {
          title: "Go to the pool",
          done: false,
        },
        {
          title: "Sign up for dancing",
          done: false,
        },
        {
          title: "Do homework",
          done: false,
        },
        {
          title: "Go to museum or zoo",
          done: false,
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {

      this.$q.dialog({
        title: 'Attention!',
        message: 'Are you sure you want to delete task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index,1);
        this.$q.notify('Task deleted')
      })
    },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ""
    }
  }
})
</script>
<style lang="scss">
  body {
    color: $dark;
    background:#c6afc10d;
  }
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: grey;
    }
  }
</style>