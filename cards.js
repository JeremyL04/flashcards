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
        "explanation": "The impulse J must satisfy both laws at once. Linear: J = Mv_cm. Angular about the pivot: Jd = I_pivot·ω = (ML²/3)ω. Rolling without slipping about the pivot means v_cm = ωL/2, so J = MωL/2, and substituting gives (MωL/2)d = ML²ω/3, hence d = 2L/3. The trap is L/2, the centre of mass — a blow there does produce a reaction at the pivot, because the rod's rotation about the pivot demands a specific relation between v_cm and ω that only d = 2L/3 satisfies. ⏱ 90-second route: memorize I = ML²/3 for a rod about its end, and nothing else. Everything follows from writing the two impulse equations and eliminating ω. If you have seen the term 'centre of percussion' (the sweet spot of a bat), 2L/3 is recall and the whole question is 15 seconds."
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
        "explanation": "The virial theorem for a force varying as r⁻² gives 2⟨T⟩ = −⟨U⟩. Combining with ⟨T⟩ + ⟨U⟩ = E eliminates ⟨U⟩: 2⟨T⟩ = −(E − ⟨T⟩), so ⟨T⟩ = −E, a positive quantity as required. The tempting wrong answer is −E/2, which comes from setting ⟨T⟩ = ⟨U⟩ as one would for a harmonic potential rather than a Coulomb one. ⏱ 90-second route: memorize the virial relation 2⟨T⟩ = −⟨U⟩ for inverse-square attraction, or just memorize the circular-orbit result T = −E/2·2 = −E and trust that averaging preserves it. The sign check is free inference: ⟨T⟩ must come out positive, which kills −E/2 only if you also know the factor, but kills 2E and E/2 immediately."
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
        "explanation": "Working in axes tilted with the slope, gravity has components −g sin α along the slope and −g cos α perpendicular to it, and the standard flat-ground result says the optimum is 45° from the 'floor' — here the slope itself. Adding back the slope's own tilt gives α + 45°/1 measured from the slope, which is 45° + α/2 from the horizontal once the algebra is done properly. The trap is 45° + α, which is what you get by naively adding the full slope angle instead of bisecting. ⏱ 90-second route: memorize only that the optimum bisects the angle between the slope and the vertical. Then infer: for α = 0 the answer must reduce to 45°, which eliminates 90° − α and 45° + α is only eliminated by a second check — take α = 90° (firing straight up a wall), where the answer must be 90°, and only 45° + α/2 gives it. Limit-checking the candidate formulas is faster than deriving."
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
        "explanation": "The length increases by ΔL/L = αΔθ = (1.2 × 10⁻⁵)(20) = 2.4 × 10⁻⁴. Since T ∝ √L, the fractional change in period is half of that, 1.2 × 10⁻⁴. A longer period means fewer ticks, so the clock runs slow by (1.2 × 10⁻⁴)(86,400 s) ≈ 10 s per day. The trap is 21 s, which is what you get by forgetting the factor of ½ from the square root. ⏱ 90-second route: memorize T = 2π√(L/g) and the expansion law ΔL = LαΔθ; both are standard. The rest is pure inference: the square root halves the fractional change, and 86,400 s/day is worth knowing cold. The sign — slow, not fast — is inference too: longer pendulum, longer swing, fewer counted seconds."
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
        "explanation": "Momentum is zero before and after, so the two blocks carry equal and opposite momenta of magnitude p. Writing kinetic energy as p²/2m shows it is inversely proportional to mass at fixed momentum, so the lighter block, with half the mass, carries twice the kinetic energy: the ratio is 2. The trap is ½, which is what you get by assuming equal speeds instead of equal momenta. ⏱ 90-second route: memorize the form K = p²/2m — it is the single most useful rewriting of kinetic energy on this exam. Everything else is inference: zero total momentum forces equal |p|, and then the ratio is just the inverse mass ratio. No numbers needed."
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
        "explanation": "The centre of the sphere moves on a circle of radius (R − r), and rolling adds rotational inertia, so the effective mass is increased by the factor (1 + I/mr²) = 1 + 2/5 = 7/5. The period is therefore that of a simple pendulum of length (R − r) stretched by √(7/5), giving 2π√(7(R − r)/5g). The trap is the first choice, the pure pendulum answer, which ignores the energy stored in rotation. ⏱ 90-second route: memorize I = ⅖mr² for a solid sphere and the general rolling-oscillation rule that the period picks up a factor √(1 + I/mr²). Then infer: rolling always makes things slower, so the answer must exceed the plain pendulum period, which immediately eliminates the 5/7 and 2/3 versions. That single inference leaves only one plausible choice."
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
        "explanation": "The parallel-axis theorem adds Md² where d is the distance between the two parallel axes. A tangent line is one radius away from the central diameter, so I = ⅖MR² + MR² = 7/5 MR². The trap is 12/5 MR², which comes from mistakenly using d = 2R, the diameter, rather than the radius. ⏱ 90-second route: memorize ⅖MR² for a solid sphere and the parallel-axis theorem I = I_cm + Md². Both are recall you cannot avoid. The only inference is recognizing that 'tangent' means the shift is R, not 2R — sketch it for two seconds rather than trusting instinct."
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
        "explanation": "Critical damping is the boundary between oscillatory and non-oscillatory return, and occurs when the discriminant of the characteristic equation vanishes: b = 2√(mk). Here 2√(0.50 × 200) = 2√100 = 20 kg/s. The trap is 10 kg/s, which is √(mk) without the factor of 2, and 40 kg/s, which comes from using 2mk under no root at all. ⏱ 90-second route: memorize b_crit = 2√(mk), equivalently β = ω₀ in the standard notation where β = b/2m. That is the whole question. If you blank on the factor of 2, you can recover it in about twenty seconds by writing mẍ + bẋ + kx = 0, trying x = e^(λt), and demanding the two roots coincide."
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
        "explanation": "The force is the negative gradient: F_x = −∂U/∂x = −ky and F_y = −∂U/∂y = −kx. At (a, a) both components equal −ka, so the magnitude is √2 ka and the force points back toward the origin along the diagonal. The trap is ka, from computing only one component and forgetting that the gradient has two. ⏱ 90-second route: memorize F = −∇U — this one relation is the entire question. The inference is mechanical: differentiate twice, evaluate, add in quadrature. Note the dimensional check that kills ka² instantly: U has units of energy, so k here carries units of energy per area, and force must go as ka, not ka²."
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
        "explanation": "Inside a uniform sphere only the enclosed mass acts, so g falls linearly: g(d) = g(1 − d/R). Outside, g ∝ 1/r², so for small h, g(h) = g(1 + h/R)⁻² ≈ g(1 − 2h/R). Setting the two equal gives d = 2h — gravity falls off twice as fast going up as going down. The trap is d = h, which assumes the two behaviours are symmetric. ⏱ 90-second route: memorize the two behaviours, linear inside and inverse-square outside — this is a standard result worth having cold. The rest is one binomial expansion, (1 + x)⁻² ≈ 1 − 2x, which is the most-used approximation on this exam. The whole question is really a test of whether you know that factor of 2 exists."
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
        "explanation": "An Amperian loop of radius r between the conductors encloses only the inner current, so B = μ₀I/2πr = (2 × 10⁻⁷)(5.0)/(2.0 × 10⁻³) = 5.0 × 10⁻⁴ T. The return current in the shell lies outside the loop and contributes nothing here — that is the trap behind the 'zero' choice, which is the correct answer only outside the cable entirely. ⏱ 90-second route: memorize B = μ₀I/2πr for a long straight current, and the shortcut μ₀/2π = 2 × 10⁻⁷ exactly, which turns this into one division. The inference is Ampère's law's central lesson: only enclosed current matters, so a coaxial cable is just a wire until you step outside the shell."
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
        "explanation": "The magnetic energy density is u = B²/2μ₀ = (0.10)²/(2 × 4π × 10⁻⁷) = 0.010/(2.51 × 10⁻⁶) ≈ 4.0 × 10³ J/m³. The trap is 8.0 × 10³, from dropping the factor of 2 in the denominator — the same slip that turns ½CV² into CV². ⏱ 90-second route: memorize the pair u_E = ½ε₀E² and u_B = B²/2μ₀; they are mirror images and are best learned together. Everything else is arithmetic. A useful sanity anchor: a 1 T field stores about 4 × 10⁵ J/m³, so scaling down by a factor of 100 in B means a factor of 10⁴ in energy density."
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
        "explanation": "An ideal transformer conserves power, so I_p V_p = I_s V_s. The secondary voltage is 120 × (100/1200) = 10 V, so the secondary delivers 60 W, and the primary must draw 60 W at 120 V, giving 0.50 A. Equivalently the current ratio is the inverse of the turns ratio: 6.0 × (100/1200) = 0.50 A. The trap is 72 A, from applying the turns ratio in the wrong direction. ⏱ 90-second route: memorize only 'voltage scales with turns, current scales inversely'. Then infer everything from power conservation, which is the safer route because it is impossible to invert by accident: a step-down transformer lowers voltage and therefore must raise current on the secondary side, so the primary current is the small one."
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
        "explanation": "The moving magnet changes the flux through each ring-shaped element of the tube wall, driving eddy currents whose own field opposes the change and therefore retards the magnet. The retarding force grows with speed, so the magnet settles at a terminal velocity where magnetic drag balances gravity, and the eddy currents dissipate the lost potential energy as resistive heating. The trap is the claim that the magnet falls freely, which confuses 'not ferromagnetic' with 'not conducting' — induction needs only a conductor. ⏱ 90-second route: memorize nothing beyond Lenz's law. The chain of inference is short: changing flux drives current, current opposes the change, opposition grows with speed, speed therefore saturates. Energy conservation then tells you where the gravitational energy went, which is what distinguishes the correct choice from the merely plausible one."
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
        "explanation": "Mutual inductance is defined so that ε₂ = M dI₁/dt, giving (0.50)(4.0) = 2.0 V. Note that the emf depends on the rate of change of current, not on the current itself, so the actual current in the first coil is irrelevant and is deliberately not supplied. The trap is 0.13 V, from dividing by the rate instead of multiplying. ⏱ 90-second route: memorize ε = M dI/dt and its self-inductance twin ε = L dI/dt; they are the same statement applied to two circuits or one. The whole problem is a single multiplication. The inference worth making is dimensional: henries times amperes per second gives volts directly, which confirms the operation is multiplication and rules out the reciprocal trap without any physical reasoning."
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
        "explanation": "The skin depth is δ = √(2/μσω), so δ ∝ ω⁻¹/², and increasing the frequency by 100 reduces the penetration depth by √100 = 10. The trap is 1/100, from assuming a linear rather than square-root dependence. ⏱ 90-second route: memorize the scaling δ ∝ 1/√f, not the full formula — the constants almost never matter on this exam. If even the scaling is gone, you can infer the exponent from the diffusion character of fields in a conductor, where lengths always go as the square root of a time; that argument also tells you δ ∝ 1/√σ, which is the other half of what this topic ever asks."
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
        "explanation": "Each successive multipole potential carries one more power of 1/r: monopole V ∝ 1/r, dipole 1/r², quadrupole 1/r³. The field is the gradient of the potential, adding one further power, so the quadrupole field falls as 1/r⁴. The trap is 1/r³, which is the quadrupole potential, or equivalently the dipole field — confusing V with E by one power is the single most common error in this topic. ⏱ 90-second route: memorize one anchor, that a dipole field goes as 1/r³, and count from there. The inference is just bookkeeping: quadrupole is one order beyond dipole, so add a power. Writing the ladder V: 1/r, 1/r², 1/r³ and E: 1/r², 1/r³, 1/r⁴ in the margin takes ten seconds and removes all ambiguity."
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
        "explanation": "For an empty solenoid B = μ₀nI = (1.26 × 10⁻⁶)(1000)(0.20) = 2.5 × 10⁻⁴ T. Filling the core multiplies this by the relative permeability: 500 × 2.5 × 10⁻⁴ ≈ 0.13 T. The trap is the first choice, the empty-core value, which is what you get by ignoring the core entirely. ⏱ 90-second route: memorize B = μ₀nI and the rule that a linear magnetic medium simply replaces μ₀ by μ_rμ₀. The inference worth making is directional: μ_r > 1 means the material is paramagnetic or ferromagnetic and concentrates flux, so the field must go up, not down — that alone eliminates two choices before any arithmetic."
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
        "explanation": "The stored energy before is ½CV² = ½(2.0 × 10⁻⁶)(100)² = 10 mJ. Charge is conserved at 2.0 × 10⁻⁴ C and now sits on 5.0 μF, so the common voltage is 40 V and the energy after is ½(5.0 × 10⁻⁶)(40)² = 4.0 mJ. The difference, 6.0 mJ, is dissipated in the connecting wires and as radiation no matter how small the resistance. The trap is 'zero', which follows from wrongly assuming energy is conserved because charge is. ⏱ 90-second route: memorize U = ½CV² = Q²/2C, and the rule that in this configuration charge is the conserved quantity, not voltage or energy. The whole calculation is faster in the Q²/2C form: the same Q on a larger C means less energy, so the answer is 10 mJ × (1 − 2/5) = 6 mJ in one step."
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
        "explanation": "The levels are E_n = n²h²/8mL², giving E₁ ≈ 1.5 eV, so the n = 2 to n = 1 gap is 3E₁ ≈ 4.5 eV. Using λ = 1240 eV·nm / E gives λ ≈ 270 nm. The trap is 82 nm, which is what you get by using E₂ alone rather than the difference E₂ − E₁. ⏱ 90-second route: memorize E_n = n²h²/8mL² and, far more usefully, hc = 1240 eV·nm — that conversion turns every photon question on this exam into a single division. The inference is that transitions depend on differences, so the factor is 4 − 1 = 3, never 4. Estimating E₁ ≈ 1.5 eV for a half-nanometre box is worth committing to memory as a sanity anchor for the whole topic."
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
        "explanation": "The shift is Δλ = λ_C(1 − cos θ), which is largest for backscattering at θ = 180°, where 1 − cos θ = 2, giving Δλ = 2λ_C ≈ 4.9 × 10⁻¹² m. The trap is 2.4 × 10⁻¹² m, the Compton wavelength itself, which is the shift at 90° rather than the maximum. ⏱ 90-second route: memorize Δλ = λ_C(1 − cos θ) and λ_C = 2.43 pm. Then the only inference is that cos θ is bounded below by −1. Note that the shift is additive and independent of the incident wavelength, which is why this effect is invisible for visible light and obvious for X-rays — a fact worth carrying, since it is the qualitative version of the same question."
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
        "explanation": "Moseley's law says the Kα energy scales as (Z − 1)², the screening constant of 1 accounting for the second K-shell electron. The ratio is ((25 − 1)/(13 − 1))² = 2² = 4, so the energy is 4 × 1.5 = 6.0 keV. The trap is 5.6 keV, obtained from (25/13)² without the screening correction, and 2.9 keV, from scaling linearly in Z. ⏱ 90-second route: memorize Moseley's law in the form E ∝ (Z − 1)². That is the entire question — everything else is one ratio. The screening term matters here only because 12 and 24 differ by exactly a factor of 2, which the designer chose deliberately; recognizing that the numbers were picked to make (Z − 1) clean is itself a hint that you are meant to use it."
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
        "explanation": "The radial function has n − l − 1 nodes, here 4 − 1 − 1 = 2. The angular part contributes l = 1 further nodal surfaces, for a total of n − 1 = 3 nodes overall, which is the trap answer 3 — the question asks specifically for radial nodes. ⏱ 90-second route: memorize the single formula n − l − 1 for radial nodes, and its companion, l angular nodes, summing to n − 1 in total. There is no derivation available in 90 seconds, so this is pure recall; the only inference is reading carefully enough to notice which of the three counts is being requested. Questions in this family almost always hinge on that distinction rather than on the arithmetic."
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
        "explanation": "For a given l there are 2l + 1 values of m_l, here 5, and each accommodates two electrons of opposite spin, giving 10. This is the 3d-like shell capacity, which is why the transition-metal rows are ten elements wide. The trap is 32, the total capacity of the whole n = 4 shell, which answers a question that was not asked. ⏱ 90-second route: memorize the capacity 2(2l + 1) per subshell, or equivalently the familiar s/p/d/f capacities 2/6/10/14 — recognizing l = 2 as 'd' makes this instant. The value of n is a deliberate red herring: capacity depends only on l. Spotting the irrelevant given is the actual skill being tested."
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
        "explanation": "For a real ψ, the expectation ⟨p⟩ = ∫ψ(−iħ dψ/dx)dx is −iħ times a real integral, so it is purely imaginary; but ⟨p⟩ must be real because p is Hermitian, and the only number that is both is zero. Physically, a bound stationary state is not going anywhere, so its average momentum must vanish. The trap is ħk, which applies to a travelling plane wave — a state that is neither bound nor real. ⏱ 90-second route: memorize the fact that bound stationary states can be chosen real and consequently carry zero average momentum. The reality-plus-Hermiticity argument is worth being able to reconstruct, because it generalizes: any observable whose operator is purely imaginary in a real basis has zero expectation value in a real state."
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
        "explanation": "λ = h/p = 6.6 × 10⁻³⁴/(1.0 × 1.0) ≈ 6.6 × 10⁻³⁴ m, so the order is 10⁻³⁴ m — some twenty orders of magnitude below a nuclear diameter, which is exactly why wave behaviour is invisible for macroscopic objects. The trap is 10⁻¹⁰ m, the atomic scale, which is where thermal-electron wavelengths land and is the number most students have memorized. ⏱ 90-second route: memorize λ = h/p and nothing else; with mass and speed both unity the answer is literally Planck's constant in metres. The inference worth keeping is the comparison: this question is really asking whether you understand why the correspondence principle works, and the numerical answer is a byproduct."
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
        "explanation": "The electric-dipole selection rule requires Δl = ±1, because the photon carries one unit of angular momentum. Checking each: p→s, d→p, f→d and p→s all change l by one, but 3s → 2s has Δl = 0 and is forbidden. Such transitions do occur through much weaker higher-order processes, which is why metastable states exist. ⏱ 90-second route: memorize Δl = ±1 — this single rule answers essentially every selection-rule question that appears. The inference is the letter-to-l dictionary s/p/d/f = 0/1/2/3, which you must have automatic. Scanning five choices for the one that fails takes about fifteen seconds; note that Δn is unconstrained, so the changing principal quantum numbers are deliberate noise."
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
        "explanation": "The Bohr radius is a₀ = 4πε₀ħ²/me², inversely proportional to the mass of the orbiting particle, so the muon's orbit is smaller by 207: 5.3 × 10⁻¹¹/207 ≈ 2.6 × 10⁻¹³ m. This is comparable to nuclear dimensions, which is precisely why muonic atoms are used to probe nuclear charge radii. The trap is the last choice, obtained by multiplying rather than dividing by 207. ⏱ 90-second route: memorize a₀ ∝ 1/m and its partner E ∝ m, which together handle every 'heavy electron' variant — muonic atoms, positronium, excitons in semiconductors. The direction is pure inference and worth confirming physically: a heavier particle is harder to spread out, so it orbits closer in. That check alone eliminates three of the five choices."
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
        "explanation": "The energy is (n_x + n_y + n_z + 3/2)ħω, so the first excited level has n_x + n_y + n_z = 1, achieved by (1,0,0), (0,1,0) and (0,0,1) — three states. The trap is 5, which is the degeneracy 2l + 1 for l = 2 and belongs to the second excited level, not the first. ⏱ 90-second route: memorize that the 3D isotropic oscillator's energy depends only on the sum n_x + n_y + n_z. Then the counting is pure inference: the number of ways to write N as an ordered sum of three non-negative integers, which for N = 1 you can enumerate faster than you can recall the general formula (N + 1)(N + 2)/2. Enumerating beats remembering here."
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
        "explanation": "Ehrenfest's theorem gives d⟨A⟩/dt = (i/ħ)⟨[H, A]⟩ for an operator with no explicit time dependence, and evaluating [H, x] with H = p²/2m + V leaves only the kinetic term, yielding d⟨x⟩/dt = ⟨p⟩/m. The trap is −⟨dV/dx⟩, which is the correct expression for d⟨p⟩/dt, the second half of Ehrenfest's pair. ⏱ 90-second route: memorize the pair d⟨x⟩/dt = ⟨p⟩/m and d⟨p⟩/dt = −⟨dV/dx⟩ together, since they are the quantum restatement of Newton's laws and are always tested as a matched set. No derivation is needed. The only inference is dimensional: iħ⟨p⟩ has the wrong units for a velocity, which kills it on sight."
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
        "explanation": "The Maxwell-Boltzmann distribution gives v_rms = √(3kT/m) and v_mp = √(2kT/m), so the ratio is √(3/2) ≈ 1.22. The trap is 1.13, which is v_avg/v_mp = √(8/π)/√2 — the three characteristic speeds are close together and easily confused. ⏱ 90-second route: memorize the three coefficients under the root: 2 for most probable, 8/π for mean, 3 for rms, always in that increasing order. The ordering itself is inference — the rms weights fast molecules most heavily, so it must be the largest — and that ordering alone eliminates 1.00 and anything below it. Then it is one square root."
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
        "explanation": "At high temperature the Boltzmann factor e^(−ε/kT) approaches 1, so both states become equally likely and each particle has average energy ε/2, giving Nε/2 in total. The trap is Nε, which would require every particle to sit in the upper state — impossible in equilibrium, since Boltzmann statistics never populate a higher level more than a lower one at positive temperature. ⏱ 90-second route: memorize the two-level partition function Z = 1 + e^(−ε/kT), but the limit is faster by inference: infinite temperature means equal populations, so the mean energy is the unweighted average of the level energies. That reasoning generalizes instantly to any finite set of levels, and it also tells you the heat capacity must vanish at both temperature extremes — the Schottky anomaly."
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
        "explanation": "Equipartition assigns ½R per mole per active quadratic degree of freedom: three translational and two rotational give 5R/2. The trap is 7R/2, which includes the two vibrational degrees of freedom (kinetic and potential) that only switch on at temperatures high enough to excite the vibrational quantum. ⏱ 90-second route: memorize ½R per active degree of freedom and the count 3 + 2 for a rigid diatomic. The inference that earns the point is the freezing-out argument: vibrational quanta are large compared with kT at 300 K, so those modes are inaccessible, which is exactly why classical equipartition failed historically and why this question specifies the temperature regime at all."
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
        "explanation": "The mean free path is λ = 1/(√2 nσ), depending on number density but not directly on speed or temperature. At fixed temperature the ideal gas law makes n proportional to P, so halving the pressure halves the density and doubles the mean free path. The trap is 'is halved', from confusing λ's inverse dependence on density with a direct one. ⏱ 90-second route: memorize λ ∝ 1/n and n = P/kT; the √2 and the cross-section are constants that cancel in any ratio question, so do not waste time on them. The inference is the physical picture: fewer molecules in the way means longer free flights, which is why a good vacuum has a mean free path of metres rather than nanometres."
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
        "explanation": "Free expansion does no work and transfers no heat, so the temperature of an ideal gas is unchanged, but entropy is a state function and can be computed along any reversible path connecting the same endpoints — an isothermal expansion gives ΔS = nR ln 2 = 2(8.31)(0.693) ≈ 12 J/K. The trap is 'zero', which follows from the true statement Q = 0 combined with the false assumption that ΔS = Q/T applies to an irreversible process. ⏱ 90-second route: memorize ΔS = nR ln(V₂/V₁) for isothermal expansion of an ideal gas, and ln 2 ≈ 0.69. The inference that carries the question is that entropy is a state function, so you may substitute a reversible path; recognizing that free expansion is irreversible and therefore must increase entropy rules out 'zero' before any calculation."
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
        "explanation": "The chromatic resolving power of a grating is R = λ/Δλ = mN, here 2 × 5,000 = 10,000, so Δλ = 590/10,000 = 0.059 nm — comfortably enough to split the sodium D doublet, whose separation is about 0.6 nm. The trap is 0.12 nm, from using N alone and forgetting the order, or 0.59 nm from dropping a factor of ten. ⏱ 90-second route: memorize R = mN. That is the whole question; the rest is one division. Worth carrying alongside it is the companion formula for a prism, R = b(dn/dλ), and the fact that gratings beat prisms in practice precisely because N can be made enormous."
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
        "explanation": "The first minimum lies at sin θ = λ/a, so on a distant screen it is displaced by Lλ/a = (2.0)(6.0 × 10⁻⁷)/(1.0 × 10⁻⁴) = 0.012 m. The central maximum spans both sides, so its full width is twice that, 2.4 cm. The trap is 1.2 cm, the half-width, which is what the formula gives directly and what most students stop at. ⏱ 90-second route: memorize a sin θ = mλ for single-slit minima — note it is minima, the opposite of the double-slit condition, and mixing the two up is the most common error in this topic. The factor of 2 for full width is inference from reading the question. The small-angle step, sin θ ≈ y/L, is automatic at these scales."
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
        "explanation": "Reflection from a boundary with a denser medium inverts the pulse, exactly as reflection from a rigid wall does, since the heavy string is the limiting case of a fixed end. Some energy is transmitted into the heavy string, so the reflected pulse is smaller than the incident one. The trap is 'upright and smaller', which describes reflection at a boundary with a lighter string — the opposite ordering of densities. ⏱ 90-second route: memorize the rule that reflection off a denser medium inverts and reflection off a lighter one does not, and anchor it to the two limiting cases you can picture: a string tied to a wall inverts, a string ending in a free ring does not. The amplitude part is inference from energy conservation. The identical rule governs light reflecting off a higher-index medium, which is why thin-film problems carry a π shift at exactly one surface."
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
        "explanation": "In normal dispersion the index of refraction rises as wavelength falls, so violet light sees a larger n, refracts more strongly at both surfaces, and emerges with the greater deviation. The choice invoking a faster speed in glass inverts the physics: a larger index means a slower phase speed in the medium, not a faster one. ⏱ 90-second route: memorize the direction of normal dispersion — n larger for blue — and anchor it to the rainbow, where violet sits on the inside of the primary bow because it bends most. No formula is required. The only inference is connecting a larger n to a larger deviation through Snell's law, which you can confirm in five seconds by imagining n → ∞ and watching the ray bend hard toward the normal."
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
        "explanation": "The rate falls by a factor of 8 = 2³, so three half-lives have elapsed in 30 minutes, giving a half-life of 10 minutes. The trap is 3.75 minutes, from dividing 30 by 8 as though the decay were linear rather than exponential. ⏱ 90-second route: memorize nothing beyond the definition of half-life; the trick is to express the ratio as a power of 2 rather than reaching for N = N₀e^(−λt). Recognizing 800/100 = 8 = 2³ makes this a mental-arithmetic problem. When the ratio is not a clean power of two, then use the exponential form with λ = ln2/T½, but check first — the exam usually chooses clean ratios deliberately."
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
        "explanation": "Bragg's law is 2d sin θ = mλ, so for m = 1, sin θ = 0.15/(2 × 0.20) = 0.375 and θ ≈ 22°. The trap is 49°, which is what you get by using cos θ, or by measuring the angle from the normal rather than from the planes — Bragg's angle is defined from the plane, unlike every other angle in optics. ⏱ 90-second route: memorize 2d sin θ = mλ and, crucially, that θ is measured from the crystal plane, not the normal. The rest is one inverse sine. A quick sanity check: first-order diffraction requires λ ≤ 2d, which is why X-rays and not visible light are used for crystals — if the arithmetic ever hands you sin θ > 1, that is the physics telling you the wavelength is too long."
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
        "explanation": "In the Debye low-temperature regime the lattice heat capacity goes as T³, so halving T reduces C by 2³ = 8. The trap is ½, which assumes the classical Dulong-Petit behaviour where C is constant — that limit applies far above the Debye temperature, not below it. The specification 'non-metallic' matters: in a metal the electronic term γT would dominate at sufficiently low T and give a linear dependence instead. ⏱ 90-second route: memorize the two limits — Dulong-Petit C = 3R above, Debye C ∝ T³ below — and the metallic addition of a linear γT term. Then this is one cube. The word 'non-metallic' is not decoration; noticing it is the difference between the T³ answer and the linear one."
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
        "explanation": "A meson is a quark-antiquark pair, which automatically gives baryon number ⅓ − ⅓ = 0. To reach charge +1 we need +⅔ from a u and +⅓ from an anti-d, so the content is ud̄. The trap is uud, which is the proton — a baryon with three quarks and baryon number 1, failing the stated condition. ⏱ 90-second route: memorize the quark charges (+⅔ for u, c, t and −⅓ for d, s, b) and the rule that mesons are qq̄ while baryons are qqq. The rest is inference: baryon number 0 forces a two-quark combination, which eliminates one choice instantly, and then only charge arithmetic remains. Note that uū and dd̄ are neutral, so the charge condition finishes the job in seconds."
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
        "explanation": "The wave has zero mean, which kills the constant term, and it satisfies the half-wave antisymmetry f(t + T/2) = −f(t), a condition that annihilates every even harmonic. What survives is the odd harmonics, with amplitudes falling as 1/n — the familiar sine, third, fifth, and so on. The trap is 'all harmonics', which would be true for a general asymmetric waveform such as a sawtooth. ⏱ 90-second route: memorize the result for the square wave directly — odd harmonics, amplitudes as 1/n — since it appears constantly in electronics and signal questions. If you would rather infer it, check the symmetry: shifting by half a period flips the sign, and only odd harmonics do that. The 1/n falloff is also worth carrying, because it explains why a square wave rings when passed through a band-limited amplifier."
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
        "explanation": "In Earth's frame the trip takes 8.0/0.80 = 10 years. The spacecraft's clock measures proper time, shorter by the factor 1/γ = √(1 − 0.64) = 0.60, giving 6.0 years. Equivalently, in the ship's frame the distance is contracted to 4.8 light-years and is covered at 0.80c in 6.0 years — the two pictures must agree. The trap is 10 years, the Earth-frame time, and 13 years, obtained by multiplying by γ instead of dividing. ⏱ 90-second route: memorize γ = 5/3 for v = 0.80c — this speed appears constantly and its γ is worth knowing without computing. Then the only decision is which way the factor goes, and the reliable inference is that the travelling clock always reads less. Cross-checking with the length-contraction picture takes ten seconds and catches sign errors."
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
        "explanation": "The invariant interval is s² = c²Δt² − Δx² = 9 − 25 = −16 in units of light-seconds squared, which is negative and therefore spacelike. Spacelike separation means no signal at or below light speed can connect the events, so they cannot be causally related and their time order is frame-dependent; there is, however, a frame in which they are simultaneous. The trap is the first choice, which is the property of timelike separation, not spacelike. ⏱ 90-second route: memorize the classification — timelike means same place is achievable, spacelike means same time is achievable, and lightlike means neither. Computing s² takes ten seconds. The inference chain is worth rehearsing once: spacelike implies no causal link, which implies the ordering is not absolute, which is exactly why relativity does not violate causality."
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
        "explanation": "Kinetic energy is (γ − 1)mc², so setting it equal to mc² gives γ = 2, and from γ = 1/√(1 − v²/c²) we get v = c√(1 − ¼) = (√3/2)c ≈ 0.87c. The trap is 0.71c, which is where γ = √2 and the kinetic energy is only about 0.41mc². ⏱ 90-second route: memorize the γ-to-v shortcut v/c = √(1 − 1/γ²), and the handful of common pairs: γ = 2 at 0.87c, γ = 5/3 at 0.80c, γ = 7 at 0.99c. The only inference is translating 'kinetic energy equals rest energy' into γ = 2, which is the step the question is really testing — total energy is then 2mc², a fact worth stating to yourself explicitly to avoid the off-by-one that produces 0.71c."
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
        "explanation": "A straight line on log-log axes means log y = m log x + b, which exponentiates to y = 10^b x^m, a power law. The slope gives the exponent 1.5 and the intercept gives the prefactor 10^0.30 ≈ 2.0. The trap is 0.30x^1.5, which uses the intercept directly instead of raising ten to it. ⏱ 90-second route: memorize the two diagnostic rules — log-log straight line means power law with the slope as the exponent, semi-log straight line means exponential. That distinction alone eliminates the two exponential choices here. The prefactor requires knowing 10^0.3 ≈ 2, a value worth memorizing because it recurs constantly, being the same fact as 'a factor of 2 is 3 dB'."
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
        "explanation": "Surface tension has dimensions of mass per time squared, so ρR³/σ has dimensions of (mass)(mass⁻¹)(time²) = time², and its square root is the only combination of the three quantities with the dimensions of time. The trap is the reciprocal, √(σ/ρR³), which is a frequency rather than a period. ⏱ 90-second route: memorize that surface tension is force per length, hence mass per time squared — that single conversion is the crux. Then the inference is mechanical: ρR³ is the drop's mass, so the group is √(mass/σ), which is the same structure as √(m/k) for a spring. Recognizing surface tension as playing the role of a spring constant makes the answer obvious without any algebra, and it also tells you the period grows as the drop gets bigger."
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
        "explanation": "The ideal op-amp holds its inverting input at virtual ground, so the input current is 0.20/10 kΩ = 20 μA, all of which flows through the feedback resistor, producing a drop of 20 μA × 100 kΩ = 2.0 V below ground: the output is −2.0 V. Equivalently the gain is −R_f/R_in = −10. The trap is +2.0 V, which has the right magnitude but ignores the inversion the configuration is named for. ⏱ 90-second route: memorize the two ideal-op-amp rules — no current into the inputs, and negative feedback drives the inputs to equal voltage — and the inverting gain −R_f/R_in follows in seconds. The sign is the entire trap here. The virtual-ground derivation is worth being able to reproduce, because the same two rules give every other standard configuration without further memorization."
      }

    ]
  },

  {
    "name": "Practice Test 4",
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
        "explanation": "In the cyclist's frame the rain acquires a horizontal component of 3.0 m/s directed backward, added to its 4.0 m/s downward component, so the angle from the vertical satisfies tan θ = 3.0/4.0 and θ ≈ 37°. The trap is 53°, the complement, which is what you get by measuring from the horizontal instead of the vertical as the question specifies. ⏱ 90-second route: memorize nothing — this is pure vector addition, and the 3-4-5 triangle is chosen so the angle is one of the two you should know by sight, 37° and 53°. The only real decision is which leg is opposite the angle being asked for, so read the phrase 'from the vertical' before computing. Sketching the two vectors takes ten seconds and eliminates the complement error entirely."
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
        "explanation": "Moving downward while slowing means the acceleration points upward, so the normal force must exceed the weight: N = m(g + a) = 60(11.8) ≈ 710 N. The trap is 470 N, which is m(g − a) and applies to an elevator that is speeding up downward — the same velocity direction but the opposite acceleration. ⏱ 90-second route: memorize N = m(g ± a) and spend your time deciding the sign, which is the entire question. The reliable inference is to ignore the velocity completely and ask only which way the acceleration points: slowing while moving down means accelerating up, so you feel heavier. Anyone who reasons from 'the elevator is going down' rather than from the acceleration picks the wrong sign."
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
        "explanation": "At constant speed the engine's power goes entirely into gaining gravitational potential energy. The vertical speed is 20 × 0.050 = 1.0 m/s, so P = mgv_vertical = (1,000)(9.8)(1.0) ≈ 9.8 kW. The trap is 98 kW, from using the full speed of 20 m/s rather than its vertical component. ⏱ 90-second route: memorize P = Fv and, more usefully, the habit of computing the rate of energy change directly. The inference is that only the vertical component of velocity matters against gravity, and a 5% grade means the vertical speed is 5% of the road speed. Constant speed is the key phrase: it tells you kinetic energy is not changing, so the entire output is going into height."
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
        "explanation": "Gravity's component along the incline is constant, so it merely shifts the equilibrium position to a new point where the spring is pre-stretched; measured from that new equilibrium the restoring force is still −kx, so ω = √(k/m) exactly as on the horizontal surface. The trap is any answer involving g, which reflects a false analogy with the pendulum, whose period genuinely does depend on g. ⏱ 90-second route: memorize the general principle rather than the case — adding a constant force to a linear restoring force shifts the equilibrium but never changes the frequency. That single idea covers the vertical spring, the spring on an incline, and a charged mass on a spring in a uniform electric field, all of which are asked interchangeably. Recognizing the pattern takes ten seconds; deriving it takes two minutes."
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
        "explanation": "Energy conservation gives v² = 2gh/(1 + I/MR²), so the body with the smallest I/MR² is fastest. Those coefficients are ⅖ for the sphere, ½ for the cylinder and 1 for the hoop, so the sphere wins and the hoop trails. Mass and radius cancel completely, which is why the trap 'they all arrive together' is wrong for a reason different from the one most students assume — it is the shape, not the size or weight, that decides. ⏱ 90-second route: memorize the three coefficients ⅖, ½, 1, and the rule that more inertia relatively far from the axis means more energy diverted into spinning and less into translating. No calculation is needed to order them. The deeper point worth carrying is that the answer is independent of the incline angle and of g, so any choice implying otherwise can be discarded on sight."
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
        "explanation": "Setting GMm/R² = m4π²R/T² with M = ρ(4/3)πR³ makes the radius cancel entirely, leaving T = √(3π/Gρ). Two planets of the same density therefore have the same low-orbit period whatever their size — about 84 minutes for anything with Earth's density. The trap is the fourth choice, which is true of the general formula T² = 4π²R³/GM but misses that M and R are not independent once the density is fixed and the orbit is grazing. ⏱ 90-second route: memorize the grazing-orbit result T = √(3π/Gρ) if you can, but it is faster to infer: write Kepler's third law, substitute M ∝ ρR³, and watch R³ cancel. That substitution takes fifteen seconds and is the whole question. The same cancellation explains why the period of an object dropped through a tunnel in a planet matches the grazing orbital period."
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
        "explanation": "Buoyancy arises from the pressure gradient in the fluid, and in an accelerating frame that gradient is set by the effective gravity g + a = 1.5g rather than g. Since the buoyant force is ρ_fluid V g_eff, it rises by the factor 1.5. The trap is 'unchanged', which follows from thinking of buoyancy as a fixed property of the object rather than as a consequence of fluid weight. ⏱ 90-second route: memorize Archimedes' law in the form F = ρVg_eff and the general principle that a uniformly accelerating frame simply replaces g by g + a everywhere in a hydrostatics problem. Then the answer is one multiplication. The same substitution handles the free-fall limit, where g_eff = 0 and buoyancy vanishes entirely — a useful check, since it confirms the force must scale with g_eff rather than being constant."
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
        "explanation": "H equals T + V when the transformation to generalized coordinates carries no explicit time dependence — so that the kinetic energy is a homogeneous quadratic function of the generalized velocities — and the potential does not depend on velocity. The trap is the choice citing no explicit time dependence in L, which confuses two distinct statements: no explicit time dependence in L guarantees that H is conserved, but says nothing about whether H equals the energy. A bead on a wire spun at a prescribed rate is the standard counterexample, where H is conserved but is not the energy. ⏱ 90-second route: memorize the two separate conditions and, above all, the distinction between them: 'H is conserved' and 'H is the energy' are independent statements, and essentially every exam question in this family tests exactly that separation. There is no derivation short enough to attempt here, so recognize which of the two is being asked and answer from the pair."
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
        "explanation": "Momentum conservation gives v₀ = v₁ + v₂ and kinetic energy conservation gives v₀² = v₁² + v₂². Squaring the first and comparing leaves 2v₁·v₂ = 0, so the outgoing velocities are perpendicular. This is why elastic billiard-ball tracks and bubble-chamber photographs of equal-mass elastic scattering always show a right angle. The trap is 180°, which describes the special head-on case where one particle stops — excluded here by the stipulation that neither ends at rest. ⏱ 90-second route: memorize the 90° result outright; it is one of the highest-yield facts in classical mechanics and appears in nuclear-scattering contexts as often as in mechanics ones. If you must derive it, the vector-squaring argument above takes about forty seconds. Note the two hypotheses it needs — equal masses and elastic — since removing either destroys the result."
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
        "explanation": "The required centripetal acceleration is ω²R = 9.8, so ω = √(9.8/50) ≈ 0.44 rad/s and T = 2π/ω ≈ 14 s. The trap is 4.5 s, obtained by forgetting the factor of 2π and quoting 1/ω, and 28 s, from using the diameter in place of the radius. ⏱ 90-second route: memorize a = ω²R and T = 2π/ω; the whole problem is those two relations in sequence. The inference worth making before computing is a rough estimate: a 50 m station is comparable to a pendulum of that length, whose period is 2π√(L/g) ≈ 14 s — the same expression, since demanding a = g makes the two problems identical. That observation gives the answer without the intermediate step."
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
        "explanation": "On the axis E = kQz/(z² + R²)^(3/2), which vanishes at the centre by symmetry and falls as 1/z² far away, so it peaks in between; setting the derivative to zero gives z = R/√2. The trap is 'zero', which is where the potential is greatest but where the field vanishes — confusing the maximum of V with the maximum of E is the standard error here. ⏱ 90-second route: memorize the result z = R/√2 for the charged ring, since the derivative is not something you want to take under time pressure. If you have forgotten it, you can still eliminate three choices in fifteen seconds by inference: the field must be zero at the centre and zero at infinity, so the maximum lies strictly between, which kills 'zero' immediately and makes any answer of order R the only candidate."
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
        "explanation": "Charge −q is induced on the cavity wall and +q on the outer surface, and since the field inside the conducting material must vanish, the outer surface charge redistributes to a configuration determined only by that outer surface's geometry, retaining no memory of where the cavity sits. For a spherical outer boundary the exterior field is exactly that of a centred point charge +q. The trap is the third choice, which incorrectly assumes the interior geometry shows through the conductor. ⏱ 90-second route: memorize the screening principle — a conductor's exterior field depends only on the total enclosed charge and the outer surface shape, never on the interior arrangement. That single statement answers the whole family of cavity questions. The inference chain, from E = 0 in the metal to no information transmitted outward, is worth rehearsing once so you can trust it under pressure."
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
        "explanation": "The field is the negative gradient of the potential, so what matters is how V varies, not its value. Midway between two equal positive point charges the field cancels by symmetry while the potential is a positive maximum, giving exactly the situation described. The trap is the claim that E = 0 throughout a region forces V = 0 there, which is nearly right — E = 0 throughout a region does force V to be constant there, but that constant need not be zero, since the zero of potential is arbitrary. ⏱ 90-second route: memorize E = −∇V and read every choice through it. No numbers are involved; the entire question is whether you treat potential as a value or as a slope. Having one concrete counterexample ready — the midpoint of two like charges — lets you dispatch these in under thirty seconds rather than reasoning through five abstract statements."
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
        "explanation": "Balance requires the two arms to divide the voltage in the same ratio, so 100/200 = 150/R, giving R = 300 Ω. The trap is 75 Ω, from inverting the proportion. Note that balance is independent of the supply voltage and of the galvanometer's resistance, which is precisely why the bridge is a precision instrument. ⏱ 90-second route: memorize the balance condition as 'the ratios along the two arms must match', and write it as a proportion rather than a memorized cross-product so you cannot invert it. The whole calculation is one line. The inference worth having ready is why the method is accurate: it is a null measurement, so it depends on resistance ratios alone and not on any calibration of the detector."
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
        "explanation": "All the stored energy ends up as heat once the capacitor is fully discharged, and that stored energy is ½CV² = ½(10 × 10⁻⁶)(100)² = 50 mJ. The resistance sets how quickly the dissipation happens, through τ = RC, but not how much. The trap is the last choice, which mistakes the rate for the total. ⏱ 90-second route: memorize U = ½CV² and apply energy conservation, which is the entire problem. The inference that saves time is recognizing that the question offers three numerically identical answers hedged by different conditions — that pattern is a signal that the point being tested is the independence, not the arithmetic. Answer the conceptual question first and the number second."
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
        "explanation": "The capacitive reactance is X_C = 1/ωC = 1/(1,000 × 10⁻⁵) = 100 Ω, and impedances in series add in quadrature for perpendicular components: |Z| = √(100² + 100²) ≈ 140 Ω. The trap is 200 Ω, from adding R and X_C arithmetically as though they were resistances in series. ⏱ 90-second route: memorize X_C = 1/ωC, X_L = ωL, and the quadrature rule |Z| = √(R² + X²). Those three cover every AC-impedance question on this exam. The inference that matters is why the addition is in quadrature: the capacitor's voltage lags the current by 90°, so the two voltage phasors are perpendicular. Since R and X_C happen to be equal here, the phase angle is 45° — a detail worth noticing, as the follow-up question often asks for it."
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
        "explanation": "The force per length is μ₀I₁I₂/2πd = (2 × 10⁻⁷)(100)/(0.10) = 2.0 × 10⁻⁴ N/m, and parallel currents in the same direction attract. The trap is the repulsive version: the sign convention is opposite to the electrostatic one, where like charges repel, and reversing it by analogy is the most common error in this topic. ⏱ 90-second route: memorize F/L = μ₀I₁I₂/2πd, the shortcut μ₀/2π = 2 × 10⁻⁷, and the direction rule 'parallel currents attract'. The direction is worth anchoring physically rather than by formula: this attraction is the definition on which the old SI ampere was based. If you distrust your memory, one application of the right-hand rule followed by F = IL × B settles it in about twenty seconds."
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
        "explanation": "For a perfect absorber the pressure is I/c, but a perfect reflector reverses the photon momentum and therefore receives twice the impulse: P = 2I/c = 2,000/(3.0 × 10⁸) ≈ 6.7 × 10⁻⁶ Pa. The trap is 3.3 × 10⁻⁶ Pa, the absorber value, which omits the factor of 2. ⏱ 90-second route: memorize the pair — I/c for absorption, 2I/c for reflection — since the factor of 2 is the only thing this question ever tests. The inference is the momentum argument: reversing a momentum changes it by twice its magnitude, exactly as a ball bouncing elastically off a wall delivers twice the impulse of one that sticks. That analogy makes the factor impossible to forget."
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
        "explanation": "Maxwell introduced the displacement current ε₀ dΦ_E/dt precisely so that the total current would be continuous: the changing electric field between the plates carries exactly the 2.0 A that the wire delivers, so Ampère's law gives the same answer for any surface bounded by the same loop. The trap is 'zero', which is true of the conduction current but not of the displacement current the question asks about. ⏱ 90-second route: memorize the punchline rather than the formula — displacement current in the gap equals the conduction current in the wire. That single fact answers essentially every question on this topic. The inference underneath it is worth one rehearsal: without it, Ampère's law would give different answers for two surfaces sharing the same boundary, which is exactly the inconsistency Maxwell was repairing."
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
        "explanation": "The levels are E ∝ n_x² + n_y² + n_z², so the ground state (1,1,1) has 3 and the first excited state (2,1,1) has 6, giving a ratio of 2. The trap is 4, the ratio for a one-dimensional box where the first excited state is simply n = 2 — in three dimensions only one quantum number is promoted, not all three. ⏱ 90-second route: memorize E ∝ n_x² + n_y² + n_z² for the cubical box, which is the only fact required. The counting is inference: the lowest allowed value of each n is 1, not 0, so the ground state is (1,1,1) and the cheapest excitation raises a single index. Noticing that the first excited level is threefold degenerate is a useful byproduct, since it is the other half of what this topic asks."
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
        "explanation": "In the thick-barrier limit T ≈ e^(−2κL), so doubling L squares the transmission: (10⁻⁴)² = 10⁻⁸. The trap is 2 × 10⁻⁴ or 5 × 10⁻⁵, both of which treat the dependence as linear rather than exponential. ⏱ 90-second route: memorize the form T ~ e^(−2κL) — the constants inside κ almost never matter, but the exponential dependence on width always does. Then the inference is one line of algebra: doubling the exponent squares the result. This extreme sensitivity is the physical content worth carrying, since it explains why scanning tunnelling microscopes resolve single atoms and why alpha-decay half-lives span twenty orders of magnitude."
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
        "explanation": "Every component operator for spin-½ has eigenvalues ±ħ/2, whichever axis is chosen — a consequence of the algebra alone, not of any special direction. What changes with the choice of axis is the probability of each outcome, never the set of outcomes. The trap is the last choice, which imagines a classical vector projecting continuously; measurement of a spin component is always dichotomous. ⏱ 90-second route: memorize that spin components are quantized in units of ħ/2 with 2s + 1 = 2 outcomes. The inference worth stating explicitly is the isotropy: no axis is special, so if ±ħ/2 are the results along z they must be the results along every direction. Recognizing that immediately eliminates any choice implying a continuum or an axis dependence."
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
        "explanation": "The energy-time uncertainty relation gives ΔE ≈ ħ/τ = 1.05 × 10⁻³⁴/10⁻⁸ ≈ 10⁻²⁶ J, which is about 6.6 × 10⁻⁸ eV, of order 10⁻⁸ eV. This natural linewidth is what sets the ultimate sharpness of a spectral line, and it is far narrower than typical Doppler broadening. The trap is answers near 1 eV, which confuse the width of the level with the energy of the transition itself. ⏱ 90-second route: memorize ΔEΔt ≈ ħ and the conversion 1 eV = 1.6 × 10⁻¹⁹ J. The inference is that longer-lived states are sharper — a metastable state has an extremely narrow line, while a state that decays in femtoseconds is badly smeared. Sanity-check the magnitude: any answer comparable to an atomic transition energy would mean the level is not a level at all."
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
        "explanation": "Adding spin ½ to orbital angular momentum 2 gives j = l + s and j = l − s, that is 5/2 and 3/2, which is the spin-orbit doublet responsible for the fine structure of d states. The trap is '2 only', which forgets the electron's spin entirely, and '5/2 only', which keeps only the stretched combination. ⏱ 90-second route: memorize the addition rule that j runs from |l − s| to l + s in integer steps — for s = ½ that always yields exactly two values, l ± ½. The inference is a parity check: combining an integer l with a half-integer s must give half-integer j, which eliminates the choices containing integers before you do any arithmetic. That check alone leaves only two candidates."
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
        "explanation": "The bound-state energies are E_n = −13.6/n² eV, so E₃ = −13.6/9 ≈ −1.5 eV, and the ionization energy from that level is +1.5 eV. The trap is 12 eV, which is the energy of the n = 1 to n = 3 transition, 13.6 − 1.5 — a different quantity that the question does not ask for. ⏱ 90-second route: memorize E_n = −13.6/n² eV, the single most-used formula in atomic physics. The only inference is reading precisely: ionization from a level means going from that level to zero, so the answer is just |E_n|. Questions in this family almost always offer both the level energy and a transition energy among the choices, so identify which endpoint pair is being asked before computing."
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
        "explanation": "Hydrogen-like energies scale as Z², so doubling the nuclear charge multiplies the binding by 4: −13.6 × 4 = −54.4 eV. The trap is −27.2 eV, from scaling linearly in Z, which is what the Coulomb force law alone would suggest before you account for the orbit also shrinking by a factor of Z. ⏱ 90-second route: memorize the hydrogen-like scalings together: E ∝ Z² and r ∝ 1/Z. They come as a pair and each explains the other. The inference that fixes the exponent is that the electron is both more strongly attracted and closer in, so two factors of Z compound. Note this is a different scaling from the muonic-atom case, where the mass changes rather than the charge."
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
        "explanation": "Wavefunctions are in general complex — a travelling wave e^(ikx) is the standard example — and nothing in the formalism requires ψ to be real. The other four are genuine requirements, following from the probability interpretation and from the Schrödinger equation being second order. It is true that bound stationary states of a real potential can always be chosen real, but 'can be chosen' is not 'must be'. ⏱ 90-second route: memorize the standard list of admissibility conditions and note what is absent from it. The inference that settles this in ten seconds is producing one counterexample: any state carrying nonzero momentum has a complex wavefunction, so reality cannot be a requirement. For NOT-questions, hunting a single counterexample is always faster than validating the other four choices."
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
        "explanation": "The oscillator eigenfunctions are a Hermite polynomial of degree n times a Gaussian, and a degree-n polynomial has exactly n real roots, so the n = 4 state has 4 nodes. The Gaussian factor never vanishes at finite x and the asymptotic decay does not count as a node. The trap is 3, from applying the n − 1 rule that belongs to the infinite square well when its states are labelled from n = 1. ⏱ 90-second route: memorize the node count n for the oscillator, whose ground state is n = 0, and contrast it with the box, whose ground state is n = 1 and has n − 1 nodes. The discrepancy is entirely a labelling convention, and knowing which convention goes with which system is the actual content. The general principle worth carrying is that node count increases with energy in any one-dimensional potential."
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
        "explanation": "Each stationary state carries a phase e^(−iEt/ħ), and squaring the sum produces a cross term whose phase is the difference of the two, so the interference term oscillates at (E₂ − E₁)/ħ. The individual phases are unobservable — a single stationary state has a probability density that does not move at all, which is what makes it stationary. The trap is E₂/ħ, which mistakes an individual phase for an observable frequency. ⏱ 90-second route: memorize the rule that only energy differences are observable in quantum mechanics; the overall phase never is. That principle alone selects the answer. The inference confirming it is the classical correspondence: this is the same frequency the atom radiates when it makes the transition, since Bohr's condition ΔE = ħω is exactly the statement being tested here."
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
        "explanation": "With V = 54, √V ≈ 7.35, so λ ≈ 1.23/7.35 ≈ 0.17 nm — comparable to atomic spacings, which is exactly why the Davisson-Germer experiment saw diffraction and thereby confirmed the de Broglie hypothesis. The trap is 1.2 nm, from quoting the numerator without dividing. ⏱ 90-second route: memorize the shortcut λ = 1.23 nm/√V for non-relativistic electrons; it saves you from rebuilding λ = h/√(2meV) under time pressure. The inference that makes the answer meaningful is the comparison with lattice spacings of a few tenths of a nanometre: any answer far from that scale would not have produced diffraction at all, which lets you sanity-check before committing."
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
        "explanation": "The coefficient of performance of a reversible heat pump is T_hot/(T_hot − T_cold) = 300/30 = 10, so one joule of work delivers ten joules of heat into the house — nine of them pumped from the cold outside air. The trap is 9.0 J, which is the COP of the same device used as a refrigerator, T_cold/(T_hot − T_cold), and the two differ by exactly the work input. ⏱ 90-second route: memorize the two coefficients and, more reliably, derive whichever you need from energy conservation: Q_hot = Q_cold + W, and the reversible condition Q_hot/Q_cold = T_hot/T_cold. That pair regenerates both formulas in thirty seconds and cannot be misremembered. The inference to check your answer is that a heat pump must beat a resistive heater, so the number has to exceed 1."
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
        "explanation": "Wien's law gives λ_max = 2.9 × 10⁻³/5,800 = 5.0 × 10⁻⁷ m = 500 nm, in the green, near the centre of the visible band — which is unlikely to be a coincidence given how eyes evolved. The trap is 50 nm, a factor-of-ten slip that lands in the extreme ultraviolet. ⏱ 90-second route: memorize Wien's constant, 2.9 × 10⁻³ m·K, and the anchor result that a 5,800 K body peaks at about 500 nm. Carrying that one pair lets you handle any variant by scaling: peak wavelength is inversely proportional to temperature, so a 2,900 K filament peaks at 1,000 nm, in the infrared, which is why incandescent bulbs are inefficient. The inverse relation is the inference; the constant is the recall."
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
        "explanation": "For a reversible isothermal expansion W = nRT ln(V₂/V₁) = (1)(8.31)(300)(0.693) ≈ 1,700 J. Because the temperature is constant the internal energy of an ideal gas does not change, so exactly this much heat must flow in from the reservoir. The trap is 2,500 J, which is nRT itself, obtained by dropping the logarithm. ⏱ 90-second route: memorize W = nRT ln(V₂/V₁) and ln 2 ≈ 0.69. The useful intermediate to hold in your head is RT ≈ 2,500 J/mol at room temperature — a number that recurs constantly in this subject — after which the answer is 2,500 × 0.69 in one step. The inference is that ΔU = 0 for an isothermal ideal gas, so Q = W, which is what a follow-up question usually asks."
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
        "explanation": "With no heat lost, the energy given up by the hot water equals that taken up by the cold: 100(80 − T) = 200(T − 20), so 8,000 − 100T = 200T − 4,000 and T = 40 °C. The trap is 50 °C, the simple average of the two temperatures, which would be correct only for equal masses. ⏱ 90-second route: memorize nothing beyond 'heat lost equals heat gained'; the specific heat of water cancels because both sides are water. The faster inference is to compute the mass-weighted average directly: the final temperature must lie twice as close to the 20 °C water as to the 80 °C water, because there is twice as much of it, which gives 40 °C in about ten seconds without algebra."
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
        "explanation": "An isotherm obeys PV = constant, giving slope −P/V, while an adiabat obeys PV^γ = constant, giving slope −γP/V. Since γ > 1 the adiabat is always steeper, by exactly the factor γ. Physically, expanding adiabatically also cools the gas, so its pressure falls faster than isothermal expansion alone would require. The trap is the first choice, which inverts the ratio. ⏱ 90-second route: memorize the two curve equations and differentiate mentally — the slope ratio drops out as γ with no numbers involved. The physical inference is worth having as a check: adiabatic expansion loses both the volume effect and the temperature effect, so pressure must drop faster, meaning steeper. That argument gets you the direction even if you cannot recall which exponent goes where."
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
        "explanation": "The wavelength is v/f = 1.0 m, and the path difference is 4.5 − 3.0 = 1.5 m, which is 1.5 wavelengths — a half-integer, so the waves arrive exactly out of phase and cancel. The trap is the third choice: being driven in phase determines the phase at the sources, not at the listener, where the extra travel of one wave is what decides the outcome. ⏱ 90-second route: memorize the interference conditions in terms of path difference — integer wavelengths for constructive, half-integer for destructive — and compute λ = v/f first, always. The inference that catches people is that 1.5 wavelengths counts as a half-integer, so the fourth choice's reasoning ('exceeds one wavelength') is irrelevant. Convert the path difference into wavelengths before deciding anything."
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
        "explanation": "Fringe spacing is λL/d, and immersion changes only the wavelength, which shortens to λ/n inside the water while the geometry stays fixed. The fringes therefore crowd together by the factor 1.33. The trap is 'unchanged', which follows from thinking that the source's frequency and the slit geometry are all that matter — but interference depends on path difference measured in wavelengths, and it is the wavelength in the medium that counts. ⏱ 90-second route: memorize Δy = λL/d and the rule λ_medium = λ_vacuum/n. The inference is identifying which quantity in the formula the medium touches, which is the wavelength alone. It is worth noting the frequency does not change on entering a medium — only the wavelength and the speed do — because a question phrased in terms of frequency is testing the same distinction from the other side."
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
        "explanation": "Comparing with y = A sin(kx − ωt) gives k = 6.0 rad/m and ω = 300 rad/s, so v = ω/k = 50 m/s and the wave travels in the +x direction. The trap is 300 m/s, quoting ω as though it were the speed, and 1,800 m/s, from multiplying rather than dividing. ⏱ 90-second route: memorize v = ω/k and the standard form y = A sin(kx − ωt), including the sign convention that a minus sign means motion in the +x direction. Reading off the two coefficients takes five seconds. The dimensional check is instant and worth doing: ω is in radians per second and k in radians per meter, so only their ratio can be a speed, which eliminates three choices before you compute."
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
        "explanation": "The Rayleigh criterion for a circular aperture is θ ≈ 1.22λ/D = 1.22(5.5 × 10⁻⁷)/2.0 ≈ 3.4 × 10⁻⁷ rad, or about 0.07 arcseconds. The trap is 2.8 × 10⁻⁷ rad, which is λ/D without the factor of 1.22 that distinguishes a circular aperture from a slit. ⏱ 90-second route: memorize θ = 1.22λ/D and that the 1.22 belongs to circular apertures only. Everything else is one division. The inference worth carrying is the scaling: resolution improves linearly with aperture and degrades with wavelength, which is why radio telescopes must be enormous and why adaptive optics matters — ground-based seeing, not diffraction, is usually the real limit at this aperture."
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
        "explanation": "Energy is released whenever the products are more tightly bound than the reactants, that is, whenever a reaction moves nucleons up the curve toward the peak. Light nuclei climb toward it by fusing and heavy nuclei climb toward it by splitting, which is why iron-group nuclei are the endpoint of stellar nucleosynthesis and why nothing beyond them releases energy by either route. The trap is the claim that nuclei near A = 56 are the least stable, which inverts the meaning of the peak: maximum binding per nucleon means maximum stability. ⏱ 90-second route: memorize the shape of the curve and the location of its maximum near iron. No calculation is possible or needed. The inference is a single rule — reactions run toward higher binding energy per nucleon — from which both fusion and fission follow without memorizing them separately."
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
        "explanation": "Each phosphorus atom contributes one electron beyond what the four covalent bonds require, and that electron sits in a donor level just below the conduction band, from which room-temperature thermal energy easily promotes it. The majority carriers are therefore negative, making the material n-type. The trap is the claim that the material becomes a metal: doping concentrations are parts per million, so the conduction band is nowhere near filled and the material remains a semiconductor. ⏱ 90-second route: memorize the mnemonic that donors have more valence electrons and give n-type, while acceptors like boron have fewer and give p-type. Counting valence electrons — five versus four — is the whole inference. Note that doping barely changes the band gap; it adds shallow levels inside it, which is the distinction the band-gap choice is testing."
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
        "explanation": "The atom at the centre of the cube has the eight corner atoms as its nearest neighbours, along the body diagonals at a distance of (√3/2)a — closer than the six next-nearest atoms one full lattice constant away. The trap is 6, the coordination number of the simple cubic lattice, and 12, that of face-centred cubic and hexagonal close packing. ⏱ 90-second route: memorize the three coordination numbers together — simple cubic 6, body-centred cubic 8, face-centred cubic 12 — since questions in this family are almost always a straight lookup. The inference available if you blank is geometric: draw the cube, put an atom at the centre, and count the corners, which takes about fifteen seconds and gives 8 directly. Checking that the body diagonal half-length is less than a confirms those are the nearest."
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
        "explanation": "Beta decay changes a down quark into an up quark, altering the electric charge of the quark, so the mediator must be charged: it is the W boson, and the process is a charged-current weak interaction. The trap is the Z boson, which mediates weak processes too but carries no charge and therefore cannot change a quark's flavour in the way beta decay requires. The long neutron lifetime of about 15 minutes is itself the signature of a weak process. ⏱ 90-second route: memorize the mediator list — gluons for the strong force, photons for the electromagnetic, W and Z for the weak — and the rule that charge-changing means W. That distinction is the entire question. The inference from the lifetime is a useful cross-check: strong decays take about 10⁻²³ s and electromagnetic ones about 10⁻¹⁶ s, so anything living for minutes is unmistakably weak."
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
        "explanation": "The curl of any gradient vanishes identically, which is why a conservative field can be written as a gradient and why the electrostatic field satisfies ∇ × E = 0. The trap is the first choice: ∇ · (∇f) is the Laplacian ∇²f, which is zero only for harmonic functions, not in general. The other identity worth pairing with this one is ∇ · (∇ × A) = 0, the divergence of any curl, which is what makes magnetic field lines close on themselves. ⏱ 90-second route: memorize the two vanishing identities — curl of a gradient and divergence of a curl — since they are the only ones that hold universally and each underwrites a Maxwell equation. Everything else on the list is a distractor built by permuting the operators. Recognizing which two combinations are the real ones is the entire question; no computation is possible in the time available."
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
        "explanation": "Applying the Lorentz transformation to two events simultaneous in the platform frame but separated along the direction of motion gives Δt′ = −γvΔx/c², so the event at the larger x — the front of the train — occurs earlier in the train frame. Equivalently, the train is moving toward the light from the front strike and away from the light from the rear. The trap is the fourth choice: the answer is a property of the frame, not of where an observer happens to be standing, since each observer corrects for light travel time. ⏱ 90-second route: memorize the relativity-of-simultaneity rule as 'leading clocks lag' — in the frame in which the train moves forward, its front clock reads behind. Then the front event, occurring at the same platform time, must have happened earlier by the train's reckoning. Having a fixed mnemonic matters here because the sign is easy to invert under pressure and the algebra takes longer than it is worth."
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
        "explanation": "The second postulate of special relativity asserts that light travels at c in every inertial frame regardless of the motion of its source, so the Earth observer measures exactly c. The trap is 1.5c, the Galilean sum, and 0.80c, which is what relativistic velocity addition gives for two material speeds of 0.50c — but feeding v = c into that formula returns c for any frame speed, as it must. What does change is the light's frequency, through the Doppler effect, not its speed. ⏱ 90-second route: memorize the postulate; there is nothing to compute. The inference worth having ready is that the velocity-addition formula (u + v)/(1 + uv/c²) is built precisely so that u = c gives c, so the postulate and the formula are consistent rather than competing. Any answer other than c would make the speed of light frame-dependent, which is the assumption relativity discards."
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
        "explanation": "The relativistic Doppler formula for recession is λ_obs = λ_source√((1 + β)/(1 − β)) = 500√(1.2/0.8) = 500√1.5 ≈ 610 nm. The trap is 550 nm, which is the non-relativistic estimate λ(1 + β) = 500(1.2) and is noticeably off by this speed. The 410 nm choice inverts the ratio and would describe an approaching source. ⏱ 90-second route: memorize the Doppler factor √((1 + β)/(1 − β)) and the direction convention: receding means redshift, so the wavelength must grow. That direction check alone eliminates two choices before any arithmetic. The remaining work is one square root, and knowing √1.5 ≈ 1.22 makes it mental. Note the observed wavelength exceeds the naive (1 + β) estimate, because time dilation adds to the classical effect rather than cancelling it."
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
        "explanation": "The standard error of the mean falls as σ/√N, so halving it requires quadrupling N: 4 × 100 = 400. The trap is 200, from assuming a linear relationship, which is the most expensive misconception in experimental work — it badly underestimates the cost of improving precision. ⏱ 90-second route: memorize SEM = σ/√N and nothing else. The inference is a single inversion: to gain a factor of k in precision you pay a factor of k² in measurements. The diminishing return is the physical content: going from 0.020 to 0.010 costs 300 extra runs, and the next halving would cost 1,200 more, which is why beyond some point one improves the apparatus rather than repeating the measurement."
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
        "explanation": "Moving the mirror by d changes the optical path by 2d, because the light traverses that arm twice, so the number of fringes is 2d/λ = 2(1.0 × 10⁻⁴)/(5.0 × 10⁻⁷) = 400. The trap is 200, from forgetting the round trip — the same factor of 2 that makes the instrument twice as sensitive as its geometry naively suggests. ⏱ 90-second route: memorize N = 2d/λ, and remember that the factor of 2 is the whole point of the instrument. The rest is one division. The inference worth carrying is why this measurement is precise: counting several hundred fringes lets you determine a displacement to a small fraction of a wavelength, which is how the interferometer became the standard length comparator and, at far greater scale, a gravitational-wave detector."
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
        "explanation": "The voltmeter's 1.0 MΩ sits in parallel with the resistor being measured, giving 0.50 MΩ, so the divider now splits 10 V between 1.0 MΩ and 0.50 MΩ and the reading is 10 × 0.50/1.50 ≈ 3.3 V. The true unloaded voltage is 5.0 V, which is the trap: the act of measuring has changed the circuit. ⏱ 90-second route: memorize the parallel-combination rule and the principle that a voltmeter must have a resistance much larger than that of the element it measures. The inference is to compute the loaded divider rather than the ideal one. The comparison worth internalizing is the ratio: here the meter resistance equals the circuit resistance, a catastrophic mismatch, whereas a real 10 MΩ digital meter would read 4.8 V — an error of a few percent rather than a third."
      }

    ]
  }
];
