function sub1() {
    var x;
    function sub2() {
      console.log(x); 
    };
    function sub3() {
      var x;
      x = 3;
      sub4(sub2);
    };
    function sub4(subx) {
      var x;
      x = 4;
      subx();
    };
    x = 1;
    sub3();
  };
  
  //Call the function
  sub1();