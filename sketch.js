// -------------------------------------
// RELATIONAL ARCHIVE
// Time = x-axis
// People = y-axis
// Each point = one photograph
// -------------------------------------


// TIME RANGE

let minYear = 1900;
let maxYear = 2023;


// -------------------------------------
// PHOTO DATA
// -------------------------------------
//
// THIS IS THE SECTION YOU WILL EDIT.
//
// Each photograph needs:
//
// id      = image number
// year    = approximate year
// people  = everyone in the photograph
//
// Example:
//
// {
//   id: 1,
//   year: 1945,
//   people: ["Evelyn", "James"]
// }
//
// Image 1 will automatically load:
//
// images/1.jpg
//
// -------------------------------------


let photoData = [

  {
    id: 1,
    year: 1910,
    people: ["Marnie Cassidy", "Kathleen Cassidy Smith"]
  },

  {
    id: 2,
    year: 1918,
    people: ["Eleanor Cassidy Redmond"]
  },

  {
    id: 3,
    year: 1920,
    people: ["Eleanor Cassidy Redmond"]
  },

  {
    id: 4,
    year: 1923,
    people: ["Owen Smith", "Kathleen Cassidy Smith"]
  },

  {
    id: 5,
    year: 1932,
    people: ["Richard Smith"]
  },

  {
    id: 6,
    year: 1933,
    people: ["Eleanor Cassidy Redmond", "Richard Smith"]
  },

  {
    id: 7,
    year: 1934,
    people: ["Vin Cassidy", "Richard Smith", "Eleanor Cassidy Redmond"]
  },

  {
    id: 8,
    year: 1934,
    people: ["Marnie Cassidy", "Richard Smith", "Eleanor Cassidy Redmond"]
  },

  {
    id: 9,
    year: 1941,
    people: ["Larry Smith", "Richard Smith"]
  },

  {
    id: 10,
    year: 1942,
    people: ["Richard Smith"]
  },

  {
    id: 11,
    year: 1944,
    people: ["Kathleen Smith Scipione", "Richard Smith", "Dorothy Smith Nevins"]
  },

  {
    id: 12,
    year: 1949,
    people: ["Richard Smith", "Barbara Golden Smith"]
  },

  {
    id: 13,
    year: 1950,
    people: ["Richard Smith"]
  },

  {
    id: 14,
    year: 1950,
    people: ["Marnie Cassidy", "Richard Smith", "Eleanor Cassidy Redmond"]
  },

  {
    id: 15,
    year: 1952,
    people: ["Richard Smith", "Barbara Golden Smith"]
  },

  {
    id: 16,
    year: 1956,
    people: ["Barbara Golden Smith", "Richard Smith"]
  },

   {
    id: 17,
    year: 1957,
    people: ["Richard Smith", "Liz Smith"]
  },

  {
    id: 18,
    year: 1957,
    people: ["Eleanor Cassidy Redmond", "Liz Smith"]
  },

  {
    id: 19,
    year: 1959,
    people: ["Eleanor Cassidy Redmond", "Richard Smith", "Margaret Smith", "Kathleen Nevins", "Liz Smith", "Marnie Cassidy"]
  },

  {
    id: 20,
    year: 1961,
    people: ["Margaret Smith", "Liz Smith", "Patti Nevins", "John Nevins", "Kathleen Nevins" ]
  },

  {
    id: 21,
    year: 1962,
    people: ["Liz Smith", "Eleanor Cassidy Redmond", "Margaret Smith"]
  },

  {
    id: 22,
    year: 1964,
    people: ["Alice Cassidy", "Marnie Cassidy", "Margaret Smith", "Vin Cassidy"]
  },

  {
    id: 23,
    year: 1968,
    people: ["Richard Smith", "Kevin Cassidy", "Vin Cassidy", "Barbara Golden Smith", "Barbara Burrows", "Liz Smith", "Alice Cassidy", "Margaret Smith", "Fran Burrows"]
  },

   {
    id: 24,
    year: 1968,
    people: ["Richard Smith", "Barbara Golden Smith", "Margaret Smith", "Liz Smith"]
  },

  {
    id: 25,
    year: 1969,
    people: ["Barbara Golden Smith", "Marnie Cassidy", "Alice Cassidy", "Vin Cassidy", "Richard Smith"]
  },

  {
    id: 26,
    year: 1971,
    people: ["Richard Smith", "Barbara Golden Smith"]
  },

  {
    id: 27,
    year: 1973,
    people: ["Barbara Golden Smith", "Richard Smith"]
  },

  {
    id: 28,
    year: 1975,
    people: ["Vin Cassidy", "Alice Cassidy", "Marnie Cassidy", "Eleanor Cassidy Redmond"]
  },

   {
    id: 29,
    year: 1975,
    people: ["Richard Smith"]
  },

  {
    id: 30,
    year: 1976,
    people: ["Barbara Golden Smith", "Kathleen Smith Scipione", "Richard Smith", "Liz Smith", "Vin Cassidy", "Alice Cassidy", "Margaret Smith"]
  },

  {
    id: 31,
    year: 1980,
    people: ["Dorothy Cassidy McGuire", "Margaret Smith"]
  },

  {
    id: 32,
    year: 1980,
    people: ["Barbara Golden Smith", "Dorothy Smith Nevins", "Eleanor Cassidy Redmond", "Dorothy Cassidy McGuire", "Anna Cassidy"]
  },

   {
    id: 33,
    year: 1982,
    people: ["Richard Smith", "Fran Darrow Golden", "Barbara Golden Smith", "Fran Golden Burrows", "Fran Burrows", "Barbara Burrows"]
  },

  {
    id: 34,
    year: 1985,
    people: ["Richard Smith", "Fran Darrow Golden", "Barbara Golden Smith", "Margaret Smith", "Jim Ryan", "Liz Smith", "Bob Barry"]
  },

  {
    id: 35,
    year: 1988,
    people: ["Richard Smith"]
  },

  {
    id: 36,
    year: 1993,
    people: ["Catie Ryan Taras"]
  },


   {
    id: 37,
    year: 1998,
    people: ["Catie Ryan Taras", "Kathleen Smith Scipione", "Dorothy Smith Nevins", "Margaret Smith"]
  },

  {
    id: 38,
    year: 1999,
    people: ["Barbara Golden Smith", "Richard Smith", "Dorothy Smith Nevins", "Anthony Scipione", "Kathleen Smith Scipione"]
  },

  {
    id: 39,
    year: 2001,
    people: ["James Ryan", "Catie Ryan Taras", "Robert Barry", "Jenny Barry"]
  },

  {
    id: 40,
    year: 2003,
    people: ["Margaret Smith", "Richard Smith", "James Ryan", "Robert Barry", "Catie Ryan Taras", "Jenny Barry"]
  },


   {
    id: 41,
    year: 2006,
    people: ["Robert Barry", "Liz Smith", "Richard Smith"]
  },

  {
    id: 42,
    year: 2013,
    people: ["Catie Ryan Taras", "Richard Smith"]
  },

  {
    id: 43,
    year: 2018,
    people: ["Michael Taras", "Richard Smith"]
  },

  {
    id: 44,
    year: 2021,
    people: ["Catie Ryan Taras", "Richard Smith", "Michael Taras"]
  },

  {
    id: 45,
    year: 2021,
    people: ["Richard Smith"]
  },

  {
    id: 46,
    year: 2022,
    people: ["Richard Smith"]
  },

  {
    id: 47,
    year: 2022,
    people: ["Richard Smith", "Kathleen Smith Scipione"]
  },

  {
    id: 48,
    year: 2022,
    people: ["Richard Smith", "Catie Ryan Taras"]
  },

  {
    id: 49,
    year: 2023,
    people: ["Rhiannon Taras", "Richard Smith"]
  },

  {
    id: 50,
    year: 2023,
    people: ["Richard Smith", "Rhiannon Taras", "Catie Ryan Taras"]
  },

  {
    id: 51,
    year: 2023,
    people: ["Richard Smith"]
  },

   {
    id: 52,
    year: 2023,
    people: ["Richard Smith"]
  },
];


