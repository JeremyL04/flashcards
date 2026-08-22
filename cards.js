// ============================================================
//  THE EXAMS — this is the only file you edit to add questions.
//
//  Each exam:
//    name  : shown on the menu tile
//    added    : ISO date the set went on the site, shown on its tile.
//    category : which section of the home page the exam appears under —
//               "practice" for the mixed practice tests, "topic" for the
//               subject-specific sets.
//    cards : the questions (the tile counts them for you)
//
//  Each card:
//    question    : the prompt (string)
//    choices     : array of 5 options, in order A, B, C, D, E
//    answer      : the correct letter — "A" through "E"
//    explanation : shown ONLY in the final review section
//    coverage    : OPTIONAL. How heavily the released exams cover the topic.
//                  Shown under the explanation in review; parts separated by
//                  "|" render as separate lines. Cards without it show nothing.
//
//  To add another exam, copy the whole { name: ..., cards: [...] }
//  block and paste it after a comma. The menu fills left to right.
// ============================================================
//
//  SET NOTES (Classical Mechanics, set 1)
//  --------------------------------------
//  20 original questions, medium-to-hard, calibrated a little above the
//  ETS norm: target P+ mostly 25-50%, i.e. the "hard" and lower-"medium"
//  bands of a real form.
//
//  Every question is stated entirely in words — no figures — because this
//  card format renders a single string.
//
//  Each card carries a // VARIES: comment naming the real exam question(s)
//  it shares a concept with and how it departs from them, so the six public
//  forms stay clean as study material. No stem here restates a released
//  question; where the underlying physics overlaps, the setup, the unknown,
//  or the required method differs.
// ============================================================

const EXAMS = [
  {
    "name": "Classical Mechanics - Medium / Hard",
    "added": "2026-08-09",
    "category": "topic",
    "cards": [

      // VARIES: GR9277 Q66 winds a hanging chain UP onto an axle (work via
      // centre-of-mass rise). Here the chain slides OFF and we want a speed,
      // so the centre-of-mass bookkeeping runs the other way and ends in KE.
      {
        "question": "A uniform chain of mass M and total length L lies on a frictionless horizontal table, with a length L/3 hanging over the edge. The chain is released from rest. The speed of the chain at the instant the last link leaves the table is",
        "choices": [
          "(1/3)√(2gL)",
          "√(2gL/3)",
          "(2/3)√(2gL)",
          "√(2gL)",
          "(2/3)√(gL)"
        ],
        "answer": "C",
        "explanation": "Track the centre of mass of the whole chain. Linear density is λ = M/L. Initially the hanging piece has mass M/3 and its centre of mass sits L/6 below the table edge, so U₁ = −(M/3)g(L/6) = −MgL/18. At the end the entire chain hangs with its centre of mass L/2 below the edge, so U₂ = −MgL/2. The drop in potential energy is MgL/2 − MgL/18 = 8MgL/18 = 4MgL/9. Setting ½Mv² = 4MgL/9 gives v² = 8gL/9, so v = (2/3)√(2gL) ≈ 0.94√(gL). Choice D is what you get by forgetting that part of the chain was already hanging (i.e. using the full MgL/2 drop); choice E comes from dropping the factor of 2."
      },

      // VARIES: no released question lets the incline itself move. GR0877 Q57
      // and GR0177 Q73 are fixed-surface contact-force problems.
      {
        "question": "A block of mass m is released from rest on the frictionless inclined face of a wedge of mass M whose base angle is θ. The wedge rests on a frictionless horizontal floor and is free to recoil. The magnitude of the wedge's horizontal acceleration is",
        "choices": [
          "mg sinθ cosθ / (M + m sin²θ)",
          "mg sinθ cosθ / (M + m cos²θ)",
          "mg sinθ / (M + m)",
          "mg tanθ / (M + m sin²θ)",
          "mg sinθ cosθ / (M + m)"
        ],
        "answer": "A",
        "explanation": "Because the floor is frictionless, horizontal momentum of the wedge-plus-block system is conserved, and the only unbalanced horizontal force on the wedge is the normal force from the block. Writing the Lagrangian with coordinates X (wedge position) and s (block's displacement along the incline) and eliminating s̈ gives Ẍ = mg sinθ cosθ /(M + m sin²θ). Sanity checks: as M → ∞ the wedge stops moving, and at θ = 0 or θ = 90° the horizontal push vanishes — only choice A does both. Choice E is the common error of using the total mass in the denominator, which ignores that the block accelerates relative to the wedge."
      },

      // VARIES: GR1777 Q48, GR0877 Q81, GR0177 Q91 all assume rolling without
      // slipping and ask about energy or inertia. None asks what friction is
      // required to make that assumption legitimate.
      {
        "question": "A uniform solid sphere (I = ⅖MR² about its centre) rolls without slipping down a plane inclined at angle θ. The minimum coefficient of static friction between sphere and plane consistent with rolling is",
        "choices": [
          "(2/5) tanθ",
          "(1/3) tanθ",
          "(5/7) tanθ",
          "(2/7) tanθ",
          "(2/7) sinθ"
        ],
        "answer": "D",
        "explanation": "For a rolling body with I = βMR², the linear acceleration is a = g sinθ/(1 + β), so here a = (5/7)g sinθ. The friction force is what supplies the angular acceleration: f = Iα/R = βMa = (⅖)M(5/7)g sinθ = (2/7)Mg sinθ. The normal force is N = Mg cosθ. Requiring f ≤ μ_s N gives μ_s ≥ (2/7)tanθ. Choice B is the answer for a solid disk or cylinder (β = ½ gives ⅓ tanθ) and choice A is the raw value of β — both are traps for pattern-matching on the moment of inertia instead of working through the force balance."
      },

      // VARIES: GR1777 Q79 is the massless-pulley Atwood tension. Giving the
      // pulley rotational inertia is the natural next step and appears nowhere
      // in the six forms.
      {
        "question": "Masses of 3.0 kg and 1.0 kg hang from the ends of a light inextensible cord that passes over a pulley in the form of a uniform solid disk of mass 2.0 kg. The cord does not slip and the pulley turns on a frictionless axle. The magnitude of the acceleration of the masses is most nearly",
        "choices": [
          "2.0 m/s²",
          "3.9 m/s²",
          "4.9 m/s²",
          "6.5 m/s²",
          "9.8 m/s²"
        ],
        "answer": "B",
        "explanation": "With a pulley of moment of inertia I and radius R, the cord tensions differ and the pulley contributes an effective inertia I/R². For a uniform disk I = ½M_p R², so I/R² = M_p/2 = 1.0 kg. Then a = (m₁ − m₂)g/(m₁ + m₂ + I/R²) = (2.0)(9.8)/(3.0 + 1.0 + 1.0) = 19.6/5.0 = 3.9 m/s². Choice C, 4.9 m/s², is exactly the massless-pulley result 19.6/4.0 — the distractor for anyone who ignores the pulley's inertia. Note that only half the pulley's mass enters, because the disk's inertia is ½M_pR², not M_pR²."
      },

      // VARIES: GR9277 Q87 computes the energy of a circular orbit under
      // K/r³; GR9677 Q23 asks what stays true for a near-inverse-square law.
      // Neither asks about stability of the circular orbit itself.
      {
        "question": "A particle moves in a circular orbit under the attractive central force F(r) = −k/r^p, with k > 0 and p > 0. The circular orbit is stable against small radial perturbations if and only if",
        "choices": [
          "p > 3",
          "p < 3",
          "p = 2 only",
          "p < 2",
          "the orbit is stable for every p > 0"
        ],
        "answer": "B",
        "explanation": "Work with the effective potential U_eff(r) = L²/(2mr²) + U(r), where U(r) = −k/[(p−1)r^(p−1)] for p ≠ 1. A circular orbit sits at a stationary point of U_eff; it is stable when that point is a minimum, i.e. U_eff″(r₀) > 0. Evaluating the second derivative at the circular radius gives the condition p < 3. Physically, the centrifugal barrier falls off as 1/r², so it can only confine the particle if the attraction falls off more slowly than 1/r³. Inverse-square gravity (p = 2) is comfortably stable; p = 3 is the marginal case, where the particle spirals in or out under any perturbation. Choice C is a trap — stability is not unique to gravity; a linear restoring force (p = −1) is stable too."
      },

      // VARIES: GR0177 Q3, GR1777 Q17, GR0877 Q53 all apply Kepler III to
      // CIRCULAR orbits. This one requires forming the semi-major axis from
      // perihelion and aphelion first.
      {
        "question": "A comet orbits the Sun with a perihelion distance of 0.5 AU and an aphelion distance of 17.5 AU. Its orbital period is most nearly",
        "choices": [
          "9 years",
          "17.5 years",
          "27 years",
          "54 years",
          "81 years"
        ],
        "answer": "C",
        "explanation": "Kepler's third law uses the semi-major axis, not the perihelion or aphelion separately. For an ellipse, 2a = r_peri + r_aph = 0.5 + 17.5 = 18 AU, so a = 9 AU. In solar-system units T(years) = a(AU)^(3/2) = 9^(3/2) = 27 years. Choice A is the semi-major axis itself, mistaken for a period; choice B is the aphelion distance. The step worth internalising is that an eccentric orbit has the same period as a circular orbit of radius a — eccentricity does not enter Kepler III at all."
      },

      // VARIES: GR8677 Q44 has a FREE rod struck elastically by a particle
      // that ends at rest (answer follows from linear momentum alone). Here the
      // rod is PIVOTED and the collision is perfectly inelastic, so linear
      // momentum is not conserved and angular momentum about the pivot is.
      {
        "question": "A uniform rod of mass M and length L hangs vertically at rest from a frictionless pivot at its upper end. A lump of putty of mass m, moving horizontally with speed v, strikes the lower end of the rod and sticks to it. The angular speed of the rod-plus-putty immediately after the collision is",
        "choices": [
          "mv / [L(M + m)]",
          "3mv / [L(M + m)]",
          "mv / [L(M + 3m)]",
          "3mv / [L(M + 3m)]",
          "2mv / [L(M + 2m)]"
        ],
        "answer": "D",
        "explanation": "The pivot exerts an unknown impulsive force, so linear momentum is NOT conserved — but that force acts at the pivot and exerts no torque about it, so angular momentum about the pivot is. Before: L_i = mvL. After: the rod contributes ML²/3 and the putty, now at distance L, contributes mL², giving I = ML²/3 + mL². Therefore ω = mvL/(ML²/3 + mL²) = 3mv/[L(M + 3m)]. Choice B drops the putty's own contribution to the moment of inertia; choice A treats the rod as a point mass at its end. Recognising that the pivot kills linear-momentum conservation but preserves angular momentum is the whole question."
      },

      // VARIES: GR0177 Q25 (seven pennies) also uses the parallel-axis theorem,
      // but by ADDING bodies. The subtractive "negative mass" trick, and having
      // to back out the parent disk's mass from the stated remaining mass,
      // appears nowhere in the six forms.
      {
        "question": "A circular hole of radius R/2 is drilled through a uniform disk of radius R, the hole's centre lying a distance R/2 from the disk's centre. The remaining object has mass M. Its moment of inertia about the original central axis, perpendicular to the disk, is",
        "choices": [
          "(1/2)MR²",
          "(3/8)MR²",
          "(13/24)MR²",
          "(2/3)MR²",
          "(5/12)MR²"
        ],
        "answer": "C",
        "explanation": "Treat the object as a full disk minus a smaller disk of negative mass. The hole removes a quarter of the area, so the remaining ¾ of the area carries mass M; hence the full disk would have mass (4/3)M and the removed plug (1/3)M. Full disk about the centre: ½(4/3)MR² = (2/3)MR². The plug, radius R/2 and mass M/3, has ½(M/3)(R/2)² = MR²/24 about its own axis, plus (M/3)(R/2)² = MR²/12 from the parallel-axis shift, totalling MR²/8. Subtracting: (2/3 − 1/8)MR² = (16/24 − 3/24)MR² = (13/24)MR². The step most often missed is converting the stated remaining mass M into the parent disk's (4/3)M; skipping it gives choice B."
      },

      // VARIES: GR9277 Q61 and Q74 and GR9677 Q21 are physical pendulums with
      // fixed geometry. None requires optimising the pivot location.
      {
        "question": "A uniform rod of length L is pivoted about a horizontal axis perpendicular to the rod at a distance d from its centre, and oscillates with small amplitude in a vertical plane. The period of oscillation is a minimum when d equals",
        "choices": [
          "L/(2√3)",
          "L/(2√2)",
          "L/4",
          "L/2",
          "L/√3"
        ],
        "answer": "A",
        "explanation": "For a physical pendulum T = 2π√(I/mgd), and the parallel-axis theorem gives I = mL²/12 + md². So T ∝ √[(L²/12 + d²)/d]. Minimise the bracket: d/dd (L²/12d + d) = −L²/(12d²) + 1 = 0, giving d² = L²/12 and d = L/(2√3) ≈ 0.289L. Note the two limits that make a minimum inevitable: as d → 0 the restoring torque vanishes and T → ∞, while as d → L/2 the growing moment of inertia pushes T back up. The quantity L²/12 is the squared radius of gyration k², and the general result — that the period is minimised when d = k — is worth remembering."
      },

      // VARIES: the six forms have six fluids questions (U-tube, balloon, jet
      // momentum, floating block, Bernoulli constriction, flipped block) and
      // nine SHM questions, but none combines buoyancy with oscillation.
      {
        "question": "A solid cylinder floats upright in a liquid with a length d of the cylinder submerged. It is pushed down slightly and released. Neglecting viscosity and the motion of the liquid, the period of the resulting small vertical oscillations is",
        "choices": [
          "2π√(2d/g)",
          "2π√(d/2g)",
          "2π√(L/g), where L is the cylinder's full length",
          "2π√(ρd/g), where ρ is the liquid density",
          "2π√(d/g)"
        ],
        "answer": "E",
        "explanation": "Let A be the cross-sectional area and ρ the liquid density. Displacing the cylinder a further distance x downward submerges an extra volume Ax, giving a net upward restoring force F = −ρgAx: Hooke's law with k_eff = ρgA. The cylinder's mass follows from flotation equilibrium, m = ρAd. Hence ω² = k_eff/m = ρgA/(ρAd) = g/d, and T = 2π√(d/g). Both A and ρ cancel, so the cylinder oscillates exactly like a simple pendulum whose length equals its submerged depth. Choice C is tempting if you reach for the cylinder's full length instead of the submerged part — but only the submerged depth sets the restoring force."
      },

      // VARIES: GR9677 Q8 is the only damped-oscillator question on any form
      // and only asks whether the period lengthens. Nothing tests Q or the
      // decay rate quantitatively.
      {
        "question": "A lightly damped harmonic oscillator has its amplitude reduced to 1/e of its initial value after 20 complete cycles. Its quality factor Q is most nearly",
        "choices": [
          "10",
          "20",
          "63",
          "126",
          "400"
        ],
        "answer": "C",
        "explanation": "For light damping the amplitude decays as A(t) = A₀e^(−βt) with β = b/2m, and the quality factor is Q = ω₀/2β. The amplitude reaches 1/e when βt = 1. That happens at t = 20T, so β(20T) = 1 and β = 1/(20T). With ω₀ ≈ 2π/T for light damping, Q = ω₀/2β = (2π/T)·(20T/2) = 20π ≈ 63. The useful shortcut: if the amplitude decays to 1/e in n cycles, then Q = nπ. Choice B is the raw cycle count, and choice D is 2nπ, which comes from using Q = ω₀/β instead of ω₀/2β."
      },

      // VARIES: no released question covers driven oscillation or resonance at
      // all. The gap is worth exploiting, and the ω_r vs ω_d distinction is
      // exactly the kind of near-miss ETS builds distractors around.
      {
        "question": "A damped oscillator obeying mẍ + bẋ + kx = F₀cos(ωt) is driven at variable frequency ω. Writing ω₀ = √(k/m) and β = b/2m, the steady-state amplitude is greatest when ω equals",
        "choices": [
          "√(ω₀² − 2β²)",
          "√(ω₀² − β²)",
          "ω₀",
          "√(ω₀² + 2β²)",
          "ω₀ − β"
        ],
        "answer": "A",
        "explanation": "The steady-state amplitude is A(ω) = (F₀/m)/√[(ω₀² − ω²)² + 4β²ω²]. Maximising A means minimising the radicand; setting its derivative with respect to ω² to zero gives −2(ω₀² − ω²) + 4β² = 0, so ω² = ω₀² − 2β² and ω_res = √(ω₀² − 2β²). Three nearby frequencies are easy to confuse: the undamped natural frequency ω₀, the damped free-oscillation frequency √(ω₀² − β²) (choice B), and this amplitude-resonance frequency, which is the lowest of the three. A further subtlety: the velocity amplitude, and hence the average power absorbed, peaks at exactly ω₀, not here."
      },

      // VARIES: GR8677 Q43, GR9277 Q7, GR9677 Q84 all ask for normal-mode
      // FREQUENCIES or mode shapes. None asks about the beat/energy-exchange
      // behaviour that the two modes together produce.
      {
        "question": "Two identical pendulums are weakly coupled by a spring. The two normal modes have angular frequencies 3.00 rad/s and 3.10 rad/s. One pendulum is held at rest while the other is set swinging, and both are then released. The time required for essentially all of the energy to transfer to the initially stationary pendulum is most nearly",
        "choices": [
          "16 s",
          "10 s",
          "63 s",
          "31 s",
          "3.1 s"
        ],
        "answer": "D",
        "explanation": "Starting one pendulum alone excites both normal modes with equal amplitude. Their superposition gives each pendulum an envelope that varies as cos[(ω₂ − ω₁)t/2] and sin[(ω₂ − ω₁)t/2]. Complete transfer occurs when the first envelope reaches zero, i.e. when (ω₂ − ω₁)t/2 = π/2, so t = π/(ω₂ − ω₁) = π/0.10 = 31 s. Choice C, 63 s, is the full beat period 2π/Δω — the time to return to the original pendulum, which is twice what was asked. The energy sloshes back and forth at the difference frequency, so weaker coupling means slower exchange."
      },

      // VARIES: GR0177 Q74 and GR9277 Q44 are straight Euler-Lagrange
      // exercises. This one hinges on gauge freedom — adding a total time
      // derivative to L leaves the dynamics untouched — which no form tests.
      {
        "question": "A one-dimensional system has the Lagrangian L = ½mẋ² − ½kx² + αxẋ, where α is a nonzero constant. The equation of motion for x(t) is",
        "choices": [
          "mẍ + kx = 0",
          "mẍ + kx = αẋ",
          "mẍ + 2αẋ + kx = 0",
          "mẍ + (k − α)x = 0",
          "mẍ + kx = αx"
        ],
        "answer": "A",
        "explanation": "Apply the Euler-Lagrange equation directly. ∂L/∂ẋ = mẋ + αx, so d/dt(∂L/∂ẋ) = mẍ + αẋ. Meanwhile ∂L/∂x = −kx + αẋ. Setting them equal: mẍ + αẋ = −kx + αẋ, and the αẋ terms cancel, leaving mẍ + kx = 0. The α term had to be irrelevant: αxẋ = d/dt(αx²/2) is a total time derivative, and adding one to a Lagrangian changes the action only by a constant fixed at the endpoints, leaving the equations of motion unchanged. Choice C is what you get by mistaking αxẋ for a genuine damping term — but a Lagrangian of this standard form cannot produce dissipation at all."
      },

      // VARIES: GR0877 Q32 is Bernoulli in a closed constriction; GR0177 Q57 is
      // jet momentum on a wall. Neither involves efflux from a tank or an
      // optimisation.
      {
        "question": "An open tank standing on level ground is filled with water to a depth H. A small hole is drilled in the vertical side wall at depth h below the water surface, and water jets out horizontally. Neglecting viscosity and the drop in water level, the maximum horizontal distance from the base of the tank at which the jet can land, as h is varied, is",
        "choices": [
          "H/2",
          "H/√2",
          "√2 H",
          "2H",
          "H"
        ],
        "answer": "E",
        "explanation": "Torricelli's law gives the efflux speed v = √(2gh). The hole sits a height H − h above the ground, so the fall time is t = √(2(H − h)/g). The horizontal range is x = vt = √(2gh)·√(2(H−h)/g) = 2√(h(H−h)). Maximising the product h(H − h) — a downward parabola in h — puts the hole at h = H/2, giving x_max = 2·(H/2) = H. So the farthest the jet can reach is exactly the depth of the tank, achieved from the midpoint of the water column. Note also that holes at depths h and H − h give the same range, a symmetry that follows straight from the product form."
      },

      // VARIES: GR0877 Q99 (turntable friction direction) is the only
      // non-inertial-frame question on any form. Nothing touches the Coriolis
      // force, which is a standard topic.
      {
        "question": "A small dense object is released from rest at height h above the ground at the Earth's equator. Neglecting air resistance, the object lands slightly to the east of the point directly below its release point. The magnitude of this eastward deflection is proportional to",
        "choices": [
          "h",
          "h^(3/2)",
          "h^(1/2)",
          "h²",
          "h^(1/3)"
        ],
        "answer": "B",
        "explanation": "In the rotating frame the Coriolis acceleration is −2Ω × v. For a body falling with speed v = gt at the equator this points east with magnitude 2Ωgt. Integrating twice from rest gives an eastward displacement d = (1/3)Ωgt³. The fall time is t = √(2h/g), so t³ ∝ h^(3/2) and therefore d ∝ h^(3/2), specifically d = (2√2/3)Ω h^(3/2)/√g. The effect is small: from h = 100 m it is under a millimetre. The eastward sense also follows from angular momentum — released from a larger radius, the object carries slightly more eastward speed than the ground beneath it."
      },

      // VARIES: statics on the six forms is a hanging box (GR8677 Q7), a cube
      // on wedges (GR9277 Q6) and a fulcrum balance (GR9277 Q100). The ladder,
      // the standard textbook statics problem, is absent.
      {
        "question": "A uniform ladder leans in equilibrium against a frictionless vertical wall, with its base on a floor for which the coefficient of static friction is 0.40. The smallest angle between the ladder and the floor for which the ladder does not slip is most nearly",
        "choices": [
          "22°",
          "39°",
          "51°",
          "45°",
          "68°"
        ],
        "answer": "C",
        "explanation": "Three forces act besides gravity: the wall's normal force N_w (horizontal, since the wall is frictionless), the floor's normal force N_f, and friction f at the base. Vertical equilibrium gives N_f = mg. Horizontal equilibrium gives f = N_w. Taking torques about the base, with the ladder of length L at angle θ to the floor, the weight acts at L/2: N_w L sinθ = mg(L/2)cosθ, so N_w = mg/(2tanθ). Imposing f ≤ μN_f gives mg/(2tanθ) ≤ μmg, i.e. tanθ ≥ 1/(2μ) = 1.25, so θ ≥ 51°. Note that the mass and the length both cancel. Choice B, 39°, is the complementary angle — the answer if you measure from the wall instead of the floor."
      },

      // VARIES: GR9277 Q45 is a single 80%-speed rebound giving 0.64h. Summing
      // the infinite series over all bounces is a genuinely different task, and
      // restitution as a named coefficient appears on no form.
      {
        "question": "A ball is dropped from rest at a height of 1.0 m onto a horizontal floor. On each bounce its speed immediately after impact is 0.80 times its speed immediately before. The total distance the ball travels before coming to rest is most nearly",
        "choices": [
          "1.8 m",
          "2.6 m",
          "3.4 m",
          "4.6 m",
          "9.0 m"
        ],
        "answer": "D",
        "explanation": "Since height goes as v², each bounce rises to e² = 0.64 of the previous height. The ball falls h, then rises and falls he², then rises and falls he⁴, and so on, so the total path is h + 2he² + 2he⁴ + ⋯ = h + 2he²/(1 − e²). Combining over a common denominator, d = h(1 + e²)/(1 − e²) = 1.0(1.64)/(0.36) = 4.6 m. Two things are worth noticing: the distance is finite even though the number of bounces is infinite, and so is the total time — the geometric series in √(e²) converges as well. Choice B, 2.6 m, comes from forgetting to double the intermediate rises and falls."
      },

      // VARIES: GR9277 Q5 asks only for the gravitational FORCE at radius R/2
      // inside a uniform Earth. Recognising that the same linear force law
      // makes the tunnel a harmonic oscillator is a further step no form takes.
      {
        "question": "A straight tunnel is bored through the centre of a hypothetical Earth of uniform density, radius 6.4 × 10⁶ m. An object is released from rest at one end. Neglecting friction and the Earth's rotation, the time for it to return to its starting point is most nearly",
        "choices": [
          "11 minutes",
          "21 minutes",
          "42 minutes",
          "63 minutes",
          "84 minutes"
        ],
        "answer": "E",
        "explanation": "Inside a uniform sphere only the enclosed mass contributes, and since that mass grows as r³ while the force falls as 1/r², the net force is F = −(GMm/R³)r — linear in r, so the motion is simple harmonic with ω² = GM/R³ = g/R. The full period is T = 2π√(R/g) = 2π√(6.4×10⁶/9.8) ≈ 2π(808) ≈ 5.1 × 10³ s ≈ 84 minutes. Choice C, 42 minutes, is the half-period — the one-way transit time to the far side, which is the more commonly quoted number and the trap here, since the question asks for the return to the start. Note this equals the period of a low Earth orbit, which is no coincidence: both are set by √(R/g)."
      },

      // VARIES: GR8677 Q61-62 interpret the rocket equation and integrate it.
      // Accretion rather than expulsion — with the counter-intuitive result
      // that a nonzero force is needed at constant speed — is a fresh angle.
      {
        "question": "An open railway car of mass M rolls without friction along a straight horizontal track at constant speed v. Rain falls vertically and collects in the car at a constant rate r = dm/dt. The horizontal force that must be applied to the car to keep its speed exactly constant is",
        "choices": [
          "0",
          "rv",
          "rv/2",
          "2rv",
          "rv²/2"
        ],
        "answer": "B",
        "explanation": "The rain arrives with zero horizontal momentum and must be accelerated to the car's speed v. In time dt a mass r·dt joins the car, so the horizontal momentum of the system increases by dp = v·r·dt even though the speed never changes. Newton's second law in the form F = dp/dt gives F = rv. The trap is choice A: constant velocity does suggest zero net force, but that reasoning applies to a system of fixed mass, and here the mass is growing. Note the contrast with the rocket equation, where the expelled mass leaves with a velocity relative to the vehicle; here the accreted mass simply arrives at rest horizontally. Note too that this force does work at rate rv², while the car's kinetic energy grows at only rv²/2 — the other half is dissipated in the inelastic capture of the raindrops."
      }

    ]
  },

// ============================================================
//
//  SET NOTES — Geometric Optics & Quantum Stat. Mech.
//  --------------------------------------------------
//  Cards 1-6 geometric optics, cards 7-12 quantum statistical mechanics.
//
//  Revised from the earlier blur-only version: two blur questions kept
//  (motion blur, pinhole), the penumbra / defocus / dominant-term cards
//  dropped as too convoluted, and four short general-optics questions added.
//  Stems are deliberately terse to match ETS pacing (~1.7 min/question).
//
//  Gaps on the released forms that cards 3-6 target:
//    apparent depth        — 0 questions across all six forms
//    plane-mirror rotation — 0 questions
//    lens in a medium      — 0 questions (lensmaker appears only via lens shape)
//    numeric mirror imaging— mirrors appear twice, both purely qualitative
//  Blur reference: GR8677 Q100 asks for the pinhole diameter giving the
//  sharpest image; card 2 asks for the blur that results, same competition.
//
//  Cards are interleaved here, not grouped by topic as in the source file.
// ============================================================
  {
    "name": "Geometric Optics & Quantum Stat. Mech.",
    "added": "2026-08-10",
    "category": "topic",
    "cards": [

      {
        "question": "An ideal Bose gas of particles of mass m and number density n condenses at temperature T_c. A second ideal Bose gas, of particles of mass 4m and number density 8n, condenses at",
        "choices": [
          "T_c/4",
          "T_c/2",
          "T_c",
          "2T_c",
          "4T_c"
        ],
        "answer": "C",
        "explanation": "Condensation begins when the thermal de Broglie wavelength approaches the interparticle spacing, giving kT_c ∝ ħ²n^(2/3)/m. The density change contributes 8^(2/3) = 4 and the mass change contributes 1/4, so the two cancel exactly and T_c is unchanged. The scaling is the point: heavier and more dilute means colder, which is why atomic BECs need nanokelvin temperatures."
      },

      {
        "question": "A camera of focal length 50 mm photographs a car 25 m away moving perpendicular to the line of sight at 20 m/s. For an exposure of 1/125 s, the blur on the sensor is most nearly",
        "choices": [
          "0.16 mm",
          "0.32 mm",
          "0.64 mm",
          "1.3 mm",
          "2.6 mm"
        ],
        "answer": "B",
        "explanation": "The image moves at the object's speed times the magnification. For a distant object the image sits essentially at the focal plane, so m ≈ f/o = 0.050/25 = 2.0 × 10⁻³. Then v_image = (20)(2.0 × 10⁻³) = 40 mm/s, and in 1/125 s = 8.0 ms the streak is 0.32 mm. Blur scales as f/o, which is why long lenses need short exposures."
      },

      {
        "question": "The conduction electrons in a metal form a degenerate free-electron gas. If the number density were increased by a factor of 8 with no other change, the Fermi energy would increase by a factor of",
        "choices": [
          "2",
          "4",
          "8",
          "16",
          "64"
        ],
        "answer": "B",
        "explanation": "Filling states up to the Fermi momentum gives N ∝ k_F³V, so k_F ∝ n^(1/3), and with E_F = ħ²k_F²/2m this makes E_F ∝ n^(2/3). Thus 8^(2/3) = 4. Choice C assumes linear scaling. The exponent depends on dimensionality and dispersion — in 2D E_F ∝ n, and for an ultrarelativistic gas (E = ħkc) it would go as n^(1/3)."
      },

      {
        "question": "An object is placed 15 cm in front of a concave mirror whose radius of curvature is 20 cm. The image is",
        "choices": [
          "real, inverted, and 30 cm in front of the mirror",
          "real, upright, and 30 cm in front of the mirror",
          "virtual, upright, and 30 cm behind the mirror",
          "real, inverted, and 6.0 cm in front of the mirror",
          "virtual, inverted, and 6.0 cm behind the mirror"
        ],
        "answer": "A",
        "explanation": "A concave mirror has f = R/2 = +10 cm. From 1/o + 1/i = 1/f: 1/i = 1/10 − 1/15 = 1/30, so i = +30 cm — positive, meaning real and in front. The magnification m = −i/o = −2 is negative, so the image is inverted and twice the object's size. The object sitting between f and 2f is exactly the projector configuration: real, inverted, magnified. Had the object been inside the focal length, i would have come out negative and the image would be virtual and upright."
      },

      {
        "question": "Two identical particles are distributed among three nondegenerate single-particle states, all distinct microstates being equally likely. The ratio of the probability that both occupy the same state for bosons, to that for distinguishable particles, is",
        "choices": [
          "1/2",
          "2/3",
          "1",
          "3/2",
          "3"
        ],
        "answer": "D",
        "explanation": "Distinguishable: each particle independently picks a state, 3² = 9 arrangements, 3 with both together, so P = 1/3. Bosons: a microstate is only an occupancy list, giving C(3+2−1, 2) = 6 arrangements, again 3 with both together, so P = 1/2. The ratio is 3/2. Bosons bunch more than classical particles — the microscopic root of stimulated emission and Bose-Einstein condensation. For fermions P = 0, and this bunching-versus-exclusion contrast is what makes P_fermion > P_classical > P_boson."
      },

      {
        "question": "A narrow beam of light strikes a plane mirror. The mirror is then rotated by 15° about an axis in its surface, perpendicular to the plane of incidence. The reflected beam rotates by",
        "choices": [
          "0°",
          "7.5°",
          "30°",
          "15°",
          "45°"
        ],
        "answer": "C",
        "explanation": "Rotating the mirror by θ rotates the normal by θ, which changes the angle of incidence by θ and the angle of reflection by another θ, so the reflected ray swings through 2θ = 30°. This factor of two is the basis of the optical lever, used in galvanometers and in atomic-force microscopes to amplify small deflections. Note it holds for the mirror rotating, not the incident beam — rotating the incoming beam by θ moves the reflected beam by only θ."
      },

      {
        "question": "The low-temperature molar heat capacity of a metal is C = γT + AT³, and for copper the two terms are equal at about 3.0 K. At 0.30 K the ratio of the electronic to the lattice contribution is most nearly",
        "choices": [
          "0.01",
          "1",
          "10",
          "30",
          "100"
        ],
        "answer": "E",
        "explanation": "The ratio is γT/(AT³) = (γ/A)/T². Equality at T₀ means γ/A = T₀², so the ratio is just (T₀/T)² = (3.0/0.30)² = 100. Choice C is the temperature ratio without squaring. The linear electronic term arises because only electrons within ~kT of the Fermi surface can be excited; the cubic term is the Debye phonon result. The electronic term always wins at low enough T, which is how γ is measured."
      },

      {
        "question": "In a system of noninteracting fermions at temperature T with chemical potential μ, the average occupation of a single-particle state with energy exactly kT above μ is most nearly",
        "choices": [
          "0.12",
          "0.27",
          "0.50",
          "0.73",
          "0.88"
        ],
        "answer": "B",
        "explanation": "The Fermi-Dirac distribution is f(E) = 1/(e^((E−μ)/kT) + 1). With E − μ = kT the exponent is 1, so f = 1/(e + 1) = 0.269. Choice D is the occupancy one kT *below* μ; the distribution satisfies f(μ + x) + f(μ − x) = 1, so those two must sum to 1 — a quick way to check the arithmetic. Choice C is the value exactly at E = μ, true at any temperature."
      },

      {
        "question": "A pinhole camera has its screen 20 cm behind the pinhole and is used at wavelength 550 nm. If the hole diameter is chosen to make the image as sharp as possible, the resulting blur is most nearly",
        "choices": [
          "0.011 mm",
          "0.033 mm",
          "0.11 mm",
          "0.33 mm",
          "1.1 mm"
        ],
        "answer": "D",
        "explanation": "Geometry smears a point into a patch about the size of the hole, b ≈ d, while diffraction spreads it by b ≈ λD/d. The sum is minimised where the two are comparable, so both the optimal hole and the blur it leaves are of order √(λD) = √(550 × 10⁻⁹ × 0.20) = 0.33 mm. Resolution therefore improves only as √D — making the box longer helps slowly."
      },

      {
        "question": "A thin lens made of glass of index 1.50 has a focal length of 20 cm in air. When the lens is fully immersed in water (n = 1.33), its focal length becomes most nearly",
        "choices": [
          "15 cm",
          "20 cm",
          "27 cm",
          "40 cm",
          "80 cm"
        ],
        "answer": "E",
        "explanation": "The lensmaker's equation in a surrounding medium reads 1/f = (n_lens/n_medium − 1)(1/R₁ − 1/R₂). Only the prefactor changes, so f scales inversely with it: f_water/f_air = (1.50 − 1)/(1.50/1.33 − 1) = 0.50/0.128 = 3.9. Hence f ≈ 20 × 3.9 ≈ 78 cm, or about 80 cm. The lens becomes much weaker because refraction depends on the index *contrast* at each surface, not on the glass alone — and a lens immersed in a medium of its own index would have no focusing power at all."
      },

      {
        "question": "In applying Bose-Einstein statistics to blackbody radiation, the chemical potential of the photon gas is set to zero because",
        "choices": [
          "photons are massless, and any massless particle has zero chemical potential",
          "photons do not interact with one another",
          "photons are their own antiparticles",
          "the number of photons is not conserved, since the cavity walls freely emit and absorb them",
          "the photon gas is always in the classical limit"
        ],
        "answer": "D",
        "explanation": "The chemical potential enters as the multiplier enforcing a fixed particle number. Cavity walls create and destroy photons freely, so N is unconstrained and equilibrium instead requires ∂F/∂N = μ = 0, leaving the Planck factor 1/(e^(ħω/kT) − 1). Choice A is a plausible but false generalisation — a gas of massless particles with conserved number would have μ ≠ 0. With μ fixed at zero the photon density is set entirely by T, scaling as T³."
      },

      {
        "question": "A coin lies on the bottom of a pool of water (n = 1.33) at a depth of 1.20 m. Viewed from directly above, the coin appears to be at a depth of most nearly",
        "choices": [
          "0.90 m",
          "1.20 m",
          "1.60 m",
          "1.80 m",
          "2.10 m"
        ],
        "answer": "A",
        "explanation": "For near-normal viewing, refraction at a flat surface puts the image at an apparent depth d/n = 1.20/1.33 = 0.90 m. Rays bend away from the normal on leaving the water, so they appear to diverge from a point closer to the surface than the object. Choice C, 1.60 m, is d × n — the ratio inverted. The rule of thumb: looking into a denser medium, things look shallower by a factor n."
      }

    ]
  },

// ============================================================
//
//  SET NOTES — Classical Mechanics II
//  ----------------------------------
//  25 questions in the voice of FORM GR8677 (1985): short declarative stems,
//  "is most nearly" for numerics, clean answer ladders, one step of physics plus
//  one of arithmetic, deliberate red herrings. No figures.
//
//  Balance: 10 questions on Coriolis / non-inertial frames / fluid mechanics,
//  15 on the rest of classical mechanics. Topics rotate card to card.
//
//  Coverage percentages use 121 as the denominator — the number of classical-
//  mechanics questions among the 600 released. Counts are occurrences across
//  all 600. Eleven of the 25 test concepts that appear ZERO times in the
//  released exams, which is the point of the set.
//
//  Every answer independently recomputed after drafting.
// ============================================================
  {
    "name": "Classical Mechanics II",
    "added": "2026-08-11",
    "category": "topic",
    "cards": [

      {
        "question": "A gyroscope consists of a wheel of moment of inertia 0.50 kg·m² about its symmetry axis, spinning about that axis at 40 rad/s. The wheel and its axle have a combined mass of 4.0 kg, and the centre of mass lies 0.25 m from the fixed pivot. The axle is held horizontal and released. Taking g = 9.8 m/s², the angular speed of the resulting steady precession about the vertical is most nearly",
        "choices": [
          "0.049 rad/s",
          "0.49 rad/s",
          "1.0 rad/s",
          "2.0 rad/s",
          "4.9 rad/s"
        ],
        "answer": "B",
        "explanation": "For fast steady precession, Ω = τ/L, where the gravitational torque about the pivot is τ = Mgd = (4.0)(9.8)(0.25) = 9.8 N·m and the spin angular momentum is L = Iω = (0.50)(40) = 20 kg·m²/s. Hence Ω = 9.8/20 = 0.49 rad/s, comfortably small compared with the spin rate, so the approximation is self-consistent. The choice 2.0 rad/s is the trap: it is Iω/Mgd, the reciprocal, obtained by inverting the ratio. Note the axle does not fall; the torque is perpendicular to L and only turns its direction.",
        "coverage": "Concepts: Steady gyroscopic precession Ω = Mgd/Iω, where a torque changes the direction of a large spin angular momentum rather than its magnitude.  |  Tagged as \"gyroscopic precession\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A uniform rod of mass M and length L lies at rest on a frictionless horizontal table, free to rotate about a fixed vertical axle through one end. A horizontal impulse perpendicular to the rod is delivered at a distance d from the axle. The axle exerts no impulsive force on the rod if d is",
        "choices": [
          "L/3",
          "L/2",
          "2L/3",
          "3L/4",
          "L"
        ],
        "answer": "C",
        "explanation": "If the axle delivers no impulse, the applied impulse J alone must satisfy both J = Mv_cm and Jd = I_pivotω, with I_pivot = ML²/3. Rolling the two together with v_cm = ω(L/2) gives d = I_pivot/(M·L/2) = (ML²/3)/(ML/2) = 2L/3, the centre of percussion (the bat's 'sweet spot'). The tempting distractor is L/2: striking the centre of mass gives pure translation only for a free rod, but here the axle must then supply an impulse to enforce rotation.",
        "coverage": "Concepts: The impact point for which the impulsive reaction at the pivot vanishes, at I/(Md_cm) from the axis.  |  Tagged as \"centre of percussion\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A Foucault pendulum is installed at latitude 42° N. Taking the Earth's angular speed to be Ω = 7.3 × 10⁻⁵ rad/s and sin 42° ≈ 0.67, the time required for the plane of oscillation to precess through a full 360° is most nearly",
        "choices": [
          "18 hours",
          "24 hours",
          "28 hours",
          "36 hours",
          "48 hours"
        ],
        "answer": "D",
        "explanation": "Only the component of Ω along the local vertical rotates the horizontal plane of swing, so the precession rate is Ω sin λ, not Ω. The period is 2π/(Ω sin λ) = 6.28/(7.3 × 10⁻⁵ × 0.67) ≈ 1.29 × 10⁵ s ≈ 36 hours. The trap is 24 hours: a full turn in one day happens only at the poles, where sin λ = 1, and at the equator the plane does not precess at all. Note also that the pendulum's length and mass are irrelevant to the precession rate.",
        "coverage": "Concepts: Precession of a Foucault pendulum; the rate is the vertical component of the Earth's angular velocity, Ω sin λ.  |  Tagged as \"coriolis force / rotating-frame deflection\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A uniform chain of linear mass density λ lies in a loose heap on the floor. One end is raised vertically at constant speed v, so that links are picked up from rest one at a time and the heap remains slack. When a length x has been lifted clear of the floor, the upward force applied to the raised end is",
        "choices": [
          "λv²",
          "λgx",
          "λgx + ½λv²",
          "λgx + λv²",
          "λgx + 2λv²"
        ],
        "answer": "D",
        "explanation": "The moving part has momentum p = (λx)v with v constant, so dp/dt = λv(dx/dt) = λv². The external forces on the moving part are the applied force F upward and its weight λgx downward (the slack heap pulls down with no tension), so F − λgx = λv² and F = λgx + λv². As v → 0 this correctly reduces to the static weight λgx. The choice λgx + ½λv² is the trap: the factor ½ comes from an energy argument, but half the work done goes into the inelastic jerk that starts each link moving, so it does not give the force.",
        "coverage": "Concepts: Variable-mass dynamics: F = d(mv)/dt contributes a momentum-flux term λv² on top of the weight λgx.  |  Tagged as \"rocket/variable mass\".  |  Released-exam coverage: 2 of the 600 questions (1.7% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A horizontal turntable rotates at constant angular speed, counterclockwise as seen from above. A puck slides on the frictionless upper surface of the turntable, launched from the centre so that, as seen from the ground, it moves in a straight line at constant speed. As seen by an observer rotating with the turntable, the path of the puck is",
        "choices": [
          "a straight line along a radius of the turntable",
          "a straight line, but not along a radius",
          "a circular arc concentric with the centre of the turntable",
          "a curve that bends continuously toward the puck's left",
          "a curve that bends continuously toward the puck's right"
        ],
        "answer": "E",
        "explanation": "You do not need the formula. In the ground frame the puck travels along a fixed radial direction; the turntable turns counterclockwise beneath it, so relative to the painted marks the puck's angular position steadily decreases, i.e. it swings clockwise — to the right of its own direction of travel. The formula agrees: with Ω = Ωẑ and v′ = vx̂, the Coriolis acceleration −2Ω × v′ = −2Ωvŷ points to the right of the motion, while the centrifugal term is purely radial and does not bend the path. Choice A is the trap for a student who forgets that the frame itself is turning; a counterclockwise turntable mimics the Northern Hemisphere, where moving bodies deflect right.",
        "coverage": "Concepts: Trajectories in a rotating frame; the −2Ω × v term curves an otherwise straight path, to the right for counterclockwise rotation.  |  Tagged as \"coriolis force / rotating-frame deflection\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A uniform wheel of mass M and radius R rests on level ground against a step of height R/2. A horizontal force is applied at the wheel's axle, directed toward the step. The minimum force that will lift the wheel over the step is",
        "choices": [
          "Mg/2",
          "Mg/√3",
          "√3Mg/2",
          "Mg",
          "√3Mg"
        ],
        "answer": "E",
        "explanation": "At the point of lifting, the ground normal force vanishes and the wheel pivots about the upper corner of the step. Measured from that corner, the axle is a vertical distance R − R/2 = R/2 above it and a horizontal distance √(R² − (R/2)²) = √3R/2 from it. Balancing torques about the corner, F(R/2) = Mg(√3R/2), so F = √3Mg ≈ 1.7Mg. The distractor Mg/√3 comes from interchanging the two lever arms; note that as the step gets lower the required force grows without bound, since the vertical lever arm for F shrinks.",
        "coverage": "Concepts: Static torque balance about a contact corner, with lever arms fixed by the step geometry.  |  Tagged as \"statics\".  |  Released-exam coverage: 3 of the 600 questions (2.5% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A lightly damped harmonic oscillator with quality factor Q = 50 is driven by an external force F₀cos(ωt). The steady-state displacement amplitude at ω equal to the natural frequency ω₀ exceeds the static displacement F₀/k by a factor of most nearly",
        "choices": [
          "50",
          "71",
          "100",
          "2500",
          "5000"
        ],
        "answer": "A",
        "explanation": "For mẍ + bẋ + kx = F₀cos(ωt), the amplitude is (F₀/m)/√((ω₀² − ω²)² + (bω/m)²), which at ω = ω₀ reduces to F₀/(bω₀) = (F₀/k)(mω₀/b) = Q(F₀/k). So the amplification at resonance is just Q = 50. The distractor 2500 is Q²: that is the ratio of stored energies, not amplitudes, since energy goes as amplitude squared. The value 71 ≈ Q√2 has no meaning here; √2 appears only in the half-power (Δω) width of the resonance curve.",
        "coverage": "Concepts: Resonant amplification of a lightly damped driven oscillator: the amplitude at ω₀ exceeds the static deflection by the factor Q.  |  Tagged as \"damped/driven oscillator\".  |  Released-exam coverage: 1 of the 600 questions (0.8% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A train of mass 1.0 × 10⁵ kg travels due north at 30 m/s along a straight level track at latitude 60° N, where sin 60° ≈ 0.87. The Earth's angular speed is Ω = 7.3 × 10⁻⁵ rad/s. The horizontal force that the rails must exert on the train is most nearly",
        "choices": [
          "1.9 × 10² N, directed toward the west",
          "3.8 × 10² N, directed toward the west",
          "3.8 × 10² N, directed toward the east",
          "4.4 × 10² N, directed toward the west",
          "7.6 × 10² N, directed toward the east"
        ],
        "answer": "B",
        "explanation": "The train moves in a straight line in the Earth frame, so the rails must exactly cancel the horizontal Coriolis force, whose magnitude is 2mΩv sin λ = 2(1.0 × 10⁵)(7.3 × 10⁻⁵)(30)(0.87) ≈ 3.8 × 10² N. For the direction, skip the cross product: going north carries the train closer to the Earth's axis, and conserving its angular momentum about that axis makes it outrun the ground beneath it, so it tends to drift east — equivalently, in the Northern Hemisphere motion deflects to the right, and right of north is east. The rails must therefore push west. The 4.4 × 10² N choice is what you get by dropping sin λ, and 1.9 × 10² N by dropping the factor of 2.",
        "coverage": "Concepts: Magnitude and direction of the horizontal Coriolis force 2mΩv sin λ, and the reaction the rails must supply.  |  Tagged as \"coriolis force / rotating-frame deflection\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A uniform rectangular block of mass 20 kg has a square base 0.30 m on a side and a height of 0.90 m. It stands on a level floor for which the coefficient of static friction is 0.40. A horizontal force perpendicular to one vertical face is applied at the top edge of the block. (g = 9.8 m/s²) The smallest such force that will topple the block is most nearly",
        "choices": [
          "33 N",
          "65 N",
          "78 N",
          "98 N",
          "200 N"
        ],
        "answer": "A",
        "explanation": "Toppling begins when the block is about to rotate about its far bottom edge, so torques about that edge balance: F·h = Mg·(w/2), giving F = (196 N)(0.15 m)/(0.90 m) ≈ 33 N. Because 33 N is less than the sliding threshold μMg = (0.40)(196 N) = 78 N, the block tips before it slides, so the friction data are a check rather than the answer — choice C (78 N) is the trap for a student who computes the sliding force instead. Choice B, 65 N, comes from using the full width w rather than the lever arm w/2 to the centre of mass.",
        "coverage": "Concepts: Rigid-body statics: the competition between toppling (torque balance about the leading bottom edge) and sliding (limiting static friction).  |  Tagged as \"statics\".  |  Released-exam coverage: 3 of the 600 questions (2.5% of the 121 classical-mechanics questions)."
      },

      {
        "question": "An open cylindrical bucket of radius 0.15 m is partly filled with water and rotated about its vertical symmetry axis at a constant angular speed of 10 rad/s. After the water has come to rest relative to the bucket, the height of the water surface at the wall exceeds its height at the axis by most nearly (g = 9.8 m/s²)",
        "choices": [
          "0.023 m",
          "0.057 m",
          "0.11 m",
          "0.23 m",
          "0.77 m"
        ],
        "answer": "C",
        "explanation": "In the rotating frame the water is static under gravity plus the centrifugal force per unit mass Ω²r directed outward. The free surface is an equipotential of the effective potential, gz − Ω²r²/2 = constant, so z(r) = z(0) + Ω²r²/2g: a paraboloid. The rim-to-axis rise is Ω²R²/2g = (10)²(0.15)²/(2 × 9.8) = 0.115 m ≈ 0.11 m. Choice D is the same calculation with the factor of ½ omitted, and choice E is Ω²R/2g, obtained by losing one power of R.",
        "coverage": "Concepts: Free surface of a liquid in a uniformly rotating frame; balancing the centrifugal term against gravity gives a paraboloid of rise Ω²R²/2g.  |  Tagged as \"rotating-frame fluid surface\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A thin rod of total mass M lies along the x-axis from x = 0 to x = L. Its linear mass density increases linearly with distance from the origin, λ(x) = (2M/L²)x. The moment of inertia of the rod about an axis through x = 0 perpendicular to the rod is",
        "choices": [
          "ML²/12",
          "ML²/6",
          "ML²/4",
          "ML²/3",
          "ML²/2"
        ],
        "answer": "E",
        "explanation": "I = ∫₀ᴸ x²λ(x)dx = (2M/L²)∫₀ᴸ x³dx = (2M/L²)(L⁴/4) = ML²/2. (The given λ is correctly normalized: ∫₀ᴸ λ dx = M.) Choice D, ML²/3, is the trap: it is the uniform-rod result about an end, obtained by ignoring the fact that the mass is piled up at the far end, where it contributes most to I. Choice B, ML²/6, is the moment of inertia about the heavy end x = L; a consistency check is the parallel-axis theorem with x_cm = 2L/3, which reproduces both values from I_cm = ML²/18.",
        "coverage": "Concepts: Moment of inertia of a body with non-uniform linear mass density, evaluated by direct integration.  |  Tagged as \"moment of inertia\".  |  Released-exam coverage: 3 of the 600 questions (2.5% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A spool consists of a cylindrical axle of radius 0.10 m rigidly joined to two end disks of radius 0.20 m, and it rests on a horizontal floor, touching the floor along the rims of the end disks. A thread wound on the axle leaves the axle at the axle's lowest point and is pulled with a gentle force directed at an angle θ above the horizontal, in the vertical plane containing the spool's centre of mass. If the spool rolls without slipping, the value of θ for which the spool remains at rest is most nearly",
        "choices": [
          "0°",
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "answer": "D",
        "explanation": "Take torques about the line of contact with the floor, where the normal force and friction have no moment. The thread's line of action is tangent to the axle, and its perpendicular distance from the contact line is R cos θ − r, so the net torque vanishes when cos θ = r/R = 0.50, i.e. θ = 60°. Solving the dynamics in full gives a_cm = 2F(cos θ − r/R)/(3M) for a uniform spool, confirming both the critical angle and the sign. Choice A is the classic trap: for a horizontal pull (θ = 0) the line of action passes below the contact point, and the spool rolls toward the puller rather than away from it; only for θ > 60° does it roll backward.",
        "coverage": "Concepts: Rigid-body rolling dynamics: torque about the instantaneous contact point, and the line of action of the applied force relative to that point.  |  Tagged as \"rotational dynamics\".  |  Released-exam coverage: 10 of the 600 questions (8.3% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A helium-filled balloon on a string is tied to the floor of a closed car that is filled with air at ordinary pressure. The car accelerates forward along a straight level road. Relative to the car, the balloon",
        "choices": [
          "leans toward the front of the car, because the pressure of the air in the car is greater at the rear than at the front",
          "leans toward the rear of the car, because the inertia of the balloon opposes the acceleration",
          "leans toward the rear of the car, because the air ahead of the balloon is compressed by the acceleration",
          "remains exactly vertical, because the balloon and the air surrounding it have the same acceleration",
          "leans toward the front only if the car's acceleration exceeds g"
        ],
        "answer": "A",
        "explanation": "To accelerate the enclosed air forward there must be a horizontal pressure gradient, dP/dx = −ρ_air a with x forward, so the pressure is highest at the rear; the resulting net pressure force on the balloon is forward and far exceeds the small mass times acceleration the balloon itself requires, so it swings toward the front. Equivalently, in the car's frame the effective gravity points downward and backward, and a buoyant object always rises opposite to the effective gravity, i.e. upward and forward. Choice B is the trap: it treats the balloon like a dense pendulum bob and ignores the surrounding fluid, which is what actually determines the direction.",
        "coverage": "Concepts: Buoyancy in a linearly accelerating frame; the air's pressure gradient tilts effective gravity, so a low-density body leans toward the acceleration.  |  Tagged as \"non-inertial frames & coriolis\".  |  Released-exam coverage: 1 of the 600 questions (0.8% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A uniform rod of mass M and length L lies at rest on a frictionless horizontal table. A brief horizontal impulse J, perpendicular to the rod, is delivered at a point a distance L/4 from the rod's centre. The moment of inertia about the centre is ML²/12. Immediately after the blow, the point of the rod that is instantaneously at rest is",
        "choices": [
          "the centre of the rod",
          "a point L/6 from the centre, on the side away from the blow",
          "a point L/3 from the centre, on the side away from the blow",
          "the end of the rod on the side away from the blow",
          "no point of the rod; every point is moving"
        ],
        "answer": "C",
        "explanation": "Linear impulse gives v_cm = J/M and angular impulse about the centre gives ω = J(L/4)/(ML²/12) = 3J/(ML). A point a distance s from the centre on the side away from the blow has speed v_cm − ωs, which vanishes at s = (J/M)(ML/3J) = L/3. This point is the instantaneous axis of rotation; the far end, at s = L/2, is actually moving backward with speed J/(2M), which makes choice D tempting. Choice E is the trap for treating the impulse as producing pure translation, and choice A would be right only if the blow passed through the centre of mass.",
        "coverage": "Concepts: Linear and angular impulse applied to a free rigid body, and the location of the resulting instantaneous axis of rotation.  |  Tagged as \"angular momentum\".  |  Released-exam coverage: 4 of the 600 questions (3.3% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A small bead slides without friction inside a straight thin tube that lies in a horizontal plane and is made to rotate about a fixed vertical axis through one end at a constant angular speed Ω. At t = 0 the bead is at a distance r₀ from the axis and is at rest with respect to the tube. For t > 0 its distance r from the axis is",
        "choices": [
          "r₀, since no force acts along the tube",
          "r₀ cos(Ωt)",
          "r₀(1 + ½Ω²t²)",
          "r₀ e^(Ωt)",
          "r₀ cosh(Ωt)"
        ],
        "answer": "E",
        "explanation": "In the rotating frame the only force along the tube is the centrifugal term mΩ²r, since gravity is vertical, the tube is frictionless, and the Coriolis force is horizontal but perpendicular to the tube (it is balanced by the tube's normal force). Hence r̈ = Ω²r, whose solution with r(0) = r₀ and ṙ(0) = 0 is r = r₀ cosh(Ωt): the bead runs away exponentially rather than oscillating. Choice B is the trap of reading r̈ = Ω²r as a harmonic equation with the wrong sign, and choice D satisfies the differential equation but not the initial condition ṙ(0) = 0.",
        "coverage": "Concepts: Motion in a rotating tube; the centrifugal term gives r̈ = Ω²r and hence cosh growth, while the Coriolis force is taken up by the tube's normal force.  |  Tagged as \"non-inertial frames & coriolis\".  |  Released-exam coverage: 1 of the 600 questions (0.8% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A disk of moment of inertia 2I spins freely about a fixed vertical axis with angular speed ω₀. A second disk, of moment of inertia I about the same axis and initially at rest, is dropped coaxially onto the first. Friction between their faces quickly brings them to a common angular speed. The fraction of the original kinetic energy that is dissipated is",
        "choices": [
          "1/9",
          "1/3",
          "4/9",
          "1/2",
          "2/3"
        ],
        "answer": "B",
        "explanation": "The frictional torques are internal, and gravity and the axle exert no torque about the axis, so angular momentum is conserved: 2Iω₀ = 3Iω, giving ω = 2ω₀/3. Then K_f/K_i = ½(3I)(2ω₀/3)² ÷ ½(2I)ω₀² = 2/3, so one-third of the energy is dissipated — exactly the perfectly inelastic-collision result, fraction lost = I₂/(I₁ + I₂). Choice E, 2/3, is the fraction that survives, and the common conceptual error is to assume that conservation of angular momentum implies conservation of kinetic energy, which would make the answer zero.",
        "coverage": "Concepts: Conservation of angular momentum in a rotational perfectly inelastic collision, and the resulting loss of kinetic energy.  |  Tagged as \"momentum & collisions\".  |  Released-exam coverage: 10 of the 600 questions (8.3% of the 121 classical-mechanics questions)."
      },

      {
        "question": "Two blocks, each of mass 0.50 kg, slide on a frictionless horizontal rail between two rigid walls. Each block is joined to the nearer wall by a spring of force constant 200 N/m, and the blocks are joined to each other by a third spring of force constant 100 N/m. In the normal mode in which the blocks oscillate with equal amplitudes but opposite phase, the angular frequency is most nearly",
        "choices": [
          "14 rad/s",
          "20 rad/s",
          "24 rad/s",
          "28 rad/s",
          "35 rad/s"
        ],
        "answer": "D",
        "explanation": "For the antisymmetric mode x₂ = −x₁, the middle spring is stretched or compressed by 2x₁, so each block feels a restoring force kx₁ + 2k_c x₁ and ω² = (k + 2k_c)/m = (200 + 200)/0.50 = 800 s⁻², giving ω ≈ 28 rad/s. The symmetric mode x₂ = x₁ leaves the coupling spring unstretched and gives the lower value ω = √(k/m) = 20 rad/s, which is the distractor for a student who ignores the middle spring. The 24 rad/s choice is the trap √((k + k_c)/m) = 24.5 rad/s, obtained by forgetting that the coupling spring's deformation is twice each block's displacement. Note that the antisymmetric mode is always the stiffer, higher-frequency one, and that as k_c → 0 both modes correctly collapse to 20 rad/s.",
        "coverage": "Concepts: Normal modes of two coupled oscillators: the symmetric mode does not deform the coupling spring, while the antisymmetric mode deforms it by twice the individual displacement.  |  Tagged as \"coupled oscillators & normal modes\".  |  Released-exam coverage: 3 of the 600 questions (2.5% of the 121 classical-mechanics questions)."
      },

      {
        "question": "An ice cube with a small steel ball embedded in it floats in a glass of water. The ice then melts completely and the ball comes to rest on the bottom of the glass. (ρ_water = 1000 kg/m³, ρ_ice = 917 kg/m³, ρ_steel = 7800 kg/m³.) Compared with its initial level, the final water level in the glass",
        "choices": [
          "is higher",
          "is lower",
          "is unchanged",
          "is unchanged only because ice and water have the same mass",
          "cannot be determined without the volume of the ball"
        ],
        "answer": "B",
        "explanation": "While floating, the cube-plus-ball displaces a volume of water equal to (m_ice + m_ball)/ρ_water. Afterward the melted ice supplies exactly m_ice/ρ_water of water — that part is a wash — but the sunken ball now displaces only its own volume m_ball/ρ_steel, which is far less than m_ball/ρ_water because steel is 7.8 times denser than water. The occupied volume therefore drops and the level falls. Choice C is the trap: it is the correct answer for a plain floating ice cube, where nothing is embedded, but the steel ball breaks the cancellation. Choice E is wrong because the direction of the change follows from ρ_steel > ρ_water alone, whatever the ball's size.",
        "coverage": "Concepts: Archimedes' principle before and after melting; a floating composite displaces its weight, a sunken dense object only its volume.  |  Tagged as \"buoyancy level-change (ice melting, object overboard)\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A particle moves in a bounded (periodic) orbit under the attractive central force F(r) = −Cr³, for which the potential energy is U(r) = ¼Cr⁴ with C > 0. The total mechanical energy of the particle is 24 J. Its kinetic energy, averaged over one full period of the motion, is most nearly",
        "choices": [
          "4 J",
          "6 J",
          "8 J",
          "12 J",
          "16 J"
        ],
        "answer": "E",
        "explanation": "The virial theorem for a potential that is a homogeneous function of degree n gives 2⟨T⟩ = n⟨U⟩; here U ∝ r⁴, so n = 4 and ⟨T⟩ = 2⟨U⟩. With E = ⟨T⟩ + ⟨U⟩ = 3⟨U⟩ = 24 J, one gets ⟨U⟩ = 8 J and ⟨T⟩ = 16 J. The tempting answer 12 J assumes ⟨T⟩ = ⟨U⟩ = E/2, which is the equipartition result valid only for a harmonic potential (n = 2); 8 J is the average potential energy, not the kinetic. As checks on the general formula, n = 2 reproduces ⟨T⟩ = E/2 and the gravitational case n = −1 reproduces the familiar ⟨T⟩ = −E.",
        "coverage": "Concepts: The virial theorem 2⟨T⟩ = n⟨U⟩ for a bounded orbit in a potential homogeneous of degree n, combined with conservation of total energy.  |  Tagged as \"virial theorem\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A vertical rectangular gate 5.0 m wide is set in the wall of a reservoir, with its top edge at the water surface and its bottom edge 4.0 m below, on the reservoir floor. Water stands against one face and air at atmospheric pressure against the other. (ρ_water = 1000 kg/m³, g = 9.8 m/s².) The net horizontal force of the water on the gate is most nearly",
        "choices": [
          "9.8 × 10⁴ N",
          "2.0 × 10⁵ N",
          "3.9 × 10⁵ N",
          "7.8 × 10⁵ N",
          "1.6 × 10⁶ N"
        ],
        "answer": "C",
        "explanation": "Gauge pressure rises linearly with depth, so the average pressure over the gate is that at mid-depth, ρg(h/2) = 1000 × 9.8 × 2.0 = 1.96 × 10⁴ Pa. Multiplying by the area 5.0 × 4.0 = 20 m² gives F = ½ρgh²w = 3.9 × 10⁵ N, the same as integrating ρgz(w dz) from 0 to h. Choice D, 7.8 × 10⁵ N, is the classic error of applying the bottom pressure ρgh over the whole gate; atmospheric pressure cancels because it acts on both faces.",
        "coverage": "Concepts: Pressure rising linearly with depth, integrated over a submerged vertical surface: F = ½ρgh²w.  |  Tagged as \"hydrostatic force on a wall or gate\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A particle of mass 0.50 kg moves along the x-axis (x > 0) with potential energy U(x) = A/x² − B/x, where A = 2.0 J·m² and B = 4.0 J·m. The angular frequency of small oscillations about the equilibrium position is most nearly",
        "choices": [
          "1.4 rad/s",
          "2.0 rad/s",
          "2.8 rad/s",
          "4.0 rad/s",
          "5.7 rad/s"
        ],
        "answer": "C",
        "explanation": "Setting U′(x) = −2A/x³ + B/x² = 0 gives the single equilibrium x₀ = 2A/B = 1.0 m. The effective spring constant is U″(x₀) = 12A/x₀⁴ − 8B/x₀³ = 12 − 8 = 4.0 N/m, which is positive, so the point is a minimum, and ω = √(U″/m) = √(4.0/0.50) = √8 ≈ 2.8 rad/s. The distractor 2.0 rad/s is √U″ with the mass omitted (equivalently, treating m as 1 kg), and 1.4 rad/s comes from multiplying by m instead of dividing. Note that the answer depends only on the curvature at the minimum, not on the depth U(x₀) = −2.0 J, which is a red herring.",
        "coverage": "Concepts: Small oscillations about a potential minimum: locate the minimum from U′ = 0 and use ω = √(U″(x₀)/m).  |  Tagged as \"SHM\".  |  Released-exam coverage: 9 of the 600 questions (7.4% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A one-dimensional system has the Lagrangian L = e^(γt)(½mẋ² − ½kx²), where m, k, and γ are positive constants. The equation of motion for x(t) is",
        "choices": [
          "mẍ + mγẋ + kx = 0",
          "mẍ − mγẋ + kx = 0",
          "mẍ + kx = 0",
          "mẍ + γẋ + kx = 0",
          "mẍ + (k + mγ²)x = 0"
        ],
        "answer": "A",
        "explanation": "With ∂L/∂ẋ = e^(γt)mẋ, the time derivative is e^(γt)(mẍ + γmẋ), while ∂L/∂x = −e^(γt)kx; the Euler–Lagrange equation then gives e^(γt)(mẍ + γmẋ + kx) = 0, and since the exponential never vanishes, mẍ + mγẋ + kx = 0. This is the damped oscillator, so the explicitly time-dependent factor is what generates the dissipative term. Choice C is the trap for a student who treats e^(γt) as an overall constant that can be divided out before differentiating, which is illegal because d/dt acts on it; choice D drops the factor of m that the differentiation supplies. Setting γ = 0 correctly recovers the undamped oscillator.",
        "coverage": "Concepts: Applying the Euler–Lagrange equation to an explicitly time-dependent Lagrangian, which produces a velocity-dependent (damping) term.  |  Tagged as \"lagrangian\".  |  Released-exam coverage: 7 of the 600 questions (5.8% of the 121 classical-mechanics questions)."
      },

      {
        "question": "An incompressible viscous liquid is in steady laminar flow through a long horizontal pipe of circular cross section, driven by a pressure difference between its ends. The pipe is replaced by one of half the radius and twice the length. To maintain the same volume flow rate, the pressure difference must be increased by a factor of",
        "choices": [
          "2",
          "4",
          "8",
          "16",
          "32"
        ],
        "answer": "E",
        "explanation": "Poiseuille's law gives Q = πΔP r⁴/(8ηL), so ΔP ∝ QL/r⁴. Halving r multiplies the required ΔP by 2⁴ = 16, and doubling L multiplies it by a further 2, for a total factor of 32. The choice 8 is the trap for students who remember only that Q falls off as some power of r and use r² (an area argument), which would give 4 × 2 = 8; the correct exponent is 4 because both the cross-sectional area and the velocity gradient scale with r².",
        "coverage": "Concepts: Poiseuille's law for laminar viscous flow, Q ∝ ΔP r⁴/ηL, and its fourth-power sensitivity to radius.  |  Tagged as \"viscous (poiseuille) pipe flow\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A boat of mass 200 kg is moving at 4.0 m/s through still water when its engine is shut off. The water exerts on it a resistive force of magnitude bv opposite to its velocity, with b = 20 kg/s, and no other horizontal force acts. The total distance the boat travels after the engine is shut off is most nearly",
        "choices": [
          "20 m",
          "40 m",
          "80 m",
          "160 m",
          "unbounded, since the boat never actually comes to rest"
        ],
        "answer": "B",
        "explanation": "Writing m v dv/dx = −bv and cancelling v gives dv/dx = −b/m, so the speed falls linearly with distance and the boat stops after x = mv₀/b = (200)(4.0)/20 = 40 m. Equivalently, v(t) = v₀e^(−bt/m) integrates to the same total displacement v₀m/b. Choice E is the trap: the speed does decay exponentially and only vanishes as t → ∞, but the integral of that exponential converges, so the distance is finite. The initial kinetic energy 1600 J is a red herring here, since it is dissipated over an interval fixed by the impulse–momentum relation mv₀ = ∫bv dt = b·(total distance).",
        "coverage": "Concepts: One-dimensional motion under a linear velocity-dependent drag force, solved by changing the independent variable from t to x.  |  Tagged as \"terminal velocity & drag\".  |  Released-exam coverage: 1 of the 600 questions (0.8% of the 121 classical-mechanics questions)."
      },

      {
        "question": "A spherical soap bubble of radius r in air and a spherical drop of the same soap solution are each found to have the same gauge pressure inside (pressure inside minus atmospheric pressure). The radius of the drop is",
        "choices": [
          "r/4",
          "r/2",
          "r",
          "2r",
          "4r"
        ],
        "answer": "B",
        "explanation": "A soap bubble has two liquid–air surfaces, inner and outer, so its excess pressure is 4γ/r; a liquid drop has one surface, so its excess pressure is 2γ/R. Setting 4γ/r = 2γ/R gives R = r/2, so the drop must be smaller than the bubble to hold the same excess pressure. The choice 2r is the trap for reversing the roles and assigning the two surfaces to the drop. The choice r follows from using 2γ/r for both.",
        "coverage": "Concepts: Laplace pressure; a soap bubble has two liquid–air surfaces (4γ/r) while a droplet has one (2γ/r).  |  Tagged as \"surface tension / capillarity\".  |  Released-exam coverage: 0 of the 600 questions (0.0% of the 121 classical-mechanics questions)."
      }

    ]
  },

// ============================================================
//
//  SET NOTES — Electromagnetism I
//  ------------------------------
//  25 questions written to the voice of the two "677" forms, GR8677 (1985) and
//  GR9677 (2001), calibrated against their 37 electromagnetism items: short
//  declarative stems naming a clean geometry, "is most nearly" for numerics,
//  "which of the following is NOT true" for concepts, answer ladders that are
//  either clean algebra or decades, and a strong taste for limits and scaling.
//
//  Five bands of five, rotating card to card:
//    Electrostatics · Magnetostatics · Circuits · Induction & Maxwell · Waves
//
//  No figures — every geometry is stated in words with explicit axes, which is
//  the hardest constraint in E&M and shaped which setups were usable.
//
//  Checked for collisions against all 114 released E&M questions. Several items
//  sit on ground the released forms never touch: motional EMF of a rotating rod,
//  eddy-current terminal velocity, magnetic energy density, solenoid mutual
//  inductance, LC oscillation, the skin effect, a grounded-sphere image charge,
//  a uniformly polarized sphere, and constant-Q dielectric insertion.
//
//  Every answer was recomputed independently after drafting.
// ============================================================
  {
    "name": "Electromagnetism I",
    "added": "2026-08-12",
    "category": "topic",
    "cards": [

      // [1] Electrostatics
      {
        "question": "A parallel-plate capacitor with vacuum between its plates has a capacitance of 50 pF. It is charged by a 200 V battery, and the battery is then disconnected. A slab of dielectric constant κ = 5.0, cut to fill the gap completely, is then slid slowly between the plates. The work done by the external agent that inserts the slab is most nearly",
        "choices": [
          "−8.0 × 10⁻⁷ J",
          "−2.0 × 10⁻⁷ J",
          "0",
          "+8.0 × 10⁻⁷ J",
          "+4.0 × 10⁻⁶ J"
        ],
        "answer": "A",
        "explanation": "With the battery disconnected the charge Q = C₀V₀ = 1.0 × 10⁻⁸ C is fixed, so use U = Q²/2C. Initially U₀ = ½C₀V₀² = ½(50 × 10⁻¹²)(200)² = 1.0 × 10⁻⁶ J; inserting the slab raises the capacitance to κC₀ and therefore lowers the energy to U₀/κ = 2.0 × 10⁻⁷ J. No battery is present to supply or absorb energy, so the external agent does W = ΔU = 2.0 × 10⁻⁷ − 1.0 × 10⁻⁶ = −8.0 × 10⁻⁷ J: the slab is pulled in, and the agent must hold it back. The choice +4.0 × 10⁻⁶ J is the classic constant-voltage trap, U₀(κ − 1), which applies only if the battery is left attached, in which case the stored energy instead rises to κU₀."
      },

      // [2] Magnetostatics
      {
        "question": "A toroidal coil is wound with 1,000 closely spaced turns of wire and carries a steady current of 2.0 A. The mean radius of the toroid is 0.10 m, and the dimensions of the cross section of the winding are small compared with the mean radius. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the magnitude of the magnetic field inside the winding, at the mean radius, is most nearly",
        "choices": [
          "2.0 × 10⁻³ T",
          "4.0 × 10⁻³ T",
          "8.0 × 10⁻³ T",
          "1.3 × 10⁻² T",
          "2.5 × 10⁻² T"
        ],
        "answer": "B",
        "explanation": "Apply Ampère's law to a circle of radius r = 0.10 m concentric with the toroid axis. By symmetry B is tangent to that circle and constant on it, and the loop encloses all N turns, so ∮B·dl = B(2πr) = μ₀NI, giving B = μ₀NI/(2πr) = (4π × 10⁻⁷)(1,000)(2.0)/(2π × 0.10) = 4.0 × 10⁻³ T. (Equivalently B = μ₀nI with turn density n = N/2πr, the solenoid result bent into a circle.) The trap is 1.3 × 10⁻² T, which is μ₀NI/2r — the field at the centre of N concentric circular loops, using a prefactor μ₀/2 instead of μ₀/2π; likewise 2.0 × 10⁻³ T comes from mistakenly using μ₀/4π. Note also that Ampère's law applied outside the winding encloses zero net current, so B ≈ 0 everywhere outside the toroid."
      },

      // [3] Circuits
      {
        "question": "A 12 V battery of negligible internal resistance is connected in series with a switch, a 500 kΩ resistor, and an initially uncharged 2.0 μF capacitor. The switch is closed at t = 0 and the circuit is left undisturbed for a very long time. The total energy dissipated as heat in the resistor during the charging process is most nearly",
        "choices": [
          "7.2 × 10⁻⁵ J",
          "1.4 × 10⁻⁴ J",
          "2.9 × 10⁻⁴ J",
          "1.4 × 10⁻³ J",
          "1.4 × 10⁻² J"
        ],
        "answer": "B",
        "explanation": "The battery pushes a total charge Q = CV through a constant potential difference V, so it does work QV = CV² = (2.0 × 10⁻⁶)(12)² = 2.9 × 10⁻⁴ J. The capacitor ends up storing only ½CV², so the other half, ½CV² = 1.4 × 10⁻⁴ J, must appear as heat in the resistor — independent of R, which is a red herring here (a larger R only stretches the transient out in time). Choice C is the total work done by the battery, forgetting that half of it is stored in the capacitor; choice A is ¼CV²."
      },

      // [4] Induction & Maxwell
      {
        "question": "A straight conducting rod of length 0.40 m rotates in a horizontal plane at a constant angular speed of 30 rad/s about a fixed vertical axis through one of its ends. A uniform magnetic field of magnitude 0.25 T points vertically, parallel to the rotation axis. The magnitude of the potential difference between the two ends of the rod is most nearly",
        "choices": [
          "0.15 V",
          "0.30 V",
          "0.60 V",
          "1.2 V",
          "2.4 V"
        ],
        "answer": "C",
        "explanation": "An element of the rod a distance r from the axis moves with speed ωr, so it contributes dε = Bωr dr to the motional EMF. Integrating from 0 to L gives ε = ½BωL² = ½(0.25)(30)(0.40)² = 0.60 V. The tip of the rod is at the higher potential for this field direction, but only the magnitude is asked. The trap is 1.2 V, obtained by using the tip speed ωL for the whole rod (ε = BLv = BωL²); the linear increase of speed along the rod is exactly what supplies the factor of ½."
      },

      // [5] EM waves & radiation
      {
        "question": "A plane electromagnetic wave travelling in vacuum has electric field E = (6.0 V/m) ê_z cos(ky − ωt), where ê_x, ê_y, ê_z are the Cartesian unit vectors and c = 3.0 × 10⁸ m/s. The magnetic field of the wave is",
        "choices": [
          "(2.0 × 10⁻⁸ T) ê_x cos(ky − ωt)",
          "(2.0 × 10⁻⁸ T) (−ê_x) cos(ky − ωt)",
          "(2.0 × 10⁻⁸ T) ê_y cos(ky − ωt)",
          "(2.0 × 10⁻⁸ T) ê_x sin(ky − ωt)",
          "(1.8 × 10⁹ T) ê_x cos(ky − ωt)"
        ],
        "answer": "A",
        "explanation": "The phase ky − ωt means the wave travels along +ê_y, and in vacuum E, B and the propagation direction form a right-handed triad with E × B along the direction of travel. With E along ê_z one needs ê_z × B̂ = ê_y, and since ê_z × ê_x = ê_y the field B points along +ê_x; choice B has the wrong handedness and would carry energy in −ê_y. The amplitude follows from E₀ = cB₀, so B₀ = 6.0/(3.0 × 10⁸) = 2.0 × 10⁻⁸ T; choice E is the trap of multiplying by c instead of dividing. Choice C is a longitudinal magnetic field, forbidden by ∇·B = 0 for a plane wave, and choice D puts E and B 90° out of phase, whereas in vacuum they oscillate in phase."
      },

      // [6] Electrostatics
      {
        "question": "A point charge q = 1.0 × 10⁻⁸ C is held at rest a distance 0.30 m from the centre of a solid conducting sphere of radius 0.10 m, the sphere being held at zero potential by a wire to ground. Take 1/4πε₀ = 9.0 × 10⁹ N·m²/C². The magnitude of the electrostatic force on the point charge is most nearly",
        "choices": [
          "1.4 × 10⁻⁶ N",
          "3.0 × 10⁻⁶ N",
          "4.2 × 10⁻⁶ N",
          "1.0 × 10⁻⁵ N",
          "1.3 × 10⁻⁵ N"
        ],
        "answer": "C",
        "explanation": "For a grounded sphere of radius R = 0.10 m with the charge at d = 0.30 m, the image charge is q′ = −qR/d = −q/3, placed on the line of centres a distance R²/d = 0.033 m from the centre. The separation between q and its image is d − R²/d = 0.267 m, so F = (1/4πε₀)q|q′|/(d − R²/d)² = (9.0 × 10⁹)(1.0 × 10⁻⁸)(3.3 × 10⁻⁹)/(0.267)² ≈ 4.2 × 10⁻⁶ N, directed toward the sphere. The trap in 1.3 × 10⁻⁵ N is using an image of full magnitude −q at the correct image point, forgetting the factor R/d; the trap in 1.0 × 10⁻⁵ N is putting −q at the sphere's centre, which is not the image that makes the spherical surface an equipotential at zero."
      },

      // [7] Magnetostatics
      {
        "question": "Two long straight parallel wires lie in the xz-plane along the lines x = 0 and x = 0.10 m. The wire at x = 0 carries a current of 10 A in the +z direction, and the wire at x = 0.10 m carries a current of 10 A in the −z direction. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the magnitude of the magnetic force per unit length that each wire exerts on the other, together with the sense of that force, is most nearly",
        "choices": [
          "2.0 × 10⁻⁴ N/m, and the wires repel each other",
          "2.0 × 10⁻⁴ N/m, and the wires attract each other",
          "1.0 × 10⁻⁴ N/m, and the wires repel each other",
          "1.0 × 10⁻⁴ N/m, and the wires attract each other",
          "6.3 × 10⁻⁴ N/m, and the wires repel each other"
        ],
        "answer": "A",
        "explanation": "The first wire produces at the second one a field of magnitude μ₀I/2πd = (2 × 10⁻⁷)(10)/(0.10) = 2.0 × 10⁻⁵ T, directed along ẑ × x̂ = ŷ. The force per unit length on the second wire is then I(−ẑ) × (Bŷ) = −IB(ẑ × ŷ) = +IB x̂, i.e. in the +x direction, away from the first wire, so antiparallel currents repel. The magnitude is μ₀I₁I₂/2πd = (2 × 10⁻⁷)(10)(10)/(0.10) = 2.0 × 10⁻⁴ N/m. The two traps are the direction — parallel currents attract, antiparallel currents repel — and the prefactor: using μ₀/4π instead of μ₀/2π gives the distractor 1.0 × 10⁻⁴ N/m, while using μ₀/2 gives 6.3 × 10⁻⁴ N/m."
      },

      // [8] Circuits
      {
        "question": "Twelve identical resistors, each of resistance 6.0 Ω, are soldered together so that they form the twelve edges of a cube, one resistor per edge. The equivalent resistance measured between two corners lying at opposite ends of a body diagonal of the cube is",
        "choices": [
          "2.0 Ω",
          "3.5 Ω",
          "4.5 Ω",
          "5.0 Ω",
          "6.0 Ω"
        ],
        "answer": "D",
        "explanation": "By symmetry, a current I entering one corner splits equally into the three edges leaving it (I/3 each), then each of those splits into two (I/6 each) across the six middle edges, and finally three currents of I/3 recombine at the far corner. The potential drop is (I/3)R + (I/6)R + (I/3)R = (5/6)IR, so R_eq = 5R/6 = 5.0 Ω. Choice B is 7R/12, the resistance between two adjacent corners, and choice C is 3R/4, the resistance across a face diagonal — both are the answers to the wrong pair of terminals."
      },

      // [9] Induction & Maxwell
      {
        "question": "A square loop of wire of side L, mass m, and total resistance R hangs in a vertical plane with two of its sides horizontal. A uniform magnetic field of magnitude B, directed horizontally and perpendicular to the plane of the loop, fills all space above a fixed horizontal boundary; below that boundary the field is zero. The loop is released and falls straight down without rotating, and at the moment of interest its lower side is already below the boundary while its upper side is still inside the field region. Neglecting the self-inductance of the loop and any air resistance, the terminal speed the loop approaches while leaving the field is",
        "choices": [
          "mgR/(BL)",
          "mgR/(BL²)",
          "mgR/(B²L⁴)",
          "2mgR/(B²L²)",
          "mgR/(B²L²)"
        ],
        "answer": "E",
        "explanation": "Only the upper side is still in the field, so the motional EMF is ε = BLv and the induced current is I = BLv/R; by Lenz's law it circulates so as to maintain the decreasing flux, and the resulting force F = BIL on that side is directed upward, opposing the fall. At terminal speed mg = B²L²v/R, so v = mgR/(B²L²). Equivalently, mgv = ε²/R sets the gravitational power equal to the eddy-current dissipation, giving the same result. Choice (D) is the trap for anyone who counts both horizontal sides as sources of EMF; the lower side is outside the field and contributes nothing."
      },

      // [10] EM waves & radiation
      {
        "question": "A plane electromagnetic wave in vacuum has an electric field amplitude E₀ = 1.0 × 10³ V/m. The wave is normally incident on a flat, perfectly absorbing (black) surface. Taking ε₀ = 8.85 × 10⁻¹² F/m and c = 3.0 × 10⁸ m/s, the radiation pressure exerted on the surface is most nearly",
        "choices": [
          "2.2 × 10⁻⁶ Pa",
          "4.4 × 10⁻⁶ Pa",
          "8.9 × 10⁻⁶ Pa",
          "1.3 × 10⁻³ Pa",
          "1.3 × 10³ Pa"
        ],
        "answer": "B",
        "explanation": "The time-averaged intensity of a plane wave is I = ½ε₀cE₀² = ½(8.85 × 10⁻¹²)(3.0 × 10⁸)(1.0 × 10⁶) ≈ 1.3 × 10³ W/m², the ½ coming from the average of cos². For a perfect absorber all of the incident momentum flux is delivered, so the pressure is p = I/c = ½ε₀E₀² ≈ 4.4 × 10⁻⁶ Pa. Choice C, 8.9 × 10⁻⁶ Pa, is the double trap: it is what you get either by dropping the ½ in the time average or by using p = 2I/c, which applies only to a perfectly reflecting surface. Choice E is the numerical value of the intensity itself, quoted as though it were a pressure."
      },

      // [11] Electrostatics
      {
        "question": "Three point charges lie on the z-axis: +q at z = +a, +q at z = −a, and −2q at the origin. At a point on the positive z-axis a distance z ≫ a from the origin, the electric potential (taken to be zero infinitely far away) is most nearly",
        "choices": [
          "q/(2πε₀z)",
          "qa/(2πε₀z²)",
          "qa²/(4πε₀z³)",
          "3qa²/(4πε₀z³)",
          "qa²/(2πε₀z³)"
        ],
        "answer": "E",
        "explanation": "The net charge is q + q − 2q = 0, and by the symmetry about the origin the dipole moment also vanishes, so the leading nonvanishing term in the multipole expansion is the quadrupole term, which falls off as 1/z³. Summing exactly on the axis, V = (1/4πε₀)[q/(z − a) + q/(z + a) − 2q/z] = (1/4πε₀)·2qa²/[z(z² − a²)], which for z ≫ a becomes qa²/(2πε₀z³). Choice A is the monopole term one writes by forgetting that the charges sum to zero, and choice B is a dipole term this symmetric arrangement does not possess. Choice C is the same quadrupole result with a factor of 2 dropped, the commonest slip in expanding the two 1/(z ∓ a) terms."
      },

      // [12] Magnetostatics
      {
        "question": "A circular loop of radius R lies in the xy-plane with its centre at the origin and carries a steady current I. On the z-axis, the distance from the centre of the loop at which the magnitude of the magnetic field has fallen to one-eighth of its value at the centre of the loop is",
        "choices": [
          "R/2",
          "R",
          "√3 R",
          "2R",
          "3R"
        ],
        "answer": "C",
        "explanation": "On the axis, B(z) = μ₀IR²/[2(R² + z²)^(3/2)], and at the centre B(0) = μ₀I/2R. The ratio is B(z)/B(0) = R³/(R² + z²)^(3/2), so setting it equal to 1/8 gives (R² + z²)^(3/2) = 8R³, hence R² + z² = 4R² and z = √3 R ≈ 1.7R. The distractor 2R is the trap: it comes from assuming the far-field dipole law B ∝ 1/z³ holds all the way in, so that doubling the distance from the centre cuts B by 8. That reasoning fails here because z ≈ R is not the far field — at z = 2R the exact ratio is 0.089, not 0.125. The 1/z³ dipole behaviour is only recovered for z ≫ R."
      },

      // [13] Circuits
      {
        "question": "A 5.0 μF capacitor is charged to 12 V and then, at t = 0, connected by a switch across an ideal 20 mH inductor, so that the closed loop contains only the capacitor, the switch, and the inductor. The resistance of the loop is negligible. The maximum current that flows in the loop is most nearly",
        "choices": [
          "0.030 A",
          "0.060 A",
          "0.095 A",
          "0.12 A",
          "0.19 A"
        ],
        "answer": "E",
        "explanation": "Energy sloshes back and forth between the two elements, and the current is maximum at the instant the capacitor is fully discharged, when all of the energy is magnetic: ½CV₀² = ½LI²_max, so I_max = V₀√(C/L) = 12√(5.0 × 10⁻⁶ / 2.0 × 10⁻²) = 0.19 A. Equivalently I_max = ωCV₀ with ω = 1/√(LC) = 3.2 × 10³ rad/s. Choice A is the trap of using the ordinary frequency f = ω/2π ≈ 5.0 × 10² Hz in place of the angular frequency ω."
      },

      // [14] Induction & Maxwell
      {
        "question": "A parallel-plate capacitor in vacuum has circular plates of radius 5.0 cm separated by a very small gap. It is being charged by a constant current of 2.0 A, and the charge remains uniformly distributed over the plates so that edge effects may be neglected. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the magnitude of the magnetic field at a point in the gap midway between the plates and 2.0 cm from the central axis is most nearly",
        "choices": [
          "8.0 × 10⁻⁷ T",
          "3.2 × 10⁻⁶ T",
          "8.0 × 10⁻⁶ T",
          "2.0 × 10⁻⁵ T",
          "3.2 × 10⁻⁵ T"
        ],
        "answer": "B",
        "explanation": "There is no conduction current in the gap, so the Ampère-Maxwell law ∮B·dl = μ₀ε₀ dΦ_E/dt applies with the displacement current spread uniformly over the plate area: the amount enclosed by a circle of radius r is I(r²/R²). Hence B(2πr) = μ₀I r²/R², so B = μ₀Ir/(2πR²) = (4π × 10⁻⁷)(2.0)(0.020)/(2π(0.050)²) = 3.2 × 10⁻⁶ T. Note that B grows linearly with r inside the gap, exactly as it does inside a uniform current-carrying wire. The trap is 2.0 × 10⁻⁵ T, which comes from enclosing the full 2.0 A as though the point were outside a straight wire."
      },

      // [15] EM waves & radiation
      {
        "question": "Sunlight is scattered by air molecules, each of which responds to the incident light as a small induced electric dipole oscillating at the frequency of the light. The ratio of the scattered intensity at a wavelength of 450 nm to that at 650 nm, for equal incident intensities, is most nearly",
        "choices": [
          "0.23",
          "1.4",
          "2.1",
          "3.0",
          "4.4"
        ],
        "answer": "E",
        "explanation": "The power radiated by an oscillating dipole of fixed moment amplitude goes as ω⁴, so for a driven molecular dipole the scattered intensity scales as ω⁴ ∝ λ⁻⁴. Hence the ratio is (650/450)⁴ = (1.44)⁴ ≈ 4.4, which is why the sky is blue. Choice C, 2.1, is the trap of using ω² — the Larmor formula involves the square of the acceleration, and for harmonic motion the acceleration itself already carries a factor ω², giving ω⁴ overall. Choice A is the same ratio inverted, and choice B uses no power at all beyond the first."
      },

      // [16] Electrostatics
      {
        "question": "A solid, electrically neutral conductor occupies the sphere of radius R centred on the origin. A spherical cavity of radius R/4, centred at the point (R/2, 0, 0), is hollowed out of the conductor, and a point charge +q is fixed at the centre of that cavity. Point P lies on the y-axis at y = 2R. The electric field at P is",
        "choices": [
          "q/(4πε₀R²), directed along +y",
          "q/(16πε₀R²), directed along +y",
          "q/(16πε₀R²), directed along the line from the cavity centre to P",
          "q/(17πε₀R²), directed along the line from the cavity centre to P",
          "zero, because the conductor screens the cavity charge"
        ],
        "answer": "B",
        "explanation": "The charge +q induces −q on the cavity wall, and since the conductor is neutral it carries +q on its outer surface. The conducting material screens all information about where the cavity sits, so that outer charge spreads uniformly over the sphere of radius R, and outside the conductor the field is exactly that of a point charge q at the origin: E = q/(4πε₀(2R)²) = q/(16πε₀R²), radially outward, hence along +y at P. Choices C and D carry the trap of measuring the distance from the off-centre cavity (giving 4.25R² and a tilted direction), which would be right only if the conductor were not there. Choice E confuses screening of the field inside the metal with screening of the net charge, which cannot happen: a Gaussian surface enclosing the whole conductor still encloses q."
      },

      // [17] Magnetostatics
      {
        "question": "A flat circular coil of 100 turns and radius 5.0 cm carries a current of 2.0 A. The coil is placed in a uniform magnetic field of magnitude 0.30 T, oriented so that the plane of the coil is parallel to the field. The magnitude of the torque on the coil is most nearly",
        "choices": [
          "0",
          "4.7 × 10⁻³ N·m",
          "0.24 N·m",
          "0.47 N·m",
          "1.9 N·m"
        ],
        "answer": "D",
        "explanation": "The magnetic dipole moment of the coil is m = NIA = (100)(2.0)π(0.050)² = 1.57 A·m², directed normal to the plane of the coil. The torque is τ = m × B, of magnitude mB sin θ where θ is the angle between m and B; with the plane of the coil parallel to B the normal is perpendicular to B, so θ = 90° and the torque is a maximum, τ = mB = (1.57)(0.30) ≈ 0.47 N·m. Choice A is the trap for reading \"plane parallel to the field\" as the aligned configuration — the torque vanishes instead when the plane of the coil is perpendicular to B, so that m is parallel to B. Choice B drops the factor N, and choice E uses the 5.0 cm as a diameter-sized radius error, A = π(0.10)²."
      },

      // [18] Circuits
      {
        "question": "An ideal AC source of rms voltage 120 V and frequency 60 Hz drives a resistor of 30 Ω in series with a pure inductor whose reactance at that frequency is 40 Ω. The average power delivered to the circuit is most nearly",
        "choices": [
          "170 W",
          "240 W",
          "290 W",
          "350 W",
          "480 W"
        ],
        "answer": "A",
        "explanation": "The impedance magnitude is Z = √(R² + X_L²) = √(30² + 40²) = 50 Ω, so I_rms = 120/50 = 2.4 A. Only the resistor dissipates power: P_avg = I²_rms R = (2.4)²(30) = 1.7 × 10² W, which is also V_rms I_rms cos φ with the power factor cos φ = R/Z = 0.60. Choice C is V_rms I_rms = 288 W, obtained by forgetting the power factor, and choice E is V²_rms/R = 480 W, which ignores the inductive reactance altogether."
      },

      // [19] Induction & Maxwell
      {
        "question": "A long air-core solenoid has 1000 turns per meter and a cross-sectional radius of 2.0 cm, and it carries a steady current of 5.0 A. Taking μ₀ = 4π × 10⁻⁷ T·m/A and neglecting both end effects and the field outside the winding, the energy stored in the magnetic field per unit length of the solenoid is most nearly",
        "choices": [
          "2.5 × 10⁻³ J/m",
          "4.9 × 10⁻³ J/m",
          "9.9 × 10⁻³ J/m",
          "2.0 × 10⁻² J/m",
          "3.9 × 10⁻² J/m"
        ],
        "answer": "D",
        "explanation": "Inside the solenoid B = μ₀nI = (4π × 10⁻⁷)(1000)(5.0) = 6.3 × 10⁻³ T, uniform, and the magnetic energy density is u = B²/2μ₀ = 16 J/m³. Multiplying by the cross-sectional area πa² = 1.3 × 10⁻³ m² gives 2.0 × 10⁻² J per meter of length. The same number follows from L/ℓ = μ₀n²πa² = 1.6 × 10⁻³ H/m together with U = ½LI². Choice (E) is the trap for dropping the factor of ½ (using B²/μ₀), and choice (B) is what you get by using 1.0 cm — the radius halved — in the area."
      },

      // [20] EM waves & radiation
      {
        "question": "A hollow rectangular waveguide with perfectly conducting walls has an evacuated interior of cross section 2.0 cm by 1.0 cm. Taking c = 3.0 × 10⁸ m/s, the lowest frequency that can propagate down the guide is most nearly",
        "choices": [
          "zero, since a hollow guide supports a TEM mode at all frequencies",
          "3.8 GHz",
          "7.5 GHz",
          "15 GHz",
          "30 GHz"
        ],
        "answer": "C",
        "explanation": "A hollow guide with a single conductor cannot carry a TEM mode, because a transverse electrostatic field pattern would require a nonzero potential difference between separate conductors; hence choice A is wrong and every mode has a nonzero cutoff. The lowest cutoff belongs to TE₁₀, with a half-wavelength fitting across the wide dimension: f_c = c/2a = (3.0 × 10⁸)/(0.040) = 7.5 GHz. Choice D is the trap of using the short dimension b = 1.0 cm instead of the wide one, which gives the cutoff of TE₀₁, a higher mode. Below 7.5 GHz the axial wave number is imaginary and the fields decay exponentially rather than propagate."
      },

      // [21] Electrostatics
      {
        "question": "A sphere of radius 0.050 m contains no free charge and is uniformly polarized, the polarization vector P having magnitude 3.0 × 10⁻⁸ C/m² and pointing in the +z direction. Take ε₀ = 8.85 × 10⁻¹² F/m. The electric field at the centre of the sphere is most nearly",
        "choices": [
          "0",
          "1.1 × 10³ V/m, directed parallel to P",
          "1.7 × 10³ V/m, directed antiparallel to P",
          "1.1 × 10³ V/m, directed antiparallel to P",
          "3.4 × 10³ V/m, directed antiparallel to P"
        ],
        "answer": "D",
        "explanation": "A uniformly polarized sphere carries bound surface charge σ_b = P·n̂ = P cos θ, positive on the +z cap and negative on the −z cap, and no bound volume charge because ∇·P = 0. Superposing two uniformly charged spheres slightly displaced from each other gives an interior field that is uniform and equal to −P/(3ε₀), so its magnitude is (3.0 × 10⁻⁸)/(3 × 8.85 × 10⁻¹²) ≈ 1.1 × 10³ V/m, pointing antiparallel to P as a depolarizing field. The radius is a deliberate red herring: the interior field does not depend on the size of the sphere. Choice E is P/ε₀, the parallel-plate answer, which omits the depolarization factor 1/3 appropriate to a sphere, and choice B has the sign of the depolarizing field backwards."
      },

      // [22] Magnetostatics
      {
        "question": "Which of the following statements about magnetic materials is NOT true?",
        "choices": [
          "The magnetic susceptibility of a diamagnetic material is negative.",
          "A paramagnetic sample placed in a nonuniform magnetic field is drawn toward the region of stronger field.",
          "At a fixed applied field, the magnetization of a paramagnetic material decreases as the temperature is raised.",
          "A ferromagnetic material can retain a magnetization after the applied field is removed.",
          "Diamagnetism arises from the partial alignment of permanent atomic magnetic moments along the applied field."
        ],
        "answer": "E",
        "explanation": "Statement E describes paramagnetism, not diamagnetism: paramagnets have permanent atomic moments that the applied field partially aligns, giving χ > 0 and a magnetization that falls off as 1/T (Curie's law), which is statement C. Diamagnetism is instead an induced, Lenz's-law response of the electronic orbits, present in all matter, producing a moment opposed to the applied field and hence χ < 0 (statement A), so a diamagnet is pushed toward weaker field while a paramagnet is pulled toward stronger field (statement B). Ferromagnets exhibit hysteresis and therefore remanence, statement D. The trap is statement A, which looks suspicious because a negative susceptibility seems unphysical, but it is precisely the defining signature of diamagnetism."
      },

      // [23] Circuits
      {
        "question": "A 4.0 H inductor, a 20 Ω resistor, a switch, and a 10 V battery of negligible internal resistance are all connected in series. The switch is closed at t = 0. The time required for the current to reach one-half of its final steady-state value is most nearly",
        "choices": [
          "0.035 s",
          "0.069 s",
          "0.14 s",
          "0.20 s",
          "0.28 s"
        ],
        "answer": "C",
        "explanation": "The current rises as I(t) = (ε/R)(1 − e^(−t/τ)) with τ = L/R = 4.0/20 = 0.20 s, so I = I_final/2 requires e^(−t/τ) = ½, i.e. t = τ ln 2 = 0.20(0.693) = 0.14 s. The emf of 10 V is a red herring: the half-rise time depends only on L and R. Choice D is the time constant itself, which is the time to reach 1 − 1/e ≈ 63% of the final current, not 50%, and choice B comes from confusing the exponential with a linear rise (half of τ ln 2)."
      },

      // [24] Induction & Maxwell
      {
        "question": "A very long solenoid of cross-sectional radius a has n turns per unit length. A secondary coil of N turns and radius b, with b > a, is wound tightly around the middle of the solenoid and is coaxial with it. The mutual inductance of the two windings is",
        "choices": [
          "μ₀nNπa²",
          "μ₀nNπb²",
          "μ₀nNπab",
          "μ₀nNπ(b² − a²)",
          "μ₀Nπa²"
        ],
        "answer": "A",
        "explanation": "Drive the solenoid with current I: its interior field is uniform, B = μ₀nI, and the field outside a long solenoid is negligible. Each of the N turns of the secondary therefore links only the flux μ₀nIπa² that is confined to the solenoid's cross section, so the total linkage is Nμ₀nIπa² and M = μ₀nNπa². Choice (B) is the trap: the secondary's own area πb² is irrelevant because no flux threads the region between the two windings. The result also illustrates M₁₂ = M₂₁ — computing the flux the secondary sends through the solenoid instead is far harder but must give the same answer."
      },

      // [25] EM waves & radiation
      {
        "question": "At a frequency of 60 Hz the skin depth in copper is about 8.5 mm. For the same copper at 6.0 MHz, the skin depth is most nearly",
        "choices": [
          "8.5 × 10⁻⁸ m",
          "2.7 × 10⁻⁶ m",
          "8.5 × 10⁻⁶ m",
          "2.7 × 10⁻⁵ m",
          "8.5 × 10⁻⁴ m"
        ],
        "answer": "D",
        "explanation": "For a good conductor the skin depth is δ = √(2/μ₀σω), so at fixed conductivity δ ∝ 1/√f. The frequency is raised by a factor of 10⁵, so δ falls by √(10⁵) ≈ 3.2 × 10², giving δ ≈ 8.5 × 10⁻³/3.2 × 10² ≈ 2.7 × 10⁻⁵ m, about 27 μm. Choice A is the trap of taking δ ∝ 1/f and dividing by the full factor of 10⁵. The result is why high-frequency currents flow only in a thin surface layer, so that the effective resistance of a wire rises with frequency."
      }

    ]
  },

  {
    "name": "Practice Test 1",
    "added": "2026-08-13",
    "category": "practice",
    "cards": [

      // [CM/work-energy]
      {
        "question": "A block slides onto a horizontal surface at 6.0 m/s. The coefficient of kinetic friction grows with distance as μ = αx, where α = 0.20 m⁻¹ and x is measured from the entry point. Taking g = 9.8 m/s², the distance the block slides before stopping is most nearly",
        "choices": [
          "2.1 m",
          "3.0 m",
          "4.3 m",
          "6.1 m",
          "9.2 m"
        ],
        "answer": "C",
        "explanation": "The friction force is αmgx, so the work-energy theorem gives ½mv₀² = ∫₀^d αmgx dx = ½αmgd². Hence d = v₀/√(αg) = 6.0/√(0.20 × 9.8) = 6.0/1.4 = 4.3 m. Note the mass cancels, so it is never needed. The 9.2 m distractor is what you get by treating α as a constant coefficient μ = 0.20 and using v₀²/(2μg), forgetting that the friction builds up from zero."
      },

      // [QM/uncertainty principle]
      {
        "question": "An electron is confined to a region of nuclear size, Δx = 5.0 × 10⁻¹⁵ m. Estimating its momentum by Δp ≈ ħ/Δx with ħ = h/2π, h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s, e = 1.6 × 10⁻¹⁹ C and m_e = 9.11 × 10⁻³¹ kg, the minimum energy of the electron is most nearly",
        "choices": [
          "1.5 keV",
          "20 keV",
          "4.0 MeV",
          "40 MeV",
          "1.5 GeV"
        ],
        "answer": "D",
        "explanation": "ħ/Δx gives pc = ħc/Δx ≈ (1.05 × 10⁻³⁴ × 3.0 × 10⁸)/(5.0 × 10⁻¹⁵ × 1.6 × 10⁻¹⁹ eV) ≈ 4.0 × 10⁷ eV = 40 MeV. Since pc = 40 MeV vastly exceeds m_ec² = 0.51 MeV, the electron is ultrarelativistic and E ≈ pc = 40 MeV. The 1.5 GeV distractor comes from applying the nonrelativistic p²/2m, which is illegitimate here. This estimate is the standard argument that electrons cannot be nuclear constituents."
      },

      // [EM/image charges]
      {
        "question": "A point charge +q is held a distance d from an infinite grounded conducting plane. The work that an external agent must do to move the charge slowly out to infinity is",
        "choices": [
          "q²/(16πε₀d)",
          "q²/(8πε₀d)",
          "q²/(4πε₀d)",
          "q²/(32πε₀d)",
          "zero, because the plane is grounded"
        ],
        "answer": "A",
        "explanation": "The attractive force on the charge is that of an image −q at distance 2d, F = q²/(4πε₀(2z)²) at height z. The external work is ∫_d^∞ q²/(16πε₀z²) dz = q²/(16πε₀d). The q²/(8πε₀d) distractor is the interaction energy of a genuine charge pair separated by 2d; it is wrong here because the image is not a real charge and moves as the charge moves, which costs exactly half as much. Grounding does not make the energy vanish, since real induced charge is attracted to q."
      },

      // [TS/heat conduction]
      {
        "question": "Two rods of equal length and equal cross-sectional area are joined end to end, with their sides insulated. The free end of rod 1 (thermal conductivity k) is held at 100 °C and the free end of rod 2 (thermal conductivity 3k) is held at 0 °C. In the steady state, the temperature of the junction is most nearly",
        "choices": [
          "12 °C",
          "25 °C",
          "50 °C",
          "67 °C",
          "75 °C"
        ],
        "answer": "B",
        "explanation": "In steady state the same heat current flows through both rods: k(100 − T)/L = 3k(T − 0)/L, so 100 − T = 3T and T = 25 °C. The junction sits close to the end of the better conductor, because the better conductor supports the smaller temperature drop. The 75 °C distractor comes from inverting the ratio, i.e. assigning the larger drop to the more conductive rod; 50 °C ignores the conductivity difference entirely."
      },

      // [OW/polarization]
      {
        "question": "Sunlight strikes the flat surface of a still pond of index of refraction 1.33. The angle of incidence at which the reflected light is completely linearly polarized is most nearly",
        "choices": [
          "33°",
          "37°",
          "49°",
          "53°",
          "57°"
        ],
        "answer": "D",
        "explanation": "Complete polarization on reflection occurs at Brewster's angle, tan θ_B = n₂/n₁ = 1.33, so θ_B = 53°. At this angle the reflected and refracted rays are perpendicular and the component polarized in the plane of incidence cannot be radiated into the reflected direction. The 49° distractor is the critical angle for total internal reflection, arcsin(1/1.33), which applies to light going the other way and is a different phenomenon; 37° is the complement of the correct answer."
      },

      // [CM/rotational dynamics]
      {
        "question": "A uniform disk of radius R is spun about its horizontal symmetry axis to angular speed ω₀ and then gently set down on a floor with coefficient of kinetic friction μ, its center initially at rest. When the disk finally rolls without slipping, the speed of its center is",
        "choices": [
          "0",
          "ω₀R/4",
          "ω₀R/3",
          "ω₀R/2",
          "2ω₀R/3"
        ],
        "answer": "C",
        "explanation": "Friction acts forward, so v = μgt, while the torque −μmgR about the center gives ω = ω₀ − 2μgt/R for I = ½mR². Rolling begins when v = ωR: μgt = ω₀R − 2μgt, so v = ω₀R/3. Equivalently, angular momentum about the contact line is conserved: ½mR²ω₀ = (3/2)mR²ω_f. The coefficient μ is a red herring — it sets how long the slipping lasts but not the final speed. The ω₀R/2 distractor comes from equating initial and final kinetic energies, but sliding friction dissipates energy."
      },

      // [QM/harmonic oscillator]
      {
        "question": "For the ground state of a one-dimensional quantum harmonic oscillator of angular frequency ω, the expectation value of the potential energy is",
        "choices": [
          "0",
          "¼ħω",
          "½ħω",
          "¾ħω",
          "ħω"
        ],
        "answer": "B",
        "explanation": "The virial theorem for a quadratic potential gives ⟨T⟩ = ⟨V⟩, and their sum is the ground-state energy ½ħω, so ⟨V⟩ = ¼ħω. Direct evaluation with ⟨x²⟩ = ħ/2mω gives ½mω²⟨x²⟩ = ¼ħω, confirming it. The ½ħω distractor is the total energy, chosen by students who forget that half of the zero-point energy is kinetic; 0 would be the classical ground-state value for a particle sitting at the minimum."
      },

      // [SP/fission & fusion]
      {
        "question": "In the reaction ²H + ³H → ⁴He + n the masses, in unified mass units, are 2.014102, 3.016049, 4.002603 and 1.008665, and 1 u is equivalent to 931.5 MeV. The energy released is most nearly",
        "choices": [
          "1.8 MeV",
          "3.5 MeV",
          "14 MeV",
          "18 MeV",
          "176 MeV"
        ],
        "answer": "D",
        "explanation": "The mass defect is (2.014102 + 3.016049) − (4.002603 + 1.008665) = 0.018883 u, and 0.018883 × 931.5 = 17.6 ≈ 18 MeV. The 14 MeV and 3.5 MeV distractors are the individual kinetic energies carried off by the neutron and the alpha particle respectively; the question asks for the total, which is their sum. The 176 MeV value is a misplaced decimal, and 176–200 MeV is the scale for fission, not fusion."
      },

      // [EM/biot-savart & ampere's law]
      {
        "question": "A long solenoid has 5,000 turns per meter and carries a steady current of 2.0 A. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the magnitude of the magnetic field on the axis at the very end of the solenoid is most nearly",
        "choices": [
          "3.1 mT",
          "6.3 mT",
          "13 mT",
          "25 mT",
          "63 mT"
        ],
        "answer": "B",
        "explanation": "Deep inside a long solenoid B = μ₀nI = 4π × 10⁻⁷ × 5000 × 2.0 = 1.26 × 10⁻² T, but at the end face only half the solid angle of turns contributes, so B = ½μ₀nI = 6.3 mT. This factor of two follows immediately from superposing two half-infinite solenoids to build the infinite one. The 13 mT distractor is the interior value, applied where it does not hold."
      },

      // [SR/invariant mass]
      {
        "question": "Two photons, each of energy E, travel in directions that are perpendicular to each other. The invariant mass of the two-photon system is",
        "choices": [
          "0",
          "E/c²",
          "√2 E/c²",
          "2E/c²",
          "4E/c²"
        ],
        "answer": "C",
        "explanation": "Total energy is 2E and total momentum has magnitude √((E/c)² + (E/c)²) = √2 E/c, since the momenta are perpendicular. Then M²c⁴ = (2E)² − (√2E)² = 2E², so M = √2 E/c². The 0 distractor is the trap: each photon individually is massless, but invariant mass is not additive, and any pair of non-parallel photons has nonzero invariant mass. The 2E/c² answer would require the two momenta to cancel, i.e. photons moving oppositely."
      },

      // [CM/momentum & collisions]
      {
        "question": "A ball moving horizontally at speed v strikes head-on a massive wall that is itself moving toward the ball at constant speed u. The collision is elastic and the wall's motion is unaffected. The speed of the ball immediately after the collision is",
        "choices": [
          "v",
          "v + u",
          "2u − v",
          "2v + u",
          "v + 2u"
        ],
        "answer": "E",
        "explanation": "Work in the wall's frame, where the wall is at rest and the ball approaches at v + u. An elastic bounce off an infinitely massive wall reverses that relative speed, so the ball leaves at v + u in the wall frame. Transforming back to the ground frame adds u again, giving v + 2u. The v + u distractor is what you get by forgetting one of the two frame transformations, and v is the answer for a stationary wall — this is exactly how a tennis racket adds speed to a ball."
      },

      // [QM/operators & commutators]
      {
        "question": "With p = −iħ ∂/∂x, the commutator [x, p²] is equal to",
        "choices": [
          "2iħp",
          "−2iħp",
          "iħp",
          "2iħp²",
          "0"
        ],
        "answer": "A",
        "explanation": "Use [x, p²] = p[x, p] + [x, p]p and [x, p] = iħ, giving 2iħp. Checking on a test function: x p²ψ − p²(xψ) = −ħ²(xψ″ − (xψ)″) = 2ħ²ψ′ = 2iħ(pψ). The 0 distractor tempts students who recall that x commutes with itself and forget that any power of p still fails to commute with x. The sign distractor −2iħp comes from writing [x, p] = −iħ."
      },

      // [LM/error propagation]
      {
        "question": "The value of g is obtained from a pendulum using g = 4π²L/T². The length L is measured to 1.0 percent and the period T to 2.0 percent, the two errors being independent. The fractional uncertainty in g is most nearly",
        "choices": [
          "1.0 percent",
          "2.2 percent",
          "3.0 percent",
          "4.1 percent",
          "5.0 percent"
        ],
        "answer": "D",
        "explanation": "For a product of powers, fractional errors add in quadrature after being weighted by the exponents: σ_g/g = √((σ_L/L)² + (2σ_T/T)²) = √(1.0² + 4.0²) = 4.1 percent. The dominant term is the period, precisely because it enters squared. The 2.2 percent distractor, √(1² + 2²), is the common error of omitting the factor of 2 from the exponent; 3.0 percent comes from adding the fractional errors linearly."
      },

      // [TS/phase transitions & latent heat]
      {
        "question": "One kilogram of ice at 0 °C is melted completely to water at 0 °C at atmospheric pressure. The latent heat of fusion is 3.34 × 10⁵ J/kg. The entropy change of the H₂O is most nearly",
        "choices": [
          "0",
          "1.2 × 10³ J/K",
          "1.2 × 10⁴ J/K",
          "3.3 × 10⁵ J/K",
          "3.3 × 10⁸ J/K"
        ],
        "answer": "B",
        "explanation": "Melting is isothermal and reversible at the melting point, so ΔS = Q/T = mL/T = 3.34 × 10⁵/273 = 1.2 × 10³ J/K, using the absolute temperature 273 K. The 3.3 × 10⁵ J/K distractor is the latent heat itself, i.e. dividing by nothing; using 0 °C rather than 273 K in the denominator gives a divergence, which is the standard reminder that entropy requires kelvins. The entropy of the H₂O rises because the liquid is the more disordered phase."
      },

      // [EM/gauss's law]
      {
        "question": "Two infinite parallel sheets of charge lie in the planes z = 0 and z = d. The sheet at z = 0 carries uniform surface charge density +σ and the sheet at z = d carries −2σ. The magnitude of the electric field at points between the sheets is",
        "choices": [
          "3σ/2ε₀",
          "σ/2ε₀",
          "σ/ε₀",
          "3σ/ε₀",
          "zero"
        ],
        "answer": "A",
        "explanation": "Each infinite sheet produces a uniform field of magnitude |σ|/2ε₀ independent of distance, directed away from a positive sheet and toward a negative one. Between the sheets both contributions point in the +z direction, giving σ/2ε₀ + 2σ/2ε₀ = 3σ/2ε₀. Outside, the two contributions partly cancel and the magnitude is σ/2ε₀ on both sides. The σ/ε₀ distractor is the familiar parallel-plate result for equal and opposite charges, which does not apply when the magnitudes differ."
      },

      // [QM/bohr model]
      {
        "question": "In the Bohr model of hydrogen, the ratio of the orbital period of the electron in the n = 3 state to its orbital period in the n = 1 state is",
        "choices": [
          "3",
          "9",
          "27",
          "81",
          "243"
        ],
        "answer": "C",
        "explanation": "Bohr orbits have r ∝ n² and orbital speed v ∝ 1/n, so the period 2πr/v scales as n³, giving 3³ = 27. Equivalently, Kepler's third law applied to the Coulomb force gives T² ∝ r³. The 9 distractor is the ratio of the orbit radii, and 81 is the ratio of the level energies inverted; each corresponds to stopping one power short or long of the correct scaling."
      },

      // [CM/central force & orbits]
      {
        "question": "A satellite of mass m is in a circular orbit of radius r about a planet of mass M. The additional energy that must be supplied to place it in a circular orbit of radius 2r is",
        "choices": [
          "GMm/8r",
          "GMm/4r",
          "GMm/3r",
          "GMm/2r",
          "GMm/r"
        ],
        "answer": "B",
        "explanation": "For a circular orbit the total energy is E = −GMm/2r, so E(2r) − E(r) = −GMm/4r + GMm/2r = GMm/4r. The GMm/2r distractor is the change in potential energy alone; it is wrong because the satellite also slows down in the higher orbit, and the kinetic energy it gives back pays for half of the climb. This factor of two is the virial theorem for an inverse-square force."
      },

      // [OW/group & phase velocity]
      {
        "question": "Deep-water gravity waves obey the dispersion relation ω = √(gk), where g is the acceleration of gravity and k the wave number. Which relation between the group velocity v_g and the phase velocity v_p holds for these waves?",
        "choices": [
          "v_g = 4v_p",
          "v_g = 2v_p",
          "v_g = v_p",
          "v_g = v_p/4",
          "v_g = v_p/2"
        ],
        "answer": "E",
        "explanation": "The phase velocity is ω/k = √(g/k), while the group velocity is dω/dk = ½√(g/k), so v_g = v_p/2. Individual crests therefore outrun the wave group and vanish at its front edge, which is what one sees in the wake of a ship. The v_g = v_p distractor holds only for a nondispersive medium such as an ideal string or vacuum light, where ω ∝ k."
      },

      // [EM/RLC & AC circuits]
      {
        "question": "A series RLC circuit with L = 10 mH, C = 1.0 μF and R = 5.0 Ω is driven at its resonant frequency by a source of amplitude 10 V. The amplitude of the voltage across the capacitor is most nearly",
        "choices": [
          "1.0 V",
          "10 V",
          "50 V",
          "200 V",
          "2,000 V"
        ],
        "answer": "D",
        "explanation": "At resonance ω₀ = 1/√(LC) = 1.0 × 10⁴ rad/s and the impedance is purely resistive, so the current amplitude is 10/5.0 = 2.0 A. The capacitor reactance is 1/ω₀C = 100 Ω, giving 200 V across it — a factor Q = ω₀L/R = 20 above the source. The 10 V distractor assumes the capacitor cannot exceed the source voltage; it can, because the inductor voltage is equal and opposite, so only their sum is limited."
      },

      // [QM/spin & pauli matrices]
      {
        "question": "A beam of spin-½ atoms is prepared in the state S_z = +ħ/2. It passes through an analyzer that transmits only atoms with S_x = +ħ/2, and that transmitted beam then enters an analyzer measuring S_z. The fraction of the original beam that emerges with S_z = −ħ/2 is",
        "choices": [
          "0",
          "1/8",
          "1/4",
          "1/2",
          "1"
        ],
        "answer": "C",
        "explanation": "|S_z = +⟩ is an equal superposition of the S_x eigenstates, so half the beam passes the S_x analyzer. That output is a pure S_x = + state, itself an equal superposition of S_z eigenstates, so half of it is found with S_z = −ħ/2: the fraction is ½ × ½ = 1/4. The 0 distractor is the classical intuition that the atoms 'still have' S_z = +ħ/2; the intermediate S_x measurement destroys that information, since S_x and S_z do not commute."
      },

      // [SP/band theory & semiconductors]
      {
        "question": "Pure silicon has an energy gap of 1.1 eV between the valence and conduction bands. Taking h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s and e = 1.6 × 10⁻¹⁹ C, the longest wavelength of light that can excite an electron across the gap is most nearly",
        "choices": [
          "5.6 × 10⁻⁷ m",
          "1.1 × 10⁻⁶ m",
          "2.2 × 10⁻⁶ m",
          "1.1 × 10⁻⁵ m",
          "1.1 × 10⁻⁴ m"
        ],
        "answer": "B",
        "explanation": "The threshold photon energy equals the gap, so λ_max = hc/E_g = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(1.1 × 1.6 × 10⁻¹⁹) = 1.1 × 10⁻⁶ m, in the near infrared. This is why silicon detectors respond to the whole visible range but go blind beyond about 1.1 μm. The 5.6 × 10⁻⁷ m distractor comes from doubling the gap energy, and treating 1.1 eV as 1.1 J-scale quantities shifts the decade."
      },

      // [CM/statics]
      {
        "question": "A uniform beam of mass M and length L is attached to a wall by a hinge at one end and held horizontal by a straight cable running from its far end up to the wall, making an angle of 30° with the beam. The magnitude of the horizontal force exerted by the hinge on the beam is",
        "choices": [
          "0",
          "0.29Mg",
          "0.50Mg",
          "0.58Mg",
          "0.87Mg"
        ],
        "answer": "E",
        "explanation": "Torques about the hinge give T sin30° × L = Mg × L/2, so T = Mg. The cable's horizontal pull is T cos30° = 0.87Mg toward the wall, and the hinge must supply an equal outward force. The 0.50Mg distractor is the vertical force bookkeeping (the hinge carries half the weight) mistaken for the horizontal one; 0.58Mg = Mg/√3 comes from using tan30° in place of cos30° after solving for the tension."
      },

      // [TS/kinetic theory]
      {
        "question": "A container holding H₂ (molar mass 2 g) and a container holding O₂ (molar mass 32 g) are at the same temperature and pressure, and each leaks through an identical small hole. The ratio of the effusion rate of H₂ to that of O₂ is",
        "choices": [
          "1/4",
          "1/2",
          "2",
          "4",
          "16"
        ],
        "answer": "D",
        "explanation": "The effusion rate is proportional to the mean molecular speed at fixed number density, and v ∝ 1/√M, so the ratio is √(32/2) = 4. The 16 distractor comes from using the mass ratio itself rather than the square root, which is the same error as forgetting that kinetic energy, not speed, is what equipartition fixes. This √M scaling is the basis of gaseous isotope separation."
      },

      // [QM/potential barrier & tunneling]
      {
        "question": "An electron of energy 5.0 eV is incident on a rectangular barrier of height 10.0 eV and width 0.20 nm. Using T ≈ e^(−2κL) with κ = √(2m(V₀ − E))/ħ, ħ = 1.05 × 10⁻³⁴ J·s, m_e = 9.11 × 10⁻³¹ kg and e = 1.6 × 10⁻¹⁹ C, the transmission probability is of order",
        "choices": [
          "10⁻¹",
          "10⁻²",
          "10⁻⁴",
          "10⁻⁶",
          "10⁻⁸"
        ],
        "answer": "B",
        "explanation": "With V₀ − E = 5.0 eV = 8.0 × 10⁻¹⁹ J, κ = √(2 × 9.11 × 10⁻³¹ × 8.0 × 10⁻¹⁹)/1.05 × 10⁻³⁴ = 1.1 × 10¹⁰ m⁻¹, so 2κL = 4.6 and T ≈ e^(−4.6) ≈ 1 × 10⁻². Tunneling is appreciable here only because the barrier is a fraction of a nanometer wide. Omitting the factor of 2 in the exponent gives e^(−2.3) ≈ 10⁻¹, the first distractor; doubling the width instead would land near 10⁻⁴."
      },

      // [EM/magnetic force on charges/currents]
      {
        "question": "A proton of speed 1.0 × 10⁶ m/s enters a uniform magnetic field of magnitude 0.10 T, its velocity making an angle of 30° with the field. Taking m_p = 1.67 × 10⁻²⁷ kg and e = 1.6 × 10⁻¹⁹ C, the pitch of the resulting helix (the advance along the field per revolution) is most nearly",
        "choices": [
          "0.16 m",
          "0.33 m",
          "0.57 m",
          "0.66 m",
          "1.3 m"
        ],
        "answer": "C",
        "explanation": "The cyclotron period 2πm/qB = 6.6 × 10⁻⁷ s depends only on the perpendicular motion, while the component along B is unaccelerated: pitch = v cos30° × T = 8.7 × 10⁵ × 6.6 × 10⁻⁷ = 0.57 m. The 0.33 m distractor uses v sin30°, the component that sets the helix radius rather than the advance; 0.66 m uses the full speed, ignoring the 30° projection."
      },

      // [SR/relativistic doppler]
      {
        "question": "A spacecraft approaching Earth at 0.60c transmits a radio signal that has frequency 100 MHz in the spacecraft's rest frame. The frequency received on Earth is most nearly",
        "choices": [
          "50 MHz",
          "80 MHz",
          "125 MHz",
          "200 MHz",
          "250 MHz"
        ],
        "answer": "D",
        "explanation": "For an approaching source the relativistic Doppler formula gives f = f₀√((1 + β)/(1 − β)) = 100 × √(1.6/0.4) = 100 × 2 = 200 MHz. The 250 MHz distractor is the nonrelativistic result f₀/(1 − β), which omits the time-dilation factor; 125 MHz is f₀γ, i.e. time dilation with no account of the shrinking travel distance; 50 MHz would be the receding case."
      },

      // [CM/moment of inertia]
      {
        "question": "Four uniform thin rods, each of length a and mass M/4, are joined end to end to form a square frame of total mass M lying in the xy-plane with its center at the origin. The moment of inertia of the frame about the z-axis is",
        "choices": [
          "Ma²/12",
          "Ma²/6",
          "Ma²/3",
          "Ma²/2",
          "2Ma²/3"
        ],
        "answer": "C",
        "explanation": "Each rod contributes (1/12)(M/4)a² about its own center plus (M/4)(a/2)² from the parallel-axis shift, i.e. Ma²/48 + Ma²/16 = Ma²/12; four rods give Ma²/3. The Ma²/6 distractor is the moment of inertia of a uniform square plate of the same mass and side, which is smaller because a plate concentrates mass near the axis while the frame puts it all out at the edges."
      },

      // [QM/zeeman & stark effects]
      {
        "question": "An atomic level with orbital angular momentum quantum number l = 1 is placed in a uniform magnetic field of 1.0 T. Taking the magnetic moment scale to be eħ/2m_e with e = 1.6 × 10⁻¹⁹ C, ħ = 1.05 × 10⁻³⁴ J·s and m_e = 9.11 × 10⁻³¹ kg, the energy difference between adjacent m_l sublevels is most nearly",
        "choices": [
          "5.8 × 10⁻⁷ eV",
          "5.8 × 10⁻⁶ eV",
          "2.9 × 10⁻⁵ eV",
          "5.8 × 10⁻⁵ eV",
          "1.2 × 10⁻⁴ eV"
        ],
        "answer": "D",
        "explanation": "The splitting between neighbouring m_l values is μ_B B, with μ_B = eħ/2m_e = 1.6 × 10⁻¹⁹ × 1.05 × 10⁻³⁴/(2 × 9.11 × 10⁻³¹) = 9.3 × 10⁻²⁴ J/T. Dividing by e converts to 5.8 × 10⁻⁵ eV per tesla. The 1.2 × 10⁻⁴ eV distractor is the full spread from m_l = +1 to m_l = −1, which is twice the adjacent spacing. Note how tiny this is beside the electron-volt scale of the transition itself."
      },

      // [LM/digital logic]
      {
        "question": "A two-input logic gate produces an output of 1 if and only if its two inputs are different. This gate is",
        "choices": [
          "an exclusive-OR gate",
          "an AND gate",
          "an OR gate",
          "a NAND gate",
          "a NOR gate"
        ],
        "answer": "A",
        "explanation": "The truth table 00 → 0, 01 → 1, 10 → 1, 11 → 0 is exclusive OR, the sum bit of a binary half adder. Ordinary OR differs only in the 11 case, where it gives 1, and that single row is the trap that catches students who read 'or' in the description without noticing the exclusion. NAND and NOR both output 1 for the 00 input, which fails immediately."
      },

      // [TS/first law & work]
      {
        "question": "A monatomic ideal gas with γ = 5/3 is compressed quasi-statically and adiabatically to half of its initial volume. The factor by which its absolute temperature increases is most nearly",
        "choices": [
          "1.3",
          "1.6",
          "2.0",
          "2.5",
          "3.2"
        ],
        "answer": "B",
        "explanation": "For a quasi-static adiabat TV^(γ−1) is constant, so T_f/T_i = 2^(γ−1) = 2^(2/3) = 1.6. The 3.2 distractor is 2^(5/3), the factor by which the pressure rises; using the full γ instead of γ − 1 is the single most common slip here. A factor of 2.0 would require the temperature to track the volume compression directly, which is not what any adiabat does."
      },

      // [EM/dielectrics]
      {
        "question": "A parallel-plate capacitor has plate area A and plate separation d. A slab of dielectric constant κ and thickness d is inserted so that it fills the gap over exactly half of the plate area, the other half remaining vacuum. The capacitance is now",
        "choices": [
          "ε₀A(1 + κ)/2d",
          "κε₀A/2d",
          "κε₀A/d",
          "2κε₀A/[(1 + κ)d]",
          "ε₀A(1 + κ)/d"
        ],
        "answer": "A",
        "explanation": "The two halves share the same plate-to-plate voltage, so they act as capacitors in parallel: C = ε₀(A/2)/d + κε₀(A/2)/d = ε₀A(1 + κ)/2d. The 2κε₀A/[(1 + κ)d] distractor is the series combination, which would apply if the slab covered the full area but only half the gap thickness — the geometry decides series versus parallel, and here the slab is beside the vacuum, not stacked on it. For κ = 1 the correct expression collapses to ε₀A/d, a useful check."
      },

      // [QM/hydrogen atom]
      {
        "question": "In hydrogen, counting electron spin and ignoring all fine structure, the number of distinct quantum states with principal quantum number n = 3 is",
        "choices": [
          "3",
          "6",
          "9",
          "18",
          "27"
        ],
        "answer": "D",
        "explanation": "For each n there are n² orbital states (l = 0, 1, 2 contributing 1 + 3 + 5 = 9 here), and each admits two spin orientations, giving 2n² = 18. The 9 distractor is the count that forgets spin, and it is exactly the number that would apply to a spinless particle. Notice that all 18 states are degenerate in the pure Coulomb problem, an accidental degeneracy in l that is special to the 1/r potential."
      },

      // [CM/terminal velocity & drag]
      {
        "question": "Two solid spheres made of the same material, of radii r and 2r, fall at terminal speed through a viscous fluid in which the drag force is 6πηrv. Buoyancy is negligible. The ratio of the terminal speed of the larger sphere to that of the smaller is",
        "choices": [
          "√2",
          "2",
          "4",
          "8",
          "16"
        ],
        "answer": "C",
        "explanation": "At terminal speed 6πηrv = mg with m ∝ r³, so v ∝ r³/r = r², and doubling the radius quadruples the terminal speed. The 8 distractor is the mass (or weight) ratio, used by students who forget that the drag coefficient itself grows with radius; 2 is the bare radius ratio. This r² scaling is why fine mist stays suspended in air while raindrops fall fast."
      },

      // [OW/standing waves on strings]
      {
        "question": "A string of linear mass density 5.0 × 10⁻³ kg/m is stretched between two fixed supports 0.50 m apart with a tension of 80 N. Its fundamental frequency of transverse vibration is most nearly",
        "choices": [
          "63 Hz",
          "130 Hz",
          "180 Hz",
          "250 Hz",
          "320 Hz"
        ],
        "answer": "B",
        "explanation": "The wave speed is √(T/μ) = √(80/5.0 × 10⁻³) = 1.3 × 10² m/s, and the fundamental has half a wavelength between fixed ends, so λ = 2L = 1.0 m and f = v/λ = 130 Hz. The 250 Hz distractor takes λ = L, the mistake of putting a full wavelength between the supports; 63 Hz takes λ = 4L, which is the pattern for a string free at one end."
      },

      // [SP/crystal structure & bragg]
      {
        "question": "For the face-centered cubic structure with conventional cubic cell of edge a, consider: I. The conventional cubic cell contains 4 atoms. II. Each atom has 12 nearest neighbors. III. The nearest-neighbor distance is a/√2. Which of these are correct?",
        "choices": [
          "I only",
          "III only",
          "I and II only",
          "II and III only",
          "I, II, and III"
        ],
        "answer": "E",
        "explanation": "The corners contribute 8 × 1/8 = 1 atom and the six face centers 6 × 1/2 = 3, giving 4 atoms per conventional cell. Nearest neighbors run from a corner to the centers of the faces meeting there, a distance √((a/2)² + (a/2)²) = a/√2, and there are 12 such neighbors. All three are correct. Students who answer 'I and II only' typically quote the body-centered nearest-neighbor distance √3a/2 instead."
      },

      // [QM/identical particles]
      {
        "question": "Two identical noninteracting spin-½ particles are placed in the same one-dimensional infinite square well, and the pair is in a spin-triplet state. If E₁ is the single-particle ground-state energy, the lowest possible total energy of the pair is",
        "choices": [
          "2E₁",
          "5E₁",
          "8E₁",
          "10E₁",
          "13E₁"
        ],
        "answer": "B",
        "explanation": "The triplet spin state is symmetric under exchange, so the spatial state must be antisymmetric, which forbids both particles from occupying the same orbital. The lowest allowed configuration is one particle in n = 1 and one in n = 2, giving E₁ + 4E₁ = 5E₁. The 2E₁ distractor puts both particles in n = 1; that is the correct ground state only for the singlet, whose antisymmetric spin part permits a symmetric spatial state."
      },

      // [EM/induction & faraday]
      {
        "question": "A circular conducting ring of radius 5.0 cm lies in a plane perpendicular to a spatially uniform magnetic field whose magnitude is increasing at 0.20 T/s. The magnitude of the induced electric field at points on the ring is most nearly",
        "choices": [
          "1.6 × 10⁻³ V/m",
          "2.5 × 10⁻³ V/m",
          "5.0 × 10⁻³ V/m",
          "1.0 × 10⁻² V/m",
          "2.0 × 10⁻² V/m"
        ],
        "answer": "C",
        "explanation": "By symmetry ∮E·dl = E(2πr) = |dΦ/dt| = πr²(dB/dt), so E = (r/2)(dB/dt) = (0.025)(0.20) = 5.0 × 10⁻³ V/m. The 1.6 × 10⁻³ distractor is the emf itself, πr²(dB/dt) = 1.6 × 10⁻³ V, quoted as though it were a field; the two differ by the circumference. Note that the resistance of the ring never enters, since the induced field is set by the changing flux alone."
      },

      // [CM/lagrangian]
      {
        "question": "A bead slides without friction on a circular hoop of radius R that is forced to rotate about its vertical diameter at constant angular speed ω. For ω² > g/R the bead has a stable equilibrium at an angle θ measured from the lowest point of the hoop, given by",
        "choices": [
          "cos θ = g/(ω²R)",
          "cos θ = ω²R/g",
          "sin θ = g/(ω²R)",
          "tan θ = ω²R/g",
          "θ = 0, for every ω"
        ],
        "answer": "A",
        "explanation": "With θ as the generalized coordinate, L = ½mR²θ̇² + ½mR²ω² sin²θ + mgR cos θ, and the equilibrium condition mR²ω² sinθ cosθ = mgR sinθ gives cos θ = g/(ω²R). The θ = 0 answer is the equilibrium for slow rotation only: once ω² exceeds g/R the bottom of the hoop becomes unstable and the bead rides up. The inverted cos θ = ω²R/g has no solution in that regime, which is a quick way to reject it."
      },

      // [TS/blackbody radiation]
      {
        "question": "A planet in a circular orbit of radius d about a star has an equilibrium temperature T set by balancing absorbed starlight against its own blackbody emission. At what orbital radius would a planet of the same size and albedo have equilibrium temperature T/2?",
        "choices": [
          "√2 d",
          "2d",
          "2√2 d",
          "4d",
          "16d"
        ],
        "answer": "D",
        "explanation": "Absorbed power scales as 1/d² while emitted power scales as T⁴, so T ∝ d^(−1/2) and halving T requires quadrupling the distance. The 16d distractor comes from setting T⁴ ∝ 1/d directly, and 2d from assuming T ∝ 1/d. The planet's radius cancels out of the balance entirely, since it enters the absorption and the emission in the same way."
      },

      // [QM/lasers & stimulated emission]
      {
        "question": "A gas of atoms with two nondegenerate levels is illuminated by intense light exactly at the transition frequency. A population inversion between these two levels cannot be produced this way because",
        "choices": [
          "the photons have too little momentum to excite the atoms",
          "spontaneous emission is always faster than absorption",
          "the upper level has a shorter lifetime than the lower one",
          "the Pauli exclusion principle limits the upper-level population",
          "stimulated emission and absorption have equal rate coefficients, so the populations can at best be equalized"
        ],
        "answer": "E",
        "explanation": "Einstein's relation B₁₂ = B₂₁ for nondegenerate levels means the light drives downward transitions as readily as upward ones, so pumping saturates at equal populations and the medium becomes transparent, never amplifying. Real lasers evade this by using a third or fourth level, so that the pumped population decays into a metastable upper laser level not directly coupled to the pump. Spontaneous emission only makes matters worse; it never produces inversion, so that distractor gets the direction right but the mechanism wrong."
      },

      // [SP/astrophysics & cosmology]
      {
        "question": "A star has twice the radius and twice the surface temperature of the Sun. Treating both as blackbodies, its luminosity in units of the Sun's luminosity is",
        "choices": [
          "4",
          "8",
          "16",
          "32",
          "64"
        ],
        "answer": "E",
        "explanation": "Luminosity is the surface area times the Stefan-Boltzmann flux, L ∝ R²T⁴, so the factor is 2² × 2⁴ = 64. The 16 distractor uses the temperature scaling alone and 4 the area scaling alone; each is half of the calculation. The same relation, run backwards, is how a measured luminosity and temperature fix a star's radius on the Hertzsprung-Russell diagram."
      },

      // [EM/current & resistance]
      {
        "question": "A cylindrical copper wire is drawn out uniformly until its length is three times the original length. Its volume and resistivity are unchanged. Its resistance is multiplied by a factor of",
        "choices": [
          "3",
          "6",
          "9",
          "27",
          "81"
        ],
        "answer": "C",
        "explanation": "R = ρL/A, and constant volume with tripled length forces the cross-sectional area down by a factor of 3, so R rises by 3 × 3 = 9. The 3 distractor accounts only for the extra length and misses the thinning, which is the whole point of the constant-volume condition. Equivalently R ∝ L²/V, so resistance goes as the square of the drawn length."
      },

      // [CM/rocket/variable mass]
      {
        "question": "Sand falls vertically at a steady 5.0 kg/s from a stationary hopper onto a horizontal conveyor belt that moves at a constant 2.0 m/s. Ignoring friction in the belt's bearings, the power the motor must deliver is most nearly",
        "choices": [
          "2.0 W",
          "5.0 W",
          "10 W",
          "20 W",
          "40 W"
        ],
        "answer": "D",
        "explanation": "Each kilogram of sand must be accelerated from rest to 2.0 m/s, so the belt exerts F = v dm/dt = 5.0 × 2.0 = 10 N and the motor supplies P = Fv = 10 × 2.0 = 20 W. The 10 W distractor is the rate at which the sand gains kinetic energy, ½(dm/dt)v²; exactly half the motor's output is dissipated as heat in the sliding between the sand and the belt, which is unavoidable no matter how the sand is dropped."
      },

      // [QM/finite well & bound states]
      {
        "question": "A particle is bound in a one-dimensional square well of finite depth V₀ and width L. Compared with the levels of an infinite square well of the same width, which of the following is true?",
        "choices": [
          "Every bound level lies lower in energy, and there are only finitely many bound levels",
          "Every bound level lies higher in energy, and there are only finitely many bound levels",
          "The levels are the same, since the width is the same",
          "The levels lie lower in energy, and there are infinitely many bound levels",
          "The wave function still vanishes at the walls, so the levels are unchanged"
        ],
        "answer": "A",
        "explanation": "The wave function leaks into the classically forbidden region, so the particle is effectively confined to a width greater than L and every level is pushed down relative to n²π²ħ²/2mL². Only states with E < V₀ are bound, so the number of bound levels is finite (in one dimension there is always at least one). The 'unchanged' options miss that the boundary condition is continuity of ψ and ψ′, not ψ = 0, once the walls are of finite height."
      },

      // [SR/relativistic energy & momentum]
      {
        "question": "An electron starting from rest is accelerated through a potential difference of 2.0 MV. Taking its rest energy to be 0.51 MeV, its final speed is most nearly",
        "choices": [
          "0.60c",
          "0.75c",
          "0.86c",
          "0.94c",
          "0.98c"
        ],
        "answer": "E",
        "explanation": "The kinetic energy is 2.0 MeV, so γ = 1 + 2.0/0.51 = 4.9 and β = √(1 − 1/γ²) = 0.98. The 0.86c distractor is γ = 2, the answer for a 0.51 MV gap, and 0.94c is γ = 3. Applying ½mv² here would give v ≈ 2.8c, which is the clearest possible signal that the nonrelativistic formula has been pushed past its domain."
      },

      // [LM/detectors & counters]
      {
        "question": "A photomultiplier tube has 10 dynodes, and each dynode emits 4 secondary electrons for every electron that strikes it. The overall electron gain of the tube is most nearly",
        "choices": [
          "40",
          "4 × 10³",
          "1 × 10⁶",
          "1 × 10¹⁰",
          "1 × 10¹²"
        ],
        "answer": "C",
        "explanation": "The stages multiply, so the gain is 4¹⁰ = 1.0 × 10⁶. The 40 distractor adds the stages instead of compounding them, which is the standard slip with cascaded gain. A gain near 10⁶ is what lets a photomultiplier register a single photoelectron as a millivolt-scale pulse, and it is why modest changes in the dynode voltage swing the output so violently."
      },

      // [CM/angular momentum]
      {
        "question": "A puck slides on a frictionless horizontal table at the end of a string that passes through a small hole in the table. It circles at radius r with speed v. The string is then pulled slowly downward until the puck circles at radius r/2. The kinetic energy of the puck is multiplied by",
        "choices": [
          "1/4",
          "1",
          "2",
          "4",
          "8"
        ],
        "answer": "D",
        "explanation": "The string's tension is central, so angular momentum mvr is conserved and halving the radius doubles the speed, quadrupling the kinetic energy. The factor of 1 is the trap for anyone who assumes mechanical energy is conserved because the surface is frictionless; the hand pulling the string does positive work, and that work is precisely the extra 3(½mv²). The tension is not perpendicular to the displacement once the radius is changing."
      },

      // [OW/beats]
      {
        "question": "A 440 Hz tuning fork sounded together with a second fork produces 4 beats per second. A small piece of wax is then stuck to the second fork, and the beat rate drops to 2 per second. The original frequency of the second fork was",
        "choices": [
          "434 Hz",
          "436 Hz",
          "440 Hz",
          "442 Hz",
          "444 Hz"
        ],
        "answer": "E",
        "explanation": "Four beats per second means the second fork was at either 436 Hz or 444 Hz; the beat rate alone cannot say which. Wax adds inertia and therefore lowers a fork's frequency, so a 436 Hz fork would move to about 434 Hz and the beat rate would rise to 6, while a 444 Hz fork moves toward 440 and the beat rate falls. The observed drop to 2 beats per second identifies 444 Hz. Choosing 436 Hz is the trap for anyone who assumes loading raises the frequency, or who stops at the two-fold ambiguity without using the wax."
      },

      // [SP/conservation laws in particle physics]
      {
        "question": "A free proton cannot undergo the decay p → n + e⁺ + ν_e, even though the same process occurs for protons bound in some nuclei. The conservation law that forbids the free decay is",
        "choices": [
          "conservation of energy",
          "conservation of electric charge",
          "conservation of baryon number",
          "conservation of lepton number",
          "conservation of angular momentum"
        ],
        "answer": "A",
        "explanation": "Charge, baryon number and lepton number all balance in this decay, and the spins can be coupled consistently, so none of those is the obstruction. The neutron is 1.3 MeV heavier than the proton, so a proton at rest simply lacks the rest energy to produce the final state. Inside a nucleus the binding energy of the daughter can supply the difference, which is why β⁺ decay of bound protons is common. Students often reach for baryon or lepton number here out of habit, but both are satisfied."
      },

      // [EM/EM waves & poynting]
      {
        "question": "A radio transmitter radiates 50 kW isotropically. Taking ε₀ = 8.85 × 10⁻¹² F/m and c = 3.0 × 10⁸ m/s, the amplitude of the electric field of the wave at a distance of 10 km is most nearly",
        "choices": [
          "0.087 V/m",
          "0.12 V/m",
          "0.17 V/m",
          "0.24 V/m",
          "0.35 V/m"
        ],
        "answer": "C",
        "explanation": "The intensity is P/4πr² = 5.0 × 10⁴/(4π × 10⁸) = 4.0 × 10⁻⁵ W/m², and for a plane wave I = ½ε₀cE₀², so E₀ = √(2I/ε₀c) = 0.17 V/m. The 0.12 V/m distractor is the rms field E₀/√2, which is what you get by dropping the factor of ½ in the time average. Note the field falls as 1/r even though the intensity falls as 1/r²."
      }

    ]
  },

  {
    "name": "Practice Test 2",
    "added": "2026-08-13",
    "category": "practice",
    "cards": [

      // [CM/SHM]
      {
        "question": "A particle executes simple harmonic motion with amplitude A and period T. Its average speed over one complete period is",
        "choices": [
          "4A/T",
          "0",
          "2A/T",
          "πA/T",
          "2πA/T"
        ],
        "answer": "A",
        "explanation": "In one period the particle covers a path length of 4A (out, back, out the other side, back), so the average speed is 4A/T. The 0 distractor is the average velocity, which does vanish because the displacement over a period is zero — average speed and average velocity are different quantities. The 2πA/T value is the maximum speed ωA, which exceeds the average by π/2, the same factor that relates peak and mean for a sinusoid."
      },

      // [QM/de broglie waves]
      {
        "question": "A neutron is in thermal equilibrium at 300 K, with kinetic energy (3/2)k_BT. Taking k_B = 1.38 × 10⁻²³ J/K, h = 6.63 × 10⁻³⁴ J·s and m_n = 1.67 × 10⁻²⁷ kg, its de Broglie wavelength is most nearly",
        "choices": [
          "1.5 × 10⁻¹² m",
          "1.5 × 10⁻¹¹ m",
          "1.5 × 10⁻¹⁰ m",
          "1.5 × 10⁻⁹ m",
          "1.5 × 10⁻⁸ m"
        ],
        "answer": "C",
        "explanation": "The kinetic energy is (3/2)(1.38 × 10⁻²³)(300) = 6.2 × 10⁻²¹ J, so p = √(2mE) = 4.6 × 10⁻²⁴ kg·m/s and λ = h/p = 1.5 × 10⁻¹⁰ m. That is 0.15 nm, comparable to interatomic spacings, which is exactly why thermal neutrons from a reactor are the standard probe for crystal and magnetic structure. Using E = k_BT rather than (3/2)k_BT shifts the answer only by 20 percent, so the decade ladder here is forgiving; using the electron mass instead is not, and moves the result two decades."
      },

      // [EM/gauss's law]
      {
        "question": "A very long solid cylinder of radius R carries charge distributed uniformly through its volume with density ρ. The magnitude of the electric field at a distance r from the axis, with r < R, is",
        "choices": [
          "ρr/ε₀",
          "ρr/2ε₀",
          "ρR²/(2ε₀r)",
          "ρr²/(2ε₀R)",
          "ρR/(2ε₀)"
        ],
        "answer": "B",
        "explanation": "A coaxial Gaussian cylinder of radius r and length L encloses ρπr²L, and the field is radial with area 2πrL, giving E = ρr/2ε₀ — linear in r, as for the interior of any uniformly charged symmetric body. The ρR²/(2ε₀r) distractor is the exterior field, correct only for r > R, and the two agree at r = R as they must. Note that the field inside a uniformly charged cylinder grows outward, in contrast to the vanishing field inside a hollow conductor."
      },

      // [TS/carnot cycle]
      {
        "question": "A Carnot engine operating between reservoirs at 500 K and 300 K delivers 1,000 J of work per cycle. The heat it rejects to the cold reservoir per cycle is",
        "choices": [
          "400 J",
          "600 J",
          "1,000 J",
          "1,500 J",
          "2,500 J"
        ],
        "answer": "D",
        "explanation": "The Carnot efficiency is 1 − 300/500 = 0.40, so Q_h = W/η = 2,500 J and Q_c = Q_h − W = 1,500 J. Equivalently Q_c/W = T_c/(T_h − T_c) = 300/200 = 1.5. The 2,500 J distractor is the heat absorbed rather than rejected, and 600 J comes from the ratio T_c/T_h applied to the work instead of to the heat input. Note that a Carnot engine at these temperatures must dump more heat than it converts to work."
      },

      // [OW/geometric optics: lenses]
      {
        "question": "An object is placed 20 cm in front of a thin converging lens of focal length 12 cm. The image is",
        "choices": [
          "30 cm beyond the lens, real and inverted, 1.5 times the size of the object",
          "30 cm in front of the lens, virtual and upright, 1.5 times the size of the object",
          "7.5 cm beyond the lens, real and inverted, 0.6 times the size of the object",
          "60 cm beyond the lens, real and inverted, 3 times the size of the object",
          "20 cm beyond the lens, virtual and inverted, the same size as the object"
        ],
        "answer": "A",
        "explanation": "From 1/v = 1/f − 1/s = 1/12 − 1/20 = 1/30, the image sits 30 cm beyond the lens, and the magnification is −v/s = −1.5, i.e. inverted and enlarged. Because the object lies between f and 2f, an enlarged real image on the far side is the expected outcome. The 7.5 cm option comes from adding the reciprocals instead of subtracting them, which is the single most common sign error in the thin-lens equation."
      },

      // [CM/kinematics]
      {
        "question": "Two stones are released from rest from the same high tower, the second one exactly 1.0 s after the first. Taking g = 9.8 m/s² and neglecting air resistance, the separation between them at the instant the second stone has been falling for 2.0 s is most nearly",
        "choices": [
          "4.9 m",
          "9.8 m",
          "14.7 m",
          "19.6 m",
          "24.5 m"
        ],
        "answer": "E",
        "explanation": "The first stone has fallen for 3.0 s and the second for 2.0 s, so the gap is ½g(3.0² − 2.0²) = ½(9.8)(5.0) = 24.5 m. The 4.9 m distractor is the separation at the moment the second stone is released, which many students assume stays fixed; in fact the gap grows without limit as gΔt × t, because both stones keep accelerating and the leader is always faster. The 19.6 m value is just the distance fallen by the second stone."
      },

      // [QM/photoelectric effect]
      {
        "question": "Light of wavelength 250 nm ejects photoelectrons from a metal surface, and the stopping potential is measured to be 1.0 V. Taking h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s and e = 1.6 × 10⁻¹⁹ C, the work function of the metal is most nearly",
        "choices": [
          "1.0 eV",
          "2.0 eV",
          "3.0 eV",
          "4.0 eV",
          "5.0 eV"
        ],
        "answer": "D",
        "explanation": "The photon energy is hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(2.5 × 10⁻⁷ × 1.6 × 10⁻¹⁹ eV) = 5.0 eV, and W = hν − eV_stop = 5.0 − 1.0 = 4.0 eV. The 5.0 eV distractor is the photon energy itself, the answer for a hypothetical zero stopping potential. Increasing the light intensity would raise the current but leave the stopping potential, and hence this determination of W, untouched."
      },

      // [SP/nuclear binding energy]
      {
        "question": "The relevant atomic masses are ¹H 1.007825 u, the neutron 1.008665 u and ⁴He 4.002603 u, with 1 u equivalent to 931.5 MeV. The binding energy per nucleon of ⁴He is most nearly",
        "choices": [
          "1.1 MeV",
          "3.5 MeV",
          "7.1 MeV",
          "14 MeV",
          "28 MeV"
        ],
        "answer": "C",
        "explanation": "The mass defect is 2(1.007825) + 2(1.008665) − 4.002603 = 0.030377 u, giving a total binding energy of 28.3 MeV and 28.3/4 = 7.1 MeV per nucleon. The 28 MeV distractor is that total, which the question does not ask for. Helium-4 is unusually tightly bound for its mass number — its 7.1 MeV per nucleon already approaches the 8.8 MeV peak at iron — which is why alpha particles appear as intact units in nuclear decay."
      },

      // [EM/electric potential]
      {
        "question": "Three point charges, each of magnitude +q, are brought in one at a time from infinity and fixed at the vertices of an equilateral triangle of side a. The total work required is",
        "choices": [
          "q²/(4πε₀a)",
          "3q²/(8πε₀a)",
          "q²/(2πε₀a)",
          "3q²/(2πε₀a)",
          "3q²/(4πε₀a)"
        ],
        "answer": "E",
        "explanation": "There are three distinct pairs, each contributing q²/(4πε₀a), so the assembly energy is 3q²/(4πε₀a). The first charge costs nothing, the second costs one pair term and the third costs two, which is the same count. The q²/(4πε₀a) distractor counts a single pair, and 3q²/(8πε₀a) comes from applying a factor of ½ that belongs in ½ΣqᵢVᵢ but has already been used up by counting each pair once."
      },

      // [SR/velocity addition]
      {
        "question": "Two spacecraft move directly toward each other, each traveling at 0.60c as measured in the Earth frame. The speed of one spacecraft as measured in the rest frame of the other is most nearly",
        "choices": [
          "0.60c",
          "0.75c",
          "0.88c",
          "0.96c",
          "1.20c"
        ],
        "answer": "C",
        "explanation": "Relativistic velocity addition gives (0.60c + 0.60c)/(1 + 0.36) = 0.88c. The 1.20c distractor is the Galilean sum, which is also the rate at which the gap between them closes in the Earth frame — a perfectly legitimate quantity that is not the speed of anything in anyone's rest frame. No combination of subluminal speeds can produce a relative speed of c or more, which is why the correct answer must lie below 1."
      },

      // [CM/newton's laws / friction]
      {
        "question": "A small bead slides on the inside of a vertical circular track of radius 2.5 m. Taking g = 9.8 m/s² and neglecting friction, the minimum speed the bead can have at the top of the track without leaving the surface is most nearly",
        "choices": [
          "3.5 m/s",
          "4.9 m/s",
          "7.0 m/s",
          "9.9 m/s",
          "24 m/s"
        ],
        "answer": "B",
        "explanation": "At the critical condition the track pushes with zero force and gravity alone supplies the centripetal acceleration: mg = mv²/R, so v = √(gR) = √(9.8 × 2.5) = 4.9 m/s. The mass drops out entirely. The 7.0 m/s distractor is √(2gR), which is the speed gained falling through the radius — an energy result imported into a force question. Requiring merely v > 0 at the top is the classic error: below √(gR) the bead leaves the track before reaching it."
      },

      // [QM/angular momentum & spherical harmonics]
      {
        "question": "An electron is in a state with orbital angular momentum quantum number l = 2 and magnetic quantum number m_l = 2. The angle between the orbital angular momentum vector and the z-axis is most nearly",
        "choices": [
          "0°",
          "18°",
          "26°",
          "35°",
          "45°"
        ],
        "answer": "D",
        "explanation": "The magnitude is √(l(l+1))ħ = √6 ħ while the z-component is 2ħ, so cos θ = 2/√6 = 0.82 and θ = 35°. The 0° distractor assumes the vector can lie along z, which the uncertainty relations for the components forbid: L_x and L_y cannot both be zero when L_z is sharp. Even the most aligned state, m_l = l, keeps a nonzero tilt, and that tilt shrinks toward zero only in the classical limit of large l."
      },

      // [LM/oscilloscope & signal measurement]
      {
        "question": "A sinusoidal signal on an oscilloscope spans 6.0 cm vertically from the bottom to the top of the trace, with the vertical gain set to 0.50 V/cm, and one complete cycle occupies 4.0 cm horizontally with the sweep set to 0.10 ms/cm. The rms voltage and the frequency of the signal are most nearly",
        "choices": [
          "1.1 V and 2,500 Hz",
          "1.5 V and 2,500 Hz",
          "3.0 V and 2,500 Hz",
          "1.1 V and 250 Hz",
          "2.1 V and 400 Hz"
        ],
        "answer": "A",
        "explanation": "The trace height is peak-to-peak, so 6.0 cm × 0.50 V/cm = 3.0 V peak-to-peak, an amplitude of 1.5 V, and V_rms = 1.5/√2 = 1.1 V. The period is 4.0 cm × 0.10 ms/cm = 0.40 ms, giving f = 2,500 Hz. The 1.5 V option quotes the amplitude as though it were the rms value, and 3.0 V quotes the full peak-to-peak swing; only one of the three voltage readings survives both conversions."
      },

      // [TS/kinetic theory]
      {
        "question": "The temperature at which the average translational kinetic energy of a molecule of an ideal gas equals 1.0 eV is most nearly, with k_B = 1.38 × 10⁻²³ J/K and e = 1.6 × 10⁻¹⁹ C,",
        "choices": [
          "1,200 K",
          "3,900 K",
          "7,700 K",
          "11,600 K",
          "23,000 K"
        ],
        "answer": "C",
        "explanation": "Setting (3/2)k_BT = 1.6 × 10⁻¹⁹ J gives T = 2(1.6 × 10⁻¹⁹)/(3 × 1.38 × 10⁻²³) = 7.7 × 10³ K. The 11,600 K distractor is the familiar conversion 1 eV ↔ k_BT, which omits the factor of 3/2 that belongs to three translational degrees of freedom. The result is worth remembering: even at several thousand kelvin the typical molecular energy is only about an electron volt, which is why ionization requires either very hot plasmas or nonthermal excitation."
      },

      // [EM/DC circuits]
      {
        "question": "A battery of emf 12 V and internal resistance 2.0 Ω is connected to an external resistor R that can be varied. The maximum power that can be delivered to R is",
        "choices": [
          "9.0 W",
          "18 W",
          "36 W",
          "72 W",
          "144 W"
        ],
        "answer": "B",
        "explanation": "Power in the load, P = ε²R/(R + r)², is maximized at R = r, where the current is 12/4.0 = 3.0 A and P = I²R = 18 W. The 36 W distractor is the total power the battery delivers at that setting, exactly half of which is wasted inside the battery — matched loads are efficient in transfer, not in efficiency. The 72 W value, ε²/r, would be the dissipation for a short circuit, where the load gets nothing at all."
      },

      // [QM/operators & commutators]
      {
        "question": "Acting on well-behaved functions that vanish at infinity, which of the following operators is Hermitian?",
        "choices": [
          "d/dx",
          "ix",
          "x d/dx",
          "x + d/dx",
          "i d/dx"
        ],
        "answer": "E",
        "explanation": "Integration by parts shows (d/dx)† = −d/dx, so d/dx is anti-Hermitian and multiplying it by i repairs the sign: (i d/dx)† = (−i)(−d/dx) = i d/dx. This is exactly why the momentum operator carries its factor of −i. The operator ix is anti-Hermitian for the opposite reason, since x is Hermitian and i is not, and x d/dx fails because the product of two Hermitian operators is Hermitian only if they commute."
      },

      // [CM/work-energy]
      {
        "question": "A 2.0 kg block is pressed against a spring of force constant 800 N/m, compressing it 0.10 m, on a horizontal surface for which the coefficient of kinetic friction is 0.25. The block is released. Taking g = 9.8 m/s², the total distance it slides from the point of release before coming to rest is most nearly",
        "choices": [
          "0.41 m",
          "0.61 m",
          "0.82 m",
          "1.2 m",
          "1.6 m"
        ],
        "answer": "C",
        "explanation": "All of the stored energy ½kx² = ½(800)(0.10)² = 4.0 J is eventually consumed by friction, which takes μmg = 0.25 × 2.0 × 9.8 = 4.9 N per meter, so d = 4.0/4.9 = 0.82 m. The 1.6 m distractor drops the factor of ½ in the spring energy, the most common slip in this problem. Note that the mass matters here only through the friction force, not through any kinematic step."
      },

      // [OW/doppler]
      {
        "question": "A stationary siren emits sound at 500 Hz. An observer moves directly away from the siren at 68 m/s. Taking the speed of sound to be 340 m/s, the frequency the observer hears is most nearly",
        "choices": [
          "333 Hz",
          "400 Hz",
          "417 Hz",
          "500 Hz",
          "600 Hz"
        ],
        "answer": "B",
        "explanation": "For a moving observer and a stationary source the wavelength in the air is unchanged, and the observer simply meets fewer crests per second: f = f₀(v − v_o)/v = 500(340 − 68)/340 = 400 Hz. The 417 Hz distractor is the answer for a receding source, f₀v/(v + v_s) = 500(340)/408, which is a genuinely different physical situation even though the relative speed is the same. Source motion and observer motion are not equivalent for sound, precisely because the medium defines a preferred frame."
      },

      // [EM/magnetic force on charges/currents]
      {
        "question": "A wire is bent into a semicircle of radius R and carries a steady current I. The semicircle lies in a plane perpendicular to a uniform magnetic field of magnitude B. The magnitude of the net magnetic force on the semicircular wire is",
        "choices": [
          "0",
          "BIR",
          "πBIR",
          "2πBIR",
          "2BIR"
        ],
        "answer": "E",
        "explanation": "For a uniform field the force depends only on the vector joining the endpoints: F = I(∫dl) × B = I L_eff B, and the straight-line distance across a semicircle of radius R is the diameter 2R, giving 2BIR. The πBIR distractor uses the arc length πR, i.e. it adds the magnitudes of the element forces instead of adding them as vectors, and the components along the diameter partly cancel. A closed loop makes ∫dl vanish, which is why any closed current loop feels zero net force in a uniform field."
      },

      // [QM/perturbation theory]
      {
        "question": "A particle is in the ground state of a one-dimensional infinite square well with walls at x = 0 and x = L. A small constant potential V₀ is then switched on over the left half of the well only, 0 < x < L/2. To first order, the shift in the ground-state energy is",
        "choices": [
          "0",
          "V₀/π",
          "V₀/4",
          "V₀/2",
          "V₀"
        ],
        "answer": "D",
        "explanation": "The first-order shift is the expectation value of the perturbation, V₀∫₀^(L/2)|ψ₁|²dx, and the ground-state probability density is symmetric about the midpoint, so exactly half of it lies in the left half: the shift is V₀/2. No integral needs to be evaluated once the symmetry is noticed. The V₀ distractor is the shift for a perturbation covering the whole well, and 0 would require the perturbation to be odd about the center, which a one-sided step is not."
      },

      // [SP/superconductivity]
      {
        "question": "Which of the following statements about a type-I superconductor below its critical temperature is NOT true?",
        "choices": [
          "Its dc electrical resistance is zero",
          "It expels a weak applied magnetic field from its interior",
          "A sufficiently strong applied magnetic field destroys the superconducting state",
          "There is an energy gap in its electronic excitation spectrum",
          "The magnetic flux trapped inside it is whatever the flux was at the moment it was cooled through the critical temperature"
        ],
        "answer": "E",
        "explanation": "The Meissner effect is the statement that a superconductor actively expels flux, reaching the same field-free state whether it is cooled first and then placed in the field or placed in the field and then cooled. A merely perfect conductor would freeze in whatever flux was present at the transition, which is the trap in the last option: zero resistance alone does not imply the Meissner effect, and that is why it counts as a separate experimental fact. Zero resistance, a critical field and an energy gap of order k_BT_c are all genuine properties."
      },

      // [CM/momentum & collisions]
      {
        "question": "A projectile fired from level ground would land a distance R from its launch point. At the highest point of its trajectory it explodes into two fragments of equal mass, and one fragment drops straight down from the burst point with zero horizontal velocity. Neglecting air resistance, the second fragment lands at a distance from the launch point of",
        "choices": [
          "R/2",
          "R",
          "5R/4",
          "3R/2",
          "2R"
        ],
        "answer": "D",
        "explanation": "The burst occurs at horizontal distance R/2, and horizontal momentum is conserved through the explosion: with one half-mass fragment left at zero horizontal speed, the other must carry twice the original horizontal velocity. Both fragments take the same time to fall from the apex, so the second travels twice the remaining half-range, landing at R/2 + 2(R/2) = 3R/2. The 2R distractor doubles the whole range instead of the post-explosion portion, forgetting that only the second half of the flight is affected."
      },

      // [TS/second law & entropy]
      {
        "question": "Heat in the amount of 1,000 J is conducted from a large thermal reservoir at 600 K to a large thermal reservoir at 300 K. The reservoirs are large enough that their temperatures do not change. The total entropy change of the two reservoirs is most nearly",
        "choices": [
          "−3.3 J/K",
          "−1.7 J/K",
          "0",
          "1.7 J/K",
          "3.3 J/K"
        ],
        "answer": "D",
        "explanation": "The hot reservoir loses 1,000/600 = 1.67 J/K and the cold gains 1,000/300 = 3.33 J/K, for a net increase of 1.7 J/K. The 3.3 J/K distractor counts only the cold reservoir, forgetting that the source pays some entropy back; 0 would be right only for reversible heat transfer, which requires the two temperatures to be equal. The positive net value is the second law in its most elementary quantitative form: heat flowing down a finite temperature gradient always creates entropy."
      },

      // [QM/atomic spectra & selection rules]
      {
        "question": "The ground-state binding energy of hydrogen is 13.6 eV. Taking h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s and e = 1.6 × 10⁻¹⁹ C, the shortest wavelength emitted in the Lyman series is most nearly",
        "choices": [
          "46 nm",
          "91 nm",
          "122 nm",
          "365 nm",
          "656 nm"
        ],
        "answer": "B",
        "explanation": "The series limit corresponds to a transition from n = ∞ down to n = 1, releasing the full 13.6 eV, so λ = hc/E = 1,240 eV·nm/13.6 eV = 91 nm. The 122 nm distractor is Lyman-alpha, the n = 2 to n = 1 line, which is the longest wavelength in the series rather than the shortest; 365 nm is the corresponding limit for the Balmer series. All Lyman lines lie in the ultraviolet, between 91 and 122 nm."
      },

      // [EM/induction & faraday]
      {
        "question": "A conducting rod of length 0.40 m slides without friction at a constant 3.0 m/s along two parallel rails that are joined at one end by a 0.20 Ω resistor. A uniform magnetic field of 0.50 T is perpendicular to the plane of the rails, and the rod and rails have negligible resistance. The power dissipated in the resistor is",
        "choices": [
          "0.60 W",
          "1.8 W",
          "3.6 W",
          "6.0 W",
          "18 W"
        ],
        "answer": "B",
        "explanation": "The motional emf is BLv = 0.50 × 0.40 × 3.0 = 0.60 V, so the current is 3.0 A and P = emf²/R = 0.36/0.20 = 1.8 W. As a check, the retarding force on the rod is BIL = 0.60 N and the agent pushing it delivers Fv = 1.8 W, exactly the dissipated power. The 0.60 W distractor is the emf in volts read off as though it were the power, a units slip worth catching."
      },

      // [SR/relativistic collisions]
      {
        "question": "A nucleus of rest mass M, initially at rest, absorbs a photon of energy E. The rest mass of the resulting system is",
        "choices": [
          "√(M² + 2ME/c²)",
          "M",
          "M + E/c²",
          "M + 2E/c²",
          "√(M² + E²/c⁴)"
        ],
        "answer": "A",
        "explanation": "After absorption the total energy is Mc² + E and the total momentum is E/c, so (M′c²)² = (Mc² + E)² − E² = M²c⁴ + 2Mc²E, giving M′ = √(M² + 2ME/c²). The M + E/c² distractor ignores the recoil momentum the photon necessarily delivers; some of the photon's energy must go into kinetic energy of the recoiling system, so the rest mass rises by less than E/c². For E ≪ Mc² the exact result does reduce to M + E/c², which is why the Mössbauer effect, where the recoil is taken up by the whole crystal, is so useful."
      },

      // [CM/rotational dynamics]
      {
        "question": "A uniform solid cylinder of mass M and radius R has a light string wound many times around it. The free end of the string is held fixed and the cylinder is released from rest, falling as the string unwinds without slipping. The downward acceleration of its center is",
        "choices": [
          "g/3",
          "g/2",
          "2g/3",
          "3g/4",
          "g"
        ],
        "answer": "C",
        "explanation": "Newton's law gives Mg − T = Ma and the torque about the center gives TR = (½MR²)(a/R), so T = Ma/2 and a = 2g/3. Equivalently, use the fixed contact line as the pivot: a = Mg R/(I_contact/R) with I_contact = (3/2)MR². The g/2 distractor comes from using I = MR², the value for a hoop; the string's tension is Mg/3 here, not the full weight, and the cylinder falls at two-thirds of free fall no matter how tightly the string is wound."
      },

      // [QM/franck-hertz experiment]
      {
        "question": "In a Franck-Hertz tube filled with mercury vapor, the collected current shows dips at accelerating-voltage intervals of 4.9 V. Taking h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s and e = 1.6 × 10⁻¹⁹ C, the wavelength of the light emitted by the excited mercury atoms is most nearly",
        "choices": [
          "126 nm",
          "253 nm",
          "400 nm",
          "506 nm",
          "650 nm"
        ],
        "answer": "B",
        "explanation": "The 4.9 V spacing means an electron must acquire 4.9 eV before it can excite a mercury atom inelastically, so the excited state lies 4.9 eV above the ground state and decays by emitting a photon of that energy: λ = hc/E = 1,240 eV·nm/4.9 eV = 253 nm, in the ultraviolet, which is what is observed. The 506 nm distractor uses half the excitation energy, as though two dips were needed per photon. The equal spacing of the dips shows that each electron can excite several atoms in succession, not that higher levels are involved."
      },

      // [LM/poisson & counting statistics]
      {
        "question": "A detector registers 100 counts in one minute with a radioactive source in place, and 64 counts in one minute with the source removed. The net counting rate due to the source is 36 per minute, with a statistical uncertainty of most nearly",
        "choices": [
          "6 per minute",
          "8 per minute",
          "10 per minute",
          "13 per minute",
          "16 per minute"
        ],
        "answer": "D",
        "explanation": "Each measurement is Poisson with its own uncertainty, √100 = 10 and √64 = 8, and subtracting two independent numbers adds their variances: σ = √(100 + 64) = 13. The 6 per minute distractor is √36, applying the Poisson rule to the difference as though the net count were itself a Poisson variable, which it is not. Note the uncertainty is over a third of the net signal here — a background nearly as large as the signal is expensive."
      },

      // [TS/thermodynamic cycles]
      {
        "question": "One mole of a monatomic ideal gas is carried around a closed rectangular cycle in the PV plane: from (P₀, V₀) at constant volume to (2P₀, V₀), then at constant pressure to (2P₀, 2V₀), then at constant volume to (P₀, 2V₀), then at constant pressure back to the start. The efficiency of this cycle is most nearly",
        "choices": [
          "6.7 percent",
          "10 percent",
          "15 percent",
          "25 percent",
          "50 percent"
        ],
        "answer": "C",
        "explanation": "The net work is the enclosed area, P₀V₀. Heat enters on the first two legs only: (3/2)V₀ΔP = 1.5P₀V₀ on the isochore and (5/2)(2P₀)(V₀) = 5P₀V₀ on the isobaric expansion, for Q_in = 6.5P₀V₀ and η = 1/6.5 = 15 percent. The 25 percent distractor divides the work by the total heat exchanged in magnitude, or by a miscounted Q_in; efficiency uses only the heat absorbed. For reference the Carnot limit between the extreme temperatures of this cycle would be 75 percent."
      },

      // [EM/RC circuits]
      {
        "question": "A capacitor of capacitance C, initially uncharged, is charged through a resistor R by a battery of emf V until the current has stopped. The fraction of the total energy supplied by the battery that ends up stored in the capacitor is",
        "choices": [
          "1/4",
          "1/3",
          "1/2",
          "2/3",
          "1"
        ],
        "answer": "C",
        "explanation": "The battery moves charge Q = CV through its own terminals at fixed emf, delivering QV = CV², while the capacitor ends up holding ½CV². The missing half is dissipated in the resistor, and remarkably the answer is independent of R: a smaller resistance gives a larger current for a shorter time, and the integral of I²R is unchanged. The answer 1 is the trap for students who equate the battery's work with the stored energy, forgetting that charging a capacitor through any resistance is irreversible."
      },

      // [QM/wavefunction & normalization]
      {
        "question": "A particle in one dimension has the wave function ψ(x) = N e^(−|x|/a) for −∞ < x < ∞, where a > 0 and N is real and positive. The value of N is",
        "choices": [
          "1/√a",
          "1/√(2a)",
          "√(2/a)",
          "1/a",
          "√a"
        ],
        "answer": "A",
        "explanation": "Normalization requires N²∫e^(−2|x|/a)dx = 2N²∫₀^∞ e^(−2x/a)dx = 2N²(a/2) = N²a = 1, so N = 1/√a. The factor of 2 from the two sides of the origin exactly cancels the ½ from the integral, which is why the answer is so clean; dropping one of the two gives the 1/√(2a) and √(2/a) distractors. Note that N must have units of (length)^(−1/2) in one dimension, which immediately rules out 1/a and √a."
      },

      // [CM/gravitation]
      {
        "question": "For an airless spherical planet, the ratio of the escape speed from the surface to the speed of a satellite in a circular orbit just above the surface is",
        "choices": [
          "1/2",
          "1/√2",
          "1",
          "√2",
          "2"
        ],
        "answer": "D",
        "explanation": "The circular orbit satisfies v_c² = GM/R while escape requires ½v_e² = GM/R, so v_e = √2 v_c. This factor is universal: it depends on neither the planet's mass nor its radius, and it says that a satellite in low orbit needs only about 41 percent more speed to leave the planet forever. The ratio 2 comes from comparing energies rather than speeds, since escape does require twice the kinetic energy."
      },

      // [OW/sound waves]
      {
        "question": "A sound wave has intensity 1.0 × 10⁻⁴ W/m². Taking the reference intensity to be 1.0 × 10⁻¹² W/m², the sound intensity level is",
        "choices": [
          "8 dB",
          "20 dB",
          "40 dB",
          "80 dB",
          "120 dB"
        ],
        "answer": "D",
        "explanation": "The level is 10 log₁₀(I/I₀) = 10 log₁₀(10⁸) = 80 dB. The 8 dB distractor omits the factor of 10 that converts bels to decibels, and 40 dB comes from a stray factor of ½ or from using an amplitude ratio where an intensity ratio is called for. For reference, 80 dB is heavy traffic; the 120 dB entry is the threshold of pain, four orders of magnitude more intense than the wave described here."
      },

      // [SP/nuclear reactions]
      {
        "question": "A ²³⁵U nucleus absorbs a slow neutron and undergoes fission into ¹⁴¹Ba and ⁹²Kr together with some free neutrons. The number of free neutrons released is",
        "choices": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "B",
        "explanation": "Mass number is conserved: 235 + 1 = 236, while the two named fragments account for 141 + 92 = 233, leaving 3 neutrons. Charge is consistent as well, since Z = 56 for Ba and Z = 36 for Kr sum to the uranium's 92. Two or three prompt neutrons per fission is what makes a chain reaction possible, and the answer here is fixed by bookkeeping rather than by any nuclear model."
      },

      // [QM/addition of angular momentum]
      {
        "question": "Two electrons occupy p orbitals, each with orbital angular momentum quantum number l = 1. Considering the orbital angular momenta alone, the possible values of the total orbital quantum number L are",
        "choices": [
          "1 only",
          "1 and 2 only",
          "0 and 2 only",
          "0, 1, 2, and 3",
          "0, 1, and 2"
        ],
        "answer": "E",
        "explanation": "Angular momenta add from |l₁ − l₂| to l₁ + l₂ in integer steps, so L runs over 0, 1 and 2, giving the S, P and D terms of a p² configuration. The '0, 1, 2, and 3' distractor adds the quantum numbers as though they simply summed to 3 at the top, which overshoots the maximum; note that l₁ + l₂ = 2 is already the largest possible. The Pauli principle further restricts which of these combine with which total spin for equivalent electrons, but it does not remove any L value from this list."
      },

      // [EM/conductors & capacitance]
      {
        "question": "A spherical capacitor consists of a conducting sphere of radius a surrounded by a concentric conducting shell of inner radius b, with vacuum between them. Its capacitance is",
        "choices": [
          "4πε₀ab/(b − a)",
          "4πε₀(b − a)/ab",
          "4πε₀(a + b)",
          "4πε₀ab/(b + a)",
          "4πε₀b²/(b − a)"
        ],
        "answer": "A",
        "explanation": "With charge Q on the inner sphere, V = (Q/4πε₀)(1/a − 1/b) = Q(b − a)/(4πε₀ab), so C = Q/V = 4πε₀ab/(b − a). Two checks settle the answer without algebra: as b → ∞ it must reduce to the isolated-sphere value 4πε₀a, and as b → a the gap vanishes and C must diverge. The 4πε₀(b − a)/ab distractor has the difference in the wrong place and fails both limits."
      },

      // [CM/fluids]
      {
        "question": "A block floats in water with 60 percent of its volume submerged. It is then placed in a liquid whose density is 0.80 times that of water. The fraction of the block's volume that is submerged is",
        "choices": [
          "48 percent",
          "60 percent",
          "67 percent",
          "75 percent",
          "80 percent"
        ],
        "answer": "D",
        "explanation": "The submerged fraction equals the ratio of the block's density to the fluid's density, so the block's density is 0.60 that of water and in the lighter liquid the fraction is 0.60/0.80 = 0.75. The 48 percent distractor multiplies by 0.80 instead of dividing, which has the block floating higher in a thinner fluid — the wrong direction physically. If the fluid density fell below 0.60 that of water the block would sink outright."
      },

      // [TS/first law & work]
      {
        "question": "An ideal monatomic gas is heated at constant pressure. The fraction of the heat added that appears as work done by the gas is",
        "choices": [
          "1/5",
          "2/5",
          "1/2",
          "3/5",
          "2/3"
        ],
        "answer": "B",
        "explanation": "At constant pressure Q = nC_pΔT with C_p = (5/2)R, while W = PΔV = nRΔT, so W/Q = R/C_p = 2/5. The remaining 3/5 goes into internal energy, consistent with C_v = (3/2)R. The 2/3 distractor is W/ΔU rather than W/Q, the ratio of work to internal-energy change rather than to the total heat; for a diatomic gas at room temperature the correct fraction would drop to 2/7."
      },

      // [QM/harmonic oscillator]
      {
        "question": "The molecules H₂ and D₂ have essentially identical electronic structure and therefore the same effective force constant for vibration. The ratio of the vibrational level spacing of D₂ to that of H₂ is most nearly",
        "choices": [
          "0.25",
          "0.50",
          "0.71",
          "1.4",
          "2.0"
        ],
        "answer": "C",
        "explanation": "The spacing is ħω = ħ√(k/μ) with the reduced mass μ = m/2 for a homonuclear molecule: 0.5 u for H₂ and 1.0 u for D₂. Doubling the reduced mass at fixed k lowers the frequency by √2, so the ratio is 1/√2 = 0.71. The 0.50 distractor uses the mass ratio without the square root. This isotope shift is exactly how vibrational assignments in molecular spectra are confirmed experimentally."
      },

      // [SP/astrophysics & cosmology]
      {
        "question": "Taking the Hubble constant to be 70 (km/s) per megaparsec, with 1 Mpc = 3.1 × 10¹⁹ km and 1 yr = 3.2 × 10⁷ s, the Hubble time 1/H₀ is most nearly",
        "choices": [
          "1.4 × 10⁸ yr",
          "1.4 × 10⁹ yr",
          "1.4 × 10¹⁰ yr",
          "1.4 × 10¹¹ yr",
          "1.4 × 10¹² yr"
        ],
        "answer": "C",
        "explanation": "H₀ = 70/(3.1 × 10¹⁹) = 2.3 × 10⁻¹⁸ s⁻¹, so 1/H₀ = 4.4 × 10¹⁷ s = 1.4 × 10¹⁰ yr. This is the age the universe would have if it had always expanded at the present rate, and it lands within about ten percent of the actual age — a coincidence of the deceleration and acceleration epochs roughly cancelling. Losing the Mpc-to-km conversion is what shifts the answer by whole decades, so the unit chain matters more than the arithmetic here."
      },

      // [EM/RLC & AC circuits]
      {
        "question": "An ideal inductor L and an ideal capacitor C are connected in parallel with each other, and this combination is driven by an ac source of angular frequency ω = 1/√(LC). The amplitude of the current drawn from the source is",
        "choices": [
          "zero",
          "V√(C/L)",
          "V/√(LC)",
          "V√(L/C)",
          "the sum of V/ωL and VωC"
        ],
        "answer": "A",
        "explanation": "The two branches carry equal current amplitudes V/ωL and VωC, equal because ω² = 1/LC, and they are 180° out of phase with each other, so they cancel in the supply line: the parallel tank has infinite impedance at resonance. Current still circulates around the LC loop; it just never comes from the source. The last option adds the branch magnitudes as though the currents were in phase, which is exactly the mistake that the series case (where voltages, not currents, cancel) tempts students to make."
      },

      // [CM/coupled oscillators & normal modes]
      {
        "question": "Two identical blocks, each of mass m, rest on a frictionless horizontal surface and are joined to each other by a spring of force constant k. Nothing else is attached to them. The angular frequency of the mode in which they oscillate is",
        "choices": [
          "√(2k/m)",
          "√(k/m)",
          "√(k/2m)",
          "2√(k/m)",
          "√(k/4m)"
        ],
        "answer": "A",
        "explanation": "In the oscillating mode the center of mass stays fixed and each block moves ±x/2, so the relative coordinate obeys μẍ = −kx with the reduced mass μ = m/2, giving ω = √(k/μ) = √(2k/m). The other normal mode is the zero-frequency translation of the pair. The √(k/m) distractor treats one block as though it were bolted to a wall, and √(k/2m) uses the total mass 2m instead of the reduced mass — the two errors push the answer in opposite directions."
      },

      // [QM/spin & pauli matrices]
      {
        "question": "The magnitude of the spin angular momentum of a particle whose spin quantum number is s = 1 is",
        "choices": [
          "ħ",
          "√2 ħ",
          "√3 ħ",
          "2ħ",
          "√6 ħ"
        ],
        "answer": "B",
        "explanation": "The magnitude is √(s(s+1))ħ = √2 ħ, while the largest measurable z-component is only sħ = ħ. The ħ distractor is that maximum projection, the standard confusion between the length of the vector and its largest component; the two can never be equal for a nonzero spin. For comparison, an electron with s = ½ has magnitude √3 ħ/2 and maximum projection ħ/2."
      },

      // [SR/length contraction]
      {
        "question": "A cube of rest mass M and rest-frame edge length L₀ moves at 0.60c parallel to one of its edges. In the laboratory frame, its total energy divided by c² and by the volume it occupies is",
        "choices": [
          "0.64M/L₀³",
          "0.80M/L₀³",
          "1.0M/L₀³",
          "1.25M/L₀³",
          "1.6M/L₀³"
        ],
        "answer": "E",
        "explanation": "With γ = 1.25, the total energy is γMc² and the volume is contracted along one edge to L₀³/γ, so the quantity asked for is γ²M/L₀³ = 1.56M/L₀³, most nearly 1.6M/L₀³. Two independent factors of γ appear — one from the energy, one from the contraction — and taking only the first gives the 1.25 distractor. The 0.80 value is the volume contraction alone, with the energy left unrelativistic."
      },

      // [LM/diodes & rectifiers]
      {
        "question": "A 60 Hz sinusoidal voltage is applied to an ideal full-wave rectifier with no smoothing capacitor. The fundamental frequency of the ripple in the output voltage is",
        "choices": [
          "15 Hz",
          "30 Hz",
          "60 Hz",
          "90 Hz",
          "120 Hz"
        ],
        "answer": "E",
        "explanation": "A full-wave rectifier flips the negative half-cycles up rather than discarding them, so the output repeats twice per input cycle and the ripple fundamental is 120 Hz. The 60 Hz distractor is the half-wave answer, where alternate half-cycles are simply blocked and the period matches the input. The doubled ripple frequency is a practical advantage: it is easier to filter, since a given capacitor has half the reactance at twice the frequency."
      },

      // [CM/center of mass]
      {
        "question": "A uniform wire is bent into a semicircular arc of radius R. The distance of its center of mass from the center of the circle is",
        "choices": [
          "2R/π",
          "R/π",
          "R/2",
          "4R/3π",
          "πR/2"
        ],
        "answer": "A",
        "explanation": "Taking the arc symmetric about the y-axis, ȳ = (1/πR)∫₀^π R sinθ · R dθ = 2R/π ≈ 0.64R. The 4R/3π distractor is the center of mass of a uniform semicircular lamina, where the material near the diameter pulls the average inward; a wire has all its mass out at radius R, so its center of mass must lie farther out than the disk's. Since every mass element is at distance R, the answer is bound to be less than R but not much less."
      },

      // [OW/refraction & snell's law]
      {
        "question": "Light traveling inside glass of index 1.50 strikes a plane boundary with water of index 1.33 at an angle of incidence of 40°. The angle of refraction in the water is most nearly",
        "choices": [
          "29°",
          "33°",
          "40°",
          "44°",
          "46°"
        ],
        "answer": "E",
        "explanation": "Snell's law gives sin θ₂ = (1.50/1.33) sin 40° = 1.128 × 0.643 = 0.725, so θ₂ = 46°. The ray bends away from the normal because it is entering the less dense medium. The 33° distractor comes from inverting the index ratio, which would describe light going from water into glass. Total internal reflection would only set in beyond the critical angle arcsin(1.33/1.50) = 62°, so a transmitted ray certainly exists at 40°."
      },

      // [SP/particle decays & annihilation]
      {
        "question": "A photon passing near a heavy nucleus can convert into an electron-positron pair. Taking the electron rest energy to be 0.511 MeV, the minimum photon energy for which this is possible is most nearly",
        "choices": [
          "0.26 MeV",
          "0.51 MeV",
          "0.66 MeV",
          "0.77 MeV",
          "1.02 MeV"
        ],
        "answer": "E",
        "explanation": "Two particles of rest energy 0.511 MeV must be created, so the threshold is 2 × 0.511 = 1.02 MeV, the recoil of the massive nucleus adding a negligible correction. The 0.51 MeV distractor accounts for only one of the two particles. The nucleus is essential rather than incidental: in empty space a single photon cannot convert to a pair at all, because no frame exists in which the pair's total momentum vanishes while the photon's does not."
      },

      // [EM/coulomb's law & E-field]
      {
        "question": "A charge +4q is fixed at the origin and a charge −q is fixed at x = L on the x-axis. The electric field vanishes at",
        "choices": [
          "x = 2L",
          "x = 2L/3",
          "x = L/2",
          "x = −L",
          "no point on the x-axis"
        ],
        "answer": "A",
        "explanation": "A null can only occur outside the pair and on the side of the weaker charge, so try x > L: 4/x² = 1/(x − L)² gives 2(x − L) = x and x = 2L. Between the charges both fields point in the +x direction and cannot cancel, which rules out x = L/2 and x = 2L/3. To the left of the origin the larger charge is also the nearer one, so no cancellation is possible there either — the geometry alone eliminates three of the five options before any algebra."
      }

    ]
  },

  {
    "name": "Practice Test 3",
    "added": "2026-08-14",
    "category": "practice",
    "cards": [

      // [CM/rotational dynamics]
      {
        "question": "A uniform rod of mass M and length L hangs at rest from a frictionless pivot at its upper end. A horizontal impulsive blow, perpendicular to the rod, is delivered at a distance d below the pivot. The pivot exerts no impulsive horizontal reaction on the rod if d is",
        "choices": [
          "L/3",
          "L/2",
          "2L/3",
          "3L/4",
          "L"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nLinear impulse gives J = Mv_cm; angular impulse about the pivot gives Jd = (ML²/3)ω. Rotation about the pivot forces v_cm = ωL/2, so J = MωL/2, and substituting leaves d = 2L/3. The trap is L/2, the centre of mass: a blow there does produce a reaction at the pivot.\n\n90-SECOND SOLUTION\nWrite the two impulse equations, eliminate ω, and read off d. If you recognise this as the centre of percussion — the sweet spot of a bat — the answer is recall and the question takes fifteen seconds.\n\nWHAT TO MEMORIZE\nI = ML²/3 for a rod about its end. Nothing else."
      },

      // [CM/central force & orbits]
      {
        "question": "A particle moves in a bound orbit under an attractive inverse-square force. Its total energy is E, which is negative. Its time-averaged kinetic energy is",
        "choices": [
          "−2E",
          "−E",
          "−E/2",
          "E/2",
          "2E"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe virial theorem for an inverse-square force gives 2⟨T⟩ = −⟨U⟩. Combining with ⟨T⟩ + ⟨U⟩ = E gives ⟨T⟩ = −E, positive as required. The trap is −E/2, from assuming ⟨T⟩ = ⟨U⟩ as for a harmonic potential.\n\n90-SECOND SOLUTION\nApply the virial relation, substitute into the energy sum, and check the sign: ⟨T⟩ must come out positive, which eliminates 2E and E/2 immediately.\n\nWHAT TO MEMORIZE\nThe virial theorem 2⟨T⟩ = −⟨U⟩ for inverse-square attraction, and that the harmonic case is different (⟨T⟩ = ⟨U⟩)."
      },

      // [CM/kinematics]
      {
        "question": "A projectile is launched from the bottom of a plane inclined at angle α to the horizontal, and travels up the slope. Neglecting air resistance, the launch angle measured from the horizontal that maximizes the distance travelled along the slope is",
        "choices": [
          "45°",
          "45° + α/2",
          "45° − α/2",
          "90° − α",
          "45° + α"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nIn axes tilted with the slope the optimum is 45° from the slope itself, which works out to 45° + α/2 from the horizontal. The trap is 45° + α, from adding the full slope angle instead of bisecting.\n\n90-SECOND SOLUTION\nDo not derive this — limit-check the candidates. At α = 0 the answer must be 45°, killing 90° − α. At α = 90°, firing straight up a wall, it must be 90°, and only 45° + α/2 gives that.\n\nWHAT TO MEMORIZE\nThat the optimum bisects the angle between the slope and the vertical. Limit-checking replaces the rest."
      },

      // [CM/pendulum]
      {
        "question": "A pendulum clock keeps perfect time at 20 °C. Its pendulum is a rod with linear expansion coefficient 1.2 × 10⁻⁵ K⁻¹. If the room warms to 40 °C, the clock will",
        "choices": [
          "lose about 10 s per day",
          "gain about 10 s per day",
          "lose about 5 s per day",
          "lose about 21 s per day",
          "keep perfect time, since the period is independent of the bob's mass"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nΔL/L = αΔθ = 2.4 × 10⁻⁴, and since T ∝ √L the period changes by half that, 1.2 × 10⁻⁴. A longer period means fewer ticks, so the clock loses (1.2 × 10⁻⁴)(86,400 s) ≈ 10 s per day. The trap is 21 s, from forgetting the factor of ½.\n\n90-SECOND SOLUTION\nCompute the fractional length change, halve it for the square root, multiply by seconds per day. The direction is inference: a longer pendulum swings slower, so the clock runs slow.\n\nWHAT TO MEMORIZE\nT = 2π√(L/g), ΔL = LαΔθ, and 86,400 s per day."
      },

      // [CM/momentum & collisions]
      {
        "question": "Two blocks, of mass m and 2m, are held together on a frictionless horizontal surface with a compressed spring between them. They are released and the spring falls away. The ratio of the kinetic energy of the lighter block to that of the heavier block is",
        "choices": [
          "1/4",
          "1/2",
          "1",
          "2",
          "4"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nMomentum is zero throughout, so both blocks carry equal and opposite momenta. Writing K = p²/2m shows kinetic energy is inversely proportional to mass at fixed momentum, so the lighter block carries twice as much. The trap is ½, from assuming equal speeds.\n\n90-SECOND SOLUTION\nRecognise that zero total momentum forces equal |p|, then the ratio is just the inverse mass ratio. No numbers needed.\n\nWHAT TO MEMORIZE\nK = p²/2m — the single most useful rewriting of kinetic energy on this exam."
      },

      // [CM/SHM]
      {
        "question": "A uniform solid sphere of radius r rolls without slipping inside a fixed hemispherical bowl of radius R, oscillating with small amplitude about the lowest point. The period of the oscillation is",
        "choices": [
          "2π√((R − r)/g)",
          "2π√(5(R − r)/7g)",
          "2π√(2(R − r)/3g)",
          "2π√(R/g)",
          "2π√(7(R − r)/5g)"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe sphere's centre moves on a circle of radius (R − r), and rolling raises the effective inertia by (1 + I/mr²) = 7/5, so the period is the pendulum result stretched by √(7/5).\n\n90-SECOND SOLUTION\nRolling always makes oscillation slower, so the answer must exceed the plain pendulum period 2π√((R − r)/g). That one inference eliminates the 5/7 and 2/3 versions and leaves a single candidate.\n\nWHAT TO MEMORIZE\nI = ⅖mr² for a solid sphere, and that rolling multiplies the period by √(1 + I/mr²)."
      },

      // [CM/moment of inertia]
      {
        "question": "A uniform solid sphere of mass M and radius R has moment of inertia ⅖MR² about a diameter. Its moment of inertia about an axis tangent to its surface is",
        "choices": [
          "⅖MR²",
          "⅗MR²",
          "MR²",
          "7/5 MR²",
          "12/5 MR²"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe parallel-axis theorem adds Md², and a tangent line sits one radius from the central diameter, so I = ⅖MR² + MR² = 7/5 MR². The trap is 12/5 MR², from using d = 2R.\n\n90-SECOND SOLUTION\nAdd Md² with d = R. The only real decision is that 'tangent' means a shift of R, not 2R — sketch it for two seconds rather than trusting instinct.\n\nWHAT TO MEMORIZE\nI = ⅖MR² for a solid sphere and the parallel-axis theorem I = I_cm + Md²."
      },

      // [CM/damped/driven oscillator]
      {
        "question": "A mass of 0.50 kg on a spring of force constant 200 N/m is immersed in a fluid that exerts a drag force −bv. The motion is critically damped when b is most nearly",
        "choices": [
          "5.0 kg/s",
          "10 kg/s",
          "14 kg/s",
          "20 kg/s",
          "40 kg/s"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nCritical damping is where the two roots of the characteristic equation coincide, at b = 2√(mk) = 2√100 = 20 kg/s. The traps are 10 kg/s, which is √(mk) without the factor of 2, and 40 kg/s.\n\n90-SECOND SOLUTION\nOne substitution into b = 2√(mk). If you blank on the factor of 2, write mẍ + bẋ + kx = 0, try x = e^(λt), and demand the roots coincide — about twenty seconds.\n\nWHAT TO MEMORIZE\nb_crit = 2√(mk), equivalently β = ω₀ where β = b/2m."
      },

      // [CM/work-energy]
      {
        "question": "A particle moves in the xy-plane under the potential energy U(x, y) = kxy, where k is a positive constant. At the point (a, a) the magnitude of the force on the particle is",
        "choices": [
          "ka",
          "√2 ka",
          "2ka",
          "ka²",
          "zero"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nF = −∇U gives F_x = −ky and F_y = −kx, both equal to −ka at (a, a), so the magnitude is √2 ka and the force points back toward the origin. The trap is ka, from computing only one component.\n\n90-SECOND SOLUTION\nDifferentiate twice, evaluate, add in quadrature. The dimensional check kills ka² instantly: U is an energy, so k carries energy per area and force must go as ka.\n\nWHAT TO MEMORIZE\nF = −∇U. That one relation is the whole question."
      },

      // [CM/gravitation]
      {
        "question": "For a spherical Earth of uniform density and radius R, the acceleration due to gravity at a depth d below the surface equals its value at a height h above the surface when",
        "choices": [
          "d = h/2",
          "d = h",
          "d = 2h",
          "d = 4h",
          "d = h²/R"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nInside a uniform sphere g falls linearly, g(d) = g(1 − d/R); outside it falls as 1/r², so g(h) ≈ g(1 − 2h/R). Setting them equal gives d = 2h. The trap is d = h, which assumes the two behaviours are symmetric.\n\n90-SECOND SOLUTION\nWrite both expressions, expand the outside one binomially, equate. The factor of 2 from the expansion is the entire question.\n\nWHAT TO MEMORIZE\ng linear inside a uniform sphere, inverse-square outside, and the expansion (1 + x)⁻² ≈ 1 − 2x."
      },

      // [EM/biot-savart & ampere's law]
      {
        "question": "A coaxial cable has an inner conductor carrying a steady current of 5.0 A along the +z direction and an outer cylindrical shell carrying 5.0 A in the −z direction. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the magnitude of the magnetic field at a point 2.0 mm from the axis, in the space between the conductors, is most nearly",
        "choices": [
          "0.10 mT",
          "0.25 mT",
          "0.50 mT",
          "1.0 mT",
          "zero"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nAn Amperian loop between the conductors encloses only the inner current, so B = μ₀I/2πr = (2 × 10⁻⁷)(5.0)/(2.0 × 10⁻³) = 5.0 × 10⁻⁴ T. The return current lies outside the loop and contributes nothing; 'zero' is correct only outside the cable entirely.\n\n90-SECOND SOLUTION\nOne division, once you see that only enclosed current matters. A coaxial cable is just a wire until you step outside the shell.\n\nWHAT TO MEMORIZE\nB = μ₀I/2πr, and the shortcut μ₀/2π = 2 × 10⁻⁷ exactly."
      },

      // [EM/inductance]
      {
        "question": "A long solenoid produces a uniform magnetic field of magnitude 0.10 T in its interior. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the energy stored per unit volume of that field is most nearly",
        "choices": [
          "4.0 × 10³ J/m³",
          "8.0 × 10³ J/m³",
          "4.0 × 10⁴ J/m³",
          "1.3 × 10⁵ J/m³",
          "4.0 × 10⁵ J/m³"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe magnetic energy density is u = B²/2μ₀ = 0.010/(2.51 × 10⁻⁶) ≈ 4.0 × 10³ J/m³. The trap is 8.0 × 10³, from dropping the factor of 2 — the same slip that turns ½CV² into CV².\n\n90-SECOND SOLUTION\nOne substitution. Anchor the magnitude: a 1 T field stores about 4 × 10⁵ J/m³, so dropping B by 100 drops the density by 10⁴.\n\nWHAT TO MEMORIZE\nThe mirror pair u_E = ½ε₀E² and u_B = B²/2μ₀ — learn them together."
      },

      // [EM/induction & faraday]
      {
        "question": "An ideal transformer has 1,200 turns on its primary winding, connected to a 120 V rms supply, and 100 turns on its secondary. The secondary delivers 6.0 A rms to its load. The rms current drawn by the primary is most nearly",
        "choices": [
          "0.50 A",
          "6.0 A",
          "12 A",
          "36 A",
          "72 A"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nAn ideal transformer conserves power. The secondary sits at 120 × (100/1200) = 10 V and delivers 60 W, so the primary draws 60 W at 120 V, giving 0.50 A. The trap is 72 A, from applying the turns ratio backwards.\n\n90-SECOND SOLUTION\nGo through power rather than the turns ratio — it is impossible to invert by accident. A step-down transformer raises secondary current, so the primary current is the small one.\n\nWHAT TO MEMORIZE\nVoltage scales with turns, current inversely; and that an ideal transformer conserves power."
      },

      // [EM/induction & faraday]
      {
        "question": "A small strong magnet is dropped down the axis of a long vertical copper tube. Copper is not ferromagnetic. Which of the following best describes the motion?",
        "choices": [
          "The magnet quickly approaches a constant terminal speed, and the tube warms slightly",
          "The magnet falls freely, since copper is not magnetic",
          "The magnet accelerates uniformly but at less than g, and never reaches a constant speed",
          "The magnet is repelled upward and does not fall",
          "The magnet falls freely but the tube acquires a permanent magnetization"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe moving magnet changes the flux through each ring-shaped element of the tube wall, driving eddy currents whose field opposes the change. The retarding force grows with speed until it balances gravity, and the lost potential energy appears as resistive heating. The trap is the claim that the magnet falls freely, which confuses 'not ferromagnetic' with 'not conducting'.\n\n90-SECOND SOLUTION\nFour steps, no formulas: changing flux drives current, current opposes the change, opposition grows with speed, speed saturates. Then ask where the gravitational energy went — that is what separates the right answer from the merely plausible one.\n\nWHAT TO MEMORIZE\nLenz's law. Nothing else."
      },

      // [EM/inductance]
      {
        "question": "Two coils are positioned so that their mutual inductance is 0.50 H. The current in the first coil is increased at a steady rate of 4.0 A/s. The magnitude of the emf induced in the second coil is",
        "choices": [
          "0.13 V",
          "2.0 V",
          "4.0 V",
          "8.0 V",
          "20 V"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nMutual inductance is defined by ε₂ = M dI₁/dt, giving (0.50)(4.0) = 2.0 V. The emf depends on the rate of change of current, not the current itself, which is why no current value is supplied. The trap is 0.13 V, from dividing instead of multiplying.\n\n90-SECOND SOLUTION\nOne multiplication. The dimensional check settles the direction of the operation: henries times amperes per second gives volts.\n\nWHAT TO MEMORIZE\nε = M dI/dt, and its self-inductance twin ε = L dI/dt."
      },

      // [EM/EM waves & poynting]
      {
        "question": "An alternating current flows in a thick copper conductor. When the frequency is increased by a factor of 100, the depth to which the current penetrates the conductor changes by a factor of",
        "choices": [
          "1/100",
          "1/10",
          "1",
          "10",
          "100"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nSkin depth is δ = √(2/μσω), so δ ∝ ω⁻¹/² and a hundredfold rise in frequency cuts penetration by √100 = 10. The trap is 1/100, from assuming a linear dependence.\n\n90-SECOND SOLUTION\nRead the exponent off the scaling and take a square root. If the scaling is gone, infer it: fields diffuse into a conductor, and diffusion lengths always go as the square root of a time.\n\nWHAT TO MEMORIZE\nδ ∝ 1/√f. The constants almost never matter; the exponent always does."
      },

      // [EM/multipole expansion]
      {
        "question": "A localized static charge distribution has zero net charge and zero electric dipole moment, but a nonzero electric quadrupole moment. Far from the distribution, the magnitude of the electric field falls off as",
        "choices": [
          "1/r",
          "1/r²",
          "1/r³",
          "1/r⁴",
          "1/r⁵"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nEach successive multipole potential carries one more power of 1/r — monopole 1/r, dipole 1/r², quadrupole 1/r³ — and the field adds one more, so the quadrupole field falls as 1/r⁴. The trap is 1/r³, which is the quadrupole potential, or equivalently the dipole field.\n\n90-SECOND SOLUTION\nWrite the two ladders in the margin, V: 1/r, 1/r², 1/r³ and E: 1/r², 1/r³, 1/r⁴, and read off. Ten seconds, and it removes all ambiguity between V and E.\n\nWHAT TO MEMORIZE\nOne anchor: a dipole field goes as 1/r³. Count up or down from there."
      },

      // [EM/magnetic materials]
      {
        "question": "A long solenoid is wound with 1,000 turns per meter and carries a current of 0.20 A. Its interior is completely filled with a material of relative permeability 500. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the magnitude of the magnetic field inside is most nearly",
        "choices": [
          "2.5 × 10⁻⁴ T",
          "1.3 × 10⁻³ T",
          "0.013 T",
          "0.063 T",
          "0.13 T"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nAn empty solenoid gives B = μ₀nI = 2.5 × 10⁻⁴ T, and filling the core multiplies this by the relative permeability: 500 × 2.5 × 10⁻⁴ ≈ 0.13 T. The trap is 2.5 × 10⁻⁴ T, the empty-core value.\n\n90-SECOND SOLUTION\nOne multiplication after the empty-core field. Check direction first: μ_r > 1 concentrates flux, so the field must rise, which eliminates two choices before any arithmetic.\n\nWHAT TO MEMORIZE\nB = μ₀nI, and that a linear magnetic medium replaces μ₀ by μ_rμ₀."
      },

      // [EM/conductors & capacitance]
      {
        "question": "A 2.0 μF capacitor is charged to 100 V and then disconnected from its source. It is then connected in parallel with an uncharged 3.0 μF capacitor. The energy dissipated in the process is most nearly",
        "choices": [
          "zero",
          "2.0 mJ",
          "4.0 mJ",
          "6.0 mJ",
          "10 mJ"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nBefore: ½CV² = 10 mJ. Charge is conserved at 2.0 × 10⁻⁴ C, now on 5.0 μF, so the common voltage is 40 V and the stored energy is 4.0 mJ. The missing 6.0 mJ is dissipated no matter how small the resistance. The trap is 'zero', from assuming energy is conserved because charge is.\n\n90-SECOND SOLUTION\nUse Q²/2C rather than ½CV²: the same charge on a larger capacitance means less energy, so the answer is 10 mJ × (1 − 2/5) = 6 mJ in one step.\n\nWHAT TO MEMORIZE\nU = ½CV² = Q²/2C, and that charge — not voltage or energy — is the conserved quantity here."
      },

      // [QM/infinite square well]
      {
        "question": "An electron is confined to a one-dimensional infinite square well of width 0.50 nm. Taking h = 6.63 × 10⁻³⁴ J·s and m_e = 9.11 × 10⁻³¹ kg, the wavelength of the photon emitted in the transition from n = 2 to n = 1 is most nearly",
        "choices": [
          "82 nm",
          "110 nm",
          "140 nm",
          "205 nm",
          "270 nm"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nE_n = n²h²/8mL² gives E₁ ≈ 1.5 eV, so the n = 2 to n = 1 gap is 3E₁ ≈ 4.5 eV and λ = 1240/4.5 ≈ 270 nm. The trap is 82 nm, from using E₂ alone rather than the difference.\n\n90-SECOND SOLUTION\nGet E₁, multiply by 3 (not 4 — transitions are differences), then divide into 1240 eV·nm. That conversion turns every photon question into a single division.\n\nWHAT TO MEMORIZE\nE_n = n²h²/8mL², hc = 1240 eV·nm, and the anchor that a half-nanometre box has E₁ ≈ 1.5 eV."
      },

      // [QM/compton scattering]
      {
        "question": "In Compton scattering of photons from free electrons, the Compton wavelength of the electron is 2.43 × 10⁻¹² m. The largest possible increase in the photon's wavelength is most nearly",
        "choices": [
          "zero",
          "1.2 × 10⁻¹² m",
          "2.4 × 10⁻¹² m",
          "4.9 × 10⁻¹² m",
          "9.7 × 10⁻¹² m"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nΔλ = λ_C(1 − cos θ) is largest at θ = 180°, where 1 − cos θ = 2, giving 2λ_C ≈ 4.9 × 10⁻¹² m. The trap is 2.4 × 10⁻¹² m, the shift at 90° rather than the maximum.\n\n90-SECOND SOLUTION\nRecognise that cos θ is bounded below by −1 and double the Compton wavelength. The shift is additive and independent of the incident wavelength, which is why the effect is invisible for visible light.\n\nWHAT TO MEMORIZE\nΔλ = λ_C(1 − cos θ) and λ_C = 2.43 pm."
      },

      // [QM/x-rays]
      {
        "question": "The Kα X-ray line of aluminum (Z = 13) has energy 1.5 keV. Using Moseley's law, the energy of the Kα line of manganese (Z = 25) is most nearly",
        "choices": [
          "1.5 keV",
          "2.9 keV",
          "4.3 keV",
          "5.6 keV",
          "6.0 keV"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nMoseley's law makes the Kα energy scale as (Z − 1)², the screening constant accounting for the second K-shell electron. The ratio is ((25 − 1)/(13 − 1))² = 4, so the energy is 6.0 keV. The traps are 5.6 keV, from (25/13)² without screening, and 2.9 keV, from scaling linearly in Z.\n\n90-SECOND SOLUTION\nOne ratio. Notice that 12 and 24 differ by exactly 2 — the numbers were chosen so the screening term matters, which is itself a hint that you are meant to use it.\n\nWHAT TO MEMORIZE\nMoseley's law in the form E ∝ (Z − 1)²."
      },

      // [QM/hydrogen atom]
      {
        "question": "A hydrogen atom is in a state with principal quantum number n = 4 and orbital angular momentum quantum number l = 1. The number of radial nodes in its wavefunction is",
        "choices": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe radial function has n − l − 1 = 2 nodes. The angular part contributes l = 1 more, for n − 1 = 3 overall — which is the trap, since the question asks specifically for radial nodes.\n\n90-SECOND SOLUTION\nThere is no derivation available in the time; this is recall plus careful reading. Questions in this family hinge on which of the three counts is requested, not on the arithmetic.\n\nWHAT TO MEMORIZE\nn − l − 1 radial nodes, l angular nodes, n − 1 in total."
      },

      // [QM/pauli exclusion & electron configuration]
      {
        "question": "In a multi-electron atom, the maximum number of electrons that can have principal quantum number n = 4 and orbital angular momentum quantum number l = 2 is",
        "choices": [
          "2",
          "6",
          "10",
          "14",
          "32"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nEach l has 2l + 1 values of m_l, here 5, and each holds two electrons of opposite spin, giving 10 — the capacity that makes the transition-metal rows ten elements wide. The trap is 32, the capacity of the whole n = 4 shell.\n\n90-SECOND SOLUTION\nRecognise l = 2 as a d subshell and read off 10. The value of n is a deliberate red herring: capacity depends only on l, and spotting the irrelevant given is the actual skill here.\n\nWHAT TO MEMORIZE\nThe subshell capacity 2(2l + 1), or equivalently s/p/d/f = 2/6/10/14."
      },

      // [QM/probability & expectation values]
      {
        "question": "A particle in one dimension is in a bound stationary state whose wavefunction ψ(x) can be taken to be real. The expectation value of its momentum is",
        "choices": [
          "zero",
          "ħk, where k is the wave number",
          "positive but not determined without more information",
          "imaginary",
          "determined only by the potential"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nFor real ψ, ⟨p⟩ = ∫ψ(−iħ dψ/dx)dx is −iħ times a real integral and so purely imaginary; but p is Hermitian, so ⟨p⟩ must be real. Only zero is both. Physically, a bound stationary state is not going anywhere. The trap is ħk, which belongs to a travelling plane wave.\n\n90-SECOND SOLUTION\nSkip the integral: reality plus Hermiticity forces zero. The argument generalises — any operator that is purely imaginary in a real basis has zero expectation value in a real state.\n\nWHAT TO MEMORIZE\nThat bound stationary states can be chosen real, and therefore carry zero average momentum."
      },

      // [QM/de broglie waves]
      {
        "question": "A ball of mass 1.0 kg moves at 1.0 m/s. Taking h = 6.6 × 10⁻³⁴ J·s, its de Broglie wavelength is of order",
        "choices": [
          "10⁻¹⁰ m",
          "10⁻¹⁵ m",
          "10⁻²⁰ m",
          "10⁻³⁴ m",
          "10⁻⁶⁸ m"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nλ = h/p = 6.6 × 10⁻³⁴/(1.0 × 1.0) ≈ 6.6 × 10⁻³⁴ m, some twenty orders below a nuclear diameter — which is why wave behaviour is invisible for macroscopic objects. The trap is 10⁻¹⁰ m, the atomic scale where thermal-electron wavelengths land.\n\n90-SECOND SOLUTION\nWith mass and speed both unity the answer is literally Planck's constant in metres. No arithmetic at all.\n\nWHAT TO MEMORIZE\nλ = h/p, and h ≈ 6.6 × 10⁻³⁴ J·s."
      },

      // [QM/atomic spectra & selection rules]
      {
        "question": "For electric-dipole transitions in a one-electron atom, which of the following transitions is forbidden?",
        "choices": [
          "3p → 2s",
          "3d → 2p",
          "4f → 3d",
          "3s → 2s",
          "2p → 1s"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nElectric-dipole transitions require Δl = ±1, because the photon carries one unit of angular momentum. Of the five, only 3s → 2s has Δl = 0 and is forbidden; such transitions proceed by much weaker higher-order processes, which is why metastable states exist.\n\n90-SECOND SOLUTION\nScan the five for the one that fails Δl = ±1 — about fifteen seconds. Δn is unconstrained, so the changing principal quantum numbers are deliberate noise.\n\nWHAT TO MEMORIZE\nΔl = ±1, and the letter-to-l dictionary s/p/d/f = 0/1/2/3."
      },

      // [QM/bohr model]
      {
        "question": "In muonic hydrogen a muon, of mass 207 times the electron mass, is bound to a proton. Taking the ordinary Bohr radius to be 5.3 × 10⁻¹¹ m and neglecting the reduced-mass correction, the radius of the muon's ground-state orbit is most nearly",
        "choices": [
          "2.6 × 10⁻¹³ m",
          "1.1 × 10⁻¹² m",
          "5.3 × 10⁻¹¹ m",
          "1.1 × 10⁻⁸ m",
          "2.6 × 10⁻⁹ m"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe Bohr radius a₀ = 4πε₀ħ²/me² is inversely proportional to the orbiting mass, so the muon orbits 207 times closer: 5.3 × 10⁻¹¹/207 ≈ 2.6 × 10⁻¹³ m — comparable to nuclear dimensions, which is why muonic atoms probe nuclear charge radii. The trap is 2.6 × 10⁻⁹ m, from multiplying rather than dividing.\n\n90-SECOND SOLUTION\nOne division, but confirm the direction physically first: a heavier particle is harder to spread out, so it orbits closer in. That check alone eliminates three of the five choices.\n\nWHAT TO MEMORIZE\na₀ ∝ 1/m and its partner E ∝ m — the pair that handles muonic atoms, positronium and excitons alike."
      },

      // [QM/harmonic oscillator]
      {
        "question": "A particle moves in a three-dimensional isotropic harmonic oscillator potential of angular frequency ω. The degeneracy of the first excited energy level is",
        "choices": [
          "1",
          "2",
          "3",
          "5",
          "6"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe energy is (n_x + n_y + n_z + 3/2)ħω, so the first excited level has the sum equal to 1, reached by (1,0,0), (0,1,0) and (0,0,1) — three states. The trap is 5, which is 2l + 1 for l = 2 and belongs to the second excited level.\n\n90-SECOND SOLUTION\nEnumerate rather than recall: listing the ways to write 1 as an ordered sum of three non-negative integers is faster than remembering (N + 1)(N + 2)/2.\n\nWHAT TO MEMORIZE\nThat the 3D isotropic oscillator's energy depends only on n_x + n_y + n_z."
      },

      // [QM/operators & commutators]
      {
        "question": "For a particle of mass m moving in one dimension, the time derivative of the expectation value of position, d⟨x⟩/dt, is equal to",
        "choices": [
          "zero for all states",
          "−⟨dV/dx⟩",
          "⟨p⟩/m only for stationary states",
          "iħ⟨p⟩",
          "⟨p⟩/m"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEhrenfest's theorem gives d⟨A⟩/dt = (i/ħ)⟨[H, A]⟩, and evaluating [H, x] leaves only the kinetic term, so d⟨x⟩/dt = ⟨p⟩/m. The trap is −⟨dV/dx⟩, which is the correct expression for d⟨p⟩/dt — the other half of the pair.\n\n90-SECOND SOLUTION\nNo derivation needed; identify which half of Ehrenfest's pair is being asked. The dimensional check kills iħ⟨p⟩ on sight, since it has the wrong units for a velocity.\n\nWHAT TO MEMORIZE\nBoth halves together: d⟨x⟩/dt = ⟨p⟩/m and d⟨p⟩/dt = −⟨dV/dx⟩ — the quantum restatement of Newton's laws."
      },

      // [TS/maxwell-boltzmann distribution]
      {
        "question": "For an ideal gas in equilibrium, the ratio of the root-mean-square molecular speed to the most probable molecular speed is",
        "choices": [
          "1.00",
          "1.13",
          "1.22",
          "1.41",
          "1.73"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nMaxwell-Boltzmann gives v_rms = √(3kT/m) and v_mp = √(2kT/m), so the ratio is √(3/2) ≈ 1.22. The trap is 1.13, which is v_avg/v_mp — the three characteristic speeds sit close together and are easily confused.\n\n90-SECOND SOLUTION\nTake the ratio of the two coefficients and square-root it. The ordering is inference: rms weights fast molecules most heavily, so it must be the largest, which eliminates 1.00 before you start.\n\nWHAT TO MEMORIZE\nThe three coefficients under the root, in increasing order: 2 most probable, 8/π mean, 3 rms."
      },

      // [TS/partition function]
      {
        "question": "A system consists of N identical, distinguishable, non-interacting particles, each of which has exactly two states, of energy 0 and ε. In the limit of very high temperature, the total energy of the system approaches",
        "choices": [
          "0",
          "Nε/4",
          "Nε/2",
          "Nε",
          "3Nε/2"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nAt high temperature the Boltzmann factor approaches 1, both states become equally likely, and each particle averages ε/2 — so Nε/2 in total. The trap is Nε, which would need every particle in the upper state, impossible at positive temperature.\n\n90-SECOND SOLUTION\nSkip the partition function: infinite temperature means equal populations, so the mean energy is the unweighted average of the level energies. That reasoning generalises to any finite set of levels.\n\nWHAT TO MEMORIZE\nZ = 1 + e^(−ε/kT) for a two-level system, though the limit argument avoids needing it."
      },

      // [TS/equipartition]
      {
        "question": "A diatomic ideal gas is held at room temperature, where rotational modes are fully excited but vibrational modes are frozen out. Its molar heat capacity at constant volume is",
        "choices": [
          "3R/2",
          "5R/2",
          "3R",
          "7R/2",
          "4R"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nEquipartition gives ½R per mole per active quadratic degree of freedom: three translational plus two rotational is 5R/2. The trap is 7R/2, which includes the two vibrational degrees that switch on only at much higher temperature.\n\n90-SECOND SOLUTION\nCount active degrees of freedom and multiply by ½R. The temperature specification is doing real work — it tells you the vibrational modes are frozen out.\n\nWHAT TO MEMORIZE\n½R per active degree of freedom, and the count 3 + 2 for a rigid diatomic."
      },

      // [TS/mean free path]
      {
        "question": "A gas is held at constant temperature while its pressure is reduced to half its original value. The mean free path of its molecules",
        "choices": [
          "is halved",
          "is doubled",
          "is unchanged",
          "increases by a factor of √2",
          "increases by a factor of 4"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nλ = 1/(√2 nσ) depends on number density, and at fixed temperature the ideal gas law makes n proportional to P — so halving the pressure doubles the mean free path. The trap is 'is halved', from confusing an inverse dependence with a direct one.\n\n90-SECOND SOLUTION\nUse only the proportionality; the √2 and the cross-section cancel in any ratio question. Fewer molecules in the way means longer free flights.\n\nWHAT TO MEMORIZE\nλ ∝ 1/n and n = P/kT."
      },

      // [TS/second law & entropy]
      {
        "question": "Two moles of an ideal gas undergo a free expansion into a vacuum, doubling their volume, inside a rigid insulated container. The change in the entropy of the gas is most nearly",
        "choices": [
          "zero",
          "5.8 J/K",
          "12 J/K",
          "17 J/K",
          "23 J/K"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFree expansion does no work and transfers no heat, so an ideal gas keeps its temperature; but entropy is a state function, so compute along a reversible isothermal path: ΔS = nR ln 2 = 2(8.31)(0.693) ≈ 12 J/K. The trap is 'zero', from combining the true Q = 0 with the false assumption that ΔS = Q/T applies to an irreversible process.\n\n90-SECOND SOLUTION\nSubstitute a reversible path and apply the formula. Recognising that free expansion is irreversible, and must therefore raise entropy, rules out 'zero' before any calculation.\n\nWHAT TO MEMORIZE\nΔS = nR ln(V₂/V₁) for isothermal expansion, ln 2 ≈ 0.69, and that entropy is a state function."
      },

      // [OW/diffraction & gratings]
      {
        "question": "A diffraction grating is illuminated over a region containing 5,000 rulings, and is used in second order at a wavelength near 590 nm. The smallest wavelength difference it can just resolve is most nearly",
        "choices": [
          "0.059 nm",
          "0.12 nm",
          "0.59 nm",
          "1.2 nm",
          "5.9 nm"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe chromatic resolving power is R = λ/Δλ = mN = 2 × 5,000 = 10,000, so Δλ = 590/10,000 = 0.059 nm — enough to split the sodium D doublet at about 0.6 nm. The traps are 0.12 nm, from using N alone, and 0.59 nm.\n\n90-SECOND SOLUTION\nOne division after R = mN. Nothing else is involved.\n\nWHAT TO MEMORIZE\nR = mN, and its prism counterpart R = b(dn/dλ)."
      },

      // [OW/single-slit diffraction]
      {
        "question": "Light of wavelength 600 nm passes through a single slit of width 0.10 mm and falls on a screen 2.0 m away. The width of the central bright fringe, measured between the first minima on either side, is most nearly",
        "choices": [
          "0.30 cm",
          "0.60 cm",
          "1.2 cm",
          "1.8 cm",
          "2.4 cm"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe first minimum sits at sin θ = λ/a, displaced by Lλ/a = 0.012 m on the screen, and the central maximum spans both sides, so its full width is 2.4 cm. The trap is 1.2 cm, the half-width that the formula gives directly.\n\n90-SECOND SOLUTION\nCompute the half-width, then double it because the question says 'between the first minima'. The small-angle step sin θ ≈ y/L is automatic at these scales.\n\nWHAT TO MEMORIZE\na sin θ = mλ for single-slit minima — note it gives minima, the opposite of the double-slit condition."
      },

      // [OW/wave reflection & transmission at boundary]
      {
        "question": "A transverse pulse travels along a light string toward a knot where it joins a much heavier string. Compared with the incident pulse, the pulse reflected back along the light string is",
        "choices": [
          "inverted, and smaller in amplitude",
          "upright, and smaller in amplitude",
          "inverted, and larger in amplitude",
          "upright, and equal in amplitude",
          "absent, since all the energy is transmitted"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nReflection from a boundary with a denser medium inverts the pulse, the heavy string being the limiting case of a fixed end, and some energy is transmitted onward so the reflected pulse is smaller. The trap is 'upright and smaller', which describes reflection off a lighter string.\n\n90-SECOND SOLUTION\nRecall the inversion rule and get the amplitude from energy conservation. The same rule governs light hitting a higher-index medium, which is why thin films carry a π shift at exactly one surface.\n\nWHAT TO MEMORIZE\nReflection off a denser medium inverts; off a lighter one it does not. Anchor it to a string tied to a wall versus one ending in a free ring."
      },

      // [OW/dispersion]
      {
        "question": "A narrow beam of white light passes through a glass prism and is spread into a spectrum. Compared with the red light, the violet light emerges",
        "choices": [
          "deviated less, because its wavelength is shorter",
          "deviated less, because the index of refraction is lower at shorter wavelengths",
          "deviated by the same angle, since deviation depends only on the prism angle",
          "deviated more, because violet light travels faster in glass",
          "deviated more, because the index of refraction is higher at shorter wavelengths"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nIn normal dispersion n rises as wavelength falls, so violet sees a larger index, refracts more strongly at both surfaces, and deviates most. The choice invoking a faster speed in glass inverts the physics: a larger index means a slower phase speed.\n\n90-SECOND SOLUTION\nNo formula. Anchor to the rainbow, where violet sits on the inside of the primary bow because it bends most. Connecting larger n to larger deviation takes five seconds via Snell's law — imagine n → ∞ and watch the ray bend hard toward the normal.\n\nWHAT TO MEMORIZE\nThe direction of normal dispersion: n is larger for blue."
      },

      // [SP/radioactive decay & half-life]
      {
        "question": "The counting rate from a pure radioactive source falls from 800 per second to 100 per second in 30 minutes. The half-life of the source is",
        "choices": [
          "3.75 minutes",
          "5 minutes",
          "7.5 minutes",
          "10 minutes",
          "15 minutes"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe rate falls by a factor of 8 = 2³, so three half-lives have passed in 30 minutes and the half-life is 10 minutes. The trap is 3.75 minutes, from dividing 30 by 8 as though the decay were linear.\n\n90-SECOND SOLUTION\nExpress the ratio as a power of 2 rather than reaching for N = N₀e^(−λt) — that makes it mental arithmetic. Check first: the exam usually chooses clean ratios deliberately.\n\nWHAT TO MEMORIZE\nOnly the definition of half-life. Keep λ = ln2/T½ in reserve for ratios that are not powers of two."
      },

      // [SP/crystal structure & bragg]
      {
        "question": "X-rays of wavelength 0.15 nm are reflected from a set of crystal planes with spacing 0.20 nm. The angle between the incident beam and the planes at which the first-order Bragg maximum occurs is most nearly",
        "choices": [
          "11°",
          "18°",
          "22°",
          "41°",
          "49°"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nBragg's law 2d sin θ = mλ gives sin θ = 0.15/0.40 = 0.375 and θ ≈ 22°. The trap is 49°, from using cos θ or from measuring the angle from the normal — Bragg's angle is measured from the plane, unlike every other angle in optics.\n\n90-SECOND SOLUTION\nOne inverse sine. Sanity check: first-order diffraction needs λ ≤ 2d, so if the arithmetic ever gives sin θ > 1, the wavelength is simply too long.\n\nWHAT TO MEMORIZE\n2d sin θ = mλ, and that θ is measured from the crystal plane, not the normal."
      },

      // [SP/specific heat of solids (debye/einstein)]
      {
        "question": "At temperatures far below its Debye temperature, the heat capacity of a non-metallic crystalline solid is measured. If the absolute temperature is halved, the heat capacity changes by a factor of",
        "choices": [
          "1/16",
          "1/8",
          "1/4",
          "1/2",
          "1"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nIn the Debye regime the lattice heat capacity goes as T³, so halving T divides C by 8. The trap is ½, which assumes the classical Dulong-Petit behaviour that applies far above the Debye temperature. 'Non-metallic' matters: in a metal the electronic γT term would dominate at low enough T.\n\n90-SECOND SOLUTION\nIdentify the regime from the wording, then cube. Noticing 'non-metallic' is the difference between the T³ answer and a linear one.\n\nWHAT TO MEMORIZE\nThe two limits — Dulong-Petit C = 3R above, Debye C ∝ T³ below — plus the metallic γT addition."
      },

      // [SP/particle classification & quarks]
      {
        "question": "The π⁺ meson has electric charge +1 and baryon number 0. Given that the u quark has charge +⅔ and the d quark has charge −⅓, its quark content is",
        "choices": [
          "ud̄",
          "uud",
          "uū",
          "dd̄",
          "us̄"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nA meson is a quark-antiquark pair, which gives baryon number ⅓ − ⅓ = 0 automatically; charge +1 then needs +⅔ from a u and +⅓ from an anti-d, so the content is ud̄. The trap is uud, the proton, which is a baryon and fails the stated condition.\n\n90-SECOND SOLUTION\nBaryon number 0 forces a two-quark combination, eliminating one choice instantly; then charge arithmetic finishes it. uū and dd̄ are neutral, so the whole thing takes seconds.\n\nWHAT TO MEMORIZE\nQuark charges (+⅔ for u, c, t; −⅓ for d, s, b) and that mesons are qq̄ while baryons are qqq."
      },

      // [SP/fourier analysis]
      {
        "question": "A periodic square wave is symmetric about zero, taking the values +1 and −1 for equal halves of each period. Its Fourier series contains",
        "choices": [
          "all harmonics of the fundamental",
          "only even harmonics",
          "only the fundamental",
          "a constant term plus all harmonics",
          "only odd harmonics"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe wave has zero mean, killing the constant term, and satisfies f(t + T/2) = −f(t), which annihilates every even harmonic. What survives are the odd harmonics with amplitudes falling as 1/n. The trap is 'all harmonics', true for an asymmetric waveform such as a sawtooth.\n\n90-SECOND SOLUTION\nCheck the symmetry: shifting by half a period flips the sign, and only odd harmonics do that. The 1/n falloff explains why a square wave rings through a band-limited amplifier.\n\nWHAT TO MEMORIZE\nFor the square wave: odd harmonics only, amplitudes as 1/n."
      },

      // [SR/time dilation]
      {
        "question": "A spacecraft travels from Earth to a star 8.0 light-years away, as measured in the Earth's frame, at a constant speed of 0.80c. The time elapsed on the spacecraft's own clock is most nearly",
        "choices": [
          "4.8 years",
          "6.0 years",
          "8.0 years",
          "10 years",
          "13 years"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nIn Earth's frame the trip takes 8.0/0.80 = 10 years, and the ship's clock measures proper time, shorter by 1/γ = 0.60, giving 6.0 years. Equivalently the distance contracts to 4.8 light-years and is covered at 0.80c in 6.0 years. The traps are 10 years, the Earth-frame time, and 13 years, from multiplying by γ.\n\n90-SECOND SOLUTION\nCompute the Earth-frame time and divide by γ. The direction is reliable inference — the travelling clock always reads less — and cross-checking with the length-contraction picture takes ten seconds.\n\nWHAT TO MEMORIZE\nγ = 5/3 at v = 0.80c. This speed recurs constantly and its γ is worth knowing without computing."
      },

      // [SR/four-vectors]
      {
        "question": "Two events are separated by 3.0 seconds in time and 5.0 light-seconds in space, as measured in one inertial frame. Which of the following is true?",
        "choices": [
          "There exists a frame in which the two events occur at the same place",
          "The two events can be causally connected",
          "The order of the two events is the same in every frame",
          "The interval between them is zero",
          "There exists a frame in which the two events occur at the same time"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe invariant interval is s² = c²Δt² − Δx² = 9 − 25 = −16, negative and therefore spacelike. Spacelike separation means no signal can connect the events, so they cannot be causally related and their time order is frame-dependent — but a frame exists in which they are simultaneous. The trap is 'same place', which is the property of timelike separation.\n\n90-SECOND SOLUTION\nCompute s², read off the sign, and map it: timelike allows same place, spacelike allows same time, lightlike allows neither. Ten seconds.\n\nWHAT TO MEMORIZE\ns² = c²Δt² − Δx² and the three-way classification it produces."
      },

      // [SR/relativistic energy & momentum]
      {
        "question": "A particle's kinetic energy is equal to its rest energy. Its speed is most nearly",
        "choices": [
          "0.50c",
          "0.71c",
          "0.75c",
          "0.87c",
          "0.94c"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nKinetic energy is (γ − 1)mc², so setting it equal to mc² gives γ = 2 and v = c√(1 − ¼) = (√3/2)c ≈ 0.87c. The trap is 0.71c, where γ = √2 and the kinetic energy is only about 0.41mc².\n\n90-SECOND SOLUTION\nTranslate the condition into γ = 2 — that is the step being tested — then use v/c = √(1 − 1/γ²). Stating 'total energy is 2mc²' out loud avoids the off-by-one that produces 0.71c.\n\nWHAT TO MEMORIZE\nv/c = √(1 − 1/γ²), and the common pairs: γ = 2 at 0.87c, γ = 5/3 at 0.80c, γ = 7 at 0.99c."
      },

      // [LM/data fitting & graph reading]
      {
        "question": "A quantity y is measured as a function of x and the data are plotted as log y against log x. The points fall on a straight line of slope 1.5 and intercept 0.30 on the log y axis. The relationship between y and x is best described as",
        "choices": [
          "y = 1.5x + 0.30",
          "y = 0.30x^1.5",
          "y = 1.5 e^(0.30x)",
          "y = 2.0 e^(1.5x)",
          "y = 2.0x^1.5"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nA straight line on log-log axes means log y = m log x + b, which exponentiates to a power law y = 10^b x^m. The slope gives the exponent 1.5 and the intercept gives 10^0.30 ≈ 2.0. The trap is 0.30x^1.5, using the intercept directly instead of raising ten to it.\n\n90-SECOND SOLUTION\nDiagnose the plot type first: log-log straight means power law, semi-log straight means exponential. That alone eliminates the two exponential choices before any reading.\n\nWHAT TO MEMORIZE\nThe two plot diagnostics, and 10^0.3 ≈ 2 — the same fact as 'a factor of 2 is 3 dB'."
      },

      // [LM/dimensional analysis]
      {
        "question": "A small drop of liquid of density ρ and surface tension σ, with σ having dimensions of force per unit length, oscillates about its spherical shape. If the drop has radius R and gravity is irrelevant, the period of oscillation must be proportional to",
        "choices": [
          "√(ρR³/σ)",
          "√(σ/ρR³)",
          "√(ρR/σ)",
          "ρR³/σ",
          "√(σR/ρ)"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nSurface tension has dimensions of mass per time squared, so ρR³/σ has dimensions of time squared and its square root is the only combination with the dimensions of a period. The trap is √(σ/ρR³), which is a frequency rather than a period.\n\n90-SECOND SOLUTION\nNote that ρR³ is the drop's mass, so the group is √(mass/σ) — the same structure as √(m/k) for a spring. Seeing surface tension as the spring constant gives the answer with no algebra, and tells you the period grows with drop size.\n\nWHAT TO MEMORIZE\nThat surface tension is force per length, hence mass per time squared. That single conversion is the crux."
      },

      // [LM/amplifiers & op-amps]
      {
        "question": "An ideal operational amplifier is configured as an inverting amplifier, with a 10 kΩ input resistor from the source to the inverting input and a 100 kΩ feedback resistor from the output back to the inverting input. The non-inverting input is grounded. For an input of +0.20 V, the output voltage is",
        "choices": [
          "+0.020 V",
          "−0.020 V",
          "+2.0 V",
          "−2.0 V",
          "−20 V"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe ideal op-amp holds its inverting input at virtual ground, so 0.20 V across 10 kΩ drives 20 μA through the feedback resistor, producing 2.0 V below ground: the output is −2.0 V. Equivalently the gain is −R_f/R_in = −10. The trap is +2.0 V, right in magnitude but missing the inversion the configuration is named for.\n\n90-SECOND SOLUTION\nApply the gain formula and then check the sign, which is the entire trap. The virtual-ground derivation is worth being able to reproduce, since the same two rules give every other standard configuration.\n\nWHAT TO MEMORIZE\nThe two ideal-op-amp rules — no input current, and feedback drives the inputs to equal voltage — plus inverting gain −R_f/R_in."
      }

    ]
  },

  {
    "name": "Practice Test 4",
    "added": "2026-08-14",
    "category": "practice",
    "cards": [

      // [CM/kinematics]
      {
        "question": "Rain falls vertically at 4.0 m/s in still air. A cyclist rides horizontally at 3.0 m/s. In the cyclist's frame, the rain appears to fall at an angle from the vertical of most nearly",
        "choices": [
          "24°",
          "37°",
          "45°",
          "53°",
          "66°"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nIn the cyclist's frame the rain gains a 3.0 m/s backward horizontal component alongside its 4.0 m/s downward one, so tan θ = 3.0/4.0 and θ ≈ 37°. The trap is 53°, the complement, from measuring off the horizontal instead of the vertical.\n\n90-SECOND SOLUTION\nSketch the two vectors — ten seconds — and read the angle. The 3-4-5 triangle is chosen so the answer is one of the two angles you should know by sight. The only real decision is which leg is opposite the angle asked for.\n\nWHAT TO MEMORIZE\nNothing. This is pure vector addition; just know 37° and 53° as the 3-4-5 angles."
      },

      // [CM/newton's laws / friction]
      {
        "question": "A person of mass 60 kg stands on a scale in an elevator that is moving downward and slowing at 2.0 m/s². Taking g = 9.8 m/s², the scale reads most nearly",
        "choices": [
          "120 N",
          "470 N",
          "590 N",
          "710 N",
          "1,200 N"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nMoving down while slowing means the acceleration points up, so the normal force exceeds the weight: N = m(g + a) = 60(11.8) ≈ 710 N. The trap is 470 N, which is m(g − a) and describes an elevator speeding up downward.\n\n90-SECOND SOLUTION\nIgnore the velocity entirely and ask only which way the acceleration points. Slowing while descending means accelerating upward, so you feel heavier. Anyone reasoning from 'the elevator is going down' gets the sign wrong.\n\nWHAT TO MEMORIZE\nN = m(g ± a). Spend your time on the sign, not the formula."
      },

      // [CM/work-energy]
      {
        "question": "A car of mass 1,000 kg travels at a constant 20 m/s up a road that rises 5.0 m for every 100 m travelled along it. Taking g = 9.8 m/s² and neglecting friction and air resistance, the power delivered by the engine is most nearly",
        "choices": [
          "0.98 kW",
          "2.0 kW",
          "9.8 kW",
          "20 kW",
          "98 kW"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nAt constant speed all the engine's power goes into gaining height. The vertical speed is 20 × 0.050 = 1.0 m/s, so P = mgv_vertical ≈ 9.8 kW. The trap is 98 kW, from using the full 20 m/s instead of its vertical component.\n\n90-SECOND SOLUTION\nCompute the rate of potential-energy gain directly. A 5% grade means the vertical speed is 5% of the road speed; 'constant speed' tells you kinetic energy is fixed, so everything goes into height.\n\nWHAT TO MEMORIZE\nP = Fv, and the habit of computing rate of energy change rather than hunting for a force."
      },

      // [CM/SHM]
      {
        "question": "A block of mass m is attached to a spring of force constant k and oscillates without friction along the surface of a plane inclined at 30° to the horizontal, the spring lying along the plane. Compared with the same block and spring oscillating on a horizontal frictionless surface, the period of oscillation on the incline is",
        "choices": [
          "the same",
          "shorter by a factor of √2",
          "shorter, by a factor that depends on g",
          "longer by a factor of √2",
          "longer, by a factor that depends on the amplitude"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nGravity's component along the incline is constant, so it only shifts the equilibrium to a pre-stretched point; measured from there the restoring force is still −kx and ω = √(k/m), exactly as on the horizontal. The trap is any answer involving g, a false analogy with the pendulum.\n\n90-SECOND SOLUTION\nRecognise the pattern rather than deriving: adding a constant force to a linear restoring force shifts the equilibrium but never the frequency. Ten seconds instead of two minutes.\n\nWHAT TO MEMORIZE\nThe principle itself. It covers the vertical spring, the spring on an incline, and a charged mass on a spring in a uniform field — all asked interchangeably."
      },

      // [CM/rotational dynamics]
      {
        "question": "A solid sphere, a solid cylinder and a thin hoop, all of the same mass and radius, are released from rest at the same height and roll without slipping down the same incline. The order in which they reach the bottom, first to last, is",
        "choices": [
          "sphere, cylinder, hoop",
          "hoop, cylinder, sphere",
          "cylinder, sphere, hoop",
          "they all arrive together",
          "hoop, sphere, cylinder"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nEnergy conservation gives v² = 2gh/(1 + I/MR²), so the smallest I/MR² wins: ⅖ for the sphere, ½ for the cylinder, 1 for the hoop. Mass and radius cancel entirely, so 'they all arrive together' fails for a subtler reason than most students assume — shape decides, not size or weight.\n\n90-SECOND SOLUTION\nOrder the three coefficients; no calculation required. More inertia far from the axis means more energy diverted into spinning.\n\nWHAT TO MEMORIZE\nThe three coefficients ⅖, ½, 1, and that the result is independent of incline angle and of g."
      },

      // [CM/gravitation]
      {
        "question": "A satellite orbits just above the surface of an airless spherical planet of uniform density ρ. Its orbital period depends on",
        "choices": [
          "the density of the planet only",
          "the radius of the planet only",
          "the mass of the planet only",
          "both the mass and the radius of the planet, independently",
          "the mass of the satellite as well as that of the planet"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nSetting GMm/R² = m4π²R/T² with M = ρ(4/3)πR³ cancels the radius completely, leaving T = √(3π/Gρ) — about 84 minutes for anything of Earth's density. The trap is 'both mass and radius', true of T² = 4π²R³/GM but missing that the two are linked once density is fixed.\n\n90-SECOND SOLUTION\nWrite Kepler's third law, substitute M ∝ ρR³, watch R³ cancel. Fifteen seconds, and it is the whole question.\n\nWHAT TO MEMORIZE\nKepler's third law and the substitution M ∝ ρR³. The grazing-orbit result T = √(3π/Gρ) if you can hold it."
      },

      // [CM/fluids]
      {
        "question": "A solid object is completely submerged and held at rest by a string in a tank of water inside an elevator. The elevator then accelerates upward at g/2. The buoyant force on the object becomes",
        "choices": [
          "1.5 times its previous value",
          "half its previous value",
          "two-thirds its previous value",
          "unchanged",
          "twice its previous value"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nBuoyancy comes from the fluid's pressure gradient, which in an accelerating frame is set by g_eff = g + a = 1.5g, so the force rises by 1.5. The trap is 'unchanged', from treating buoyancy as a fixed property of the object rather than a consequence of fluid weight.\n\n90-SECOND SOLUTION\nReplace g by g + a everywhere and multiply. Check it against the free-fall limit, where g_eff = 0 and buoyancy vanishes — confirming the force scales with g_eff rather than being constant.\n\nWHAT TO MEMORIZE\nF = ρVg_eff, and that a uniformly accelerating frame simply replaces g by g + a in any hydrostatics problem."
      },

      // [CM/hamiltonian]
      {
        "question": "For a mechanical system described by a Lagrangian, the Hamiltonian H is numerically equal to the total energy provided that",
        "choices": [
          "the system is conservative, whatever the coordinates",
          "the Lagrangian has no explicit time dependence",
          "all the generalized coordinates are ignorable",
          "the kinetic energy is a linear function of the generalized velocities",
          "the constraints are independent of time and the potential is independent of velocity"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nH equals T + V when the coordinate transformation carries no explicit time dependence — making the kinetic energy a homogeneous quadratic in the generalized velocities — and the potential is velocity-independent. The trap is 'L has no explicit time dependence', which guarantees H is conserved but says nothing about whether H is the energy. A bead on a wire spun at a prescribed rate is the standard counterexample.\n\n90-SECOND SOLUTION\nNo derivation is short enough. Decide which of the two statements is being asked — 'H is conserved' or 'H is the energy' — and answer from the pair.\n\nWHAT TO MEMORIZE\nThe two conditions, and above all that they are independent statements. Essentially every question here tests that separation."
      },

      // [CM/momentum & collisions]
      {
        "question": "A particle undergoes an elastic collision with a second particle of equal mass that is initially at rest. Neither particle is at rest afterward. The angle between their outgoing velocities is",
        "choices": [
          "0°",
          "45°",
          "60°",
          "90°",
          "180°"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nMomentum gives v₀ = v₁ + v₂ and energy gives v₀² = v₁² + v₂²; squaring the first and comparing leaves 2v₁·v₂ = 0, so the outgoing velocities are perpendicular. It is why equal-mass elastic tracks in a bubble chamber always show a right angle. The trap is 180°, the head-on case where one particle stops — excluded by the stipulation that neither ends at rest.\n\n90-SECOND SOLUTION\nRecall the 90° result outright. If you must derive it, the vector-squaring argument takes about forty seconds.\n\nWHAT TO MEMORIZE\nThat equal-mass elastic collisions separate at 90°, and the two hypotheses it needs — equal masses and elastic."
      },

      // [CM/non-inertial frames & coriolis]
      {
        "question": "A cylindrical space station of radius 50 m rotates about its axis to give the occupants standing on its inner surface an apparent gravity of 9.8 m/s². The period of rotation is most nearly",
        "choices": [
          "4.5 s",
          "9.0 s",
          "14 s",
          "28 s",
          "45 s"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe required centripetal acceleration is ω²R = 9.8, so ω ≈ 0.44 rad/s and T = 2π/ω ≈ 14 s. The traps are 4.5 s, from quoting 1/ω and forgetting 2π, and 28 s, from using the diameter.\n\n90-SECOND SOLUTION\nEstimate before computing: demanding a = g makes this identical to a pendulum of length 50 m, whose period is 2π√(L/g) ≈ 14 s. That observation gives the answer with no intermediate step.\n\nWHAT TO MEMORIZE\na = ω²R and T = 2π/ω."
      },

      // [EM/coulomb's law & E-field]
      {
        "question": "A thin ring of radius R carries a uniformly distributed positive charge. On the axis of the ring, the magnitude of the electric field is greatest at a distance from the centre of",
        "choices": [
          "zero",
          "R/2",
          "R/√2",
          "R",
          "R√2"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nOn the axis E = kQz/(z² + R²)^(3/2), which vanishes at the centre by symmetry and falls as 1/z² far away, so it peaks between; the derivative gives z = R/√2. The trap is 'zero', where the potential peaks but the field does not — confusing the maximum of V with the maximum of E.\n\n90-SECOND SOLUTION\nDo not differentiate under time pressure. Infer instead: the field is zero at the centre and zero at infinity, so the maximum lies strictly between, which eliminates 'zero' at once and leaves only answers of order R.\n\nWHAT TO MEMORIZE\nThe result z = R/√2 for a charged ring, since the derivative is not worth taking in the time available."
      },

      // [EM/gauss's law]
      {
        "question": "A point charge +q sits inside an irregularly shaped cavity within an uncharged solid conductor. The cavity does not touch the outer surface. At points outside the conductor, the electric field is",
        "choices": [
          "that of a point charge +q located at the centre of the outer surface, regardless of where the cavity lies",
          "zero everywhere",
          "that of a point charge +q located at the actual position of the charge",
          "that of a dipole",
          "dependent on the detailed shape of the cavity"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nCharge −q is induced on the cavity wall and +q on the outer surface, and since E = 0 in the metal, that outer charge redistributes according to the outer surface alone, keeping no memory of where the cavity sits. The trap is 'at the actual position of the charge', which assumes the interior geometry shows through.\n\n90-SECOND SOLUTION\nApply the screening principle directly. The chain — E = 0 in the metal, so no information is transmitted outward — is worth rehearsing once so you can trust it cold.\n\nWHAT TO MEMORIZE\nA conductor's exterior field depends only on the total enclosed charge and the outer surface shape, never on the interior arrangement."
      },

      // [EM/electric potential]
      {
        "question": "Which of the following statements about the electrostatic potential V and field E is true?",
        "choices": [
          "E can be zero at a point where V is not zero",
          "If E = 0 throughout a region, V must be zero there as well",
          "If V = 0 at a point, E must vanish at that point",
          "V can be nonzero only where charge is present",
          "E is largest where V is largest"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe field is the negative gradient of the potential, so what matters is how V varies, not its value. Midway between two equal positive charges the field cancels by symmetry while V is a positive maximum. The near-miss is 'E = 0 throughout a region forces V = 0': it forces V to be constant, but the zero of potential is arbitrary.\n\n90-SECOND SOLUTION\nRead every choice through E = −∇V. Keep one concrete counterexample ready — the midpoint of two like charges — and these take under thirty seconds instead of five abstract arguments.\n\nWHAT TO MEMORIZE\nE = −∇V, and that potential is a slope, not a value."
      },

      // [EM/DC circuits]
      {
        "question": "In a Wheatstone bridge, a 100 Ω and a 200 Ω resistor form one arm in series, and a 150 Ω resistor and an unknown resistor R form the other, with the galvanometer connecting the two junctions. The bridge is balanced when R is",
        "choices": [
          "75 Ω",
          "150 Ω",
          "200 Ω",
          "300 Ω",
          "450 Ω"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nBalance requires the two arms to divide the voltage in the same ratio: 100/200 = 150/R, so R = 300 Ω. The trap is 75 Ω, from inverting the proportion. Balance is independent of supply voltage and galvanometer resistance, which is what makes the bridge precise.\n\n90-SECOND SOLUTION\nWrite it as a proportion rather than a memorized cross-product, so it cannot be inverted. One line.\n\nWHAT TO MEMORIZE\nThe balance condition as 'the ratios along the two arms must match'."
      },

      // [EM/RC circuits]
      {
        "question": "A capacitor of 10 μF is charged to 100 V and then discharged completely through a resistor R. The total energy dissipated in the resistor is",
        "choices": [
          "50 mJ, independent of R",
          "25 mJ, but only if R is small",
          "50 mJ, but only if R is large",
          "100 mJ, independent of R",
          "dependent on R in a way that cannot be determined without knowing the time constant"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nAll the stored energy becomes heat once discharge is complete, and that is ½CV² = ½(10 × 10⁻⁶)(100)² = 50 mJ. The resistance sets how fast through τ = RC, not how much. The trap is the choice claiming R-dependence, which mistakes the rate for the total.\n\n90-SECOND SOLUTION\nNotice the question offers three numerically identical answers hedged by different conditions — a signal that independence, not arithmetic, is the point. Answer the conceptual question first.\n\nWHAT TO MEMORIZE\nU = ½CV², plus energy conservation."
      },

      // [EM/RLC & AC circuits]
      {
        "question": "A 100 Ω resistor is in series with a 10 μF capacitor across a source of angular frequency 1,000 rad/s. The magnitude of the impedance of the combination is most nearly",
        "choices": [
          "71 Ω",
          "100 Ω",
          "140 Ω",
          "200 Ω",
          "1,000 Ω"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nX_C = 1/ωC = 1/(1,000 × 10⁻⁵) = 100 Ω, and resistance and reactance add in quadrature: |Z| = √(100² + 100²) ≈ 140 Ω. The trap is 200 Ω, from adding them arithmetically.\n\n90-SECOND SOLUTION\nCompute the reactance, then add in quadrature. Since R and X_C happen to be equal, the phase angle is 45° — worth noting, as the follow-up usually asks for it.\n\nWHAT TO MEMORIZE\nX_C = 1/ωC, X_L = ωL, and |Z| = √(R² + X²). Those three cover every AC-impedance question here."
      },

      // [EM/magnetic force on charges/currents]
      {
        "question": "Two long parallel wires 0.10 m apart each carry a steady current of 10 A in the same direction. Taking μ₀ = 4π × 10⁻⁷ T·m/A, the force per unit length between them is",
        "choices": [
          "2.0 × 10⁻⁴ N/m, attractive",
          "2.0 × 10⁻⁵ N/m, attractive",
          "2.0 × 10⁻⁵ N/m, repulsive",
          "2.0 × 10⁻⁴ N/m, repulsive",
          "2.0 × 10⁻³ N/m, attractive"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nF/L = μ₀I₁I₂/2πd = (2 × 10⁻⁷)(100)/(0.10) = 2.0 × 10⁻⁴ N/m, and parallel currents in the same direction attract. The trap is the repulsive version: the convention is opposite to electrostatics, where like charges repel, and reversing it by analogy is the standard error.\n\n90-SECOND SOLUTION\nOne division, then fix the direction. If you distrust the rule, one right-hand rule plus F = IL × B settles it in twenty seconds.\n\nWHAT TO MEMORIZE\nF/L = μ₀I₁I₂/2πd, μ₀/2π = 2 × 10⁻⁷, and 'parallel currents attract' — the definition the old SI ampere rested on."
      },

      // [EM/EM waves & poynting]
      {
        "question": "Sunlight of intensity 1,000 W/m² falls perpendicularly on a perfectly reflecting surface. Taking c = 3.0 × 10⁸ m/s, the radiation pressure on the surface is most nearly",
        "choices": [
          "1.7 × 10⁻⁶ Pa",
          "3.3 × 10⁻⁶ Pa",
          "6.7 × 10⁻⁶ Pa",
          "3.3 × 10⁻³ Pa",
          "1.0 × 10⁻³ Pa"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nA perfect absorber feels I/c, but a reflector reverses the photon momentum and so receives twice the impulse: P = 2I/c = 2,000/(3.0 × 10⁸) ≈ 6.7 × 10⁻⁶ Pa. The trap is 3.3 × 10⁻⁶ Pa, the absorber value.\n\n90-SECOND SOLUTION\nPick the right member of the pair, then divide once. The analogy makes the factor unforgettable: a ball bouncing elastically off a wall delivers twice the impulse of one that sticks.\n\nWHAT TO MEMORIZE\nThe pair I/c for absorption and 2I/c for reflection."
      },

      // [EM/maxwell's equations]
      {
        "question": "A parallel-plate capacitor is being charged by a steady current of 2.0 A flowing in the wires. In the vacuum gap between the plates, the displacement current is",
        "choices": [
          "zero, since no charge crosses the gap",
          "dependent on the plate separation",
          "dependent on the plate area",
          "infinite at the instant charging begins",
          "2.0 A"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nMaxwell introduced the displacement current ε₀ dΦ_E/dt precisely so total current would be continuous: the changing field between the plates carries exactly the 2.0 A the wire delivers, so Ampère's law gives the same result for any surface bounded by the same loop. The trap is 'zero', true of the conduction current but not of the displacement current asked about.\n\n90-SECOND SOLUTION\nRecall the punchline — displacement current in the gap equals conduction current in the wire — and stop. The underlying reason is worth one rehearsal: without it, Ampère's law would give different answers for two surfaces sharing a boundary.\n\nWHAT TO MEMORIZE\nThat displacement current in the gap equals the conduction current in the wire."
      },

      // [QM/infinite square well]
      {
        "question": "A particle is confined to a cubical box with impenetrable walls. The ratio of the energy of the first excited level to that of the ground level is",
        "choices": [
          "4/3",
          "3/2",
          "2",
          "3",
          "4"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nLevels go as n_x² + n_y² + n_z², so the ground state (1,1,1) sits at 3 and the first excited state (2,1,1) at 6 — a ratio of 2. The trap is 4, the one-dimensional answer where the first excited state is simply n = 2.\n\n90-SECOND SOLUTION\nNote that the lowest allowed value of each n is 1, not 0, so the cheapest excitation promotes a single index. Counting beats recalling. The threefold degeneracy of that level is a useful byproduct.\n\nWHAT TO MEMORIZE\nE ∝ n_x² + n_y² + n_z² for the cubical box."
      },

      // [QM/potential barrier & tunneling]
      {
        "question": "An electron tunnels through a rectangular barrier with transmission probability 10⁻⁴. The barrier is wide enough that the transmission is well approximated by an exponential in the barrier width. If the width is doubled with the height unchanged, the transmission probability becomes most nearly",
        "choices": [
          "10⁻²",
          "2 × 10⁻⁴",
          "5 × 10⁻⁵",
          "10⁻⁶",
          "10⁻⁸"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nIn the thick-barrier limit T ≈ e^(−2κL), so doubling L squares the transmission: (10⁻⁴)² = 10⁻⁸. The traps are 2 × 10⁻⁴ and 5 × 10⁻⁵, both treating the dependence as linear.\n\n90-SECOND SOLUTION\nDouble the exponent, square the result — one line of algebra. The extreme sensitivity is the physical content: it is why scanning tunnelling microscopes resolve single atoms and why alpha-decay half-lives span twenty orders of magnitude.\n\nWHAT TO MEMORIZE\nThe form T ~ e^(−2κL). The constants inside κ rarely matter; the exponential dependence on width always does."
      },

      // [QM/spin & pauli matrices]
      {
        "question": "For a spin-½ particle, the possible results of a measurement of the spin component along any chosen axis are",
        "choices": [
          "0 only",
          "±ħ only",
          "±ħ/2 and 0",
          "any value between −ħ/2 and +ħ/2",
          "±ħ/2 only"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEvery spin-½ component operator has eigenvalues ±ħ/2 whichever axis is chosen — a consequence of the algebra, not of any special direction. Choosing a different axis changes the probabilities, never the outcomes. The trap is the continuous range, which imagines a classical vector projecting smoothly.\n\n90-SECOND SOLUTION\nUse isotropy: no axis is special, so if the results along z are ±ħ/2 they are the same along every direction. That eliminates anything implying a continuum or an axis dependence.\n\nWHAT TO MEMORIZE\nSpin components are quantized in units of ħ/2, with 2s + 1 = 2 outcomes."
      },

      // [QM/uncertainty principle]
      {
        "question": "An excited atomic state has a mean lifetime of 1.0 × 10⁻⁸ s. Taking ħ = 1.05 × 10⁻³⁴ J·s and 1 eV = 1.6 × 10⁻¹⁹ J, the minimum spread in the energy of that state is of order",
        "choices": [
          "10⁻¹¹ eV",
          "10⁻⁸ eV",
          "10⁻⁵ eV",
          "10⁻² eV",
          "1 eV"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nΔE ≈ ħ/τ = 1.05 × 10⁻³⁴/10⁻⁸ ≈ 10⁻²⁶ J, about 6.6 × 10⁻⁸ eV. This natural linewidth sets the ultimate sharpness of a spectral line and is far narrower than Doppler broadening. The trap is answers near 1 eV, confusing the width of a level with the energy of the transition.\n\n90-SECOND SOLUTION\nOne division and one unit conversion. Sanity-check the magnitude: anything comparable to an atomic transition energy would mean the level is not a level at all.\n\nWHAT TO MEMORIZE\nΔEΔt ≈ ħ, and 1 eV = 1.6 × 10⁻¹⁹ J. Longer-lived states are sharper."
      },

      // [QM/addition of angular momentum]
      {
        "question": "An electron has orbital angular momentum quantum number l = 2. The possible values of its total angular momentum quantum number j are",
        "choices": [
          "2 only",
          "1/2 and 3/2",
          "5/2 only",
          "2 and 3",
          "3/2 and 5/2"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nAdding spin ½ to orbital angular momentum 2 gives j = l ± s, that is 5/2 and 3/2 — the spin-orbit doublet behind the fine structure of d states. The traps are '2 only', forgetting spin entirely, and '5/2 only', keeping just the stretched combination.\n\n90-SECOND SOLUTION\nRun a parity check before any arithmetic: integer l plus half-integer s must give half-integer j, which eliminates every choice containing integers and leaves two candidates.\n\nWHAT TO MEMORIZE\nj runs from |l − s| to l + s in integer steps; for s = ½ that always gives exactly l ± ½."
      },

      // [QM/hydrogen atom]
      {
        "question": "The ground-state energy of hydrogen is −13.6 eV. The energy required to remove the electron from the n = 3 state is most nearly",
        "choices": [
          "1.5 eV",
          "4.5 eV",
          "12 eV",
          "13.6 eV",
          "41 eV"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nE_n = −13.6/n² eV gives E₃ ≈ −1.5 eV, so removing the electron from that level costs +1.5 eV. The trap is 12 eV, the n = 1 to n = 3 transition energy — a different quantity.\n\n90-SECOND SOLUTION\nRead precisely: ionization from a level means going to zero, so the answer is just |E_n|. These questions always offer both a level energy and a transition energy among the choices, so identify the endpoints before computing.\n\nWHAT TO MEMORIZE\nE_n = −13.6/n² eV — the most-used formula in atomic physics."
      },

      // [QM/bohr model]
      {
        "question": "Singly ionized helium, He⁺, has one electron bound to a nucleus of charge +2e. Taking the ground-state energy of hydrogen to be −13.6 eV and neglecting the reduced-mass correction, the ground-state energy of He⁺ is",
        "choices": [
          "−6.8 eV",
          "−13.6 eV",
          "−27.2 eV",
          "−54.4 eV",
          "−109 eV"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nHydrogen-like energies scale as Z², so doubling the nuclear charge multiplies the binding by 4: −54.4 eV. The trap is −27.2 eV, from scaling linearly in Z — what the force law alone suggests before you account for the orbit also shrinking by Z.\n\n90-SECOND SOLUTION\nSquare the charge ratio. The exponent is fixed by inference: the electron is both more strongly attracted and closer in, so two factors of Z compound.\n\nWHAT TO MEMORIZE\nThe hydrogen-like pair E ∝ Z² and r ∝ 1/Z. Note this differs from the muonic case, where the mass changes instead."
      },

      // [QM/wavefunction & normalization]
      {
        "question": "Which of the following is NOT a requirement on an acceptable single-particle wavefunction ψ(x) for a bound state in one dimension?",
        "choices": [
          "ψ must be single-valued",
          "ψ must be continuous",
          "ψ must be square-integrable",
          "ψ must be everywhere real",
          "ψ must vanish as x approaches ±∞"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nWavefunctions are in general complex — a travelling wave e^(ikx) is the standard example — so reality is not a requirement. The other four follow from the probability interpretation and from the Schrödinger equation being second order. Bound stationary states of a real potential can be chosen real, but 'can be chosen' is not 'must be'.\n\n90-SECOND SOLUTION\nFor NOT-questions, hunt one counterexample rather than validating four choices. Any state carrying nonzero momentum has a complex wavefunction — ten seconds.\n\nWHAT TO MEMORIZE\nThe standard admissibility list: single-valued, continuous, square-integrable, vanishing at infinity. Note what is absent from it."
      },

      // [QM/harmonic oscillator]
      {
        "question": "For a one-dimensional quantum harmonic oscillator, the number of nodes in the wavefunction of the state with quantum number n = 4, counting only nodes at finite x, is",
        "choices": [
          "0",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe eigenfunctions are a degree-n Hermite polynomial times a Gaussian, and a degree-n polynomial has exactly n real roots, so n = 4 gives 4 nodes. The Gaussian never vanishes at finite x. The trap is 3, applying the n − 1 rule that belongs to the box.\n\n90-SECOND SOLUTION\nIdentify which labelling convention the system uses — that is the whole question. The oscillator's ground state is n = 0; the box's is n = 1.\n\nWHAT TO MEMORIZE\nNode count n for the oscillator versus n − 1 for the box, and that the discrepancy is purely a labelling convention."
      },

      // [QM/time evolution]
      {
        "question": "A particle is prepared in a superposition of two stationary states of energies E₁ and E₂, with E₂ > E₁. The probability density at a fixed point oscillates in time with angular frequency",
        "choices": [
          "E₁/ħ",
          "E₂/ħ",
          "(E₂ + E₁)/ħ",
          "(E₂ − E₁)/2ħ",
          "(E₂ − E₁)/ħ"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEach stationary state carries a phase e^(−iEt/ħ), and squaring the sum produces a cross term whose phase is the difference — so the interference term oscillates at (E₂ − E₁)/ħ. Individual phases are unobservable, which is exactly what makes a single stationary state stationary. The trap is E₂/ħ, mistaking an individual phase for an observable.\n\n90-SECOND SOLUTION\nApply the rule that only energy differences are observable; that alone selects the answer. Confirm by correspondence: this is the frequency the atom radiates on the transition, so ΔE = ħω.\n\nWHAT TO MEMORIZE\nThat only energy differences are observable in quantum mechanics — the overall phase never is."
      },

      // [QM/de broglie waves]
      {
        "question": "Electrons accelerated from rest through a potential difference of 54 V are diffracted by a crystal. Using λ = 1.23 nm/√V with V in volts, their de Broglie wavelength is most nearly",
        "choices": [
          "0.017 nm",
          "0.17 nm",
          "0.42 nm",
          "1.2 nm",
          "9.1 nm"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nWith V = 54, √V ≈ 7.35 and λ ≈ 1.23/7.35 ≈ 0.17 nm — comparable to atomic spacings, which is why Davisson-Germer saw diffraction and confirmed de Broglie. The trap is 1.2 nm, quoting the numerator without dividing.\n\n90-SECOND SOLUTION\nOne division using the shortcut, which saves rebuilding λ = h/√(2meV). Sanity-check against lattice spacings of a few tenths of a nanometre — anything far off that scale would not have diffracted.\n\nWHAT TO MEMORIZE\nλ = 1.23 nm/√V for non-relativistic electrons."
      },

      // [TS/heat engines & efficiency]
      {
        "question": "A heat pump operating on a reversible cycle maintains a house at 300 K while the outside air is at 270 K. For each joule of work supplied, the heat delivered to the house is most nearly",
        "choices": [
          "0.10 J",
          "0.90 J",
          "1.0 J",
          "9.0 J",
          "10 J"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe reversible heat-pump coefficient is T_hot/(T_hot − T_cold) = 300/30 = 10, so one joule of work delivers ten joules of heat, nine of them pumped from outside. The trap is 9.0 J, the refrigerator coefficient T_cold/(T_hot − T_cold) — the two differ by exactly the work input.\n\n90-SECOND SOLUTION\nRather than choosing between two memorized coefficients, rebuild from Q_hot = Q_cold + W and Q_hot/Q_cold = T_hot/T_cold. Thirty seconds and impossible to misremember. Check that the answer exceeds 1, since a heat pump must beat a resistive heater.\n\nWHAT TO MEMORIZE\nEnergy conservation plus the reversible ratio Q_hot/Q_cold = T_hot/T_cold. The two coefficients follow."
      },

      // [TS/blackbody radiation]
      {
        "question": "The Sun's surface behaves approximately as a blackbody at 5,800 K. Taking Wien's displacement constant to be 2.9 × 10⁻³ m·K, the wavelength at which its emitted power per unit wavelength peaks is most nearly",
        "choices": [
          "50 nm",
          "500 nm",
          "1,700 nm",
          "5,800 nm",
          "17,000 nm"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nWien's law gives λ_max = 2.9 × 10⁻³/5,800 = 500 nm, in the green near the centre of the visible band — unlikely to be a coincidence given how eyes evolved. The trap is 50 nm, a factor-of-ten slip into the extreme ultraviolet.\n\n90-SECOND SOLUTION\nOne division, or scale from the anchor: peak wavelength is inversely proportional to temperature, so a 2,900 K filament peaks at 1,000 nm in the infrared, which is why incandescent bulbs are inefficient.\n\nWHAT TO MEMORIZE\nWien's constant 2.9 × 10⁻³ m·K, and the anchor that 5,800 K peaks near 500 nm."
      },

      // [TS/first law & work]
      {
        "question": "One mole of an ideal gas expands isothermally and reversibly at 300 K to twice its initial volume. Taking R = 8.31 J/(mol·K), the work done by the gas is most nearly",
        "choices": [
          "600 J",
          "1,200 J",
          "1,700 J",
          "2,500 J",
          "3,700 J"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFor reversible isothermal expansion W = nRT ln(V₂/V₁) = (1)(8.31)(300)(0.693) ≈ 1,700 J. Since the temperature is fixed, an ideal gas's internal energy does not change, so exactly this much heat flows in. The trap is 2,500 J, which is nRT with the logarithm dropped.\n\n90-SECOND SOLUTION\nHold RT ≈ 2,500 J/mol at room temperature in your head — a number that recurs constantly — then the answer is 2,500 × 0.69 in one step.\n\nWHAT TO MEMORIZE\nW = nRT ln(V₂/V₁), ln 2 ≈ 0.69, and that ΔU = 0 for an isothermal ideal gas so Q = W."
      },

      // [TS/heat capacity]
      {
        "question": "A mass of 100 g of water at 80 °C is mixed with 200 g of water at 20 °C in an insulated container. The final temperature is",
        "choices": [
          "30 °C",
          "40 °C",
          "45 °C",
          "50 °C",
          "60 °C"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nHeat lost equals heat gained: 100(80 − T) = 200(T − 20), so T = 40 °C. The trap is 50 °C, the plain average, correct only for equal masses.\n\n90-SECOND SOLUTION\nSkip the algebra — take the mass-weighted average. The result must sit twice as close to the 20 °C water because there is twice as much of it, giving 40 °C in ten seconds.\n\nWHAT TO MEMORIZE\nOnly 'heat lost equals heat gained'. The specific heat cancels because both sides are water."
      },

      // [TS/thermodynamic processes]
      {
        "question": "On a pressure-volume diagram, a reversible adiabat and a reversible isotherm both pass through the same point for an ideal gas. Compared with the isotherm, the adiabat at that point is",
        "choices": [
          "less steep, by the factor 1/γ",
          "less steep, by a factor that depends on the temperature",
          "equally steep",
          "steeper, by the factor γ",
          "steeper, by a factor that depends on the number of moles"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nAn isotherm obeys PV = constant with slope −P/V; an adiabat obeys PV^γ = constant with slope −γP/V. Since γ > 1 the adiabat is steeper by exactly γ. Physically, adiabatic expansion also cools the gas, so its pressure falls faster. The trap is the choice inverting the ratio.\n\n90-SECOND SOLUTION\nDifferentiate both curve equations mentally; the ratio drops out as γ with no numbers. If the exponents desert you, the physical argument still gives the direction: adiabatic expansion loses both the volume and the temperature effect, so it must be steeper.\n\nWHAT TO MEMORIZE\nPV = constant for an isotherm and PV^γ = constant for an adiabat."
      },

      // [OW/superposition & phase]
      {
        "question": "Two loudspeakers a few metres apart are driven in phase at 340 Hz. Taking the speed of sound to be 340 m/s, a listener stands 3.0 m from one speaker and 4.5 m from the other. At the listener's position the two waves interfere",
        "choices": [
          "constructively, since the path difference is an integer number of wavelengths",
          "destructively, since the path difference is a half-integer number of wavelengths",
          "constructively, since the speakers are driven in phase",
          "destructively, since the path difference exceeds one wavelength",
          "neither, since the amplitudes are unequal"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe wavelength is v/f = 1.0 m and the path difference is 4.5 − 3.0 = 1.5 m, a half-integer number of wavelengths, so the waves arrive out of phase and cancel. The trap is 'constructive, since the speakers are driven in phase': that fixes the phase at the sources, not at the listener, where the extra travel decides.\n\n90-SECOND SOLUTION\nCompute λ = v/f first, always, then convert the path difference into wavelengths before deciding anything. Note 1.5 counts as a half-integer, which is why the 'exceeds one wavelength' reasoning is irrelevant.\n\nWHAT TO MEMORIZE\nThe interference conditions in terms of path difference: integer wavelengths constructive, half-integer destructive."
      },

      // [OW/double slit & interference]
      {
        "question": "A double-slit interference pattern is produced with light of a fixed wavelength. The entire apparatus, including the screen, is then immersed in water of index 1.33. The spacing between adjacent bright fringes",
        "choices": [
          "decreases by a factor of about 1.33",
          "decreases by a factor of about 1.77",
          "is unchanged",
          "increases by a factor of about 1.33",
          "increases by a factor of about 1.77"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nFringe spacing is λL/d, and immersion changes only the wavelength, which shortens to λ/n inside the water while the geometry stays fixed — so the fringes crowd together by 1.33. The trap is 'unchanged', from thinking the source frequency and slit geometry are all that matter; interference depends on path difference measured in wavelengths, and it is the wavelength in the medium that counts.\n\n90-SECOND SOLUTION\nIdentify which quantity in Δy = λL/d the medium actually touches — the wavelength alone — and scale by 1/n. Everything else in the formula is untouched.\n\nWHAT TO MEMORIZE\nΔy = λL/d and λ_medium = λ_vacuum/n. Note the frequency does not change on entering a medium; only the wavelength and speed do."
      },

      // [OW/wave equation & propagation]
      {
        "question": "A transverse wave on a string is described by y(x, t) = 0.020 sin(6.0x − 300t), with x and y in meters and t in seconds. The speed of the wave is",
        "choices": [
          "0.020 m/s",
          "6.0 m/s",
          "50 m/s",
          "300 m/s",
          "1,800 m/s"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nComparing with y = A sin(kx − ωt) gives k = 6.0 rad/m and ω = 300 rad/s, so v = ω/k = 50 m/s, travelling in the +x direction. The traps are 300 m/s, quoting ω as a speed, and 1,800 m/s, from multiplying.\n\n90-SECOND SOLUTION\nRead off two coefficients and divide — five seconds. The dimensional check is instant: ω is radians per second and k radians per metre, so only their ratio can be a speed.\n\nWHAT TO MEMORIZE\nv = ω/k and the standard form y = A sin(kx − ωt), including that a minus sign means motion in +x."
      },

      // [OW/resolution & rayleigh criterion]
      {
        "question": "A telescope has a circular aperture of diameter 2.0 m and is used at a wavelength of 550 nm. Its diffraction-limited angular resolution is most nearly",
        "choices": [
          "2.8 × 10⁻⁷ rad",
          "3.4 × 10⁻⁷ rad",
          "5.5 × 10⁻⁷ rad",
          "1.1 × 10⁻⁶ rad",
          "2.8 × 10⁻⁶ rad"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe Rayleigh criterion for a circular aperture is θ ≈ 1.22λ/D = 1.22(5.5 × 10⁻⁷)/2.0 ≈ 3.4 × 10⁻⁷ rad, about 0.07 arcseconds. The trap is 2.8 × 10⁻⁷ rad, which is λ/D without the 1.22 that distinguishes a circular aperture from a slit.\n\n90-SECOND SOLUTION\nOne division. The scaling is the part worth carrying: resolution improves linearly with aperture and degrades with wavelength, which is why radio telescopes must be enormous — though at this aperture atmospheric seeing, not diffraction, is usually the real limit.\n\nWHAT TO MEMORIZE\nθ = 1.22λ/D, and that the 1.22 belongs to circular apertures only."
      },

      // [SP/nuclear binding energy]
      {
        "question": "The curve of binding energy per nucleon against mass number rises steeply at low A, peaks near A = 56, and declines slowly thereafter. It follows that",
        "choices": [
          "only fusion can release energy, and only for light nuclei",
          "only fission can release energy, and only for heavy nuclei",
          "nuclei near A = 56 are the least stable",
          "energy release requires the binding energy per nucleon to decrease",
          "fusion releases energy for light nuclei and fission releases energy for heavy ones"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEnergy is released whenever the products are more tightly bound, that is, whenever nucleons move up the curve toward the peak — light nuclei climb by fusing, heavy nuclei by splitting. It is why iron-group nuclei end stellar nucleosynthesis. The trap is 'nuclei near A = 56 are least stable', which inverts the meaning of the peak.\n\n90-SECOND SOLUTION\nApply one rule — reactions run toward higher binding energy per nucleon — and both fusion and fission follow without memorizing them separately. No calculation is possible.\n\nWHAT TO MEMORIZE\nThe shape of the curve and that its maximum sits near iron."
      },

      // [SP/band theory & semiconductors]
      {
        "question": "Pure silicon, whose atoms have four valence electrons, is doped with a small amount of phosphorus, which has five. The result is",
        "choices": [
          "a p-type semiconductor, with holes as the majority carriers",
          "an insulator, because the lattice is disrupted",
          "a semiconductor with a substantially larger band gap",
          "a metal, because the extra electrons fill the conduction band",
          "an n-type semiconductor, with electrons as the majority carriers"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEach phosphorus atom contributes one electron beyond the four covalent bonds, sitting in a donor level just below the conduction band from which room-temperature energy easily promotes it. Majority carriers are negative, so the material is n-type. The trap is 'a metal': doping is parts per million, so the conduction band is nowhere near filled.\n\n90-SECOND SOLUTION\nCount valence electrons — five versus four — and apply the mnemonic. Note doping barely changes the gap; it adds shallow levels inside it, which is what the band-gap choice is testing.\n\nWHAT TO MEMORIZE\nDonors have more valence electrons and give n-type; acceptors like boron have fewer and give p-type."
      },

      // [SP/crystal structure & bragg]
      {
        "question": "In a body-centred cubic lattice, the number of nearest neighbours of any given atom is",
        "choices": [
          "4",
          "6",
          "8",
          "12",
          "14"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe atom at the cube's centre has the eight corners as nearest neighbours, along the body diagonals at (√3/2)a — closer than the six atoms one full lattice constant away. The traps are 6, the simple-cubic number, and 12, that of FCC and hexagonal close packing.\n\n90-SECOND SOLUTION\nIf the number deserts you, draw the cube, put an atom at the centre and count corners — fifteen seconds. Checking that half the body diagonal is less than a confirms those are nearest.\n\nWHAT TO MEMORIZE\nThe three coordination numbers together: simple cubic 6, body-centred cubic 8, face-centred cubic 12."
      },

      // [SP/feynman diagrams & interactions]
      {
        "question": "The beta decay of a free neutron, n → p + e⁻ + ν̄_e, proceeds through",
        "choices": [
          "the strong interaction, mediated by gluons",
          "the electromagnetic interaction, mediated by photons",
          "the gravitational interaction",
          "the weak interaction, mediated by Z bosons",
          "the weak interaction, mediated by W bosons"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nBeta decay turns a down quark into an up quark, changing the quark's charge, so the mediator must itself be charged: the W boson, in a charged-current weak interaction. The trap is the Z boson, which mediates weak processes but is neutral and cannot change flavour this way. The 15-minute neutron lifetime is itself the signature of a weak process.\n\n90-SECOND SOLUTION\nApply the rule that charge-changing means W. Cross-check with the lifetime: strong decays take about 10⁻²³ s and electromagnetic ones about 10⁻¹⁶ s, so anything living for minutes is unmistakably weak.\n\nWHAT TO MEMORIZE\nThe mediator list — gluons strong, photons electromagnetic, W and Z weak — and that charge-changing means W."
      },

      // [SP/vector calculus]
      {
        "question": "Let f be a twice-differentiable scalar field and A a twice-differentiable vector field. Which of the following is true for all such f and A?",
        "choices": [
          "∇ · (∇f) = 0",
          "∇ × (∇f) = 0",
          "∇ × (∇ × A) = 0",
          "∇ · (∇ × A) = ∇²A",
          "∇ × A = 0 whenever ∇ · A = 0"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe curl of any gradient vanishes identically, which is why a conservative field can be written as a gradient and why ∇ × E = 0 electrostatically. The trap is ∇ · (∇f) = 0: that is the Laplacian, zero only for harmonic functions. Its partner ∇ · (∇ × A) = 0 is what makes magnetic field lines close.\n\n90-SECOND SOLUTION\nNo computation is possible in the time. Recognise which two operator combinations are the real identities; everything else on the list is built by permuting them.\n\nWHAT TO MEMORIZE\nThe two vanishing identities — curl of a gradient, divergence of a curl — each of which underwrites a Maxwell equation."
      },

      // [SR/simultaneity]
      {
        "question": "In the frame of a railway platform, lightning strikes the front and rear ends of a passing train at the same instant. In the frame of the train, which moves forward relative to the platform,",
        "choices": [
          "the two strikes are also simultaneous",
          "the strike at the front occurs first",
          "the strike at the rear occurs first",
          "the order depends on where the observer stands within the train",
          "neither strike can be assigned a definite time"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nApplying the Lorentz transformation to events simultaneous in the platform frame but separated along the motion gives Δt′ = −γvΔx/c², so the event at larger x — the front — happens earlier in the train frame. The trap is making it depend on where the observer stands: it is a property of the frame, since each observer corrects for light travel time.\n\n90-SECOND SOLUTION\nUse a fixed mnemonic — 'leading clocks lag' — so the front clock reads behind and the front event must have happened earlier. The sign is easy to invert under pressure and the algebra takes longer than it is worth.\n\nWHAT TO MEMORIZE\nRelativity of simultaneity as 'leading clocks lag'."
      },

      // [SR/lorentz transformation]
      {
        "question": "A spacecraft moving at 0.50c relative to Earth emits a pulse of light in its forward direction. The speed of that pulse measured by an observer on Earth is",
        "choices": [
          "dependent on the wavelength of the light",
          "0.50c",
          "0.80c",
          "c",
          "1.5c"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe second postulate asserts that light travels at c in every inertial frame regardless of source motion, so Earth measures exactly c. The traps are 1.5c, the Galilean sum, and 0.80c, which is what velocity addition gives for two material speeds of 0.50c. What does change is the frequency, through the Doppler effect.\n\n90-SECOND SOLUTION\nNothing to compute. Note that (u + v)/(1 + uv/c²) is built so that u = c returns c for any frame speed, so the postulate and the formula agree rather than compete.\n\nWHAT TO MEMORIZE\nThe second postulate. Any other answer would make light speed frame-dependent, which is the assumption relativity discards."
      },

      // [SR/relativistic doppler]
      {
        "question": "A distant galaxy recedes from Earth at 0.20c. A spectral line emitted at 500 nm in the galaxy's rest frame is observed on Earth at a wavelength of most nearly",
        "choices": [
          "410 nm",
          "500 nm",
          "550 nm",
          "610 nm",
          "750 nm"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe relativistic Doppler formula for recession gives λ_obs = 500√(1.2/0.8) = 500√1.5 ≈ 610 nm. The trap is 550 nm, the non-relativistic λ(1 + β), noticeably off at this speed; 410 nm inverts the ratio and would describe approach.\n\n90-SECOND SOLUTION\nFix the direction first — receding means redshift, so the wavelength must grow — which eliminates two choices before any arithmetic. Then one square root, and √1.5 ≈ 1.22 makes it mental.\n\nWHAT TO MEMORIZE\nThe Doppler factor √((1 + β)/(1 − β)), and that time dilation adds to the classical effect rather than cancelling it."
      },

      // [LM/statistics & uncertainty]
      {
        "question": "A quantity is measured 100 times and the standard error of the mean is found to be 0.020 units. Assuming the measurements remain equally precise, the number of measurements required to reduce the standard error of the mean to 0.010 units is",
        "choices": [
          "141",
          "200",
          "283",
          "400",
          "1,000"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe standard error of the mean falls as σ/√N, so halving it requires quadrupling N: 400. The trap is 200, assuming a linear relationship — the most expensive misconception in experimental work, since it badly underestimates the cost of precision.\n\n90-SECOND SOLUTION\nInvert the square root once: gaining a factor k in precision costs k² in measurements. The diminishing return is the real content — the next halving would cost 1,200 more runs, which is when you improve the apparatus instead.\n\nWHAT TO MEMORIZE\nSEM = σ/√N."
      },

      // [LM/interferometers & optical instruments]
      {
        "question": "In a Michelson interferometer illuminated at 500 nm, one mirror is translated slowly through 0.10 mm along the beam direction. The number of fringes that pass a fixed point in the field of view is",
        "choices": [
          "100",
          "200",
          "400",
          "800",
          "1,600"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nMoving the mirror by d changes the optical path by 2d, since the light traverses that arm twice, so the count is 2d/λ = 2(1.0 × 10⁻⁴)/(5.0 × 10⁻⁷) = 400. The trap is 200, forgetting the round trip — the same factor of 2 that makes the instrument twice as sensitive as its geometry suggests.\n\n90-SECOND SOLUTION\nOne division, provided you double the displacement first. Counting several hundred fringes pins a displacement to a small fraction of a wavelength, which is how this became the standard length comparator and, scaled up, a gravitational-wave detector.\n\nWHAT TO MEMORIZE\nN = 2d/λ, and that the factor of 2 is the whole point of the instrument."
      },

      // [LM/measurement technique]
      {
        "question": "Two 1.0 MΩ resistors are connected in series across an ideal 10 V source. A voltmeter of internal resistance 1.0 MΩ is connected across one of them. The voltmeter reads most nearly",
        "choices": [
          "2.5 V",
          "3.3 V",
          "5.0 V",
          "6.7 V",
          "10 V"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe meter's 1.0 MΩ sits in parallel with the resistor being measured, giving 0.50 MΩ, so the divider splits 10 V between 1.0 and 0.50 MΩ and reads 10 × 0.50/1.50 ≈ 3.3 V. The true unloaded voltage is 5.0 V — the act of measuring changed the circuit.\n\n90-SECOND SOLUTION\nCompute the loaded divider, not the ideal one. Judge by the ratio: here meter and circuit resistance are equal, a catastrophic mismatch, whereas a real 10 MΩ meter would read 4.8 V — an error of a few percent rather than a third.\n\nWHAT TO MEMORIZE\nThe parallel-combination rule, and that a voltmeter must have resistance far larger than the element it measures."
      }

    ]
  },

  {
    "name": "Conceptual Drill",
    "added": "2026-08-17",
    "category": "practice",
    "cards": [

      // [CM/non-inertial frames]
      {
        "question": "In a frame rotating at constant angular velocity ω, which statement about the Coriolis force on a particle is NOT true?",
        "choices": [
          "It is perpendicular to the particle's velocity as measured in the rotating frame.",
          "It vanishes for a particle at rest in the rotating frame.",
          "It does work on a particle moving in the rotating frame.",
          "It reverses direction if the sense of the rotation is reversed.",
          "It does not depend on where in the frame the particle is located."
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe Coriolis term is −2m ω × v′, where v′ is the velocity in the rotating frame. A cross product with v′ is always perpendicular to v′, so the force can bend a trajectory but can never change the speed, and it does no work: C is the false statement and therefore the answer. It is zero when v′ = 0, it flips when ω flips, and it contains no position vector at all, so A, B, D and E are all true. Students who call E the false one are confusing Coriolis with the centrifugal force mω²r, which is the term that depends on position and not on velocity.\n\n90-SECOND SOLUTION\nWrite −2m ω × v′ once and read the four true choices straight off it: perpendicular to v′, zero when v′ = 0, odd in ω, no r anywhere. Perpendicular to velocity means zero power, so the work statement is the odd one out. This is a ten-second question, well under 90.\n\nWHAT TO MEMORIZE\nRotating-frame fictitious forces: centrifugal mω²r outward, position-dependent and able to do work; Coriolis −2m ω × v′, velocity-dependent, perpendicular to v′ and always doing zero work."
      },

      // [CM/damped & driven oscillator]
      {
        "question": "A damped oscillator of natural frequency ω₀ is driven by F₀cos(ωt) and has reached steady state. As ω is swept at fixed damping, which response is largest at exactly ω = ω₀, for every value of the damping?",
        "choices": [
          "The displacement amplitude",
          "The velocity amplitude",
          "The acceleration amplitude",
          "The phase lag of the displacement behind the driving force",
          "None of these, unless the damping is zero"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe steady-state displacement amplitude is (F₀/m)/√((ω₀² − ω²)² + 4β²ω²), which peaks below ω₀, at √(ω₀² − 2β²). Multiplying by ω to get the velocity amplitude turns the denominator into √((ω₀² − ω²)²/ω² + 4β²), whose first term vanishes at ω = ω₀ for any β, so velocity resonance sits exactly at ω₀ and so does the average absorbed power. Choice A is the standard error of assuming ω₀ is where every response function peaks; the acceleration amplitude ω²A peaks above ω₀, and the phase lag rises monotonically through 90° at ω₀ rather than having a maximum there.\n\n90-SECOND SOLUTION\nRemember the ordering: displacement resonance below ω₀, velocity and power resonance exactly at ω₀, acceleration resonance above ω₀. Equivalently, at ω₀ the springlike and masslike parts of the response cancel, so the oscillator looks purely resistive and takes the most power. Recognition, not algebra: a few seconds.\n\nWHAT TO MEMORIZE\nVelocity amplitude and average power absorbed both peak at exactly ω = ω₀ for any damping; the displacement amplitude peaks at √(ω₀² − 2β²), which is lower, and the acceleration amplitude peaks higher."
      },

      // [CM/rocket & variable mass]
      {
        "question": "A rocket in free space burns fuel at a constant rate, expelling it at constant speed u relative to the rocket. Which statement is true?",
        "choices": [
          "The thrust grows as the rocket becomes lighter.",
          "The acceleration is constant while the fuel burns.",
          "The final speed is greater if the same fuel is burned more quickly.",
          "The thrust is constant and the acceleration increases.",
          "The rocket's final speed cannot exceed u."
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThrust is u times the mass flow rate, and both are constant, so the thrust is constant; the mass in a = thrust/m keeps falling, so the acceleration climbs. That is D. The rocket equation Δv = u ln(m₀/m_f) contains no burn rate, killing C, and its logarithm is unbounded, killing E. Choice E is the common misreading that a rocket cannot outrun its own exhaust: u is measured relative to the rocket, not relative to the launch frame, so once Δv exceeds u the exhaust simply moves forward in the original frame.\n\n90-SECOND SOLUTION\nTwo remembered facts settle all five choices: thrust = u × (mass flow), and Δv depends only on the mass ratio. Constant thrust with shrinking mass gives rising acceleration, and nothing about the burn rate can appear in the final speed. Ten seconds, no algebra.\n\nWHAT TO MEMORIZE\nThrust = u |dm/dt|; Δv = u ln(m₀/m_f), which depends on the mass ratio alone and is not capped by u. Burn rate changes how long the burn takes, not the final speed in free space."
      },

      // [CM/statics]
      {
        "question": "A uniform rigid plank of weight W rests horizontally on three identical rigid supports: one under each end and one under the midpoint. The upward force exerted by the middle support is",
        "choices": [
          "zero",
          "one third of W",
          "one half of W",
          "equal to W",
          "not determinable from the information given"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThere are three unknown support forces, but planar rigid-body statics supplies only two useful equations here: vertical force balance and one torque balance, since no horizontal forces act. Three unknowns and two equations leave the problem statically indeterminate, so the load sharing depends on the elasticity of the plank and the supports, information the problem does not give: E. Choice B is what you get by wrongly assuming the three supports must share equally, and C by assuming a symmetric plank rests half on its middle support.\n\n90-SECOND SOLUTION\nCount unknown reactions against available equilibrium equations before doing anything else. Three unknowns, two equations, everything rigid, so no statics answer exists and the 'cannot be determined' option is the correct physics rather than a trap. This is a recognition question and should take well under 90 seconds.\n\nWHAT TO MEMORIZE\nA rigid body in a plane has exactly three equilibrium equations, two force components and one torque. When the number of unknown reactions exceeds the number of independent equations, the problem is statically indeterminate and needs material stiffness, not statics, to solve."
      },

      // [CM/moment of inertia]
      {
        "question": "Consider: I. Among all parallel axes in a given direction, the moment of inertia is smallest about the one through the centre of mass. II. For a plane lamina in the xy-plane, I_z = I_x + I_y for the three axes meeting at one point of the lamina. III. I = I_cm + Md² relates the moments of inertia about any two parallel axes a distance d apart. Which are correct?",
        "choices": [
          "I only",
          "III only",
          "I and III only",
          "I and II only",
          "I, II and III"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe parallel-axis theorem I = I_cm + Md² adds a non-negative term to I_cm, which proves I, and the perpendicular-axis theorem I_z = I_x + I_y is exactly statement II for a flat body. III is false because the theorem is anchored to the centre of mass: for two parallel axes at distances d₁ and d₂ from the centre of mass the correct relation is I₂ = I₁ + M(d₂² − d₁²), not Md² between them. Choosing E is precisely that error, applying the theorem from an arbitrary axis rather than from the centre-of-mass axis.\n\n90-SECOND SOLUTION\nTest III with a case you know: a thin rod, from the end axis ML²/3 to the far end a distance L away, would give ML²/3 + ML², whereas the two end axes must be equal by symmetry. III dies instantly, and only choice D keeps both surviving statements. A single counterexample decides this in seconds.\n\nWHAT TO MEMORIZE\nParallel-axis theorem: one of the two axes must pass through the centre of mass, and the centre-of-mass axis always gives the minimum. Perpendicular-axis theorem: I_z = I_x + I_y for plane laminas only."
      },

      // [CM/fluids]
      {
        "question": "Two open vessels stand on a table, each with a flat horizontal base of area A, and each holds water to the same depth h. One vessel flares outward toward the top, the other tapers inward, so they hold different volumes of water. Which is true?",
        "choices": [
          "The base pressures are equal, and the downward forces of the water on the two bases are equal.",
          "The downward force on the base is greater for the flaring vessel, which holds more water.",
          "The downward force on the base equals the weight of the water in each vessel.",
          "The base pressure is greater in the tapering vessel, since its water column is narrower.",
          "Nothing can be decided without the exact wall profiles."
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nHydrostatic pressure depends only on depth, so the gauge pressure at each base is ρgh and the downward force on each base is ρghA, identical for the two vessels even though the contained weights differ. This is the hydrostatic paradox: choice C is the classic error of equating base force to the weight of contained water, which holds only for straight-sided vessels. The imbalance is carried by the walls, which push up on the water in the flaring vessel and push down on it in the tapering one, so the table still supports each vessel's true weight.\n\n90-SECOND SOLUTION\nSay 'pressure depends on depth alone' and stop comparing volumes. Same depth and same base area force the same base pressure and the same base force, which is choice A immediately. Seconds, not minutes.\n\nWHAT TO MEMORIZE\nGauge pressure p = ρgh depends only on depth, so the force on a horizontal base is ρghA whatever the vessel's shape. Any difference between that force and the weight of the liquid is supplied by the vertical components of the forces from the sloping walls."
      },

      // [EM/waveguides]
      {
        "question": "A hollow rectangular waveguide with perfectly conducting walls carries a mode at a frequency above its cutoff. Which statement about the phase velocity and the group velocity in the guide is correct?",
        "choices": [
          "The phase velocity and the group velocity are both equal to c.",
          "The phase velocity and the group velocity are equal to each other and less than c.",
          "The phase velocity is less than c, the group velocity is greater than c, and their product is c².",
          "The phase velocity is greater than c, the group velocity is less than c, and their product is c².",
          "The phase velocity and the group velocity both exceed c, so signals travel faster than light."
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe guide dispersion relation is ω² = ω₀² + c²k², with ω₀ the cutoff frequency. Then the phase velocity ω/k always exceeds c, the group velocity dω/dk = c²k/ω is always less than c, and multiplying the two gives exactly c². Choice E is the classic error of reading a superluminal phase velocity as a superluminal signal speed; choice B treats the guide as if it were simply filled with a dielectric of index greater than 1, which would slow both velocities together.\n\n90-SECOND SOLUTION\nTake the limit at cutoff, where k → 0: the phase velocity ω/k blows up and the group velocity dω/dk goes to zero. Any choice that keeps the phase velocity at or below c, or that puts the group velocity above c, is dead on that limit alone. That leaves one option. This should take about fifteen seconds with no algebra at all.\n\nWHAT TO MEMORIZE\nWaveguide: ω² = ω₀² + c²k²; phase velocity × group velocity = c², with phase velocity > c > group velocity above cutoff. Below cutoff the mode is evanescent and carries no energy."
      },

      // [EM/radiation & dipole]
      {
        "question": "An electric dipole oscillates sinusoidally along the z-axis at angular frequency ω with fixed dipole amplitude. Consider the following statements about the radiation zone. I. The power radiated per unit solid angle vanishes along the z-axis. II. The total radiated power is proportional to ω⁴. III. The electric field falls off as 1/r². Which are true?",
        "choices": [
          "I only",
          "II only",
          "I and II only",
          "II and III only",
          "I, II and III"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nDipole radiation carries a sin²θ angular pattern measured from the dipole axis, so it is maximal broadside and vanishes along the axis — statement I holds. The Larmor result gives total power proportional to ω⁴, which is why the sky is blue, so II holds. But in the radiation zone the field falls as 1/r, not 1/r²; it is the intensity, going as the square of the field, that falls as 1/r². Statement III confuses the two, and that confusion is the whole question.\n\n90-SECOND SOLUTION\nCheck III first, since it is the cheapest to settle: radiated power must fall as 1/r² for energy conservation across spheres of growing radius, so the field must go as 1/r. That single observation kills every choice containing III and leaves only two candidates. Ten seconds more on the sin²θ pattern finishes it — an antenna does not transmit off its own tip.\n\nWHAT TO MEMORIZE\nThe sin²θ dipole pattern with a null along the axis, P ∝ ω⁴, and that radiation fields fall as 1/r while static fields fall faster."
      },

      // [EM/dielectrics]
      {
        "question": "Two linear dielectrics of different permittivity meet at the plane z = 0, with no free charge on the interface. Consider: I. the normal component of E; II. the tangential component of E; III. the normal component of D. Which are continuous across the interface?",
        "choices": [
          "I only",
          "II only",
          "III only",
          "I and III only",
          "II and III only"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\n∇ × E = 0 in statics forces the tangential component of E to be continuous, and ∇·D = free charge density with no free surface charge forces the normal component of D to be continuous. The normal component of E is not continuous: it jumps by the ratio of the permittivities, and that jump is exactly what the bound surface charge represents. Choosing I and III is the standard confusion of E with D, applying flux continuity to the wrong field.\n\n90-SECOND SOLUTION\nStore the pair as one phrase: E tangential, D normal. Then just read the roman numerals off. Under fifteen seconds. The only trap is the reflex that a divergence law makes the normal field continuous, which is true for D here but never for E when the permittivity changes.\n\nWHAT TO MEMORIZE\nAt any interface: tangential E is always continuous; normal D is continuous when there is no free surface charge; normal B is always continuous; tangential H is continuous when there is no free surface current."
      },

      // [EM/EM waves & poynting]
      {
        "question": "A long straight cylindrical wire of finite conductivity carries a steady current. Just outside its curved surface, the Poynting vector points",
        "choices": [
          "along the current, parallel to the wire",
          "radially inward, toward the axis of the wire",
          "radially outward, away from the axis of the wire",
          "azimuthally, circling the wire",
          "nowhere: it is zero, because the fields are static"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nAt the surface the tangential E points along the current (E = ρJ inside the resistive wire, and tangential E is continuous), while B circles the wire by the right-hand rule. E × B then points radially inward at every point of the surface, which is how the ohmic heat gets into the wire: energy arrives from the surrounding field, it does not flow down the wire with the carriers. Choice A is exactly that intuitive but wrong picture; choice E confuses time-independent fields with zero energy flux.\n\n90-SECOND SOLUTION\nUse energy conservation instead of a cross product. The wire dissipates I²R, so energy must be entering it, so the Poynting flux at the surface must be inward. Every other choice either delivers no net energy to the wire or delivers it in the wrong sign. Fifteen seconds, no vectors drawn.\n\nWHAT TO MEMORIZE\nS = (1/μ₀) E × B. For a resistive current-carrying wire S is radially inward, and its total inward flux over the surface equals I²R exactly."
      },

      // [EM/inductance]
      {
        "question": "A closed wire loop of zero resistance and self-inductance L lies in a uniform magnetic field. The external field is then slowly reduced to zero. Afterwards,",
        "choices": [
          "a persistent current flows, of just the size that keeps the total flux through the loop at its original value",
          "a persistent current flows, of just the size that makes the total flux through the loop zero",
          "no current flows, because zero resistance means the loop can support no emf",
          "a current flows briefly and then decays to zero",
          "the result cannot be determined without knowing the resistance of the loop"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe loop equation is IR = −dΦ/dt, and with R = 0 the left side vanishes, so dΦ/dt = 0: the total flux, external plus the self-flux LI, is frozen. As the external contribution falls to zero the current rises to exactly the value with LI equal to the original flux, and with no resistance it never decays. Choice B is the Meissner-effect error, applying B = 0 inside a superconducting body to the area of a loop; choice D imports the usual L/R transient intuition when that time constant is infinite here.\n\n90-SECOND SOLUTION\nPut R = 0 into the loop equation and read what is left: dΦ/dt = 0. Flux conservation, so pick the choice that says the total flux is unchanged. Under twenty seconds. The 'cannot be determined' option is pure bait, since the resistance is given and is zero.\n\nWHAT TO MEMORIZE\nFlux through a loop of zero resistance is conserved: external flux + LI = constant, and the induced current persists indefinitely. This is flux freezing, not the Meissner condition B = 0 inside the material."
      },

      // [EM/conductors & capacitance]
      {
        "question": "Two conducting spheres, of radii R and 2R, are far apart and joined by a long thin conducting wire. A net charge is placed on the system. Which of the following is true?",
        "choices": [
          "The two spheres carry equal charges.",
          "The smaller sphere is at the higher potential.",
          "The surface charge density is greater on the larger sphere.",
          "The electric field just outside the surface has the same magnitude at both spheres.",
          "The electric field just outside the surface is twice as large at the smaller sphere."
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe wire makes the two spheres one conductor at a single potential, and since an isolated sphere has V = q/4πε₀R, equal potentials mean q ∝ R. The surface density σ = q/4πR² then goes as 1/R, so the smaller sphere, with half the charge but a quarter of the area, has twice the density and twice the field just outside, since E = σ/ε₀. Choice B is the common error of inferring a higher potential from the stronger field, and choice C reverses the 1/R scaling by remembering only that the bigger sphere holds more charge.\n\n90-SECOND SOLUTION\nEqual potential means charge is proportional to radius, so density is proportional to 1/radius. The smaller sphere wins by exactly the ratio of radii, a factor of 2. This is the lightning-rod fact in disguise: sharper curvature, stronger field. Fifteen seconds and no arithmetic beyond that factor.\n\nWHAT TO MEMORIZE\nConnected conductors share one potential; for spheres q ∝ R, σ ∝ 1/R, and the field just outside any conductor is σ/ε₀. Field and surface charge concentrate where the surface curves most sharply."
      },

      // [QM/perturbation theory]
      {
        "question": "A system has a nondegenerate ground state. In time-independent perturbation theory, the second-order correction to the ground-state energy is",
        "choices": [
          "always zero whenever the first-order shift is zero",
          "never positive",
          "never negative",
          "always of the same sign as the first-order shift",
          "positive for repulsive perturbations and negative for attractive ones"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe second-order shift of the ground state is the sum over excited states n of |⟨n|H'|0⟩|²/(E₀ − Eₙ). Every numerator is a squared magnitude and every denominator is negative, because E₀ is the lowest energy, so the sum can only be negative or zero. Choice C is the sign error of writing the denominator as Eₙ − E₀; choice A is the error of assuming that a vanishing diagonal element ⟨0|H'|0⟩ forces the off-diagonal elements to vanish too.\n\n90-SECOND SOLUTION\nYou need only the sign structure: numerators ≥ 0, denominators E₀ − Eₙ < 0 for every term because the ground state is the lowest level. The sign of the whole sum is then fixed, and the answer takes a few seconds with nothing written down. The physical statement is level repulsion: interaction with higher levels always pushes the lowest level down.\n\nWHAT TO MEMORIZE\nSecond order: E⁽²⁾ for state n is the sum over m ≠ n of |⟨m|H'|n⟩|²/(Eₙ − E_m). For the ground state this is always ≤ 0."
      },

      // [QM/molecular rotational spectra]
      {
        "question": "A diatomic molecule is a rigid rotor with E_J = ħ²J(J+1)/2I. Its electric-dipole rotational spectrum, for which ΔJ = ±1, consists of",
        "choices": [
          "a single line at ħ²/I",
          "lines whose spacing grows as J²",
          "a continuum, because J is unbounded",
          "lines whose spacing falls off as 1/J",
          "equally spaced lines"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nA transition from J+1 down to J releases ħ²(J+1)/I, so the lines sit at ħ²/I, 2ħ²/I, 3ħ²/I, and so on: a uniform comb of spacing ħ²/I. Choice B is the error of reading level positions as line positions, since the levels themselves do spread out like J², but a spectrum probes differences of levels, and the difference of J(J+1) between successive J is 2(J+1), which is linear in J.\n\n90-SECOND SOLUTION\nDifferentiate the pattern rather than the levels: successive values of J(J+1) differ by 2(J+1), linear in J, so successive differences change by a constant. Constant increments mean a constant line spacing. Ten seconds, no pencil.\n\nWHAT TO MEMORIZE\nRigid rotor E_J = ħ²J(J+1)/2I with ΔJ = ±1 gives equally spaced lines separated by ħ²/I, which is why microwave rotational spectra look like a ladder of evenly spaced peaks."
      },

      // [QM/identical particles]
      {
        "question": "Two identical noninteracting particles occupy the distinct orbitals ψ_a and ψ_b. Compared with distinguishable particles in the same two orbitals, the probability of finding the pair at nearly the same point is",
        "choices": [
          "larger if the spatial state is symmetric, smaller if it is antisymmetric",
          "smaller if the spatial state is symmetric, larger if it is antisymmetric",
          "the same in both cases, since the particles do not interact",
          "zero in both cases, by the Pauli exclusion principle",
          "larger in both cases, since exchange always adds a second term"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nPut x₁ = x₂ in ψ_a(x₁)ψ_b(x₂) ± ψ_b(x₁)ψ_a(x₂): the antisymmetric combination vanishes identically, while the symmetric one is twice the single product, so its probability density at coincidence is enhanced. Symmetric spatial states bunch and antisymmetric ones anti-bunch, purely from interference of the exchange term. Choice C is the standard error of assuming that noninteracting means the statistics cannot influence relative positions; choice D applies the exclusion principle to every identical pair rather than only to fermions with an antisymmetric spatial state.\n\n90-SECOND SOLUTION\nEvaluate the two-particle amplitude at equal coordinates. The minus sign gives exactly zero, the plus sign gives a doubled amplitude, and the answer follows with one substitution and no integration, in well under 90 seconds.\n\nWHAT TO MEMORIZE\nExchange is an interference effect, not a force: symmetric spatial state means bunching, antisymmetric means a node whenever the two coordinates coincide."
      },

      // [QM/potential barrier & tunneling]
      {
        "question": "An electron, a muon and a proton, each of kinetic energy E, are incident on the same rectangular barrier of height V₀ > E and width L, wide enough that the transmission is well approximated by e^(−2κL). Their transmission probabilities satisfy",
        "choices": [
          "all three are equal, since E and the barrier are the same",
          "proton > muon > electron",
          "electron > muon > proton",
          "muon largest, electron and proton equal",
          "cannot be determined without a value for V₀ − E"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe decay constant is κ = √(2m(V₀ − E))/ħ, so at fixed E and fixed barrier κ scales as √m and the exponent −2κL punishes mass exponentially. The lightest particle therefore tunnels far the best: electron, then muon, then proton. Choice A is the error of thinking transmission depends only on the energy deficit V₀ − E; choice B is the classical picture in which the heavier, higher-momentum particle bulls its way through.\n\n90-SECOND SOLUTION\nOnly one ingredient carries the mass: κ ∝ √m. Larger mass means larger κ means exponentially smaller T, so rank by mass and invert. This is a five-second question once you see that the ranking is inverse to mass, and nothing is computed.\n\nWHAT TO MEMORIZE\nκ = √(2m(V₀ − E))/ħ and T ≈ e^(−2κL). Tunneling rates fall exponentially with √m, which is why tunneling is an electron phenomenon and essentially never a proton one at the same barrier."
      },

      // [QM/de broglie waves]
      {
        "question": "An electron and a proton have the same de Broglie wavelength. Consider: I. They have equal momenta. II. The electron has the greater kinetic energy. III. They have equal speeds. Which are correct?",
        "choices": [
          "I only",
          "II only",
          "I and II",
          "I and III",
          "I, II and III"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nλ = h/p fixes the momentum alone, so I is correct. Nonrelativistically K = p²/2m, so at common p the lighter electron carries the larger kinetic energy and II is correct. Equal momentum with unequal mass forces unequal speeds, so III fails. Choice D is the error of reading λ = h/mv as a statement about v rather than about the product mv.\n\n90-SECOND SOLUTION\nTranslate the given fact into the one quantity it actually constrains, p, then read off K = p²/2m and v = p/m, both of which depend on mass at fixed p. Two ratios in your head, no arithmetic, well under 90 seconds.\n\nWHAT TO MEMORIZE\nλ = h/p, so equal wavelength means equal momentum. At fixed p, K ∝ 1/m and v ∝ 1/m; at fixed kinetic energy instead, λ = h/√(2mK)."
      },

      // [QM/x-rays]
      {
        "question": "The accelerating voltage of an X-ray tube is raised, with the same target and the same tube current. Consider: I. The short-wavelength cutoff moves to shorter wavelength. II. The characteristic lines move to shorter wavelength. III. The intensity of the continuous spectrum increases. Which occur?",
        "choices": [
          "I only",
          "II only",
          "I and II",
          "I and III",
          "I, II and III"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe cutoff comes from an electron converting all its kinetic energy into one photon, λ_min = hc/eV, so raising V pushes the cutoff to shorter wavelength, and more energetic electrons radiate more bremsstrahlung at the same current, so the continuum brightens: I and III. The characteristic lines come from inner-shell vacancies in the target atoms, so their energies are set by Z through Moseley's law and do not move at all once the voltage exceeds threshold, which makes choice C the classic error of tying line positions to the tube voltage.\n\n90-SECOND SOLUTION\nSort the spectrum by what each part depends on: the continuum belongs to the electrons, hence to V, while the lines belong to the atom, hence to Z. Anything that changes only the electrons cannot shift a characteristic line. That single sorting answers the question in about ten seconds.\n\nWHAT TO MEMORIZE\nλ_min = hc/eV for the bremsstrahlung cutoff, and Moseley: characteristic X-ray energies go as (Z − 1)², independent of the accelerating voltage once it is above threshold."
      },

      // [TS/heat engines & efficiency]
      {
        "question": "Engine 1 runs reversibly between reservoirs at T₁ and T₂, and all of the heat it rejects at T₂ is taken in by engine 2, which runs reversibly between T₂ and T₃, with T₁ > T₂ > T₃. The efficiency of the pair, total work out divided by heat drawn from T₁, is",
        "choices": [
          "the sum of the two separate efficiencies",
          "the product of the two separate efficiencies",
          "the efficiency of engine 1 alone",
          "the same as that of one reversible engine working between T₁ and T₃",
          "dependent on T₂, and greatest when T₂ lies midway between T₁ and T₃"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe pair as a whole takes heat only from T₁, rejects heat only at T₃, and every step is reversible, so it is itself a reversible engine between T₁ and T₃; by Carnot's theorem its efficiency is 1 minus the ratio of the cold to the hot absolute temperature, and T₂ cancels out. The first choice is the classic error of adding efficiencies: engine 2 does not receive the full input heat, only the fraction left over after engine 1 has done its work, so the correct combination is η₁ + η₂ − η₁η₂, not η₁ + η₂. The last choice invents a T₂ dependence that the cancellation removes.\n\n90-SECOND SOLUTION\nDo not compute anything. Carnot's theorem says every reversible engine operating between the same two reservoirs has the same efficiency, so the answer cannot depend on the intermediate temperature at all. That single remark eliminates four of the five choices at once, since each of them still contains T₂. A few seconds.\n\nWHAT TO MEMORIZE\nReversible efficiency is 1 minus cold temperature over hot temperature, both absolute, and all reversible engines between the same pair of reservoirs share it. Staged efficiencies never simply add, because each stage only sees what the previous stage passed on."
      },

      // [TS/phase transitions & latent heat]
      {
        "question": "For a certain pure substance the solid is less dense than the liquid at the melting point. As the pressure on a solid-liquid mixture of it is raised, the melting temperature",
        "choices": [
          "rises, because the latent heat of fusion is positive",
          "falls, because higher pressure favours the denser liquid",
          "is unchanged, because a pure substance melts at a fixed temperature",
          "rises, because the liquid has the greater entropy",
          "cannot be determined without the value of the latent heat"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nAlong a coexistence line the Clausius-Clapeyron relation gives dP/dT = L/(T ΔV), and for melting the latent heat L is always positive, so only the sign of ΔV can flip the slope. Here the solid floats, so the liquid is denser and the volume change on melting is negative, making dP/dT negative: the melting curve leans backwards and squeezing the mixture melts it at a lower temperature, exactly as for water and ice. The first and fourth choices come from assuming ΔV is positive, which is true of most substances but not this one, and from reading only the sign of L or of the entropy change; the third confuses melting at a fixed temperature for a given pressure with independence of pressure.\n\n90-SECOND SOLUTION\nForget the formula. Pressure always favours the phase that takes up less room, and here that is the liquid, so raising the pressure pushes the system towards melting and the melting temperature must drop. Under twenty seconds, and it is the reason a pressurized ice skate slides.\n\nWHAT TO MEMORIZE\ndP/dT = L/(T ΔV) on any coexistence curve. For melting, L > 0 always, so the solid-liquid line slopes backwards precisely for those substances whose solid floats on their own liquid."
      },

      // [TS/mean free path]
      {
        "question": "A fixed sample of an ideal gas is heated in a rigid sealed container until its absolute temperature doubles. Consider: I. The mean free path is unchanged. II. The mean number of collisions suffered per molecule per second increases. III. The root-mean-square molecular speed doubles. Which are correct?",
        "choices": [
          "I only",
          "II only",
          "I and II only",
          "II and III only",
          "I, II and III"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe mean free path is 1/(√2 nσ), which depends only on number density and collision cross-section; a rigid sealed container fixes both the particle number and the volume, so n and hence the mean free path do not change, and I is correct. The molecules do move faster, and with the same distance between collisions the collision frequency, which is mean speed divided by mean free path, must rise, so II is correct. Statement III is the standard error of taking speed proportional to T instead of to √T; the rms speed is √(3kT/m), so doubling T multiplies it by √2, not by 2.\n\n90-SECOND SOLUTION\nAsk only what the mean free path depends on: density and cross-section, never temperature at fixed volume. That fixes I, and then II follows immediately because the same path is now covered faster. III falls to a one-line recall that speed goes as the square root of temperature. Well under 90 seconds and no arithmetic.\n\nWHAT TO MEMORIZE\nMean free path is 1/(√2 nσ); collision rate is mean speed over mean free path; rms speed is √(3kT/m). At constant volume the mean free path is temperature-independent, whereas at constant pressure n ∝ 1/T and the mean free path grows in proportion to T."
      },

      // [SR/relativistic doppler]
      {
        "question": "A source of proper frequency f₀ moves in a straight line past a detector. Consider the light emitted at the instant when, in the detector's frame, the source's velocity is exactly perpendicular to the line from source to detector. The frequency measured when that light arrives is",
        "choices": [
          "less than f₀",
          "equal to f₀",
          "greater than f₀",
          "equal to f₀ if v ≪ c, and greater than f₀ otherwise",
          "not determinable without the distance of closest approach"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nWith the emission chosen so that the velocity has no component along the line of sight in the detector's frame, the first-order Doppler term vanishes and only time dilation is left: the source's clock, and with it the oscillation that produces the light, runs slow by the factor γ, so the received frequency is f₀/γ, a redshift. The second choice is what the classical Doppler formula predicts, since that formula responds only to the radial component of the velocity, and the discrepancy is exactly why the transverse Doppler effect is used as a direct laboratory test of time dilation. The last choice is a trap: the shift depends on the speed, not on how far away the source passes.\n\n90-SECOND SOLUTION\nRecognise this as the transverse Doppler effect and recall that it is a redshift. If you cannot recall it, argue by symmetry: the answer cannot depend on which perpendicular direction the source moves, and a moving clock can only ever be slowed, so a blueshift is impossible and no shift would contradict time dilation. Seconds.\n\nWHAT TO MEMORIZE\nTransverse Doppler: f = f₀/γ, a pure time-dilation redshift of order v²/c², entirely absent from the classical formula."
      },

      // [SR/velocity addition]
      {
        "question": "A laser at the origin rotates at a constant angular speed, sweeping its beam across a distant screen. Beyond a certain distance the illuminated spot travels along the screen faster than c. Which of the following is true?",
        "choices": [
          "This cannot happen; the spot's speed saturates at c however distant the screen.",
          "The spot does move faster than c, so a signal can be sent along the screen faster than light.",
          "The spot moves faster than c in the laser's frame only; in the screen's frame it moves slower than c.",
          "Relativistic velocity addition applied to the rotating beam gives a spot speed below c.",
          "The spot does move faster than c, but no matter, energy or information moves along the screen, so nothing is violated."
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe spot is not an object: each illuminated point is lit by its own photon that travelled radially outward from the laser at c, and nothing passes from one point of the screen to the next. The speed of a geometric pattern is unbounded, so the second choice fails, since someone standing at one end of the screen cannot influence the light that later strikes the other end. The fourth choice misapplies velocity addition, which transforms the velocity of a particle or signal between frames and has nothing to say about the motion of an intersection point.\n\n90-SECOND SOLUTION\nAsk the one question that decides every superluminal puzzle: does anything actually travel along the path in question? Here nothing does, so there is no conflict, and the same reasoning covers the scissors-blade intersection, a shadow sweeping a wall, and a phase velocity above c. Under thirty seconds.\n\nWHAT TO MEMORIZE\nRelativity bounds the speed of matter, energy and information, not the speed of shadows, spots, intersection points or phase fronts. No memorized formula is needed here; the whole question is that distinction."
      },

      // [SR/time dilation]
      {
        "question": "Two observers move apart with constant relative velocity, each of them inertial throughout. Each finds the other's clock to be running slow. This is not a contradiction because",
        "choices": [
          "only the observer who accelerated is genuinely time dilated",
          "each observer uses a different set of simultaneous events when comparing the distant clock with his own",
          "the effect is an artifact of light travel time and disappears once that delay is subtracted",
          "the clocks actually tick alike, and each reading is distorted by the Doppler shift",
          "one clock really is slower, but which one cannot be determined without a third observer"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nSaying that a clock runs slow means comparing one moving clock against two clocks synchronised in your own frame at two different places, and the two observers disagree about which distant events are simultaneous, so they are not comparing the same pairs of readings; both statements are correct measurements and the symmetry is genuine. The third and fourth choices treat time dilation as a propagation or Doppler artifact, but the effect survives after every light travel delay is removed. The first choice imports acceleration, which is irrelevant because both observers remain inertial for the whole comparison.\n\n90-SECOND SOLUTION\nAny time mutual time dilation looks paradoxical, the resolution is the relativity of simultaneity. Notice also that the stem declares both observers inertial, which by itself kills every choice appealing to acceleration or to a preferred clock. Seconds.\n\nWHAT TO MEMORIZE\nTime dilation compares one clock with two synchronised clocks, and different frames synchronise differently. The asymmetry lives in the vΔx/c² term of Δt' = γ(Δt − vΔx/c²)."
      },

      // [OW/doppler]
      {
        "question": "Sound of frequency f₀ travels in still air of sound speed v. In case 1 the source moves toward a stationary observer at speed u < v; in case 2 the observer moves toward a stationary source at the same u. The frequency received in case 1, compared with case 2, is",
        "choices": [
          "higher, the two already differing in the term linear in u/v",
          "higher, although the two agree in the term linear in u/v",
          "lower, although the two agree in the term linear in u/v",
          "exactly equal for every u, since only the relative motion matters",
          "higher if u < v/2 and lower if u > v/2"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nWith the air at rest, motion of the observer changes the numerator, f = f₀(v + u)/v, while motion of the source changes the denominator, f = f₀v/(v − u). Since (1 − u/v)(1 + u/v) = 1 − u²/v² < 1, the moving-source case gives the larger frequency; but 1/(1 − u/v) = 1 + u/v + u²/v² + ... agrees with 1 + u/v through the linear term, so the two cases first differ at order u²/v². Choice D is the relativistic intuition that only relative velocity can matter, which is true for light in vacuum and false for sound, because the air picks out a preferred frame. Choice A is the error of noticing the asymmetry but assuming it shows up already at first order.\n\n90-SECOND SOLUTION\nWrite the two expressions and look only at where u sits. A factor 1/(1 − x) always exceeds 1 + x, and the two match to first order in x. That comparison takes seconds and needs no numbers at all.\n\nWHAT TO MEMORIZE\nf = f₀(v ± u of observer)/(v ∓ u of source): observer speed in the numerator, source speed in the denominator. The two are equivalent only to first order; for light in vacuum there is no medium and only the relative speed enters."
      },

      // [OW/geometric optics: lenses]
      {
        "question": "A thin converging lens forms a sharp real image of a small object on a screen. An opaque card is then held against the lens, covering its upper half completely. The image on the screen is best described as",
        "choices": [
          "only the upper half of the original image, at the original brightness",
          "only the lower half of the original image, at the original brightness",
          "the whole image at the original brightness, but halved in linear size",
          "the whole image at its original place and size, but dimmer",
          "absent, the screen now showing only a blur"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nEvery point of the object sends a cone of rays that fills the whole aperture, and the lens returns that entire cone to a single image point. Covering half the aperture removes half of every cone, so each image point receives less light and the image is dimmer, but no part of the image is lost, and the image position, fixed by 1/s + 1/s' = 1/f, and the magnification −s'/s are untouched. Choices A and B come from drawing only the two or three principal rays and then assuming that the ray crossing the blocked part of the lens carried a particular half of the image. Choice C confuses the size of the aperture with the size of the image.\n\n90-SECOND SOLUTION\nAsk what determines where the image sits and how big it is: only the object distance and the focal length, neither of which a card touches. An aperture stop can change only how much light arrives, and its diffraction and aberration effects. Pick the complete-but-dimmer option on sight.\n\nWHAT TO MEMORIZE\nPosition and size come from 1/s + 1/s' = 1/f and m = −s'/s; the aperture governs brightness and resolution only. Blocking part of a lens never removes part of an image."
      },

      // [SP/rutherford scattering]
      {
        "question": "Alpha particles of kinetic energy E are scattered by the nuclei of a thin gold foil. At a fixed scattering angle θ, the number counted per unit solid angle varies with E as",
        "choices": [
          "1/E²",
          "1/E",
          "1/E⁴",
          "E², so that faster alphas scatter more often",
          "no power of E, the rate being independent of E"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe Rutherford result is dσ/dΩ ∝ (Z₁Z₂e²/E)² sin⁻⁴(θ/2), so at fixed θ the yield falls as 1/E². Choice B is what a student gets by recalling only that the distance of closest approach scales as 1/E and forgetting that a cross section is an area and therefore goes as the square of that length. Choice C comes from squaring twice, or from importing the exponent 4 of the sin⁻⁴(θ/2) factor into the energy dependence. Choice D is the intuition that a faster projectile interacts more.\n\n90-SECOND SOLUTION\nNo formula is needed. The only length the Coulomb problem supplies is the closest-approach distance d ∝ Z₁Z₂e²/E, and a differential cross section has the dimensions of area, so it must go as d² ∝ 1/E². That dimensional argument takes about fifteen seconds.\n\nWHAT TO MEMORIZE\ndσ/dΩ ∝ (Z₁Z₂e²/E)²/sin⁴(θ/2). Two facts cover nearly every Rutherford question: 1/E² at fixed angle, and the steep sin⁻⁴(θ/2) divergence toward small angles, which reflects the infinite range of the Coulomb force."
      },

      // [SP/fission & fusion]
      {
        "question": "In the core of the Sun the mean thermal energy is of order 1 keV, while the Coulomb barrier between two protons is of order 1 MeV. Which of the following statements about hydrogen burning there are correct?\nI. The reactions are dominated by protons drawn from the high-energy tail of the thermal distribution, far above the mean energy.\nII. Barrier penetration by tunnelling is essential, since classically almost no pair has enough energy.\nIII. The first step, p + p → ²H + e⁺ + neutrino, is a weak-interaction process, and its slowness sets the rate of the whole chain.",
        "choices": [
          "I only",
          "III only",
          "I and II only",
          "II and III only",
          "I, II and III"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nAll three hold. At kT of order 1 keV essentially no proton pair can climb a 1 MeV barrier, so fusion proceeds only by tunnelling, and because the tunnelling probability climbs steeply with energy while the Maxwell-Boltzmann population falls steeply, the product peaks well above kT at the Gamow peak. The first step must convert a proton into a neutron, emitting a positron and a neutrino, which is a weak process; its minute rate is why the Sun burns steadily for billions of years instead of consuming itself. Rejecting III is the usual error: students assume that every step of a fusion chain is governed by the strong interaction because the final binding is nuclear.\n\n90-SECOND SOLUTION\nI and II are the standard Gamow-peak picture and go down easily, so the whole question is whether you accept III. Recall that two protons cannot form a deuteron without turning one into a neutron, which requires a weak vertex, and take the all-three option.\n\nWHAT TO MEMORIZE\nThermonuclear rate = tunnelling probability rising with E times a Maxwell tail falling with E, giving a narrow peak far above kT. The pp chain opens with the weak reaction p + p → ²H + e⁺ + neutrino, the bottleneck of solar burning."
      },

      // [LM/detectors & counters]
      {
        "question": "A Geiger-Müller tube, unlike a proportional counter, cannot be used to measure the energy deposited by the particles it detects. The reason is that",
        "choices": [
          "its detection efficiency for ionizing radiation is too low for a spectrum to be accumulated",
          "its dead time is too long for individual events to be separated",
          "the avalanche saturates, so every pulse has essentially the same amplitude however much energy was deposited",
          "the fill gas is at too low a pressure for a particle to be stopped inside the active volume",
          "it collects only the primary ion pairs, with no gas multiplication, so the signal is lost in the noise"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nIn the Geiger region the field is high enough that one initial ion pair sets off an avalanche that spreads along the whole anode wire and is choked off by its own positive space charge. The output pulse is therefore large and essentially the same size whether the initiating event deposited a few keV or a few MeV, so the tube counts events but carries no energy information. A proportional counter is run at lower voltage, where the gas gain is a fixed multiplier and pulse height stays proportional to the primary ionization. Choice B names a genuine Geiger limitation, dead times of order 100 μs that distort high count rates, but that limits rate, not energy measurement; choice E describes an ionization chamber, which has no multiplication at all.\n\n90-SECOND SOLUTION\nRun down the three operating regions of a gas counter and ask in which one the pulse height stops depending on the primary ionization. That is the Geiger plateau, and naming it is the whole answer. Pure recall, a few seconds.\n\nWHAT TO MEMORIZE\nIonization chamber: no multiplication, tiny signal proportional to energy. Proportional counter: constant gas gain, pulse height proportional to energy. Geiger-Müller: saturated avalanche, large uniform pulses, no energy information, long dead time."
      },

      // [LM/statistics & uncertainty]
      {
        "question": "A student measures a time interval repeatedly with a stopwatch whose oscillator runs 2 percent slow, and averages the readings. As the number of readings N is increased, which of the following happens?",
        "choices": [
          "Both the random and the systematic contributions to the error of the mean fall as 1/√N.",
          "The random error of the mean falls as 1/√N, while the 2 percent systematic error of the mean is unchanged.",
          "The standard deviation of the individual readings falls as 1/√N, while the 2 percent systematic error is unchanged.",
          "The mean converges on the true interval, because the stopwatch error averages away like any other.",
          "Nothing improves, since an average of miscalibrated readings is no better than a single one."
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nAveraging N independent readings shrinks the random scatter of the mean as σ/√N, but a calibration fault shifts every reading in the same direction by the same fraction, so it survives averaging untouched and the mean converges on a value 2 percent from the truth. Choice D is the standard blunder of treating all errors as random. Choice C confuses the spread of the individual readings, which tends to a fixed value set by the student's reaction time and does not shrink, with the standard deviation of the mean, which is the quantity that falls as 1/√N. Choice E overcorrects: precision does improve with N, only accuracy does not.\n\n90-SECOND SOLUTION\nSeparate the two contributions before reading the options: random shrinks as 1/√N, systematic does not shrink at all. Exactly one option says both of those things, so no arithmetic is needed at all.\n\nWHAT TO MEMORIZE\nStandard deviation of the mean = σ/√N, where σ, the spread of single readings, is independent of N. Repetition buys precision, never accuracy; a systematic error is removed only by calibration or by changing the method."
      }

    ]
  },

  {
    "name": "Condensed Matter Physics",
    "added": "2026-08-22",
    "category": "topic",
    "cards": [

      {
        "question": "A copper strip of thickness 1.0 mm carries a current of 2.0 A along its length in a uniform magnetic field of 0.50 T directed perpendicular to the strip's flat face. Taking the conduction electron density of copper to be 8.5 × 10²⁸ m⁻³, the resulting Hall voltage across the strip is most nearly",
        "choices": [
          "7 × 10⁻⁸ V",
          "7 × 10⁻¹⁰ V",
          "7 × 10⁻⁶ V",
          "7 × 10⁻⁴ V",
          "7 × 10⁻² V"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe Hall field balances the magnetic force on the drifting carriers, giving V_H = IB/(net). With I = 2.0 A, B = 0.50 T, n = 8.5 × 10²⁸ m⁻³, e = 1.6 × 10⁻¹⁹ C, and t = 1.0 × 10⁻³ m, V_H ≈ 7.4 × 10⁻⁸ V. The trap is dropping the thickness t from the denominator (using the strip's length or width instead), which shifts the answer by orders of magnitude.\n\n90-SECOND SOLUTION\nPlug directly into V_H = IB/(net); no intermediate steps needed. Sanity check: metals have huge carrier densities, so Hall voltages in ordinary lab fields are always in the microvolt range or smaller — instantly rules out the two largest choices.\n\nWHAT TO MEMORIZE\nV_H = IB/(net), and that metallic Hall voltages are characteristically microvolt-scale because n is so large."
      },

      {
        "question": "Copper K-alpha X-rays of wavelength 0.154 nm undergo first-order Bragg reflection from a set of crystal planes at a glancing angle of 32° (measured from the plane). The interplanar spacing is most nearly",
        "choices": [
          "0.081 nm",
          "0.145 nm",
          "0.245 nm",
          "0.291 nm",
          "0.363 nm"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nBragg's law is 2d sinθ = nλ. With n = 1, λ = 0.154 nm, θ = 32°: d = λ/(2 sinθ) = 0.154/(2 × 0.530) ≈ 0.145 nm. The 0.291 nm distractor comes from forgetting the factor of 2; 0.081 nm comes from inverting sine and cosine (θ is measured from the plane, not the normal).\n\n90-SECOND SOLUTION\nOne division after looking up sin32° ≈ 0.53. Sanity check: the answer should land near typical atomic spacings (a few tenths of a nanometer) — instantly rules out 0.081 nm as too small.\n\nWHAT TO MEMORIZE\n2d sinθ = nλ with θ measured from the crystal plane itself, not the surface normal."
      },

      {
        "question": "Pure silicon has a band gap of approximately 1.1 eV. The longest photon wavelength capable of exciting an electron across the gap (the intrinsic absorption edge) is most nearly",
        "choices": [
          "270 nm",
          "550 nm",
          "1100 nm",
          "700 nm",
          "2200 nm"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe cutoff wavelength satisfies hc/λ = Eg, so λ = hc/Eg = 1240 eV·nm / 1.1 eV ≈ 1100 nm. This lies just past the red end of the visible spectrum, in the near infrared — consistent with silicon photodiodes being infrared-sensitive. The 550 nm distractor doubles the correct answer's exponent-scale error by using 2Eg; 2200 nm comes from a stray factor of 2 the other way.\n\n90-SECOND SOLUTION\nMemorize hc ≈ 1240 eV·nm and divide by the gap directly. Any longer-wavelength (lower-energy) photon simply cannot promote an electron across a 1.1 eV gap.\n\nWHAT TO MEMORIZE\nhc ≈ 1240 eV·nm, and λ_cutoff = hc/Eg defines a semiconductor's intrinsic absorption edge."
      },

      {
        "question": "Modeling the conduction electrons in copper as a free electron gas with number density 8.5 × 10²⁸ m⁻³, the Fermi energy is most nearly",
        "choices": [
          "0.07 eV",
          "0.7 eV",
          "70 eV",
          "7 eV",
          "700 eV"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nFor a free electron gas, E_F = (ħ²/2m)(3π²n)^(2/3). Plugging in n = 8.5 × 10²⁸ m⁻³ gives E_F ≈ 7.1 eV, matching the well-known textbook value for copper. Off-by-one-decade distractors come from forgetting to cube-root the 3π²n factor or from mishandling the exponent 2/3.\n\n90-SECOND SOLUTION\nRecognize this as the standard free-electron-gas result and know that metallic Fermi energies cluster in the few-eV range (roughly 2–12 eV across common metals) — that alone picks out 7 eV without finishing the arithmetic.\n\nWHAT TO MEMORIZE\nE_F = (ħ²/2m)(3π²n)^(2/3), and that typical metallic Fermi energies are a few eV — far above room-temperature kT ≈ 0.025 eV, which is why conduction electrons are degenerate."
      },

      {
        "question": "A 54 g block of aluminum (molar mass 27 g/mol) is warmed by 10 K well above its Debye temperature, where the Dulong–Petit law applies. The heat absorbed is most nearly",
        "choices": [
          "12 J",
          "50 J",
          "250 J",
          "1500 J",
          "500 J"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nDulong–Petit gives a molar heat capacity of 3R per mole regardless of the element. With 54 g / 27 g/mol = 2.0 mol and ΔT = 10 K: Q = (2.0)(3 × 8.314)(10) ≈ 499 J. The 250 J distractor drops the factor of 3 (using R instead of 3R); 1500 J triples it again by mis-substituting.\n\n90-SECOND SOLUTION\nMemorize the high-temperature molar heat capacity as 3R ≈ 25 J/(mol·K), independent of which solid it is, then multiply by moles and ΔT — three multiplications, no lookups beyond R.\n\nWHAT TO MEMORIZE\nDulong–Petit: C_molar → 3R at high temperature (T ≫ Θ_D) for any monatomic crystalline solid; this is the classical limit that both Debye and Einstein theories reduce to."
      },

      {
        "question": "In a face-centered cubic crystal, the atomic packing fraction (fraction of the cell volume occupied by hard spheres in contact along the face diagonal) is most nearly",
        "choices": [
          "0.74",
          "0.52",
          "0.68",
          "0.86",
          "1.00"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nIn FCC, spheres touch along the face diagonal, so 4r = a√2, giving r = a√2/4. With 4 atoms per conventional cell, the packing fraction works out to π/(3√2) ≈ 0.74 — the densest possible packing of identical spheres. The 0.68 distractor is the BCC value (spheres touching along the body diagonal instead); 0.52 is simple cubic.\n\n90-SECOND SOLUTION\nRecall the three standard packing fractions as a set (SC 0.52, BCC 0.68, FCC/HCP 0.74) rather than rederiving the geometry — FCC and HCP share the maximal value.\n\nWHAT TO MEMORIZE\nPacking fractions: simple cubic 0.52, body-centered cubic 0.68, face-centered cubic (and hexagonal close-packed) 0.74 — the densest sphere packing achievable."
      },

      {
        "question": "Niobium becomes superconducting below Tc = 9.2 K. Using the BCS weak-coupling relation 2Δ(0) ≈ 3.5 kT_c for the zero-temperature energy gap, Δ(0) is most nearly",
        "choices": [
          "0.02 meV",
          "1.4 meV",
          "0.2 meV",
          "14 meV",
          "140 meV"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nΔ(0) = 3.5 kT_c/2 = 1.75 × (8.617 × 10⁻⁵ eV/K)(9.2 K) ≈ 1.4 × 10⁻³ eV = 1.4 meV. The 14 meV distractor drops the factor of 2 in the BCS relation; 0.2 meV divides by 3.5 instead of multiplying.\n\n90-SECOND SOLUTION\nUse kT_c in eV directly (k ≈ 8.6 × 10⁻⁵ eV/K is worth having memorized), multiply by 3.5, halve it — three steps, no unit conversion needed since eV was used throughout.\n\nWHAT TO MEMORIZE\nBCS weak-coupling relation 2Δ(0) ≈ 3.5 kT_c, connecting the microscopic pairing gap to the macroscopically measured transition temperature."
      },

      {
        "question": "In a certain n-type semiconductor the electrons behave as if they had an effective mass m* = 0.067 mₑ (typical of GaAs). In a magnetic field of 0.80 T, the cyclotron resonance angular frequency of these electrons is most nearly",
        "choices": [
          "1.4 × 10¹¹ rad/s",
          "1.4 × 10¹³ rad/s",
          "2.1 × 10¹² rad/s",
          "2.1 × 10¹⁴ rad/s",
          "1.4 × 10¹⁵ rad/s"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nCyclotron frequency is ω_c = eB/m*, exactly the free-electron formula but with the band effective mass substituted for mₑ. Here m* = 0.067 × 9.11 × 10⁻³¹ kg, giving ω_c = (1.6 × 10⁻¹⁹)(0.80)/(6.1 × 10⁻³²) ≈ 2.1 × 10¹² rad/s. Using the bare electron mass instead of m* is the standard trap and gives an answer smaller by a factor of ~15.\n\n90-SECOND SOLUTION\nStart from the free-electron cyclotron frequency for B = 0.8 T (order 10¹¹ rad/s) and scale up by 1/0.067 ≈ 15, since ω_c ∝ 1/m*. Confirms the answer lands in the 10¹² range.\n\nWHAT TO MEMORIZE\nω_c = eB/m*, with m* (not mₑ) controlling the resonance — this is precisely how cyclotron resonance experiments measure effective mass."
      },

      {
        "question": "X-rays of wavelength 0.090 nm are directed at a crystal whose relevant planes are spaced 0.25 nm apart. The largest order n for which a Bragg reflection maximum can occur is",
        "choices": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nBragg's law requires sinθ = nλ/(2d) ≤ 1, so the order n is capped at n ≤ 2d/λ = 2(0.25)/0.090 ≈ 5.6. Since n must be an integer, the largest allowed order is n = 5: checking directly, sinθ = 5(0.090)/(2×0.25) = 0.90, which is a valid angle, while n = 6 would require sinθ = 1.08, impossible. So n = 5 is the answer.\n\n90-SECOND SOLUTION\nCompute 2d/λ and round down to the nearest integer — one division and a floor operation.\n\nWHAT TO MEMORIZE\nThe integer constraint sinθ ≤ 1 caps the diffraction order at n_max = ⌊2d/λ⌋; this ceiling is a common wrinkle GRE problems use to test whether sinθ > 1 is recognized as forbidden."
      },

      {
        "question": "Diamond is an electrical insulator with an exceptionally high melting point and extreme hardness. These properties are best explained by which type of bonding between the carbon atoms?",
        "choices": [
          "Metallic bonding, with a delocalized electron sea",
          "Ionic bonding between oppositely charged carbon ions",
          "Van der Waals bonding from induced dipole fluctuations",
          "Hydrogen bonding between adjacent lattice sites",
          "Covalent bonding, with strongly directional, localized shared electron pairs"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEach carbon atom in diamond forms four strong, directional sp³ covalent bonds to its neighbors. These localized shared-electron bonds both resist deformation (extreme hardness) and leave no free carriers (insulating), while requiring enormous energy to break (very high melting point). Metallic bonding would instead give good conductivity, and van der Waals bonding (correct for a noble-gas solid like solid argon) would give a very low melting point, not a high one.\n\n90-SECOND SOLUTION\nMatch the property triad — hard, high-melting, insulating — directly to covalent bonding; none of the other bonding types produces an insulator with these mechanical properties simultaneously.\n\nWHAT TO MEMORIZE\nBonding-to-property associations: metallic (conducting, malleable), ionic (hard, brittle, often soluble), van der Waals (soft, low melting point, e.g. solid noble gases), covalent network (hard, high melting point, often insulating, e.g. diamond)."
      },

      {
        "question": "A metal's work function is 4.5 eV. The longest wavelength of light that can still eject photoelectrons from its surface is most nearly",
        "choices": [
          "280 nm",
          "28 nm",
          "180 nm",
          "450 nm",
          "1400 nm"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nPhotoemission requires hc/λ ≥ W, so the threshold wavelength is λ = hc/W = 1240 eV·nm/4.5 eV ≈ 276 nm, in the ultraviolet. The 450 nm distractor divides 1240 by 4.5 incorrectly by a factor related to eV/J confusion patterns; 1400 nm is off by roughly a factor of 5.\n\n90-SECOND SOLUTION\nOne division using hc ≈ 1240 eV·nm. Sanity check: a few-eV work function should give a UV threshold, since visible light tops out around 3.1 eV (400 nm) — rules out any answer at or above 400 nm.\n\nWHAT TO MEMORIZE\nPhotoemission threshold: λ_max = hc/W, with hc ≈ 1240 eV·nm; typical metallic work functions (4–5 eV) put the threshold in the near ultraviolet."
      },

      {
        "question": "An electron in a one-dimensional periodic lattice has a band energy E(k) = E₀ − A cos(ka), where A = 1.0 eV and a = 0.30 nm. Near the bottom of the band (k ≈ 0), the effective mass of the electron is most nearly",
        "choices": [
          "0.02 mₑ",
          "0.85 mₑ",
          "0.08 mₑ",
          "8.5 mₑ",
          "85 mₑ"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe effective mass is defined by 1/m* = (1/ħ²) d²E/dk². Differentiating twice gives d²E/dk² = Aa²cos(ka), which at k = 0 equals Aa². Substituting A = 1.0 eV and a = 0.30 nm gives m* ≈ 0.85 mₑ — a physically reasonable value near the free-electron mass, since a shallow, wide band (small A, or large a) tracks free-electron-like dispersion. Choice E (85 mₑ) comes from forgetting to square a; choice A comes from an inverted definition.\n\n90-SECOND SOLUTION\nDifferentiate the cosine twice (a standard pattern worth recognizing on sight: −Acos(ka) → second derivative Aa²cos(ka) at the extremum), then plug into m* = ħ²/(Aa²) directly.\n\nWHAT TO MEMORIZE\nm* = ħ²/(d²E/dk²), evaluated at the band extremum of interest; a tight-binding cosine band gives d²E/dk² = Aa² at the band bottom (k=0) and −Aa² at the band top (k=π/a), which is why effective mass can even come out formally negative near a band top."
      },

      {
        "question": "Two samples of the same superconducting element are prepared from different isotopes, with atomic masses 200 u and 202 u respectively. The isotope with mass 200 u has a critical temperature of 4.00 K. According to the BCS isotope effect (Tc ∝ M^(−1/2)), the critical temperature of the 202 u sample is most nearly",
        "choices": [
          "3.92 K",
          "4.00 K",
          "3.98 K",
          "4.02 K",
          "4.08 K"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nT_c ∝ M^(−1/2), so T_c(202) = T_c(200) × √(200/202) ≈ 4.00 × 0.9950 ≈ 3.98 K. The heavier isotope has a slightly lower critical temperature — direct evidence that lattice vibrations (phonons), which depend on ionic mass, mediate the pairing interaction. This small shift is exactly what historically helped establish the phonon-mediated mechanism behind BCS theory.\n\n90-SECOND SOLUTION\nRecognize the shift must be small (a 1% mass change under a square root gives a ~0.5% frequency/Tc change) and pick the closest answer just below 4.00 K, without needing a precise calculation.\n\nWHAT TO MEMORIZE\nThe isotope effect T_c ∝ 1/√M is direct experimental evidence that electron-phonon coupling (not purely electronic effects) mediates conventional superconductivity."
      },

      {
        "question": "A crystalline solid has a Debye temperature of 400 K. The corresponding Debye (maximum phonon) angular frequency is most nearly",
        "choices": [
          "5 × 10⁸ rad/s",
          "5 × 10¹⁰ rad/s",
          "5 × 10¹⁶ rad/s",
          "5 × 10¹³ rad/s",
          "5 × 10¹⁹ rad/s"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe Debye temperature is defined through ħω_D = kΘ_D, so ω_D = kΘ_D/ħ = (1.38 × 10⁻²³)(400)/(1.055 × 10⁻³⁴) ≈ 5.2 × 10¹³ rad/s. This lands squarely in the range of real phonon frequencies (comparable to infrared vibrational frequencies), which is a useful anchor for order-of-magnitude sanity checks.\n\n90-SECOND SOLUTION\nOne division, ħω = kT converted directly to ω = kT/ħ, then plug in Θ_D for T.\n\nWHAT TO MEMORIZE\nħω_D = kΘ_D defines the Debye frequency as the highest phonon frequency the lattice supports; typical Debye temperatures (200–500 K for most solids) correspond to ω_D in the 10¹³–10¹⁴ rad/s range, the same scale as molecular vibrational frequencies."
      },

      {
        "question": "A doped semiconductor sample shows electrical resistivity that decreases as temperature increases, over a wide range near room temperature. This behavior indicates that the sample is most likely",
        "choices": [
          "a metal, since resistivity always falls with rising temperature",
          "a superconductor approaching its critical temperature from above",
          "an insulator, since insulators have temperature-independent resistivity",
          "impossible to determine without knowing the carrier sign",
          "a semiconductor, since increasing thermal energy promotes more carriers across the gap or ionizes more dopants"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nIn a semiconductor, carrier concentration grows exponentially with temperature (∝ e^(−Eg/2kT) in the intrinsic regime, or via increasing dopant ionization in the extrinsic regime), and this effect overwhelms the mild increase in scattering, so resistivity falls as T rises. Metals show the opposite trend: fixed carrier density but increasing phonon scattering makes resistivity rise with T. Choice A gets the metal behavior backwards and misapplies it here.\n\n90-SECOND SOLUTION\nMemorize the qualitative contrast directly: metal resistivity rises with T (more scattering, same carrier count); semiconductor resistivity falls with T (more carriers, dominating any scattering increase).\n\nWHAT TO MEMORIZE\nMetals: ρ increases with T (scattering-dominated). Semiconductors: ρ decreases with T (carrier-generation-dominated) — this sign difference is a fast, purely qualitative way to distinguish the two from a single resistivity-vs-temperature trend."
      },

      {
        "question": "In the free electron model, the density of states g(E) for a three-dimensional electron gas is proportional to E^(1/2). If the Fermi energy of a metal were somehow doubled while the electron density stayed the same, the density of states at the (new) Fermi level relative to its original value would be scaled by a factor of",
        "choices": [
          "√2",
          "1/√2",
          "1",
          "2",
          "2√2"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\ng(E) ∝ E^(1/2), so g(2E_F)/g(E_F) = (2E_F/E_F)^(1/2) = √2. This is a direct substitution once the E^(1/2) dependence is recalled; the scenario is hypothetical (doubling E_F while holding n fixed isn't physically self-consistent) purely to isolate the scaling law being tested.\n\n90-SECOND SOLUTION\nApply the power law directly: doubling the input to a square-root function scales the output by √2, no other information needed.\n\nWHAT TO MEMORIZE\nFree-electron density of states g(E) ∝ √E in three dimensions (a consequence of the k-space volume enclosed scaling as k³ ∝ E^(3/2), and dN/dE differentiating that down to E^(1/2))."
      },

      {
        "question": "At absolute zero, a free electron gas fills all single-particle states up to the Fermi energy and none above it. If the same gas is instead described using Maxwell–Boltzmann (classical) statistics at the same temperature and density, the classical model would incorrectly predict that",
        "choices": [
          "the electron gas exerts zero pressure at T = 0",
          "most electrons have kinetic energy of order kT, when in fact most have energy of order the (much larger) Fermi energy",
          "electrons obey the Pauli exclusion principle more strictly than they actually do",
          "the total energy of the gas would be higher than the true quantum-mechanical value",
          "the specific heat would vanish at all temperatures, matching the true low-temperature behavior"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nClassically, equipartition assigns each electron kinetic energy of order kT. But Pauli exclusion forces electrons to stack up to the Fermi energy, which for real metals is several eV — vastly larger than room-temperature kT ≈ 0.025 eV. The classical picture is therefore qualitatively wrong about the typical electron's energy scale, which is why classical theories badly mispredict metallic specific heat and thermal properties.\n\n90-SECOND SOLUTION\nThe defining failure of classical statistics for conduction electrons is always this same energy-scale mismatch (kT vs E_F) — recognize the pattern rather than re-deriving it.\n\nWHAT TO MEMORIZE\nDegenerate Fermi gas: typical electron energy ~E_F (several eV) ≫ kT, the opposite of the classical equipartition expectation — this single fact explains why the electronic contribution to metallic heat capacity is so much smaller than the classical 3R/2 per electron would suggest."
      },

      {
        "question": "A simple cubic lattice has a lattice constant a = 0.35 nm. The magnitude of the shortest reciprocal lattice vector is most nearly",
        "choices": [
          "0.35 nm⁻¹",
          "1.4 nm⁻¹",
          "18 nm⁻¹",
          "9.0 nm⁻¹",
          "36 nm⁻¹"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFor a simple cubic direct lattice with constant a, the reciprocal lattice is also simple cubic, with constant 2π/a. The shortest reciprocal lattice vector therefore has magnitude 2π/a = 2π/0.35 nm ≈ 18 nm⁻¹. The 9.0 nm⁻¹ distractor drops the factor of 2; 0.35 nm⁻¹ confuses a with 1/a directly without the 2π.\n\n90-SECOND SOLUTION\nRecall that simple cubic is self-dual in reciprocal space with spacing 2π/a, and divide.\n\nWHAT TO MEMORIZE\nReciprocal lattice vectors have magnitude 2π/(real-space spacing); for simple cubic specifically, the reciprocal lattice is itself simple cubic with constant 2π/a."
      },

      {
        "question": "Electrons of kinetic energy 54 eV are directed at a nickel crystal and a strong diffracted beam is observed at a particular angle, consistent with Bragg reflection from atomic planes (the Davisson–Germer experiment). This result is most directly explained by",
        "choices": [
          "the photoelectric effect, showing light has particle character",
          "the Compton effect, showing photons carry momentum",
          "the uncertainty principle, limiting how precisely the electron's position is known",
          "the de Broglie hypothesis, showing electrons have an associated wavelength capable of diffracting like X-rays",
          "blackbody radiation, showing quantization of electromagnetic energy"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nDavisson and Germer observed that electrons scattering off a nickel crystal produced an intensity pattern with maxima at angles matching the Bragg condition, exactly as X-rays would — direct confirmation that particles carry a wave character with wavelength λ = h/p, as de Broglie proposed. None of the other listed effects concern matter waves at all.\n\n90-SECOND SOLUTION\n\"Electron diffraction from a crystal\" is a fixed keyword association with de Broglie/wave-particle duality — no calculation needed to identify it.\n\nWHAT TO MEMORIZE\nDavisson–Germer: electron diffraction from a crystal lattice is the landmark confirmation of the de Broglie relation λ = h/p for matter."
      },

      {
        "question": "A type-I superconducting sphere is placed in a weak external magnetic field while held below its critical temperature. Which statement correctly describes the field inside the sphere?",
        "choices": [
          "The field inside equals the applied field, since superconductors are perfect conductors",
          "The field inside depends on whether the field was applied before or after cooling below Tc",
          "The field inside is twice the applied field, due to flux concentration",
          "The field inside oscillates at the cyclotron frequency of the trapped electrons",
          "The field inside is expelled to zero by surface (Meissner) currents, regardless of the sphere's history"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe Meissner effect is the active expulsion of magnetic flux from the bulk of a type-I superconductor below Tc, and critically, the final field-free state is the same whether the field was applied before or after cooling — this path-independence is what distinguishes a true superconductor from a hypothetical 'perfect conductor,' which would merely freeze in whatever flux was present at the moment resistance vanished.\n\n90-SECOND SOLUTION\n'Path-independent, always zero inside' is the single fact that defines the Meissner effect and separates it from the weaker perfect-conductor prediction — recognize the phrase and answer immediately.\n\nWHAT TO MEMORIZE\nMeissner effect: B = 0 inside a type-I superconductor below Tc, independent of field-then-cool vs. cool-then-field order — this history-independence is the experimental signature that a material is a true superconductor, not just a zero-resistance conductor."
      }

    ]
  },

  {
    "name": "General Practice Set 1",
    "added": "2026-08-22",
    "category": "practice",
    "cards": [

      {
        "question": "A block of mass 3.0 kg and a block of mass 5.0 kg hang from opposite ends of a light string draped over a pulley of mass 2.0 kg, radius R, which may be treated as a uniform disk (I = ½MR²) that rotates without slipping. The magnitude of the acceleration of the system is most nearly",
        "choices": [
          "2.2 m/s²",
          "1.2 m/s²",
          "1.8 m/s²",
          "2.5 m/s²",
          "3.3 m/s²"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nWriting Newton's second law for each block and torque for the pulley (with a = Rα) gives a = (m₂−m₁)g/(m₁+m₂+M/2), where the M/2 term is the pulley's rotational inertia contribution. Substituting m₁=3, m₂=5, M=2: a = (2)(9.8)/(3+5+1) ≈ 2.18 m/s². Treating the pulley as massless (dropping the M/2 term) would instead give the larger, wrong value of 2.45 m/s².\n\n90-SECOND SOLUTION\nRecognize the pulley's rotational inertia simply adds M/2 to the effective total mass in the denominator of the standard Atwood formula — one modified formula, one substitution.\n\nWHAT TO MEMORIZE\nAtwood machine with a massive disk pulley: a = (m₂−m₁)g/(m₁+m₂+M/2); the M/2 comes directly from I=½MR² for a disk."
      },

      {
        "question": "A projectile is launched at 40° above the horizontal with speed 25 m/s from the base of a long incline that rises at 20° above the horizontal. The distance along the incline to where the projectile lands is most nearly",
        "choices": [
          "18 m",
          "38 m",
          "27 m",
          "52 m",
          "64 m"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nUsing the range-on-an-incline formula R = 2v₀²cosθ sin(θ−α)/(g cos²α), with θ=40°, α=20°, v₀=25 m/s: R ≈ 37.8 m. The key idea is that the landing condition is y = x tanα rather than y=0, which shifts both the effective launch angle and the effective gravity component along the incline.\n\n90-SECOND SOLUTION\nPlug directly into the incline-range formula (worth deriving once and keeping): it reduces exactly to the flat-ground range formula when α→0, which is a fast way to check you have the right structure.\n\nWHAT TO MEMORIZE\nRange along an incline of angle α: R = 2v₀²cosθ sin(θ−α)/(g cos²α); reduces to the familiar v₀²sin(2θ)/g when α = 0."
      },

      {
        "question": "A uniform thin rod of length 1.2 m swings as a physical pendulum about a horizontal axis 0.30 m from its center. The period of small oscillations is most nearly",
        "choices": [
          "1.1 s",
          "1.4 s",
          "1.7 s",
          "2.1 s",
          "2.6 s"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFor a physical pendulum, T = 2π√(I/(Mgd)), where I about the pivot is I_cm + Md² (parallel axis theorem), I_cm = ML²/12 for a rod, and d is the pivot's distance from the center of mass. With L=1.2 m, d=0.30 m: I/M = (1.2)²/12 + (0.3)² = 0.12+0.09 = 0.21 m², giving T = 2π√(0.21/(9.8×0.3)) ≈ 1.68 s. Forgetting the parallel-axis term entirely would give a shorter, wrong period.\n\n90-SECOND SOLUTION\nCompute I_cm/M and d² separately, add, then take one square root — the mass itself cancels throughout so never needs a numeric value.\n\nWHAT TO MEMORIZE\nPhysical pendulum: T = 2π√(I_pivot/(Mgd)) with I_pivot from the parallel axis theorem; for a uniform rod, I_cm = ML²/12."
      },

      {
        "question": "A 2.0 kg object and a 6.0 kg object approach each other with a relative speed of 10 m/s along a line, with no external forces acting. The kinetic energy associated with their relative motion (i.e., the energy available for a possible perfectly inelastic collision to convert to other forms) is most nearly",
        "choices": [
          "15 J",
          "38 J",
          "150 J",
          "75 J",
          "300 J"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe kinetic energy of relative motion is KE_rel = ½μv_rel², where μ = m₁m₂/(m₁+m₂) is the reduced mass. Here μ = (2)(6)/8 = 1.5 kg, so KE_rel = ½(1.5)(10)² = 75 J. This is exactly the energy that would be dissipated (as heat, deformation, etc.) in a perfectly inelastic collision between these two objects, since the center-of-mass kinetic energy is unaffected by the collision.\n\n90-SECOND SOLUTION\nCompute the reduced mass, then apply ½μv_rel² directly — this shortcut avoids separately tracking each object's momentum and kinetic energy before and after.\n\nWHAT TO MEMORIZE\nKE_rel = ½μv_rel² with μ = m₁m₂/(m₁+m₂); in a perfectly inelastic collision, exactly this amount of energy is lost, while the center-of-mass kinetic energy is conserved throughout."
      },

      {
        "question": "Two satellites orbit the same planet in circular orbits. Satellite B's orbital radius is 4 times satellite A's. The ratio of satellite B's orbital period to satellite A's period is",
        "choices": [
          "2",
          "4",
          "16",
          "64",
          "8"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nKepler's third law gives T² ∝ r³, so T_B/T_A = (r_B/r_A)^(3/2) = 4^(3/2) = 8. The trap answers come from using the wrong power: squaring the radius ratio directly (16) or forgetting to raise to the 3/2 power at all (4).\n\n90-SECOND SOLUTION\nRaise the radius ratio to the 3/2 power directly: 4^(3/2) = (4^(1/2))³ = 2³ = 8, computable without a calculator.\n\nWHAT TO MEMORIZE\nKepler's third law: T² ∝ r³ for any circular orbit about the same central mass, regardless of the orbiting body's own mass."
      },

      {
        "question": "Two identical masses m are connected to each other by a spring of constant k, and each mass is also connected by an identical spring k to a fixed wall on its outside. Considering only motion along the line connecting the masses, the higher of the two normal mode angular frequencies is",
        "choices": [
          "√(3k/m)",
          "√(k/m)",
          "√(2k/m)",
          "√(4k/m)",
          "2√(k/m)"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nIn the symmetric mode (masses move together, in phase) the coupling spring never stretches, giving ω₁ = √(k/m). In the antisymmetric mode (masses move oppositely) the coupling spring's effect doubles the restoring force on each mass, giving ω₂ = √(3k/m). The higher frequency mode is therefore √(3k/m), not simply double the lower one.\n\n90-SECOND SOLUTION\nRecognize the standard two-mass, three-spring (wall–k–m–k–m–k–wall) result directly: normal frequencies √(k/m) and √(3k/m) — a configuration common enough to memorize outright.\n\nWHAT TO MEMORIZE\nTwo equal masses, three identical springs (wall-mass-mass-wall): symmetric mode ω=√(k/m) (coupling spring inactive), antisymmetric mode ω=√(3k/m) (coupling spring fully engaged, tripling the effective restoring constant)."
      },

      {
        "question": "A parallel-plate capacitor of plate area 0.020 m² and separation 1.0 mm has a slab of dielectric constant κ = 4.0 inserted so that it exactly fills half the plate area (leaving the other half as air gap), with the full plate separation maintained throughout. The capacitance is most nearly",
        "choices": [
          "18 pF",
          "443 pF",
          "89 pF",
          "177 pF",
          "885 pF"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nWith the dielectric filling half the area side-by-side with air (not stacked in series), this is two capacitors in parallel: C = ε₀(A/2)/d × (1+κ) = (8.85×10⁻¹²)(0.010)/(0.001) × 5.0 ≈ 4.4×10⁻¹⁰ F = 443 pF. The trap is treating the two regions as in series (dielectric stacked on top of air) rather than side-by-side, which would use a completely different combination formula.\n\n90-SECOND SOLUTION\nRecognize the geometry: dielectric filling half the *area* (not half the *gap*) means parallel combination, so just add the two half-area capacitances (air half + dielectric half) directly.\n\nWHAT TO MEMORIZE\nSide-by-side (area-split) dielectric insertion combines as capacitors in parallel; a dielectric slab stacked within the gap (thickness-split) instead combines as capacitors in series — the geometry alone decides which combination rule applies."
      },

      {
        "question": "A circular current loop of radius 5.0 cm carries a current of 3.0 A and is placed in a uniform magnetic field of 0.40 T, with its magnetic moment initially perpendicular to the field. The maximum torque on the loop is most nearly",
        "choices": [
          "0.0024 N·m",
          "0.019 N·m",
          "0.0094 N·m",
          "0.038 N·m",
          "0.094 N·m"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe magnetic moment of the loop is μ = IA = I·πr² = (3.0)(π)(0.05)² ≈ 0.0236 A·m². Torque is τ = μB sinφ, maximized when the moment is perpendicular to B (sinφ=1, the stated initial condition): τ_max = μB = (0.0236)(0.40) ≈ 0.0094 N·m. Forgetting to square the radius when computing area is the most common arithmetic slip here.\n\n90-SECOND SOLUTION\nCompute μ = Iπr² first (one number worth having as an intermediate checkpoint), then multiply by B directly since sinφ=1 is given by the setup.\n\nWHAT TO MEMORIZE\nτ = μ × B, with μ = IA for a current loop and maximum torque occurring when the moment is perpendicular to the field (τ = μB in that orientation)."
      },

      {
        "question": "A 2.0 μF capacitor is charged and then discharged through a 1000 Ω resistor. The time required for the charge on the capacitor to fall to half its initial value is most nearly",
        "choices": [
          "0.7 ms",
          "2.0 ms",
          "2.8 ms",
          "1.4 ms",
          "4.0 ms"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe RC discharge time constant is τ = RC = (1000)(2.0×10⁻⁶) = 2.0×10⁻³ s. Since Q(t) = Q₀e^(−t/τ), the half-life is t_½ = τ ln2 ≈ (2.0 ms)(0.693) ≈ 1.4 ms. Using τ itself as the half-time (skipping the ln2 factor) is the standard trap, giving 2.0 ms instead.\n\n90-SECOND SOLUTION\nCompute RC, then multiply by the memorized constant ln2 ≈ 0.693 — same structure as radioactive half-life, since both follow exponential decay.\n\nWHAT TO MEMORIZE\nExponential decay half-life is always (time constant) × ln2 ≈ 0.693 × τ, whether the decay is RC discharge, radioactivity, or any other first-order process."
      },

      {
        "question": "Point charge +4.0 μC is fixed at the origin and point charge +1.0 μC is fixed at x = 30 cm on the same axis. Besides the region between the charges, there is one other point on the x-axis where the net electric field is zero. Its distance beyond the +1.0 μC charge (i.e., at x > 30 cm) is most nearly",
        "choices": [
          "10 cm",
          "20 cm",
          "45 cm",
          "60 cm",
          "30 cm"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nBetween two like charges, the field never cancels (both point the same way in that region), so the null point lies outside, beyond the smaller charge. Setting kq₁/(L+x)² = kq₂/x² with q₁=4μC, q₂=1μC, L=30 cm and solving √q₁·x = √q₂·(L+x) gives x = L·√q₂/(√q₁−√q₂) = 30(1)/(2−1) = 30 cm beyond the 1.0 μC charge.\n\n90-SECOND SOLUTION\nSince q₁ = 4q₂ exactly, √q₁ = 2√q₂, which makes the algebra collapse to x = L — a clean special case worth recognizing when the charge ratio is a perfect square.\n\nWHAT TO MEMORIZE\nFor two like charges, the field-null point on the axis always lies outside the pair, closer to the smaller charge, at the location satisfying √q₁/(L+x) = √q₂/x — never between them."
      },

      {
        "question": "A solenoid has 500 turns wound uniformly over a length of 0.25 m, with cross-sectional area 1.0 × 10⁻³ m². Its self-inductance is most nearly",
        "choices": [
          "1.3 mH",
          "12 μH",
          "125 μH",
          "630 μH",
          "6.3 mH"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nSolenoid inductance is L = μ₀N²A/ℓ = (4π×10⁻⁷)(500)²(1.0×10⁻³)/(0.25) ≈ 1.26×10⁻³ H ≈ 1.3 mH. The N² dependence (not N) is the detail most often dropped, which would understate the answer by a factor of 500.\n\n90-SECOND SOLUTION\nPlug directly into L = μ₀N²A/ℓ; keep track that N is squared, since doubling the turns quadruples the inductance, not doubles it.\n\nWHAT TO MEMORIZE\nSolenoid self-inductance L = μ₀N²A/ℓ — quadratic in turn count, linear in area, inverse in length."
      },

      {
        "question": "An electron is confined to a one-dimensional infinite square well of width 0.10 nm (roughly atomic scale). The energy of the photon emitted in a transition from the n=2 to the n=1 level is most nearly",
        "choices": [
          "4 eV",
          "113 eV",
          "38 eV",
          "76 eV",
          "150 eV"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nInfinite-well energies are E_n = n²h²/(8mL²). With L=0.10 nm: E₁ ≈ 37.7 eV and E₂ ≈ 150.6 eV, so the emitted photon carries ΔE = E₂−E₁ ≈ 113 eV. This large value (compared to atomic optical transitions of a few eV) reflects how tightly confined the electron is — a box this small pushes energies well into the extreme UV/soft X-ray range.\n\n90-SECOND SOLUTION\nSince E_n ∝ n², the gap between n=1 and n=2 is simply 3×E₁ (because 4−1=3), so compute E₁ once and multiply by 3.\n\nWHAT TO MEMORIZE\nInfinite square well: E_n = n²h²/(8mL²); consecutive-level gaps scale as (n+1)²−n² = 2n+1 times E₁, so E₂−E₁ = 3E₁ specifically."
      },

      {
        "question": "In Compton scattering, a photon scatters off a free electron at rest through an angle of exactly 90°. The resulting increase in the photon's wavelength is most nearly",
        "choices": [
          "1.2 pm",
          "4.9 pm",
          "2.4 pm",
          "12 pm",
          "24 pm"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe Compton shift formula is Δλ = (h/m_ec)(1−cosθ). At θ=90°, cosθ=0, so Δλ reduces to exactly the Compton wavelength h/m_ec ≈ 2.43×10⁻¹² m = 2.4 pm. This special case (90°) is worth recognizing on sight, since the (1−cosθ) factor becomes exactly 1.\n\n90-SECOND SOLUTION\nAt 90° specifically, no arithmetic is needed beyond recalling the Compton wavelength itself, h/m_ec ≈ 2.4 pm — memorize this one number.\n\nWHAT TO MEMORIZE\nCompton wavelength h/m_ec ≈ 2.43 pm; Δλ = (h/m_ec)(1−cosθ) reduces to this value exactly at 90°, to twice this value at 180° (backscatter), and to zero at 0° (forward, no scattering)."
      },

      {
        "question": "According to the Bohr model, the radius of the n=3 orbit in a hydrogen atom is most nearly",
        "choices": [
          "0.053 nm",
          "0.16 nm",
          "0.32 nm",
          "0.48 nm",
          "0.64 nm"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nBohr radii scale as r_n = n²a₀, where a₀ ≈ 0.0529 nm is the Bohr radius. For n=3: r₃ = 9 × 0.0529 ≈ 0.476 nm, closest to 0.48 nm. The n³ trap answer would come from confusing the radius scaling with the (incorrect) assumption that it matches the n³ dependence seen in some other Bohr-model quantities (like the classical orbital period, which does go as n³).\n\n90-SECOND SOLUTION\nSquare n and multiply by the memorized Bohr radius — one squaring, one multiplication.\n\nWHAT TO MEMORIZE\nBohr model radius: r_n = n²a₀ with a₀ ≈ 0.053 nm; radius grows as n², while orbital energy falls as 1/n² and (classical) orbital period grows as n³ — three different scalings worth keeping straight."
      },

      {
        "question": "An electron is confined to a region the size of an atomic nucleus (Δx ≈ 1.0 × 10⁻¹⁴ m). Using the Heisenberg uncertainty principle to estimate the minimum kinetic energy such confinement would require, the result is most nearly",
        "choices": [
          "1 eV",
          "1 keV",
          "1 MeV",
          "10 GeV",
          "100 MeV"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe minimum momentum uncertainty is Δp ≈ ħ/(2Δx), giving Δp ≈ 5.3×10⁻²¹ kg·m/s, and treating this as the characteristic momentum, KE ≈ (Δp)²/2m_e ≈ 1.5×10⁻¹¹ J ≈ 95 MeV. This huge value (compared to the few-MeV binding energies actually observed in nuclei) is the classic argument for why electrons cannot be confined inside a nucleus — nuclear beta decay must therefore create the electron at the moment of emission rather than releasing a pre-existing one.\n\n90-SECOND SOLUTION\nRecognize this exact argument as a standard qualitative-reasoning setup with a known punchline (~100 MeV, far exceeding nuclear binding energies), even if the intermediate arithmetic is done quickly rather than precisely.\n\nWHAT TO MEMORIZE\nConfining an electron (small mass) to nuclear dimensions via Δx·Δp ≥ ħ/2 forces a kinetic energy of order 100 MeV — this is the standard argument that electrons are not pre-existing constituents of the nucleus, unlike protons and neutrons, for which the same calculation gives a far smaller, physically reasonable energy."
      },

      {
        "question": "In the hydrogen atom, a transition from the n=4 level to the n=2 level emits a photon. Its wavelength is most nearly",
        "choices": [
          "486 nm",
          "97 nm",
          "122 nm",
          "410 nm",
          "656 nm"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nHydrogen energy levels are E_n = −13.6 eV/n². The transition energy is E₂−E₄ = −13.6/4 − (−13.6/16) = −3.40 − (−0.85) = 2.55 eV. The wavelength is λ = hc/E = 1240 eV·nm/2.55 eV ≈ 486 nm — this is the well-known Balmer-series Hβ line, in the blue-green part of the visible spectrum.\n\n90-SECOND SOLUTION\nRecognize n=4→2 as a Balmer series line; if the specific Balmer wavelengths (656, 486, 434, 410 nm for Hα, Hβ, Hγ, Hδ) are memorized, n=4→2 is immediately identified as Hβ without recomputing.\n\nWHAT TO MEMORIZE\nHydrogen energy levels E_n = −13.6 eV/n²; the Balmer series (transitions down to n=2) falls in the visible range, with Hα (3→2, 656 nm), Hβ (4→2, 486 nm), and Hγ (5→2, 434 nm) worth recognizing by name."
      },

      {
        "question": "An electron with orbital angular momentum quantum number l = 2 has its orbital and spin angular momenta coupled. The possible values of the total angular momentum quantum number j are",
        "choices": [
          "1 and 2",
          "3/2 and 5/2",
          "2 and 3",
          "1/2 and 3/2",
          "5/2 only"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nFor a single electron, spin s = 1/2 always, and coupling with orbital l gives j = l + 1/2 or j = l − 1/2 (when l > 0). With l = 2: j = 2.5 or j = 1.5, i.e., 5/2 and 3/2. Choice A (integers 1 and 2) forgets that j must be half-integer whenever an odd number of spin-1/2 particles is involved.\n\n90-SECOND SOLUTION\nAdd and subtract 1/2 from l directly: l ± 1/2 = 2 ± 1/2 = 5/2, 3/2 — one mental calculation, no vector-coupling diagram needed for a single electron.\n\nWHAT TO MEMORIZE\nSingle-electron spin-orbit coupling: j = l ± 1/2 (only these two values, except j = 1/2 alone when l = 0); j is always half-integer for a lone electron."
      },

      {
        "question": "An electron in the ground state of an infinite square well of width L experiences a small additional potential V₀ that is nonzero only in the middle third of the well (L/3 < x < 2L/3) and zero elsewhere. To first order in perturbation theory, the shift in the ground-state energy is most nearly",
        "choices": [
          "0.33 V₀",
          "0.39 V₀",
          "0.61 V₀",
          "0.50 V₀",
          "0.67 V₀"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFirst-order perturbation theory gives ΔE = ⟨ψ₁|V|ψ₁⟩ = V₀ ∫_(L/3)^(2L/3) |ψ₁(x)|² dx, with ψ₁(x) = √(2/L) sin(πx/L). Unlike a perturbation over exactly half the well, this integral has no shortcut from symmetry alone — evaluating it numerically gives about 0.61, i.e., ΔE ≈ 0.61 V₀. The ground state's probability density is concentrated toward the center of the well, so the middle third captures noticeably more than the naive 1/3 an unweighted (uniform) distribution would give.\n\n90-SECOND SOLUTION\nRecognize that the ground state's probability peaks at the well's center, so any centered perturbation region captures a probability fraction larger than its geometric fraction of the well — here L/3 of the width but well over a third (about 0.61) of the probability — which alone rules out the naive 0.33 answer.\n\nWHAT TO MEMORIZE\nFirst-order energy shift ΔE⁽¹⁾ = ⟨ψ|V|ψ⟩; only a perturbation covering exactly half the well (split symmetrically about the center) gives the clean shortcut V₀/2 by symmetry — any other sub-region requires actually evaluating ∫|ψ|²dx over that region, weighted by where the ground state's probability density is concentrated."
      },

      {
        "question": "Two moles of an ideal gas at 300 K expand isothermally and reversibly from a volume of 0.010 m³ to 0.030 m³. The work done by the gas is most nearly",
        "choices": [
          "1400 J",
          "2700 J",
          "3600 J",
          "5500 J",
          "8300 J"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nFor an isothermal reversible expansion, W = nRT ln(V₂/V₁) = (2)(8.314)(300) ln(3.0) ≈ (4988)(1.099) ≈ 5480 J. Using log base 10 instead of the natural log is the most common slip, and would understate the answer significantly.\n\n90-SECOND SOLUTION\nCompute nRT once, multiply by ln(3) ≈ 1.10 (a volume ratio of 3 is common enough on this exam to have ln(3) ≈ 1.1 memorized).\n\nWHAT TO MEMORIZE\nIsothermal reversible work: W = nRT ln(V₂/V₁); requires the natural logarithm, not log₁₀."
      },

      {
        "question": "A heat engine operates between a hot reservoir at 600 K and a cold reservoir at 300 K. Its maximum possible (Carnot) efficiency is",
        "choices": [
          "25%",
          "33%",
          "67%",
          "75%",
          "50%"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nCarnot efficiency is η = 1 − T_c/T_h = 1 − 300/600 = 1 − 0.5 = 0.50, or 50%. Using Celsius temperatures instead of Kelvin (a classic trap not present here since both are already in Kelvin) would give a very different, wrong answer — always double-check the temperature scale.\n\n90-SECOND SOLUTION\nThe ratio 300/600 = 1/2 simplifies instantly; 1 − 1/2 = 1/2 = 50%, no calculator needed.\n\nWHAT TO MEMORIZE\nCarnot efficiency η = 1 − T_c/T_h, with both temperatures in kelvin — this is the fundamental upper bound no real engine operating between those two reservoirs can exceed."
      },

      {
        "question": "Oxygen gas (molar mass 32 g/mol) is at a temperature of 300 K. The root-mean-square speed of an oxygen molecule is most nearly",
        "choices": [
          "480 m/s",
          "48 m/s",
          "150 m/s",
          "280 m/s",
          "680 m/s"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe rms speed is v_rms = √(3RT/M), with M in kg/mol. Here M = 0.032 kg/mol, so v_rms = √(3×8.314×300/0.032) ≈ 484 m/s. This is comparable to (but somewhat faster than) the speed of sound in air, which is a useful sanity check on the order of magnitude.\n\n90-SECOND SOLUTION\nPlug directly into v_rms = √(3RT/M); recall that room-temperature diatomic gas molecules move at several hundred m/s as an order-of-magnitude anchor.\n\nWHAT TO MEMORIZE\nv_rms = √(3RT/M) with M as the molar mass in kg/mol (not g/mol) — a very common unit-conversion trap."
      },

      {
        "question": "Monochromatic light of wavelength 500 nm passes through a single slit of width 0.020 mm. The angle to the first diffraction minimum is most nearly",
        "choices": [
          "0.7°",
          "1.4°",
          "2.9°",
          "5.7°",
          "11°"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nSingle-slit minima occur at a sinθ = mλ. For the first minimum (m=1): sinθ = λ/a = (500×10⁻⁹)/(0.020×10⁻³) = 0.025, so θ ≈ 1.43°. The small-angle approximation is well justified here since sinθ is small, so sinθ ≈ θ (in radians) would give essentially the same answer.\n\n90-SECOND SOLUTION\nCompute λ/a directly, then convert the small angle from radians to degrees (multiply by 180/π ≈ 57.3) — or just recognize small angles in radians are already close to their degree-scaled sine value for a rough check.\n\nWHAT TO MEMORIZE\nSingle-slit diffraction minima: a sinθ = mλ (opposite convention from double-slit maxima, which use d sinθ = mλ) — a frequent source of confusion between single- and double-slit problems."
      },

      {
        "question": "A thin film of a transparent coating with index of refraction 1.4 sits on glass of higher index (about 1.5), with air (index 1.0) above the film. For light of wavelength 600 nm (in vacuum) to be strongly reflected due to constructive interference, the minimum nonzero film thickness is most nearly",
        "choices": [
          "54 nm",
          "107 nm",
          "214 nm",
          "300 nm",
          "428 nm"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe film's index (1.4) lies between air's (1.0) and the glass's (1.5), so both reflections are low-to-high and both pick up a π phase shift; the two shifts cancel each other out. The interference is then governed purely by the path-length phase from the round trip through the film, 2nt, and constructive reflection requires 2nt = mλ. The minimum nonzero thickness (m=1) is t_min = λ/(2n) = 600/(2×1.4) ≈ 214 nm. The 107 nm distractor (λ/4n) is the condition that applies instead when the film index is higher (or lower) than both surrounding media, so only one interface flips.\n\n90-SECOND SOLUTION\nCheck whether the film's index sits between its two neighbors' indices: here it does (1.0 < 1.4 < 1.5), so both reflections flip, the shifts cancel, and the simpler t = λ/(2n) condition applies directly.\n\nWHAT TO MEMORIZE\nCompare the film's index to both neighbors. If it lies between them (as here), both interfaces flip, the shifts cancel, and constructive reflection occurs at t = λ/(2n), 2λ/(2n).... If it does not lie between them (film index higher, or lower, than both surroundings), only one interface flips, and constructive reflection instead occurs at the smaller thicknesses t = λ/(4n), 3λ/(4n)...."
      },

      {
        "question": "A radioactive sample has a half-life of 5.0 years. The fraction of the original sample remaining after 15 years is most nearly",
        "choices": [
          "1/16",
          "1/12",
          "1/4",
          "1/8",
          "1/3"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\n15 years is exactly 3 half-lives (15/5 = 3), so the remaining fraction is (1/2)³ = 1/8. The 1/16 distractor comes from treating 15 years as 4 half-lives by an off-by-one error.\n\n90-SECOND SOLUTION\nDivide the elapsed time by the half-life to get an integer number of half-lives (3 here), then just halve repeatedly: 1 → 1/2 → 1/4 → 1/8.\n\nWHAT TO MEMORIZE\nRemaining fraction after n half-lives is (1/2)ⁿ; always convert elapsed time to a number of half-lives first (t/T_½) before applying the exponential decay law."
      },

      {
        "question": "A beam of particles passes through a thin foil containing 1.0 × 10²⁰ scattering centers per cm³, with an interaction cross section of 1.0 × 10⁻²⁴ cm² per center. The mean free path for an interaction is most nearly",
        "choices": [
          "0.0001 cm",
          "0.01 cm",
          "1 cm",
          "10000 cm",
          "100 cm"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe mean free path is λ = 1/(nσ), where n is the number density and σ the cross section. Here λ = 1/[(1.0×10²⁰)(1.0×10⁻²⁴)] = 1/(1.0×10⁻⁴) = 10⁴ cm = 10000 cm. Multiplying n and σ instead of taking their reciprocal product is the most common structural error here.\n\n90-SECOND SOLUTION\nMultiply the exponents (10²⁰ × 10⁻²⁴ = 10⁻⁴), then invert — two quick steps, no need to carry the full numbers through.\n\nWHAT TO MEMORIZE\nMean free path λ = 1/(nσ); this same relation underlies mean free path calculations across nuclear, particle, and even classical kinetic-theory contexts."
      },

      {
        "question": "In a nuclear reaction, the binding energy per nucleon generally increases from very light nuclei up to iron (A≈56), then slowly decreases for heavier nuclei. This trend explains why",
        "choices": [
          "fusion of light nuclei and fission of heavy nuclei can both release energy",
          "only fusion reactions can release nuclear energy",
          "only fission reactions can release nuclear energy",
          "iron nuclei are radioactive",
          "the strong nuclear force does not act on nucleons near iron"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nBecause binding energy per nucleon peaks near iron, moving toward iron from either direction increases the average binding energy per nucleon, releasing energy: light nuclei fusing together (moving up the curve) release energy, and heavy nuclei splitting apart (moving down the curve toward iron) also release energy. Iron itself is near the peak and is the most stable nucleus in this sense, not radioactive.\n\n90-SECOND SOLUTION\nVisualize the binding-energy-per-nucleon curve as a peak at iron: any process that moves nuclei closer to that peak releases energy, whether from below (fusion) or above (fission) — no calculation needed.\n\nWHAT TO MEMORIZE\nThe binding-energy-per-nucleon curve peaks near iron/nickel (A≈56–62); this single shape explains why both fusion (light elements) and fission (heavy elements) are exothermic, while fusing elements heavier than iron or fissioning elements lighter than iron would require energy input rather than releasing it."
      },

      {
        "question": "A muon is created in the upper atmosphere and travels toward the ground at speed v = 0.80c. In the muon's own rest frame, its proper lifetime is 10 μs before it decays. As measured by an observer on the ground, the muon's lifetime is most nearly",
        "choices": [
          "6.0 μs",
          "17 μs",
          "8.0 μs",
          "10 μs",
          "13 μs"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nTime dilation gives the ground-frame lifetime as t = γt₀, with γ = 1/√(1−v²/c²) = 1/√(1−0.64) = 1/√0.36 ≈ 1.667. So t = (1.667)(10 μs) ≈ 16.7 μs, closest to 17 μs. The 6.0 μs distractor comes from applying the dilation factor in the wrong direction (dividing instead of multiplying), which would incorrectly shorten rather than lengthen the observed lifetime.\n\n90-SECOND SOLUTION\nRecall γ for v=0.8c as a standard reference value (γ=5/3 ≈ 1.667, from the 3-4-5 triangle: √(1−0.64)=0.6=3/5, so γ=5/3) and multiply directly.\n\nWHAT TO MEMORIZE\nv = 0.6c and v = 0.8c give the classic 'nice' Lorentz factors γ = 5/4 and γ = 5/3 respectively (both from 3-4-5 right triangles) — worth memorizing outright since they recur constantly on this exam. The moving object's own clock always runs slow as seen by other frames: t_observed = γt_proper > t_proper."
      },

      {
        "question": "A particle of rest mass m moves at speed 0.60c. Its relativistic momentum, in units of mc, is most nearly",
        "choices": [
          "0.48",
          "0.60",
          "0.75",
          "1.00",
          "1.25"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nRelativistic momentum is p = γmv, with γ = 1/√(1−0.36) = 1/0.8 = 1.25 at v=0.6c. So p/mc = γ(v/c) = (1.25)(0.6) = 0.75. Using the non-relativistic p=mv (giving simply 0.60) ignores the γ factor and understates the true momentum.\n\n90-SECOND SOLUTION\nUse the memorized γ=5/4 for v=0.6c, multiply by 0.6: (5/4)(0.6) = 0.75 — no square roots needed if the standard γ value is already known.\n\nWHAT TO MEMORIZE\nRelativistic momentum p = γmv = γ(v/c)·mc; always includes the γ factor, unlike the non-relativistic p=mv which is only a low-speed approximation."
      },

      {
        "question": "A physical quantity is computed as R = AB², where A is measured with a 2.0% relative uncertainty and B is measured with a 3.0% relative uncertainty, and A and B are measured independently. The relative uncertainty in R is most nearly",
        "choices": [
          "5.0%",
          "7.2%",
          "8.0%",
          "6.3%",
          "9.0%"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nFor independent, uncorrelated errors in a product/power expression, relative uncertainties add in quadrature after accounting for the exponent: (δR/R)² = (δA/A)² + (2δB/B)², since B is squared. Here: √(0.02² + (2×0.03)²) = √(0.0004+0.0036) = √0.0040 ≈ 0.0632, or 6.3%. Simply adding the relative errors linearly (2%+6%=8%) overstates the true combined uncertainty for independent errors.\n\n90-SECOND SOLUTION\nDouble B's relative error (because of the square), then add both contributions in quadrature (Pythagorean sum), not linearly.\n\nWHAT TO MEMORIZE\nFor R = A^m B^n with independent errors, (δR/R)² = (m·δA/A)² + (n·δB/B)² — errors from a power law scale by the exponent before being combined in quadrature."
      },

      {
        "question": "In a counting experiment, 900 radioactive decay events are recorded in a fixed time interval. Assuming Poisson counting statistics, the relative (fractional) uncertainty in this count is most nearly",
        "choices": [
          "1.1%",
          "9.0%",
          "11%",
          "33%",
          "3.3%"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nFor Poisson statistics, the standard deviation of a count N is √N, so here σ = √900 = 30. The relative uncertainty is σ/N = 30/900 ≈ 0.033, or 3.3%. This √N scaling is why counting experiments need many more total counts to shrink the *relative* error, even though the absolute error grows with more counts.\n\n90-SECOND SOLUTION\nTake the square root of the count (30), divide by the count itself (900) — recognizing 900 is a perfect square makes this especially fast.\n\nWHAT TO MEMORIZE\nPoisson counting statistics: absolute uncertainty σ = √N, relative uncertainty σ/N = 1/√N — to halve the relative uncertainty, four times as many counts are needed, not twice."
      }

    ]
  },

  {
    "name": "General Practice Set 2",
    "added": "2026-08-22",
    "category": "practice",
    "cards": [

      {
        "question": "A 4.0 kg block sits on a frictionless incline at 30° above horizontal, connected by a string over a pulley at the top to a 6.0 kg mass hanging vertically off the incline. The tension in the string is most nearly",
        "choices": [
          "35 N",
          "20 N",
          "26 N",
          "44 N",
          "59 N"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nWriting Newton's second law for each mass with common acceleration a: for the hanging mass, m₂g − T = m₂a; for the block on the incline, T − m₁g sinθ = m₁a. Adding: a = (m₂g − m₁g sinθ)/(m₁+m₂) = (58.8−19.6)/10 ≈ 3.92 m/s². Substituting back: T = m₁(g sinθ + a) = 4.0(4.9+3.92) ≈ 35.3 N. Forgetting the sinθ factor for the incline block (treating it as if on a vertical string) is the most common error.\n\n90-SECOND SOLUTION\nSolve the combined-system acceleration first (net driving force over total mass), then substitute into either single-body equation — using the incline-block equation to solve for T is usually the cleaner of the two.\n\nWHAT TO MEMORIZE\nFor a mass on a frictionless incline connected over a pulley to a hanging mass: a = (m₂g − m₁g sinθ)/(m₁+m₂); always include sinθ for the component of gravity along the incline, never the full g."
      },

      {
        "question": "A ball is thrown straight up and reaches a maximum height of 20 m above its launch point. Neglecting air resistance, the total time the ball spends in the air before returning to its starting height is most nearly",
        "choices": [
          "1.4 s",
          "4.0 s",
          "2.0 s",
          "2.9 s",
          "5.7 s"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe time to rise to maximum height satisfies h = ½gt_up², so t_up = √(2h/g) = √(40/9.8) ≈ 2.02 s. By symmetry, the fall takes the same time, so the total flight time is 2t_up ≈ 4.0 s. Reporting only t_up (2.0 s) instead of the full round trip is the most common slip.\n\n90-SECOND SOLUTION\nCompute t_up = √(2h/g), then simply double it — the up and down trips are symmetric in time for projectile motion without air resistance.\n\nWHAT TO MEMORIZE\nTotal flight time for straight-up-and-down motion is 2√(2h/g), exactly twice the time to reach the peak, by time-reversal symmetry of the trajectory."
      },

      {
        "question": "A uniform solid disk (I = ½MR²) is released from rest and rolls without slipping down an incline, descending a vertical height of 2.0 m. Its speed at the bottom is most nearly",
        "choices": [
          "3.6 m/s",
          "4.4 m/s",
          "5.1 m/s",
          "6.3 m/s",
          "6.9 m/s"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nEnergy conservation for rolling without slipping gives Mgh = ½Mv² + ½Iω² = ½Mv² + ½(½MR²)(v/R)² = ¾Mv². Solving: v = √(4gh/3) = √(4×9.8×2.0/3) ≈ 5.11 m/s. This is slower than the frictionless-sliding result √(2gh) ≈ 6.26 m/s, since rolling diverts some of the potential energy into rotational kinetic energy.\n\n90-SECOND SOLUTION\nMemorize the rolling-disk speed formula v = √(4gh/3) directly (equivalently, v = √(2gh/(1+I/MR²)) with I/MR²=½ for a disk), rather than rederiving the energy balance each time.\n\nWHAT TO MEMORIZE\nRolling without slipping down a height h: v = √(2gh/(1 + I/MR²)); a solid disk (I/MR²=½) gives v=√(4gh/3), a hoop (I/MR²=1) gives the smaller v=√(gh), and frictionless sliding (no rotation) gives the largest, v=√(2gh)."
      },

      {
        "question": "A figure skater spinning with moment of inertia 4.0 kg·m² at 2.0 rad/s pulls her arms in, reducing her moment of inertia to 1.0 kg·m². Assuming no external torques, her new angular velocity is most nearly",
        "choices": [
          "0.5 rad/s",
          "2.0 rad/s",
          "4.0 rad/s",
          "8.0 rad/s",
          "16 rad/s"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nWith no external torque, angular momentum L = Iω is conserved: I₁ω₁ = I₂ω₂, so ω₂ = I₁ω₁/I₂ = (4.0)(2.0)/1.0 = 8.0 rad/s. The skater's rotation rate quadruples as her moment of inertia drops to a quarter of its original value — angular momentum conservation, not energy conservation, governs this (kinetic energy actually increases, supplied by the muscular work of pulling the arms in).\n\n90-SECOND SOLUTION\nApply I₁ω₁ = I₂ω₂ directly — a single ratio, no need to consider energy at all.\n\nWHAT TO MEMORIZE\nAngular momentum L = Iω is conserved with no external torque; rotational kinetic energy is NOT automatically conserved in this scenario, since internal (muscular) work changes the moment of inertia."
      },

      {
        "question": "A planet has mass 6.0 × 10²⁴ kg and radius 6.4 × 10⁶ m. The escape velocity from its surface is most nearly",
        "choices": [
          "3.5 km/s",
          "7.9 km/s",
          "16 km/s",
          "22 km/s",
          "11 km/s"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEscape velocity is v_esc = √(2GM/R) = √(2×6.674×10⁻¹¹×6.0×10²⁴/6.4×10⁶) ≈ 11,200 m/s ≈ 11 km/s — recognizably Earth's escape velocity, since these are Earth's actual mass and radius. The 7.9 km/s distractor is Earth's low-orbit circular speed, a related but different quantity (escape velocity is always √2 times the circular orbital speed at the same radius).\n\n90-SECOND SOLUTION\nPlug directly into v_esc = √(2GM/R); recognizing these as Earth's parameters lets you check the answer against the well-known ~11.2 km/s value.\n\nWHAT TO MEMORIZE\nv_esc = √(2GM/R); Earth's escape velocity ≈ 11.2 km/s is worth memorizing as a reference point, and v_esc = √2 × (circular orbital speed) at the same radius."
      },

      {
        "question": "A simple pendulum of length L hangs from a support that is itself accelerating horizontally with constant acceleration a. Using a Lagrangian approach with generalized coordinate θ (the pendulum's angle from vertical), the equation of motion in the small-angle limit is",
        "choices": [
          "θ̈ + (g/L)θ = a/L",
          "θ̈ + (g/L)θ = 0",
          "θ̈ − (g/L)θ = 0",
          "θ̈ + (g/L)θ = −a/L",
          "θ̈ + (a/L)θ = g/L"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nIn the accelerating (non-inertial) frame of the support, the pendulum bob feels an effective gravitational field that is the vector sum of real gravity g (downward) and a fictitious force −a (opposing the support's acceleration). Writing the Lagrangian with this effective force and expanding to small θ gives θ̈ + (g/L)θ = a/L — the acceleration acts as a constant forcing term, shifting the equilibrium angle away from vertical rather than changing the oscillation frequency.\n\n90-SECOND SOLUTION\nRecognize that a uniformly accelerating support is equivalent (by the equivalence principle) to an extra constant 'tilt' in the effective gravity — this shifts the equilibrium point (nonzero right-hand side) without changing the natural frequency √(g/L) that multiplies θ on the left.\n\nWHAT TO MEMORIZE\nAn accelerating pendulum support adds a constant forcing term (proportional to the support's acceleration) to the standard SHM equation, shifting the equilibrium angle to arctan(a/g) but leaving the oscillation frequency √(g/L) unchanged."
      },

      {
        "question": "A charged particle moving through a region with a uniform electric field of 2000 V/m and a perpendicular uniform magnetic field of 0.050 T passes straight through undeflected (a velocity selector). The particle's speed must be most nearly",
        "choices": [
          "100 m/s",
          "4 × 10⁴ m/s",
          "1000 m/s",
          "10⁵ m/s",
          "4 × 10⁶ m/s"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nFor the electric and magnetic forces to exactly cancel, qE = qvB, so v = E/B = 2000/0.050 = 40,000 m/s = 4×10⁴ m/s. The charge itself cancels out of the condition entirely, which is exactly why velocity selectors work for any charge (positive or negative, any magnitude).\n\n90-SECOND SOLUTION\nOne division, E/B — no charge or mass values are ever needed for a velocity selector.\n\nWHAT TO MEMORIZE\nVelocity selector condition: v = E/B, independent of the particle's charge or mass — only particles at exactly this speed pass through undeflected."
      },

      {
        "question": "Two long, straight, parallel wires 2.0 cm apart carry currents of 5.0 A and 8.0 A in the same direction. The force per unit length between them is most nearly",
        "choices": [
          "4 × 10⁻⁶ N/m",
          "4 × 10⁻² N/m",
          "4 × 10⁻⁴ N/m",
          "4 N/m",
          "40 N/m"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe force per length between parallel current-carrying wires is F/L = μ₀I₁I₂/(2πd) = (4π×10⁻⁷)(5.0)(8.0)/(2π×0.020) = 4.0×10⁻⁴ N/m. Since the currents flow in the same direction, this force is attractive. Missing the factor of 2π in the denominator (or leaving it in the numerator from μ₀=4π×10⁻⁷) is the most common bookkeeping slip.\n\n90-SECOND SOLUTION\nThe 4π in μ₀ and the 2π in the denominator partially cancel, simplifying to F/L = 2×10⁻⁷ I₁I₂/d — a streamlined version worth memorizing to skip a step.\n\nWHAT TO MEMORIZE\nF/L = μ₀I₁I₂/(2πd) = 2×10⁻⁷I₁I₂/d (SI units); same-direction currents attract, opposite-direction currents repel — this relation is also literally how the ampere used to be defined."
      },

      {
        "question": "A 5.0 μF capacitor is charged to a potential difference of 100 V. The energy stored in the capacitor is most nearly",
        "choices": [
          "0.0005 J",
          "0.005 J",
          "0.25 J",
          "0.025 J",
          "2.5 J"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nEnergy stored in a capacitor is U = ½CV² = ½(5.0×10⁻⁶)(100)² = ½(5.0×10⁻⁶)(10,000) = 0.025 J. Using U=CV (missing both the ½ and the square) is the most common structural error.\n\n90-SECOND SOLUTION\nSquare the voltage first (100² = 10⁴), multiply by C, then halve — order of operations chosen to keep the numbers manageable without a calculator.\n\nWHAT TO MEMORIZE\nCapacitor energy: U = ½CV² = ½QV = Q²/(2C) — three equivalent forms; pick whichever variables are given directly to avoid an extra substitution step."
      },

      {
        "question": "An infinite line of charge has linear charge density 3.0 μC/m. The magnitude of the electric field at a perpendicular distance of 10 cm from the line is most nearly",
        "choices": [
          "2.7 × 10³ N/C",
          "2.7 × 10⁴ N/C",
          "1.1 × 10⁶ N/C",
          "2.7 × 10⁷ N/C",
          "5.4 × 10⁵ N/C"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nGauss's law for an infinite line charge gives E = λ/(2πε₀r) = (3.0×10⁻⁶)/(2π×8.85×10⁻¹²×0.10) ≈ 5.4×10⁵ N/C. This 1/r falloff (rather than the point-charge 1/r² falloff) is the defining signature of the infinite-line geometry, and comes directly from choosing a cylindrical Gaussian surface.\n\n90-SECOND SOLUTION\nPlug directly into E = λ/(2πε₀r); remembering 1/(2πε₀) ≈ 1.8×10¹⁰ N·m/C as a single combined constant saves a step.\n\nWHAT TO MEMORIZE\nInfinite line charge: E = λ/(2πε₀r), falling off as 1/r — contrast with a point charge's 1/r² and an infinite plane's r-independence; all three follow directly from the symmetry of the chosen Gaussian surface."
      },

      {
        "question": "A series RLC circuit has R = 100 Ω, L = 0.50 H, and C = 10 μF, driven at a frequency of 60 Hz. The magnitude of the circuit's total impedance is most nearly",
        "choices": [
          "126 Ω",
          "100 Ω",
          "188 Ω",
          "265 Ω",
          "320 Ω"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nAt ω = 2π(60) ≈ 377 rad/s: X_L = ωL ≈ 188 Ω and X_C = 1/(ωC) ≈ 265 Ω. The total impedance is |Z| = √(R² + (X_L−X_C)²) = √(100² + (188−265)²) = √(10000+5929) ≈ 126 Ω. Adding X_L and X_C instead of subtracting (they act in opposite phase) is the most common structural error.\n\n90-SECOND SOLUTION\nCompute X_L and X_C separately, subtract (not add), square, add to R², square root — the reactances partially cancel here since they're comparable in size.\n\nWHAT TO MEMORIZE\nSeries RLC impedance: |Z| = √(R² + (X_L − X_C)²), with X_L = ωL and X_C = 1/(ωC); the circuit is at resonance (purely resistive, minimum |Z|) exactly when X_L = X_C."
      },

      {
        "question": "Light of wavelength 400 nm strikes a metal surface with work function 2.0 eV. The maximum kinetic energy of the ejected photoelectrons is most nearly",
        "choices": [
          "0.6 eV",
          "1.1 eV",
          "1.6 eV",
          "2.1 eV",
          "3.1 eV"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nPhoton energy is E = hc/λ = 1240 eV·nm/400 nm = 3.1 eV. The maximum photoelectron kinetic energy is then KE_max = E − W = 3.1 − 2.0 = 1.1 eV, by Einstein's photoelectric equation. Reporting the photon energy itself (3.1 eV) without subtracting the work function is the most common omission.\n\n90-SECOND SOLUTION\nCompute hc/λ using 1240 eV·nm, then subtract the given work function directly — two steps.\n\nWHAT TO MEMORIZE\nEinstein photoelectric equation: KE_max = hc/λ − W, where W is the work function; no photoelectrons are emitted at all if hc/λ < W, regardless of the light's intensity."
      },

      {
        "question": "A hydrogen atom is in its first excited state (n=2). The additional energy required to fully ionize it from this state is most nearly",
        "choices": [
          "0.85 eV",
          "1.5 eV",
          "3.4 eV",
          "6.8 eV",
          "13.6 eV"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe binding energy at level n is |E_n| = 13.6 eV/n². For n=2: |E₂| = 13.6/4 = 3.4 eV. This is the energy needed to remove the electron from the n=2 level to a free (E=0) state — less than the 13.6 eV needed from the ground state, since the electron is already partially excited.\n\n90-SECOND SOLUTION\nDivide 13.6 eV by n²=4 directly — one division, using the memorized hydrogen ground-state energy.\n\nWHAT TO MEMORIZE\nHydrogen binding energy at level n: |E_n| = 13.6 eV/n²; ionization energy from any excited state is simply this value, always less than the 13.6 eV needed from the ground state."
      },

      {
        "question": "A quantum harmonic oscillator has angular frequency ω = 2.0 × 10¹⁴ rad/s. The spacing between adjacent energy levels is most nearly",
        "choices": [
          "0.033 eV",
          "0.066 eV",
          "0.26 eV",
          "0.13 eV",
          "0.53 eV"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nAdjacent energy levels of a quantum harmonic oscillator are spaced by exactly ħω (constant spacing, independent of quantum number, unlike hydrogen's shrinking level spacing). Here ħω = (1.055×10⁻³⁴)(2.0×10¹⁴)/(1.6×10⁻¹⁹) ≈ 0.132 eV. This equal-spacing feature is what makes the harmonic oscillator spectrum qualitatively different from hydrogen's.\n\n90-SECOND SOLUTION\nMultiply ħ by ω and convert to eV by dividing by 1.6×10⁻¹⁹ — a single formula, no need to compute the ground-state energy ½ħω separately since only the spacing (not an absolute level) is asked.\n\nWHAT TO MEMORIZE\nQuantum harmonic oscillator levels: E_n = (n+½)ħω, evenly spaced by ħω — contrast with hydrogen, whose level spacing shrinks as n increases."
      },

      {
        "question": "An electron in a magnetic field of 2.0 T experiences a Zeeman energy splitting between adjacent magnetic sublevels of most nearly",
        "choices": [
          "5.8 × 10⁻⁶ eV",
          "1.2 × 10⁻⁴ eV",
          "1.2 × 10⁻² eV",
          "5.8 × 10⁻² eV",
          "5.8 × 10⁻⁴ eV"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe Zeeman splitting between adjacent m_l sublevels is ΔE = μ_B B, where μ_B ≈ 9.274×10⁻²⁴ J/T is the Bohr magneton. With B=2.0 T: ΔE = (9.274×10⁻²⁴)(2.0)/(1.6×10⁻¹⁹) ≈ 1.16×10⁻⁴ eV. This is tiny compared to typical atomic energy level spacings (a few eV), which is exactly why the Zeeman effect is treated as a small perturbation.\n\n90-SECOND SOLUTION\nMultiply the memorized Bohr magneton (in eV/T, μ_B ≈ 5.8×10⁻⁵ eV/T) by the field strength directly: (5.8×10⁻⁵)(2.0) ≈ 1.2×10⁻⁴ eV — avoids a unit conversion.\n\nWHAT TO MEMORIZE\nZeeman splitting ΔE = μ_B B between adjacent m_l levels; μ_B ≈ 5.8×10⁻⁵ eV/T is worth memorizing directly in eV/T to skip a joule-to-eV conversion."
      },

      {
        "question": "For the hydrogen atom's ground state, the radial probability density P(r) = |ψ|²·4πr² is maximized at a radius r that is most nearly",
        "choices": [
          "a₀",
          "0",
          "a₀/2",
          "2a₀",
          "4a₀"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThough the wavefunction |ψ(r)|² itself is largest at r=0, the radial probability density includes the geometric factor 4πr² (the volume of a thin spherical shell), which vanishes at r=0 and grows initially before the exponential wavefunction decay takes over. Maximizing P(r) = 4πr²|ψ|² for the 1s state gives exactly r = a₀, the Bohr radius — a case where the most probable radius coincides exactly with the (classically motivated) Bohr model radius, even though the two theories describe the electron completely differently.\n\n90-SECOND SOLUTION\nRecall the specific, well-known result directly: for hydrogen's ground state, the most probable radius equals the Bohr radius a₀, a fact worth memorizing rather than differentiating 4πr²e^(−2r/a₀) under time pressure.\n\nWHAT TO MEMORIZE\nDistinguish |ψ(r)|² (largest at r=0 for the 1s state) from the radial probability density 4πr²|ψ(r)|² (peaked at r=a₀, the Bohr radius) — a frequently tested conceptual distinction."
      },

      {
        "question": "For the hydrogen atom's 3p state (n=3, l=1), the number of radial nodes in the wavefunction (excluding r=0 and r=∞) is",
        "choices": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe number of radial nodes for a hydrogen wavefunction is given by n − l − 1. For the 3p state, n=3 and l=1, so the number of radial nodes is 3 − 1 − 1 = 1. This is separate from angular nodes (of which there are l=1 here); the total node count (radial plus angular) always equals n−1.\n\n90-SECOND SOLUTION\nApply n−l−1 directly: 3−1−1=1 — a one-line formula worth having memorized rather than sketching the radial wavefunction.\n\nWHAT TO MEMORIZE\nHydrogen radial nodes = n−l−1; angular nodes = l; total nodes = n−1, split between the two types according to l."
      },

      {
        "question": "Counting all quantum states (including the two spin orientations) available to an electron in the hydrogen atom's n=3 shell, the total number of such states is",
        "choices": [
          "3",
          "6",
          "18",
          "9",
          "36"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFor a given n, the allowed l values run from 0 to n−1, and each l has (2l+1) values of m_l, each doubled by the two spin states. Summing: for n=3, l=0,1,2 give (2×0+1)+(2×1+1)+(2×2+1) = 1+3+5 = 9 orbital states, and doubling for spin gives 18 total states. This matches the general shortcut formula 2n² = 2(9) = 18.\n\n90-SECOND SOLUTION\nUse the shortcut 2n² directly: 2×3² = 18 — no need to sum the individual l subshells separately.\n\nWHAT TO MEMORIZE\nTotal number of quantum states in shell n (including spin) is 2n²; this is also the pattern behind the lengths of the periods in the periodic table (though real atoms fill subshells out of strict n-order once transition metals begin)."
      },

      {
        "question": "A monatomic ideal gas at 300 K and volume 0.020 m³ is compressed adiabatically and reversibly to a volume of 0.010 m³. Its final temperature is most nearly",
        "choices": [
          "190 K",
          "240 K",
          "480 K",
          "380 K",
          "600 K"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nFor a reversible adiabatic process, TV^(γ−1) = constant, with γ=5/3 for a monatomic ideal gas. So T₂ = T₁(V₁/V₂)^(γ−1) = 300×(2.0)^(2/3) ≈ 300×1.587 ≈ 476 K. Using γ itself as the exponent (instead of γ−1) is the most common error, and would give a substantially different, wrong answer.\n\n90-SECOND SOLUTION\nRecall 2^(2/3) ≈ 1.587 as a standard cube-root-of-4 value, and multiply directly by the initial temperature.\n\nWHAT TO MEMORIZE\nAdiabatic reversible process: TV^(γ−1) = constant (equivalently PV^γ = constant); γ = 5/3 monatomic, 7/5 diatomic — always use γ−1 as the exponent when relating T and V directly."
      },

      {
        "question": "A 0.50 kg mass of water (specific heat 4186 J/(kg·K)) is slowly heated at constant pressure from 300 K to 350 K. The entropy change of the water is most nearly",
        "choices": [
          "70 J/K",
          "150 J/K",
          "700 J/K",
          "1500 J/K",
          "320 J/K"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nFor a substance heated reversibly at constant pressure with roughly constant specific heat, ΔS = mc ln(T₂/T₁) = (0.50)(4186) ln(350/300) ≈ (2093)(0.154) ≈ 323 J/K. Using ΔT/T (a linearized approximation) instead of the exact ln(T₂/T₁) is a common simplification that would give a noticeably different value here since the temperature ratio isn't extremely close to 1.\n\n90-SECOND SOLUTION\nCompute mc first, then multiply by ln(350/300) ≈ 0.15 — recognizing this natural-log form (not a linear ΔT/T) is the key structural point.\n\nWHAT TO MEMORIZE\nEntropy change for constant-pressure heating with constant c: ΔS = mc ln(T₂/T₁) — the natural logarithm of the temperature ratio, not simply ΔT/T (which is only a small-ΔT approximation to it)."
      },

      {
        "question": "For an ideal gas obeying the Maxwell–Boltzmann speed distribution, the ratio of the most probable speed to the root-mean-square speed is most nearly",
        "choices": [
          "0.82",
          "0.71",
          "0.87",
          "1.00",
          "1.22"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe most probable speed is v_p = √(2kT/m) and the rms speed is v_rms = √(3kT/m), so their ratio is √(2/3) ≈ 0.816. This ordering (v_p < v_avg < v_rms) always holds for the Maxwell-Boltzmann distribution, reflecting its asymmetric shape with a long high-speed tail that pulls the rms value above the peak location.\n\n90-SECOND SOLUTION\nTake the square root of 2/3 directly — a clean, memorable ratio worth having on hand rather than rederiving both speed formulas.\n\nWHAT TO MEMORIZE\nThree characteristic Maxwell-Boltzmann speeds, in increasing order: most probable v_p=√(2kT/m) < average v_avg=√(8kT/πm) < rms v_rms=√(3kT/m); their ratios are fixed numbers (√(2/3), √(8/3π), 1) independent of temperature or mass."
      },

      {
        "question": "Light of wavelength 633 nm illuminates a double slit with slit separation 0.50 mm. On a screen 2.0 m away, the spacing between adjacent bright fringes is most nearly",
        "choices": [
          "0.63 mm",
          "2.5 mm",
          "1.3 mm",
          "1.9 mm",
          "3.2 mm"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nFringe spacing in the small-angle (far-field) approximation is Δy = λL/d = (633×10⁻⁹)(2.0)/(0.50×10⁻³) ≈ 2.53×10⁻³ m ≈ 2.5 mm. Confusing d (slit separation) with the slit width, or forgetting the screen distance L entirely, are the common structural errors.\n\n90-SECOND SOLUTION\nPlug directly into Δy = λL/d, keeping units consistent (nm, m, mm all appear here, so convert carefully).\n\nWHAT TO MEMORIZE\nDouble-slit fringe spacing: Δy = λL/d, valid in the small-angle approximation (d ≪ L); larger slit separation d gives closer-together fringes, an inverse relationship worth sanity-checking."
      },

      {
        "question": "A sound source emitting at 500 Hz moves toward a stationary observer at 30 m/s, in air where the speed of sound is 340 m/s. The frequency heard by the observer is most nearly",
        "choices": [
          "440 Hz",
          "460 Hz",
          "548 Hz",
          "500 Hz",
          "610 Hz"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFor a source moving toward a stationary observer, the Doppler-shifted frequency is f' = f₀·v/(v−v_s) = 500×340/(340−30) = 500×340/310 ≈ 548 Hz. The frequency increases because each successive wavefront is emitted from a position closer to the observer, compressing the wavelength. Using v+v_s in the denominator (the formula for a receding source) would give a lower, wrong frequency.\n\n90-SECOND SOLUTION\nSource approaching means smaller denominator (v−v_s), hence higher frequency — check the sign matches this physical expectation before finalizing the answer.\n\nWHAT TO MEMORIZE\nDoppler effect for sound, moving source: f' = f₀v/(v∓v_s), minus sign for source approaching (raises frequency), plus sign for receding (lowers it); the same ∓/± convention applies symmetrically to a moving observer with a different formula, f' = f₀(v±v_o)/v."
      },

      {
        "question": "A nuclear reaction converts 0.10 atomic mass units of rest mass into kinetic energy of the products. The energy released is most nearly",
        "choices": [
          "9.3 MeV",
          "18.6 MeV",
          "186 MeV",
          "93 MeV",
          "931 MeV"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nEach atomic mass unit corresponds to 931.5 MeV via E=mc². With Δm = 0.10 u: E = 0.10 × 931.5 ≈ 93.2 MeV. This single conversion factor (1 u ↔ 931.5 MeV) is the standard shortcut for nuclear energy-release problems, avoiding a full SI-unit calculation with c².\n\n90-SECOND SOLUTION\nMultiply the mass defect directly by 931.5 MeV/u — one multiplication, no unit conversions to SI needed.\n\nWHAT TO MEMORIZE\n1 atomic mass unit = 931.5 MeV/c² exactly (by definition of the MeV/c² energy-mass unit system used throughout nuclear and particle physics) — memorize this conversion factor outright."
      },

      {
        "question": "A distant galaxy's spectral lines are observed to be redshifted with z = 0.10. Using the non-relativistic approximation, the galaxy's recession velocity is most nearly",
        "choices": [
          "3,000 km/s",
          "10,000 km/s",
          "100,000 km/s",
          "300,000 km/s",
          "30,000 km/s"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nFor small redshifts, z ≈ v/c, so v ≈ zc = 0.10 × (3.0×10⁵ km/s) = 3.0×10⁴ km/s = 30,000 km/s. This non-relativistic approximation is reasonably good for z=0.10 (only about a 5% correction from the full relativistic formula would be needed at this redshift), but it becomes invalid for z approaching or exceeding 1.\n\n90-SECOND SOLUTION\nMultiply z directly by the speed of light — one multiplication, using the non-relativistic approximation explicitly stated in the problem.\n\nWHAT TO MEMORIZE\nNon-relativistic redshift approximation: z ≈ v/c, valid only for z ≪ 1; the full relativistic Doppler formula must be used for larger redshifts, where this linear approximation breaks down."
      },

      {
        "question": "A 2×2 matrix has diagonal entries both equal to 2 and off-diagonal entries both equal to 1. Its eigenvalues are",
        "choices": [
          "1 and 3",
          "0 and 4",
          "1 and 2",
          "2 and 2",
          "−1 and 3"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe characteristic equation is det(M−λI) = (2−λ)² − 1 = 0, so (2−λ)² = 1, giving 2−λ = ±1, i.e., λ = 1 or λ = 3. As a check, the trace (sum of diagonal entries) should equal the sum of eigenvalues: 2+2=4, and indeed 1+3=4; the determinant (2×2−1×1=3) should equal the product of eigenvalues: 1×3=3. Both checks confirm the answer.\n\n90-SECOND SOLUTION\nSet up (2−λ)² = 1 directly from the symmetric 2×2 structure, take the square root of both sides, and solve the two resulting linear equations — faster than expanding the full quadratic.\n\nWHAT TO MEMORIZE\nFor any 2×2 matrix, eigenvalues satisfy λ₁+λ₂ = trace and λ₁λ₂ = determinant — a fast way to verify (or even directly find, via a small quadratic) eigenvalues without fully expanding the characteristic polynomial."
      },

      {
        "question": "A meter stick moves past a stationary observer at speed 0.90c, oriented along its direction of motion. The length of the stick as measured by the stationary observer is most nearly",
        "choices": [
          "22 cm",
          "44 cm",
          "56 cm",
          "78 cm",
          "90 cm"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nLength contraction gives L = L₀/γ, with γ = 1/√(1−0.81) = 1/√0.19 ≈ 2.29 at v=0.9c. So L = 100 cm/2.29 ≈ 43.6 cm, closest to 44 cm. Using L = L₀γ (multiplying instead of dividing) is the standard sign-of-effect error, and would incorrectly lengthen rather than contract the stick.\n\n90-SECOND SOLUTION\nCompute γ for v=0.9c (a value worth having as a reference point, γ≈2.3), then divide the proper length by it.\n\nWHAT TO MEMORIZE\nLength contraction: L = L₀/γ ≤ L₀, always a contraction (never an elongation) as measured by an observer relative to whom the object is moving; only the dimension along the direction of motion contracts."
      },

      {
        "question": "In the lab frame, one particle moves at 0.50c and a second particle moves at 0.50c in the same direction relative to the first particle (i.e., the second particle's speed relative to the first is 0.50c). The second particle's speed as measured in the lab frame is most nearly",
        "choices": [
          "0.50c",
          "0.67c",
          "0.80c",
          "0.94c",
          "1.00c"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nRelativistic velocity addition gives u = (u'+v)/(1+u'v/c²), with u'=v=0.50c here: u = (0.50+0.50)/(1+0.25) = 1.00/1.25 = 0.80c. Simple (Galilean) addition would incorrectly give 1.00c, right at the light-speed limit — the relativistic formula always keeps combined velocities strictly below c, which is exactly its defining feature.\n\n90-SECOND SOLUTION\nAdd the two velocities in the numerator, divide by 1 plus their product (in units of c) in the denominator — the denominator is what prevents the sum from ever reaching or exceeding c.\n\nWHAT TO MEMORIZE\nRelativistic velocity addition: u = (u'+v)/(1+u'v/c²); always yields a result strictly less than c when combining two sub-light speeds, unlike naive Galilean addition."
      },

      {
        "question": "An amplifier increases a signal's power from 1.0 W to 100 W. The power gain expressed in decibels is most nearly",
        "choices": [
          "2 dB",
          "10 dB",
          "50 dB",
          "20 dB",
          "100 dB"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nPower gain in decibels is dB = 10 log₁₀(P₂/P₁) = 10 log₁₀(100) = 10×2 = 20 dB. Forgetting the factor of 10 (reporting just log₁₀(100)=2) or confusing the power-ratio formula with the amplitude-ratio formula (which instead uses 20 log₁₀, appropriate for voltage or amplitude ratios, not power) are both common mistakes.\n\n90-SECOND SOLUTION\nRecognize 100 as a power of 10 (10²), so log₁₀(100)=2 exactly, then multiply by 10 — no calculator needed for round-number ratios.\n\nWHAT TO MEMORIZE\nPower ratio in decibels: dB = 10 log₁₀(P₂/P₁). For amplitude/voltage ratios instead, the formula uses 20 log₁₀ — mixing up these two forms is the most common decibel error."
      },

      {
        "question": "A student measures the same quantity 4 times, obtaining a sample standard deviation s. To reduce the standard error of the mean by a factor of 2 (using the same measurement technique), the student should take a total of approximately how many measurements?",
        "choices": [
          "6",
          "8",
          "12",
          "32",
          "16"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nThe standard error of the mean scales as s/√N. To halve it, N must increase by a factor of 4 (since √4=2), so the student needs 4×4=16 total measurements. This is the same √N scaling that governs Poisson counting statistics and underlies why increasing precision gets progressively more expensive in measurement time.\n\n90-SECOND SOLUTION\nHalving an error that scales as 1/√N requires quadrupling N — apply that factor of 4 directly to the original count of 4.\n\nWHAT TO MEMORIZE\nStandard error of the mean ∝ 1/√N; to improve precision by a factor of k, the number of measurements must increase by a factor of k² — a general result applying to any averaging-based error reduction, not just counting statistics."
      }

    ]
  },

  {
    "name": "Short Practice Test 1",
    "added": "2026-08-18",
    "category": "practice",
    "cards": [

      // [CM/newton's laws & friction]
      {
        "question": "A block rests without sliding on a plane inclined at an angle θ to the horizontal, with θ less than the critical angle for slipping and μ the coefficient of static friction. Which of the following is NOT true?",
        "choices": [
          "The friction force on the block has magnitude mg sinθ.",
          "The normal force on the block has magnitude mg cosθ.",
          "Increasing μ at fixed θ leaves the friction force unchanged.",
          "The total contact force from the plane on the block is vertical, of magnitude mg.",
          "The friction force on the block has magnitude μmg cosθ."
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nBelow the critical angle the block is in equilibrium, so friction takes exactly the value equilibrium demands along the surface, mg sinθ, while μmg cosθ is only the upper bound it has not yet reached. The last choice is true and worth noticing: normal force and friction together must cancel the weight, so their vector sum is mg straight up.\n\n90-SECOND SOLUTION\nThe words \"less than the critical angle\" are the entire question. Static friction obeys an inequality, f ≤ μN, and becomes an equality only at impending slip, so pick the choice that writes it as an equality.\n\nWHAT TO MEMORIZE\nStatic friction is f ≤ μN, determined by equilibrium rather than by μ; the critical angle is tanθ = μ."
      },

      // [QM/photoelectric effect]
      {
        "question": "Light of wavelength 310 nm ejects photoelectrons of maximum kinetic energy 1.0 eV from a metal surface. Taking hc = 1240 eV·nm, the maximum kinetic energy of photoelectrons ejected from the same surface by 620 nm light is",
        "choices": [
          "0.25 eV",
          "0.50 eV",
          "1.0 eV",
          "2.0 eV",
          "Zero; no photoelectrons are emitted"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nAt 310 nm the photon energy is 1240/310 = 4.0 eV, so the work function is W = 4.0 − 1.0 = 3.0 eV. At 620 nm the photon carries only 2.0 eV, which is below W, so no electrons come off at all. The choice 0.50 eV is the error of scaling the kinetic energy with the photon energy — kinetic energy is not proportional to hc/λ, because W must be subtracted first.\n\n90-SECOND SOLUTION\nDoubling the wavelength halves the photon energy, 4.0 eV → 2.0 eV. Compare that with the threshold before doing anything else: 2.0 eV < 3.0 eV, so the answer is no emission.\n\nWHAT TO MEMORIZE\nKE_max = hc/λ − W, with no emission when hc/λ < W; hc = 1240 eV·nm."
      },

      // [SR/lorentz transformation]
      {
        "question": "In frame S, event A occurs at x = 0, t = 0 and event B at x = 6.0 light-years, t = 2.0 years. Frame S′ moves at 0.60c in the +x direction of S. In S′, the time of B minus the time of A is",
        "choices": [
          "+7.0 years",
          "+2.5 years",
          "+2.0 years",
          "−1.6 years",
          "−2.0 years"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nWith γ = 1/√(1 − 0.36) = 1.25, Δt′ = γ(Δt − vΔx/c²) = 1.25(2.0 − 0.60 × 6.0) = 1.25(−1.6) = −2.0 years, so B precedes A in S′. Choice D, −1.6 years, is the error of dropping the factor γ, and choice B, +2.5 years, is the error of keeping only γΔt and forgetting the vΔx/c² term entirely.\n\n90-SECOND SOLUTION\nThe interval is spacelike (6 > 2 in light-years and years), so the order of the events is frame-dependent and a sign flip is allowed; that alone points at a negative answer. Then vΔx/c² = 0.6 × 6 = 3.6 years beats Δt = 2.0 years, and γ = 1.25 is the standard 3-4-5 value, so the magnitude is 1.25 × 1.6.\n\nWHAT TO MEMORIZE\nΔt′ = γ(Δt − vΔx/c²) with x measured in light-years and t in years so that c = 1; γ = 1.25 at 0.6c and γ = 5/3 at 0.8c."
      },

      // [CM/lagrangian]
      {
        "question": "A particle of mass m moves in a plane under a central potential U(r). In polar coordinates the Lagrangian is L = ½m[(dr/dt)² + r²(dθ/dt)²] − U(r). The Lagrange equation for r is",
        "choices": [
          "m(d²r/dt²) = m r (dθ/dt)² − dU/dr",
          "m(d²r/dt²) = −dU/dr",
          "m(d²r/dt²) = −m r (dθ/dt)² − dU/dr",
          "m(d²r/dt²) = m r (dθ/dt)² + dU/dr",
          "m(d²r/dt²) = ½m r (dθ/dt)² − dU/dr"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nWith ∂L/∂(dr/dt) = m(dr/dt), the left side is m(d²r/dt²); with ∂L/∂r = m r (dθ/dt)² − dU/dr, the right side carries both the centrifugal term and the force. The distractor carrying −m r (dθ/dt)² treats the centrifugal term as inward, and the ½ version wrongly keeps the ½ from the kinetic energy after differentiating r².\n\n90-SECOND SOLUTION\nDo not differentiate anything: the extra term beyond −dU/dr must be the outward centrifugal term +mr(dθ/dt)² = +ℓ²/mr³, which is what keeps an orbiting particle from falling in. Only one choice has it with a plus sign and no stray factor.\n\nWHAT TO MEMORIZE\nd/dt(∂L/∂q̇) = ∂L/∂q, and the radial equation m r̈ = mrθ̇² − dU/dr for central motion."
      },

      // [QM/lasers & stimulated emission]
      {
        "question": "A gas of atoms is in thermal equilibrium at 300 K, where k_BT = 0.025 eV. An excited level lies 1.15 eV above the ground level and has the same degeneracy. The ratio of its population to the ground-level population is most nearly (take ln 10 = 2.3)",
        "choices": [
          "10⁻²⁰",
          "10⁻¹⁰",
          "10⁻⁴",
          "0.02",
          "0.5"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nEqual degeneracies make the ratio the bare Boltzmann factor e^(−ΔE/k_BT). Here ΔE/k_BT = 1.15/0.025 = 46, and 46/2.3 = 20, so the ratio is e⁻⁴⁶ = 10⁻²⁰. The choice 0.02 is the error of taking the ratio to be linear, k_BT/ΔE, instead of exponential; 10⁻¹⁰ comes from using half the exponent, ΔE/2k_BT.\n\n90-SECOND SOLUTION\nOnly the exponent matters. Divide 1.15 by 0.025 to get 46, then convert to a power of ten by dividing by 2.3 to get 20. Thermal population of an optical-frequency level at room temperature is always astronomically small — which is exactly why a laser needs pumping rather than heating.\n\nWHAT TO MEMORIZE\nPopulation ratio = (g₂/g₁) e^(−ΔE/k_BT), with k_BT = 0.025 eV at room temperature; e⁻ˣ = 10^(−x/2.3)."
      },

      // [OW/total internal reflection]
      {
        "question": "Light travelling inside a glass block strikes a flat glass-air face at 60° from the normal to that face. The smallest index of refraction of the glass for which the light is totally reflected is most nearly",
        "choices": [
          "1.15",
          "1.33",
          "1.41",
          "1.73",
          "2.00"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nTotal internal reflection needs the incidence angle to be at or beyond the critical angle, sin θ_c = 1/n, so 1/n ≤ sin 60° = √3/2 and n ≥ 2/√3 ≈ 1.15. The choice 2.00 is 1/sin 30°, the value you get by measuring the ray's angle from the surface instead of from the normal; 1.41 = 1/sin 45° and 1.33 is water's index recalled rather than derived.\n\n90-SECOND SOLUTION\nBigger incidence angle means an easier escape from total reflection, so a large 60° should demand only a small index. That kills 1.41, 1.73 and 2.00 at once, and 1.33 is a memory trap, leaving 1.15. Only the sin 60° = 0.87 step is real work: 1/0.87 ≈ 1.15.\n\nWHAT TO MEMORIZE\nsin θ_c = n₂/n₁ for light going from dense to rare, and the sines of 30°, 45°, 60° by sight."
      },

      // [SP/fourier analysis]
      {
        "question": "A periodic voltage is V(t) = 2 + 2cos(ωt) + 2cos(2ωt), in volts. Its root-mean-square value is",
        "choices": [
          "2√2 V",
          "√6 V",
          "2√3 V",
          "6 V",
          "3√2 V"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nDistinct harmonics are orthogonal over a period, so mean squares add: ⟨V²⟩ = (DC)² + ½(amplitude)² for each sinusoid = 4 + 2 + 2 = 8, giving V_rms = 2√2 ≈ 2.8 V. Choosing √6 comes from wrongly applying the ½ to the constant term as well; 2√3 comes from omitting the ½ on the two cosines; 6 V is just adding the three amplitudes, which ignores that cross terms average to zero.\n\n90-SECOND SOLUTION\nBound it before computing. The rms must exceed the DC level 2 V and lie far below the peak 6 V, which kills 6 V and √6 ≈ 2.4 is suspiciously close to a pure-DC answer. Write ⟨V²⟩ = 4 + 2 + 2 = 8 in one line and take the root.\n\nWHAT TO MEMORIZE\nParseval for a Fourier series: ⟨V²⟩ = a₀² + ½Σ(aₙ² + bₙ²). Constant term enters squared with no ½; every sinusoid enters with a ½."
      },

      // [CM/moment of inertia]
      {
        "question": "A uniform disk of mass M and radius R lies in the xy-plane with its centre at the origin. Its moment of inertia about a line that lies in the plane of the disk and is tangent to its rim is",
        "choices": [
          "MR²/4",
          "3MR²/4",
          "5MR²/4",
          "3MR²/2",
          "2MR²"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nBy the perpendicular-axis theorem for a lamina, I_x + I_y = I_z = MR²/2, and by symmetry each in-plane diameter gives MR²/4. The parallel-axis theorem then shifts that axis a distance R to the rim: I = MR²/4 + MR² = 5MR²/4. The distractor 3MR²/2 comes from using MR²/2, the symmetry-axis value, for a diameter.\n\n90-SECOND SOLUTION\nRecall the two disk numbers, MR²/2 about the symmetry axis and MR²/4 about a diameter, then just add MR². Anything smaller than MR² is impossible, since the parallel-axis shift alone contributes MR².\n\nWHAT TO MEMORIZE\nPerpendicular-axis theorem I_z = I_x + I_y for a flat lamina, plus disk values MR²/2 and MR²/4."
      },

      // [EM/electric potential]
      {
        "question": "A nonconducting sphere of radius R carries total charge Q spread uniformly through its volume. The potential at the centre exceeds the potential at the surface by",
        "choices": [
          "0",
          "Q/(12πε₀R)",
          "Q/(8πε₀R)",
          "Q/(4πε₀R)",
          "3Q/(8πε₀R)"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nFor a uniformly charged ball, V(0) = 3Q/(8πε₀R) and V(R) = Q/(4πε₀R) = 2Q/(8πε₀R), so the difference is Q/(8πε₀R). Choosing 3Q/(8πε₀R) means quoting the centre potential itself rather than the difference, and choosing 0 means treating the insulating ball as a conductor, where the interior is indeed an equipotential.\n\n90-SECOND SOLUTION\nIntegrate the interior field E(r) = Qr/(4πε₀R³) from 0 to R: the result is half of Q/(4πε₀R) because the linear field averages to half its surface value. That single line gives Q/(8πε₀R) without ever needing V(0).\n\nWHAT TO MEMORIZE\nInside a uniform ball E rises linearly to the surface value, so V(0) − V(R) = ½ × (surface potential) = Q/(8πε₀R), and V(0) = 3/2 times the surface potential."
      },

      // [QM/molecular rotational spectra]
      {
        "question": "A diatomic molecule is a rigid rotor with E_J = ħ²J(J+1)/2I. Its J = 1 → 0 emission line has frequency 1.2 × 10¹¹ Hz. The frequency of its J = 5 → 4 line is",
        "choices": [
          "1.2 × 10¹¹ Hz",
          "4.8 × 10¹¹ Hz",
          "6.0 × 10¹¹ Hz",
          "1.8 × 10¹² Hz",
          "3.0 × 10¹² Hz"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nE_J − E_(J−1) = (ħ²/2I)[J(J+1) − J(J−1)] = ħ²J/I, so the line frequency is proportional to the upper J: five times 1.2 × 10¹¹ Hz = 6.0 × 10¹¹ Hz. The value 4.8 × 10¹¹ Hz comes from using the lower level J = 4, and 1.8 × 10¹² Hz from scaling the frequency as J(J+1), that is by 30/2 = 15.\n\n90-SECOND SOLUTION\nRotational lines form a ladder equally spaced by ħ²/I, with the first line one spacing up from zero. So the J → J−1 line sits at J times the first line: 5 × 1.2 × 10¹¹ Hz.\n\nWHAT TO MEMORIZE\nΔE(J → J−1) = ħ²J/I: the pure rotational spectrum is a set of equally spaced lines."
      },

      // [TS/second law & entropy]
      {
        "question": "Six distinguishable noninteracting particles each have exactly two states, of energy 0 and ε. The total energy of the system is 2ε. The entropy of the system is",
        "choices": [
          "k_B ln 6",
          "k_B ln 12",
          "k_B ln 15",
          "k_B ln 30",
          "6k_B ln 2"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nTotal energy 2ε means exactly two of the six particles are excited, and since the particles are distinguishable the number of ways is C(6,2) = 15, so S = k_B ln 15. Choice D, k_B ln 30, counts 6 × 5 ordered pairs and forgets that the two excited particles are not themselves ordered. Choice E, 6k_B ln 2 = k_B ln 64, is the total number of configurations at all energies, which is the maximum entropy, not the entropy at fixed energy.\n\n90-SECOND SOLUTION\nBoltzmann entropy is k_B ln Ω, and Ω is a binomial coefficient the moment you see two-state particles at fixed energy. Recognize 2ε as 'choose 2 of 6' and stop.\n\nWHAT TO MEMORIZE\nS = k_B ln Ω. For N distinguishable two-state particles with n excited, Ω = C(N,n) = N!/(n!(N−n)!)."
      },

      // [CM/angular momentum]
      {
        "question": "A particle of mass m moves with constant velocity v in the +x direction along the line y = b, with b > 0, in the xy-plane. Consider: I. Its angular momentum about the origin is zero. II. Its angular momentum about the origin has magnitude mvb and points in the −z direction. III. Its angular momentum about the point (0, b) is zero. Which are true?",
        "choices": [
          "I only",
          "II and III only",
          "I and III only",
          "II only",
          "III only"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nAngular momentum about a point is mv times the perpendicular distance from that point to the line of motion, so it is mvb about the origin and zero about (0, b), which lies on the line. With r = (x, b, 0) and p = (mv, 0, 0), the cross product gives L_z = −mvb, into the page, and it does not change with time even though r grows. Statement I is the standard error of assuming straight-line motion carries no angular momentum.\n\n90-SECOND SOLUTION\nNo torque acts, so L must be constant about every fixed point; the only question is which points give zero, and that is exactly the points on the line of motion. That settles III immediately and rules out I.\n\nWHAT TO MEMORIZE\nL = mvd, with d the perpendicular distance from the reference point to the line of motion, constant for free motion."
      },

      // [EM/RC circuits]
      {
        "question": "A 5.0 μF capacitor is connected in parallel with a 2.0 kΩ resistor, and that combination is joined through a 4.0 kΩ resistor and a switch to a 12 V battery of negligible internal resistance. Long after the switch is closed it is opened again. The capacitor then discharges with time constant",
        "choices": [
          "6.7 ms",
          "10 ms",
          "20 ms",
          "30 ms",
          "60 ms"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nOnce the switch is opened the battery and the 4.0 kΩ resistor are no longer part of any closed loop, so the capacitor sees only the 2.0 kΩ resistor and τ = RC = 2.0 × 10³ × 5.0 × 10⁻⁶ = 10 ms. The 30 ms choice adds the two resistors in series, which is the charging time constant, not the discharging one; 6.7 ms puts them in parallel.\n\n90-SECOND SOLUTION\nTrace the discharge loop with a finger: capacitor, 2.0 kΩ, back to the capacitor. Nothing else is in it, so multiply 2 kΩ by 5 μF and stop. The 12 V is a red herring, since a time constant never depends on the source voltage.\n\nWHAT TO MEMORIZE\nτ = R_eff C, where R_eff is the Thevenin resistance seen by the capacitor in the configuration that actually exists at that moment."
      },

      // [TS/heat engines & efficiency]
      {
        "question": "An engine takes in 900 J per cycle from a reservoir at 600 K and rejects 700 J to a reservoir at 400 K, returning to its initial state each cycle. The total entropy change of the universe per cycle is",
        "choices": [
          "0",
          "0.25 J/K",
          "0.50 J/K",
          "1.75 J/K",
          "It cannot be determined from the information given"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe working substance is back in its initial state after a cycle, so its entropy change is zero and only the two reservoirs matter: ΔS = −900/600 + 700/400 = −1.50 + 1.75 = +0.25 J/K. Choice A is what you get by assuming the engine is reversible, but it is not: its efficiency is 200/900 ≈ 0.22 while the Carnot limit here is 1 − 400/600 = 0.33, and that shortfall is exactly the entropy generated. Choice E is a trap; the reservoir temperatures and heats are all that a total entropy change needs.\n\n90-SECOND SOLUTION\nWrite two fractions and subtract: 900/600 = 1.5 out of the hot reservoir, 700/400 = 1.75 into the cold one. Positive difference, small number. Any answer larger than about 1 J/K would require an efficiency far from the Carnot value, so the arithmetic barely needs checking.\n\nWHAT TO MEMORIZE\nA reservoir at fixed T gaining heat Q changes entropy by Q/T. Over one full cycle ΔS_universe = Σ Q_i/T_i for the reservoirs alone, and it is ≥ 0 with equality only for a reversible cycle."
      },

      // [OW/wave equation & propagation]
      {
        "question": "A plane wave of vacuum wavelength 500 nm passes at normal incidence through a slab of glass of index 1.50 and thickness 1.0 mm. Compared with an identical wave that travels the same 1.0 mm in vacuum, the wave emerging from the slab is retarded by",
        "choices": [
          "500 wavelengths",
          "1,000 wavelengths",
          "1,500 wavelengths",
          "2,000 wavelengths",
          "3,000 wavelengths"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe extra optical path is (n − 1)t = 0.50 × 1.0 mm = 0.50 × 10⁻³ m, and dividing by the vacuum wavelength 5.0 × 10⁻⁷ m gives 1,000 wavelengths. The 3,000 answer is nt/λ, the total number of wavelengths inside the glass rather than the difference from vacuum; 2,000 is t/λ, the vacuum count alone.\n\n90-SECOND SOLUTION\nOnly the factor (n − 1) matters. Write (n − 1)t/λ, note 0.5 × 10⁻³ / (5 × 10⁻⁷) = 10³, and stop. The two large choices are the two halves of that subtraction, so seeing 3,000 − 2,000 = 1,000 among the options is itself the check.\n\nWHAT TO MEMORIZE\nOptical path length is nt, and a slab retards a wave by (n − 1)t/λ_vacuum wavelengths. The frequency, not the wavelength, is what stays fixed on entering the glass."
      },

      // [SP/matrices & eigenvalues]
      {
        "question": "The 2 × 2 matrix M has first row (4, 1) and second row (2, 3), acting on column vectors (x, y). An eigenvector belonging to the larger eigenvalue of M is",
        "choices": [
          "(1, −2)",
          "(1, 1)",
          "(2, 1)",
          "(1, −1)",
          "(1, 2)"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe characteristic equation is λ² − (trace)λ + det = λ² − 7λ + 10 = 0, so λ = 5 and λ = 2. For λ = 5 the first row gives (4 − 5)x + y = 0, i.e. y = x, so (1, 1) works: M(1, 1) = (5, 5). The choice (1, −2) is the eigenvector of the smaller eigenvalue λ = 2 — the standard error is solving for the wrong root, or reading the rows as columns.\n\n90-SECOND SOLUTION\nDo not diagonalize. Just hit each candidate with M and see which comes back parallel to itself: M(1, 1) = (5, 5) on the first try. With five short 2 × 2 multiplications this is faster than the characteristic polynomial, and the \"larger eigenvalue\" condition is then confirmed by the factor 5 that pops out.\n\nWHAT TO MEMORIZE\nFor a 2 × 2 matrix, sum of eigenvalues = trace, product = determinant. That alone gives 5 and 2 here with no algebra. An eigenvector is anything M merely rescales, so testing the choices is always legal."
      },

      // [EM/inductance]
      {
        "question": "Two coils wound on a common core have self-inductances 2.0 H and 8.0 H and a coefficient of coupling k = 0.50. They are connected in series so that their fluxes add. The inductance of the combination is",
        "choices": [
          "6.0 H",
          "10 H",
          "12 H",
          "14 H",
          "18 H"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe mutual inductance is M = k√(L₁L₂) = 0.50 × √16 = 2.0 H, and for fluxes that add, L = L₁ + L₂ + 2M = 2.0 + 8.0 + 4.0 = 14 H. The 18 H choice is the error of setting M = √(L₁L₂) and ignoring k; 10 H drops the coupling term altogether; 6.0 H is the series-opposing connection.\n\n90-SECOND SOLUTION\n√(2 × 8) = 4, halved by k gives M = 2. Aiding fluxes must give more than the bare sum 10 H, which eliminates two choices instantly, and adding 2M = 4 lands on 14 H.\n\nWHAT TO MEMORIZE\nM = k√(L₁L₂) with 0 ≤ k ≤ 1, and L_series = L₁ + L₂ ± 2M, plus sign for aiding fluxes."
      },

      // [QM/angular momentum & spherical harmonics]
      {
        "question": "An electron is in an orbital state with l = 2 and m = 1. The expectation value of L_x² + L_y² is",
        "choices": [
          "0",
          "ħ²",
          "5ħ²/2",
          "5ħ²",
          "6ħ²"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nL_x² + L_y² = L² − L_z², and the state is a simultaneous eigenstate of both, so the expectation value is [l(l+1) − m²]ħ² = (6 − 1)ħ² = 5ħ². The choice 5ħ²/2 is ⟨L_x²⟩ alone, since symmetry splits the total evenly between x and y; 6ħ² is ⟨L²⟩ with the subtraction of ⟨L_z²⟩ forgotten.\n\n90-SECOND SOLUTION\nRewrite the operator as L² − L_z² on sight and read off the eigenvalues 6ħ² and ħ². Do not attempt ladder operators; the rewriting is the whole problem.\n\nWHAT TO MEMORIZE\nL²|l,m⟩ = l(l+1)ħ²|l,m⟩ and L_z|l,m⟩ = mħ|l,m⟩, hence ⟨L_x²⟩ = ⟨L_y²⟩ = [l(l+1) − m²]ħ²/2 while ⟨L_x⟩ = ⟨L_y⟩ = 0."
      },

      // [EM/conductors & capacitance]
      {
        "question": "An isolated conducting sphere of radius R carries total charge Q. The outward electrostatic force per unit area on its surface is",
        "choices": [
          "Q²/(4πε₀R⁴)",
          "Q²/(8π²ε₀R⁴)",
          "Q²/(16π²ε₀R⁴)",
          "Q²/(32π²ε₀R⁴)",
          "Q²/(64π²ε₀R⁴)"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe electrostatic pressure on a conductor is σ²/2ε₀, because a surface element feels only the field produced by the rest of the conductor, which is half the total surface field. With σ = Q/(4πR²) this gives Q²/(32π²ε₀R⁴). The choice Q²/(16π²ε₀R⁴) is exactly the factor-of-two error of multiplying σ by the full field σ/ε₀.\n\n90-SECOND SOLUTION\nRecall that the pressure equals the energy density of the surface field, ε₀E²/2 with E = σ/ε₀, which is the same σ²/2ε₀. Then just square σ = Q/4πR² and look for the 32π² in the denominator.\n\nWHAT TO MEMORIZE\nElectrostatic pressure on any conductor surface is σ²/2ε₀ = ε₀E²/2, always outward, and the factor of one-half is the point of the problem."
      },

      // [LM/detectors & counters]
      {
        "question": "A counter with a nonparalyzable dead time of 50 μs records 4.0 × 10³ counts per second. The true event rate is most nearly",
        "choices": [
          "3.2 × 10³ s⁻¹",
          "4.0 × 10³ s⁻¹",
          "4.8 × 10³ s⁻¹",
          "5.0 × 10³ s⁻¹",
          "8.0 × 10³ s⁻¹"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe counter is dead for a fraction mτ = (4.0 × 10³)(50 × 10⁻⁶) = 0.20 of each second, so it is live only 0.80 of the time and the true rate is n = m/(1 − mτ) = 4,000/0.80 = 5.0 × 10³ s⁻¹. The 4.8 × 10³ choice is the first-order estimate m(1 + mτ), which is what you get by correcting the recorded rate instead of solving for the true one; 3.2 × 10³ applies the correction with the wrong sign.\n\n90-SECOND SOLUTION\nLosses can only make the true rate larger than the recorded rate, which removes 3.2 × 10³ and 4.0 × 10³ at once. Then note that 20 percent dead time means dividing by 0.8, not multiplying by 1.2, which separates 5.0 × 10³ from 4.8 × 10³.\n\nWHAT TO MEMORIZE\nNonparalyzable dead time: m = n/(1 + nτ), equivalently n = m/(1 − mτ). The dead fraction of the running time is mτ."
      }

    ]
  },

  {
    "name": "Short Practice Test 2",
    "added": "2026-08-18",
    "category": "practice",
    "cards": [

      // [CM/SHM]
      {
        "question": "A particle of mass m moves in one dimension in a potential U(x) with a single minimum at x₀, where the curvature is U″(x₀) = k > 0. The particle is released from rest at x₀ + A, where A is not small. The period of the resulting oscillation is",
        "choices": [
          "2π√(m/k)",
          "greater than 2π√(m/k)",
          "less than 2π√(m/k)",
          "2π√(m/k), provided the motion stays bounded",
          "not determined by the information given"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\n2π√(m/k) is the small-oscillation limit only; at finite amplitude the period depends on the anharmonic part of U, which is not specified. A pendulum well softens and its period grows with amplitude, while a well with a positive quartic term stiffens and its period shrinks, so both \"greater\" and \"less\" are attainable. Choosing 2π√(m/k) is the error of assuming every minimum is exactly parabolic.\n\n90-SECOND SOLUTION\nAsk whether the period is amplitude-independent: that is true only for an exact parabola. Two counterexamples pulling in opposite directions kill the \"greater\" and \"less\" options, leaving the cannot-determine choice.\n\nWHAT TO MEMORIZE\nω = √(U″(x₀)/m) holds only for small oscillations; isochronism is a special property of the harmonic potential."
      },

      // [QM/atomic spectra & selection rules]
      {
        "question": "An atom in its ground state absorbs a photon of energy 3.0 eV. It later returns to the ground state by emitting two photons, of energies 1.8 eV and 1.2 eV. The ionization energy of the atom is",
        "choices": [
          "1.8 eV",
          "3.0 eV",
          "4.2 eV",
          "6.0 eV",
          "It cannot be determined from the information given"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nSpectral lines fix only differences between levels: the data place one excited level 3.0 eV above the ground state and an intermediate level 1.2 eV above it, and say nothing about where the continuum lies. Answering 3.0 eV is the error of treating the highest level that happens to have been populated as the series limit; 4.2 eV comes from adding 3.0 and 1.2, quantities that are not both measured from the ground state in that sense.\n\n90-SECOND SOLUTION\nAsk what the experiment measures. Absorption and emission energies are level differences; ionization energy is the distance from the ground state to the continuum, which no line in this cascade probes. Choose the cannot-be-determined option.\n\nWHAT TO MEMORIZE\nOptical spectra give level spacings, not absolute energies; the ionization energy is read from the series limit, where the line spacing goes to zero."
      },

      // [OW/wave reflection & transmission at boundary]
      {
        "question": "Two long strings under the same tension are tied together. The second string has four times the linear mass density of the first. A sinusoidal wave travelling on the first string reaches the junction. The fraction of the incident power transmitted into the second string is",
        "choices": [
          "1/9",
          "2/9",
          "4/9",
          "2/3",
          "8/9"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nWith the same tension, v = √(T/μ), so v₂ = v₁/2. The amplitude reflection coefficient is (v₂ − v₁)/(v₂ + v₁) = −1/3, so the reflected power fraction is (1/3)² = 1/9 and the transmitted fraction is 1 − 1/9 = 8/9. The trap answers are 2/3, which is the transmitted amplitude ratio 2v₂/(v₁ + v₂) mistaken for a power fraction, and 4/9, that amplitude ratio squared without the impedance factor that makes power fractions add to 1.\n\n90-SECOND SOLUTION\nCompute the reflected fraction, not the transmitted one: only the amplitude ratio −1/3 is needed, giving 1/9 reflected, so 8/9 is transmitted. A mismatch of only 2:1 in wave speed is mild, so almost everything must get through — 8/9 is the only choice near 1.\n\nWHAT TO MEMORIZE\nr = (v₂ − v₁)/(v₂ + v₁), R = r², T = 1 − R, and v = √(T/μ) on a string."
      },

      // [EM/EM waves & poynting]
      {
        "question": "A plane light wave travelling in air is normally incident on the flat surface of glass of index of refraction 1.5. The fraction of the incident intensity that is reflected is most nearly",
        "choices": [
          "0.04",
          "0.10",
          "0.16",
          "0.20",
          "0.25"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nAt normal incidence the amplitude reflection coefficient is r = (n₁ − n₂)/(n₁ + n₂) = (1 − 1.5)/(2.5) = −0.20, and intensity goes as the square of amplitude, so R = 0.04. The 0.20 choice is the classic error of reporting the amplitude coefficient as an intensity fraction; 0.25 comes from using (n₁ − n₂)/n₂ squared.\n\n90-SECOND SOLUTION\nThe famous number for an air-glass surface is four percent per surface, which is why lens coatings exist. If you must derive it, compute 0.5/2.5 = 0.2 and square it.\n\nWHAT TO MEMORIZE\nR = [(n₁ − n₂)/(n₁ + n₂)]² at normal incidence, giving 4 percent for air to glass, and R + T = 1."
      },

      // [QM/spin & pauli matrices]
      {
        "question": "A spin-½ particle is prepared at t = 0 in the eigenstate of S_x with eigenvalue +ħ/2, and evolves under H = ωS_z. At t = π/ω, a measurement of S_x gives +ħ/2 with probability",
        "choices": [
          "0",
          "¼",
          "½",
          "¾",
          "1"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nIn the S_z basis the initial state is (|↑⟩ + |↓⟩)/√2, and the two components acquire opposite phases ∓ωt/2. At ωt = π the state is proportional to (|↑⟩ − |↓⟩)/√2, which is the S_x = −ħ/2 eigenstate, so the probability of +ħ/2 is zero. Choosing 1 is the error of assuming the state repeats after ωt = π; the spinor needs ωt = 2π. The value ½ belongs to t = π/2ω, where the spin points along ±y.\n\n90-SECOND SOLUTION\nUse Larmor precession: ⟨S⟩ rotates about z at angular frequency ω. In time π/ω it has swept through half a turn, carrying +x to −x, so a measurement of S_x can only give −ħ/2.\n\nWHAT TO MEMORIZE\nUnder H = ωS_z the mean spin precesses about z with angular frequency ω; the state vector itself only returns to itself after ωt = 2π."
      },

      // [SR/simultaneity]
      {
        "question": "Two clocks at rest in frame S lie on the x-axis 6.0 light-seconds apart and are synchronized in S. In frame S′, which moves at 0.50c along the +x direction of S, the readings of the two clocks at any single instant of S′ differ by",
        "choices": [
          "3.0 s",
          "3.5 s",
          "4.5 s",
          "6.0 s",
          "6.9 s"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nFrom t′ = γ(t − vx/c²), two clocks that read the same in S at separation L differ in S′ by Δt = vL/c² = 0.50 × 6.0 = 3.0 s, with the trailing clock reading ahead. The factor γ cancels because the readings compared are proper times of the clocks themselves, so choice B, γvL/c² ≈ 3.5 s, is the error of inserting a time dilation factor that does not belong. Choice D, 6.0 s, mistakes the light-travel time L/c for the offset.\n\n90-SECOND SOLUTION\nUse the one-line rule 'leading clocks lag by vL/c²' and just multiply 0.5 by 6, taking c = 1 in light-second and second units. No γ appears anywhere, which eliminates every choice carrying an awkward factor of 1.15.\n\nWHAT TO MEMORIZE\nClocks synchronized and a distance L apart in their own rest frame are out of step by vL/c² in a frame moving along their separation, the leading one behind."
      },

      // [SP/feynman diagrams & interactions]
      {
        "question": "Take the K mesons to have strangeness +1 and the Λ and Σ hyperons strangeness −1. Consider: I. π⁻ + p → K⁰ + Λ.  II. Σ⁰ → Λ + γ.  III. K⁺ → μ⁺ + ν_μ. Which proceed by the strong interaction?",
        "choices": [
          "I only",
          "II only",
          "III only",
          "I and II only",
          "I and III only"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nProcess I conserves charge, baryon number and strangeness (0 → +1 − 1 = 0), the signature of strong associated production. Process II emits a real photon, so it is electromagnetic no matter what else is conserved — that is the trap behind \"I and II only,\" since II does conserve strangeness. Process III produces leptons and changes strangeness by one unit, so it must be weak.\n\n90-SECOND SOLUTION\nScan for tell-tales rather than checking quantum numbers one by one: a photon in the final state means electromagnetic, leptons in the final state mean weak, and a strangeness change means weak. That instantly disqualifies II and III and leaves I only; then confirm I balances strangeness at 0 on both sides.\n\nWHAT TO MEMORIZE\nStrong and electromagnetic interactions conserve strangeness; only the weak interaction changes it (by one unit). Photons signal electromagnetic; final-state leptons signal weak."
      },

      // [CM/terminal velocity & drag]
      {
        "question": "A small sphere is released from rest in a fluid that exerts a drag force −bv, with b/m = 1.0 s⁻¹. Buoyancy is negligible and g = 9.8 m/s². Its speed 1.0 s after release is most nearly (take e ≈ 2.7)",
        "choices": [
          "3.6 m/s",
          "4.9 m/s",
          "6.2 m/s",
          "8.5 m/s",
          "9.8 m/s"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nHere the terminal speed is v_t = mg/b = 9.8 m/s and the time constant is τ = m/b = 1.0 s, so the release time is exactly one time constant: v = v_t(1 − 1/e) ≈ 9.8(0.63) ≈ 6.2 m/s. The distractor 9.8 m/s is both the terminal speed and the drag-free value gt, and 3.6 m/s is v_t/e, the exponential written the wrong way round.\n\n90-SECOND SOLUTION\nRecognise t = τ and quote the universal 63 percent: after one time constant any exponential approach has covered 0.63 of its range. Then 0.63 × 9.8 ≈ 6.2, and no further arithmetic is needed.\n\nWHAT TO MEMORIZE\nv(t) = v_t[1 − exp(−t/τ)] with v_t = mg/b and τ = m/b; 1 − 1/e ≈ 0.63."
      },

      // [EM/induction & faraday]
      {
        "question": "A conducting bar of mass m slides without friction on two horizontal rails a distance L apart in a uniform vertical magnetic field of magnitude B. The rails have negligible resistance and are joined at one end by an uncharged capacitor of capacitance C. A constant horizontal force F is applied to the bar, at rest at t = 0. The acceleration of the bar is",
        "choices": [
          "F/m",
          "F/(m + CBL)",
          "F/(m + CB²L²)",
          "F/(m − CB²L²)",
          "not determinable without the resistance of the circuit"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe motional emf is BLv, so the capacitor charge is q = CBLv and the current is i = dq/dt = CBLa; the magnetic force on the bar is BiL = CB²L²a, opposing F. Newton's law F − CB²L²a = ma gives a = F/(m + CB²L²), a constant. Choosing F/m ignores the back reaction, and the last choice is the trap of remembering the resistive version of this problem, where the drag depends on v and the bar approaches a terminal speed.\n\n90-SECOND SOLUTION\nThe capacitor makes the current proportional to acceleration rather than to velocity, so its reaction acts exactly like extra inertia: the bar behaves as though its mass were m + CB²L². Check the dimensions of CB²L² or take C → 0 to recover F/m, and only one choice survives both tests.\n\nWHAT TO MEMORIZE\nWith a resistor the induced current goes as v and produces damping; with a capacitor it goes as a and produces an effective added mass CB²L²."
      },

      // [QM/finite well & bound states]
      {
        "question": "A particle of mass m moves in one dimension in the potential V(x) = A|x|, where A is a positive constant. Its ground-state energy is proportional to",
        "choices": [
          "ħ(A/m)^½",
          "(ħ²A/m)^⅓",
          "(ħ²A²/m)^⅓",
          "(ħA²/m)^⅓",
          "ħ²A²/m"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nOnly ħ, m and A are available, and A has units of energy per length. Writing E ∝ ħ^a A^b m^c and matching units gives a = ⅔, b = ⅔, c = −⅓, i.e. E ∝ (ħ²A²/m)^⅓. Choosing ħ(A/m)^½ is the error of importing the oscillator answer ħω with A misread as a force constant; A has the wrong dimensions for that, since V is linear rather than quadratic.\n\n90-SECOND SOLUTION\nDo not solve the Airy equation. Check the scaling instead: a heavier particle must sit lower and a steeper potential must push the level up, and only the option that behaves as A^⅔ m^(−⅓) does both while carrying units of energy.\n\nWHAT TO MEMORIZE\nNothing specific to this potential. For V = A|x|^n dimensional analysis gives E ∝ (ħ²/m)^(n/(n+2)) A^(2/(n+2)); check it against n = 2, where it returns ħ√(A/m)."
      },

      // [SP/nuclear gamma transitions & mossbauer]
      {
        "question": "A free nucleus of mass number 100, initially at rest, emits a 2.0 MeV gamma ray. Taking the nuclear rest energy to be 931.5 MeV per nucleon, the recoil kinetic energy of the nucleus is most nearly",
        "choices": [
          "0.2 eV",
          "2 eV",
          "20 eV",
          "200 eV",
          "2 keV"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nMomentum conservation gives the nucleus p = E_γ/c, and since the recoil is utterly nonrelativistic, E_R = p²/2M = E_γ²/2Mc² = (2.0)²/(2 × 9.3 × 10⁴) MeV ≈ 2 × 10⁻⁵ MeV ≈ 20 eV. Answers near 2 keV come from taking the recoil to be of order (m_e/M)E_γ or from dropping a power of ten in Mc²; 2 eV comes from using E_γ/2Mc² scaling with a single power of E_γ.\n\n90-SECOND SOLUTION\nRecognize the standard Mossbauer ratio E_R/E_γ = E_γ/2Mc². Here that is 2/(1.86 × 10⁵) ≈ 10⁻⁵, so the recoil is 10⁻⁵ of 2 MeV = 20 eV. One division, no algebra — and note the answer is eV-scale, which is exactly why gamma resonance absorption fails for a free nucleus and needs a lattice.\n\nWHAT TO MEMORIZE\nE_R = E_γ²/2Mc², with Mc² ≈ 931.5 MeV × A. The fractional recoil E_R/E_γ = E_γ/2Mc² is the number that decides whether recoilless (Mossbauer) absorption matters."
      },

      // [CM/gravitation]
      {
        "question": "A projectile is fired straight up from the surface of an airless spherical planet of radius R with a speed equal to half the escape speed. Neglecting the planet's rotation, its maximum height above the surface is",
        "choices": [
          "R/4",
          "R/3",
          "R/2",
          "2R/3",
          "R"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nWith v = v_esc/2, the kinetic energy per unit mass is ¼v_esc²/2 = GM/4R, so energy conservation gives GM/4R − GM/R = −GM/r_max, hence r_max = 4R/3 and the height is R/3. The distractor R/4 is what the uniform-gravity formula h = v²/2g gives; it fails because the rise is comparable to R and gravity weakens over it.\n\n90-SECOND SOLUTION\nQuarter of the escape speed squared means the projectile supplies only a quarter of the energy needed to escape, so three quarters of the binding energy remains: −GMm/r = −(3/4)GMm/R gives r = 4R/3 at once. Also note the true answer must exceed the constant-g estimate R/4, which eliminates it and anything smaller.\n\nWHAT TO MEMORIZE\nv_esc = √(2GM/R), and E = ½mv² − GMm/r conserved on a radial trajectory."
      },

      // [EM/RLC & AC circuits]
      {
        "question": "A series RLC circuit has L = 2.0 mH, C = 2.0 nF and R = 20 Ω and is driven by a source of fixed amplitude and variable angular frequency ω. The full width of the average-power resonance curve between its half-power points, in rad/s, is",
        "choices": [
          "5.0 × 10³",
          "1.0 × 10⁴",
          "2.0 × 10⁴",
          "5.0 × 10⁵",
          "1.0 × 10⁶"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe full width at half power of a series RLC resonance is R/L = 20/(2.0 × 10⁻³) = 1.0 × 10⁴ rad/s. The 5.0 × 10³ choice is R/2L, the half-width rather than the full width, and 5.0 × 10⁵ is the resonant frequency itself, which the question does not ask for.\n\n90-SECOND SOLUTION\nThe capacitance is a red herring for the width, since only the ratio R/L sets it. Divide 20 by 2 × 10⁻³ and stop; if you prefer, ω₀ = 1/√(LC) = 5 × 10⁵ and Q = ω₀L/R = 50, so the width ω₀/Q is again 10⁴.\n\nWHAT TO MEMORIZE\nFull width at half power = R/L = ω₀/Q for a series RLC, with ω₀ = 1/√(LC) and Q = ω₀L/R."
      },

      // [TS/heat capacity]
      {
        "question": "Equal numbers of moles of a monatomic ideal gas (c_V = 3R/2) and a diatomic ideal gas (c_V = 5R/2) are mixed. For the mixture, c_P/c_V is",
        "choices": [
          "1.40",
          "1.50",
          "1.53",
          "1.60",
          "1.67"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nHeat capacities are extensive, so the molar c_V of the mixture is the mole-weighted mean, (3R/2 + 5R/2)/2 = 2R. Mayer's relation still holds for the mixture, c_P = c_V + R = 3R, so γ = 3R/2R = 1.50. Choice C, 1.53, is the common error of averaging the two γ values, (5/3 + 7/5)/2, instead of averaging the heat capacities; γ is a ratio and does not average.\n\n90-SECOND SOLUTION\nAverage the c_V values, not the gammas: 2R. Add R for c_P and divide. The answer must lie strictly between 1.40 and 1.67, and the naive average of the gammas, 1.53, is offered precisely as the trap, so pick the clean 3/2.\n\nWHAT TO MEMORIZE\nc_P − c_V = R per mole for any ideal gas, including a mixture; mixtures add heat capacities, weighted by mole fraction."
      },

      // [LM/dimensional analysis]
      {
        "question": "A cold cloud of negligible pressure and uniform mass density ρ collapses under its own gravity. Taking the collapse time to depend only on ρ and the gravitational constant G, that time is proportional to",
        "choices": [
          "√(Gρ)",
          "1/√(Gρ)",
          "1/(Gρ)",
          "√(G/ρ)",
          "√(ρ/G)"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nG has units m³·kg⁻¹·s⁻² and ρ has kg·m⁻³, so the product Gρ has units s⁻² and nothing else — mass and length cancel exactly. The only combination with units of time is therefore (Gρ)⁻¹/², i.e. 1/√(Gρ). The choice √(ρ/G) keeps a leftover kg·m⁻³ and is what you get by inverting only ρ instead of the whole product; 1/(Gρ) has units of time squared.\n\n90-SECOND SOLUTION\nForm Gρ, see immediately that it is a pure inverse-square-time, and take the inverse square root. No exponent algebra is needed, and any choice that is not a power of the single product Gρ can be dropped without checking.\n\nWHAT TO MEMORIZE\nGρ has dimensions of 1/time², so free-fall or dynamical times in self-gravitating systems always go as 1/√(Gρ). It is worth carrying [G] = m³·kg⁻¹·s⁻² in memory."
      },

      // [CM/non-inertial frames]
      {
        "question": "A block of mass m sits on the frictionless face of a wedge inclined at 30° to the horizontal. The wedge is accelerated horizontally so that the block stays at the same point on the face. The normal force on the block is",
        "choices": [
          "(√3/2)mg",
          "mg",
          "(3/2)mg",
          "2mg/√3",
          "2mg"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe block has no vertical acceleration, so the vertical components balance: N cos30° = mg, giving N = mg/cos30° = 2mg/√3 ≈ 1.15mg. The horizontal component then supplies ma, so a = g tan30°. The distractor (√3/2)mg = mg cos30° is the value for a stationary wedge, where the block's acceleration is along the surface, not zero.\n\n90-SECOND SOLUTION\nThe surface now has to hold the full weight up and push the block sideways as well, so N must exceed mg — eliminate (√3/2)mg and mg on sight. Then N = mg/cosθ is the only combination that reduces to mg as θ → 0.\n\nWHAT TO MEMORIZE\nBlock riding on a frictionless incline of angle θ with the incline accelerating horizontally: a = g tanθ and N = mg/cosθ."
      },

      // [EM/magnetic dipole & field lines]
      {
        "question": "Two small identical current loops are held coaxially with their planes parallel, separated by a distance d that is large compared with their radii. The magnitude of the force between them varies with separation as",
        "choices": [
          "d⁻¹",
          "d⁻²",
          "d⁻³",
          "d⁻⁴",
          "d⁻⁶"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nEach loop is a magnetic dipole whose field falls off as d⁻³, so the interaction energy U = −m·B goes as d⁻³ and the force, being the negative gradient of U, goes as d⁻⁴. The d⁻³ choice is the common error of quoting the field dependence instead of differentiating it; d⁻⁶ comes from multiplying two dipole fields together as if each loop supplied one factor.\n\n90-SECOND SOLUTION\nAny time you know an interaction energy scaling, take one more power of 1/d for the force. Dipole field is 1/d³, so the force is 1/d⁴, and there is nothing to compute.\n\nWHAT TO MEMORIZE\nDipole field ~ 1/r³, dipole-dipole energy ~ 1/r³, dipole-dipole force ~ 1/r⁴. Force is always one power steeper than energy."
      },

      // [QM/identical particles]
      {
        "question": "Two identical spin-1 bosons occupy the same spatial orbital. The possible values of the total spin quantum number S are",
        "choices": [
          "0 only",
          "1 only",
          "2 only",
          "0 and 2 only",
          "0, 1, and 2"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe total state of two bosons must be symmetric under exchange, and putting both in the same orbital makes the spatial factor symmetric, so the spin factor must be symmetric too. Coupling two spin-1 particles gives S = 2 (5 states, symmetric), S = 1 (3 states, antisymmetric) and S = 0 (1 state, symmetric). Choosing 0, 1, and 2 is the error of listing the coupling result while ignoring the exchange constraint.\n\n90-SECOND SOLUTION\nCount symmetric spin states directly: 3 × 3 = 9 states split into 6 symmetric and 3 antisymmetric, and 6 = 5 + 1 can only be S = 2 plus S = 0. Alternatively use the alternating rule — the top multiplet is symmetric, the next antisymmetric, and so on.\n\nWHAT TO MEMORIZE\nFor two identical particles in the same orbital the spin state carries the whole exchange symmetry: symmetric for bosons, antisymmetric for fermions. Coupled multiplets alternate in symmetry with the top one (S = 2j) symmetric."
      },

      // [TS/thermodynamic processes]
      {
        "question": "An ideal gas is taken from state A to state B along two different quasi-static paths. Which of the following must have the same value for both paths?\nI. ΔU\nII. ΔS\nIII. Q",
        "choices": [
          "I only",
          "II only",
          "III only",
          "I and II only",
          "I, II, and III"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nU and S are state functions, so ΔU and ΔS are fixed once the endpoints A and B are fixed, whatever route is taken. Q is a path function: only the combination Q − W = ΔU is forced to be the same, so two paths with different work carry different heat. Choosing I and III only is the standard error of treating heat as something a state possesses rather than something a process transfers.\n\n90-SECOND SOLUTION\nAsk of each entry: is it written as a difference of a property of the state, or as an amount transferred during the process? ΔU and ΔS are differences of state functions; Q and W are transfers. Answer the two differences. A one-line counterexample kills III: an isothermal path from A to B has Q ≠ 0 while an adiabat plus an isochore reaching the same B has a different Q.\n\nWHAT TO MEMORIZE\nU, S, H, F, G, T, P, V are state functions; Q and W are not. Only their combination Q − W = ΔU is path-independent."
      },

      // [OW/diffraction & gratings]
      {
        "question": "A transmission grating ruled with 5,000 lines per centimeter is illuminated at normal incidence by light of wavelength 500 nm. The total number of principal maxima that appear, counting the central one and both sides, is",
        "choices": [
          "3",
          "4",
          "5",
          "7",
          "9"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe ruling spacing is d = 1 cm/5,000 = 2.0 × 10⁻⁶ m = 2,000 nm, so d/λ = 4 exactly. Since d sin θ = mλ requires |m| ≤ d/λ, and m = ±4 would need sin θ = 1, i.e. θ = 90°, only m = 0, ±1, ±2, ±3 emerge: 7 maxima. The answer 9 is the classic error of counting the grazing m = ±4 orders as observable; 4 is d/λ itself, the highest order rather than the number of spots.\n\n90-SECOND SOLUTION\nGet d/λ = 4 in one step, then write 2m_max + 1 with m_max = 3 because the fourth order lies exactly at 90°. Answer 2(3) + 1 = 7.\n\nWHAT TO MEMORIZE\nd sin θ = mλ, so m_max is the largest integer strictly less than d/λ, and the count of maxima is 2m_max + 1."
      }

    ]
  },

  {
    "name": "Short Practice Test 3",
    "added": "2026-08-18",
    "category": "practice",
    "cards": [

      // [EM/current & resistance]
      {
        "question": "A steady current flows along a solid copper wire whose cross-sectional area decreases gradually from one end to the other. Which of the following is NOT true?",
        "choices": [
          "The current is the same through every cross-section.",
          "The current density is greater where the cross-section is smaller.",
          "The electron drift speed is greater where the cross-section is smaller.",
          "The electric field inside the wire is stronger where the cross-section is smaller.",
          "The potential drop per unit length is the same everywhere along the wire."
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nCharge conservation in the steady state forces the same current I through every cross-section, so J = I/A grows where A shrinks, and with J = nev_d and J = σE both the drift speed and the internal field grow with it. The potential drop per unit length is exactly E, which therefore varies along the wire, so the last statement is false. Choosing one of the first four usually comes from imagining a uniform field inside a conductor, which holds only for uniform cross-section.\n\n90-SECOND SOLUTION\nWrite the chain I fixed → J = I/A → E = ρJ → v_d = J/ne. Everything except I varies as 1/A, and dV/dx is just E, so the statement claiming it is constant is the odd one out.\n\nWHAT TO MEMORIZE\nIn a steady current, I is the same at every cross-section, not J or E; J = I/A = nev_d = σE, and the potential gradient equals E."
      },

      // [QM/uncertainty principle]
      {
        "question": "Which of the following is NOT a consequence of the uncertainty principle Δx Δp ≥ ħ/2 or its energy-time counterpart?",
        "choices": [
          "The zero-point energy of a quantum harmonic oscillator.",
          "The natural linewidth of light emitted by a state of finite lifetime.",
          "The finite size of the hydrogen atom in its ground state.",
          "The angular spreading of a particle beam after it passes through a narrow slit.",
          "The discreteness of the bound-state energy levels of a particle in a potential well."
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nDiscreteness comes from imposing boundary conditions on a wave equation in a confined region, not from the uncertainty relation: the uncertainty principle sets the scale of the lowest level but says nothing about the levels being separated at all. The other four are standard uncertainty estimates — zero-point energy, ΔE ≈ ħ/τ for a finite lifetime, minimizing p²/2m − e²/4πε₀r to get the Bohr radius, and Δp_transverse ≈ ħ/Δx at a slit. Choosing the zero-point energy is the usual trap, since it looks like a quantization statement but is in fact the uncertainty principle at work.\n\n90-SECOND SOLUTION\nAsk of each option whether it is an order-of-magnitude estimate built from ħ and a confinement scale. Four are; the one that is a statement about the pattern of levels rather than their scale is the exception.\n\nWHAT TO MEMORIZE\nΔx Δp ≥ ħ/2 and ΔE Δt ≥ ħ/2 give magnitudes — minimum energies, spreads, linewidths. Quantization of levels comes instead from boundary conditions on the wavefunction."
      },

      // [SP/astrophysics & cosmology]
      {
        "question": "Two stars have equal luminosity, but one is four times as far from Earth as the other. Given that a flux ratio of 100 corresponds to exactly 5 magnitudes and that log₁₀2 = 0.30, the more distant star is fainter by how many magnitudes?",
        "choices": [
          "0.75",
          "1.5",
          "2.0",
          "It cannot be determined without the stars' surface temperatures.",
          "3.0"
        ],
        "answer": "E",
        "explanation": "WORKED SOLUTION\nEqual luminosity means the flux ratio is set by the inverse square law alone: 4² = 16. A factor 100 in flux is 5 magnitudes, so Δm = 2.5 log₁₀(16) = 2.5 × 4 × 0.30 = 3.0. The trap is 1.5, which is 2.5 log₁₀(4) — using the distance ratio in place of the flux ratio and forgetting to square. Temperatures are a red herring; luminosity is already given as equal, so nothing about the spectra is needed.\n\n90-SECOND SOLUTION\nCount factors of 2. Four times the distance is 16 times fainter = 2⁴, and each factor of 2 in flux is 2.5 × 0.30 = 0.75 magnitude, so 4 × 0.75 = 3.0. Doing it in powers of 2 avoids logs entirely and immediately exposes 0.75 (one factor of 2) and 1.5 (two factors) as partial answers.\n\nWHAT TO MEMORIZE\nΔm = 2.5 log₁₀(F₁/F₂), larger m = fainter, and F ∝ L/d². Useful anchors: a factor 100 in flux is 5 mag, a factor 2 is about 0.75 mag."
      },

      // [EM/gauss's law]
      {
        "question": "A point charge +q sits at the centre of a cube of edge length a. Consider the following statements. I. The electric flux through one face is q/6ε₀. II. The flux through the entire cube depends on a. III. The magnitude of E is the same at every point of a given face. Which are true?",
        "choices": [
          "I only",
          "III only",
          "I and II",
          "I and III",
          "I, II, and III"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nGauss's law gives total flux q/ε₀ with no reference to size or shape, so II is false, and symmetry among the six identical faces splits that equally, making I true. Statement III is false because a face corner is farther from the charge than the face centre and the field there is also more oblique; students who accept III are importing the uniformity of a spherical surface into a flat one.\n\n90-SECOND SOLUTION\nGauss's law depends only on enclosed charge, which kills II at once and eliminates two choices. Since I is plainly right by six-fold symmetry, only I only and I and III survive, and a sketch of the field at a face corner settles it.\n\nWHAT TO MEMORIZE\nTotal flux = q_enc/ε₀ regardless of surface size or shape, and symmetry can divide flux among identical faces even when the field on each face is not uniform."
      },

      // [TS/phase transitions & latent heat]
      {
        "question": "Ice melts at 273 K with latent heat of fusion 3.4 × 10⁵ J/kg, and on melting the specific volume decreases by 1.0 × 10⁻⁴ m³/kg. From dP/dT = L/(T Δv), the slope of the melting curve is most nearly",
        "choices": [
          "−1.2 × 10⁷ Pa/K",
          "−3.4 × 10⁹ Pa/K",
          "−1.2 × 10⁵ Pa/K",
          "+1.2 × 10⁷ Pa/K",
          "+3.4 × 10⁹ Pa/K"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nGoing solid → liquid the volume drops, so Δv = −1.0 × 10⁻⁴ m³/kg while L is positive, and the slope is negative: dP/dT = 3.4 × 10⁵ / (273 × (−1.0 × 10⁻⁴)) ≈ 3.4 × 10⁵ / (−2.7 × 10⁻²) ≈ −1.2 × 10⁷ Pa/K. The +1.2 × 10⁷ choice is the sign error of using the magnitude of Δv, and −3.4 × 10⁹ is what you get by forgetting to divide by T.\n\n90-SECOND SOLUTION\nFix the sign first from physics you already know: raising the pressure on ice makes it melt at a lower temperature, so the melting curve leans backwards and dP/dT < 0. That eliminates two choices instantly. Then only the order of magnitude is left: 3.4 × 10⁵ divided by roughly 3 × 10⁻² is about 10⁷.\n\nWHAT TO MEMORIZE\nClausius-Clapeyron, dP/dT = L/(T Δv), with Δv the volume change per unit mass in the same direction as L is absorbed. Water is the anomalous case: the solid is less dense, Δv < 0 on melting, slope negative."
      },

      // [OW/standing waves on strings]
      {
        "question": "A string of length L fixed at both ends vibrates in its third harmonic at frequency f. Consider the statements: I. The wavelength is 2L/3. II. The midpoint of the string is a node. III. Doubling the tension doubles f. Which are correct?",
        "choices": [
          "I only",
          "II only",
          "III only",
          "I and II",
          "I, II, and III"
        ],
        "answer": "A",
        "explanation": "WORKED SOLUTION\nThe third harmonic fits three half-wavelengths in L, so λ = 2L/3 and I is right. Its nodes sit at 0, L/3, 2L/3 and L, so the midpoint is an antinode, not a node — statement II is the even-harmonic picture applied to an odd one. Since f ∝ √(T/μ), doubling T multiplies f by √2, not 2, so III is the standard forgotten-square-root error.\n\n90-SECOND SOLUTION\nSketch three humps mentally: the middle hump is centred on L/2, so II dies immediately, and any frequency-versus-tension statement that is linear rather than square-root dies with it. That leaves I only, without checking I in detail.\n\nWHAT TO MEMORIZE\nλ_n = 2L/n and f_n = (n/2L)√(T/μ) for a string fixed at both ends; frequency scales as the square root of tension."
      },

      // [CM/rotational dynamics]
      {
        "question": "A uniform rod of mass M and length L hangs horizontally at rest, held by two vertical strings, one at each end. One string is cut. Immediately afterward the tension in the remaining string is",
        "choices": [
          "Mg",
          "3Mg/4",
          "Mg/4",
          "Mg/3",
          "Mg/2"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nAt the instant of the cut the still-supported end has not yet moved, so it serves as an instantaneous pivot: α = (MgL/2)/(ML²/3) = 3g/2L, and the centre of mass accelerates downward at a = αL/2 = 3g/4. Newton's second law for the rod, Mg − T = M(3g/4), then gives T = Mg/4. The choice Mg/2 is the statics answer; it assumes the rod is still in equilibrium, but the centre of mass is in fact falling at three quarters of g.\n\n90-SECOND SOLUTION\nThe centre of mass must accelerate downward, so the surviving tension has to be less than the old Mg/2 — that alone kills Mg, 3Mg/4 and Mg/2. Then use the standard released-rod result a_cm = 3g/4 and read off T = M(g − 3g/4).\n\nWHAT TO MEMORIZE\nI = ML²/3 for a uniform rod about one end, and the trick that a support point which is still momentarily at rest can be used as a pivot."
      },

      // [EM/magnetic materials]
      {
        "question": "A ferromagnetic transformer core of volume 1.0 × 10⁻³ m³ is driven at 60 Hz. Its B-H hysteresis loop encloses an area of 500 J/m³. The power dissipated in the core by hysteresis is most nearly",
        "choices": [
          "0.50 W",
          "15 W",
          "30 W",
          "60 W",
          "3.0 × 10⁴ W"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe area enclosed by the B-H loop is the energy dissipated per unit volume per cycle, so P = (loop area) × (volume) × (frequency) = 500 × 1.0 × 10⁻³ × 60 = 30 W. The 0.50 W choice is the energy per cycle in joules misread as a power, that is, forgetting the factor of frequency; 3.0 × 10⁴ W forgets the volume.\n\n90-SECOND SOLUTION\nCheck units instead of recalling a formula: B·H has units (T)(A/m) = J/m³, so the loop area is an energy density per cycle. The only way to build a watt from 500 J/m³, 10⁻³ m³ and 60 s⁻¹ is to multiply all three.\n\nWHAT TO MEMORIZE\nHysteresis loss per cycle per unit volume equals the area of the B-H loop; multiply by volume and by driving frequency for average power."
      },

      // [QM/de broglie waves]
      {
        "question": "A photon and a nonrelativistic electron each have wavelength 1.0 nm. Taking hc = 1240 eV·nm and λ = 1.23 nm/√V for an electron accelerated from rest through V volts, the ratio of the photon's energy to the electron's kinetic energy is most nearly",
        "choices": [
          "1",
          "30",
          "8 × 10²",
          "4 × 10⁴",
          "6 × 10⁵"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nThe photon carries 1240 eV·nm / 1.0 nm = 1240 eV. For the electron, λ = 1.23 nm/√V gives √V = 1.23, so V ≈ 1.5 volts and the kinetic energy is about 1.5 eV. The ratio is 1240/1.5 ≈ 8 × 10². Answering 1 is the error of using E = hc/λ for the electron as well; that relation holds only for massless particles, while a massive particle has E = h²/2mλ².\n\n90-SECOND SOLUTION\nForm the ratio symbolically first: (hc/λ) ÷ (h²/2mλ²) = 2mcλ/h = 2λ/λ_C, where λ_C = h/m_ec = 2.4 × 10⁻³ nm. So the ratio is 2(1.0)/0.0024 ≈ 800 — one division, no constants plugged in.\n\nWHAT TO MEMORIZE\nhc = 1240 eV·nm; λ = 1.23 nm/√V for slow electrons; electron Compton wavelength 2.4 pm. Photon energy goes as 1/λ, massive-particle kinetic energy as 1/λ²."
      },

      // [TS/heat conduction]
      {
        "question": "Two identical laterally insulated bars connect a hot reservoir to a cold one, side by side, and in the steady state they transfer heat at a total rate of 12 W. The bars are then joined end to end to form a single bar spanning the same two reservoirs. The rate of heat flow is now",
        "choices": [
          "1.0 W",
          "1.5 W",
          "3.0 W",
          "6.0 W",
          "12 W"
        ],
        "answer": "C",
        "explanation": "WORKED SOLUTION\nHeat current is kAΔT/L, so side by side the two bars give twice the current of one bar: each carries 6 W. Joined end to end across the same reservoirs, the conducting path has the cross-section of one bar and twice the length, so the current is half of 6 W, or 3.0 W. Choice D, 6.0 W, is the error of counting only the loss of area while forgetting that the length also doubled; choice E treats heat current as if it depended only on the amount of material.\n\n90-SECOND SOLUTION\nTreat it as resistors: identical bars in parallel carry 12 W, so in series across the same temperature difference they carry a quarter of that, since series doubles the resistance while parallel had halved it. Two factors of 2 in the same direction, so divide 12 by 4.\n\nWHAT TO MEMORIZE\nH = kAΔT/L, with thermal resistance L/kA adding in series and conductances kA/L adding in parallel, exactly like electrical resistance with ΔT playing the role of voltage."
      },

      // [CM/center of mass]
      {
        "question": "A 60 kg man stands at one end of a 120 kg boat of length 3.0 m floating at rest on still water. He walks to the other end. Neglecting water resistance, how far does the man move relative to the water?",
        "choices": [
          "1.0 m",
          "2.0 m",
          "1.5 m",
          "2.5 m",
          "3.0 m"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nNo horizontal external force acts, so the centre of mass of man plus boat stays fixed in the water. If the boat slides back a distance d, the man's displacement relative to the water is 3.0 − d, and 60(3.0 − d) = 120d gives d = 1.0 m, so the man moves 2.0 m. The distractor 1.0 m is the boat's displacement, and 3.0 m is the displacement relative to the boat, not to the water.\n\n90-SECOND SOLUTION\nThe two displacements split the 3.0 m in inverse proportion to the masses, 2:1 in the man's favour because the boat is twice as heavy. Write down 2.0 m and 1.0 m without solving anything.\n\nWHAT TO MEMORIZE\nWith zero net external force the centre of mass does not move: m₁Δx₁ = −m₂Δx₂, and the two displacements sum to the relative displacement."
      },

      // [EM/dielectrics]
      {
        "question": "A parallel-plate capacitor with plate separation d is charged and then disconnected from its battery. A slab of dielectric constant 3.0 and thickness d/2 is then inserted so that it fills half of the gap, vacuum filling the rest. The ratio of the potential difference across the vacuum region to that across the slab is",
        "choices": [
          "9.0",
          "3.0",
          "1.0",
          "1/3",
          "1/9"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nWith no free charge on the slab faces, D is the same in both regions, so E_vac = D/ε₀ while E_slab = D/(κε₀), and since the two regions have the same thickness d/2, the voltage ratio equals κ = 3.0. The 1/3 choice is the sign-flipped version of the same reasoning, and 1.0 comes from wrongly assuming E rather than D is continuous across the interface.\n\n90-SECOND SOLUTION\nRecall that a dielectric weakens the field inside it by κ. The vacuum half therefore carries the larger share of the voltage, which immediately rules out every choice below 1, and the factor is just κ.\n\nWHAT TO MEMORIZE\nAt a charge-free interface the normal component of D is continuous, so E drops by κ inside a linear dielectric. Whether the battery is still attached does not affect this ratio."
      },

      // [QM/zeeman & stark effects]
      {
        "question": "Ignoring electron spin, an atom is placed in a weak uniform magnetic field and a spectral line arising from an l = 2 → l = 1 transition is observed. With the electric-dipole rule Δm = 0, ±1, into how many distinct frequencies does the line split?",
        "choices": [
          "Two",
          "Three",
          "Five",
          "Nine",
          "Fifteen"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nEach sublevel is shifted by ΔE = m μ_B B, so the emitted photon energy is shifted by (m_final − m_initial) μ_B B = Δm μ_B B, which takes only the three values 0 and ±μ_B B. Nine counts the allowed m → m' pairs (1 + 2 + 3 + 2 + 1) and fifteen counts all 5 × 3 pairs; both mistake distinct transitions for distinct frequencies. Five is just the number of sublevels of the l = 2 level.\n\n90-SECOND SOLUTION\nThe photon energy depends only on Δm, and the selection rule allows three values of Δm. Any normal Zeeman line becomes a triplet no matter what l values are involved — answer three without counting sublevels.\n\nWHAT TO MEMORIZE\nNormal Zeeman effect: shift = Δm μ_B B with Δm = 0, ±1, so every line splits into three components."
      },

      // [OW/group & phase velocity]
      {
        "question": "Electromagnetic waves in a plasma obey ω² = ω_p² + c²k², where ω_p is a constant. At a frequency where the index of refraction is 0.60, the group velocity is most nearly (c = 3.0 × 10⁸ m/s)",
        "choices": [
          "1.1 × 10⁸ m/s",
          "1.8 × 10⁸ m/s",
          "3.0 × 10⁸ m/s",
          "5.0 × 10⁸ m/s",
          "It cannot be determined without the value of ω_p."
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nDifferentiating ω² = ω_p² + c²k² gives 2ω dω = 2c²k dk, so v_g = dω/dk = c²k/ω = c·(ck/ω) = cn = 0.60 × 3.0 × 10⁸ = 1.8 × 10⁸ m/s. The 5.0 × 10⁸ m/s choice is the phase velocity c/n, the standard slip of quoting v_p when v_g was asked; 1.1 × 10⁸ m/s is cn², from squaring the index twice. Nothing superluminal is carried here: v_p v_g = c², so v_p > c forces v_g < c.\n\n90-SECOND SOLUTION\nRecall v_p v_g = c² for this dispersion relation and read v_p = c/n straight off the definition of index; then v_g = cn immediately. If ω_p were really needed the index could not have been quoted, so eliminate the last choice on sight.\n\nWHAT TO MEMORIZE\nFor ω² = ω_p² + c²k² (also the waveguide relation with ω_c), v_p = c/n, v_g = cn, and v_p v_g = c²."
      },

      // [LM/signal transmission & impedance matching]
      {
        "question": "A short pulse is launched into one end of a 50 Ω coaxial cable whose far end is left open, and the reflected pulse returns to the launching end 200 ns later. Taking the signal speed in the cable to be 2.0 × 10⁸ m/s, the length of the cable is most nearly",
        "choices": [
          "10 m",
          "20 m",
          "30 m",
          "40 m",
          "60 m"
        ],
        "answer": "B",
        "explanation": "WORKED SOLUTION\nThe pulse travels the cable twice, so the one-way transit time is 100 ns and L = vt/2 = (2.0 × 10⁸)(1.0 × 10⁻⁷) = 20 m. The 40 m choice is the whole 200 ns treated as a one-way trip, the standard forgotten factor of 2; 30 m comes from using c instead of the slower signal speed in the dielectric. The 50 Ω is a red herring — the characteristic impedance sets how much of the pulse comes back, not when.\n\n90-SECOND SOLUTION\nRound trip means halve the time before multiplying: 100 ns × 2 × 10⁸ m/s = 20 m, and 10⁻⁷ × 10⁸ = 10 makes it a one-line mental product. Any choice built from 3 × 10⁸ is wrong because a speed was handed to you.\n\nWHAT TO MEMORIZE\nTime-domain reflectometry: L = vt/2 for a round trip. Signals in coax travel at roughly two-thirds of c, and an open end reflects with the same sign while a short reflects inverted; a cable terminated in its characteristic impedance reflects nothing."
      },

      // [CM/rocket & variable mass]
      {
        "question": "A rocket in free space starts from rest and burns fuel until its speed equals twice the exhaust speed relative to the rocket. The fraction of the initial total mass that was propellant is most nearly (take e ≈ 2.7)",
        "choices": [
          "0.50",
          "0.63",
          "0.75",
          "0.86",
          "0.95"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe rocket equation Δv = u ln(m₀/m) with Δv = 2u gives m₀/m = e² ≈ 7.4, so the surviving mass is about 0.14 of the original and the propellant fraction is about 0.86. The distractor 0.63 = 1 − 1/e is the answer for Δv = u; it comes from dropping the factor of 2 in the exponent.\n\n90-SECOND SOLUTION\ne² is a little over 7, so barely one seventh of the rocket is left at burnout. One seventh is 0.14, so the fuel fraction is just under 0.9.\n\nWHAT TO MEMORIZE\nΔv = u ln(m₀/m_final), and e ≈ 2.7, e² ≈ 7.4."
      },

      // [QM/compton scattering]
      {
        "question": "Monochromatic X-rays Compton-scatter from free electrons at rest. Consider: I. The wavelength shift at a given scattering angle does not depend on the incident wavelength. II. At a scattering angle of 90° the scattered photon and the recoil electron always carry away equal energies. III. The fraction of its energy the photon loses at a given angle grows as the incident photon energy is increased. Which are true?",
        "choices": [
          "I only",
          "III only",
          "I and II",
          "I and III",
          "I, II, and III"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nΔλ = (h/m_ec)(1 − cos θ) contains no reference to the incident wavelength, so I is true, and the fractional energy loss Δλ/λ' grows as λ shrinks, so III is true. Statement II holds only at one special energy: at 90° the scattered photon has E' = E/(1 + E/m_ec²), which equals E/2 only when E = m_ec² = 511 keV. Picking II is the error of reading a fixed wavelength shift as a fixed energy split.\n\n90-SECOND SOLUTION\nCompton's formula is a shift in wavelength, not in energy — that single fact settles I and kills II. Then check the visible-light limit: a 2 eV photon barely changes wavelength in relative terms and loses almost nothing, so the fractional loss must grow with energy, giving III.\n\nWHAT TO MEMORIZE\nΔλ = (h/m_ec)(1 − cos θ) with h/m_ec = 2.43 pm, maximum 2λ_C at 180°."
      },

      // [CM/hamiltonian]
      {
        "question": "A particle of mass m moves in one dimension with Hamiltonian H = p²/(2m) + U(x). For the quantity G = xp, the time derivative dG/dt is",
        "choices": [
          "0",
          "p²/(2m) − x dU/dx",
          "p²/m + x dU/dx",
          "p²/m − x dU/dx",
          "−x dU/dx"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nUse Hamilton's equations directly: dx/dt = ∂H/∂p = p/m and dp/dt = −∂H/∂x = −dU/dx, so dG/dt = (dx/dt)p + x(dp/dt) = p²/m − x dU/dx. The choice keeping p²/(2m) is the common slip of copying the kinetic energy instead of differentiating it, since dx/dt = p/m gives p·p/m = 2 × (kinetic energy), not the kinetic energy itself. The choice 0 assumes xp is conserved, which is true only on average over a full period of bounded motion.\n\n90-SECOND SOLUTION\nJust apply the product rule with ẋ = p/m and ṗ = −dU/dx; no Poisson brackets are needed. The force term must enter with a minus sign because ṗ = −dU/dx, which alone removes two options, and the kinetic piece is p·(p/m), which removes the ½.\n\nWHAT TO MEMORIZE\nHamilton's equations ẋ = ∂H/∂p, ṗ = −∂H/∂x. Time-averaging this same result over a bounded orbit, where ⟨dG/dt⟩ = 0, is exactly the virial theorem 2⟨T⟩ = ⟨x dU/dx⟩."
      },

      // [SR/relativistic collisions]
      {
        "question": "Protons in a beam strike protons at rest in a target, and a proton-antiproton pair is created in addition to the two original protons. Taking the proton rest energy to be 940 MeV, the minimum beam kinetic energy is most nearly",
        "choices": [
          "0.94 GeV",
          "1.9 GeV",
          "2.8 GeV",
          "5.6 GeV",
          "7.5 GeV"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nAt threshold the four final protons move together, so the invariant s equals (4m c²)². In the lab, s = (E + mc²)² − (pc)² = 2E mc² + 2(mc²)², and setting that equal to 16(mc²)² gives E = 7mc², i.e. a kinetic energy of 6mc² ≈ 6 × 940 MeV ≈ 5.6 GeV. Choice B, 1.9 GeV, is the classic error of paying only the rest energy of the new pair, 2mc², which ignores the kinetic energy the products must keep because momentum is conserved.\n\n90-SECOND SOLUTION\nMemorize the result for a fixed target: making a pair of mass equal to the beam particle's costs 6mc² of kinetic energy, not 2mc². If it is not memorized, note only that the answer must exceed 2mc² = 1.9 GeV by a large factor, which leaves 5.6 GeV or 7.5 GeV, and the threshold multiple is even.\n\nWHAT TO MEMORIZE\ns = (ΣE)² − (Σpc)² is invariant; evaluate it in the lab and again in the centre-of-momentum frame where all products are at rest. For p + p → p + p + p + p̅ on a fixed target, T_threshold = 6m_p c²."
      },

      // [SP/superconductivity]
      {
        "question": "A superconducting ring of area 1.0 × 10⁻⁴ m² encloses a uniform trapped field of 2.0 × 10⁻⁵ T. Taking h = 6.63 × 10⁻³⁴ J·s and e = 1.6 × 10⁻¹⁹ C, the number of flux quanta threading the ring is most nearly",
        "choices": [
          "1 × 10³",
          "2 × 10⁵",
          "5 × 10⁵",
          "1 × 10⁶",
          "4 × 10⁶"
        ],
        "answer": "D",
        "explanation": "WORKED SOLUTION\nThe trapped flux is Φ = BA = 2.0 × 10⁻⁹ Wb, and the superconducting flux quantum is Φ₀ = h/2e = 6.63 × 10⁻³⁴/3.2 × 10⁻¹⁹ ≈ 2.1 × 10⁻¹⁵ Wb, so n = Φ/Φ₀ ≈ 1 × 10⁶. The choice 5 × 10⁵ is the classic error of using h/e instead of h/2e — forgetting that the current is carried by Cooper pairs of charge 2e, which halves the quantum and doubles the count.\n\n90-SECOND SOLUTION\nMemorize Φ₀ ≈ 2 × 10⁻¹⁵ Wb and the problem is one division: 2 × 10⁻⁹ divided by 2 × 10⁻¹⁵ = 10⁶. If you only recall h/e ≈ 4 × 10⁻¹⁵ Wb, remember pairing and halve it before dividing.\n\nWHAT TO MEMORIZE\nΦ₀ = h/2e ≈ 2.07 × 10⁻¹⁵ Wb, and flux through a superconducting loop is quantized in units of it. The 2e is the whole physics content: it is direct evidence for Cooper pairing."
      }

    ]
  }
];
