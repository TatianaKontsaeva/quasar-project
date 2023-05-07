<template>
  <q-page class="flex items-center justify-around">
    <div class="flex-break">
      <h2>My ToDo List</h2>
      <img 
        alt="girl avatar"
        src="~assets/girl.jpg"
        style="width: 400px; height: 300px"
      >
    </div>
    <div class="q-pa-md" style="max-width: 600px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md flex flex-center"
      >
        <q-input
          filled
          v-model="add"
          label="Add your task"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
          <q-btn label="Add task" type="submit" color="primary"/>

      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useQuasar from 'quasar/src/composables/use-quasar.js';
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const $q = useQuasar()
    const add = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      add,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
      onReset () {
        add.value = null
      }
    }
  }
})
</script>
