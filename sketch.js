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
let topMargin = 250;
let rowSpacing = 48;
let sameYearSpacing = 22;
let minimumCanvasWidth = 1100;
let photoBandY = 185;
let photoThumbnailSize = 32;
let personNodeSize = 8;

let timelineY;
let photoXPositions = {};
let timelineShell;
let yearRuler;
let canvasContainer;
let personLabelsLayer;
let photoDetailPanel;
let filterStatus;
let selectedPhoto = null;
let selectedPerson = null;
let hoveredPhoto = null;


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


function getResponsiveCanvasWidth() {
  return max(windowWidth, minimumCanvasWidth);
}


function createTimelineStructure() {
  timelineShell = document.createElement("main");
  timelineShell.id = "timeline-shell";

  yearRuler = document.createElement("div");
  yearRuler.id = "year-ruler";
  yearRuler.setAttribute("aria-label", "Timeline years 1900 to 2023");

  canvasContainer = document.createElement("div");
  canvasContainer.id = "canvas-container";

  personLabelsLayer = document.createElement("div");
  personLabelsLayer.id = "person-labels";
  personLabelsLayer.setAttribute("aria-label", "People in the archive");

  timelineShell.append(yearRuler, canvasContainer, personLabelsLayer);
  document.body.appendChild(timelineShell);

  filterStatus = document.createElement("div");
  filterStatus.id = "filter-status";
  filterStatus.hidden = true;
  timelineShell.appendChild(filterStatus);

  photoDetailPanel = document.createElement("aside");
  photoDetailPanel.id = "photo-detail";
  photoDetailPanel.hidden = true;
  photoDetailPanel.setAttribute("aria-live", "polite");
  document.body.appendChild(photoDetailPanel);
}


function setPersonFilter(person) {
  selectedPerson = selectedPerson === person ? null : person;
  selectedPhoto = null;
  updatePhotoDetail();
  updateFilterStatus();
  renderPersonLabels();
}


function updateFilterStatus() {
  filterStatus.replaceChildren();
  filterStatus.hidden = !selectedPerson;

  if (!selectedPerson) {
    return;
  }

  let text = document.createElement("span");
  let count = photoData.filter(photo => photo.people.includes(selectedPerson)).length;
  text.textContent = `${selectedPerson} · ${count} photograph${count === 1 ? "" : "s"}`;

  let clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.textContent = "Clear";
  clearButton.addEventListener("click", () => setPersonFilter(selectedPerson));

  filterStatus.append(text, clearButton);
}


function updatePhotoDetail() {
  photoDetailPanel.replaceChildren();
  photoDetailPanel.hidden = !selectedPhoto;

  if (!selectedPhoto) {
    return;
  }

  let closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "photo-detail-close";
  closeButton.setAttribute("aria-label", "Close photograph details");
  closeButton.textContent = "×";
  closeButton.addEventListener("click", () => {
    selectedPhoto = null;
    updatePhotoDetail();
  });

  let img = document.createElement("img");
  img.className = "photo-detail-image";
  img.src = `images/${selectedPhoto.id}.jpg`;
  img.alt = `Archive photograph ${selectedPhoto.id} from ${selectedPhoto.year}`;

  let kicker = document.createElement("p");
  kicker.className = "photo-detail-kicker";
  kicker.textContent = `Photograph ${selectedPhoto.id}`;

  let year = document.createElement("h2");
  year.className = "photo-detail-year";
  year.textContent = selectedPhoto.year;

  let peopleList = document.createElement("p");
  peopleList.className = "photo-detail-people";
  peopleList.textContent = selectedPhoto.people.join(" · ");

  photoDetailPanel.append(closeButton, img, kicker, year, peopleList);
}


function renderPersonLabels() {
  personLabelsLayer.replaceChildren();

  let photoRow = document.createElement("div");
  photoRow.className = "person-label-row photo-band-label-row";
  photoRow.style.top = `${photoBandY - 25}px`;
  photoRow.style.height = "50px";

  let photoLabel = document.createElement("span");
  photoLabel.className = "person-label photo-band-label";
  photoLabel.textContent = "Photographs";

  photoRow.appendChild(photoLabel);
  personLabelsLayer.appendChild(photoRow);

  people.forEach((person, index) => {
    let row = document.createElement("div");
    row.className = "person-label-row";
    row.style.top = `${topMargin + index * rowSpacing - rowSpacing / 2}px`;
    row.style.height = `${rowSpacing}px`;

    let label = document.createElement("button");
    label.type = "button";
    label.className = "person-label";
    label.textContent = person;
    label.setAttribute("aria-pressed", selectedPerson === person ? "true" : "false");
    label.setAttribute("aria-label", `Show photographs featuring ${person}`);
    label.classList.toggle("is-selected", selectedPerson === person);
    label.addEventListener("click", () => setPersonFilter(person));

    row.appendChild(label);
    personLabelsLayer.appendChild(row);
  });
}


