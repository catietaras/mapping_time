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


// D3 renders the archive as SVG, while native HTML handles labels and details.

const layout = {
  left: 220,
  right: 100,
  top: 290,
  row: 48,
  sameYear: 22,
  minWidth: 1100,
  photoY: 225,
  thumbnail: 32,
  node: 8
};

photoData = photoData.map(photo => ({
  ...photo,
  people: [...new Set(photo.people.map(name => name.trim()).filter(Boolean))]
}));

const people = [...new Set(photoData.flatMap(photo => photo.people))];
const personIndex = new Map(people.map((person, index) => [person, index]));
const personKey = new Map(people.map((person, index) => [person, `person-${index}`]));
const timelineShell = d3.select("#timeline-shell");
const visualization = d3.select("#visualization");
const personLabelsLayer = d3.select("#person-labels");
const yearRuler = d3.select("#year-ruler");
const filterStatus = d3.select("#filter-status");
const photoDetail = d3.select("#photo-detail");
const photoPreview = d3.select("#photo-preview");

let selectedPhoto = null;
let selectedPerson = null;
let resizeFrame = null;
let marks = {};
let previewPhotoId = null;
const decodedPhotos = new Set();
const photoDecodePromises = new Map();

function warmPhoto(photo) {
  if (decodedPhotos.has(photo.id)) return Promise.resolve();
  if (photoDecodePromises.has(photo.id)) return photoDecodePromises.get(photo.id);

  const image = new Image();
  image.decoding = "async";
  image.src = `images/${photo.id}.jpg`;
  const decodePromise = image.decode()
    .catch(() => {})
    .then(() => {
      decodedPhotos.add(photo.id);
      photoDecodePromises.delete(photo.id);
    });
  photoDecodePromises.set(photo.id, decodePromise);
  return decodePromise;
}

function isPhotoRelevant(photo) {
  return !selectedPerson || photo.people.includes(selectedPerson);
}

function getDimensions() {
  const width = Math.max(window.innerWidth, layout.minWidth);
  const timelineY = layout.top + people.length * layout.row + 30;
  return { width, height: timelineY + 90, graphRight: width - layout.right, timelineY };
}

function getYearTicks() {
  return d3.range(minYear, maxYear + 1, 10)
    .filter(year => maxYear - year >= 5)
    .concat(maxYear);
}

function getPhotoPositions(xScale) {
  const positions = new Map();
  const byYear = d3.group(photoData, photo => photo.year);

  byYear.forEach((photos, year) => {
    const groupWidth = (photos.length - 1) * layout.sameYear;
    const start = Math.max(
      layout.left,
      Math.min(xScale(year) - groupWidth / 2, xScale.range()[1] - groupWidth)
    );
    photos.forEach((photo, index) => positions.set(photo.id, start + index * layout.sameYear));
  });

  return positions;
}

function setPersonFilter(person) {
  const previousPerson = selectedPerson;
  const previousPhoto = selectedPhoto;
  selectedPerson = selectedPerson === person ? null : person;
  selectedPhoto = null;
  hidePreview();
  updatePhotoSelection(previousPhoto, null);
  updatePersonLabelState(previousPerson, selectedPerson);
  updateFilterStatus();
  updatePhotoDetail();
  updateFilterMarks();
}

function selectPhoto(photo) {
  if (!isPhotoRelevant(photo)) return;
  if (selectedPhoto?.id === photo.id) return;
  const previousPhoto = selectedPhoto;
  selectedPhoto = photo;
  hidePreview();
  updatePhotoDetail();
  updatePhotoSelection(previousPhoto, photo);
}

function renderPersonLabels(height) {
  personLabelsLayer
    .style("width", `${getDimensions().width}px`)
    .style("height", `${height}px`);

  const rows = [{ person: null, label: "Photographs", y: layout.photoY }]
    .concat(people.map((person, index) => ({
      person,
      label: person,
      y: layout.top + index * layout.row
    })));

  const row = personLabelsLayer.selectAll(".person-label-row")
    .data(rows, item => item.label)
    .join(enter => {
      const wrapper = enter.append("div").attr("class", "person-label-row");
      wrapper.filter(item => item.person === null)
        .append("span")
        .attr("class", "person-label photo-band-label");
      wrapper.filter(item => item.person !== null)
        .append("button")
        .attr("type", "button")
        .attr("class", "person-label")
        .on("click", (_, item) => setPersonFilter(item.person));
      return wrapper;
    })
    .style("top", item => `${item.y - layout.row / 2}px`)
    .style("height", `${layout.row}px`);

  row.select(".person-label")
    .text(item => item.label)
    .attr("aria-label", item => item.person ? `Show photographs featuring ${item.person}` : null);

  updatePersonLabelState();
}

