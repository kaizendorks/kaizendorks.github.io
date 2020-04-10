<template>
  <div class="tutorial-start-link">
    <router-link :to="to">
      {{ title }}
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: [String],
      required: true,
    },
    to: {
      type: [String, Object],
      required: true,
    }
  },
}
</script>

<style lang="stylus" scoped>
  .tutorial-start-link
    a
      margin-right 20px
      color #000
      height 38px
      line-height 38px
      transition all 0.3s ease
      position relative
      overflow hidden
      display inline-block
      background #FFF
      padding 0 15px
      text-decoration none
      border 1px solid #000
      border-radius 5px
      transition all 0.5s

      &:hover
        color #FFF
        border 1px solid $accentColor
        background-color $accentColor
        text-decoration none
</style>