function renderYearRuler() {
  yearRuler.replaceChildren();

  let track = document.createElement("div");
  track.className = "year-ruler-track";
  track.style.left = `${leftMargin}px`;
  track.style.right = `${rightMargin}px`;
  yearRuler.appendChild(track);

  let years = [];

  for (let year = minYear; year <= maxYear; year += 10) {
    if (maxYear - year >= 5) {
      years.push(year);
    }
  }

  years.push(maxYear);

  for (let year of years) {
    let tick = document.createElement("span");
    tick.className = "year-ruler-tick";
    tick.textContent = year;
    tick.style.left = `${map(
      year,
      minYear,
      maxYear,
      leftMargin,
      width - rightMargin
    )}px`;
    yearRuler.appendChild(tick);
  }
}


function updateTimelineStructure() {
  timelineShell.style.width = `${width}px`;
  timelineShell.style.setProperty("--person-label-width", `${leftMargin}px`);
  personLabelsLayer.style.width = `${width}px`;
  personLabelsLayer.style.height = `${height}px`;
  renderYearRuler();
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
    140;


  createTimelineStructure();

  let canvas = createCanvas(getResponsiveCanvasWidth(), canvasHeight);
  canvas.parent(canvasContainer);

  calculatePhotoXPositions();
  renderPersonLabels();
  updateTimelineStructure();

  textFont("Arial");

  timelineY =
    topMargin +
    people.length * rowSpacing +
    30;
}


function windowResized() {
  if (!timelineShell) {
    return;
  }

  resizeCanvas(getResponsiveCanvasWidth(), height);
  calculatePhotoXPositions();
  updateTimelineStructure();
}


// -------------------------------------
// DRAW
// -------------------------------------

function draw() {

  background(243, 239, 230);

  drawTitle();

  drawTimeGrid();

  drawActivityBands();

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

  fill(159, 77, 47);

  textAlign(LEFT);

  textFont("Arial");

  textStyle(BOLD);

  textSize(11);

  text(
    "A FAMILY PHOTOGRAPH ARCHIVE · 1900–2023",
    70,
    42
  );

  fill(36, 33, 28);

  textAlign(LEFT);

  textFont("Georgia");

  textStyle(NORMAL);

  textSize(38);

  text(
    "Relational Archive",
    70,
    82
  );


  fill(117, 111, 101);

  textFont("Arial");

  textSize(14);

  text(
    "Follow a name across time, or open a photograph to see who shares the moment.",
    70,
    110
  );

  textSize(12);

  text(
    "HOVER TO PREVIEW  ·  CLICK TO KEEP OPEN  ·  SELECT A NAME TO TRACE",
    70,
    137
  );

}


function isPhotoRelevant(photo) {
  return !selectedPerson || photo.people.includes(selectedPerson);
}


function drawActivityBands() {
  let graphRight = width - rightMargin;

  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    let personPhotos = photoData.filter(photo => photo.people.includes(person));
    let years = personPhotos.map(photo => photo.year);
    let startX = map(min(years), minYear, maxYear, leftMargin, graphRight);
    let endX = map(max(years), minYear, maxYear, leftMargin, graphRight);
    let y = topMargin + i * rowSpacing;
    let active = !selectedPerson || selectedPerson === person;

    stroke(active ? 167 : 206, active ? 157 : 198, active ? 141 : 185, active ? 150 : 80);
    strokeWeight(selectedPerson === person ? 6 : 3);
    line(startX, y, max(startX + 5, endX), y);

    if (selectedPerson === person) {
      noStroke();
      fill(159, 77, 47);
      circle(startX, y, 7);
      circle(max(startX + 5, endX), y, 7);
    }
  }
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


    // Horizontal guide line

    stroke(216, 208, 194, selectedPerson && selectedPerson !== people[i] ? 75 : 150);

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
    let img = images[photo.id];

    drawThumbnail(
      img,
      x,
      photoBandY,
      photoThumbnailSize,
      isPhotoRelevant(photo) ? 255 : 45,
      selectedPhoto && selectedPhoto.id === photo.id
    );
  }
}

