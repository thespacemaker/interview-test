<template>
  <div class="hello">
    <div class="flex justify-center p-4 text-4xl flex-12">
      Hello World 👋🏼
    </div>
    <div class="text-center flex justify-center flex-12">
      This is me using Tailwind for the first time!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
