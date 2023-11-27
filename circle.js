//TASK : 06
//DATE : 27/11/2023
//2) Class - Circle (area and circumference of circle)

class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return `Radius: ${this.radius}`;
    }
  
    set changeRadius(newRadius) {
      this.radius = newRadius;
    }
  
    getColor() {
      return `Color: ${this.color}`;
    }
  
    set changeColor(newColor) {
      this.color = newColor;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);  //pi*r*r
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;  //2*pi*r
    }
  }
  
  let circle = new Circle(1.0, "red"); 
  circle.changeRadius = 3.0; //change radius
  circle.changeColor = "pink"; //change color
  console.log(circle.getRadius());//get ragius
  console.log(circle.getColor());//get color
  console.log(circle.getArea().toFixed(2)); // get area
  console.log(circle.getCircumference().toFixed(2)); // get circumference


// output----------------------------------------------------

// Radius: 3
// Color: pink
// 28.27
// 18.85
  