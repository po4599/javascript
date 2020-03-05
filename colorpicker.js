function colorPickerSetup() {
    colorPicker = createColorPicker('#ed225d');
    colorPicker.position(0, height + 5);
}

function colorPickerValues() {
    fill(0);
    colorval = colorPicker.color();
    text(colorval.toString('rgb'),width-150,height-3);
}