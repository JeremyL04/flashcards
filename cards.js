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
    "name": "Practice Test A",
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
    "name": "Practice Test B",
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
  }
];
