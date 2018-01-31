new Vue({
  el: '#exercise',
  data: {
    classSwith: false,
      classZ1: 'z2c1',
      classZ2: {z2c2: true},
      classZ3: 'red',
      classZ4: 'red',
      classZ4bVal: 'true',
      styleZ5: 'color: red',
      widthZ6: 0
  },
  computed: {
    classSwitchVal: function() {
        console.log('classSwitchVal: ' + this.classSwith);
        return this.classSwith ? 'highlight' : 'shrink';
    },
    classZ4Computed: function() {
        console.log('v:' + this.classZ4bVal+' val:'+(this.classZ4bVal == 'true'?1:0));
          return {
              borderOrange: this.classZ4bVal == 'true'
          }
    },
      styleZ6: function() {
        return 'width: ' + this.widthZ6 +'px'
      }
  },
  methods: {
    startEffect: function() {
        console.log('startEffect start')
      var vm = this;
      setInterval(function () {
          vm.classSwith = ! vm.classSwith;
          console.log('startEffect done: ' + vm.classSwith)
      }, 2000);
    },
      startProgress : function() {
        var vm = this;
        setInterval(function(){
            if(vm.widthZ6  < 100) {
                vm.widthZ6 += 1;
            }
        }, 500);
      }
  }
});