function updatePersonLabelState(previousPerson, nextPerson) {
  const labels = personLabelsLayer.selectAll("button.person-label");

  if (arguments.length === 0) {
    labels
      .classed("is-selected", item => item.person === selectedPerson)
      .attr("aria-pressed", item => String(item.person === selectedPerson));
    return;
  }

  if (previousPerson) {
    labels.filter(item => item.person === previousPerson)
      .classed("is-selected", false)
      .attr("aria-pressed", "false");
  }
  if (nextPerson) {
    labels.filter(item => item.person === nextPerson)
      .classed("is-selected", true)
      .attr("aria-pressed", "true");
  }
}

function renderYearRuler(width, xScale) {
  yearRuler.selectAll("svg")
    .data([null])
    .join("svg")
    .attr("width", width)
    .attr("height", 48)
    .attr("viewBox", `0 0 ${width} 48`)
    .selectAll("g")
    .data([null])
    .join("g")
    .attr("class", "ruler-axis")
    .attr("transform", "translate(0,37)")
    .call(d3.axisTop(xScale).tickValues(getYearTicks()).tickFormat(d3.format("d")).tickSize(7));
}

function updateFilterStatus() {
  filterStatus.attr("hidden", selectedPerson ? null : true);
  if (selectedPerson) {
    const count = photoData.filter(photo => photo.people.includes(selectedPerson)).length;
    filterStatus.select("span")
      .text(`${selectedPerson} · ${count} photograph${count === 1 ? "" : "s"}`);
  }
}

function updatePhotoDetail() {
  photoDetail.attr("hidden", selectedPhoto ? null : true);
  if (!selectedPhoto) return;

  const photo = selectedPhoto;
  const detailImage = photoDetail.select(".photo-detail-image");
  const imageUrl = `images/${photo.id}.jpg`;
  const imageAlt = `Archive photograph ${photo.id} from ${photo.year}`;

  detailImage
    .classed("is-loading", !decodedPhotos.has(photo.id))
    .attr("alt", decodedPhotos.has(photo.id) ? imageAlt : "");

  if (decodedPhotos.has(photo.id)) {
    detailImage.attr("src", imageUrl);
  } else {
    detailImage.attr("src", null);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (selectedPhoto?.id !== photo.id) return;
      detailImage.attr("src", imageUrl);
      warmPhoto(photo).then(() => {
        if (selectedPhoto?.id !== photo.id) return;
        detailImage
          .classed("is-loading", false)
          .attr("alt", imageAlt);
      });
    }));
  }
  photoDetail.select(".photo-detail-kicker")
    .text(`Photograph ${photo.id}`);
  photoDetail.select(".photo-detail-year")
    .text(photo.year);
  photoDetail.select(".photo-detail-people")
    .text(photo.people.join(" · "));
}

function showPreview(event, photo) {
  if (!isPhotoRelevant(photo) || selectedPhoto?.id === photo.id) {
    hidePreview();
    return;
  }

  photoPreview.attr("hidden", null);
  if (previewPhotoId !== photo.id) {
    previewPhotoId = photo.id;
    const previewImage = photoPreview.select("img").attr("alt", "");
    const imageUrl = `images/${photo.id}.jpg`;

    if (decodedPhotos.has(photo.id)) {
      previewImage.attr("src", imageUrl);
    } else {
      previewImage.attr("src", null);
      warmPhoto(photo).then(() => {
        if (previewPhotoId === photo.id) previewImage.attr("src", imageUrl);
      });
    }
    photoPreview.select(".photo-preview-year").text(photo.year);
    photoPreview.select(".photo-preview-id").text(`Photograph ${photo.id}`);
    photoPreview.select(".photo-preview-people").text(photo.people.join(" · "));
  }
  movePreview(event);
}

function movePreview(event) {
  if (photoPreview.attr("hidden") !== null) return;
  const node = photoPreview.node();
  const gap = 18;
  const rect = node.getBoundingClientRect();
  let left = event.clientX + gap;
  let top = event.clientY - rect.height - gap;
  if (left + rect.width > window.innerWidth - 12) left = event.clientX - rect.width - gap;
  if (top < 12) top = event.clientY + gap;
  photoPreview.style("left", `${Math.max(12, left)}px`).style("top", `${top}px`);
}

