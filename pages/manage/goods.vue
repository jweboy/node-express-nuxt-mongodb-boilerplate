<template>
  <div>
    goods table
  </div>
</template>

<script>
export default {
  mounted() {
    fetch('/api/goods')
      .then(res => res.json())
      .then(data => console.warn(data))
      .catch(error => console.error(error))
  }
}
</script>
