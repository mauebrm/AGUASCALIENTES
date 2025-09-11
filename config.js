var config = {
  logo: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/path19-9.png?raw=true",
  style: 'mapbox://styles/mauberm/cmf8wt3x4004d01s556hvg1xu',
  accessToken: "pk.eyJ1IjoibWF1YmVybSIsImEiOiJjbDkwandiMXAwdDJkM3ZvNjhyNGtyYmtvIn0.f8f_PAURro1hU-sh_xnAuA",
  showMarkers: false,
  theme: "cf",
  alignment: "left",
  title: "CORREDOR SIGLO XXI - AGUASCALIENTES",
  subtitle: "",
  byline: "GOBIERNO DE AGUASCALIENTES",
  
  footer: 'WEBMAP - Developed by <div style="text-align:center; margin-top:10px;"><img src="https://github.com/mauebrm/AGUASCALIENTES/blob/main/path19-9.png?raw=true" alt="Logo AMA" style="height:30px;"></div>',

  chapters: [
    {
      id: "chap-1",
      title: "CORREDOR SIGLO XX1",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170030.png?raw=true",
      description: "Sistema Integrado de Transporte Metropolitano” en la ciudad de Aguascalientes, Ags",
      location: {
        center: [-102.04567, 21.90594],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R2", opacity: 0 },
        { layer: "R1", opacity: 0 },
        { layer: "PARAD", opacity: 0 },
        { layer: "IC", opacity: 0 },
        { layer: "CORR", opacity: 0 },
        { layer: "AV", opacity: 0 },
        { layer: "SEC", opacity: 0 },
        { layer: "uta", opacity: 0 },
        { layer: "CORR", opacity: 0 },
        { layer: "CORR1", opacity: 0 },
        { layer: "oficinas-cg7ao1", opacity: 0 },
        { layer: "map-7-00pvbd", opacity: 0 },
        { layer: "dp-com", opacity: 0 },
        { layer: "sombras-dp", opacity: 0 },
        { layer: "distritopy", opacity: 0 },
        { layer: "dp-completo-84d3yb copy 1", opacity: 0 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-2",
      title: "ESTADO DE AGUASCALIENTES",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/369-3698207_escudos-de-mxico-escudo-del-estado-de-aguascalientes.png?raw=true",
      description: "",
      location: {
        center: [-102.30596, 21.89440],
        zoom: 7.9,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 0 }
      ],
      onChapterExit: []
    },
    {
      id: "CHAP-3",
      title: "AGUASCALIENTES",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Pueblos-magicos-de-aguascalientes-disfrutar-pareja-.jpg?raw=true",
      description: "",
      location: {
        center: [-102.30596, 21.89440],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "rio", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "rio", opacity: 0.4 }
      ]
    },
    {
      id: "chap-4.9",
      title: "PRIMER ANILLO",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/primer-anillo.jpg?raw=true",
      description: "",
      location: {
        center: [-102.30596, 21.89440],
        zoom: 12.6,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 0.8 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-4.8",
      title: "SEGUNDO ANILLO",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/seg%20anillo.jpg?raw=true",
      description: "",
      location: {
        center: [-102.30596, 21.89440],
        zoom: 12,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R2", opacity: 0.8 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-4",
      title: "TERCER ANILLO - CORREDOR SIGLO XXI",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/tercer%20anillo.jpeg?raw=true",
      description: "Se construirán 110 paraderos a lo largo del trazo de la ruta troncal ubicados en promedio a 500 metros de distancia entre paraderos",
      location: {
        center: [-102.30596, 21.89440],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "PARAD", opacity: 0.8 },
                { layer: "CORR", opacity: 0.8 },
        { layer: "CORR1", opacity: 0.8 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-6",
      title: "AVENIDAS PRINCIPALES - INTERSECCIONES PRIMARIAS",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/trafico-vehicular-Magda-696x464.jpg?raw=true",
      description: "",
      location: {
        center: [-102.30596, 21.89440],
        zoom: 12.3,
        pitch: 52,
        bearing: 52,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "AV", opacity: 0.8 },
        { layer: "aero", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "camino-aero", opacity: 0 },
        { layer: "caminos", opacity: 1 },
        { layer: "aero", opacity: 0 }
      ]
    },
        {
      id: "chap-6.1",
      title: "INTERSECCIONES SECUNDARIAS",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/av-aguascalientes-y-av-universidad-ASC_0774.jpg?raw=true",
      description: "",
      location: {
        center: [-102.30596, 21.89440],
        zoom: 12.5,
        pitch: 52,
        bearing: 52,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "SEC", opacity: 0.6 },
        { layer: "aero", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "camino-aero", opacity: 0 },
        { layer: "caminos", opacity: 1 },
        { layer: "aero", opacity: 0 }
      ]
    },
    {
      id: "chap-6.4",
      title: "UTA - Universidad Tecnológica de Aguascalientes",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/65avion.jpg?raw=true",
      description: "",
      location: {
        center: [-102.35289, 21.84036],
        zoom: 15,
        pitch: 45,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "uta", opacity: 0.9 }
      ],
      onChapterExit: []
    },
    {
      id: "IC2",
      title: "IC1",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20165917.png?raw=true",
      description: "",
      location: {
        center: [-102.32299, 21.84306],
        zoom: 15.5,
        pitch: 65,
        bearing: 35,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "IC", opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-8",
      title: "IC2",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20165917.png?raw=true",
      description: "",
      location: {
        center: [-102.30164, 21.84525],
        zoom: 16,
        pitch: 35,
        bearing: 35,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "EXP", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "EXP", opacity: 0 }
      ]
    },
    {
      id: "chap-9",
      title: "C3",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202844.png?raw=true",
      description: "",
      location: {
        center: [-102.29370, 21.84463], // fixed
        zoom: 17,
        pitch: 50,
        bearing: 120,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "Ameba",
      title: "C4",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202859.png?raw=true",
      description: "",
      location: {
        center: [-102.29054, 21.84489],
        zoom: 17.56,
        pitch: 69.50,
        bearing: 102.14,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "R1", opacity: 0 }
      ]
    },
        {
      id: "X",
      title: "C5",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202913.png?raw=true",
      description: "",
      location: {
        center:[-102.28087, 21.84660],
        zoom: 17.56,
        pitch: 69.50,
        bearing: 102.14,
        duration: 5000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "R1", opacity: 0 }
      ]
    },
    {
      id: "chap-11",
      title: "C6",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/nissan-mexicana-logra-su-produccion-de-dos-millones-de-unidades-utilizando-energias-renovables-9245.jpeg?raw=true",
      description: "",
      location: {
        center: [-102.26953, 21.85184],
        zoom: 17.71,
        pitch: 63.5,
        bearing: 99.6,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-12",
      title: "C7",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170018.png?raw=true",
      description: ".",
      location: {
        center: [-102.25680, 21.85524],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-13",
      title: "C8",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170024.png?raw=true",
      description: "",
      location: {
        center:[-102.24824, 21.86261],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-14",
      title: "C9",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202949.png?raw=true",
      description: "",
      location: {
        center: [-102.24587, 21.87324],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-15",
      title: "C10",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203006.png?raw=true",
      description: "",
      location: {
        center: [-102.24821, 21.87959],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-16",
      title: "C11",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "",
      location: {
        center: [-102.25119, 21.88715],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-17",
      title: "C12",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203028.png?raw=true",
      description: "",
      location: {
        center: [-102.25363, 21.89344],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-18",
      title: "C13",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203044.png?raw=true",
      description: "",
      location: {
        center: [-102.25369, 21.90002],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-19",
      title: "C14",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203102.png?raw=true",
      description: "",
      location: {
        center: [-102.25700, 21.90706],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-20",
      title: "C15",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "",
      location: {
        center: [-102.27884, 21.94152],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-21",
      title: "C16",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "",
      location: {
        center: [-102.32420, 21.95062],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-22",
      title: "C17",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "",
      location: {
        center: [-102.33842, 21.95405],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    // ... Remaining chapters unchanged
  ]
};