// These variables are created automatically.

let people = [];
let images = {};


// Keep person lists clean even when future photo data contains
// extra whitespace, blank entries, or the same name more than once.

function normalizePeople(names) {
  return [...new Set(
    names
      .map(name => name.trim())
      .filter(Boolean)
  )];
}


// Graph measurements

let leftMargin = 220;
let rightMargin = 100;
let topMargin = 150;
let rowSpacing = 80;
let sameYearSpacing = 18;

let timelineY;
let photoXPositions = {};


function calculatePhotoXPositions() {
  let graphRight = width - rightMargin;
  let photosByYear = new Map();

  for (let photo of photoData) {
    if (!photosByYear.has(photo.year)) {
      photosByYear.set(photo.year, []);
    }

    photosByYear.get(photo.year).push(photo);
  }

  for (let [year, photos] of photosByYear) {
    let yearX = map(
      year,
      minYear,
      maxYear,
      leftMargin,
      graphRight
    );

    let groupWidth = (photos.length - 1) * sameYearSpacing;
    let startX = constrain(
      yearX - groupWidth / 2,
      leftMargin,
      graphRight - groupWidth
    );

    photos.forEach((photo, index) => {
      photoXPositions[photo.id] = startX + index * sameYearSpacing;
    });
  }
}


function getPhotoX(photo) {
  return photoXPositions[photo.id];
}


