'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

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

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#FFFFFF', color: '#222222' }}>
      
      {/* ===== BANNER ===== */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#000000' }}>Aina Athirah</h1>
        
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
              color: '#000000',
              padding: 0
            }}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>
      </header>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #f0f0f0',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'sticky',
          top: '50px',
          zIndex: 99
        }}>
          <a href="#about" style={{ color: '#000000', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>About me</a>
          <a href="#approach" style={{ color: '#000000', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>My Approach</a>
          <a href="#classroom" style={{ color: '#000000', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>My Classroom</a>
          <a href="#testimonials" style={{ color: '#000000', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#subjects" style={{ color: '#000000', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Subjects & Levels</a>
          <a href="#packages" style={{ color: '#000000', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Packages</a>
          <a href="#contact" style={{ color: '#000000', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Contact Me</a>
        </nav>
      )}

      {/* ===== HERO ===== */}
      <section style={{
        backgroundImage: 'url(/ainahero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '60px 24px',
        position: 'relative'
      }}>
        <div>
          <h2 style={{
            fontSize: '64px',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: '1.1',
            color: '#000000',
            textShadow: '2px 2px 4px rgba(255,255,255,0.3)'
          }}>
            Passion<br/>
            Patience<br/>
            Precision
          </h2>
          <p style={{
            fontSize: '16px',
            marginTop: '16px',
            color: '#000000',
            fontWeight: '500',
            textShadow: '1px 1px 2px rgba(255,255,255,0.3)'
          }}>
            One step at a time.<br/>
            To achieve excellence.
          </p>
        </div>

        {/* Floating Down Arrow */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <i className="fas fa-chevron-down" style={{ fontSize: '24px', color: '#4A6B5F' }}></i>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-10px); }
          }
        `}</style>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section id="about" style={{
        padding: '48px 24px',
        backgroundColor: '#FFFFFF',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '32px',
          textAlign: 'center'
        }}>Hello, I'm Aina Athirah!</h2>

        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Image */}
          <img
            src="/ainaam.webp"
            alt="Aina Athirah"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              objectFit: 'cover',
              flexShrink: 0
            }}
          />

          {/* Text */}
          <div style={{
            flex: 1,
            minWidth: '280px',
            textAlign: 'justify'
          }}>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              margin: 0,
              color: '#222222'
            }}>
              I used to design systems as an engineer. Now I help young minds build their own. After years in engineering, I realized my real passion was teaching. For the past 5 years, I've been teaching STEM subjects to students of all levels. My main focus is to build confidence. Because understanding today builds courage for tomorrow.
            </p>
          </div>
        </div>

        {/* Green accent line */}
        <div style={{
          height: '2px',
          backgroundColor: '#4A6B5F',
          width: '60%',
          margin: '32px auto 0',
          borderRadius: '2px'
        }}></div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section style={{
        padding: '48px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Stat 1 */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#4A6B5F',
              margin: '0 0 8px 0'
            }}>200+</p>
            <p style={{ fontSize: '14px', color: '#222222', margin: 0 }}>students</p>
          </div>

          {/* Divider */}
          <div style={{
            width: '2px',
            height: '60px',
            backgroundColor: '#4A6B5F'
          }}></div>

          {/* Stat 2 */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#4A6B5F',
              margin: '0 0 8px 0'
            }}>5</p>
            <p style={{ fontSize: '14px', color: '#222222', margin: 0 }}>years of experience</p>
          </div>

          {/* Divider */}
          <div style={{
            width: '2px',
            height: '60px',
            backgroundColor: '#4A6B5F'
          }}></div>

          {/* Stat 3 */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#4A6B5F',
              margin: '0 0 8px 0'
            }}>1</p>
            <p style={{ fontSize: '14px', color: '#222222', margin: 0 }}>goal = excellence</p>
          </div>
        </div>
      </section>

      {/* ===== MY APPROACH ===== */}
      <section id="approach" style={{
        padding: '48px 24px',
        backgroundColor: '#FFFFFF',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '32px',
          textAlign: 'center'
        }}>My Approach</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* Card 1 */}
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
              margin: '0 0 12px 0'
            }}>All Subjects Welcome</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              I believe every subject lights up a different part of a child's mind. That's why I teach across the board from Malay and English to Math and Science. True confidence grows when a student feels capable in all areas, not just one.
            </p>
          </div>

          {/* Card 2 */}
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
              margin: '0 0 12px 0'
            }}>Every Level Matters</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              Whether your child is in primary school or preparing for STPM, IB, Matriculation or Diploma, they deserve full attention. I meet students exactly where they are with lessons built for their stage, not a one-size-fits-all plan.
            </p>
          </div>

          {/* Card 3 */}
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
              margin: '0 0 12px 0'
            }}>Real Understanding Over Rote Learning</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              My rule is simple. Learn to understand, not just to pass. Memorizing for exams fades. But when a student truly gets a concept, that stays with them for life. And that's the kind of learning I build.
            </p>
          </div>
        </div>
      </section>

      {/* ===== IN MY CLASSROOM ===== */}
      <section id="classroom" style={{
        padding: '48px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '32px',
          textAlign: 'center'
        }}>In My Classroom</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* Card 1 */}
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
              margin: '0 0 12px 0'
            }}>Learning by Doing</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              Students don't just listen — they solve, draw, explain, and try. Because you remember what you use, not what you hear.
            </p>
          </div>

          {/* Card 2 */}
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
              margin: '0 0 12px 0'
            }}>Mistakes Are Welcome</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              Wrong answers are part of learning. I make sure every student feels safe to ask, guess, and grow without fear.
            </p>
          </div>

          {/* Card 3 */}
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
              margin: '0 0 12px 0'
            }}>Lessons That Connect to Life</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              Why does algebra matter? How is science in your phone? I link every topic to real life so it makes sense and sticks.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" style={{
        padding: '48px 24px',
        backgroundColor: '#FFFFFF',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '32px',
          textAlign: 'center'
        }}>What Parents Are Saying</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #e0e0e0',
              borderLeft: '4px solid #4A6B5F',
              borderRadius: '4px',
              padding: '16px',
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
                color: '#666666',
                margin: 0
              }}>
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SUBJECTS & LEVELS ===== */}
      <section id="subjects" style={{
        padding: '48px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '32px',
          textAlign: 'center'
        }}>Teacher Aina teaches</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* Subjects Box */}
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
              margin: '0 0 12px 0'
            }}>Subjects</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              Malay • English • Mathematics • Science • Additional Mathematics • Physics • Chemistry • Biology
            </p>
          </div>

          {/* Levels Box */}
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
              margin: '0 0 12px 0'
            }}>Levels</h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: 0
            }}>
              Primary School • Secondary School (Form 1–5) • SPM • STPM • Matriculation • Diploma • Polytechnic • International Baccalaureate (IB)
            </p>
          </div>
        </div>
      </section>

      {/* ===== PACKAGES CAROUSEL ===== */}
      <section id="packages" style={{
        padding: '48px 24px',
        backgroundColor: '#FFFFFF',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4A6B5F',
          marginBottom: '32px',
          textAlign: 'center'
        }}>What I Offer</h2>

        {/* Carousel Container */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '20px',
          paddingBottom: '20px',
          scrollBehavior: 'smooth'
        }}>
          {packages.map((pkg, index) => (
            <div key={index} style={{
              flex: '0 0 calc(100% - 20px)',
              minWidth: '280px',
              border: '2px solid #4A6B5F',
              borderRadius: '8px',
              padding: '24px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#4A6B5F',
                margin: '0 0 12px 0'
              }}>
                {pkg.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 16px 0'
              }}>
                {pkg.details.map((detail, i) => (
                  <li key={i} style={{
                    fontSize: '14px',
                    color: '#222222',
                    marginBottom: '8px'
                  }}>
                    {detail}
                  </li>
                ))}
              </ul>
              <p style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#4A6B5F',
                margin: 0
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
          gap: '8px',
          marginTop: '16px'
        }}>
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCarouselIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: index === activeCarouselIndex ? '#4A6B5F' : '#e0e0e0',
                transition: 'background-color 0.3s'
              }}
              aria-label={`Go to package ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="contact" style={{
        padding: '48px 24px',
        backgroundColor: '#f9f9f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Image */}
          <img
            src="/ainacta.webp"
            alt="Teacher Aina"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              objectFit: 'cover',
              flexShrink: 0
            }}
          />

          {/* Text & CTA */}
          <div style={{
            flex: 1,
            minWidth: '280px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#000000',
              margin: '0 0 16px 0'
            }}>
              Ready to Start?
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#222222',
              margin: '0 0 16px 0'
            }}>
              Book a free 30-minute consultation with Teacher Aina. We'll talk about your child's needs, goals, and how we can help them thrive.
            </p>
            <p style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 20px 0'
            }}>
              No pressure. Just a honest conversation.
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
              fontSize: '16px'
            }}>
              <i className="fab fa-whatsapp"></i>
              WhatsApp us now
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        padding: '24px',
        backgroundColor: '#000000',
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
