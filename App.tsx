import { FormEvent, useState } from 'react'

const Arrow = () => <span aria-hidden="true">↗</span>

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Huvudmeny">
          <a className="brand" href="#top" aria-label="NordFlytt startsida">
            <span className="brand-mark"><span /></span>
            NordFlytt
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Öppna meny">
            <span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#tjanster" onClick={() => setMenuOpen(false)}>Tjänster</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Så funkar det</a>
            <a href="#omoss" onClick={() => setMenuOpen(false)}>Om oss</a>
            <a className="nav-cta" href="#offert">Få offert <Arrow /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Flyttfirma i hela Sverige</p>
              <h1>Vi flyttar<br />det som<br /><em>betyder något.</em></h1>
              <p className="hero-lead">Från första kartong till sista möbel. Vi gör din flytt trygg, enkel och helt i din takt.</p>
              <div className="hero-actions">
                <a className="button primary" href="#offert">Boka din flytt <Arrow /></a>
                <a className="text-link" href="#tjanster">Se våra tjänster <span>↓</span></a>
              </div>
            </div>

            <div className="hero-art" aria-label="Illustration av flyttbilar och möbler">
              <div className="sun" />
              <div className="building building-back"><span /><span /><span /></div>
              <div className="building building-front"><span /><span /><span /><span /></div>
              <div className="plant"><i /><i /><b /></div>
              <div className="boxes">
                <div className="box box-a">NORD</div>
                <div className="box box-b"><span /></div>
                <div className="box box-c" />
              </div>
              <div className="truck">
                <div className="truck-box"><b>NORD</b><small>FLYTT</small></div>
                <div className="truck-cab"><span /></div>
                <div className="wheel wheel-one" /><div className="wheel wheel-two" />
              </div>
              <div className="road" />
            </div>
          </div>
          <div className="trust-strip">
            <div className="container trust-inner">
              <div><strong>4,9</strong><span>★</span><small>av 5 i kundbetyg</small></div>
              <div><strong>12+</strong><small>års erfarenhet</small></div>
              <div><strong>100%</strong><small>trygg och försäkrad flytt</small></div>
            </div>
          </div>
        </section>

        <section className="services section" id="tjanster">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow dark"><span /> Våra tjänster</p><h2>Allt för en smidig<br />flytt.</h2></div>
              <p>Oavsett om du flyttar runt hörnet eller över hela landet hjälper vi dig hela vägen.</p>
            </div>
            <div className="service-grid">
              <article className="service-card featured">
                <div className="service-number">01</div>
                <div className="service-icon house-icon"><i /><i /><i /></div>
                <h3>Bostadsflytt</h3>
                <p>Vi packar, bära och monterar—så att du kan fokusera på ditt nya hem.</p>
                <a href="#offert" aria-label="Läs mer om bostadsflytt">Läs mer <Arrow /></a>
              </article>
              <article className="service-card">
                <div className="service-number">02</div>
                <div className="service-icon office-icon"><i /><i /><i /><i /></div>
                <h3>Kontorsflytt</h3>
                <p>Effektiv flyttplanering som får ert företag igång igen, snabbt och säkert.</p>
                <a href="#offert" aria-label="Läs mer om kontorsflytt">Läs mer <Arrow /></a>
              </article>
              <article className="service-card">
                <div className="service-number">03</div>
                <div className="service-icon box-icon"><i /><i /><i /></div>
                <h3>Packning</h3>
                <p>Vi packar säkert med rätt material—våra eller dina, helt enligt önskemål.</p>
                <a href="#offert" aria-label="Läs mer om packning">Läs mer <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container process-grid">
            <div className="process-visual">
              <div className="arch"><div className="moon"><span /></div></div>
              <div className="sofa"><i /><i /><b /></div>
              <div className="lamp"><i /><b /></div>
              <div className="rug" />
            </div>
            <div className="process-copy">
              <p className="eyebrow dark"><span /> Enkel process</p>
              <h2>Från A till B,<br />utan krångel.</h2>
              <ol>
                <li><span>1</span><div><h3>Berätta om din flytt</h3><p>Fyll i några enkla uppgifter så får du snabbt en tydlig offert.</p></div></li>
                <li><span>2</span><div><h3>Vi planerar allt</h3><p>Vi bokar tid, packar vid behov och förbereder hela logistiken.</p></div></li>
                <li><span>3</span><div><h3>Du kan luta dig tillbaka</h3><p>Vårt erfarna team sköter transporten från dörr till dörr.</p></div></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="quote-section" id="offert">
          <div className="container quote-grid">
            <div className="quote-copy">
              <p className="eyebrow light"><span /> Kostnadsfri offert</p>
              <h2>Redo för ett nytt<br />kapitel?</h2>
              <p>Berätta lite om din flytt så återkommer vi inom 24 timmar med ett tydligt prisförslag.</p>
            </div>
            <form className="quote-form" onSubmit={submitQuote}>
              {sent ? (
                <div className="success" role="status"><span>✓</span><h3>Tack för din förfrågan!</h3><p>Vi hör av oss inom 24 timmar.</p><button type="button" onClick={() => setSent(false)}>Skicka en ny förfrågan</button></div>
              ) : (
                <>
                  <div className="field-row">
                    <label>Från<input required name="from" placeholder="Postort / adress" /></label>
                    <label>Till<input required name="to" placeholder="Postort / adress" /></label>
                  </div>
                  <div className="field-row">
                    <label>Namn<input required name="name" placeholder="Ditt namn" /></label>
                    <label>Telefon<input required name="phone" type="tel" placeholder="070–000 00 00" /></label>
                  </div>
                  <label>Berätta lite mer<textarea name="message" rows={3} placeholder="Boarea, våning, önskat datum..." /></label>
                  <button className="button form-button" type="submit">Skicka förfrågan <Arrow /></button>
                </>
              )}
            </form>
          </div>
        </section>

        <section className="testimonial section" id="omoss">
          <div className="container testimonial-inner">
            <p className="eyebrow dark"><span /> Kundröster</p>
            <blockquote>“Flyttteamet var punktliga, försiktiga och så trevliga. Allt var i ordning i vårt nya hem redan samma kväll.”</blockquote>
            <div className="customer"><div className="avatar">EM</div><div><strong>Emma &amp; Johan</strong><small>Flyttade från Malmö till Lund</small></div></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#top"><span className="brand-mark"><span /></span>NordFlytt</a>
          <p>Trygg flytt. Från dörr till dörr.</p>
          <a className="footer-phone" href="tel:+468123456">08–123 456 <Arrow /></a>
        </div>
      </footer>
    </>
  )
}
