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
//  SET NOTES — Quantum Stat. Mech. & Geometric Blur
//  ------------------------------------------------
//  12 questions: cards 1-6 geometric blur, cards 7-12 quantum statistical
//  mechanics. Grouped rather than shuffled, since this is a targeted drill.
//
//  "Geometric blur" here means image smearing you get from ray geometry
//  alone, no diffraction required. Four distinct mechanisms appear:
//    - motion blur          (cards 1, 2)  image speed = object speed x magnification
//    - aperture/defocus     (card 5)      circle of confusion
//    - extended-source      (card 4)      penumbra = source size x (L_far/L_near)
//    - pinhole              (cards 3, 6)  geometric spread competing with diffraction
//  All four reduce to the same idea: a point in the object maps to a patch,
//  not a point, and the patch size follows from similar triangles.
//
//  Reference points on the released forms:
//    GR8677 Q100 — pinhole camera, d for the sharpest image (answer sqrt(lambda D)).
//                  Cards 3 and 6 work the same competition from other directions
//                  (resulting blur size; which term dominates off-optimum).
//    GR8677 Q88  — ordering of fermion / classical / boson pressures.
//    GR9677 Q94, GR9277 Q71, GR0877 Q78, GR0177 Q49 — two-level Boltzmann systems.
//                  Deliberately avoided here; the released forms mine that vein hard
//                  and barely touch degenerate gases, BEC, or exchange counting.
// ============================================================
  {
    "name": "Geometric Blur & Quantum Stat Mech",
    "cards": [

      {
        "question": "A camera of focal length 50 mm photographs a car 25 m away that is moving perpendicular to the line of sight at 20 m/s. If the exposure time is 1/125 s, the length of the blurred streak on the sensor is most nearly",
        "choices": [
          "0.16 mm",
          "0.32 mm",
          "0.64 mm",
          "1.3 mm",
          "2.6 mm"
        ],
        "answer": "B",
        "explanation": "The image moves at the object's speed times the transverse magnification. For an object far outside the focal length the image forms essentially at the focal plane, so |m| = i/o ≈ f/o = 0.050/25 = 2.0 × 10⁻³. The image speed is then v_image = (20 m/s)(2.0 × 10⁻³) = 4.0 × 10⁻² m/s = 40 mm/s. Over an exposure of 1/125 s = 8.0 ms the streak is (40 mm/s)(0.0080 s) = 0.32 mm. Note that the blur scales as f/o: doubling the focal length doubles the smear, which is why long lenses demand short exposures."
      },

      {
        "question": "An aerial survey camera of focal length 30 cm photographs the ground from an altitude of 3.0 km while the aircraft flies horizontally at 90 m/s. The longest exposure time for which the image blur does not exceed 0.020 mm is most nearly",
        "choices": [
          "0.55 ms",
          "1.1 ms",
          "2.2 ms",
          "4.4 ms",
          "8.8 ms"
        ],
        "answer": "C",
        "explanation": "Same relation as the previous card, solved for the time. The magnification is m ≈ f/o = 0.30/3000 = 1.0 × 10⁻⁴, so the ground image sweeps across the film at v_image = (90 m/s)(1.0 × 10⁻⁴) = 9.0 × 10⁻³ m/s = 9.0 mm/s. Requiring v_image·t ≤ 0.020 mm gives t ≤ 0.020/9.0 = 2.2 × 10⁻³ s. Two checks worth making: the answer depends only on the ratio f/o, not on either separately, and it is the aircraft's horizontal speed that matters — vertical motion would change the magnification rather than smear the image transversely."
      },

      {
        "question": "In a pinhole camera the pinhole-to-screen distance is 20 cm and the illumination has wavelength 550 nm. The pinhole diameter is chosen to make the image as sharp as possible. The resulting blur width on the screen is most nearly",
        "choices": [
          "0.011 mm",
          "0.033 mm",
          "0.11 mm",
          "0.33 mm",
          "1.1 mm"
        ],
        "answer": "D",
        "explanation": "Two effects fight each other. Geometry alone smears a point into a patch about the size of the hole, b_geom ≈ d. Diffraction spreads the beam by roughly b_diff ≈ λD/d, which grows as the hole shrinks. The total blur b ≈ d + λD/d is minimised when the two are comparable, at d ≈ √(λD) — and at that point the blur itself is also of order √(λD). Numerically √(550 × 10⁻⁹ × 0.20) = √(1.1 × 10⁻⁷) = 3.3 × 10⁻⁴ m = 0.33 mm. This is the companion result to the classic question that asks for the optimal d: the optimal hole size and the blur it produces are the same order of magnitude. Note the consequence — a pinhole camera's resolution improves only as √D, so making the box longer helps slowly."
      },

      {
        "question": "A circular lamp of diameter 8.0 cm faces a wall 2.0 m away. A small opaque disk of diameter 2.0 cm is mounted coaxially 1.5 m from the lamp, so that it is 0.50 m from the wall. The width of the penumbra — the partially shaded ring surrounding the full shadow — on the wall is most nearly",
        "choices": [
          "0.67 cm",
          "2.0 cm",
          "2.7 cm",
          "8.0 cm",
          "10.7 cm"
        ],
        "answer": "C",
        "explanation": "Each point of the extended lamp casts its own sharp shadow of the disk, and those shadows are mutually displaced; the penumbra is the region covered by some but not all of them. Take the two extreme source points, at ±S/2. A ray from the source edge grazing the disk edge lands on the wall at a radius r = d/2 + (d/2 ∓ S/2)(L_w/L_s), where L_s = 1.5 m is lamp-to-disk and L_w = 0.50 m is disk-to-wall. Subtracting the two gives a penumbra width of exactly S·L_w/L_s = (8.0 cm)(0.50/1.5) = 2.7 cm. Notice the disk's own diameter cancels completely — it sets where the shadow is, not how blurred its edge is. This is the same similar-triangles relation as the geometric unsharpness of a radiograph, where a finite X-ray focal spot blurs the image by (spot size) × (object-to-film)/(source-to-object)."
      },

      {
        "question": "A camera lens of focal length 50 mm and aperture diameter 25 mm is focused at infinity, so the sensor lies in the focal plane. A point source located 5.0 m in front of the lens is photographed. The diameter of the blur circle it produces on the sensor is most nearly",
        "choices": [
          "0.25 mm",
          "0.50 mm",
          "1.0 mm",
          "2.0 mm",
          "4.0 mm"
        ],
        "answer": "A",
        "explanation": "The nearby source images behind the focal plane, so the converging cone is intercepted before it comes to a point, and the sensor records a disk. From 1/o + 1/i = 1/f, i = fo/(o − f) = (50)(5000)/4950 = 50.5 mm, so the focus falls Δ = i − f = 0.505 mm past the sensor. By similar triangles on the converging cone, the blur diameter is c = D·Δ/i = 25 × 0.505/50.5 = 0.25 mm. A useful approximate form: since Δ ≈ f²/o for a distant object, c ≈ Df/o = (25)(50)/5000 = 0.25 mm — the blur circle is just the aperture scaled by the magnification. This is why stopping down (reducing D) increases depth of field: the blur circle shrinks in direct proportion to the aperture."
      },

      {
        "question": "A pinhole camera uses a hole of diameter 0.50 mm with the screen 15 cm behind it, illuminated at wavelength 500 nm. Which of the following best describes the image blur?",
        "choices": [
          "Diffraction dominates; the blur is about 0.5 mm and would decrease if the hole were made smaller.",
          "Diffraction dominates; the blur is about 0.15 mm and is already as small as it can be.",
          "The two effects are comparable; the hole is very nearly the optimum size.",
          "Geometric spreading dominates; the blur is about 0.15 mm and would decrease if the hole were made larger.",
          "Geometric spreading dominates; the blur is about 0.5 mm and would decrease if the hole were made smaller."
        ],
        "answer": "E",
        "explanation": "Evaluate both terms. Geometric spreading gives b_geom ≈ d = 0.50 mm. Diffraction gives b_diff ≈ λD/d = (500 × 10⁻⁹)(0.15)/(0.50 × 10⁻³) = 1.5 × 10⁻⁴ m = 0.15 mm. The geometric term is more than three times larger, so it sets the blur at about 0.5 mm. Equivalently, the optimum hole for this screen distance is √(λD) = √(500 × 10⁻⁹ × 0.15) = 0.27 mm, and 0.50 mm is well above it — the hole is too big, and shrinking it toward 0.27 mm would sharpen the image. Past that point diffraction takes over and further shrinking makes things worse again, which is the non-monotonic behaviour this pair of effects is famous for."
      },

      {
        "question": "In a system of noninteracting fermions in thermal equilibrium at temperature T with chemical potential μ, the average occupation number of a single-particle state whose energy lies exactly kT above μ is most nearly",
        "choices": [
          "0.12",
          "0.27",
          "0.50",
          "0.73",
          "0.88"
        ],
        "answer": "B",
        "explanation": "The Fermi-Dirac distribution is f(E) = 1/(e^((E−μ)/kT) + 1). With E − μ = kT the exponent is exactly 1, so f = 1/(e + 1) = 1/3.718 = 0.269. Choice D, 0.73, is the occupancy one kT below μ — the distribution is antisymmetric about μ in the sense f(μ + x) + f(μ − x) = 1, so those two values must sum to 1, which is a fast way to check your arithmetic. Choice C is the value exactly at E = μ, true at any temperature and worth memorising as the operational definition of the chemical potential for fermions."
      },

      {
        "question": "The conduction electrons in a metal may be treated as a degenerate free-electron gas at T = 0. If the number density of conduction electrons were increased by a factor of 8 with no other change, the Fermi energy would increase by a factor of",
        "choices": [
          "2",
          "4",
          "8",
          "16",
          "64"
        ],
        "answer": "B",
        "explanation": "Filling states up to the Fermi momentum in a box gives N ∝ k_F³V, so k_F ∝ n^(1/3), and since E_F = ħ²k_F²/2m for a nonrelativistic gas, E_F ∝ n^(2/3). An increase of n by 8 therefore raises E_F by 8^(2/3) = 4. Choice C is the trap of assuming linear scaling. Worth noting that the exponent depends on dimensionality and dispersion: in two dimensions E_F ∝ n, and for an ultrarelativistic gas where E = ħkc the Fermi energy would go as n^(1/3) instead."
      },

      {
        "question": "Two identical particles are to be distributed among three nondegenerate single-particle states, with all distinct microstates taken as equally likely. The ratio of the probability that both particles occupy the same state when the particles are bosons, to that probability when the particles are treated as distinguishable, is",
        "choices": [
          "1/2",
          "2/3",
          "1",
          "3/2",
          "3"
        ],
        "answer": "D",
        "explanation": "Count the microstates. Distinguishable particles: each independently picks one of three states, giving 3² = 9 arrangements, of which 3 have both in the same state, so P = 3/9 = 1/3. Bosons: the particles are not separately labelled, so a microstate is just an occupancy list, and the count is C(3 + 2 − 1, 2) = 6 — three with both in one state and three with the particles in different states — giving P = 3/6 = 1/2. The ratio is (1/2)/(1/3) = 3/2. Bosons are thus more likely than classical particles to be found bunched in the same state, which is the microscopic root of stimulated emission and Bose-Einstein condensation. For fermions the same count gives P = 0, and this bunching-versus-exclusion contrast is what drives the pressure ordering P_fermion > P_classical > P_boson."
      },

      {
        "question": "The low-temperature molar heat capacity of a metal has the form C = γT + AT³. For copper the two terms are equal at about 3.0 K. At a temperature of 0.30 K, the ratio of the electronic contribution to the lattice contribution is most nearly",
        "choices": [
          "0.01",
          "1",
          "10",
          "30",
          "100"
        ],
        "answer": "E",
        "explanation": "The ratio is C_el/C_lat = γT/(AT³) = (γ/A)/T². The two terms being equal at T₀ = 3.0 K means γ/A = T₀², so the ratio is simply (T₀/T)². At T = 0.30 K this is (3.0/0.30)² = 10² = 100. Choice C, 10, is the ratio of temperatures rather than its square. The physics behind the two powers: the linear electronic term arises because only electrons within about kT of the Fermi surface can be thermally excited, a fraction ~T of them each gaining ~kT; the cubic lattice term is the Debye phonon result. Because the electronic term dies away more slowly, it always wins at sufficiently low temperature — which is how γ, and hence the density of states at the Fermi level, is measured experimentally."
      },

      {
        "question": "An ideal gas of noninteracting bosons of mass m and number density n undergoes Bose-Einstein condensation at temperature T_c. A second ideal Bose gas, whose particles have mass 4m and number density 8n, condenses at a temperature of",
        "choices": [
          "T_c/4",
          "T_c/2",
          "T_c",
          "2T_c",
          "4T_c"
        ],
        "answer": "C",
        "explanation": "Condensation sets in when the thermal de Broglie wavelength becomes comparable to the interparticle spacing, i.e. when nλ_T³ is of order unity with λ_T = h/√(2πmkT). Solving gives kT_c ∝ ħ²n^(2/3)/m, so T_c ∝ n^(2/3)/m. Applying both changes: the density factor contributes 8^(2/3) = 4, and the mass factor contributes 1/4. The two exactly cancel and the condensation temperature is unchanged. The scaling itself is the point worth carrying away — heavier particles and dilute gases condense only at lower temperatures, which is why atomic BECs require nanokelvin conditions while the far lighter, denser electron pairs in a superconductor manage an analogous transition at kelvin temperatures."
      },

      {
        "question": "In applying Bose-Einstein statistics to the photons of blackbody radiation in a cavity, the chemical potential of the photon gas is set to zero. The reason is that",
        "choices": [
          "photons are massless, and the chemical potential of any massless particle vanishes",
          "photons do not interact with one another, so no energy is required to add one",
          "photons are their own antiparticles",
          "the number of photons is not conserved, since the cavity walls freely emit and absorb them",
          "the photon gas is always in the classical limit, where μ → 0"
        ],
        "answer": "D",
        "explanation": "The chemical potential is the energy cost of adding one particle at fixed entropy and volume, and it enters as a Lagrange multiplier enforcing a fixed particle number. Photons are continually created and destroyed by the cavity walls, so N is not conserved and there is no such constraint; equivalently, equilibrium is reached by minimising the free energy with respect to N, and ∂F/∂N = μ = 0. The occupation of a mode then reduces to the Planck factor 1/(e^(ħω/kT) − 1). Choice A is a plausible-sounding but false generalisation — masslessness is not the criterion, as shown by a gas of massless particles whose number IS conserved, which would have μ ≠ 0. Note the corollary: with μ = 0 fixed, the photon number density is not a free parameter but is determined entirely by T, scaling as T³."
      }

    ]
  }
];