// -------------------------------------
// LOAD IMAGES
// -------------------------------------

function preload() {

  for (let photo of photoData) {

    let filePath = "images/" + photo.id + ".jpg";

    images[photo.id] = loadImage(filePath);

  }

}


// -------------------------------------
// SETUP
// -------------------------------------

function setup() {

  photoData = photoData.map(photo => ({
    ...photo,
    people: normalizePeople(photo.people)
  }));

  // Automatically find every unique person
  // mentioned in the photo data.

  let allNames = [];

  for (let photo of photoData) {

    for (let person of photo.people) {

      if (!allNames.includes(person)) {
        allNames.push(person);
      }

    }

  }

  people = allNames;


  // Canvas gets taller if you add more people.

  let canvasHeight =
    topMargin +
    people.length * rowSpacing +
    180;


  createCanvas(1400, canvasHeight);

  calculatePhotoXPositions();

  textFont("Arial");

  timelineY =
    topMargin +
    people.length * rowSpacing +
    30;
}


// -------------------------------------
// DRAW
// -------------------------------------

function draw() {

  background(247, 247, 245);

  drawTitle();

  drawTimeGrid();

  drawGuideLines();

  drawSharedConnections();

  drawPhotoPoints();

  drawTimeline();

  drawHoverImage();

}




// -------------------------------------
// TITLE
// -------------------------------------

function drawTitle() {

  noStroke();

  fill(30);

  textAlign(LEFT);

  textSize(30);

  text(
    "Relational Archive",
    70,
    55
  );


  fill(100);

  textSize(15);

  text(
    "Photographs organized by people and time",
    70,
    82
  );

}


// -------------------------------------
// PEOPLE + GUIDE LINES
// -------------------------------------

function drawGuideLines() {

  let graphRight =
    width - rightMargin;


  for (let i = 0; i < people.length; i++) {

    let y =
      topMargin +
      i * rowSpacing;


    // Person name

    noStroke();

    fill(40);

    textAlign(RIGHT);

    textSize(15);

    text(
      people[i],
      leftMargin - 25,
      y + 5
    );


    // Horizontal guide line

    stroke(220);

    strokeWeight(1);

    line(
      leftMargin,
      y,
      graphRight,
      y
    );

  }

}


// -------------------------------------
// PHOTO POINTS
// -------------------------------------

function drawPhotoPoints() {

  for (let photo of photoData) {

    let x = getPhotoX(photo);

    for (let person of photo.people) {

      let personIndex = people.indexOf(person);

      let y = topMargin + personIndex * rowSpacing;

      let img = images[photo.id];

      drawThumbnail(img, x, y, 30);
    }
  }
}

function drawThumbnail(img, x, y, size) {
  let side = min(img.width, img.height);

  let sx = (img.width - side) / 2;
  let sy = (img.height - side) / 2;

  imageMode(CENTER);

  image(
    img,
    x,
    y,
    size,
    size,
    sx,
    sy,
    side,
    side
  );

  imageMode(CORNER);

  noFill();
  stroke(255);
  strokeWeight(1);
  rectMode(CENTER);
  rect(x, y, size, size);
  rectMode(CORNER);
}


// -------------------------------------
// TIMELINE
// -------------------------------------

