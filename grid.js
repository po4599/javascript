function grid2() {
    fill(120);
    for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(160);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
            if (x==0) text(y,x,y);
            if (y==0) text(x,x,y+10);
		}
	}
    fill(0);
    var loc = mouseX + ',' +  mouseY;
    text(loc,width-48,height-2);
}