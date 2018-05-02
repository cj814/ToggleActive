;(function(){
	function ToggleActive(className){
		this.toggleElems = null;
		this.curIndex = 0;
		this.init(className);
	}

	ToggleActive.prototype = {
		init: function(className){
			var that = this;
			var allElems = document.querySelectorAll("." + className);
			for(i = 0; i < allElems.length; i++) {
				(function(arg){
					allElems[i].onclick = function(){
						that.setActive(arg);
					}
				})(i);
			}
			this.toggleElems = allElems;
		},
		setActive: function(index){
			var that = this;
			this.toggleElems[that.curIndex].classList.remove("active");
			this.toggleElems[index].classList.add("active");
			this.curIndex = index;
		}
	}

	window.ToggleActive = ToggleActive;
})();