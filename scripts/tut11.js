var employee = {
  id: 1,
  greet: function () {

//without arrow fn

    // var self=this;
    // setTimeout(function () {
    //   console.log(self.id);
    // }, 1000);

    //with arrow fn

    setTimeout(() => {
        console.log(this.id);
    }, 1000);
  }
};
employee.greet();
