import "./styles.css";
//Dog datas are from: https://en.wikipedia.org/wiki/Basenji,https://en.wikipedia.org/wiki/Akita_(dog),https://en.wikipedia.org/wiki/Newfoundland_dog,https://en.wikipedia.org/wiki/Whippet,https://en.wikipedia.org/wiki/Rottweiler

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  async function submmit() {
    const dogList = [
      "basenji",
      "akita",
      "newfoundland",
      "whippet",
      "rottweiler"
    ];
    const dogData = [
      "The Basenji is a breed of hunting dog. It was bred from stock that originated in central Africa. The Fédération Cynologique Internationale places the breed in the Spitz and primitive types. The Basenji produces an unusual yodel-like sound, due to its unusually shaped larynx. This trait also gives the Basenji the nickname the 'barkless dog.",
      "The Akita is a historic dog breed of large size originating from the mountains of northern Japan. The two separate varieties of Akita are a pure Japanese strain, commonly called Akita-ken (ken is the on'yomi for inu meaning dog in Japanese), and a mixed American strain, commonly larger. The Akita has a short double coat similar to that of many other northern spitz breeds.",
      "The Newfoundland is a large working dog. They can be black, brown, grey, or white. However, in the Dominion of Newfoundland, before it became part of the confederation of Canada, only black and Landseer (white-and-black) coloured dogs were considered to be proper members of the breed. They were originally bred and used as working dogs for fishermen in Newfoundland. Newfoundlands are known for their giant size, intelligence, tremendous strength, calm disposition, love of children and loyalty.",
      "The Whippet is a British dog breed of medium size. They are a sighthound breed that originated in England, where they descended from the Greyhound. Whippets today still strongly resemble a smaller Greyhound. Part of the hound group, Whippets have relatively few health problems other than arrhythmia. Whippets also participate in dog sports such as lure coursing, agility, dock diving and flyball.",
      "The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market. This continued until the mid-19th century when railways replaced droving. Although still used to herd stock in many parts of the world, Rottweilers are now also used as search and rescue dogs, guard dogs, and police dogs"
    ];

    for (let i = 0; i < dogList.length; i++) {
      const url = "https://dog.ceo/api/breed/" + dogList[i] + "/images/random";
      const dataPromise = await fetch(url);
      const data = await dataPromise.json();
      let body = document.getElementById("body");
      let img = document.createElement("img");
      img.classList.add("wiki-img");
      let h1 = document.createElement("h1");
      h1.classList.add("wiki-header");
      let text = document.createElement("p");
      text.classList.add("wiki-text");

      let div1 = document.createElement("div");
      div1.classList.add("wiki-item");
      let div2 = document.createElement("div");
      div2.classList.add("wiki-content");
      let div3 = document.createElement("div");
      div3.classList.add("img-container");

      img.src = data.message;
      h1.innerText = dogList[i];

      text.innerText = dogData[i];
      div3.appendChild(img);
      div2.appendChild(div3);
      div2.appendChild(text);
      div1.appendChild(h1);
      div1.appendChild(div2);

      body.appendChild(div1);
    }
  }
  submmit();
}
