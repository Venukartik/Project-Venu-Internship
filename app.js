const app = Vue.createApp({
  data() {
    return {
      shownumbers: true,
      title: '   ',
      author: '  ',                
      age: 5
    }
  },                                       
  methods: {
    toggleShowNumbers() {
      this.showNumbers = !this.showNumbers
    },
    handleEvents(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)         
      }
    },
    handleMousemove(a) {
      this.x  = e.offsetX
      this.y = e.offsetY 
    } 
  }
})                   

app.mount('#app')  
   
  

     