function drawTimeline() {

  let graphRight =
    width - rightMargin;


  // Main axis

  stroke(50);

  strokeWeight(1.5);

  line(
    leftMargin,
    timelineY,
    graphRight,
    timelineY
  );


  // Decades 1900–2020

  for (
    let year = 1900;
    year <= 2020;
    year += 10
  ) {

    let x =
      map(
        year,
        minYear,
        maxYear,
        leftMargin,
        graphRight
      );


    stroke(70);

    strokeWeight(1);

    line(
      x,
      timelineY - 6,
      x,
      timelineY + 6
    );


    noStroke();

    fill(60);

    textAlign(CENTER);

    textSize(11);

    text(
      year,
      x,
      timelineY + 24
    );

  }


  // Final endpoint: 2023

  let x2023 =
    map(
      2023,
      minYear,
      maxYear,
      leftMargin,
      graphRight
    );


  stroke(50);

  line(
    x2023,
    timelineY - 8,
    x2023,
    timelineY + 8
  );


  noStroke();

  fill(40);

  textAlign(CENTER);

  textSize(11);

  text(
    "2023",
    x2023,
    timelineY + 24
  );


  // Axis title

  fill(70);

  textSize(14);

  text(
    "Time",
    (leftMargin + graphRight) / 2,
    timelineY + 65
  );

}


// -------------------------------------
// HOVER INTERACTION
// -------------------------------------

function drawHoverImage() {
  let hoveredPhoto = null;
  let hoveredX = 0;
  let hoveredY = 0;
  let closestDistanceSquared = Infinity;

  for (let photo of photoData) {
    let x = getPhotoX(photo);

    for (let person of photo.people) {

      let personIndex = people.indexOf(person);

      let y = topMargin + personIndex * rowSpacing;

      let overThumbnail =
        mouseX > x - 15 &&
        mouseX < x + 15 &&
        mouseY > y - 15 &&
        mouseY < y + 15;

      if (overThumbnail) {
        let distanceSquared =
          (mouseX - x) ** 2 +
          (mouseY - y) ** 2;

        if (distanceSquared < closestDistanceSquared) {
          hoveredPhoto = photo;
          hoveredX = x;
          hoveredY = y;
          closestDistanceSquared = distanceSquared;
        }
      }
    }
  }

  if (hoveredPhoto) {
    showPhotoPopup(hoveredPhoto, hoveredX, hoveredY);
  }
}


// -------------------------------------
// PHOTO POPUP
// -------------------------------------

function showPhotoPopup(photo, x, y) {

  let img = images[photo.id];

  // Maximum image size
  let maxImageWidth = 400;
  let maxImageHeight = 280;

  // Preserve original image aspect ratio
  let scaleFactor = min(
    maxImageWidth / img.width,
    maxImageHeight / img.height
  );

  let displayWidth = img.width * scaleFactor;
  let displayHeight = img.height * scaleFactor;

  // Popup size adjusts to image
  let popupWidth = max(displayWidth + 40, 260);
  let popupHeight = displayHeight + 120;

  let popupX = x + 25;
  let popupY = y - popupHeight - 20;

  // Keep popup inside right edge
  if (popupX + popupWidth > width - 20) {
    popupX = x - popupWidth - 25;
  }

  // Keep popup inside top edge
  if (popupY < 20) {
    popupY = y + 25;
  }

  // Popup background
  fill(255);
  stroke(190);
  strokeWeight(1);

  rect(
    popupX,
    popupY,
    popupWidth,
    popupHeight,
    8
  );

  // Draw photograph
  imageMode(CENTER);

  image(
    img,
    popupX + popupWidth / 2,
    popupY + 20 + displayHeight / 2,
    displayWidth,
    displayHeight
  );

  imageMode(CORNER);

  // Year
  noStroke();
  fill(30);
  textAlign(CENTER);
  textSize(16);

  text(
    photo.year,
    popupX + popupWidth / 2,
    popupY + displayHeight + 55
  );

  // Image number
  fill(100);
  textSize(13);

  text(
    "Image " + photo.id,
    popupX + popupWidth / 2,
    popupY + displayHeight + 82
  );
}

function drawSharedConnections() {

  for (let photo of photoData) {

    // Only connect photographs containing multiple people
    if (photo.people.length < 2) {
      continue;
    }

    let x = getPhotoX(photo);

    let yPositions = [];

    for (let person of photo.people) {

      let personIndex = people.indexOf(person);

      let y =
        topMargin +
        personIndex * rowSpacing;

      yPositions.push(y);
    }

    let topY = min(yPositions);
    let bottomY = max(yPositions);

    stroke(185);
    strokeWeight(1);

    line(
      x,
      topY,
      x,
      bottomY
    );
  }
}

function drawTimeGrid() {

  let graphRight = width - rightMargin;

  for (let year = 1900; year <= 2020; year += 10) {

    let x = map(
      year,
      minYear,
      maxYear,
      leftMargin,
      graphRight
    );

    stroke(232);
    strokeWeight(1);

    line(
      x,
      topMargin - 30,
      x,
      timelineY
    );
  }
}
