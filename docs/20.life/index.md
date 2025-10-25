---
hidden: true
readingTime: false
date: false
author: false
recommend: false
---

# 浮生若梦

- [test](./test.md)


<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>



