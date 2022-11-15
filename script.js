async function getRandomUser() {
    const Response = await fetch('https://randomuser.me/api/');
    const data = await Response.json();
    const user = data.results[0];
    displayuser(user);
}
function displayuser(user) {
    const name = document.getElementById("name");
    const gender = document.getElementById("gender");
    const phone = document.getElementById("phone");
    const location = document.getElementById("location");
    const image = document.getElementById("image");

    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    gender.innerText = `${user.gender}`;
    email.innerText = `${user.email}`;
    phone.innerText = `${user.phone}`;
    location.innerText = `${user.location.country}`;
    image.setAttribute('src', `${user.picture.large}`)
}
getRandomUser();
