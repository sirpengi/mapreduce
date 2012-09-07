var emit1 = function(){
	emit('count', 1);
};

var emitWordCount = function () {
    var words = this.text.trim().split(/\s+/);
    emit("count", words.length);
}

var emitChars = function () {
		var words = this.text.replace(/\s+/g, '').toUpperCase();
		for (i=0; i<words.length; i++) {
				emit(words[i], 1);
		}
}

var sumReduce = function(key, values){
	var ret = 0;
	values.forEach(function(v) {
		ret = ret + v;
	});
	return ret;
};

var emitChars2 = function () {
		var ret = {};
		var words = this.text.replace(/\s+/g, '').toUpperCase();
		for (i=0; i<words.length; i++) {
				var c = words[i];
				ret[c] = (ret[c] || 0) + 1;
		}
		emit('counts', ret);
}

var sumReduce2 = function(key, values) {
		var ret = {};
		values.forEach(function(v) {
			for (k in v) {
				ret[k] = (ret[k] || 0) + v[k];
			}
		});
		return ret;
}

var google = function() {
		if (this.text.indexOf(q) > -1){
			emit('results', {titles:[this.title]})
		}
}

var googleReduce = function(key, values) {
		var ret = {titles:[]};
		values.forEach(function(v) {
			ret.titles = ret.titles.concat(v.titles);
		});
		return ret;
}

