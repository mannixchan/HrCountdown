/** 
 ** HrCountdown 精确到毫秒的倒计时js插件  
 ** By hairong.W 
 ** 2016-5-4 
 **/
	/*@param [必选] obj 2个属性：
        date ：结束的时间，支持合法的日期格式和时间戳
        box : 计时容器元素*/
	function HrCountdown(obj){
		this.getObj = {
			date : obj.date,
			end : obj.end || null,
			delay: obj.delay
		};
		this.setDom();
	}

	function formatTime(time) {
	  var date =new Date(time+8*3600*1000)
	  return date.toJSON().substr(0,23).replace('T', ' ').replace(/-/g, '.')
	}

	// (有返回值) 根据传入的结束时间跟当前时间对比，返回当前距离结束的时间对象：
	HrCountdown.prototype.setTime = function(){
		var _this = this
			_this_getobj = _this.getObj
			now = new Date()
			now_time = now.getTime()
			this_time = (new Date(_this_getobj.date)).getTime()
			dur = (this_time - now_time) / 1000  
			mss = this_time - now_time 
			pms = {}//属性为各时间类型的对象
			if(mss > _this_getobj.delay){
			
		}else{
			// console.log('结束了');
			_this_getobj.end && _this_getobj.end(_this);
			console.log('设定的时间 '+formatTime((new Date(_this_getobj.date)).getTime()));
			return;
		}
		return pms;
	};

	// 根据setTime方法返回的时间对象，渲染在页面上：
	HrCountdown.prototype.setDom = function(){
		var _this = this
			pms = _this.setTime()
		if(pms){
			//console.log(1)
			setTimeout(_this.setDom.bind(_this),  10); //如果需要精确到毫秒，则10毫秒渲染一次dom，反之则500毫秒渲染一次dom
		}
	}

	let HrCountdown1=function(obj){
	  new HrCountdown(obj)
	}
// 使用demo---/s
// HrCountdown({
// 	date : 1454567000123, 
// 	box : $("#timeBox"),
//  end : function(_this){ } //倒计时结束后的回调,传进来的实参是实例的this指针
// });
// HrCountdown({
// 	date : "2017-8-3 18:57:11", 
// 	box : $("#timeBox")
// });
// 使用demo---/e
HrCountdown1({
  date: '2021-1-12 10:59:00',
  end: function(_this) {
    console.log('执行的时间 '+formatTime((new Date()).getTime()))
  },
  delay: 300
})