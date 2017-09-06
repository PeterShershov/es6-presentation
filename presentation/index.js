// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// images
const images = {
  confused: require("../assets/kat.png"),
  babelLogo: require("../assets/babel.png"),
  gulpLogo: require("../assets/gulp.png"),
  gruntLogo: require("../assets/grunt.png"),
  npmLogo: require("../assets/npm.png"),
  yarnLogo: require("../assets/yarn.png"),
  webpackLogo: require("../assets/webpack.png")
};

// gifs
const gifs = {
  enough: require("../assets/enough.gif"),
  what: require("../assets/what.gif")
};

preloader(images);
preloader(gifs);

// code for slide about const
const constCode = `const foo = 'bar';
foo = 'baz';`;

// code for slide about var
const varCode = `console.log(foo);
var foo = 'bar';

if (somethingIsTrue) {
  var baz = 'kaz';
}

console.log(baz);`;

// code for slide about let
const letCode = `console.log(foo);
const foo = 'bar';

if (somethingIsTrue) {
  let baz = 'kaz';
}

console.log(baz);`;

// code for slide about destructuring
const destructuringCode = `const teamCapacity = {
  boris: 67,
  bracha: 63,
  gal: 67,
  gil: 67,
  hadar: 67,
  hagit: 36,
  orya: 54,
  peter: 67,
  ronit: 58,
  sarah: 63,
  sveta: 18
}

const priorities = [1, 2, 3];

[high, medium, low] = priorities;
console.log(medium);

const {sveta} = teamCapacity;
const {hagit, hadar} = teamCapacity;
const {boris: capacityForPush} = teamCapacity;`;

// code for slide about templates
const templatesCode = `var name = 'Brad Pitt';
var greeting = \`Hi, my name is \$\{name\}!\`;`;

// code for slide about arrow function
const arrowFnCode = `const multiplyMe = x => x * 2;
multiplyMe(2);

const compareNumbers = (a,b) => {
  if (argumentsAreNumbers) {
    return a === b;  
  }  
};

compareNumbers(0, 100);

const noContext = {
  fn: () => {
    console.log(this);
  }
};`;

// code for slide about arrow spread
const spreadCode = `const numbers = [10, 2, 7, 4, 8, 4];
Math.min.apply(null, numbers);
Math.min(...numbers);

const oldActns = ['Schedule', 'Reshuffle'];
const newActns = ['Delete', 'Ignore'];
const allActns = [...oldActns, ...newActns];`;

// code for slide about prototypes
const prototypeCode = `function Car () {
  this.fuel = 0;
  this.distance = 0;
};

Car.prototype.move = function () {
  if (this.fuel < 1) {
    alert('Fuel tank is empty!');
  }
  this.fuel--
  this.distance += 2
};

Car.prototype.addFuel = function () {
  if (this.fuel >= 60) {
    alert('Fuel tank is full');
  }
  this.fuel++
};

var car = new Car()
car.addFuel()
car.move()
car.move()`;

// code for slide about classes
const classCode = `class Car {
  constructor () {
    this.fuel = 0
    this.distance = 0
  }

  move () {
    if (this.fuel < 1) {
      alert('Fuel tank is empty!')
    }
    this.fuel--
    this.distance += 2
  }

  addFuel () {
    if (this.fuel >= 60) {
      alert('Fuel tank is full')
    }
    this.fuel++
  }
}

class Fiat extends Car {
  constructor() {
    super()
    this.type = 'Fiat'
  }
}`

// code for slide about Async Await
const asyncAwaitCode = `function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = resolveAfter2Seconds(20);
  const b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);
});`


