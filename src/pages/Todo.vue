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
            <q-item-label>{{task.title}}</q-item-label>
          </q-item-section>
          <q-item-section v-if="task.done" side> 
            <q-btn @click.stop="deleteTask(index)" size="10px" round color="dark" icon="delete_forever" />
          </q-item-section>
        </q-item>
      </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
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
      this.tasks.splice(index,1);
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