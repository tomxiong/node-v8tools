var v8tools = require('../build/Release/v8tools.node');
describe('v8tools', function() {
   this.timeout(300000);
   describe('#afterGC()', function () {
     it('should get gc metric  without error', function(done) {
	var isDone = false;
	v8tools.afterGC(function(gcType, gcFlags, usedHeapSize) {
	  console.log('GC Type', gcType);
	  console.log('GC Flags', gcFlags);
	  console.log('Used Heap Size', usedHeapSize);
	  if (!isDone) {
		done();
		isDone = true;		
	   }	
	});
      });
   });
});	

setInterval(function() {
  for(var i = 0; i < 1000; i++) {
    new Object();
  }
}, 2000);