function hidePreview() {
  previewPhotoId = null;
  photoPreview.attr("hidden", true);
}

function bindPhotoInteraction(selection, photoAccessor = item => item) {
  selection
    .attr("tabindex", 0)
    .attr("role", "button")
    .attr("aria-label", item => {
      const photo = photoAccessor(item);
      return `Photograph ${photo.id}, ${photo.year}: ${photo.people.join(", ")}`;
    })
    .on("pointerenter", (event, item) => showPreview(event, photoAccessor(item)))
    .on("pointermove", movePreview)
    .on("pointerleave", hidePreview)
    .on("focus", (event, item) => {
      if (!event.currentTarget.matches(":focus-visible")) return;
      const rect = event.currentTarget.getBoundingClientRect();
      showPreview(
        { clientX: rect.right, clientY: rect.top + rect.height / 2 },
        photoAccessor(item)
      );
    })
    .on("blur", hidePreview)
    .on("click", (_, item) => selectPhoto(photoAccessor(item)))
    .on("keydown", (event, item) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectPhoto(photoAccessor(item));
      }
    });
}

function updateFilterMarks() {
  marks.updatePersonHighlight?.(selectedPerson);
}

function updatePhotoSelection(previousPhoto, nextPhoto) {
  if (!marks.connections) return;

  const toggle = (photo, selected) => {
    if (!photo) return;
    marks.connections.filter(item => item.id === photo.id).classed("is-selected", selected);
    marks.nodes.filter(item => item.photo.id === photo.id).classed("is-selected", selected);
    marks.thumbnails.filter(item => item.id === photo.id).classed("is-selected", selected);
  };

  toggle(previousPhoto, false);
  toggle(nextPhoto, true);
}

function initializePanels() {
  filterStatus.append("span");
  filterStatus.append("button")
    .attr("type", "button")
    .text("Clear")
    .on("click", () => setPersonFilter(selectedPerson));

  photoDetail.append("button")
    .attr("type", "button")
    .attr("class", "photo-detail-close")
    .attr("aria-label", "Close photograph details")
    .text("×")
    .on("click", () => {
      const previousPhoto = selectedPhoto;
      selectedPhoto = null;
      updatePhotoDetail();
      updatePhotoSelection(previousPhoto, null);
    });
  photoDetail.append("img").attr("class", "photo-detail-image");
  photoDetail.append("p").attr("class", "photo-detail-kicker");
  photoDetail.append("h2").attr("class", "photo-detail-year");
  photoDetail.append("p").attr("class", "photo-detail-people");

  photoPreview.append("img");
  photoPreview.append("p").attr("class", "photo-preview-year");
  photoPreview.append("p").attr("class", "photo-preview-id");
  photoPreview.append("p").attr("class", "photo-preview-people");
}

