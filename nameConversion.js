document.getElementById("convert-btn").addEventListener("click",function () {
    const fullName = document.getElementById("text").value;

    // camel case
    const [firstName, lastName] = fullName.toLowerCase().split(" ");
    
    const camelCase = `${firstName}${lastName.replace(
        lastName[0],
        lastName[0].toUpperCase()
    )}`;

    document.getElementById("camel-case").innerText = camelCase;

    //Pascal case

    const PascalCase = fullName
    .toLowerCase()
    .split(" ")
    .map((el)=> el.replace(el[0], el[0].toUpperCase()))
    .join("");

    document.getElementById("pascal-case").innerText = PascalCase;

    //Snake Case
    const SnakeCase = fullName.toLowerCase().split(" ").join("_");

    document.getElementById("snake-case").innerText = SnakeCase;

    //Screaming Snake Case
    const screamingsnakecase = fullName.toUpperCase().split(' ').join('_');

    document.getElementById("screaming-snake-case").innerText = screamingsnakecase;
    
    //kebab case
    const kebabcase = fullName.toLowerCase().split(" "). join("-");

    document.getElementById("kebab-case").innerText = kebabcase;

    //screaming kebab case
    const screamingkebabcase = fullName.toUpperCase().split(" ").join("-");

    document.getElementById("screaming-kebab-case").innerText = screamingkebabcase;
    


});