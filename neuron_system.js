// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class NeuronSystem {
  constructor(number) {
    this.neurons = [];
    for (let i=0; i<number; i++) {
      this.neurons.push(new Neuron(random(width), random(height), 5));
    }
  }
  run() {
    // Run every neuron
    for (let neurons of this.neurons) {
      neurons.display();
    }

  }
  // Das Neuronensystem applied die attraction force von jedem neuron an jedes axon
  neuronAxonInteraction() {
    for (let neuron1 of this.neurons) //loop über jedes neuron im Neuronensystem
    {

      for (let axon of neuron1.axons) //loop über jedes axon von den neuronen
      {

          for (let neuron2 of this.neurons) //loop über alle neurone
          {
            if (neuron1 !== neuron2 && p5.Vector.sub(axon.positionEnd,neuron2.position).mag()<30)
            {
              axon.positionEnd = neuron2.position;
              axon.velocity = createVector(0,0);
              axon.foundNeuron=true;
            }
            else if(neuron1 !== neuron2 && p5.Vector.sub(axon.positionEnd,neuron2.position).mag()<50)//ausschließen dass das neuron eigene axone anzieht
            {
              let force = neuron2.attract(axon);
              axon.applyAttraction(force);
            }


          }

      }
    }
  }


}