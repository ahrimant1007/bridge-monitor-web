export default {
  data() {
    return {
      matchedPath: '',
    }
  },
  created() {
    this.findMatchRoute()
  },
  watch: {
    $route(_new) {
      this.findMatchRoute(_new)
    }
  },
  methods: {
    findMatchRoute(route = this.$route) {
      const subRoute = route.matched.find(e => !!this.menus.find(m => m.path === e.path))
      this.matchedPath = subRoute ? subRoute.path : ''
      // console.log(this.$el && this.$el.className, this.matchedPath)
    }
  }
}
