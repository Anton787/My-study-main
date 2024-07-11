<template>
    <div>
        <input v-model="var1"> {{ znak }} <input v-model="var2"> = {{ a }} <br>
        <button @click="add">Click!</button><br>
        <br>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    znak: {
        type: String,
        required: false,
        default: '+',
        validator(val) {
            return ['+', '-', '/', '*', '%'].includes(val);
        }
    },
    modelValue: [String, Number]

})

const emit = defineEmits(['update:modelValue'])

const a = ref();
const var1 = ref(0);
const var2 = ref(0);


function add () {
    a.value = eval(`${var1.value} ${props.znak} ${var2.value}`);
    emit('update:modelValue', a.value)
}

</script>
<style scoped>

</style>