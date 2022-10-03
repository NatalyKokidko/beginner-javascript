const people = [
  { name: 'Wes', cool: true, country: 'Canada'},
  { name: 'Scott', cool: true, country: 'America'},
  { name: 'Snickers', cool: false, country: 'Dog Country'},
];
/*people.forEach((person, index) => {
  if (person.name === 'Wes') {
      console.warn('Damb name');
  }
  });*/

  people.forEach((person, index) => {
      //debugger;
      /*console.groupCollapsed(`${person.name}`);
      console.log(person.country);
      console.log(person.cool);
      console.log('DONE');
      console.groupEnd(`${person.name}`);*/ 
      console.log(person.name);
  });

  console.table(people);

  function doALotOfStuff () {
      console.group('Doing some stuff');
      console.log('Hey Im one');
      console.warn('watch out');
      console.error('hey');
      console.groupEnd('Doing some stuff');
  }


  function doctorize(name) {
      //console.count(`running Doctorize for ${name}`);
      return `Dr. ${name}`;
  }

  function greet(name) {
      doesntExist();
      return `Hello ${name}`;
  }

  function go() {
      const name = doctorize(greet('Wes'));
      console.log(name);
  }

  function bootstrap() {
      console.log('Starting the app!');
      go();
  }

  const button = document.querySelector('.bigger');
  button.addEventListener('click', function(e) {
      const newFontSize = 
      parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
      e.currentTarget.style.fontSize = `${newFontSize}px`;
  });

  async function fetchDadJoke() {
      const res = await fetch('htpp://icanhazdadjoke.com/', {
          headers: {
              Accept: 'text/plain',
          },
      });
      const joke = await res.text();
      console.log(joke);
      return joke;
  }