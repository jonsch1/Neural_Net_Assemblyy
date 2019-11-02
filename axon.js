class Axon {
  constructor(x, y) {
    this.positionStart = createVector(x, y);
    this.positionEnd = createVector(x, y);
    this.dir = createVector(random(-1,1),random(-1,1)); // generate random direction
    this.velocity = this.dir.normalize(); // velocity in random direction
    this.acceleration = createVector(0, 0);
    this.foundNeuron= false;
    this.dead=false;
  }

  display() {
    if (this.dead=== false) {
      strokeWeight(2);
      line(this.positionStart.x, this.positionStart.y, this.positionEnd.x, this.positionEnd.y);
    }
  }

  applyAttraction(f) {
    if (this.foundNeuron === false) {
      this.velocity = p5.Vector.add(this.velocity, f);
    }
  }


  update() {
    if (this.foundNeuron === false) {
      this.positionEnd.add(this.velocity);
      this.positionEnd.limit(800);
    }
    if (this.positionEnd.x<0 || this.positionEnd.x>width || this.positionEnd.y<0 ||this.positionEnd.y > height)
    {
      this.dead=true;
    }
  }
}