'use client';

import { useState } from 'react';

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#222222',
  sageGreen: '#4A6B5F',
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div style={{ backgroundColor: colors.white, color: colors.darkGray, fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1.6 }}>
      {/* BANNER */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 16px', backgroundColor: colors.white, borderBottom: `1px solid #f0f0f0` }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: colors.black, margin: 0 }}>Aina Athirah</h1>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.sageGreen, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.sageGreen, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ color: colors.sageGreen, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
              </svg>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.black, fontSize: '24px', padding: 0 }}>
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav style={{ backgroundColor: colors.white, borderBottom: `1px solid #f0f0f0`, padding: '16px' }}>
          <button onClick={() => scrollToSection('hero')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            Hero
          </button>
          <button onClick={() => scrollToSection('about')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            About
          </button>
          <button onClick={() => scrollToSection('stats')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            Stats
          </button>
          <button onClick={() => scrollToSection('approach')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            My Approach
          </button>
          <button onClick={() => scrollToSection('classroom')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            Classroom
          </button>
          <button onClick={() => scrollToSection('testimonials')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            Testimonials
          </button>
          <button onClick={() => scrollToSection('subjects')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            Subjects & Levels
          </button>
          <button onClick={() => scrollToSection('offerings')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            Offerings
          </button>
          <button onClick={() => scrollToSection('cta')} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.darkGray }}>
            Get Started
          </button>
        </nav>
      )}

      {/* HERO SECTION */}
      <section id="hero" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <img
          src="/ainahero.webp"
          alt="Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: colors.white }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 8px 0', lineHeight: 1 }}>Passion</h2>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 8px 0', lineHeight: 1 }}>Patience</h2>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 24px 0', lineHeight: 1 }}>Precision</h2>
          <p style={{ fontSize: '14px', margin: '0 0 4px 0', fontWeight: '500' }}>One step at a time.</p>
          <p style={{ fontSize: '14px', margin: 0, fontWeight: '500' }}>To achieve excellence.</p>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" style={{ padding: '40px 16px', backgroundColor: colors.white }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.black, marginBottom: '32px', textAlign: 'center' }}>Hello, I'm Aina Athirah!</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          {/* Picture */}
          <div style={{ width: '100%', height: '280px', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="/ainaam.webp"
              alt="Aina Athirah"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Text */}
          <div style={{ textAlign: 'center', fontSize: '15px', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 12px 0' }}>I used to design systems as an engineer.</p>
            <p style={{ margin: '0 0 12px 0' }}>Now I help young minds build their own.</p>
            <p style={{ margin: '0 0 12px 0' }}>After years in engineering, I realized my real passion was teaching.</p>
            <p style={{ margin: '0 0 12px 0' }}>For the past 5 years, I've been teaching STEM subjects to students of all levels.</p>
            <p style={{ margin: '0 0 12px 0' }}>My main focus is to build confidence.</p>
            <p style={{ margin: 0 }}>Because understanding today builds courage for tomorrow.</p>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section id="stats" style={{ padding: '40px 16px', backgroundColor: colors.sageGreen, color: colors.white }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '56px', fontWeight: 'bold', margin: '0 0 8px 0' }}>200+</div>
            <div style={{ fontSize: '14px', fontWeight: '500' }}>Students</div>
          </div>
          <div>
            <div style={{ fontSize: '56px', fontWeight: 'bold', margin: '0 0 8px 0' }}>5</div>
            <div style={{ fontSize: '14px', fontWeight: '500' }}>Years of Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '56px', fontWeight: 'bold', margin: '0 0 8px 0' }}>1</div>
            <div style={{ fontSize: '14px', fontWeight: '500' }}>Goal = Excellence</div>
          </div>
        </div>
      </section>

      {/* MY APPROACH SECTION */}
      <section id="approach" style={{ padding: '40px 16px', backgroundColor: colors.white }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.black, marginBottom: '32px', textAlign: 'center' }}>My Approach</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <div style={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>All Subjects Welcome</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>I believe every subject lights up a different part of a child's mind. That's why I teach across the board from Malay and English to Math and Science. True confidence grows when a student feels capable in all areas, not just one.</p>
          </div>

          <div style={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>Every Level Matters</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Whether your child is in primary school or preparing for STPM, IB, Matriculation or Diploma, they deserve full attention. I meet students exactly where they are with lessons built for their stage, not a one-size-fits-all plan.</p>
          </div>

          <div style={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>Real Understanding Over Rote Learning</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>My rule is simple. Learn to understand, not just to pass. Memorizing for exams fades. But when a student truly gets a concept, that stays with them for life. And that's the kind of learning I build.</p>
          </div>
        </div>
      </section>

      {/* IN MY CLASSROOM SECTION */}
      <section id="classroom" style={{ padding: '40px 16px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.black, marginBottom: '32px', textAlign: 'center' }}>In My Classroom</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '8px', borderLeft: `4px solid ${colors.sageGreen}` }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>Learning by Doing</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Students don't just listen — they solve, draw, explain, and try. Because you remember what you use, not what you hear.</p>
          </div>

          <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '8px', borderLeft: `4px solid ${colors.sageGreen}` }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>Mistakes Are Welcome</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Wrong answers are part of learning. I make sure every student feels safe to ask, guess, and grow without fear.</p>
          </div>

          <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '8px', borderLeft: `4px solid ${colors.sageGreen}` }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>Lessons That Connect to Life</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Why does algebra matter? How is science in your phone? I link every topic to real life so it makes sense and sticks.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" style={{ padding: '40px 16px', backgroundColor: colors.white }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.black, marginBottom: '32px', textAlign: 'center' }}>What Parents Are Saying</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderTop: `3px solid ${colors.sageGreen}` }}>
            <p style={{ fontSize: '12px', lineHeight: 1.5, margin: '0 0 8px 0', fontStyle: 'italic' }}>"Daniel is my Standard 3 hero. He was struggling in school because his way of thinking is 'different'. Teacher Aina saw that and turned it into his strength. Now his performance is better than ever."</p>
            <p style={{ fontSize: '11px', margin: 0, fontWeight: '600', color: colors.sageGreen }}>— Madam Zaliha, Bukit Jelutong</p>
          </div>

          <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderTop: `3px solid ${colors.sageGreen}` }}>
            <p style={{ fontSize: '12px', lineHeight: 1.5, margin: '0 0 8px 0', fontStyle: 'italic' }}>"IB subjects were so hard my son had a breakdown. I didn't know what to do until we found Teacher Aina. Now he's calm, confident, and actually understands his subjects — all thanks to her patience."</p>
            <p style={{ fontSize: '11px', margin: 0, fontWeight: '600', color: colors.sageGreen }}>— Tan CC, Kepong</p>
          </div>

          <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderTop: `3px solid ${colors.sageGreen}` }}>
            <p style={{ fontSize: '12px', lineHeight: 1.5, margin: '0 0 8px 0', fontStyle: 'italic' }}>"They say you need a high CGPA to get into a good course at local university. But I couldn't understand anything in those huge lecture halls — and lecturers were impossible to reach. I asked Teacher Aina to help me with my Matriculation every weekend. I scored 3.98."</p>
            <p style={{ fontSize: '11px', margin: 0, fontWeight: '600', color: colors.sageGreen }}>— Aiman, Matriculation Banting</p>
          </div>
        </div>
      </section>

      {/* SUBJECTS & LEVELS SECTION */}
      <section id="subjects" style={{ padding: '40px 16px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.black, marginBottom: '32px', textAlign: 'center' }}>Teacher Aina Teaches</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>Subjects</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6, color: colors.darkGray }}>Malay • English • Mathematics • Science • Additional Mathematics • Physics • Chemistry • Biology</p>
          </div>

          <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.black, margin: '0 0 12px 0' }}>Levels</h3>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6, color: colors.darkGray }}>Primary School • Secondary School (Form 1–5) • SPM • STPM • Matriculation • Diploma • Polytechnic • International Baccalaureate (IB)</p>
          </div>
        </div>
      </section>

      {/* OFFERINGS CAROUSEL SECTION */}
      <section id="offerings" style={{ padding: '40px 16px', backgroundColor: colors.white }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.black, marginBottom: '32px', textAlign: 'center' }}>What I Offer</h2>
        
        <OfferingsCarousel />
      </section>

      {/* CTA SECTION */}
      <section id="cta" style={{ padding: '40px 16px', backgroundColor: colors.white }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          {/* Picture */}
          <div style={{ width: '100%', height: '280px', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="/ainacta.webp"
              alt="Aina CTA"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Text & CTA */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.black, margin: '0 0 16px 0' }}>Ready to Start?</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, margin: '0 0 16px 0', color: colors.darkGray }}>Book a free 30-minute consultation with Teacher Aina. We'll talk about your child's needs, goals, and how we can help them thrive.</p>
            <p style={{ fontSize: '14px', lineHeight: 1.6, margin: '0 0 24px 0', color: colors.darkGray, fontStyle: 'italic' }}>No pressure. Just a honest conversation.</p>
            
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: colors.sageGreen,
                color: colors.white,
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              WhatsApp us now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 16px', backgroundColor: '#f9f9f9', textAlign: 'center', borderTop: `1px solid #e0e0e0` }}>
        <p style={{ fontSize: '12px', margin: '0 0 8px 0', color: colors.darkGray }}>Aina Athirah 2026</p>
        <p style={{ fontSize: '11px', margin: 0, color: '#999' }}>Engineered by FatCalico&Co for FatCalico&Co</p>
      </footer>
    </div>
  );
}

function OfferingsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const offerings = [
    {
      title: 'Online Teaching',
      details: ['1-on-1 or small group • All levels', '3–4 sessions per week • 2 hours each', 'From RM100/week']
    },
    {
      title: 'Individual Teaching',
      details: ['Offline at your home or private studio', '1-on-1 • All subjects • 3–4 sessions per week • 2 hours each', 'From RM250/week']
    },
    {
      title: 'Small Group Teaching',
      details: ['Max 3 students • Offline at your home or private studio', 'All subjects • 3–4 sessions per week • 2 hours each', 'From RM200/week']
    }
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* Carousel */}
      <div style={{ overflowX: 'auto', marginBottom: '20px', scrollBehavior: 'smooth' }}>
        <div style={{ display: 'flex', gap: '16px', paddingBottom: '8px', minWidth: '100%' }}>
          {offerings.map((offering, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                flex: '0 0 100%',
                padding: '24px 16px',
                backgroundColor: activeIndex === index ? colors.sageGreen : '#f9f9f9',
                color: activeIndex === index ? colors.white : colors.darkGray,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0' }}>{offering.title}</h3>
              <div style={{ fontSize: '13px', lineHeight: 1.8 }}>
                {offering.details.map((detail, i) => (
                  <p key={i} style={{ margin: '0 0 8px 0' }}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {offerings.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: activeIndex === index ? colors.sageGreen : '#ddd',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}
