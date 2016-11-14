LineCollection lines;
float textSize;
PImage p1;
void setup(){ //<>//
  size(500,500);
  textSize = 15; 
  textFont(createFont("Times New Roman", textSize));
  // parse strings, construct Lines container
  String[] textValues = new String[]{"This","is","a","sample","string","text1","text2","text3","text4"};
  lines = new LineCollection(textValues);
  
  noLoop();
  p1=loadImage("box.jpeg");
}

void draw() {   

  background(255); 
  lines.draw(); 
  image(p1, 250,250);
  //Image image = loadImage("box.png");
  //image(image, 250, 250);  
}

void mouseMoved() { lines.mouseMoved(mouseX,mouseY); redraw(); }
void mousePressed() { lines.mousePressed(mouseX,mouseY); redraw(); }
void mouseDragged() { lines.mouseDragged(mouseX,mouseY); redraw(); }
void mouseReleased() { lines.mouseReleased(mouseX,mouseY); redraw(); }


/**
 * A collection of lines. This is *only* a collecton,
 * it is simply responsible for passing along events.
 */
class LineCollection {
  Line[] lines;
  int boundaryOverlap = 20;
  int space = 45;

  // construct
  LineCollection(String[] strings){
    lines = new Line[strings.length];
    int x=10, y=200;
    for(int i=0, last=strings.length; i<last; i++) {
      //x = (int) random(0, width);
      //y = (int) random(0, height);
      x = (int) (x+space);
      //y = (int) 200;
        if(x>width){
         x = 10;
        y = (int) y + 20;
        }
      
      lines[i] = new Line(strings[i], x, y);   
    }
  }

 
  void draw() {

    for(Line l: lines) { l.draw(); }
  }


  void mouseMoved(int mx, int my) { for(Line l: lines) { l.mouseMoved(mx,my); }}  //<>//
  void mousePressed(int mx, int my) { for(Line l: lines) { l.mousePressed(mx,my); }} 
  void mouseDragged(int mx, int my) { for(Line l: lines) { l.mouseDragged(mx,my); }}
  void mouseReleased(int mx, int my) { for(Line l: lines) { l.mouseReleased(mx,my); }}
}

/**
 * Individual lines
 */
class Line {
  String s;
  float x, y, w, h;
  boolean active;
  color fillColor = 0;
  int cx, cy, ox=0, oy=0;

  public Line(String _s, int _x, int _y) {
    s = _s;
    x = _x;
    y = _y;
    w = textWidth(s);
    h = textSize;
  }

  void draw() {
    fill(fillColor);
    text(s,ox+x,oy+y+h);
  }

  boolean over(int mx, int my) {
    return (x <= mx && mx <= x+w && y <= my && my <= y+h);
  }

  // Mouse moved: is the cursor over this line?
  // if so, change the fill color
  void mouseMoved(int mx, int my) {
    active = over(mx,my);
    fillColor = (active ? color(155,155,0) : 0);
  }

  // Mouse pressed: are we active? then
  // mark where we started clicking, so 
  // we can do offset computation on
  // mouse dragging.
  void mousePressed(int mx, int my) {
    if(active) {
      cx = mx;
      cy = my;
      ox = 0;
      oy = 0; 
    }
  }

  // Mouse click-dragged: if we're active,
  // change the draw offset, based on the
  // distance between where we initially
  // clicked, and where the mouse is now.
  void mouseDragged(int mx, int my) {
    if(active) {
      ox = mx-cx;
      oy = my-cy;
    }
  }

  // Mouse released: if we're active,
  // commit the offset to this line's
  // position. Also, regardless of
  // whether we're active, now we're not.  
  void mouseReleased(int mx, int my) {
    if(active) {
      x += mx-cx;
      y += my-cy;
      ox = 0;
      oy = 0;
    }
    active = false;
  } //<>//
}