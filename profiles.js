

/*-------*/


let profiles = [
    { name:'Jeniffer', photo:'https://randomuser.me/api/portraits/women/82.jpg'},
    {name: 'Muscan',photo:'https://randomuser.me/api/portraits/women/38.jpg'},
    { name: 'Robert1' , photo :'https://randomuser.me/api/portraits/men/90.jpg'},
    { name: 'Juanette', photo: 'https://randomuser.me/api/portraits/women/92.jpg' },
    { name: 'Harold', photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Vince', photo: 'https://randomuser.me/api/portraits/men/25.jpg' },
    { name: 'Peggy', photo: 'https://randomuser.me/api/portraits/women/52.jpg' },
];


function makePerson(person) {
    let parent = document.querySelector('main ul');

    //for(i=0;i<profiles.length; i++){

    let element = document.createElement('li');
    element.classList.add('person');

    // name in <p>
    let name = document.createElement('p');
    name.textContent = person.name;

    // image in an <img>
    let pic = document.createElement('img');
    pic.setAttribute('src', person.photo);

    // two buttons in <button>
    let like = document.createElement('button');
    like.textContent = 'Like';
    like.addEventListener('click', function () {
        console.log(person.name + ' was liked');
       
    });

    let dislike = document.createElement('button');
    dislike.textContent = 'Nope';
    dislike.addEventListener('click', function () {
        console.log('You noped ' + person.name);

        // Reduce opacity
        // element.style.opacity = 0.5; // don't
        element.classList.add('disabled');
    });

    element.appendChild(pic);
    element.appendChild(name);
    element.appendChild(like);
    element.appendChild(dislike);
    //element.appendChild(btn);

    parent.appendChild(element);
}


window.addEventListener('load', function () {
    // console.log('success!');
   let count=0;
   let btn = document.querySelector('#add');
   btn.addEventListener('click', function () {
        // console.log('new person');
     if(count<profiles.length){
       makePerson(profiles[count]);
       count=count+1;
      }
     console.log(count);
    }); 

});  



