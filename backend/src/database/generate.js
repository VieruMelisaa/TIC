const { faker } = require('@faker-js/faker');

const generateObject = () => {
    const image = "https://i.pinimg.com/736x/f9/3b/6c/f93b6c7036834df22243d30c664f96d4.jpg";
    const description = faker.lorem.sentence({ min: 70, max: 100 });

    const obj = {
        image: image,
        description: description
    };

    return obj;
}

module.exports = { generateObject };
