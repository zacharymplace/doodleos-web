export const services = [
  { name: "Tail Wagging Service", status: "Operational", level: "ok" },
  { name: "Treat Detection", status: "Operational", level: "ok" },
  { name: "Couch Integration Layer", status: "Operational", level: "ok" },
  { name: "Doorbell Event Processor", status: "Major Incident", level: "down" },
  { name: "Recall System", status: "Partial Outage", level: "warn" },
  { name: "Self Control", status: "Major Incident", level: "down" },
  { name: "Mud Avoidance", status: "Major Incident", level: "down" },
  { name: "Squirrel Focus Filter", status: "Degraded", level: "warn" },
];

export const patchNotes = [
  {
    version: "v5.2.2",
    date: "May 17, 2026",
    notes: [
      "Improved sock acquisition accuracy across upstairs laundry environments.",
      "Added preliminary support for pretending not to hear commands.",
      "Reduced false-positive treat detection when humans are simply opening medicine.",
      "Known issue: doorbell events may still trigger full-body system panic.",
    ],
  },
  {
    version: "v5.2.1",
    date: "May 17, 2026",
    notes: [
      "Reduced barking at absolutely nothing by 3%.",
      "Added support for puddle detection.",
      "Deprecated personal space.",
      "Hotfix: counter surfing was mistakenly reintroduced.",
    ],
  },
  {
    version: "v5.2.0",
    date: "May 10, 2026",
    notes: [
      "Improved couch integration stability.",
      "Added advanced side-eye algorithm.",
      "Resolved rare issue where doodle respected boundaries.",
      "Expanded wet beard persistence after water bowl events.",
    ],
  },
  {
    version: "v5.1.9",
    date: "May 3, 2026",
    notes: [
      "Increased emotional dependency throughput during remote work hours.",
      "Added partial compatibility with guests who claim they are not dog people.",
      "Known issue: system may sit directly on human foot during kitchen operations.",
    ],
  },
];

export const errorCodes = [
  ["DOODLE_014", "Refuses to walk in rain after begging to go outside."],
  ["DOODLE_027", "Stares at wall corner with unacceptable confidence."],
  ["DOODLE_041", "Treat bag opened outside authorized snack window."],
  ["DOODLE_088", "Guest detected. Household dignity temporarily unavailable."],
  ["DOODLE_112", "Attempted to merge with couch during family movie runtime."],
  ["DOODLE_233", "Has stolen sock but wants you to chase."],
  ["DOODLE_120", "Doodle has entered the room with suspicious silence."],
  ["DOODLE_144", "Water bowl event exceeded beard containment threshold."],
  ["DOODLE_198", "Human attempted private bathroom operation. Access denied."],
  ["DOODLE_246", "Stick selected exceeds approved indoor transport dimensions."],
  ["DOODLE_333", "Zoomie ignition detected in narrow hallway."],
  ["DOODLE_451", "Couch cushion integrity under review."],
  ["DOODLE_707", "Cheese wrapper heard from three rooms away."],
  ["DOODLE_818", "Outdoor smell cache unavailable for deletion."],
  ["DOODLE_310", "Invisible yard threat identified and escalated."],
  ["DOODLE_404", "Personal space not found."],
  ["DOODLE_502", "Wet beard failure."],
  ["DOODLE_615", "Leaf classified as urgent prey object."],
  ["DOODLE_721", "Sudden 3AM zoomies."],
  ["DOODLE_808", "Full-body wiggle loop exceeded safe operating limits."],
  ["DOODLE_909", "Bark buffer overflow after package delivery."],
  ["DOODLE_999", "System overload from too much fun."],
  ["RECALL_BETA", "Recall unavailable near squirrels, guests, leaves, or vibes."],
  ["SOCK_LOCK", "Laundry object held hostage until emotional terms are met."],
];

export const incidents = [
  {
    id: "#4821",
    title: "Unauthorized Pond Deployment",
    status: "Monitoring",
    impact: "Three wet interiors, one destroyed back seat, elevated household chaos.",
    rootCause: "Joy overflow triggered by bird visibility.",
  },
  {
    id: "#4822",
    title: "Sock Containment Breach",
    status: "Resolved",
    impact: "One laundry basket compromised.",
    rootCause: "Bedroom door left 4 inches open.",
  },
  {
    id: "#4823",
    title: "Doorbell Panic Cascade",
    status: "Active",
    impact: "Two humans startled, one coffee spill, neighborhood notified.",
    rootCause: "External chime event interpreted as existential perimeter breach.",
  },
  {
    id: "#4824",
    title: "Unauthorized Couch Merge",
    status: "Resolved",
    impact: "Remote control inaccessible for 19 minutes.",
    rootCause: "Doodle achieved full horizontal expansion during movie night.",
  },
  {
    id: "#4825",
    title: "Guest Arrival Overclock",
    status: "Monitoring",
    impact: "Four greetings attempted on one person within six seconds.",
    rootCause: "Visitor excitement exceeded household processor capacity.",
  },
];