function drawThumbnail(img, x, y, size, alpha = 255, isSelected = false) {
  let side = min(img.width, img.height);

  let sx = (img.width - side) / 2;
  let sy = (img.height - side) / 2;

  imageMode(CENTER);

  tint(255, alpha);

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

  noTint();

  imageMode(CORNER);

  noFill();
  stroke(isSelected ? color(159, 77, 47) : color(255, 253, 248, alpha));
  strokeWeight(isSelected ? 3 : 1);
  rectMode(CENTER);
  rect(x, y, size + (isSelected ? 4 : 0), size + (isSelected ? 4 : 0));
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


  // Decades, omitting the last one when it would collide with the endpoint.

  for (
    let year = minYear;
    year <= maxYear;
    year += 10
  ) {

    if (maxYear - year < 5) {
      continue;
    }

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


  // Final endpoint

  let endpointX =
    map(
      maxYear,
      minYear,
      maxYear,
      leftMargin,
      graphRight
    );


  stroke(50);

  line(
    endpointX,
    timelineY - 8,
    endpointX,
    timelineY + 8
  );


  noStroke();

  fill(40);

  textAlign(CENTER);

  textSize(11);

  text(
    maxYear,
    endpointX,
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
  hoveredPhoto = null;
  let hoveredX = 0;
  let hoveredY = 0;
  let closestDistanceSquared = Infinity;

  function considerHit(photo, x, y, radius) {
    let isHit =
      mouseX > x - radius &&
      mouseX < x + radius &&
      mouseY > y - radius &&
      mouseY < y + radius;

    if (!isHit) {
      return;
    }

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

  for (let photo of photoData) {
    if (!isPhotoRelevant(photo)) {
      continue;
    }

    let x = getPhotoX(photo);

    considerHit(
      photo,
      x,
      photoBandY,
      photoThumbnailSize / 2
    );

    for (let person of photo.people) {

      let personIndex = people.indexOf(person);

      let y = topMargin + personIndex * rowSpacing;

      considerHit(photo, x, y, personNodeSize + 3);
    }
  }

  if (hoveredPhoto) {
    cursor(HAND);
    if (!selectedPhoto || selectedPhoto.id !== hoveredPhoto.id) {
      showPhotoPopup(hoveredPhoto, hoveredX, hoveredY);
    }
  } else {
    cursor(ARROW);
  }
}


function mousePressed() {
  if (!hoveredPhoto) {
    return;
  }

  selectedPhoto = hoveredPhoto;
  updatePhotoDetail();
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
  let popupHeight = displayHeight + 146;

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
  fill(255, 253, 248);
  stroke(167, 157, 141);
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
  fill(36, 33, 28);
  textAlign(CENTER);
  textSize(16);

  text(
    photo.year,
    popupX + popupWidth / 2,
    popupY + displayHeight + 55
  );

  // Image number
  fill(117, 111, 101);
  textSize(13);

  text(
    "Image " + photo.id,
    popupX + popupWidth / 2,
    popupY + displayHeight + 82
  );

  textSize(12);

  let peopleSummary = photo.people.join(" · ");

  text(
    peopleSummary,
    popupX + 18,
    popupY + displayHeight + 102,
    popupWidth - 36,
    40
  );
}

function drawSharedConnections() {

  for (let photo of photoData) {
    let x = getPhotoX(photo);

    let yPositions = [];

    for (let person of photo.people) {

      let personIndex = people.indexOf(person);

      let y =
        topMargin +
        personIndex * rowSpacing;

      yPositions.push(y);
    }

    let bottomY = max(yPositions);

    let relevant = isPhotoRelevant(photo);
    let isSelected = selectedPhoto && selectedPhoto.id === photo.id;

    if (isSelected) {
      stroke(159, 77, 47, 220);
      strokeWeight(2);
    } else {
      stroke(167, 157, 141, relevant ? 115 : 24);
      strokeWeight(1);
    }

    line(
      x,
      photoBandY + photoThumbnailSize / 2,
      x,
      bottomY
    );

    for (let y of yPositions) {
      if (isSelected) {
        fill(159, 77, 47);
        stroke(159, 77, 47);
        strokeWeight(1.5);
        circle(x, y, personNodeSize + 2);
      } else {
        fill(243, 239, 230, relevant ? 255 : 80);
        stroke(85, 79, 70, relevant ? 190 : 35);
        strokeWeight(1.25);
        circle(x, y, personNodeSize);
      }
    }
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

    stroke(216, 208, 194, 105);
    strokeWeight(1);

    line(
      x,
      photoBandY - photoThumbnailSize / 2,
      x,
      timelineY
    );
  }
}
