<template>
  <div>
    <div class="comment__container">
      <div class="icon__tplt comment__icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment-cta",
  props: ["Comment-cta"],
};
</script>

<style scoped lang="scss">
.comment__container {
  width: var(--iconSize);
  height: var(--iconSize);
}
.icon__tplt {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: var(--iconSize) var(--iconSize);
  transition: all 0.2s ease-in-out;
  transition-property: background-image, opacity;
  cursor: pointer;
}
.comment__icon {
  background-image: url(../../images/icons/icon-linear/message.svg);
  animation: iconBounce_out 0.3s cubic-bezier(0.64, 0.57, 0.67, 1.53);
}
.comment__icon:hover {
  background-image: url(../../images/icons/icon-bold/message.svg);
  opacity: 0.5;
}
</style>
