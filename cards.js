// ============================================================
//  THE EXAMS — this is the only file you edit to add questions.
//
//  Each exam:
//    name  : shown on the menu tile
//    cards : the questions (the tile counts them for you)
//
//  Each card:
//    question    : the prompt (string)
//    choices     : array of 5 options, in order A, B, C, D, E
//    answer      : the correct letter — "A" through "E"
//    explanation : shown ONLY in the final review section
//
//  To add another exam, copy the whole { name: ..., cards: [...] }
//  block and paste it after a comma. The menu fills left to right.
// ============================================================

const EXAMS = [
  {
    "name": "Conceptual E&M",
    "cards": [
      {
        "question": "A parallel-plate capacitor has plates of area 0.020 m² separated by 1.0 mm of vacuum. Its capacitance is most nearly (ε₀ = 8.85×10⁻¹² F/m)",
        "choices": ["18 pF", "90 pF", "177 pF", "0.44 μF", "1.8 μF"],
        "answer": "C",
        "explanation": "C = ε₀A/d = (8.85×10⁻¹²)(0.020)/(1.0×10⁻³) = 1.77×10⁻¹⁰ F ≈ 177 pF."
      },
      {
        "question": "Inside an empty cavity within a solid conductor in electrostatic equilibrium (no charge in the cavity), the electric field is",
        "choices": [
          "equal to σ/ε₀",
          "zero everywhere in the cavity",
          "uniform and nonzero",
          "directed toward the cavity walls",
          "equal to the field just outside the conductor"
        ],
        "answer": "B",
        "explanation": "A conductor with no charge in its cavity shields the interior completely: E = 0 throughout the cavity (the basis of the Faraday cage)."
      },
      {
        "question": "Two point charges, +2 μC and +3 μC, are 0.10 m apart in vacuum. The magnitude of the force between them is most nearly (k = 9×10⁹ N·m²/C²)",
        "choices": ["0.54 N", "5.4 N", "54 N", "0.6 N", "60 N"],
        "answer": "B",
        "explanation": "F = kq₁q₂/r² = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/(0.10)² = (9×10⁹)(6×10⁻¹²)/0.01 = 5.4 N."
      },
      {
        "question": "Excess charge placed on an isolated solid conductor in equilibrium resides",
        "choices": [
          "uniformly throughout its volume",
          "entirely on its outer surface",
          "only at its center",
          "on whichever surface faces the ground",
          "in a thin layer just below the surface"
        ],
        "answer": "B",
        "explanation": "In equilibrium the interior field is zero, so by Gauss's law no net charge can sit inside; all excess charge moves to the outer surface."
      },
      {
        "question": "A long straight wire carries a current of 10 A. The magnitude of the magnetic field 5.0 cm from the wire is most nearly (μ₀ = 4π×10⁻⁷ T·m/A)",
        "choices": ["4 μT", "40 μT", "400 μT", "2 mT", "0.4 T"],
        "answer": "B",
        "explanation": "B = μ₀I/(2πr) = (2×10⁻⁷)(10)/(0.05) = 4×10⁻⁵ T = 40 μT."
      },
      {
        "question": "Just outside the surface of a charged conductor with local surface charge density σ, the electric field is",
        "choices": [
          "σ/2ε₀, parallel to the surface",
          "σ/ε₀, perpendicular to the surface",
          "zero",
          "σ/2ε₀, perpendicular to the surface",
          "σ/ε₀, parallel to the surface"
        ],
        "answer": "B",
        "explanation": "The field just outside a conductor is σ/ε₀ and normal to the surface (a tangential component would drive surface currents)."
      },
      {
        "question": "A long solenoid has 1000 turns per meter and carries a current of 2.0 A. The magnetic field near its center is most nearly",
        "choices": ["1.3 mT", "2.5 mT", "6.3 mT", "25 mT", "0.25 T"],
        "answer": "B",
        "explanation": "Inside a long solenoid B = μ₀nI = (4π×10⁻⁷)(1000)(2.0) ≈ 2.5×10⁻³ T = 2.5 mT."
      },
      {
        "question": "A parallel-plate capacitor is charged and then disconnected from the battery (charge held fixed). A dielectric slab is now inserted between the plates. The capacitance and the stored energy, respectively,",
        "choices": [
          "both increase",
          "both decrease",
          "increase and decrease",
          "decrease and increase",
          "stay the same and decrease"
        ],
        "answer": "C",
        "explanation": "C = κC₀ increases. At fixed Q, U = Q²/2C, so the stored energy decreases (the slab is pulled in, doing work)."
      }
    ]
  }
];
