'use client';

import { useState, useRef, useEffect } from 'react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(0);
  const carouselRef = useRef(null);

  const packages = [
    {
      title: 'Online Teaching',
      details: ['1-on-1 or small group', 'All levels', '3–4 sessions per week', '2 hours each'],
      price: 'From RM100/week'
    },
    {
      title: 'Individual Teaching',
      details: ['Offline at your home or private studio', '1-on-1', 'All subjects', '3–4 sessions per week', '2 hours each'],
      price: 'From RM250/week'
    },
    {
      title: 'Small Group Teaching',
      details: ['Max 3 students', 'Offline at your home or private studio', 'All subjects', '3–4 sessions per week', '2 hours each'],
      price: 'From RM200/week'
    }
  ];

  const testimonials = [
    {
      quote: 'Daniel is my Standard 3 hero. He was struggling in school because his way of thinking is "different". Teacher Aina saw that and turned it into his strength. Now his performance is better than ever.',
      author: 'Madam Zaliha',
      location: 'Bukit Jelutong'
    },
    {
      quote: 'IB subjects were so hard my son had a breakdown. I didn\'t know what to do until we found Teacher Aina. Now he\'s calm, confident, and actually understands his subjects — all thanks to her patience.',
      author: 'Tan CC',
      location: 'Kepong'
    },
    {
      quote: 'They say you need a high CGPA to get into a good course at local university. But I couldn\'t understand anything in those huge lecture halls — and lecturers were impossible to reach. I asked Teacher Aina to help me with my Matriculation every weekend. I scored 3.98.',
      author: 'Aiman',
      location: 'Matriculation Banting'
    }
  ];

  const scrollToPackage = (index) => {
    setActivePackage(index);
    if (carouselRef.current) {
      setTimeout(() => {
        const items = carouselRef.current.querySelectorAll('[data-package-item]');
        if (items[index]) {
          items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      }, 0);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#FFFFFF', color: '#222222' }}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        .carousel-container::-webkit-scrollbar { display: none; }
        .carousel-container { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ===== HEADER ===== */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: '#FFFFFF',
        borderBottom: '2px solid #4A6B5F',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#4A6B5F' }}>Aina Athirah</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px', fontSize: '18px' }}>
            <a href="#" aria-label="Instagram" style={{ color: '#4A6B5F', textDecoration: 'none' }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="TikTok" style={{ color: '#4A6B5F', textDecoration: 'none' }}>
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" aria-label="WhatsApp" style={{ color: '#4A6B5F', textDecoration: 'none' }}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#4A6B5F',
              padding: 0
            }}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>
      </header>

      {/* ===== MENU ===== */}
      {menuOpen && (
        <nav style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #f0f0f0',
          padding: '16px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'sticky',
          top: '50px',
          zIndex: 99
        }}>
          <a href="#about" style={{ color: '#4A6B5F', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>About me</a>
          <a href="#approach" style={{ color: '#4A6B5F', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>My Approach</a>
          <a href="#classroom" style={{ color: '#4A6B5F', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>My Classroom</a>
          <a href="#testimonials" style={{ color: '#4A6B5F', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#subjects" style={{ color: '#4A6B5F', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Subjects & Levels</a>
          <a href="#packages" style={{ color: '#4A6B5F', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Packages</a>
          <a href="#contact" style={{ color: '#4A6B5F', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Contact Me</a>
        </nav>
      )}

      {/* ===== HERO ===== */}
      <section style={{
        backgroundImage: 'url(/ainahero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        aspectRatio: '4 / 5',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '60px 24px 0 24px',
        position: 'relative'
      }}>
        <div>
          <h2 style={{
            fontSize: '64px',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: '1.1',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Passion<br/>
            Patience<br/>
            Precision
          </h2>
          <p style={{
            fontSize: '16px',
            marginTop: '16px',
            marginBottom: '24px',
            color: '#FFFFFF',
            fontWeight: '500',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            One step at a time.<br/>
            To achieve excellence.
          </p>
        </div>

        {/* Floating Down Arrow */}
        <div style={{
          position: 'absolute',
          bottom: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <i className="fas fa-chevron-down" style={{ fontSize: '24px', color: '#4A6B5F' }}></i>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '60%',
        margin: '20px auto'
      }}></div>

      {/* ===== ABOUT ME ===== */}
      <section id="about" style={{
        padding: '8px 24px 24px 24px',
        backgroundColor: '#FFFFFF',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '8px',
          textAlign: 'center'
        }}>Hello, I'm Aina Athirah!</h2>

        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          margin: '0 0 12px 0',
          color: '#222222',
          textAlign: 'justify'
        }}>
          I used to design systems as an engineer. Now I help young minds build their own.
        </p>

        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          margin: '0 0 20px 0',
          color: '#222222',
          textAlign: 'justify'
        }}>
          After years in engineering, I realized my real passion was teaching.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '20px',
          alignItems: 'start',
          marginBottom: '20px'
        }}>
          <img
            src="/ainaam.webp"
            alt="Aina Athirah"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            margin: 0,
            color: '#222222',
            textAlign: 'justify'
          }}>
            For the past 5 years, I've been teaching STEM subjects to students of all levels.
          </p>
        </div>

        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          margin: 0,
          color: '#222222',
          textAlign: 'justify'
        }}>
          My main focus is to build confidence. Because understanding today builds courage for tomorrow.
        </p>

        <div style={{
          height: '2px',
          backgroundColor: '#4A6B5F',
          width: '60%',
          margin: '20px auto 0',
          borderRadius: '2px'
        }}></div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== STATISTICS ===== */}
      <section style={{
        padding: '24px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        gap: '16px'
      }}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <p style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#4A6B5F',
            margin: '0 0 8px 0'
          }}>200+</p>
          <p style={{ fontSize: '14px', color: '#4A6B5F', margin: 0 }}>STUDENTS</p>
        </div>

        <div style={{
          width: '2px',
          height: '60px',
          backgroundColor: '#4A6B5F'
        }}></div>

        <div style={{ textAlign: 'center', flex: 1 }}>
          <p style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#4A6B5F',
            margin: '0 0 8px 0'
          }}>5</p>
          <p style={{ fontSize: '14px', color: '#4A6B5F', margin: 0 }}>YEARS OF EXPERIENCE</p>
        </div>

        <div style={{
          width: '2px',
          height: '60px',
          backgroundColor: '#4A6B5F'
        }}></div>

        <div style={{ textAlign: 'center', flex: 1 }}>
          <p style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#4A6B5F',
            margin: '0 0 8px 0'
          }}>1</p>
          <p style={{ fontSize: '14px', color: '#4A6B5F', margin: 0 }}>GOAL = EXCELLENCE</p>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== MY APPROACH ===== */}
      <section id="approach" style={{
        padding: '12px 24px',
        backgroundColor: '#4A6B5F',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#FFFFFF',
          marginBottom: '12px',
          textAlign: 'center'
        }}>My Approach</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {[
            {
              icon: 'fa-book',
              title: 'All Subjects Welcome',
              text: 'I believe every subject lights up a different part of a child\'s mind. That\'s why I teach across the board from Malay and English to Math and Science. True confidence grows when a student feels capable in all areas, not just one.'
            },
            {
              icon: 'fa-graduation-cap',
              title: 'Every Level Matters',
              text: 'Whether your child is in primary school or preparing for STPM, IB, Matriculation or Diploma, they deserve full attention. I meet students exactly where they are with lessons built for their stage, not a one-size-fits-all plan.'
            },
            {
              icon: 'fa-lightbulb',
              title: 'Real Understanding Over Rote Learning',
              text: 'My rule is simple. Learn to understand, not just to pass. Memorizing for exams fades. But when a student truly gets a concept, that stays with them for life. And that\'s the kind of learning I build.'
            }
          ].map((item, i) => (
            <div key={i} style={{
              border: '8px solid #FFFFFF',
              borderRadius: '8px',
              padding: '24px',
              backgroundColor: '#FFFFFF',
              boxShadow: 'inset 0 0 0 2px #4A6B5F'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#4A6B5F',
                margin: '0 0 12px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '20px' }}></i>
                {item.title}
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#222222',
                margin: 0
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== IN MY CLASSROOM ===== */}
      <section id="classroom" style={{
        padding: '12px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '12px',
          textAlign: 'center'
        }}>In My Classroom</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {[
            {
              icon: 'fa-hand-fist',
              title: 'Learning by Doing',
              text: 'Students don\'t just listen — they solve, draw, explain, and try. Because you remember what you use, not what you hear.'
            },
            {
              icon: 'fa-heart',
              title: 'Mistakes Are Welcome',
              text: 'Wrong answers are part of learning. I make sure every student feels safe to ask, guess, and grow without fear.'
            },
            {
              icon: 'fa-globe',
              title: 'Lessons That Connect to Life',
              text: 'Why does algebra matter? How is science in your phone? I link every topic to real life so it makes sense and sticks.'
            }
          ].map((item, i) => (
            <div key={i} style={{
              border: '2px solid #4A6B5F',
              borderRadius: '8px',
              padding: '24px',
              backgroundColor: '#FFFFFF'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#4A6B5F',
                margin: '0 0 12px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '20px' }}></i>
                {item.title}
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#222222',
                margin: 0
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" style={{
        padding: '12px 24px',
        backgroundColor: '#4A6B5F',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#FFFFFF',
          marginBottom: '12px',
          textAlign: 'center'
        }}>What Parents Are Saying</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              border: '8px solid #FFFFFF',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: '#FFFFFF',
              boxShadow: 'inset 0 0 0 2px #4A6B5F'
            }}>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#222222',
                margin: '0 0 12px 0',
                fontStyle: 'italic'
              }}>
                "{testimonial.quote}"
              </p>
              <p style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#4A6B5F',
                margin: '0 0 2px 0'
              }}>
                — {testimonial.author}
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4A6B5F',
                margin: 0
              }}>
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== SUBJECTS & LEVELS ===== */}
      <section id="subjects" style={{
        padding: '12px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '12px',
          textAlign: 'center'
        }}>Teacher Aina teaches</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{
            border: '2px solid #4A6B5F',
            borderRadius: '8px',
            padding: '24px',
            backgroundColor: '#FFFFFF'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#4A6B5F',
              margin: '0 0 12px 0',
              textAlign: 'center'
            }}>Subjects</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0,
              textAlign: 'center'
            }}>
              Malay • English • Mathematics<br/>
              • Science • Additional Mathematics<br/>
              • Physics • Chemistry • Biology
            </p>
          </div>

          <div style={{
            border: '2px solid #4A6B5F',
            borderRadius: '8px',
            padding: '24px',
            backgroundColor: '#FFFFFF'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#4A6B5F',
              margin: '0 0 12px 0',
              textAlign: 'center'
            }}>Levels</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0,
              textAlign: 'center'
            }}>
              Primary School • Secondary School<br/>
              • SPM • STPM • Matriculation<br/>
              • Diploma • Polytechnic<br/>
              • International Baccalaureate (IB)
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== PACKAGES CAROUSEL ===== */}
      <section id="packages" style={{
        padding: '12px 24px',
        backgroundColor: '#FFFFFF',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '12px',
          textAlign: 'center'
        }}>What I Offer</h2>

        <div
          ref={carouselRef}
          className="carousel-container"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
            paddingBottom: '20px',
            marginBottom: '12px',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              data-package-item
              style={{
                flex: '0 0 calc(100% - 32px)',
                maxWidth: '280px',
                border: '2px solid #4A6B5F',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                flexDirection: 'column',
                scrollSnapAlign: 'start'
              }}
            >
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#4A6B5F',
                margin: '0 0 12px 0',
                textAlign: 'center'
              }}>
                {pkg.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 auto 0',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}>
                {pkg.details.map((detail, i) => (
                  <li key={i} style={{
                    fontSize: '13px',
                    color: '#222222',
                    marginBottom: '6px',
                    lineHeight: '1.3'
                  }}>
                    {detail}
                  </li>
                ))}
              </ul>
              <p style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4A6B5F',
                margin: '12px 0 0 0',
                textAlign: 'center'
              }}>
                {pkg.price}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px'
        }}>
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPackage(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: index === activePackage ? '#4A6B5F' : '#e0e0e0',
                transition: 'background-color 0.3s'
              }}
              aria-label={`Go to package ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== CTA SECTION ===== */}
      <section id="contact" style={{
        padding: '12px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Ready to Start?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          alignItems: 'start'
        }}>
          <img
            src="/ainacta.webp"
            alt="Teacher Aina"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: '0 0 20px 0'
            }}>
              Book a free 30-minute consultation with Teacher Aina.
            </p>
            <a href="https://wa.me/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#4A6B5F',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              whiteSpace: 'nowrap',
              width: 'fit-content'
            }}>
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#4A6B5F',
        width: '100%',
        margin: 0
      }}></div>

      {/* ===== FOOTER ===== */}
      <footer style={{
        padding: '24px',
        backgroundColor: '#4A6B5F',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '14px'
      }}>
        <p style={{ margin: 0 }}>
          Aina Athirah © 2026 • Engineered by FatCalico&Co for FatCalico&Co
        </p>
      </footer>

      {/* FontAwesome Link */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}
