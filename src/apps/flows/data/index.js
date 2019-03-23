export const appPath = "/Spaces";

export const spacesTypes = [
  "campus",
  // "region",
  "building",
  "room",
  "partition"
];

export const resourceList = [
  "printer",
  "microphone",
  "projector",
  "whiteboard",
  "chair",
  "square table",
  "round table",
  "podium",
  "tv",
  "wood floor",
  "blackboard"
];

export const layoutTypes = [
  "default"
];

export const imageFiles = [
  {
    src:
      "https://i.cbc.ca/1.4386315.1509727588!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/shingwauk-residential-school.JPG",
    type: "building"
  },
  {
    src:
      "http://mcgrawimages.buildingmedia.com/CE/CE_images/2015/Jan_Multi-School-10.jpg",
    type: "building"
  },
  {
    src:
      "https://media-cdn.tripadvisor.com/media/photo-s/07/b4/f2/71/johns-hopkins-hospital.jpg",
    type: "building"
  },
  {
    src:
      "http://www.integdes.net/media/zoo/images/AthensBible_837bb065832d321b7a8224184406fa66.jpg",
    type: "building"
  },
  {
    src:
      "https://i.pinimg.com/originals/07/95/54/07955478f3e596d85d6a24a5fe98f75e.jpg",
    type: "building"
  },
  {
    src: "http://www.soka.edu/about_soka/our_campus/about-campus-overview.jpg",
    type: "campus"
  },
  {
    src: "https://media.glassdoor.com/l/40/51/a1/1a/campus.jpg",
    type: "campus"
  },
  {
    src: "https://wustl.edu/wp-content/uploads/2014/09/danforth-aerial.jpg",
    type: "campus"
  },
  {
    src: "https://oakland.edu/Assets/Oakland/newsatou/graphics/aerial-480.jpg",
    type: "campus"
  },
  {
    src: "https://c1.staticflickr.com/9/8567/28760860135_18365188c3_b.jpg",
    type: "room"
  },
  {
    src: "https://www.speedybooker.com/pool/exeter-room-university.jpg",
    type: "room"
  },
  {
    src:
      "https://studentcenters.georgetown.edu/sites/studentcenter/files/styles/hero_image/public/great_room_booths.jpg",
    type: "room"
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5HasDfTljk0KcpgRhwBT3NNz-HDe_5-DrBwnUwClcpDPjAwIXQ",
    type: "room"
  },
  {
    src: "http://classrooms.johnshopkins.edu/images/maryland104.jpg",
    type: "room"
  },
  {
    src:
      "https://www.uh.edu/studentcenters/_images/_studyrooms/study-room-252.jpg",
    type: "room"
  },
  {
    src: "https://www.csuohio.edu/sites/default/files/urban-lab.png",
    type: "region"
  },
  {
    src:
      "https://www.harryfairclough.co.uk/wp-content/uploads/2017/07/Lancaster-Uni-Science-Labs-4.jpg",
    type: "region"
  },
  {
    src:
      "https://static1.squarespace.com/static/5b72a715ee1759731956ec87/t/5c3622e70ebbe812bdc11ccc/1547051777128/Cooper+University+Fixed+to+Wall+KwickScreen+Partition",
    type: "partition"
  },
  {
    src:
      "https://www.huiacoustics.com/wp-content/uploads/2017/09/soundproof-room-divider-soundproofing-room-partition-wall-materials.jpg",
    type: "partition"
  }
];

export const allspaces = [
  {
    id: "institution",
    parentid: null,
    layout: null,
    type: "institution",
    name: "School",
    image_src: "http://www.schoolfix.com/media/catalog/product/w/a/warrior-mascot-1.jpg",
    details: {}
  },
  {
    id: "campus1",
    parentid: "institution",
    layout: null,
    type: "campus",
    name: "Campus 1",
    image_src: "https://media.glassdoor.com/l/40/51/a1/1a/campus.jpg",
    details: {}
  },
  {
    id: "building1",
    parentid: "campus1",
    layout: null,
    type: "building",
    name: "Building 1",
    image_src:
      "https://media-cdn.tripadvisor.com/media/photo-s/07/b4/f2/71/johns-hopkins-hospital.jpg",
      details: {}
  },
  {
    id: "building2",
    parentid: "campus1",
    layout: null,
    type: "building",
    name: "Building 2",
    image_src:
      "http://www.integdes.net/media/zoo/images/AthensBible_837bb065832d321b7a8224184406fa66.jpg",
      details: {}
  },
  {
    id: "room1",
    parentid: "building1",
    layout: null,
    type: "room",
    name: "Room 1",
    image_src: "http://classrooms.johnshopkins.edu/images/maryland104.jpg",
    details: {}
  }
];