const theme = createTheme({
  blue: "#0084ff",
  yellow: "#EEB902",
  grey: "#474647"
}, {
    blue: "Montserrat",
    yellow: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={2} fit caps lineHeight={1} textColor="yellow">
            ES6
          </Heading>
          <Text margin="10px 0 0" textColor="yellow" size={1} fit bold>
            And also a bit of ES7 maybe... :)
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgImage={gifs.what}>
          <Heading size={6} textColor="yellow" bgColor="grey" caps>JS? ES? ES2015? ES6? WHAT?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="grey">
          <Heading size={6} textColor="blue">1995</Heading>
          <Heading size={7} textColor="yellow">NetScape created Javascript</Heading>
          <Heading size={6} textColor="blue">1996</Heading>
          <Heading size={7} textColor="yellow">Standardization by ECMA international</Heading>
          <Heading size={6} textColor="blue">1998</Heading>
          <Heading size={7} textColor="yellow">ECMAScript 2</Heading>
          <Heading size={6} textColor="blue">1999</Heading>
          <Heading size={7} textColor="yellow">ECMAScript 3</Heading>
          <Heading size={6} textColor="blue">2009</Heading>
          <Heading size={7} textColor="yellow">ECMAScript 5 (Harmony)</Heading>
          <Heading size={6} textColor="blue">2015</Heading>
          <Heading size={7} textColor="yellow">ECMAScript 2015 (ES6)</Heading>
          <Heading size={6} textColor="blue">2016</Heading>
          <Heading size={7} textColor="yellow">ECMAScript 2016 (ES7)</Heading>
          <Heading size={6} textColor="blue">2017</Heading>
          <Heading size={7} textColor="yellow">ESNext</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="grey">
          <Heading size={6} textColor="yellow">ECMAScript is the standard.</Heading>
          <Heading size={6} textColor="yellow" fit>Javascript is the language in practice.</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="grey">
          <Heading size={3} textColor="yellow">Tools</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="blue" textColor="grey">
          <Heading size={6} textColor="yellow" fit>To work with ES6 / 7 on older browsers</Heading>
          <Heading size={6} textColor="yellow" fit>you need a JS-to-JS transpiler</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="blue" textColor="grey">
          <Image height="500px" src={images.babelLogo} />
        </Slide>

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Image height="200px" src={images.gulpLogo} />
          <Image height="200px" src={images.gruntLogo} />
          <Image height="200px" src={images.webpackLogo} />
          <Image height="200px" src={images.npmLogo} />
        </Slide>

        <Slide transition={["fade"]} bgImage={gifs.enough}>
          <Heading size={6} textColor="yellow">Ok, let's go</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="yellow">
          <Heading size={6} textColor="grey">Const and Let</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="grey" textColor="yellow">
          <Heading size={6} textColor="yellow">Const</Heading>
          <List>
            <ListItem>Cannot be reassigned</ListItem>
            <ListItem>Not hoisted*</ListItem>
            <ListItem>Block scoped</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={constCode}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 2], note: "Uncaught TypeError: Assignment to constant variable." }
          ]}
        />

        <Slide transition={["fade"]} bgColor="grey" textColor="yellow">
          <Heading size={6} textColor="yellow">Let</Heading>
          <List>
            <ListItem>Can be reassigned</ListItem>
            <ListItem>Not hoisted*</ListItem>
            <ListItem>Block scoped</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={varCode}
          ranges={[
            { loc: [0, 2] },
            { loc: [0, 2], note: "undefined" },
            { loc: [3, 8] },
            { loc: [3, 8], note: "'kaz'" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={letCode}
          ranges={[
            { loc: [0, 2] },
            { loc: [0, 2], note: "ReferenceError: foo is not defined" },
            { loc: [3, 9] },
            { loc: [3, 9], note: "ReferenceError: baz is not defined" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Heading size={6} textColor="grey">Assignment Destructuring</Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={destructuringCode}
          ranges={[
            { loc: [0, 15]},
            { loc: [16, 18]},
            { loc: [16, 18], note: "2"},
            { loc: [19, 20], note: "var sveta = 18"},
            { loc: [20, 21], note: "var hagit = 36; var hadar = 67"},
            { loc: [21, 212], note: "var capacityForpush = 67"}
          ]}
        />

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Heading size={6} textColor="grey">Template Literals</Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={templatesCode}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 2], note: "var greeting = Hi, my name is Brad Pitt!" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Heading size={6} textColor="grey">Arrow functions</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="grey" textColor="yellow">
          <List>
            <ListItem>(param1, param2) => {'{ statements }'}</ListItem>
            <ListItem>You can’t name arrow functions statically</ListItem>
            <ListItem>Does not bind its own "this"</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={arrowFnCode}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 2], note: '4' },
            { loc: [3, 10] },
            { loc: [3, 10], note: 'false' },
            { loc: [11, 16] },
            { loc: [11, 16], note: 'Window' }
          ]}
        />

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Heading size={6} textColor="grey">Spread operator</Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={spreadCode}
          ranges={[
            { loc: [0, 2] },
            { loc: [0, 2], note:"2" },
            { loc: [2, 3], },
            { loc: [2, 3], note:"2" },
            { loc: [4, 7]},
            { loc: [4, 7], note:"const allActns = ['Schedule', 'Reshuffle', 'Delete', 'Ignore']"}
          ]}
        />

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Heading size={6} textColor="grey">Classes</Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={prototypeCode}
          ranges={[
            { loc: [0, 4] },
            { loc: [5, 12] },
            { loc: [13, 19] },
            { loc: [20, 24] }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={classCode}
          ranges={[
            { loc: [0, 1] },
            { loc: [0, 5] },
            { loc: [0, 13] },
            { loc: [0, 21] },
            { loc: [22, 28] }
          ]}
        />

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Heading size={6} textColor="grey">Async Await</Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={asyncAwaitCode}
          ranges={[
            { loc: [0, 7] },
            { loc: [0, 13] },
            { loc: [14, 17] },
            { loc: [14, 17], note:"10 (after 2 seconds)" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="yellow" textColor="grey">
          <Heading size={6} textColor="grey">And much much more!</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="yellow" textColor="blue">
          <Heading size={2} textColor="grey">Links</Heading>

          <List>
            <ListItem>developer.mozilla.org</ListItem>
            <ListItem>developers.google.com/web</ListItem>
            <ListItem>www.echojs.com</ListItem>
            <ListItem>www.ponyfoo.com</ListItem>
            <ListItem>Medium</ListItem>
            <ListItem>Meetup</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="yellow" textColor="blue">
          <Heading size={2} textColor="grey">Todaj!</Heading>
        </Slide>

      </Deck>
    );
  }
}
