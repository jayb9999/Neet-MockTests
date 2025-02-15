const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('exam.db');

const questions = [
    {
      "id": 1,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "What is the SI unit of force?",
      "image_url": "",
      "options": [
        "Newton",
        "Joule",
        "Watt",
        "Pascal"
      ],
      "correct_answer": "Newton"
    },
    {
      "id": 2,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass?",
      "image_url": "",
      "options": [
        "Newton’s First Law",
        "Newton’s Second Law",
        "Newton’s Third Law",
        "Law of Gravitation"
      ],
      "correct_answer": "Newton’s Second Law"
    },
    {
      "id": 3,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "What is the dimensional formula of velocity?",
      "image_url": "",
      "options": [
        "M⁰L¹T⁻¹",
        "M¹L¹T⁻²",
        "M⁰L⁰T⁰",
        "M¹L⁰T⁻¹"
      ],
      "correct_answer": "M⁰L¹T⁻¹"
    },
    {
      "id": 4,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which of the following is a scalar quantity?",
      "image_url": "",
      "options": [
        "Velocity",
        "Displacement",
        "Work",
        "Acceleration"
      ],
      "correct_answer": "Work"
    },
    {
      "id": 5,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "The escape velocity of Earth is approximately:",
      "image_url": "",
      "options": [
        "9.8 m/s",
        "11.2 km/s",
        "3 × 10⁸ m/s",
        "5.8 km/s"
      ],
      "correct_answer": "11.2 km/s"
    },
    {
      "id": 6,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which of the following is a unit of power?",
      "image_url": "",
      "options": [
        "Watt",
        "Joule",
        "Newton",
        "Pascal"
      ],
      "correct_answer": "Watt"
    },
    {
      "id": 7,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which principle explains why a ship floats on water?",
      "image_url": "",
      "options": [
        "Pascal’s Principle",
        "Bernoulli’s Principle",
        "Archimedes’ Principle",
        "Newton’s Third Law"
      ],
      "correct_answer": "Archimedes’ Principle"
    },
    {
      "id": 8,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which type of mirror is used in vehicle rear-view mirrors?",
      "image_url": "",
      "options": [
        "Concave mirror",
        "Convex mirror",
        "Plane mirror",
        "Parabolic mirror"
      ],
      "correct_answer": "Convex mirror"
    },
    {
      "id": 9,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which color of light has the shortest wavelength?",
      "image_url": "",
      "options": [
        "Red",
        "Yellow",
        "Blue",
        "Violet"
      ],
      "correct_answer": "Violet"
    },
    {
      "id": 10,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which law states that energy cannot be created or destroyed, only transformed?",
      "image_url": "",
      "options": [
        "First Law of Thermodynamics",
        "Second Law of Thermodynamics",
        "Law of Gravitation",
        "Coulomb’s Law"
      ],
      "correct_answer": "First Law of Thermodynamics"
    },
    {
      "id": 11,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which phenomenon is responsible for the twinkling of stars?",
      "image_url": "",
      "options": [
        "Dispersion",
        "Interference",
        "Refraction",
        "Diffraction"
      ],
      "correct_answer": "Refraction"
    },
    {
      "id": 12,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which type of wave does not require a medium for propagation?",
      "image_url": "",
      "options": [
        "Sound wave",
        "Water wave",
        "Electromagnetic wave",
        "Seismic wave"
      ],
      "correct_answer": "Electromagnetic wave"
    },
    {
      "id": 13,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which fundamental force is the weakest among the four fundamental forces of nature?",
      "image_url": "",
      "options": [
        "Gravitational force",
        "Electromagnetic force",
        "Weak nuclear force",
        "Strong nuclear force"
      ],
      "correct_answer": "Gravitational force"
    },
    {
      "id": 14,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which unit is used to measure electric current?",
      "image_url": "",
      "options": [
        "Volt",
        "Ohm",
        "Ampere",
        "Coulomb"
      ],
      "correct_answer": "Ampere"
    },
    {
      "id": 15,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "What is the speed of light in vacuum?",
      "image_url": "",
      "options": [
        "3 × 10⁵ m/s",
        "3 × 10⁶ m/s",
        "3 × 10⁸ m/s",
        "3 × 10⁹ m/s"
      ],
      "correct_answer": "3 × 10⁸ m/s"
    },
    {
      "id": 16,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which device is used to measure atmospheric pressure?",
      "image_url": "",
      "options": [
        "Barometer",
        "Manometer",
        "Hygrometer",
        "Voltmeter"
      ],
      "correct_answer": "Barometer"
    },
    {
      "id": 17,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which law states that the current flowing through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance?",
      "image_url": "",
      "options": [
        "Kirchhoff’s Law",
        "Ohm’s Law",
        "Lenz’s Law",
        "Faraday’s Law"
      ],
      "correct_answer": "Ohm’s Law"
    },
    {
      "id": 18,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which type of lens is used to correct myopia (nearsightedness)?",
      "image_url": "",
      "options": [
        "Convex lens",
        "Concave lens",
        "Cylindrical lens",
        "Bifocal lens"
      ],
      "correct_answer": "Concave lens"
    },
    {
      "id": 19,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which radiation has the highest energy?",
      "image_url": "",
      "options": [
        "Microwaves",
        "Infrared",
        "Gamma rays",
        "Radio waves"
      ],
      "correct_answer": "Gamma rays"
    },
    {
      "id": 20,
      "test_id": "Mock Test 1",
      "subject": "Physics",
      "question": "Which phenomenon explains the working of optical fibers?",
      "image_url": "",
      "options": [
        "Diffraction",
        "Total internal reflection",
        "Refraction",
        "Interference"
      ],
      "correct_answer": "Total internal reflection"
    },
  {
    "id": 21,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which of the following is a vector quantity?",
    "image_url": "",
    "options": [
      "Speed",
      "Work",
      "Momentum",
      "Mass"
    ],
    "correct_answer": "Momentum"
  },
  {
    "id": 22,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which law states that every action has an equal and opposite reaction?",
    "image_url": "",
    "options": [
      "Newton’s First Law",
      "Newton’s Second Law",
      "Newton’s Third Law",
      "Law of Gravitation"
    ],
    "correct_answer": "Newton’s Third Law"
  },
  {
    "id": 23,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which quantity remains conserved in an elastic collision?",
    "image_url": "",
    "options": [
      "Momentum only",
      "Kinetic energy only",
      "Both momentum and kinetic energy",
      "Neither momentum nor kinetic energy"
    ],
    "correct_answer": "Both momentum and kinetic energy"
  },
  {
    "id": 24,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which of the following waves is longitudinal?",
    "image_url": "",
    "options": [
      "Light waves",
      "X-rays",
      "Sound waves",
      "Gamma rays"
    ],
    "correct_answer": "Sound waves"
  },
  {
    "id": 25,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which phenomenon explains the blue color of the sky?",
    "image_url": "",
    "options": [
      "Reflection",
      "Scattering",
      "Refraction",
      "Interference"
    ],
    "correct_answer": "Scattering"
  },
  {
    "id": 26,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which device converts electrical energy into mechanical energy?",
    "image_url": "",
    "options": [
      "Generator",
      "Motor",
      "Transformer",
      "Battery"
    ],
    "correct_answer": "Motor"
  },
  {
    "id": 27,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "What is the SI unit of work?",
    "image_url": "",
    "options": [
      "Newton",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "correct_answer": "Joule"
  },
  {
    "id": 28,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which of the following forces is responsible for keeping planets in orbit?",
    "image_url": "",
    "options": [
      "Electromagnetic force",
      "Gravitational force",
      "Nuclear force",
      "Frictional force"
    ],
    "correct_answer": "Gravitational force"
  },
  {
    "id": 29,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which material is commonly used in making semiconductors?",
    "image_url": "",
    "options": [
      "Copper",
      "Iron",
      "Silicon",
      "Aluminum"
    ],
    "correct_answer": "Silicon"
  },
  {
    "id": 30,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which of the following is the best conductor of electricity?",
    "image_url": "",
    "options": [
      "Copper",
      "Gold",
      "Silver",
      "Aluminum"
    ],
    "correct_answer": "Silver"
  },
  {
    "id": 31,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which phenomenon is responsible for the formation of a rainbow?",
    "image_url": "",
    "options": [
      "Reflection",
      "Refraction and dispersion",
      "Diffraction",
      "Interference"
    ],
    "correct_answer": "Refraction and dispersion"
  },
  {
    "id": 32,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which of the following obeys Ohm’s law?",
    "image_url": "",
    "options": [
      "Diode",
      "Superconductor",
      "Resistor",
      "Transistor"
    ],
    "correct_answer": "Resistor"
  },
  {
    "id": 33,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "What is the SI unit of charge?",
    "image_url": "",
    "options": [
      "Volt",
      "Coulomb",
      "Ampere",
      "Farad"
    ],
    "correct_answer": "Coulomb"
  },
  {
    "id": 34,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which type of mirror is used in a torch?",
    "image_url": "",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "Cylindrical mirror"
    ],
    "correct_answer": "Concave mirror"
  },
  {
    "id": 35,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which of the following quantities is measured in ohms?",
    "image_url": "",
    "options": [
      "Resistance",
      "Capacitance",
      "Inductance",
      "Conductance"
    ],
    "correct_answer": "Resistance"
  },
  {
    "id": 36,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which law states that the total energy of an isolated system remains constant?",
    "image_url": "",
    "options": [
      "Law of Conservation of Energy",
      "Newton’s Second Law",
      "Heisenberg’s Uncertainty Principle",
      "Kirchhoff’s Law"
    ],
    "correct_answer": "Law of Conservation of Energy"
  },
  {
    "id": 37,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which type of current is used in household electrical appliances?",
    "image_url": "",
    "options": [
      "Direct Current (DC)",
      "Alternating Current (AC)",
      "Pulsating Current",
      "Superconducting Current"
    ],
    "correct_answer": "Alternating Current (AC)"
  },
  {
    "id": 38,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which of the following is a unit of magnetic field strength?",
    "image_url": "",
    "options": [
      "Tesla",
      "Coulomb",
      "Henry",
      "Weber"
    ],
    "correct_answer": "Tesla"
  },
  {
    "id": 39,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which principle is used in the working of a hydraulic lift?",
    "image_url": "",
    "options": [
      "Archimedes’ Principle",
      "Bernoulli’s Principle",
      "Pascal’s Principle",
      "Newton’s Third Law"
    ],
    "correct_answer": "Pascal’s Principle"
  },
  {
    "id": 40,
    "test_id": "Mock Test 1",
    "subject": "Physics",
    "question": "Which scientist proposed the wave-particle duality of electrons?",
    "image_url": "",
    "options": [
      "Einstein",
      "Bohr",
      "De Broglie",
      "Schrödinger"
    ],
    "correct_answer": "De Broglie"
  },
        {
          "id": 41,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "A ball is dropped from a height of 80 m. Ignoring air resistance, how long will it take to hit the ground? (g = 9.8 m/s²)",
          "image_url": "",
          "options": [
            "2 s",
            "4 s",
            "6 s",
            "8 s"
          ],
          "correct_answer": "4 s"
        },
        {
          "id": 42,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "A Carnot engine operates between two reservoirs at temperatures T₁ = 600 K and T₂ = 300 K. What is its efficiency?",
          "image_url": "",
          "options": [
            "25%",
            "50%",
            "66.7%",
            "75%"
          ],
          "correct_answer": "50%"
        },
        {
          "id": 43,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "Which of the following statements about blackbody radiation is true?",
          "image_url": "",
          "options": [
            "The emitted radiation is independent of temperature.",
            "Higher temperatures shift the peak wavelength to shorter values.",
            "Blackbodies only emit infrared radiation.",
            "The total emitted power is proportional to the fourth power of temperature."
          ],
          "correct_answer": "The total emitted power is proportional to the fourth power of temperature."
        },
        {
          "id": 44,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "A wire of resistance R is stretched to double its original length. What happens to its resistance?",
          "image_url": "",
          "options": [
            "It becomes R/2",
            "It remains R",
            "It becomes 2R",
            "It becomes 4R"
          ],
          "correct_answer": "It becomes 4R"
        },
        {
          "id": 45,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "A charge q moves with velocity v perpendicular to a uniform magnetic field B. What is the radius of its circular path?",
          "image_url": "",
          "options": [
            "qB/mv",
            "mv/qB",
            "mv²/qB",
            "qB/m"
          ],
          "correct_answer": "mv/qB"
        },
        {
          "id": 46,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "A convex lens of focal length 20 cm produces a real image at 40 cm from the lens. What is the object distance?",
          "image_url": "",
          "options": [
            "10 cm",
            "20 cm",
            "30 cm",
            "40 cm"
          ],
          "correct_answer": "30 cm"
        },
        {
          "id": 47,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "In Young’s double-slit experiment, if the separation between the slits is doubled, what happens to the fringe width?",
          "image_url": "",
          "options": [
            "It remains the same.",
            "It doubles.",
            "It is halved.",
            "It becomes four times."
          ],
          "correct_answer": "It is halved."
        },
        {
          "id": 48,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "Which of the following is true for a geostationary satellite?",
          "image_url": "",
          "options": [
            "It orbits in a polar path.",
            "It has a time period of 12 hours.",
            "It remains fixed relative to Earth’s surface.",
            "It moves faster than Earth’s rotation."
          ],
          "correct_answer": "It remains fixed relative to Earth’s surface."
        },
        {
          "id": 49,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "Which law explains the photoelectric effect?",
          "image_url": "",
          "options": [
            "Newton’s Law",
            "Maxwell’s Equations",
            "Einstein’s Photoelectric Equation",
            "Lenz’s Law"
          ],
          "correct_answer": "Einstein’s Photoelectric Equation"
        },
        {
          "id": 50,
          "test_id": "Mock Test 1",
          "subject": "Physics",
          "question": "A gas expands from volume V₁ to V₂ at constant pressure P. What is the work done by the gas?",
          "image_url": "",
          "options": [
            "P(V₂ - V₁)",
            "(V₂ - V₁)/P",
            "P(V₂ + V₁)",
            "PV₂ - V₁"
          ],
          "correct_answer": "P(V₂ - V₁)"
        },
        {
            "id": 51,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "What is the molecular formula of water?",
            "image_url": "",
            "options": [
              "H₂O",
              "H₂O₂",
              "O₂",
              "HO"
            ],
            "correct_answer": "H₂O"
          },
          {
            "id": 52,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which element has the highest electronegativity?",
            "image_url": "",
            "options": [
              "Fluorine",
              "Oxygen",
              "Chlorine",
              "Nitrogen"
            ],
            "correct_answer": "Fluorine"
          },
          {
            "id": 53,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "What is the oxidation state of Fe in Fe₂O₃?",
            "image_url": "",
            "options": [
              "+2",
              "+3",
              "+4",
              "0"
            ],
            "correct_answer": "+3"
          },
          {
            "id": 54,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is an example of a noble gas?",
            "image_url": "",
            "options": [
              "Oxygen",
              "Helium",
              "Nitrogen",
              "Hydrogen"
            ],
            "correct_answer": "Helium"
          },
          {
            "id": 55,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
            "image_url": "",
            "options": [
              "Boyle’s Law",
              "Charles’s Law",
              "Dalton’s Law",
              "Avogadro’s Law"
            ],
            "correct_answer": "Charles’s Law"
          },
          {
            "id": 56,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is a strong acid?",
            "image_url": "",
            "options": [
              "HCl",
              "CH₃COOH",
              "H₂CO₃",
              "NH₄OH"
            ],
            "correct_answer": "HCl"
          },
          {
            "id": 57,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which gas is evolved when zinc reacts with dilute hydrochloric acid?",
            "image_url": "",
            "options": [
              "O₂",
              "CO₂",
              "H₂",
              "Cl₂"
            ],
            "correct_answer": "H₂"
          },
          {
            "id": 58,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "What is the pH of a neutral solution at 25°C?",
            "image_url": "",
            "options": [
              "0",
              "7",
              "14",
              "1"
            ],
            "correct_answer": "7"
          },
          {
            "id": 59,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is an example of a covalent compound?",
            "image_url": "",
            "options": [
              "NaCl",
              "MgO",
              "CO₂",
              "KBr"
            ],
            "correct_answer": "CO₂"
          },
          {
            "id": 60,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which element is present in all organic compounds?",
            "image_url": "",
            "options": [
              "Oxygen",
              "Carbon",
              "Hydrogen",
              "Nitrogen"
            ],
            "correct_answer": "Carbon"
          },
          {
            "id": 61,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which gas is commonly known as laughing gas?",
            "image_url": "",
            "options": [
              "CO₂",
              "NO₂",
              "N₂O",
              "SO₂"
            ],
            "correct_answer": "N₂O"
          },
          {
            "id": 62,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following compounds contains an ionic bond?",
            "image_url": "",
            "options": [
              "H₂O",
              "CH₄",
              "NaCl",
              "CO₂"
            ],
            "correct_answer": "NaCl"
          },
          {
            "id": 63,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which metal is the most reactive according to the reactivity series?",
            "image_url": "",
            "options": [
              "Iron",
              "Copper",
              "Sodium",
              "Gold"
            ],
            "correct_answer": "Sodium"
          },
          {
            "id": 64,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which type of bond is formed by the sharing of electron pairs?",
            "image_url": "",
            "options": [
              "Ionic bond",
              "Covalent bond",
              "Metallic bond",
              "Hydrogen bond"
            ],
            "correct_answer": "Covalent bond"
          },
          {
            "id": 65,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which is the lightest element?",
            "image_url": "",
            "options": [
              "Oxygen",
              "Hydrogen",
              "Helium",
              "Carbon"
            ],
            "correct_answer": "Hydrogen"
          },
          {
            "id": 66,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which element is represented by the symbol ‘K’?",
            "image_url": "",
            "options": [
              "Krypton",
              "Potassium",
              "Calcium",
              "Phosphorus"
            ],
            "correct_answer": "Potassium"
          },
          {
            "id": 67,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which gas is responsible for the greenhouse effect?",
            "image_url": "",
            "options": [
              "O₂",
              "CO₂",
              "N₂",
              "CH₄"
            ],
            "correct_answer": "CO₂"
          },
          {
            "id": 68,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "What is the shape of a methane (CH₄) molecule?",
            "image_url": "",
            "options": [
              "Linear",
              "Trigonal planar",
              "Tetrahedral",
              "Octahedral"
            ],
            "correct_answer": "Tetrahedral"
          },
          {
            "id": 69,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which metal is extracted from bauxite ore?",
            "image_url": "",
            "options": [
              "Iron",
              "Aluminum",
              "Copper",
              "Zinc"
            ],
            "correct_answer": "Aluminum"
          },
          {
            "id": 70,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is an example of an alkaline earth metal?",
            "image_url": "",
            "options": [
              "Sodium",
              "Magnesium",
              "Iron",
              "Lead"
            ],
            "correct_answer": "Magnesium"
          },
          {
            "id": 71,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which acid is found in lemon juice?",
            "image_url": "",
            "options": [
              "Acetic acid",
              "Citric acid",
              "Lactic acid",
              "Sulfuric acid"
            ],
            "correct_answer": "Citric acid"
          },
          {
            "id": 72,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "What is the SI unit of pressure?",
            "image_url": "",
            "options": [
              "Newton",
              "Joule",
              "Pascal",
              "Watt"
            ],
            "correct_answer": "Pascal"
          },
          {
            "id": 73,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is a polyatomic ion?",
            "image_url": "",
            "options": [
              "Cl⁻",
              "Na⁺",
              "SO₄²⁻",
              "O²⁻"
            ],
            "correct_answer": "SO₄²⁻"
          },
          {
            "id": 74,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is a property of metals?",
            "image_url": "",
            "options": [
              "Brittle",
              "Poor conductor of heat",
              "Ductile",
              "Non-malleable"
            ],
            "correct_answer": "Ductile"
          },
          {
            "id": 75,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which metal is used in the filament of an electric bulb?",
            "image_url": "",
            "options": [
              "Copper",
              "Aluminum",
              "Tungsten",
              "Silver"
            ],
            "correct_answer": "Tungsten"
          },
          {
            "id": 76,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which is the most abundant gas in Earth's atmosphere?",
            "image_url": "",
            "options": [
              "Oxygen",
              "Nitrogen",
              "Carbon dioxide",
              "Argon"
            ],
            "correct_answer": "Nitrogen"
          },
          {
            "id": 77,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "What is the main component of natural gas?",
            "image_url": "",
            "options": [
              "Ethane",
              "Methane",
              "Propane",
              "Butane"
            ],
            "correct_answer": "Methane"
          },
          {
            "id": 78,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is an example of a chemical change?",
            "image_url": "",
            "options": [
              "Melting of ice",
              "Tearing of paper",
              "Burning of wood",
              "Boiling of water"
            ],
            "correct_answer": "Burning of wood"
          },
          {
            "id": 79,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which element is used as a moderator in nuclear reactors?",
            "image_url": "",
            "options": [
              "Graphite",
              "Lead",
              "Iron",
              "Silver"
            ],
            "correct_answer": "Graphite"
          },
          {
            "id": 80,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following has the highest pH?",
            "image_url": "",
            "options": [
              "Lemon juice",
              "Vinegar",
              "Ammonia",
              "Pure water"
            ],
            "correct_answer": "Ammonia"
          },
          {
            "id": 81,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which law explains the relationship between pressure and volume of a gas?",
            "image_url": "",
            "options": [
              "Boyle’s Law",
              "Charles’s Law",
              "Dalton’s Law",
              "Graham’s Law"
            ],
            "correct_answer": "Boyle’s Law"
          },
          {
            "id": 82,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which chemical is used in the manufacture of glass?",
            "image_url": "",
            "options": [
              "Silicon dioxide",
              "Calcium carbonate",
              "Sodium chloride",
              "Magnesium oxide"
            ],
            "correct_answer": "Silicon dioxide"
          },
          {
            "id": 83,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is an example of an allotrope of carbon?",
            "image_url": "",
            "options": [
              "Graphite",
              "Iron",
              "Copper",
              "Lead"
            ],
            "correct_answer": "Graphite"
          },
          {
            "id": 84,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which element is the basis of organic chemistry?",
            "image_url": "",
            "options": [
              "Oxygen",
              "Carbon",
              "Hydrogen",
              "Nitrogen"
            ],
            "correct_answer": "Carbon"
          },
          {
            "id": 85,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following is an example of an alkali?",
            "image_url": "",
            "options": [
              "HCl",
              "NaOH",
              "H₂SO₄",
              "CH₃COOH"
            ],
            "correct_answer": "NaOH"
          },
          {
            "id": 86,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which of the following gases is responsible for acid rain?",
            "image_url": "",
            "options": [
              "O₂",
              "CO₂",
              "SO₂",
              "N₂"
            ],
            "correct_answer": "SO₂"
          },
          {
            "id": 87,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "What is the chemical formula of washing soda?",
            "image_url": "",
            "options": [
              "NaHCO₃",
              "Na₂CO₃",
              "CaCO₃",
              "K₂CO₃"
            ],
            "correct_answer": "Na₂CO₃"
          },
          {
            "id": 88,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which gas is used in the Haber process for ammonia production?",
            "image_url": "",
            "options": [
              "Oxygen",
              "Nitrogen",
              "Hydrogen",
              "Carbon dioxide"
            ],
            "correct_answer": "Nitrogen"
          },
          {
            "id": 89,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which element has the lowest atomic number?",
            "image_url": "",
            "options": [
              "Helium",
              "Hydrogen",
              "Lithium",
              "Boron"
            ],
            "correct_answer": "Hydrogen"
          },
          {
            "id": 90,
            "test_id": "Mock Test 1",
            "subject": "Chemistry",
            "question": "Which functional group is present in alcohols?",
            "image_url": "",
            "options": [
              "-COOH",
              "-OH",
              "-CHO",
              "-NH₂"
            ],
            "correct_answer": "-OH"
          },   
    {
      "id": 91,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which of the following is a transition metal?",
      "image_url": "",
      "options": [
        "Sodium",
        "Calcium",
        "Iron",
        "Aluminum"
      ],
      "correct_answer": "Iron"
    },
    {
      "id": 92,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which type of reaction involves the exchange of ions between two compounds?",
      "image_url": "",
      "options": [
        "Redox reaction",
        "Decomposition reaction",
        "Double displacement reaction",
        "Combination reaction"
      ],
      "correct_answer": "Double displacement reaction"
    },
    {
      "id": 93,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which of the following has the highest boiling point?",
      "image_url": "",
      "options": [
        "H₂O",
        "NH₃",
        "CH₄",
        "CO₂"
      ],
      "correct_answer": "H₂O"
    },
    {
      "id": 94,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "What is the chemical formula of quicklime?",
      "image_url": "",
      "options": [
        "Ca(OH)₂",
        "CaCO₃",
        "CaO",
        "CaCl₂"
      ],
      "correct_answer": "CaO"
    },
    {
      "id": 95,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which gas is used in fire extinguishers?",
      "image_url": "",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Hydrogen",
        "Nitrogen"
      ],
      "correct_answer": "Carbon dioxide"
    },
    {
      "id": 96,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which of the following is an example of a colloidal solution?",
      "image_url": "",
      "options": [
        "Salt solution",
        "Sugar solution",
        "Milk",
        "Copper sulfate solution"
      ],
      "correct_answer": "Milk"
    },
    {
      "id": 97,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "What is the molecular formula of benzene?",
      "image_url": "",
      "options": [
        "C₆H₁₂",
        "C₆H₆",
        "C₅H₁₀",
        "C₄H₈"
      ],
      "correct_answer": "C₆H₆"
    },
    {
      "id": 98,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which of the following is an example of an endothermic reaction?",
      "image_url": "",
      "options": [
        "Burning of wood",
        "Condensation of steam",
        "Photosynthesis",
        "Freezing of water"
      ],
      "correct_answer": "Photosynthesis"
    },
    {
      "id": 99,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which type of chemical bond is present in sodium chloride (NaCl)?",
      "image_url": "",
      "options": [
        "Covalent bond",
        "Ionic bond",
        "Metallic bond",
        "Hydrogen bond"
      ],
      "correct_answer": "Ionic bond"
    },
    {
      "id": 100,
      "test_id": "Mock Test 1",
      "subject": "Chemistry",
      "question": "Which of the following is an allotrope of carbon?",
      "image_url": "",
      "options": [
        "Diamond",
        "Sulfur",
        "Phosphorus",
        "Oxygen"
      ],
      "correct_answer": "Diamond"
    },  
    {
      "id": 101,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is the powerhouse of the cell?",
      "image_url": "",
      "options": [
        "Nucleus",
        "Mitochondria",
        "Ribosome",
        "Golgi apparatus"
      ],
      "correct_answer": "Mitochondria"
    },
    {
      "id": 102,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which plant hormone is responsible for cell elongation in stems?",
      "image_url": "",
      "options": [
        "Cytokinin",
        "Gibberellin",
        "Auxin",
        "Abscisic acid"
      ],
      "correct_answer": "Auxin"
    },
    {
      "id": 103,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which organ in the human body is responsible for filtering blood and producing urine?",
      "image_url": "",
      "options": [
        "Liver",
        "Heart",
        "Kidney",
        "Lungs"
      ],
      "correct_answer": "Kidney"
    },
    {
      "id": 104,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of RNA carries amino acids to the ribosome?",
      "image_url": "",
      "options": [
        "mRNA",
        "rRNA",
        "tRNA",
        "snRNA"
      ],
      "correct_answer": "tRNA"
    },
    {
      "id": 105,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which process is responsible for the conversion of nitrogen gas into ammonia?",
      "image_url": "",
      "options": [
        "Nitrification",
        "Denitrification",
        "Nitrogen fixation",
        "Ammonification"
      ],
      "correct_answer": "Nitrogen fixation"
    },
    {
      "id": 106,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is not a component of the human circulatory system?",
      "image_url": "",
      "options": [
        "Heart",
        "Liver",
        "Blood vessels",
        "Blood"
      ],
      "correct_answer": "Liver"
    },
    {
      "id": 107,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the brain is responsible for maintaining balance and coordination?",
      "image_url": "",
      "options": [
        "Cerebrum",
        "Medulla oblongata",
        "Cerebellum",
        "Hypothalamus"
      ],
      "correct_answer": "Cerebellum"
    },
    {
      "id": 108,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which blood cells are responsible for fighting infections?",
      "image_url": "",
      "options": [
        "Red blood cells",
        "White blood cells",
        "Platelets",
        "Plasma cells"
      ],
      "correct_answer": "White blood cells"
    },
    {
      "id": 109,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which enzyme breaks down starch into maltose?",
      "image_url": "",
      "options": [
        "Pepsin",
        "Amylase",
        "Lipase",
        "Trypsin"
      ],
      "correct_answer": "Amylase"
    },
    {
      "id": 110,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is the structural and functional unit of the kidney?",
      "image_url": "",
      "options": [
        "Neuron",
        "Alveolus",
        "Nephron",
        "Glomerulus"
      ],
      "correct_answer": "Nephron"
    },
    {
      "id": 111,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which gas is released during photosynthesis?",
      "image_url": "",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Hydrogen"
      ],
      "correct_answer": "Oxygen"
    },
    {
      "id": 112,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is not an excretory product of humans?",
      "image_url": "",
      "options": [
        "Urea",
        "Carbon dioxide",
        "Ammonia",
        "Glycogen"
      ],
      "correct_answer": "Glycogen"
    },
    {
      "id": 113,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the flower develops into a fruit?",
      "image_url": "",
      "options": [
        "Ovule",
        "Ovary",
        "Sepal",
        "Petal"
      ],
      "correct_answer": "Ovary"
    },
    {
      "id": 114,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which vitamin is essential for blood clotting?",
      "image_url": "",
      "options": [
        "Vitamin A",
        "Vitamin B12",
        "Vitamin K",
        "Vitamin C"
      ],
      "correct_answer": "Vitamin K"
    },
    {
      "id": 115,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the human body contains the smallest bones?",
      "image_url": "",
      "options": [
        "Ear",
        "Hand",
        "Foot",
        "Nose"
      ],
      "correct_answer": "Ear"
    },
    {
      "id": 116,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "What is the main function of hemoglobin in blood?",
      "image_url": "",
      "options": [
        "Blood clotting",
        "Oxygen transport",
        "Immunity",
        "Digestion"
      ],
      "correct_answer": "Oxygen transport"
    },
    {
      "id": 117,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of reproduction involves the fusion of gametes?",
      "image_url": "",
      "options": [
        "Asexual reproduction",
        "Budding",
        "Sexual reproduction",
        "Fragmentation"
      ],
      "correct_answer": "Sexual reproduction"
    },
    {
      "id": 118,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is a greenhouse gas?",
      "image_url": "",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Hydrogen"
      ],
      "correct_answer": "Carbon dioxide"
    },
    {
      "id": 119,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the brain regulates body temperature?",
      "image_url": "",
      "options": [
        "Cerebrum",
        "Medulla oblongata",
        "Cerebellum",
        "Hypothalamus"
      ],
      "correct_answer": "Hypothalamus"
    },
    {
      "id": 120,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the plant is responsible for photosynthesis?",
      "image_url": "",
      "options": [
        "Root",
        "Stem",
        "Leaf",
        "Flower"
      ],
      "correct_answer": "Leaf"
    },
    {
      "id": 121,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is a protein that speeds up chemical reactions in the body?",
      "image_url": "",
      "options": [
        "Lipid",
        "Carbohydrate",
        "Enzyme",
        "Nucleic acid"
      ],
      "correct_answer": "Enzyme"
    },
    {
      "id": 122,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the digestive system is responsible for water absorption?",
      "image_url": "",
      "options": [
        "Stomach",
        "Small intestine",
        "Large intestine",
        "Liver"
      ],
      "correct_answer": "Large intestine"
    },
    {
      "id": 123,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "What is the primary function of stomata in plants?",
      "image_url": "",
      "options": [
        "Water absorption",
        "Gas exchange",
        "Food transport",
        "Anchoring the plant"
      ],
      "correct_answer": "Gas exchange"
    },
    {
      "id": 124,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which human organ produces insulin?",
      "image_url": "",
      "options": [
        "Liver",
        "Pancreas",
        "Kidney",
        "Stomach"
      ],
      "correct_answer": "Pancreas"
    },
    {
      "id": 125,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which structure in the cell is responsible for protein synthesis?",
      "image_url": "",
      "options": [
        "Mitochondria",
        "Ribosome",
        "Lysosome",
        "Nucleus"
      ],
      "correct_answer": "Ribosome"
    },
    {
      "id": 126,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following diseases is caused by a deficiency of Vitamin D?",
      "image_url": "",
      "options": [
        "Scurvy",
        "Rickets",
        "Night blindness",
        "Beriberi"
      ],
      "correct_answer": "Rickets"
    },
    {
      "id": 127,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of connective tissue connects muscles to bones?",
      "image_url": "",
      "options": [
        "Cartilage",
        "Ligament",
        "Tendon",
        "Areolar tissue"
      ],
      "correct_answer": "Tendon"
    },
    {
      "id": 128,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which blood component helps in clotting?",
      "image_url": "",
      "options": [
        "Plasma",
        "Red blood cells",
        "White blood cells",
        "Platelets"
      ],
      "correct_answer": "Platelets"
    },
    {
      "id": 129,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which is the longest bone in the human body?",
      "image_url": "",
      "options": [
        "Humerus",
        "Femur",
        "Tibia",
        "Radius"
      ],
      "correct_answer": "Femur"
    },
    {
      "id": 130,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the brain controls involuntary actions like breathing and heartbeat?",
      "image_url": "",
      "options": [
        "Cerebrum",
        "Cerebellum",
        "Medulla oblongata",
        "Thalamus"
      ],
      "correct_answer": "Medulla oblongata"
    },
    {
      "id": 131,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is a genetic disorder?",
      "image_url": "",
      "options": [
        "Tuberculosis",
        "Diabetes",
        "Hemophilia",
        "Typhoid"
      ],
      "correct_answer": "Hemophilia"
    },
    {
      "id": 132,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is the main function of the liver?",
      "image_url": "",
      "options": [
        "Pump blood",
        "Filter waste",
        "Produce bile",
        "Absorb nutrients"
      ],
      "correct_answer": "Produce bile"
    },
    {
      "id": 133,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of muscle is found in the walls of internal organs?",
      "image_url": "",
      "options": [
        "Skeletal muscle",
        "Smooth muscle",
        "Cardiac muscle",
        "Voluntary muscle"
      ],
      "correct_answer": "Smooth muscle"
    },
    {
      "id": 134,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which hormone is responsible for regulating blood sugar levels?",
      "image_url": "",
      "options": [
        "Adrenaline",
        "Insulin",
        "Thyroxine",
        "Glucagon"
      ],
      "correct_answer": "Insulin"
    },
    {
      "id": 135,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of a vestigial organ in humans?",
      "image_url": "",
      "options": [
        "Liver",
        "Appendix",
        "Heart",
        "Lungs"
      ],
      "correct_answer": "Appendix"
    },
    {
      "id": 136,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which pigment gives plants their green color?",
      "image_url": "",
      "options": [
        "Hemoglobin",
        "Melanin",
        "Chlorophyll",
        "Keratin"
      ],
      "correct_answer": "Chlorophyll"
    },
    {
      "id": 137,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which gas is necessary for cellular respiration?",
      "image_url": "",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Hydrogen"
      ],
      "correct_answer": "Oxygen"
    },
    {
      "id": 138,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which disease is caused by Plasmodium species?",
      "image_url": "",
      "options": [
        "Tuberculosis",
        "Dengue",
        "Malaria",
        "Typhoid"
      ],
      "correct_answer": "Malaria"
    },
    {
      "id": 139,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which biomolecule is the primary source of energy for living organisms?",
      "image_url": "",
      "options": [
        "Proteins",
        "Lipids",
        "Carbohydrates",
        "Nucleic acids"
      ],
      "correct_answer": "Carbohydrates"
    },
    {
      "id": 140,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of a sexually transmitted disease?",
      "image_url": "",
      "options": [
        "Cholera",
        "HIV/AIDS",
        "Tuberculosis",
        "Pneumonia"
      ],
      "correct_answer": "HIV/AIDS"
    },
    {
      "id": 141,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the human brain is associated with memory and learning?",
      "image_url": "",
      "options": [
        "Cerebellum",
        "Medulla oblongata",
        "Hippocampus",
        "Hypothalamus"
      ],
      "correct_answer": "Hippocampus"
    },
    {
      "id": 142,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which vitamin is essential for good vision and a healthy immune system?",
      "image_url": "",
      "options": [
        "Vitamin A",
        "Vitamin C",
        "Vitamin K",
        "Vitamin D"
      ],
      "correct_answer": "Vitamin A"
    },
    {
      "id": 143,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of an amphibian?",
      "image_url": "",
      "options": [
        "Crocodile",
        "Lizard",
        "Frog",
        "Snake"
      ],
      "correct_answer": "Frog"
    },
    {
      "id": 144,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of cell division is responsible for growth and repair in multicellular organisms?",
      "image_url": "",
      "options": [
        "Meiosis",
        "Binary fission",
        "Mitosis",
        "Budding"
      ],
      "correct_answer": "Mitosis"
    },
    {
      "id": 145,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which plant tissue is responsible for the transport of water?",
      "image_url": "",
      "options": [
        "Phloem",
        "Xylem",
        "Parenchyma",
        "Collenchyma"
      ],
      "correct_answer": "Xylem"
    },
    {
      "id": 146,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which disease is caused by the deficiency of iodine?",
      "image_url": "",
      "options": [
        "Goiter",
        "Scurvy",
        "Anemia",
        "Rickets"
      ],
      "correct_answer": "Goiter"
    },
    {
      "id": 147,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which organism is used in the production of alcohol and bread?",
      "image_url": "",
      "options": [
        "Bacteria",
        "Yeast",
        "Algae",
        "Virus"
      ],
      "correct_answer": "Yeast"
    },
    {
      "id": 148,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which structure in a cell is responsible for packaging and transporting proteins?",
      "image_url": "",
      "options": [
        "Ribosome",
        "Golgi apparatus",
        "Mitochondria",
        "Lysosome"
      ],
      "correct_answer": "Golgi apparatus"
    },
    {
      "id": 149,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which is the largest organ in the human body?",
      "image_url": "",
      "options": [
        "Heart",
        "Liver",
        "Skin",
        "Lungs"
      ],
      "correct_answer": "Skin"
    },
    {
      "id": 150,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of a prokaryotic organism?",
      "image_url": "",
      "options": [
        "Fungi",
        "Bacteria",
        "Amoeba",
        "Paramecium"
      ],
      "correct_answer": "Bacteria"
    },
    {
      "id": 151,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of pollination occurs when pollen is transferred from one flower to another?",
      "image_url": "",
      "options": [
        "Self-pollination",
        "Cross-pollination",
        "Vegetative reproduction",
        "Asexual reproduction"
      ],
      "correct_answer": "Cross-pollination"
    },
    {
      "id": 152,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which blood group is known as the universal donor?",
      "image_url": "",
      "options": [
        "A",
        "B",
        "AB",
        "O"
      ],
      "correct_answer": "O"
    },
    {
      "id": 153,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of an exoskeletal organism?",
      "image_url": "",
      "options": [
        "Frog",
        "Earthworm",
        "Spider",
        "Human"
      ],
      "correct_answer": "Spider"
    },
    {
      "id": 154,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of a plant is responsible for the absorption of water and minerals?",
      "image_url": "",
      "options": [
        "Leaves",
        "Stem",
        "Roots",
        "Flowers"
      ],
      "correct_answer": "Roots"
    },
    {
      "id": 155,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which animal is a marsupial?",
      "image_url": "",
      "options": [
        "Dog",
        "Kangaroo",
        "Elephant",
        "Horse"
      ],
      "correct_answer": "Kangaroo"
    },
    {
      "id": 156,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the neuron receives signals from other neurons?",
      "image_url": "",
      "options": [
        "Axon",
        "Dendrites",
        "Myelin sheath",
        "Synapse"
      ],
      "correct_answer": "Dendrites"
    },
    {
      "id": 157,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following organisms undergoes metamorphosis?",
      "image_url": "",
      "options": [
        "Frog",
        "Snake",
        "Dog",
        "Bird"
      ],
      "correct_answer": "Frog"
    },
    {
      "id": 158,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which hormone is known as the 'stress hormone'?",
      "image_url": "",
      "options": [
        "Adrenaline",
        "Insulin",
        "Thyroxine",
        "Estrogen"
      ],
      "correct_answer": "Adrenaline"
    },
    {
      "id": 159,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which vitamin is essential for the absorption of calcium in the body?",
      "image_url": "",
      "options": [
        "Vitamin A",
        "Vitamin C",
        "Vitamin D",
        "Vitamin K"
      ],
      "correct_answer": "Vitamin D"
    },
    {
      "id": 160,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which is the smallest unit of life?",
      "image_url": "",
      "options": [
        "Tissue",
        "Organ",
        "Cell",
        "Organism"
      ],
      "correct_answer": "Cell"
    },
    {
      "id": 161,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is the main excretory product in humans?",
      "image_url": "",
      "options": [
        "Ammonia",
        "Urea",
        "Uric acid",
        "Carbon dioxide"
      ],
      "correct_answer": "Urea"
    },
    {
      "id": 162,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of immunity is acquired after vaccination?",
      "image_url": "",
      "options": [
        "Natural immunity",
        "Passive immunity",
        "Active immunity",
        "Innate immunity"
      ],
      "correct_answer": "Active immunity"
    },
    {
      "id": 163,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which organelle is known as the 'suicidal bag' of the cell?",
      "image_url": "",
      "options": [
        "Mitochondria",
        "Ribosome",
        "Lysosome",
        "Golgi apparatus"
      ],
      "correct_answer": "Lysosome"
    },
    {
      "id": 164,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of blood vessels carry blood away from the heart?",
      "image_url": "",
      "options": [
        "Veins",
        "Arteries",
        "Capillaries",
        "Venules"
      ],
      "correct_answer": "Arteries"
    },
    {
      "id": 165,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which hormone regulates the sleep-wake cycle?",
      "image_url": "",
      "options": [
        "Melatonin",
        "Cortisol",
        "Insulin",
        "Thyroxine"
      ],
      "correct_answer": "Melatonin"
    },
    {
      "id": 166,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the body produces red blood cells?",
      "image_url": "",
      "options": [
        "Liver",
        "Kidney",
        "Bone marrow",
        "Heart"
      ],
      "correct_answer": "Bone marrow"
    },
    {
      "id": 167,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of a parasitic plant?",
      "image_url": "",
      "options": [
        "Mango",
        "Cactus",
        "Mistletoe",
        "Rose"
      ],
      "correct_answer": "Mistletoe"
    },
    {
      "id": 168,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which pigment is responsible for red color in blood?",
      "image_url": "",
      "options": [
        "Hemoglobin",
        "Chlorophyll",
        "Melanin",
        "Keratin"
      ],
      "correct_answer": "Hemoglobin"
    },
    {
      "id": 169,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which is the primary organ of the human respiratory system?",
      "image_url": "",
      "options": [
        "Heart",
        "Kidney",
        "Lungs",
        "Liver"
      ],
      "correct_answer": "Lungs"
    },
    {
      "id": 170,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following microorganisms is used in the production of antibiotics?",
      "image_url": "",
      "options": [
        "Bacteria",
        "Viruses",
        "Fungi",
        "Algae"
      ],
      "correct_answer": "Fungi"
    },
    {
      "id": 171,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which structure in plants is responsible for transpiration?",
      "image_url": "",
      "options": [
        "Roots",
        "Stems",
        "Leaves",
        "Flowers"
      ],
      "correct_answer": "Leaves"
    },
    {
      "id": 172,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which gas is used by plants during photosynthesis?",
      "image_url": "",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Methane"
      ],
      "correct_answer": "Carbon dioxide"
    },
    {
      "id": 173,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the nervous system controls reflex actions?",
      "image_url": "",
      "options": [
        "Brain",
        "Spinal cord",
        "Cerebrum",
        "Hypothalamus"
      ],
      "correct_answer": "Spinal cord"
    },
    {
      "id": 174,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is a freshwater fish?",
      "image_url": "",
      "options": [
        "Shark",
        "Whale",
        "Goldfish",
        "Dolphin"
      ],
      "correct_answer": "Goldfish"
    },
    {
      "id": 175,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which process in plants results in the loss of water vapor?",
      "image_url": "",
      "options": [
        "Photosynthesis",
        "Transpiration",
        "Respiration",
        "Germination"
      ],
      "correct_answer": "Transpiration"
    },
    {
      "id": 176,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which component of blood is responsible for oxygen transport?",
      "image_url": "",
      "options": [
        "White blood cells",
        "Plasma",
        "Red blood cells",
        "Platelets"
      ],
      "correct_answer": "Red blood cells"
    },
    {
      "id": 177,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the plant anchors it to the soil?",
      "image_url": "",
      "options": [
        "Leaves",
        "Stem",
        "Roots",
        "Flowers"
      ],
      "correct_answer": "Roots"
    },
    {
      "id": 178,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of an oviparous animal?",
      "image_url": "",
      "options": [
        "Dog",
        "Cat",
        "Hen",
        "Whale"
      ],
      "correct_answer": "Hen"
    },
    {
      "id": 179,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of a neuron transmits impulses away from the cell body?",
      "image_url": "",
      "options": [
        "Dendrites",
        "Axon",
        "Synapse",
        "Nucleus"
      ],
      "correct_answer": "Axon"
    },
    {
      "id": 180,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is a sexually transmitted disease?",
      "image_url": "",
      "options": [
        "Malaria",
        "Typhoid",
        "Syphilis",
        "Dengue"
      ],
      "correct_answer": "Syphilis"
    },
    {
      "id": 181,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which hormone is responsible for regulating metabolism?",
      "image_url": "",
      "options": [
        "Insulin",
        "Adrenaline",
        "Thyroxine",
        "Glucagon"
      ],
      "correct_answer": "Thyroxine"
    },
    {
      "id": 182,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which organ in the human body is responsible for detoxification?",
      "image_url": "",
      "options": [
        "Liver",
        "Kidney",
        "Lungs",
        "Heart"
      ],
      "correct_answer": "Liver"
    },
    {
      "id": 183,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the flower produces pollen?",
      "image_url": "",
      "options": [
        "Ovary",
        "Anther",
        "Sepal",
        "Petal"
      ],
      "correct_answer": "Anther"
    },
    {
      "id": 184,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which process involves the fusion of male and female gametes?",
      "image_url": "",
      "options": [
        "Mitosis",
        "Fertilization",
        "Budding",
        "Fragmentation"
      ],
      "correct_answer": "Fertilization"
    },
    {
      "id": 185,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which microorganism is responsible for causing tuberculosis?",
      "image_url": "",
      "options": [
        "Virus",
        "Fungus",
        "Bacterium",
        "Protozoan"
      ],
      "correct_answer": "Bacterium"
    },
    {
      "id": 186,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of an arthropod?",
      "image_url": "",
      "options": [
        "Earthworm",
        "Octopus",
        "Spider",
        "Starfish"
      ],
      "correct_answer": "Spider"
    },
    {
      "id": 187,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following helps maintain the shape of a plant cell?",
      "image_url": "",
      "options": [
        "Cell membrane",
        "Nucleus",
        "Cell wall",
        "Cytoplasm"
      ],
      "correct_answer": "Cell wall"
    },
    {
      "id": 188,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which process converts glucose into energy in the presence of oxygen?",
      "image_url": "",
      "options": [
        "Photosynthesis",
        "Fermentation",
        "Respiration",
        "Transpiration"
      ],
      "correct_answer": "Respiration"
    },
    {
      "id": 189,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which type of muscle is found in the heart?",
      "image_url": "",
      "options": [
        "Skeletal muscle",
        "Smooth muscle",
        "Cardiac muscle",
        "Voluntary muscle"
      ],
      "correct_answer": "Cardiac muscle"
    },
    {
      "id": 190,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which vitamin is known as ascorbic acid?",
      "image_url": "",
      "options": [
        "Vitamin A",
        "Vitamin B12",
        "Vitamin C",
        "Vitamin D"
      ],
      "correct_answer": "Vitamin C"
    },
    {
      "id": 191,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which organ is responsible for filtering waste from the blood?",
      "image_url": "",
      "options": [
        "Liver",
        "Kidney",
        "Heart",
        "Lungs"
      ],
      "correct_answer": "Kidney"
    },
    {
      "id": 192,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which term is used for organisms that produce their own food?",
      "image_url": "",
      "options": [
        "Heterotrophs",
        "Autotrophs",
        "Decomposers",
        "Parasites"
      ],
      "correct_answer": "Autotrophs"
    },
    {
      "id": 193,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which blood component carries oxygen?",
      "image_url": "",
      "options": [
        "Plasma",
        "White blood cells",
        "Platelets",
        "Hemoglobin"
      ],
      "correct_answer": "Hemoglobin"
    },
    {
      "id": 194,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which of the following is an example of a mollusk?",
      "image_url": "",
      "options": [
        "Frog",
        "Snail",
        "Lizard",
        "Butterfly"
      ],
      "correct_answer": "Snail"
    },
    {
      "id": 195,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which disease is caused by Plasmodium parasites?",
      "image_url": "",
      "options": [
        "Tuberculosis",
        "Malaria",
        "Typhoid",
        "Cholera"
      ],
      "correct_answer": "Malaria"
    },
    {
      "id": 196,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the brain controls voluntary actions?",
      "image_url": "",
      "options": [
        "Cerebellum",
        "Cerebrum",
        "Medulla oblongata",
        "Hypothalamus"
      ],
      "correct_answer": "Cerebrum"
    },
    {
      "id": 197,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which hormone is responsible for regulating blood calcium levels?",
      "image_url": "",
      "options": [
        "Insulin",
        "Parathyroid hormone",
        "Adrenaline",
        "Thyroxine"
      ],
      "correct_answer": "Parathyroid hormone"
    },
    {
      "id": 198,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which reproductive method is used by bacteria?",
      "image_url": "",
      "options": [
        "Binary fission",
        "Budding",
        "Fragmentation",
        "Sexual reproduction"
      ],
      "correct_answer": "Binary fission"
    },
    {
      "id": 199,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the human body produces bile?",
      "image_url": "",
      "options": [
        "Stomach",
        "Liver",
        "Pancreas",
        "Gallbladder"
      ],
      "correct_answer": "Liver"
    },
    {
      "id": 200,
      "test_id": "Mock Test 1",
      "subject": "Biology",
      "question": "Which part of the eye controls the amount of light entering the pupil?",
      "image_url": "",
      "options": [
        "Cornea",
        "Iris",
        "Retina",
        "Lens"
      ],
      "correct_answer": "Iris"
    }
  ];

db.serialize(() => {
  questions.forEach(question => {
      // Get the test_id from the tests table
      db.get("SELECT id FROM tests WHERE name = ?", [question.test_id], (err, row) => {
          if (err) {
              console.error("Error fetching test_id:", err);
              return;
          }

          if (!row) {
              console.error(`Test ID not found for test name: ${question.test_id}`);
              return;
          }

          const testId = row.id;

          // Insert question into the questions table
          db.run(
              `INSERT INTO questions (test_id, subject, question, image_url, options, correct_answer) 
               VALUES (?, ?, ?, ?, ?, ?)`,
              [
                  testId,
                  question.subject,
                  question.question,
                  question.image_url,
                  JSON.stringify(question.options), // Convert array to JSON string before inserting
                  question.correct_answer
              ],
              function (err) {
                  if (err) {
                      console.error("Error inserting question:", err);
                  } else {
                      console.log(`Inserted question ID: ${this.lastID}`);
                  }
              }
          );
      });
  });
});

db.close();