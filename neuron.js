class Neuron {
  constructor(x, y, axonNumber) {
    this.power = 0.002;
    this.position = createVector(x, y);
    this.axons = [];
    for (let i = 0; i < axonNumber; i++) {
      this.axons.push(new Axon(this.position.x, this.position.y));
    }
  }
  display() {
    stroke(255);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 32, 32);
    for (let i = 0; i < this.axons.length; i++) {
      this.axons[i].display();
      this.axons[i].update();
    }
    ps.addParticle(this.position.x, this.position.y);

  }

    attract(axon) {
    let dir = p5.Vector.sub(this.position, axon.positionEnd); // Calculate direction of force
    //dir.normalize(); // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    let force = this.power;
    dir = p5.Vector.mult(dir, force);
    return dir;
  }


};