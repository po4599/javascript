function grid() {
  	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
            if (x==0) text(y,x,y);
            if (y==0) text(x,x,y+10);
		}
	}
}