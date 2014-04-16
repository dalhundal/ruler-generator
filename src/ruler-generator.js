var rulerGenerator = function(options) {
    var self = this;
    options = options || {};
    options = {
        width: options.width || 500,
        height: options.height || 40,
        tickSize: options.tickSize || 20,
        tickInterval: options.tickInterval || 180,
        tickParts: options.tickParts || 2,
        backgroundColor: options.backgroundColor || 'rgba(0,0,0,0.2)'
    };

    options.width+=1;

    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', options.width+'px');
    canvas.setAttribute('height', options.height+'px');
    var ctx = canvas.getContext('2d');
    ctx.translate(0.5,0.5);
    ctx.beginPath();
    ctx.rect(0,0,options.width,options.height);
    ctx.fillStyle=options.backgroundColor;
    ctx.fill();

    function drawTick(position) {
        ctx.beginPath();
        ctx.moveTo(position,options.height-options.tickSize);
        ctx.lineTo(position,options.height);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.font = '10px sans-serif';
        ctx.fillStyle='black';
        ctx.fillText(position,position+5,options.height-options.tickSize+12);
    };

    function drawMinorTick(position) {
        ctx.beginPath();
        ctx.moveTo(position,options.height-options.tickSize/2);
        ctx.lineTo(position,options.height);
        ctx.lineWidth = 1;
        ctx.stroke();
    };

    for (var i=0; i<=options.width; i+=options.tickInterval) {
        drawTick(i);
    };

    var minorTickInterval = options.tickInterval/options.tickParts;
    for (var i=0; i<=options.width; i+=minorTickInterval) {
        if (!(i%options.tickInterval)) continue;
        drawMinorTick(i);
    };

    this.__defineGetter__('canvas',function() {
        return canvas;
    });

    this.__defineGetter__('dataurl',function() {
        return canvas.toDataURL();
    });

    this.__defineGetter__('img',function() {
        var img = document.createElement('img');
        img.src = self.dataurl;
        img.width = options.width;
        img.height = options.height;
        return img;
    });
};
