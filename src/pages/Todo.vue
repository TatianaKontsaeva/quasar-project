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
        @submit.prevent="addTask"
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
          <q-btn 
          :disabled="!newTask"
          @click="addTask" 
          label="Add task" 
          type="submit" 
          color="dark" 
          class="add_btn"/>
      </q-form>
   
      <q-list separator>
        <q-item 
      
          @click="toggleDone(task.id)"
          clickable
          :class="{ 'done bg-pink-1': task.done }"
          v-for="task in tasks" 
          :key="task.id" 
          v-ripple>
          <q-item-section avatar>
            <q-checkbox 
              class="no-pointer-events"
              v-model="task.done" 
              val="teal" 
              color="dark" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
          </q-item-section>
          <q-item-section v-if="task.done" side> 
            <q-btn 
              @click.stop="deleteTask(task.id)" 
              size="10px" 
              round color="dark" 
              icon="delete_forever" 
              />
          </q-item-section>
        </q-item>
      </q-list>
      <div 
        v-if="!tasks.length"
        class="no-tasks text-center">
        <q-icon name="task" size="xl"/>
        <div class="text-h4">No Tasks!</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// import { defineComponent } from 'vue';
import { db } from "../firebase";
import { useQuasar } from "quasar";
import { ref, onMounted } from 'vue';
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  doc, 
  deleteDoc, 
  updateDoc,
  query, 
  orderBy,
 } from "firebase/firestore";
 
 //firebase ref 
const tasksCollectionRef = collection(db, "tasks");
const tasksCollectionQuery = query(tasksCollectionRef, orderBy("date", "desc"));

//todoList
const tasks = ref ([]);
const newTask = ref("");

const $q = useQuasar();

//get tasks
onMounted(async () => {
  onSnapshot(tasksCollectionQuery, (querySnapshot) => {
    const fbTasks = [];
    querySnapshot.forEach((doc) => {
      const task = {
        id: doc.id,
        title: doc.data().title,
        done: doc.data().done,
    }; 
    fbTasks.push(task); 
    });
    tasks.value = fbTasks;
  });
})
const addTask = async () => {
  if (newTask.value.trim() === "") {
        $q.notify({
          type: "negative",
          message: "Your task is empty",
        }); 
  } else {
      addDoc(tasksCollectionRef, {
        title: newTask.value,
        done: false,
        date: Date.now(),
      });
        newTask.value = "";
        $q.notify({
          type: "positive",
          message: "Your task has been added.",
        });
      }
    }
//delete todo
const deleteTask = async (id) => {
  $q.dialog({
    title: 'Attention!',
    message: 'Are you sure you want to delete task?',
    cancel: true,
    persistent: true
}).onOk(() => {
  deleteDoc(doc(tasksCollectionRef,id));
    $q.notify({
      type: "negative", 
      message: 'Task deleted'
  })
 })
}
//toggler
const toggleDone = (id) => {
  const index = tasks.value.findIndex((task) => task.id === id);
    updateDoc(doc(tasksCollectionRef, id), {
    done: !tasks.value[index].done,
  });
}

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
  .q-dialog__inner--minimized {
      background: #96898d;
  }
 .q-dialog-plugin {
      background-color: $dark;
      color:white;
 }
 
</style>