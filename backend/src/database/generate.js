const { faker } = require('@faker-js/faker');

const generateObject = () => {
    // const image = "https://i.pinimg.com/736x/f9/3b/6c/f93b6c7036834df22243d30c664f96d4.jpg";
    const image = "https://noevalleybakery.com/cdn/shop/files/Valentines_Cookie_Box_Cookies_2048x.jpg?v=1738097277"
    const description = faker.lorem.sentence({ min: 30, max: 50 });

    const obj = {
        image: image,
        description: description
    };

    return obj;
}

module.exports = { generateObject };
