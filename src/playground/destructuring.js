const bookObj = {
  name: "Ego is enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = bookObj.publisher;
console.log(publisherName);

const introArr = ["D/27 Jairam Vatika", "Burhanpur", "MP", 450331];

const [, city, , pincode, Area = "Loadhipura"] = introArr;

console.log(city, pincode, Area);
