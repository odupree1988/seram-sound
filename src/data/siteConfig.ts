export const siteConfig = {
  name: "Seram Sound",
  tagline: "Custom Scoring for Short-Form Content",
  title: "Composer & Music Producer",
  location: "New York, NY",
  email: "hello@seramsound.com",
  instagram: "https://instagram.com/seramsound",
  linkedin: "https://linkedin.com/in/seramsound",
  youtube: "https://youtube.com/@seramsound",

  serviceTypes: [
    "Short Film",
    "Documentary",
    "Branded Content",
    "Web Series",
    "Trailer",
    "Social Media",
    "Podcast",
    "Commercial",
  ],

  processSteps: [
    { num: 1, title: "Inquiry", desc: "Submit your project details via the website form or email." },
    { num: 2, title: "Discovery Call", desc: "15-30 minute call to discuss creative direction and timeline." },
    { num: 3, title: "Quote & Agreement", desc: "Formal quote with licensing agreement. 50% deposit to begin." },
    { num: 4, title: "Composition", desc: "Original score composed to your edit. Rough mix synced to picture." },
    { num: 5, title: "Revisions", desc: "Up to two rounds of revisions included. Additional rounds available." },
    { num: 6, title: "Final Delivery", desc: "Mastered files in agreed formats. Final payment collected." },
  ],

  heroIntro:
    "I compose original, handcrafted scores for short-form video, branded content, and independent film. Every note is written personally \u2014 no AI, no stock libraries, no shortcuts.",

  aboutBio: [
    "I\u2019m a composer and music producer with over ten years of professional experience scoring short-form video content, branded media, and independent film. My work sits at the intersection of music and storytelling \u2014 every project starts with understanding the emotional arc of your piece and building a score that elevates it.",
    "Every note you hear from Seram Sound is 100% human-composed. I don\u2019t use AI composition tools, stock music libraries, or pre-made loops. Your project gets a fully original score, written from scratch, tailored to your edit. That\u2019s not a marketing claim \u2014 it\u2019s a guarantee.",
    "I work directly with directors, editors, and creative teams. No middlemen, no account managers. When you hire Seram Sound, you\u2019re collaborating one-on-one with the person writing your music. That means faster communication, better creative alignment, and a final product that actually sounds like your vision.",
  ],

  contactHeading: "Let\u2019s score your next project.",
  contactSubtext:
    "Got a project, a question, or just want to say hi? I\u2019d love to hear from you.",

  metadata: {
    title: "Seram Sound | Custom Film & Content Scoring",
    description:
      "Original, handcrafted music for short films, branded content, and digital media. 100% human-composed scoring by a composer with 10+ years of experience.",
    keywords:
      "custom scoring, film composer, music for video, original music, short film scoring, branded content music, Seram Sound",
    url: "https://seramsound.com",
    siteName: "Seram Sound",
  },

  navLinks: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ],

  portfolioItems: [
    {
      title: "Danny",
      genre: "Short Film",
      description: "An intimate score blending piano and ambient textures for a 12-minute drama about memory and place.",
      audioSrc: "/audio/danny.m4a",
      imageSrc: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    },
    {
      title: "First Sight",
      genre: "Short Film",
      description: "Delicate, emotionally layered scoring for a narrative short exploring the tension between familiarity and new beginnings.",
      audioSrc: "/audio/first-sight.m4a",
      imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    },
    {
      title: "From Whence We Came",
      genre: "Documentary",
      description: "Sweeping, reflective underscore for a documentary tracing generational roots and cultural identity.",
      audioSrc: "/audio/from-whence-we-came.m4a",
      imageSrc: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=800&q=80",
    },
    {
      title: "Marble Run",
      genre: "Branded Content",
      description: "Kinetic, playful scoring with forward momentum \u2014 built for product storytelling and creative campaigns.",
      audioSrc: "/audio/marble-run.m4a",
      imageSrc: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    },
    {
      title: "Working the Land",
      genre: "Documentary",
      description: "Warm, grounded composition capturing the rhythm of rural life and the patience of hands-on craft.",
      audioSrc: "/audio/working-the-land.m4a",
      imageSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    },
  ],

  // Footer trust signals — confirmed accurate with client (10+ yrs, 100+ projects).
  // Third stat is intentionally dynamic: turnaround depends on project type + client needs.
  trustStats: [
    { value: "10+", label: "Years in music production" },
    { value: "100+", label: "Original compositions" },
    { value: "Flexible", label: "Turnaround shaped around your project" },
  ],

  // Services-page FAQ. Pricing/revision figures match the Services pricing copy.
  faqs: [
    {
      q: "How much does a custom score cost?",
      a: "Every project is quoted individually. Most short-form work starts around $1,000, with the final number depending on length, the complexity of the score, your timeline, and licensing needs. You'll get a clear, itemized quote before any work begins.",
    },
    {
      q: "How long does it take?",
      a: "Turnaround is shaped around your project and deadline. A short social spot can come together in a matter of days, while a documentary or series score naturally runs longer. I'll map out a realistic timeline in your quote and build the schedule around your delivery date.",
    },
    {
      q: "How many revisions are included?",
      a: "Up to two rounds of revisions are included in every quote, so we can refine the score until it serves your edit. Additional rounds can be added if a project calls for it.",
    },
    {
      q: "Do you use AI or stock music?",
      a: "Never. Every score is 100% original and human-composed — no generative AI, no stock libraries, no shortcuts. You get music written specifically for your story.",
    },
    {
      q: "Who owns the music and how does licensing work?",
      a: "You receive a license to use the score for your project, with the exact scope and usage rights laid out in your agreement up front. If you have specific distribution or platform needs, we'll cover them before the project starts.",
    },
    {
      q: "How do we get started?",
      a: "Send me your project details through the contact form. We'll have a short discovery call, I'll send a quote and agreement, and once a 50% deposit is in place I begin composing. The remaining balance is due on final delivery.",
    },
  ],
};
