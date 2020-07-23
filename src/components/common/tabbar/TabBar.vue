<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  z-index:9;
  height: 49px;
  background-color: #ccc;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>