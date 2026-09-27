import React from "react";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import {
  QUIZ_CH13,
  QUIZ_TNB,
  QUIZ_CH16_1,
  QUIZ_CH16_3,
  QUIZ_CH16_4,
  QUIZ_CH16_5
} from "../../data/mvVectorQuizzes";
import "./PartialDerivativesGuide.css"; 

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <div className="box def" style={{ borderColor: "var(--gold)" }}>
        <div className="box-lbl" style={{ color: "var(--gold)" }}>👋 Hey — Read This First!</div>
        <p style={{ marginBottom: "0.7rem" }}>
          {"This guide assumes you know "}<strong>absolutely nothing</strong>{" about advanced calculus. Every word, every symbol, every idea will be explained from scratch — in plain everyday language. No jargon without explanation. No formula without a story behind it."}
        </p>
        <p style={{ marginBottom: "0.7rem" }}>
          {"Think of this as a friend sitting next to you explaining it at a coffee shop, not a professor lecturing at a chalkboard."}
        </p>
        <p style={{ margin: 0 }}>
          {"Whenever you see a scary-looking formula, "}<strong>slow down</strong>{". Read the explanation above it first. The formula is just a shorthand for something you already understand."}
        </p>
      </div>
    </div>
  );
}

function RealLifeUse({ children }) {
  return (
    <div className="box thm" style={{ borderColor: "var(--gold)" }}>
      <div className="box-lbl" style={{ color: "var(--gold)" }}>Real-life use</div>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}

/* =========================================
   PART 1 SECTIONS 
========================================= */

function SectionCh13() {
  return (
    <section className="section" id="ch13">
      <RealLifeUse>
        {"Robotics, animation, and GPS tracking all use vector-valued paths $\\mathbf{r}(t)$ — position as a function of time — exactly the objects in this chapter."}
      </RealLifeUse>

      <div className="sec-badge">Vector Functions</div>
      <h2 className="sec-title">Vector-Valued Functions</h2>
      
      <h3 className="subsec">Step 0 — What Even Is a Function?</h3>
      <p>
        {"Before anything else, let's make sure we understand what a \"function\" means. A "}<strong>function</strong>{" is just a "}<em>machine</em>{". You put a number in. You get a number out. That's it."}
      </p>
      <p>
        {"For example, $f(x) = x^2$ is a function. You put in $3$, you get out $9$. You put in $5$, you get out $25$. One number in → one number out. This is what you've done in regular calculus."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Think of it like a vending machine. You press button \"3\" (the input). Out comes a bag of chips labeled \"9\" (the output). Simple."}
      </div>

      <h3 className="subsec">Step 1 — What Is a Vector?</h3>
      <p>
        {"A "}<strong>vector</strong>{" is just a way to describe something that has both a "}<em>size</em>{" (how much) and a "}<em>direction</em>{" (which way). Regular numbers only have size. Vectors have both."}
      </p>
      <p>
        {"In everyday life: \"Walk 5 steps\" is just a number (a "}<em>scalar</em>{"). But \"Walk 5 steps "}<strong>north</strong>{"\" is a vector — it tells you how much AND which direction."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Imagine giving directions to your friend on the phone. Saying \"drive 10 km\" is useless — 10 km which way? But saying \"drive 10 km east\" is a vector. It has magnitude (10 km) and direction (east). That extra direction information is what makes a vector a vector."}
      </div>
      <p>
        {"In 3D space (our world), a vector has three components — one for each direction: left-right (x), front-back (y), and up-down (z). We write it as:"}
      </p>
      <div className="fml">
        {"$$\\mathbf{v} = \\langle 3,\\; -1,\\; 5 \\rangle$$"}
      </div>
      <p>
        {"This means: move 3 in the x-direction, move −1 in the y-direction (so backward 1), and move 5 in the z-direction (up 5). The three numbers together describe one complete \"arrow\" in space."}
      </p>

      <h3 className="subsec">Step 2 — A Vector-Valued Function: The Machine That Outputs Arrows</h3>
      <p>
        {"Now combine the two ideas. A "}<strong>vector-valued function</strong>{" is a machine where you put a number in, and you get a "}<em>vector</em>{" (an arrow) out instead of a plain number."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Picture a GPS tracker on a drone. Every second (the input = time $t$), the tracker outputs the drone's current position as three numbers: how far east, how far north, how high up. That output — three numbers bundled together — is a vector. The whole GPS tracker is the vector-valued function $\\mathbf{r}(t)$."}
      </div>
      <p>Mathematically, we write this as:</p>

      <div className="box def">
        <div className="box-lbl">Definition — Vector-Valued Function</div>
        <p>{"A "}<strong>vector-valued function</strong>{" $\\mathbf{r}(t)$ takes in a single number $t$ (usually time) and outputs a position vector:"}</p>
        <div className="fml">
          {"$$\\mathbf{r}(t) = f(t)\\,\\mathbf{i} + g(t)\\,\\mathbf{j} + h(t)\\,\\mathbf{k} = \\langle f(t),\\; g(t),\\; h(t) \\rangle$$"}
        </div>
        <p>{"Here, $f(t)$ tells you the x-position at time $t$, $g(t)$ tells you the y-position, and $h(t)$ tells you the z-position. The bold letters $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ are just shorthand labels meaning \"x-direction\", \"y-direction\", \"z-direction\"."}</p>
      </div>

      <div className="note">
        <strong>Analogy:</strong> {"Imagine tracking a rollercoaster car. At time $t = 0$ seconds it's at position (0, 0, 0) — the starting point. At $t = 1$ second it's at (3, 1, 2) — 3 meters right, 1 meter forward, 2 meters up. At $t = 2$ seconds it's somewhere else. The function $\\mathbf{r}(t)$ records this position at every single moment. As $t$ increases, the tip of the position vector traces the "}<em>path</em>{" of the rollercoaster — a curve winding through 3D space."}
      </div>

      <h3 className="subsec">Step 3 — The Space Curve: The Path Left Behind</h3>
      <p>
        {"As $t$ changes (time passes), $\\mathbf{r}(t)$ traces out a path. This path is called a "}<strong>space curve</strong>{". It's just the trail left by a moving point in 3D space."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Think of a sparkler on New Year's Eve. As someone waves it around in the dark, it leaves a glowing trail in the air. That glowing trail — whatever shape it makes — is the \"space curve.\" The sparkler is the moving point. The function $\\mathbf{r}(t)$ describes where the sparkler is at every moment. The visible trail is the curve."}
      </div>
      <p>
        {"A helix (like a spring or a DNA strand) is one of the most common examples. If you set:"}
      </p>
      <div className="fml">
        {"$$\\mathbf{r}(t) = \\langle \\cos t,\\; \\sin t,\\; t \\rangle$$"}
      </div>
      <p>
        {"…then as $t$ increases, the x and y components go in circles (because cosine and sine make circles), while the z component just keeps going up. The result is a spiral that keeps rising — exactly like a spring or a screw thread."}
      </p>

      <h3 className="subsec">Step 4 — Limits: What Happens "Just Before"?</h3>
      <p>
        {"A "}<strong>limit</strong>{" asks: \"As the input gets really close to some value, what does the output get close to?\" It's about "}<em>approaching</em>{" a value, not necessarily hitting it exactly."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Imagine driving toward a red light. As you get closer and closer, your distance to the light approaches zero. The \"limit\" of your distance as you approach the light is zero — even if you eventually stop just before reaching it. The limit describes the "}<em>trend</em>{", the destination you're heading toward."}
      </div>
      <p>
        {"For vector-valued functions, taking a limit is easy: just take the limit of "}<em>each piece separately</em>{". Since $\\mathbf{r}(t)$ has three components (x, y, z), just find the limit of each one:"}
      </p>
      <div className="fml">
        {"$$\\lim_{t \\to a} \\mathbf{r}(t) = \\left\\langle \\lim_{t\\to a} f(t),\\;\\; \\lim_{t\\to a} g(t),\\;\\; \\lim_{t\\to a} h(t) \\right\\rangle$$"}
      </div>
      <p>
        <strong>Continuity</strong>{" means there are no sudden jumps. If a function is continuous, its graph is one smooth, unbroken line — no teleporting. For $\\mathbf{r}(t)$, continuity just means all three component functions are continuous."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"A continuous path is like a road with no gaps. You can drive along it without ever leaving the ground. A discontinuous function would be like the road suddenly ending — you'd have to teleport to a different spot to continue. In calculus, we usually insist our paths are continuous (no teleporting)."}
      </div>

      <h3 className="subsec">Step 5 — The Derivative: How Fast and Which Way Are You Going?</h3>
      <p>
        {"The "}<strong>derivative</strong>{" is one of the two big ideas of calculus. In regular calculus, the derivative of $f(x)$ tells you the "}<em>slope</em>{" of the curve at a point — how steep it is."}
      </p>
      <p>
        {"For a vector-valued function, the derivative $\\mathbf{r}'(t)$ tells you something much more physical and intuitive: it tells you the object's "}<strong>velocity</strong>{" — both "}<em>how fast</em>{" it is moving AND "}<em>in which direction</em>{" it is moving at that instant."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"You're in a car. The speedometer tells you how fast you're going — but not which way. The velocity combines both: \"60 km/h going northeast.\" The derivative $\\mathbf{r}'(t)$ is the velocity. It's an "}<em>arrow</em>{" (a vector) that points in the direction of motion, and whose length tells you the speed."}
      </div>

      <div className="box thm">
        <div className="box-lbl">🔑 The Most Important Idea About the Derivative</div>
        <p>{"If you know where something is at every time $t$ (that's $\\mathbf{r}(t)$), then the derivative $\\mathbf{r}'(t)$ tells you the "}<strong>direction it is heading</strong>{" and "}<strong>how fast</strong>{" at each moment. This is the velocity vector."}</p>
        <p>{"Geometrically: draw the path. At any point on the path, draw a straight line that just barely \"grazes\" (touches) the curve without crossing it. That line is called the "}<strong>tangent line</strong>{". The derivative vector points along that tangent line."}</p>
      </div>

      <p>
        {"The mathematical definition looks scary but the idea is simple: compare where you are now vs where you were a tiny moment ago, then divide by that tiny time gap. As the time gap shrinks toward zero, you get the instantaneous velocity:"}
      </p>
      <div className="fml">
        {"$$\\mathbf{r}'(t) = \\lim_{\\Delta t \\to 0} \\frac{\\mathbf{r}(t+\\Delta t) - \\mathbf{r}(t)}{\\Delta t}$$"}
      </div>
      <p>
        {"The beautiful shortcut: since $\\mathbf{r}(t) = \\langle f(t), g(t), h(t) \\rangle$, just differentiate each component on its own:"}
      </p>
      <div className="fml">
        {"$$\\mathbf{r}'(t) = \\langle f'(t),\\; g'(t),\\; h'(t) \\rangle$$"}
      </div>
      <div className="note">
        <strong>Analogy:</strong> {"If the drone's east-west position is $f(t) = 3t^2$, then $f'(t) = 6t$ is how fast it's moving east-west at time $t$. Same for the other directions. The three speeds together form the velocity vector. Simple!"}
      </div>

      <h3 className="subsec">Step 6 — Speed vs Velocity: A Crucial Difference</h3>
      <p>
        <strong>Velocity</strong>{" is a vector — it has direction. \"Going 60 km/h northeast\" is velocity."}
      </p>
      <p>
        <strong>Speed</strong>{" is just a number — the "}<em>magnitude</em>{" (length) of the velocity vector. It tells you how fast, ignoring direction. Speed is always positive or zero; velocity can point any way."}
      </p>
      <div className="fml">
        {"$$\\text{Speed} = |\\mathbf{r}'(t)| = \\sqrt{[f'(t)]^2 + [g'(t)]^2 + [h'(t)]^2}$$"}
      </div>
      <p>
        {"The formula for the magnitude (length) of a vector is just the 3D version of the Pythagorean theorem — square each component, add them up, take the square root. That's it."}
      </p>

      <h3 className="subsec">Step 7 — The Unit Tangent Vector: Pure Direction, No Noise</h3>
      <p>
        {"Sometimes we only care about "}<em>which way</em>{" something is moving, not how fast. For example, if you just want to know \"which direction is the road going at this point on a highway map,\" you don't care about speed."}
      </p>
      <p>
        {"The "}<strong>unit tangent vector</strong>{" strips away the speed and leaves only direction. We get it by taking the velocity vector and dividing by its own length (which makes the length exactly 1):"}
      </p>
      <div className="fml">
        {"$$\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{|\\mathbf{r}'(t)|}$$"}
      </div>
      <div className="note">
        <strong>Analogy:</strong> {"Imagine an arrow pointing northeast with length 10. If you shrink it to length 1 while keeping it pointing northeast, you now have the \"unit\" vector in that direction. Dividing by the magnitude is just scaling it down (or up) to length exactly 1. The word \"unit\" in math always means \"length = 1.\""}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Constant Length = Perpendicular Derivative</div>
        <p>{"If $|\\mathbf{r}(t)| = \\text{constant}$ for all $t$, then $\\mathbf{r}(t) \\cdot \\mathbf{r}'(t) = 0$."}</p>
        <p><strong>What does this mean in plain English?</strong>{" If the length (size) of the vector never changes — like a planet orbiting the sun at a fixed distance — then the velocity arrow must always point "}<em>sideways</em>{" (perpendicular) to the position. The planet can't move toward or away from the sun, so it can only move sideways."}</p>
        <p>{"The dot product $\\mathbf{r} \\cdot \\mathbf{r}' = 0$ is the mathematical way of saying \"these two vectors are perpendicular.\" Two vectors are perpendicular if their dot product is zero — this is a standard fact from geometry."}</p>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 1</div>
        <div className="exm-title">Finding the Velocity and Unit Tangent of a Helix</div>
        <p>{"Given $\\mathbf{r}(t) = \\cos t\\,\\mathbf{i} + \\sin t\\,\\mathbf{j} + t\\,\\mathbf{k}$, find the velocity vector and the unit tangent vector at $t = 0$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>This is a helix — imagine a screw thread or a spiral staircase. The x and y go around in a circle (that's what cos and sin do), while z just steadily increases (that's the "+t" part — climbing upward at a steady rate).</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>Differentiate each component separately.</strong><br/>
            {"The derivative of $\\cos t$ is $-\\sin t$. The derivative of $\\sin t$ is $\\cos t$. The derivative of $t$ is $1$."}<br/>
            {"So: $\\mathbf{r}'(t) = \\langle -\\sin t,\\; \\cos t,\\; 1 \\rangle$"}</li>
            <li><strong>Plug in $t = 0$ to find the velocity at that moment.</strong><br/>
            {"$\\sin(0) = 0$ and $\\cos(0) = 1$, so:"}<br/>
            {"$\\mathbf{r}'(0) = \\langle -0,\\; 1,\\; 1 \\rangle = \\langle 0,\\; 1,\\; 1 \\rangle$"}<br/>
            {"This arrow points: \"0 in x, 1 in y, 1 in z\" — diagonally forward and up."}</li>
            <li><strong>Find the speed (length of the velocity vector).</strong><br/>
            {"Use the Pythagorean theorem in 3D: $|\\mathbf{r}'(0)| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{0+1+1} = \\sqrt{2}$"}</li>
            <li><strong>Divide velocity by speed to get pure direction (unit tangent).</strong><br/>
            {"$\\mathbf{T}(0) = \\dfrac{\\langle 0,1,1\\rangle}{\\sqrt{2}} = \\left\\langle 0,\\;\\dfrac{1}{\\sqrt{2}},\\;\\dfrac{1}{\\sqrt{2}} \\right\\rangle$"}<br/>
            {"This has length exactly 1 (you can verify: $\\sqrt{0 + \\frac{1}{2} + \\frac{1}{2}} = \\sqrt{1} = 1$ ✓)"}</li>
          </ol>
          <div className="fml">
            {"$$\\text{✓ At } t=0 \\text{, the helix is moving in direction } \\left\\langle 0,\\,\\tfrac{1}{\\sqrt{2}},\\,\\tfrac{1}{\\sqrt{2}}\\right\\rangle \\text{ — forward and upward at 45°.}$$"}
          </div>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 2</div>
        <div className="exm-title">Finding the Tangent Line to a Space Curve</div>
        <p>{"Find the equation of the tangent line to $\\mathbf{r}(t) = \\langle t^2,\\, t,\\, t^3 \\rangle$ at $t = 1$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>A tangent line is the straight line that "hugs" the curve at one specific point. Imagine pressing a ruler against a curved road so it just touches the road without crossing it — that ruler is the tangent line.</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>Find the point where the tangent line touches the curve.</strong><br/>
            {"Plug $t=1$ into $\\mathbf{r}(t)$: $\\mathbf{r}(1) = \\langle 1^2,\\; 1,\\; 1^3 \\rangle = \\langle 1, 1, 1 \\rangle$"}<br/>
            {"So the point is $P = (1, 1, 1)$ in 3D space."}</li>
            <li><strong>Find the direction of the tangent line (the velocity at that point).</strong><br/>
            {"First differentiate: $\\mathbf{r}'(t) = \\langle 2t,\\; 1,\\; 3t^2 \\rangle$"}<br/>
            {"Then plug in $t=1$: $\\mathbf{r}'(1) = \\langle 2, 1, 3 \\rangle$"}<br/>
            {"This is our direction vector — the tangent line goes in this direction."}</li>
            <li><strong>Write the tangent line equation.</strong><br/>
            {"A line in 3D needs a "}<em>starting point</em>{" and a "}<em>direction</em>{". We have both:"}<br/>
            {"Start: $(1,1,1)$ \u00a0\u00a0 Direction: $\\langle 2,1,3 \\rangle$"}<br/>
            {"Line: $\\mathbf{L}(s) = \\langle 1,1,1 \\rangle + s\\langle 2,1,3 \\rangle$"}<br/>
            {"Or written out: $x = 1+2s,\\quad y = 1+s,\\quad z = 1+3s$"}</li>
          </ol>
        </div>
      </div>

      <div className="box thm">
        <div className="box-lbl">🔑 Vector Functions — The Complete Picture in Plain English</div>
        <p>{"<strong>Vector-valued function $\\mathbf{r}(t)$:</strong> A position tracker. Input = time, Output = location in 3D space."}</p>
        <p>{"<strong>Space curve:</strong> The path traced out as time passes."}</p>
        <p>{"<strong>Derivative $\\mathbf{r}'(t)$:</strong> The velocity — which way you're going and how fast."}</p>
        <p>{"<strong>Speed $|\\mathbf{r}'(t)|$:</strong> Just how fast, without direction."}</p>
        <p>{"<strong>Unit tangent $\\mathbf{T}(t)$:</strong> Pure direction — which way, without how fast."}</p>
      </div>
    </section>
  );
}

function SectionTNB() {
  return (
    <section className="section" id="tnb-frame">
      <div className="sec-badge">Vector Functions</div>
      <h2 className="sec-title">The TNB Frame, Curvature, and Torsion</h2>
      <p>
        {"When analyzing the motion of a particle along a smooth space curve $\\mathbf{r}(t)$, we often need a coordinate system that travels "}<em>with</em>{" the particle. This is the "}<strong>Frenet-Serret Frame</strong>{" (or TNB frame), consisting of three mutually orthogonal unit vectors."}
      </p>

      <div className="box def">
        <div className="box-lbl">The Three Vectors of the TNB Frame</div>
        <p><strong>{"1. Unit Tangent Vector $\\mathbf{T}(t)$"}</strong><br/>
        {"Indicates the direction of instantaneous motion. It is simply the normalized velocity vector."}</p>
        <div className="fml">{"$$\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{|\\mathbf{r}'(t)|}$$"}</div>
        
        <p><strong>{"2. Principal Unit Normal Vector $\\mathbf{N}(t)$"}</strong><br/>
        {"Because $\\mathbf{T}(t)$ has a constant length of 1, its derivative $\\mathbf{T}'(t)$ is always orthogonal to $\\mathbf{T}(t)$. $\\mathbf{N}(t)$ points in the direction the curve is turning (toward the concave side)."}</p>
        <div className="fml">{"$$\\mathbf{N}(t) = \\frac{\\mathbf{T}'(t)}{|\\mathbf{T}'(t)|}$$"}</div>
        
        <p><strong>{"3. Binormal Vector $\\mathbf{B}(t)$"}</strong><br/>
        {"Completes the right-handed orthogonal system. It is perpendicular to the plane formed by $\\mathbf{T}$ and $\\mathbf{N}$ (the osculating plane)."}</p>
        <div className="fml">{"$$\\mathbf{B}(t) = \\mathbf{T}(t) \\times \\mathbf{N}(t)$$"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">{"Curvature ($\\kappa$) and Torsion ($\\tau$)"}</div>
        <p><strong>{"Curvature ($\\kappa$)"}</strong> {"measures how sharply a curve bends. It is the rate of change of the unit tangent vector with respect to arc length $s$. For a general parameter $t$, we use:"}</p>
        <div className="fml">{"$$\\kappa = \\frac{|\\mathbf{T}'(t)|}{|\\mathbf{r}'(t)|} = \\frac{|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)|}{|\\mathbf{r}'(t)|^3}$$"}</div>
        <p><em>{"Special Case for 2D functions $y = f(x)$:"}</em> {"$\\kappa = \\frac{|f''(x)|}{[1 + (f'(x))^2]^{3/2}}$"}</p>
        
        <p><strong>{"Torsion ($\\tau$)"}</strong> {"measures how sharply the curve twists out of the $\\mathbf{T}$-$\\mathbf{N}$ plane. A planar curve has a torsion of 0."}</p>
        <div className="fml">{"$$\\tau = \\frac{(\\mathbf{r}'(t) \\times \\mathbf{r}''(t)) \\cdot \\mathbf{r}'''(t)}{|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)|^2}$$"}</div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 3</div>
        <div className="exm-title">TNB Frame and Curvature of a Circular Helix</div>
        <p><strong>Problem:</strong> {"Find $\\mathbf{T}$, $\\mathbf{N}$, $\\mathbf{B}$, and $\\kappa$ for the helix $\\mathbf{r}(t) = \\langle 3\\cos t, 3\\sin t, 4t \\rangle$."}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>Step 1: Find Velocity and its Magnitude</strong><br/>
            {"$\\mathbf{r}'(t) = \\langle -3\\sin t, 3\\cos t, 4 \\rangle$"}<br/>
            {"$|\\mathbf{r}'(t)| = \\sqrt{(-3\\sin t)^2 + (3\\cos t)^2 + 4^2} = \\sqrt{9(\\sin^2 t + \\cos^2 t) + 16} = \\sqrt{25} = 5$"}</li>
            <li><strong>{"Step 2: Find the Unit Tangent $\\mathbf{T}(t)$"}</strong><br/>
            {"$\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{|\\mathbf{r}'(t)|} = \\langle -\\frac{3}{5}\\sin t, \\frac{3}{5}\\cos t, \\frac{4}{5} \\rangle$"}</li>
            <li><strong>{"Step 3: Find the Principal Unit Normal $\\mathbf{N}(t)$"}</strong><br/>
            {"$\\mathbf{T}'(t) = \\langle -\\frac{3}{5}\\cos t, -\\frac{3}{5}\\sin t, 0 \\rangle$"}<br/>
            {"$|\\mathbf{T}'(t)| = \\sqrt{\\frac{9}{25}\\cos^2 t + \\frac{9}{25}\\sin^2 t + 0} = \\frac{3}{5}$"}<br/>
            {"$\\mathbf{N}(t) = \\frac{\\mathbf{T}'(t)}{|\\mathbf{T}'(t)|} = \\langle -\\cos t, -\\sin t, 0 \\rangle$"}<br/>
            <em>{"Notice $\\mathbf{N}$ points straight toward the z-axis, showing the curve is always turning inward."}</em></li>
            <li><strong>{"Step 4: Find the Binormal $\\mathbf{B}(t)$"}</strong><br/>
            {"$\\mathbf{B}(t) = \\mathbf{T}(t) \\times \\mathbf{N}(t) = \\langle \\frac{4}{5}\\sin t, -\\frac{4}{5}\\cos t, \\frac{3}{5} \\rangle$"}</li>
            <li><strong>{"Step 5: Find Curvature $\\kappa$"}</strong><br/>
            {"$\\kappa = \\frac{|\\mathbf{T}'(t)|}{|\\mathbf{r}'(t)|} = \\frac{3/5}{5} = \\frac{3}{25}$"}</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function SectionCh161() {
  return (
    <section className="section" id="ch16-1">
      <div className="sec-badge">Line Integrals and Vector Fields</div>
      <h2 className="sec-title">Line Integrals, Vector Fields · Work, Circulation & Flux</h2>
      
      <h3 className="subsec">First — What Is an Integral? (Ground Zero)</h3>
      <p>
        {"An "}<strong>integral</strong>{" is a way to add up infinitely many tiny pieces. That's literally it. The integral sign $\\int$ is just a stretched \"S\" — it stands for \"Sum.\" You're summing up tiny, tiny little contributions to find a total."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"You want to know how much rain fell in your city over an entire day. You can't just measure at one moment — rain changes every minute. So you measure tiny amounts every second and add them all up. That process of \"measuring tiny amounts and summing them continuously\" is an integral. The result is the total rainfall for the day. That's all an integral is — a continuous running total of tiny contributions."}
      </div>
      <p>
        {"The regular integral $\\int_a^b f(x)\\, dx$ adds up tiny values of a function along a "}<em>straight line</em>{" from $a$ to $b$. But what if the path isn't straight? That's where line integrals come in."}
      </p>

      <h3 className="subsec">What Is a Line Integral? Adding Along a Curved Path</h3>
      <p>
        {"A "}<strong>line integral</strong>{" does the exact same \"add up tiny pieces\" idea, but now along a "}<em>curved path</em>{" through space. The word \"line\" here really means \"curve\" — we're integrating along any path, no matter how twisty."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"You're hiking along a winding mountain trail. The elevation (height above sea level) is different at every step along the trail. A line integral would let you calculate the total \"altitude accumulated\" over your entire hike — weighting every tiny bit of trail by how high up it is. A straight integral can't do this because your trail twists and turns. That's exactly the problem line integrals solve."}
      </div>
      <p>
        {"The key ingredient is $ds$ — the arc-length element. Think of $ds$ as a grain-of-sand-sized piece of the curved path. It tells you \"how much of the curve are you covering right now?\" We then multiply by the function value at that point and sum everything up:"}
      </p>
      <div className="fml">
        {"$$\\int_C f\\, ds = \\int_a^b f\\!\\left(\\mathbf{r}(t)\\right) \\left|\\mathbf{r}'(t)\\right|\\, dt$$"}
      </div>
      <p>
        {"The $|\\mathbf{r}'(t)|$ — the speed — appears because when you move faster along the curve, each unit of time $dt$ corresponds to a longer piece of curve. You must account for how much path is covered per unit of time."}
      </p>

      <h3 className="subsec">What Is a Vector Field? Arrows Everywhere!</h3>
      <p>
        {"A "}<strong>vector field</strong>{" is what you get when you assign an arrow (vector) to every single point in space. At every location there's a vector telling you the direction and strength of something."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> <strong>Weather wind map:</strong> {"Open a weather app. The wind forecast shows little arrows all over the map. Each arrow points in the direction wind is blowing, and its size shows strength. Some arrows point north, some east. Some are long (strong wind), some short (gentle breeze). That entire picture — arrows at every location — is a vector field. You can have vector fields for gravity, electric fields, magnetic fields, water current, air pressure — any quantity that has both direction and magnitude at every point."}
      </div>
      <div className="fml">
        {"$$\\mathbf{F}(x,y,z) = M(x,y,z)\\,\\mathbf{i} + N(x,y,z)\\,\\mathbf{j} + P(x,y,z)\\,\\mathbf{k}$$"}
      </div>
      <p>
        {"The three functions $M$, $N$, $P$ give the x, y, z components of the arrow at each point $(x,y,z)$. Different locations have different arrows — that's the whole point. The field "}<em>varies</em>{" in space."}
      </p>

      <h3 className="subsec">Work: How Much Does a Force Help or Hinder Your Journey?</h3>
      <p>
        {"In physics, "}<strong>work</strong>{" is the energy transferred by a force to a moving object. But here's the critical point: "}<em>only the component of the force in the direction of motion counts.</em>
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Picture pushing a shopping cart in a parking lot. If you push it directly forward (same direction it moves), all your effort goes into moving it — maximum work done. If you push it at a diagonal (partly forward, partly sideways), only the forward component contributes to moving the cart forward. The sideways component is completely wasted. And if somehow you push it perfectly sideways while it rolls forward, you do absolutely zero work on its forward motion. This \"how aligned are force and motion\" is exactly what the dot product captures."}
      </div>
      <p>
        {"The dot product $\\mathbf{F} \\cdot d\\mathbf{r}$ does this automatically: it multiplies the force components by the matching movement components and adds them up. Result is positive if force helps, negative if force fights, zero if they're perpendicular."}
      </p>
      <div className="fml">
        {"$$W = \\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t)\\, dt$$"}
      </div>

      <div className="box thm">
        <div className="box-lbl">🔑 Three Scenarios for Work — The Physical Intuition</div>
        <p>🟢 <strong>Force and motion in same direction:</strong> {"Dot product $> 0$ → Positive work. Force is helping you. Energy flows into the object. (Like wind pushing you while you run with it.)"}</p>
        <p>🔴 <strong>Force and motion in opposite directions:</strong> {"Dot product $< 0$ → Negative work. Force is fighting you. Energy is being removed from the object. (Like brakes slowing a car — friction does negative work on the car's motion.)"}</p>
        <p>⚪ <strong>Force perpendicular to motion:</strong> {"Dot product $= 0$ → Zero work. Force doesn't help or hurt motion. (Like a satellite in orbit — gravity pulls it downward, but it moves sideways, so gravity does zero work on its speed.)"}</p>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 4</div>
        <div className="exm-title">Computing Work Along a Curved Path — Full Walkthrough</div>
        <p>{"Find the work done by $\\mathbf{F} = xy\\,\\mathbf{i} + y^2\\,\\mathbf{j}$ along the parabola $y = x^2$ from $(0,0)$ to $(1,1)$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>{"Scenario: A force acts on a particle. At any point $(x,y)$, the force vector is $\\langle xy,\\, y^2\\rangle$. The particle moves along the curved path $y = x^2$. How much total energy does the force transfer?"}</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Parameterize — rewrite the path as one function of time $t$."}</strong><br/>
            {"The path is the parabola $y = x^2$. The simplest way: let $x = t$, then $y = t^2$."}<br/>
            {"Position at time $t$: $\\mathbf{r}(t) = \\langle t,\\; t^2 \\rangle$, where $t$ goes from $0$ to $1$."}<br/>
            {"Velocity (derivative): $\\mathbf{r}'(t) = \\langle 1,\\; 2t \\rangle$ \u00a0←\u00a0 differentiate each component."}</li>
            <li><strong>{"Express the force $\\mathbf{F}$ purely in terms of $t$."}</strong><br/>
            {"The force is $\\mathbf{F} = \\langle xy,\\; y^2 \\rangle$. Substitute $x=t, y=t^2$:"}<br/>
            {"$xy = t \\cdot t^2 = t^3$ \u00a0\u00a0\u00a0 and \u00a0\u00a0\u00a0 $y^2 = (t^2)^2 = t^4$"}<br/>
            {"So the force at time $t$ is: $\\mathbf{F} = \\langle t^3,\\; t^4 \\rangle$"}</li>
            <li><strong>{"Dot product: multiply matching components and add."}</strong><br/>
            {"$\\mathbf{F} \\cdot \\mathbf{r}'(t) = (\\text{x-force})(\\text{x-velocity}) + (\\text{y-force})(\\text{y-velocity})$"}<br/>
            {"$= t^3 \\cdot 1 + t^4 \\cdot 2t = t^3 + 2t^5$"}<br/>
            {"This is the \"instantaneous rate of work\" at time $t$."}</li>
            <li><strong>{"Integrate to get total work accumulated over the whole journey."}</strong><br/>
            {"$W = \\int_0^1 (t^3 + 2t^5)\\, dt = \\left[\\frac{t^4}{4} + \\frac{2t^6}{6}\\right]_0^1 = \\frac{1}{4} + \\frac{1}{3} = \\frac{3+4}{12} = \\frac{7}{12}$"}</li>
          </ol>
          <div className="fml">
            {"$$\\displaystyle W = \\frac{7}{12} \\text{  ← This much energy was transferred by the force along this specific curved path.}$$"}
          </div>
        </div>
      </div>

      <h3 className="subsec">Circulation: Does the Field "Spin" With You Around a Loop?</h3>
      <p>
        <strong>Circulation</strong> {"asks a very specific question: if you walk all the way around a closed loop (starting and ending at the same point), does the vector field mostly push you forward, backward, or neither?"}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Imagine walking in a circle around a whirlpool drain. If the water spins in the same direction as your walk (both counterclockwise), it helps you the whole time — high positive circulation. If the water spins the other way (clockwise against your counterclockwise walk), it fights you — negative circulation. If the water is perfectly still, you get zero. Circulation is the mathematical \"score\" of how well the field's spin matches your loop direction."}
      </div>
      <div className="fml">
        {"$$\\text{Circulation} = \\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$$"}
      </div>
      <p>
        {"The symbol $\\oint$ (integral sign with a circle) simply means: \"integrate around a "}<em>closed</em>{" loop — a path that ends exactly where it started.\""}
      </p>

      <h3 className="subsec">Flux: How Much Passes <em>Through</em> a Curve?</h3>
      <p>
        {"While circulation measures flow "}<em>along</em>{" a curve (in the tangent direction), "}<strong>flux</strong>{" measures how much of the field passes "}<em>through</em>{" (crosses) the curve perpendicularly."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Imagine a window screen. Wind is blowing. "}<strong>Flux</strong>{" is how much air passes "}<em>through</em>{" the screen — the part of the wind that actually crosses from one side to the other. If the wind blows exactly parallel to the screen (along it, not through it), zero air crosses — zero flux. If the wind blows perpendicular to the screen (straight into it), maximum air passes through — maximum flux. The \"normal\" (perpendicular) component is what matters for flux."}
      </div>
      <div className="fml">
        {"$$\\text{Flux} = \\oint_C \\mathbf{F} \\cdot \\mathbf{n}\\, ds = \\oint_C M\\, dy - N\\, dx$$"}
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 5</div>
        <div className="exm-title">Flux Across a Circle — How Much Flows Out?</div>
        <p>{"Find the flux of $\\mathbf{F} = x\\,\\mathbf{i} + y\\,\\mathbf{j}$ outward across the unit circle $x^2 + y^2 = 1$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>{"The field $\\mathbf{F} = \\langle x, y \\rangle$ points directly away from the origin at every point — like a perfect outward explosion from the center. We want: how much of this outward field crosses the unit circle boundary?"}</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Parameterize the unit circle (walk around it)."}</strong><br/>
            {"Going counterclockwise: $x = \\cos t,\\; y = \\sin t,\\; t \\in [0, 2\\pi]$"}<br/>
            {"The tiny movements: $dx = -\\sin t\\, dt$ and $dy = \\cos t\\, dt$"}</li>
            <li><strong>{"Set up the flux integral $\\oint M\\,dy - N\\,dx$."}</strong><br/>
            {"Here $M = x = \\cos t$ and $N = y = \\sin t$:"}<br/>
            {"$\\text{Flux} = \\int_0^{2\\pi} (\\cos t)(\\cos t\\, dt) - (\\sin t)(-\\sin t\\, dt)$"}<br/>
            {"$= \\int_0^{2\\pi} (\\cos^2 t + \\sin^2 t)\\, dt$"}</li>
            <li><strong>{"Use the golden identity: $\\cos^2 t + \\sin^2 t = 1$ always."}</strong><br/>
            {"$= \\int_0^{2\\pi} 1\\, dt = 2\\pi$"}</li>
          </ol>
          <div className="fml">
            {"$$\\text{✓ Flux = } 2\\pi. \\text{ The field radiates perfectly outward at every point of the circle, so every bit of it crosses the boundary — giving the maximum possible flux.}$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   PART 2 SECTIONS
========================================= */

function SectionCh163() {
  return (
    <section className="section" id="ch16-3">
      <div className="sec-badge">Path Independence</div>
      <h2 className="sec-title">Path Independence, Conservative Fields & Potential Functions</h2>
      
      <h3 className="subsec">The Big Question: Does the Path Matter?</h3>
      <p>
        {"Here's the profound question of this entire section: if you want to travel from city A to city B, and a force field (like gravity or wind) is acting on you the whole time — does the "}<em>route</em>{" you take matter for the total work done? Or does only the start and end point matter?"}
      </p>
      <p>
        {"The answer depends on the type of field. Some fields are \"fair\" — they don't care about your route. Others are \"path-hungry\" — take a longer or different route, and the work changes."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> <strong>Gravity on a slope:</strong> {"Climb a mountain. It doesn't matter if you take the steep direct route or the long winding road — if you start at the same base and end at the same peak, gravity does the exact same amount of work on you (negative work, since it fights your upward movement). Gravity is "}<em>path-independent</em>{". It only cares about where you started and where you ended up."}
      </div>
      <div className="note">
        <strong>Analogy:</strong> <strong>Friction on a road:</strong> {"Now imagine sliding on a frictional surface. Take the direct short path → less friction work. Take the long winding path → way more friction work. Friction is "}<em>path-dependent</em>{". The longer you travel, the more work friction does. You can't just look at start and end points."}
      </div>

      <h3 className="subsec">Path Independence — The Formal Definition</h3>
      <div className="box def">
        <div className="box-lbl">Path Independence</div>
        <p>{"A line integral $\\displaystyle\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ is called "}<strong>path-independent</strong>{" if its value depends "}<em>only</em>{" on the starting point $A$ and ending point $B$, regardless of which curve $C$ you use to get there."}</p>
        <div className="fml">{"$$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A)$$"}</div>
        <p>{"Here $f$ is called a "}<strong>potential function</strong>{". To compute the line integral, you just evaluate $f$ at the two endpoints and subtract. No integration needed! Just like how the change in height determines gravitational work regardless of path."}</p>
      </div>

      <h3 className="subsec">What Is a Conservative Field? The Gradient Connection</h3>
      <p>
        {"A vector field $\\mathbf{F}$ is called "}<strong>conservative</strong>{" if it is path-independent. It turns out this happens when $\\mathbf{F}$ can be written as the "}<em>gradient</em>{" of some scalar function $f$."}
      </p>
      <p>
        {"First — what is a gradient? The "}<strong>gradient</strong>{" $\\nabla f$ (read \"del f\") of a scalar function $f$ is a vector whose components are the partial derivatives of $f$:"}
      </p>
      <div className="fml">
        {"$$\\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x},\\;\\frac{\\partial f}{\\partial y},\\;\\frac{\\partial f}{\\partial z} \\right\\rangle$$"}
      </div>
      <p>
        {"Each component tells you how fast $f$ changes in that direction. The gradient vector always points in the direction of "}<em>steepest increase</em>{" of $f$."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Think of the function $f$ as a landscape (a terrain map). The gradient $\\nabla f$ at any point is the arrow pointing straight uphill — in the direction where the slope is steepest. If you're standing on a hill, $\\nabla f$ points straight up the hill. A ball rolling downhill would roll in the direction of $-\\nabla f$."}
      </div>

      <div className="box def">
        <div className="box-lbl">Conservative Vector Field</div>
        <p>{"$\\mathbf{F}$ is "}<strong>conservative</strong>{" if there exists a scalar function $f$ (the potential function) such that:"}</p>
        <div className="fml">
          {"$$\\mathbf{F} = \\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x},\\;\\frac{\\partial f}{\\partial y},\\;\\frac{\\partial f}{\\partial z} \\right\\rangle$$"}
        </div>
        <p>{"In other words, every arrow in the field is pointing \"uphill\" on some invisible landscape $f$. Gravity, electric fields, and magnetic fields are all conservative. Friction and air resistance are not."}</p>
      </div>

      <h3 className="subsec">How to Test if a Field Is Conservative — The Cross-Partial Test</h3>
      <p>
        {"We need a quick test to check conservativity without finding $f$. Here's the key insight: if $\\mathbf{F} = \\nabla f$, then $M = \\partial f/\\partial x$ and $N = \\partial f/\\partial y$. Taking another derivative of each:"}
      </p>
      <p>
        {"$\\partial M/\\partial y = \\partial^2 f/\\partial y\\partial x$ and $\\partial N/\\partial x = \\partial^2 f/\\partial x\\partial y$. These mixed second derivatives are always equal (when $f$ is nice enough). So:"}
      </p>
      <div className="fml">
        {"$$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\qquad \\longleftarrow \\text{ this must hold for } \\mathbf{F} \\text{ to be conservative (in 2D)}$$"}
      </div>
      <div className="note">
        <strong>Analogy:</strong> {"Think of it as a cross-check. If $\\mathbf{F}$ truly comes from a landscape $f$, then mixing the partial derivatives should give the same answer regardless of order. It's like saying \"if you climb east then north, you get to the same height as climbing north then east.\" If this isn't true, no such landscape $f$ exists — the field isn't conservative."}
      </div>

      <div className="box thm">
        <div className="box-lbl">Fundamental Theorem for Line Integrals</div>
        <p><strong>What it says in plain English:</strong>{" If the field is conservative (comes from a potential function $f$), then all the messy path integration collapses into simply evaluating $f$ at two points:"}</p>
        <div className="fml">{"$$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A)$$"}</div>
        <p>{"This is huge. Instead of integrating along a complicated curve, you just plug in coordinates. Like how gravitational potential energy only depends on height — not on the path you took to get there."}</p>
        <p><strong>Bonus consequence:</strong>{" For a closed loop (A = B, you end where you started): $\\displaystyle\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = f(A) - f(A) = 0$. Conservative fields do zero net work around any closed loop."}</p>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 6</div>
        <div className="exm-title">Finding the Potential Function — Step by Step</div>
        <p>{"Show that $\\mathbf{F} = 2xy\\,\\mathbf{i} + (x^2 + 1)\\,\\mathbf{j}$ is conservative, then find its potential function $f$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>{"We need to find a \"landscape\" function $f(x,y)$ such that the slope of $f$ in the x-direction equals $2xy$, and the slope in the y-direction equals $x^2+1$."}</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Run the cross-partial test to confirm conservativity."}</strong><br />
            {"$M = 2xy$ → differentiate with respect to $y$: $\\;\\dfrac{\\partial M}{\\partial y} = 2x$"}<br/>
            {"$N = x^2+1$ → differentiate with respect to $x$: $\\;\\dfrac{\\partial N}{\\partial x} = 2x$"}<br/>
            {"Both equal $2x$ ✓ → "}<strong>{"The field is conservative!"}</strong></li>
            <li><strong>{"Find $f$ by integrating $M$ with respect to $x$."}</strong><br />
            {"We need $\\dfrac{\\partial f}{\\partial x} = M = 2xy$. Integrate with respect to $x$ (treat $y$ as a constant):"}<br/>
            {"$f = \\int 2xy\\, dx = x^2 y + g(y)$"}<br/>
            {"Why $g(y)$? Because when we differentiate with respect to $x$, any function of $y$ alone disappears. It's the \"unknown y-part\" we must determine."}</li>
            <li><strong>{"Use $\\dfrac{\\partial f}{\\partial y} = N$ to find $g(y)$."}</strong><br />
            {"We have $f = x^2 y + g(y)$. Differentiate with respect to $y$:"}<br/>
            {"$\\dfrac{\\partial f}{\\partial y} = x^2 + g'(y)$"}<br/>
            {"Set this equal to $N = x^2 + 1$:"}<br/>
            {"$x^2 + g'(y) = x^2 + 1$ → $g'(y) = 1$ → $g(y) = y + C$"}</li>
            <li><strong>{"Assemble the final potential function."}</strong><br />
            {"$f(x,y) = x^2 y + y + C$"}<br/>
            {"You can verify: $\\nabla f = \\langle 2xy,\\; x^2+1 \\rangle = \\mathbf{F}$ ✓"}</li>
          </ol>
          <div className="fml">
            {"$$\\text{✓ Potential function: } f(x,y) = x^2 y + y + C \\text{ — this is the \"invisible landscape\" that } \\mathbf{F} \\text{ is the gradient of.}$$"}
          </div>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 7</div>
        <div className="exm-title">Path Independence in Action — No Path Needed!</div>
        <p>{"Using the result from Example 6, evaluate $\\displaystyle\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ from $(0,0)$ to $(2,3)$ along "}<em>any path whatsoever</em>{"."}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Since $\\mathbf{F}$ is conservative with potential $f(x,y) = x^2y + y$, we can use the shortcut formula."}</strong><br />
            {"We don't need to know or describe the path $C$ at all. We just need the endpoints."}</li>
            <li><strong>{"Evaluate $f$ at the endpoint $B = (2,3)$:"}</strong><br />
            {"$f(2,3) = (2)^2(3) + (3) = 4 \\cdot 3 + 3 = 12 + 3 = 15$"}</li>
            <li><strong>{"Evaluate $f$ at the starting point $A = (0,0)$:"}</strong><br />
            {"$f(0,0) = (0)^2(0) + 0 = 0$"}</li>
            <li><strong>{"Subtract: $f(B) - f(A)$."}</strong><br />
            {"$\\displaystyle\\int_C \\mathbf{F}\\cdot d\\mathbf{r} = f(2,3) - f(0,0) = 15 - 0 = 15$"}</li>
          </ol>
          <div className="fml">
            {"$$\\text{✓ Answer = 15, no matter which path you took — straight line, spiral, zigzag, anything. Conservative fields simply don't care.}$$"}
          </div>
        </div>
      </div>
      
      <div className="box thm">
        <div className="box-lbl">🔑 The Five Equivalent Conditions for a Conservative Field</div>
        <p>{"All five of these statements mean the exact same thing. If one is true, all are true:"}</p>
        <ul>
          <li>{"1. $\\mathbf{F} = \\nabla f$ for some scalar function $f$ (potential function exists)"}</li>
          <li>{"2. Cross-partials are equal: $\\partial M/\\partial y = \\partial N/\\partial x$ (in 2D)"}</li>
          <li>{"3. The line integral is path-independent (same value on all paths from A to B)"}</li>
          <li>{"4. The work around "}<em>every</em>{" closed loop is zero: $\\oint \\mathbf{F}\\cdot d\\mathbf{r} = 0$"}</li>
          <li>{"5. The field has no \"rotation\" or \"spin\" — the curl is zero: $\\nabla \\times \\mathbf{F} = \\mathbf{0}$"}</li>
        </ul>
      </div>
    </section>
  );
}

function SectionCh164() {
  return (
    <section className="section" id="ch16-4">
      <div className="sec-badge">Green's Theorem</div>
      <h2 className="sec-title">Green's Theorem in the Plane</h2>
      
      <h3 className="subsec">The Core Idea: The Edge Tells You About the Inside</h3>
      <p>
        {"Green's Theorem is one of the most surprising and beautiful shortcuts in all of mathematics. It says: "}<strong>what happens on the boundary of a 2D region is perfectly equivalent to what happens throughout the entire interior</strong>{"."}
      </p>
      <p>
        {"In other words, instead of integrating over a complicated closed curve (the boundary), you can switch to a double integral over the enclosed region — or the other way around. Pick whichever is easier!"}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Imagine a shallow lake filled with tiny spinning whirlpools. You want to measure the total \"spinning energy\" of the entire lake. Method 1: Swim to every point and measure — exhausting. Method 2: Just measure the water current flowing around the "}<em>shoreline</em>{". Green's Theorem guarantees these give the same answer. The boundary current perfectly summarizes everything happening inside."}
      </div>
      <div className="note">
        <strong>Analogy:</strong> {"Here's another way to see it: imagine a room full of tiny ceiling fans, each spinning. Neighboring fans whose edges touch will spin against each other and cancel out. Only the fans along the outermost wall contribute a net spin in the boundary direction. So the sum of all interior spins equals what you measure at the outer boundary only."}
      </div>

      <div className="box thm">
        <div className="box-lbl">Green's Theorem</div>
        <p><strong>Setup requirements:</strong>{" $C$ is a simple closed curve, traversed "}<em>counterclockwise</em>{" (the region $R$ stays on your left as you walk). $M(x,y)$ and $N(x,y)$ have continuous partial derivatives throughout $R$."}</p>
        <div className="fml">
          {"$$\\oint_C M\\, dx + N\\, dy \\;=\\; \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) dA$$"}
        </div>
        <p><strong>Left side = Line integral.</strong>{" Walk around the boundary curve $C$, accumulating $M\\,dx + N\\,dy$ at each step. This is potentially a messy trigonometric or algebraic computation."}</p>
        <p><strong>Right side = Double integral.</strong>{" Integrate the \"curl\" expression $\\partial N/\\partial x - \\partial M/\\partial y$ over the flat 2D region $R$. Often much simpler — especially when the curl simplifies to a constant!"}</p>
      </div>

      <h3 className="subsec">{"What Is $\\partial N/\\partial x - \\partial M/\\partial y$? The Local Spin Detector"}</h3>
      <p>
        {"The quantity $\\dfrac{\\partial N}{\\partial x} - \\dfrac{\\partial M}{\\partial y}$ measures how much the vector field $\\mathbf{F} = M\\mathbf{i} + N\\mathbf{j}$ \"spins\" or \"rotates\" at each individual point. This is called the "}<strong>2D curl</strong>{"."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Drop a tiny pinwheel into a moving fluid at some point. Does it spin? If yes: the curl is nonzero there. Spins counterclockwise: positive curl. Clockwise: negative curl. Doesn't spin at all: zero curl. The curl is essentially a \"local rotation meter\" for the vector field."}
      </div>
      <p>
        {"Green's Theorem says: "}<em>add up all the local spins throughout the entire region</em>{" (the double integral) and you get the same total as measuring how strongly the field pushes you "}<em>along the boundary</em>{" (the line integral). They're two views of the same thing."}
      </p>

      <div className="sum-grid">
        <div className="sum-card">
          <div className="sc-lbl">🔄 Circulation Form</div>
          <p>{"Total interior spin = flow around the boundary."}</p>
          <div className="fml">{"$$\\oint_C M\\,dx + N\\,dy = \\iint_R\\!\\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)\\!dA$$"}</div>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">💨 Flux-Divergence Form</div>
          <p>{"Total outward spreading inside = flow crossing the boundary outward."}</p>
          <div className="fml">{"$$\\oint_C M\\,dy - N\\,dx = \\iint_R\\!\\left(\\frac{\\partial M}{\\partial x} + \\frac{\\partial N}{\\partial y}\\right)\\!dA$$"}</div>
        </div>
      </div>

      <h3 className="subsec">Bonus Application: Computing Area by Walking the Boundary</h3>
      <p>
        {"Choose $M$ and $N$ cleverly so that $\\partial N/\\partial x - \\partial M/\\partial y = 1$, and the double integral becomes just the area of the region. This means you can calculate the area of any shape just by walking around its perimeter!"}
      </p>
      <div className="fml">
        {"$$\\text{Area of } R = \\oint_C x\\, dy = -\\oint_C y\\, dx = \\frac{1}{2}\\oint_C \\left(x\\, dy - y\\, dx\\right)$$"}
      </div>

      <div className="note">
        <strong>⚠️ Warning: Counterclockwise is mandatory.</strong> {"Green's Theorem assumes you traverse $C$ counterclockwise — so the region is always to your left. Walking clockwise gives you the negative of the right answer. This \"positive orientation\" convention is standard across all of vector calculus."}
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 8</div>
        <div className="exm-title">Green's Theorem Shortcut — A Messy Integral Made Easy</div>
        <p>{"Evaluate $\\displaystyle\\oint_C (x^2 - y)\\,dx + (x + y^2)\\,dy$ where $C$ is the circle $x^2 + y^2 = 4$, counterclockwise."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>{"Without Green's Theorem, you'd need to parameterize the circle, substitute, and grind through messy trig integrals. With Green's Theorem — watch how fast this goes."}</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Read off $M$ and $N$ from the integrand $M\\,dx + N\\,dy$."}</strong><br />
            {"$M = x^2 - y\\qquad N = x + y^2$"}</li>
            <li><strong>{"Compute the curl $\\partial N/\\partial x - \\partial M/\\partial y$."}</strong><br />
            {"$\\dfrac{\\partial N}{\\partial x} = \\dfrac{\\partial(x+y^2)}{\\partial x} = 1$"}<br/>
            {"$\\dfrac{\\partial M}{\\partial y} = \\dfrac{\\partial(x^2-y)}{\\partial y} = -1$"}<br/>
            {"Curl $= 1 - (-1) = 2$ \u00a0 — constant! Every point inside the circle has the same local spin."}</li>
            <li><strong>{"Apply Green's Theorem: line integral = double integral of the curl over the disk."}</strong><br />
            {"The disk $x^2+y^2 \\le 4$ has radius 2, so area $= \\pi(2^2) = 4\\pi$."}<br/>
            {"$\\displaystyle\\iint_R 2\\, dA = 2 \\times \\text{Area} = 2 \\times 4\\pi = 8\\pi$"}</li>
          </ol>
          <div className="fml">
            {"$$\\text{✓ Answer } = 8\\pi. \\text{ What might have taken a page of trig computation took three lines with Green's Theorem.}$$"}
          </div>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 9</div>
        <div className="exm-title">Area of an Ellipse — Walk the Boundary, Find the Area</div>
        <p>{"Use Green's Theorem to prove the area of the ellipse $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ is $\\pi ab$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>{"An ellipse is an oval — width $2a$, height $2b$. If $a = b = r$, it's a circle of radius $r$ with area $\\pi r^2$. We'll prove the general formula by integrating around the boundary."}</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Parameterize the ellipse boundary."}</strong><br />
            {"Going counterclockwise: $x = a\\cos t,\\; y = b\\sin t,\\; t \\in [0,2\\pi]$"}<br/>
            {"$dx = -a\\sin t\\, dt,\\quad dy = b\\cos t\\, dt$"}</li>
            <li><strong>{"Apply area formula: Area $= \\frac{1}{2}\\oint(x\\,dy - y\\,dx)$."}</strong><br />
            {"$\\displaystyle = \\frac{1}{2}\\int_0^{2\\pi}\\!\\big[(a\\cos t)(b\\cos t) - (b\\sin t)(-a\\sin t)\\big]\\,dt$"}<br/>
            {"$\\displaystyle = \\frac{ab}{2}\\int_0^{2\\pi}(\\cos^2 t + \\sin^2 t)\\,dt$"}</li>
            <li><strong>{"Apply $\\cos^2 t + \\sin^2 t = 1$:"}</strong><br />
            {"$\\displaystyle = \\frac{ab}{2}\\int_0^{2\\pi} 1\\,dt = \\frac{ab}{2} \\cdot 2\\pi = \\pi ab$"}</li>
          </ol>
          <div className="fml">
            {"$$\\text{✓ Area of ellipse } = \\pi ab. \\text{ Special case } a = b = r \\text{: gives } \\pi r^2 \\text{ ✓}$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCh165() {
  return (
    <section className="section" id="ch16-5">
      <div className="sec-badge">Surfaces and Area</div>
      <h2 className="sec-title">Surfaces and Surface Area</h2>
      
      <RealLifeUse>
        {"Green's Theorem turns a hard boundary circulation into an easier area integral — the same swap used when checking planar flow balance from edge measurements alone."}
      </RealLifeUse>

      <h3 className="subsec">What Is a Surface? From Curves to Sheets</h3>
      <p>
        {"So far, we've worked with "}<em>curves</em>{" — 1D paths through space. A "}<strong>surface</strong>{" is the next level up: it's a 2D \"sheet\" living inside 3D space. Think of a sphere, a bowl, a saddle, a crumpled piece of paper, or any curved two-dimensional object floating in three-dimensional space."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"A curve is like a piece of string stretched through the air — 1D, has length. A surface is like a bedsheet or a soap bubble — 2D, has area. Both live in 3D space. When we talk about \"surface area\" in this section, we're asking: how much material would you need to cover a curved surface? Like asking how many square meters of fabric you need to make a tent."}
      </div>

      <h3 className="subsec">Parametric Surfaces — Two Inputs, One Point in Space</h3>
      <p>
        {"Just like we used one parameter $t$ to trace a curve, we need "}<em>two</em>{" parameters to describe a surface. Makes sense — a surface is 2D, so it needs two \"coordinates\" to navigate it."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Think of a globe. To specify any point on Earth's surface, you need two numbers: latitude and longitude. That's exactly what parameters $u$ and $v$ do for a surface. You give two numbers, you get one point on the surface. The whole surface is swept out as $(u,v)$ ranges over some 2D region."}
      </div>
      <div className="fml">
        {"$$\\mathbf{r}(u,v) = f(u,v)\\,\\mathbf{i} + g(u,v)\\,\\mathbf{j} + h(u,v)\\,\\mathbf{k}$$"}
      </div>
      <p>
        {"As the pair $(u,v)$ varies over a flat region $D$ in the $uv$-plane, the output $\\mathbf{r}(u,v)$ traces out the surface in 3D space. You're mapping a flat 2D region onto a curved 3D surface."}
      </p>

      <h3 className="subsec">How to Find Surface Area — Tiny Parallelogram Patches</h3>
      <p>
        {"The idea is the same as regular area, just adapted for curved surfaces. Divide the surface into tiny patches. Find the area of each patch. Sum them all up."}
      </p>
      <p>
        {"The trick: each tiny patch of the surface is approximately a tiny "}<em>parallelogram</em>{". The two sides of this parallelogram are given by the partial derivative vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$:"}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Take a rubber sheet lying flat. Push one end to stretch it in the $u$-direction a tiny bit — that gives vector $\\mathbf{r}_u$. Push a different edge in the $v$-direction — that gives $\\mathbf{r}_v$. These two tiny vectors form a tiny parallelogram on the surface. The area of a parallelogram formed by two vectors is given by the magnitude of their cross product. Add up all such tiny parallelogram areas over the whole surface, and you have the total surface area."}
      </div>

      <div className="box def">
        <div className="box-lbl">Surface Area Formula (Parametric Form)</div>
        <div className="fml">
          {"$$\\text{Surface Area} = \\iint_D \\left|\\mathbf{r}_u \\times \\mathbf{r}_v\\right|\\, dA$$"}
        </div>
        <p><strong>Breaking it down:</strong>{" $\\mathbf{r}_u = \\partial \\mathbf{r}/\\partial u$ and $\\mathbf{r}_v = \\partial \\mathbf{r}/\\partial v$ are vectors tangent to the surface. Their cross product $\\mathbf{r}_u \\times \\mathbf{r}_v$ is a vector perpendicular (normal) to the surface. Its magnitude $|\\mathbf{r}_u \\times \\mathbf{r}_v|$ is the area of the tiny parallelogram patch at that point. Integrate over the parameter region $D$ to sum all patches."}</p>
      </div>

      <h3 className="subsec">Simpler Formula When $z = g(x,y)$</h3>
      <p>
        {"When the surface is given in the form $z = g(x,y)$ — meaning for each $(x,y)$ pair, the height $z$ is determined by a formula — there's a simpler, ready-to-use formula. Parameterize with $x=u, y=v, z=g(u,v)$, do the cross product, and simplify:"}
      </p>
      <div className="fml">
        {"$$\\text{Surface Area} = \\iint_R \\sqrt{1 + \\left(\\frac{\\partial g}{\\partial x}\\right)^2 + \\left(\\frac{\\partial g}{\\partial y}\\right)^2}\\; dA$$"}
      </div>
      <p>{"Here $R$ is the region on the $xy$-plane directly below (or above) the surface — its \"shadow.\""}</p>

      <div className="box thm">
        <div className="box-lbl">🔑 Why Is There a Square Root? The Tilt Factor Explained</div>
        <p>{"Imagine a tile floor. If you lay the tiles perfectly flat: 1 square meter of floor = 1 square meter of tile. But what if you tilt the floor? A tilted surface covers more area than its flat shadow below it — just like a tilted ramp covers more actual surface than the floor length it sits above."}</p>
        <p>{"The partial derivatives $\\partial g/\\partial x$ and $\\partial g/\\partial y$ measure how steeply the surface tilts in each direction. The $\\sqrt{1 + (\\partial g/\\partial x)^2 + (\\partial g/\\partial y)^2}$ is the \"tilt correction factor\" — always $\\ge 1$."}</p>
        <p>{"Flat surface ($z = $constant, no tilt) → both partials = 0 → $\\sqrt{1+0+0} = 1$ → area of surface = area of its shadow. Perfect. As tilt increases, the factor grows above 1, giving more surface area than the flat shadow."}</p>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 10</div>
        <div className="exm-title">Surface Area of a Paraboloid — Full Walkthrough</div>
        <p>{"Find the surface area of the portion of $z = x^2 + y^2$ that lies below the plane $z = 1$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>{"This surface is a bowl shape (paraboloid) opening upward. We want the area of the part of the bowl up to height $z = 1$."}</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Identify the surface and its shadow region $R$."}</strong><br />
            {"Surface: $z = g(x,y) = x^2 + y^2$."}<br/>
            {"Below $z=1$ means $x^2 + y^2 \\le 1$ — a disk of radius 1 in the $xy$-plane."}</li>
            <li><strong>{"Compute the partial derivatives (how steep is the surface?)."}</strong><br />
            {"$\\dfrac{\\partial g}{\\partial x} = 2x\\qquad$ and $\\qquad\\dfrac{\\partial g}{\\partial y} = 2y$"}</li>
            <li><strong>{"Set up the surface area integral using the formula."}</strong><br />
            {"$SA = \\displaystyle\\iint_{x^2+y^2\\le 1} \\sqrt{1 + (2x)^2 + (2y)^2}\\; dA = \\iint \\sqrt{1 + 4x^2 + 4y^2}\\; dA$"}</li>
            <li><strong>{"Switch to polar coordinates"}</strong>{" — perfect for circular regions."}<br />
            {"In polar: $x = r\\cos\\theta,\\; y = r\\sin\\theta,\\; x^2+y^2 = r^2,\\; dA = r\\, dr\\, d\\theta$"}<br/>
            {"$SA = \\displaystyle\\int_0^{2\\pi}\\!\\int_0^1 \\sqrt{1+4r^2}\\cdot r\\; dr\\; d\\theta$"}<br/>
            {"Let $u = 1+4r^2$, then $du = 8r\\,dr$, so $r\\,dr = du/8$. Limits: $r=0 \\to u=1$, $r=1 \\to u=5$."}<br/>
            {"$\\displaystyle= \\int_0^{2\\pi}\\frac{1}{8}\\int_1^5 \\sqrt{u}\\; du\\; d\\theta = \\int_0^{2\\pi}\\frac{1}{8}\\cdot\\frac{2}{3}\\Big[u^{3/2}\\Big]_1^5 d\\theta$"}<br/>
            {"$\\displaystyle= \\int_0^{2\\pi} \\frac{1}{12}(5\\sqrt{5}-1)\\; d\\theta = \\frac{\\pi(5\\sqrt{5}-1)}{6}$"}</li>
          </ol>
          <div className="fml">
            {"$$\\displaystyle SA = \\frac{\\pi(5\\sqrt{5}-1)}{6} \\approx 5.33 \\text{ square units}$$"}
          </div>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 11</div>
        <div className="exm-title">Surface Area of a Sphere — Verifying the Classic Formula</div>
        <p>{"Use the surface area formula to verify that a sphere of radius $a$ has surface area $4\\pi a^2$."}<br/><br/><em style={{color:"var(--muted)",fontSize:"0.93rem"}}>{"You know this formula from school. Now we'll actually prove it from scratch using calculus — no magic, just the machinery we've built."}</em></p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ol className="steps">
            <li><strong>{"Use the upper hemisphere"}</strong>{" (by symmetry, multiply by 2 at the end)."}<br />
            {"Upper half of sphere: $z = \\sqrt{a^2 - x^2 - y^2}$ over the disk $x^2+y^2 \\le a^2$."}</li>
            <li><strong>{"Compute the partial derivatives of $z$."}</strong><br />
            {"$\\dfrac{\\partial z}{\\partial x} = \\dfrac{-x}{\\sqrt{a^2-x^2-y^2}}\\qquad$ and $\\qquad\\dfrac{\\partial z}{\\partial y} = \\dfrac{-y}{\\sqrt{a^2-x^2-y^2}}$"}<br/>
            {"After squaring and adding with 1:"}<br/>
            {"$1 + \\left(\\dfrac{\\partial z}{\\partial x}\\right)^2 + \\left(\\dfrac{\\partial z}{\\partial y}\\right)^2 = 1 + \\dfrac{x^2+y^2}{a^2-x^2-y^2} = \\dfrac{a^2}{a^2-r^2}$"}</li>
            <li><strong>{"Set up the integral in polar."}</strong><br />
            {"$\\displaystyle SA_{\\text{upper}} = \\int_0^{2\\pi}\\!\\int_0^a \\frac{a}{\\sqrt{a^2-r^2}}\\cdot r\\; dr\\; d\\theta$"}<br/>
            {"Let $u = a^2 - r^2$, $du = -2r\\, dr$. When $r=0: u=a^2$. When $r=a: u=0$."}<br/>
            {"$\\displaystyle= \\int_0^{2\\pi} a\\int_0^{a^2}\\frac{1}{2\\sqrt{u}}\\,du\\; d\\theta = \\int_0^{2\\pi} a\\Big[\\sqrt{u}\\Big]_0^{a^2} d\\theta = \\int_0^{2\\pi} a \\cdot a\\; d\\theta = 2\\pi a^2$"}</li>
            <li><strong>{"Double it for the full sphere:"}</strong><br />
            {"$SA = 2 \\times 2\\pi a^2 = 4\\pi a^2$ ✓"}</li>
          </ol>
          <div className="fml">
            {"$$\\text{✓ Surface area of sphere } = 4\\pi a^2 \\text{ — the formula you memorized in school, now proven from first principles!}$$"}
          </div>
        </div>
      </div>

      <h3 className="subsec">The Normal Vector — Pointing Away From the Surface</h3>
      <p>
        {"At every point of a surface, there's a direction that's perpendicular (sticking straight out) — called the "}<strong>normal vector</strong>{". This is extremely important for surface integrals (integrating over surfaces in future topics)."}
      </p>
      <div className="note">
        <strong>Analogy:</strong> {"Stand on a grassy hill. The normal vector at your feet points straight up away from the hillside — not along the slope, but perpendicular to it. On a sphere, the normal at every point points radially outward from the center. On a flat floor, all normals point straight up. The normal is always \"perpendicular to the surface at that point.\""}
      </div>
      <div className="fml">
        {"$$\\text{Unit Normal: }\\mathbf{n} = \\frac{\\mathbf{r}_u \\times \\mathbf{r}_v}{|\\mathbf{r}_u \\times \\mathbf{r}_v|} \\qquad\\qquad d\\mathbf{S} = (\\mathbf{r}_u \\times \\mathbf{r}_v)\\, dA \\quad \\text{(vector surface element)}$$"}
      </div>

      <div className="box thm">
        <div className="box-lbl">🔑 The Big Picture — Where Are We Headed?</div>
        <p><strong>Line integrals</strong>{" → add things up along curves (1D paths in space)."}</p>
        <p><strong>Surface integrals</strong>{" → add things up over surfaces (2D sheets in space)."}</p>
        <p><strong>Green's Theorem</strong>{" → links 1D boundary integral to 2D area integral (in a plane)."}</p>
        <p><strong>Stokes' Theorem</strong>{" (coming later) → links 1D boundary integral to 2D surface integral (in 3D)."}</p>
        <p><strong>Divergence Theorem</strong>{" (coming later) → links 2D surface integral to 3D volume integral. These theorems are all the same deep idea: "}<em>boundary information determines interior information</em>{"."}</p>
      </div>
    </section>
  );
}

function SectionSummary() {
  return (
    <section className="section" id="summary">
      <div className="sec-badge">Quick Reference</div>
      <h2 className="sec-title">All Key Formulas at a Glance</h2>
      <div className="sum-grid">
        <div className="sum-card">
          <div className="sc-lbl">{"Derivative of $\\mathbf{r}(t)$"}</div>
          <p>{"$\\mathbf{r}'(t) = \\langle f'(t),\\, g'(t),\\, h'(t) \\rangle$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Unit Tangent"}</div>
          <p>{"$\\mathbf{T} = \\dfrac{\\mathbf{r}'(t)}{|\\mathbf{r}'(t)|}$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Line Integral (scalar)"}</div>
          <p>{"$\\displaystyle\\int_C f\\, ds = \\int_a^b f(\\mathbf{r}(t))|\\mathbf{r}'(t)|\\, dt$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Work"}</div>
          <p>{"$\\displaystyle W = \\int_C \\mathbf{F}\\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t))\\cdot\\mathbf{r}'(t)\\, dt$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Flux (2D)"}</div>
          <p>{"$\\displaystyle\\oint_C \\mathbf{F}\\cdot\\mathbf{n}\\, ds = \\oint_C M\\, dy - N\\, dx$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Conservative test (2D)"}</div>
          <p>{"$\\dfrac{\\partial M}{\\partial y} = \\dfrac{\\partial N}{\\partial x}$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"FTC for Line Integrals"}</div>
          <p>{"$\\displaystyle\\int_C \\nabla f \\cdot d\\mathbf{r} = f(B) - f(A)$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Green's Theorem"}</div>
          <p>{"$\\displaystyle\\oint_C M\\, dx + N\\, dy = \\iint_R\\!\\left(\\frac{\\partial N}{\\partial x}-\\frac{\\partial M}{\\partial y}\\right)dA$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Surface Area $(z=g)$"}</div>
          <p>{"$\\displaystyle\\iint_R \\sqrt{1+g_x^2+g_y^2}\\; dA$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Surface Area (parametric)"}</div>
          <p>{"$\\displaystyle\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v|\\; dA$"}</p>
        </div>
      </div>
    </section>
  );
}

function SectionRealWorld() {
  return (
    <section className="section" id="vc-real-world">
      <div className="sec-badge">Applications</div>
      <h2 className="sec-title">Where This Shows Up in Real Life</h2>
      <div className="box def">
        <div className="box-lbl">Real-World Use</div>
        <p>
          {"GPS navigation systems track your "}<strong>{"position as a vector-valued function of time"}</strong>{" exactly as we did with $\\mathbf{r}(t)$ — your phone differentiates that path in real time to report your current speed and heading. Drone flight controllers use the same math to compute velocity and acceleration from raw position sensor data dozens of times per second."}
        </p>
        <p>
          {"Engineers computing the "}<strong>{"work done by a force"}</strong>{" along a curved path — a roller coaster car, a robotic arm, a satellite's orbit — use exactly the line integral $\\int_C \\mathbf{F}\\cdot d\\mathbf{r}$ from this guide. Green's Theorem underlies how CAD software computes the area of arbitrarily complex 2D shapes by walking only their outline, and weather forecasters use divergence and curl to spot storm systems from wind-vector satellite data."}
        </p>
      </div>
    </section>
  );
}

/* =========================================
   SIDEBARS & NAVIGATION
========================================= */

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Vector Calculus · Part 1</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#ch13">Vector Functions</a>
      <a className="sb-link" href="#quiz-ch13" style={{ paddingLeft: "2rem", color: "var(--gold-light)" }}>Quiz</a>
      <a className="sb-link" href="#tnb-frame">TNB Frame & Curvature</a>
      <a className="sb-link" href="#quiz-tnb" style={{ paddingLeft: "2rem", color: "var(--gold-light)" }}>Quiz</a>
      <a className="sb-link" href="#ch16-1">Line Integrals</a>
      <a className="sb-link" href="#quiz-ch16-1" style={{ paddingLeft: "2rem", color: "var(--gold-light)" }}>Quiz</a>
      
      
    </nav>
  );
}

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Vector Calculus · Part 2</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#ch16-3">Path Independence</a>
      <a className="sb-link" href="#quiz-ch16-3" style={{ paddingLeft: "2rem", color: "var(--gold-light)" }}>Quiz</a>
      <a className="sb-link" href="#ch16-4">Green's Theorem</a>
      <a className="sb-link" href="#quiz-ch16-4" style={{ paddingLeft: "2rem", color: "var(--gold-light)" }}>Quiz</a>
      <a className="sb-link" href="#ch16-5">Surfaces & Area</a>
      <a className="sb-link" href="#quiz-ch16-5" style={{ paddingLeft: "2rem", color: "var(--gold-light)" }}>Quiz</a>
      <div className="sb-group">Reference</div>
      <a className="sb-link" href="#summary"><span className="sn">—</span>Key Formulas</a>
      
      
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 1 of 2</div>
      <h1 className="ch-title">Vector Calculus</h1>
      <p className="ch-sub">Vector Functions, TNB Frame, and Line Integrals</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 2 of 2</div>
      <h1 className="ch-title">Vector Calculus</h1>
      <p className="ch-sub">Path Independence, Green's Theorem, and Surfaces</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#ch13">Vector Functions</a>
        <a className="toc-a" href="#tnb-frame">TNB Frame & Curvature</a>
        <a className="toc-a" href="#ch16-1">Line Integrals</a>
      </div>
    </nav>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#ch16-3">Path Independence</a>
        <a className="toc-a" href="#ch16-4">Green's Theorem</a>
        <a className="toc-a" href="#ch16-5">Surfaces & Area</a>
        <a className="toc-a" href="#summary"><span className="tn">—</span>Key Formulas</a>
      </div>
    </nav>
  );
}

function GuideFooter() {
  return (
    <footer className="pg-foot">
      Vector Calculus · Rendered with MathJax 3
    </footer>
  );
}

/* =========================================
   MAIN COMPONENT RENDERER (UNIFIED)
========================================= */

function VectorCalculusContent({ part = 1 }) {
  return (
    <>
      {part === 1 ? <GuideSidebarPart1 /> : <GuideSidebarPart2 />}
      
      <main className="main">
        {part === 1 ? <GuideHeaderPart1 /> : <GuideHeaderPart2 />}
        {part === 1 ? <TableOfContentsPart1 /> : <TableOfContentsPart2 />}
        
        {part === 1 && <OpeningNote />}
        <Divider />

        {part === 1 && (
          <>
            <SectionCh13 />
            <GuideMcqSection id="quiz-ch13" badge="Practice" title="Vector Functions Quiz" scoreId="score-vector-ch13" section="vector-ch13" questions={QUIZ_CH13} />
            <Divider />
            
            <SectionTNB />
            <GuideMcqSection id="quiz-tnb" badge="Practice" title="TNB Frame & Curvature Quiz" scoreId="score-vector-tnb" section="vector-tnb" questions={QUIZ_TNB} />
            <Divider />
            
            <SectionCh161 />
            <Divider />
            <GuideMcqSection id="quiz-ch16-1" badge="Practice" title="Line Integrals Quiz" scoreId="score-vector-16-1" section="vector-16-1" questions={QUIZ_CH16_1} />
          </>
        )}

        {part === 2 && (
          <>
            <SectionCh163 />
            <GuideMcqSection id="quiz-ch16-3" badge="Practice" title="Path Independence Quiz" scoreId="score-vector-16-3" section="vector-16-3" questions={QUIZ_CH16_3} />
            <Divider />
            
            <SectionCh164 />
            <GuideMcqSection id="quiz-ch16-4" badge="Practice" title="Green's Theorem Quiz" scoreId="score-vector-16-4" section="vector-16-4" questions={QUIZ_CH16_4} />
            <Divider />
            
            <SectionCh165 />
            <Divider />
            <GuideMcqSection id="quiz-ch16-5" badge="Practice" title="Surfaces & Area Quiz" scoreId="score-vector-16-5" section="vector-16-5" questions={QUIZ_CH16_5} />
            <Divider />

            <SectionSummary />
            <Divider />
            <SectionRealWorld />
          </>
        )}
        
        <GuideFooter />
      </main>
    </>
  );
}

function VectorCalculusGuide({ part = 1 }) {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide" 
      title={`Vector Calculus — Part ${part}`}
    >
      <VectorCalculusContent part={part} />
    </StudyGuideShell>
  );
}

export default VectorCalculusGuide;