function render() {
  const { width, height, graphRight, timelineY } = getDimensions();
  const xScale = d3.scaleLinear().domain([minYear, maxYear]).range([layout.left, graphRight]);
  const photoX = getPhotoPositions(xScale);
  const yForPerson = person => layout.top + personIndex.get(person) * layout.row;

  timelineShell
    .style("width", `${width}px`)
    .style("--person-label-width", `${layout.left}px`);
  renderPersonLabels(height);
  renderYearRuler(width, xScale);
  updateFilterStatus();
  updatePhotoDetail();

  const svg = visualization.selectAll("svg")
    .data([null])
    .join("svg")
    .attr("class", "archive-chart")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("role", "img")
    .attr("aria-labelledby", "archive-title archive-description");
  marks.svg = svg;

  svg.selectAll("*").remove();
  svg.append("title").attr("id", "archive-title").text("Relational Archive");
  svg.append("desc").attr("id", "archive-description")
    .text("A timeline connecting 52 family photographs to the people who appear in them, from 1900 to 2023.");

  const title = svg.append("g").attr("class", "chart-title");
  title.append("text").attr("class", "chart-kicker").attr("x", 70).attr("y", 42)
    .text("A FAMILY PHOTOGRAPH ARCHIVE · 1900–2023");
  title.append("text").attr("class", "chart-heading").attr("x", 70).attr("y", 82)
    .text("Relational Archive");
  title.append("text").attr("class", "chart-deck").attr("x", 70).attr("y", 110)
    .text("Follow a name across time, or open a photograph to see who shares the moment.");
  title.append("text").attr("class", "chart-instructions").attr("x", 70).attr("y", 137)
    .text("HOVER TO PREVIEW  ·  CLICK TO KEEP OPEN  ·  SELECT A NAME TO TRACE");

  const decadeTicks = d3.range(1900, 2021, 10);
  svg.append("g").attr("class", "time-grid")
    .selectAll("line")
    .data(decadeTicks)
    .join("line")
    .attr("x1", xScale).attr("x2", xScale)
    .attr("y1", layout.photoY - layout.thumbnail / 2)
    .attr("y2", timelineY);

  marks.guides = svg.append("g").attr("class", "guide-lines")
    .selectAll("line")
    .data(people)
    .join("line")
    .attr("x1", layout.left).attr("x2", graphRight)
    .attr("y1", yForPerson).attr("y2", yForPerson)
    .attr("data-person-id", person => personKey.get(person));

  const activityData = people.map(person => {
    const years = photoData.filter(photo => photo.people.includes(person)).map(photo => photo.year);
    return { person, start: d3.min(years), end: d3.max(years) };
  });
  marks.activity = svg.append("g").attr("class", "activity-bands")
    .selectAll("line")
    .data(activityData)
    .join("line")
    .attr("x1", item => xScale(item.start))
    .attr("x2", item => Math.max(xScale(item.start) + 5, xScale(item.end)))
    .attr("y1", item => yForPerson(item.person))
    .attr("y2", item => yForPerson(item.person))
    .attr("data-person-id", item => personKey.get(item.person));

  const connectionLayer = svg.append("g").attr("class", "connections");
  marks.connections = connectionLayer.selectAll("line")
    .data(photoData)
    .join("line")
    .attr("class", "photo-connection")
    .attr("data-photo-id", photo => photo.id)
    .attr("data-people", photo => photo.people.map(person => personKey.get(person)).join(" "))
    .attr("x1", photo => photoX.get(photo.id))
    .attr("x2", photo => photoX.get(photo.id))
    .attr("y1", layout.photoY + layout.thumbnail / 2)
    .attr("y2", photo => d3.max(photo.people, yForPerson));

  const nodeData = photoData.flatMap(photo => photo.people.map(person => ({ photo, person })));
  marks.nodes = connectionLayer.selectAll("circle")
    .data(nodeData)
    .join("circle")
    .attr("class", "photo-node")
    .attr("data-photo-id", item => item.photo.id)
    .attr("data-person", item => item.person)
    .attr("data-people", item => item.photo.people.map(person => personKey.get(person)).join(" "))
    .attr("cx", item => photoX.get(item.photo.id))
    .attr("cy", item => yForPerson(item.person))
    .attr("r", layout.node / 2);

  const thumbnails = svg.append("g").attr("class", "thumbnails")
    .selectAll("image")
    .data(photoData)
    .join("image")
    .attr("class", "photo-thumbnail")
    .attr("data-photo-id", photo => photo.id)
    .attr("data-people", photo => photo.people.map(person => personKey.get(person)).join(" "))
    .attr("href", photo => `images/${photo.id}.jpg`)
    .attr("x", photo => photoX.get(photo.id) - layout.thumbnail / 2)
    .attr("y", layout.photoY - layout.thumbnail / 2)
    .attr("width", layout.thumbnail)
    .attr("height", layout.thumbnail)
    .attr("preserveAspectRatio", "xMidYMid slice");
  bindPhotoInteraction(thumbnails);
  marks.thumbnails = thumbnails;

  const pixelRatio = window.devicePixelRatio || 1;
  const highlightCanvas = visualization.selectAll("canvas.highlight-canvas")
    .data([null])
    .join("canvas")
    .attr("class", "highlight-canvas")
    .attr("aria-hidden", "true")
    .attr("width", width * pixelRatio)
    .attr("height", height * pixelRatio)
    .style("width", `${width}px`)
    .style("height", `${height}px`);
  const highlightContext = highlightCanvas.node().getContext("2d");
  highlightContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  marks.updatePersonHighlight = person => {
    highlightContext.clearRect(0, 0, width, height);
    if (!person) return;

    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue("--accent").trim();
    const paper = styles.getPropertyValue("--paper").trim();
    const line = styles.getPropertyValue("--line").trim();
    const relevantPhotos = photoData.filter(photo => photo.people.includes(person));
    const years = relevantPhotos.map(photo => photo.year);
    const personY = yForPerson(person);

    highlightContext.strokeStyle = line;
    highlightContext.lineWidth = 1;
    highlightContext.beginPath();
    highlightContext.moveTo(layout.left, personY);
    highlightContext.lineTo(graphRight, personY);
    highlightContext.stroke();

    highlightContext.save();
    highlightContext.globalAlpha = 0.58;
    highlightContext.strokeStyle = accent;
    highlightContext.lineWidth = 1.5;
    relevantPhotos.forEach(photo => {
      const x = photoX.get(photo.id);
      highlightContext.beginPath();
      highlightContext.moveTo(x, layout.photoY + layout.thumbnail / 2);
      highlightContext.lineTo(x, d3.max(photo.people, yForPerson));
      highlightContext.stroke();
    });
    highlightContext.restore();

    highlightContext.strokeStyle = accent;
    highlightContext.lineWidth = 6;
    highlightContext.lineCap = "round";
    highlightContext.beginPath();
    highlightContext.moveTo(xScale(d3.min(years)), personY);
    highlightContext.lineTo(Math.max(xScale(d3.min(years)) + 5, xScale(d3.max(years))), personY);
    highlightContext.stroke();
    highlightContext.lineCap = "butt";

    relevantPhotos.forEach(photo => {
      const x = photoX.get(photo.id);
      photo.people.forEach(nodePerson => {
        highlightContext.beginPath();
        highlightContext.arc(x, yForPerson(nodePerson), layout.node / 2, 0, Math.PI * 2);
        highlightContext.fillStyle = accent;
        highlightContext.fill();
        highlightContext.strokeStyle = paper;
        highlightContext.lineWidth = 1.5;
        highlightContext.stroke();
      });

      highlightContext.strokeStyle = accent;
      highlightContext.lineWidth = 2;
      highlightContext.strokeRect(
        x - layout.thumbnail / 2 - 2,
        layout.photoY - layout.thumbnail / 2 - 2,
        layout.thumbnail + 4,
        layout.thumbnail + 4
      );
    });
  };

  const photosByPerson = new Map(people.map(person => [
    person,
    photoData
      .filter(photo => photo.people.includes(person))
      .map(photo => ({ photo, x: photoX.get(photo.id) }))
      .sort((a, b) => a.x - b.x)
  ]));

  const nearestPhoto = (event, person) => {
    const pointerX = d3.pointer(event, svg.node())[0];
    const candidates = photosByPerson.get(person).filter(item => isPhotoRelevant(item.photo));
    const nearest = d3.least(candidates, item => Math.abs(item.x - pointerX));
    return nearest && Math.abs(nearest.x - pointerX) <= 13 ? nearest.photo : null;
  };

  marks.rowHits = svg.append("g").attr("class", "row-hits")
    .selectAll("rect")
    .data(people)
    .join("rect")
    .attr("x", layout.left)
    .attr("y", person => yForPerson(person) - layout.row / 2)
    .attr("width", graphRight - layout.left)
    .attr("height", layout.row)
    .on("pointermove", (event, person) => {
      const photo = nearestPhoto(event, person);
      event.currentTarget.classList.toggle("has-photo", Boolean(photo));
      if (photo) showPreview(event, photo);
      else hidePreview();
    })
    .on("pointerleave", event => {
      event.currentTarget.classList.remove("has-photo");
      hidePreview();
    })
    .on("click", (event, person) => {
      const photo = nearestPhoto(event, person);
      if (photo) selectPhoto(photo);
    });

  const bottomAxis = d3.axisBottom(xScale)
    .tickValues(getYearTicks())
    .tickFormat(d3.format("d"))
    .tickSize(8);
  svg.append("g")
    .attr("class", "timeline-axis")
    .attr("transform", `translate(0,${timelineY})`)
    .call(bottomAxis);
  svg.append("text")
    .attr("class", "axis-title")
    .attr("x", (layout.left + graphRight) / 2)
    .attr("y", timelineY + 65)
    .attr("text-anchor", "middle")
    .text("Time");

  updateFilterMarks();
  updatePhotoSelection(null, selectedPhoto);
}

window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(render);
});

initializePanels();
render();
