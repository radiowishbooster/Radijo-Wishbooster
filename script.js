/* =========================================
   MODALI IN LIGHTBOX (Skupno)
   ========================================= */
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('main-modal-overlay')) closeAllModals();
    if (event.target === document.getElementById('requestModal')) closeRequests();
});

window.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        closeAllModals();
        closeRequests();
        closeLightbox(); 
    }
});

function openModal(modalId) {
    const overlay = document.getElementById('main-modal-overlay');
    const modal = document.getElementById(modalId);
    if(overlay) overlay.style.display = 'block';
    if(modal) modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAllModals() {
    const ids = ['main-modal-overlay', 'about-modal', 'shows-modal', 'service-description-box'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if(lightbox && lightboxImg) {
        lightbox.style.display = 'block';
        lightboxImg.src = src;
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showServiceDesc(service) {
    const box = document.getElementById('service-description-box');
    const title = document.getElementById('service-title');
    const text = document.getElementById('service-text');
    
    if(!box || !title || !text) return;

    const descriptions = {
        'poroke': { title: 'Nepozabne Poroke', text: 'Vaš dan. Vajina glasba - moja strast. Ustvaril bom vzdušje, ki poveže vse generacije in napolni plesišče z energiijo. Z mano bo vajina poročna zabava dogodek, poln veselja in nepozabnih spominov. Pripravljeni na ples do zore? Kontaktirajte me!' },
        'obletnice': { title: 'Obletnice', text: 'Vsak velik mejnik si zasluži pravo proslavo. Ne glede na to, ali obeležujete, društveni jubilej ali osebni praznik – poskrbim za glasbeno podlago, ki bo povezala preteklost s tisto pravo energijo sedanjega trenutka. Naj bo vaš jubilej dogodek, ki ostane v ponos!' },
        'rojstni_dnevi': { title: 'Rojstni Dnevi', text: 'Pozabite na povprečne zabave. Ne glede na to, ali gre za okroglo številko ali sproščen večer, prinesem energijo, ki bo premaknila vse goste. Glasba po vašem okusu in vrhunska atmosfera zagotovljena!' },
        'poslovni': { title: 'Poslovni Dogodki', text: 'Dvignite nivo vašega dogodka. Od elegantne ambientalne podlage do sproščenega druženja (teambuilding) ali nore zabave po uradnem delu. Profesionalen pristop, vrhunska tehnika in prava glasbena selekcija.' },
        'maturantski_plesi': { title: 'Valete & Maturantski Plesi', text: 'Najboljša zabava za zaključek najlepših let! Poskrbim za najnovejše hite, svetlobne efekte, meglo in neustavljivo energijo, ki bo poskrbela, da se bo o vašem plesu govorilo še celo naslednje šolsko leto.' }
    };

    title.innerText = descriptions[service].title;
    text.innerText = descriptions[service].text;
    box.style.display = 'block';
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function openRequests() {
    const frame = document.getElementById('requestFrame');
    const modal = document.getElementById('requestModal');
    if(frame && modal) {
        frame.src = "https://a13.asurahosting.com/public/wish_booster_radio/embed-requests";
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeRequests() {
    const frame = document.getElementById('requestFrame');
    const modal = document.getElementById('requestModal');
    if(frame && modal) {
        modal.style.display = 'none';
        frame.src = "";
        document.body.style.overflow = 'auto';
    }
}

/* =========================================
   URNIK IN FUNKCIJE (INDEX.HTML)
   ========================================= */
const scheduleData = [
    [ { start: 0, end: 6, name: "🎧 WEEKEND PARTY 💥 MIXI 🎧", img: "slika5.webp" },
      { start: 15, end: 17, name: "🎙️ PODCAST 🔴 MESECA 🎙️ (Ponovitev)", img: "slika4.webp" },
      { start: 20, end: 22, name: "♥️ NEDELJSKI ꨄ︎ VEČER ♥️ <span class='live-badge-inline'>V ŽIVO</span>", img: "slika3.webp" } ],
    [ { start: 20, end: 22, name: "🪗 DOMAČI MEH 🪗 (Ponovitev)", img: "domaci_meh.webp" } ],
    [ { start: 20, end: 22, name: "🪗 DOMAČI MEH 🪗 <span class='live-badge-inline'>V ŽIVO</span>", img: "domaci_meh.webp" } ],
    [ { start: 20, end: 22, name: "♥️ NEDELJSKI ꨄ︎ VEČER ♥️ (Ponovitev)", img: "slika3.webp" } ],
    [ { start: 20, end: 22, name: "⭐ GLASBENI 🎸 VRTILJAK ⭐ <span class='live-badge-inline'>V ŽIVO</span>", img: "slika2.webp" } ],
    [ { start: 18, end: 24, name: "🎧 WEEKEND PARTY 💥 MIXI 🎧", img: "slika5.webp" } ],
    [ { start: 0, end: 6, name: "🎧 WEEKEND PARTY 💥 MIXI 🎧", img: "slika5.webp" },
      { start: 13, end: 15, name: "⭐ GLASBENI 🎸 VRTILJAK ⭐ (Ponovitev)", img: "slika2.webp" },
      { start: 18, end: 24, name: "🎧 WEEKEND PARTY 💥 MIXI 🎧", img: "slika5.webp" } ]
];

function updateSmsButton() {
    const smsBtn = document.getElementById('sms-button');
    const smsHint = document.getElementById('sms-hint');
    if(!smsBtn) return;

    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    
    const isLiveDay = (day === 2 || day === 4 || day === 0);
    const isLiveTime = (hour >= 20 && hour < 22);

    if (isLiveDay && isLiveTime) {
        smsBtn.classList.remove('sms-inactive');
        smsBtn.classList.add('sms-live');
        smsBtn.style.pointerEvents = 'auto'; 
        if(smsHint) smsHint.innerHTML = "<span style='color: #00d4ff;'>🔴 V ŽIVO! Pošlji SMS željo v studio.</span>";
    } else {
        smsBtn.classList.remove('sms-live');
        smsBtn.classList.add('sms-inactive');
        smsBtn.style.pointerEvents = 'none'; 
        if(smsHint) smsHint.innerHTML = "SMS želje sprejemamo v ŽIVO: Torek, Četrtek in Nedelja (20:00 - 22:00).";
    }
}

function updateCurrentShowInfo() {
    const nameEl = document.querySelector('.current-show-name');
    if(!nameEl) return;

    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();

    let currentName = "WISH BOOSTER 24/7 MIX"; 
    let currentImage = "Logo Radio Wish Booster - TRANSPARENT.webp"; 

    if(scheduleData[day]) {
        for(let show of scheduleData[day]) {
            if(hour >= show.start && hour < show.end) {
                currentName = show.name;
                currentImage = show.img;
                break;
            }
        }
    }

    const imgEl = document.querySelector('.player-image');
    if (nameEl && nameEl.innerHTML !== currentName) nameEl.innerHTML = currentName;
    if (imgEl && !imgEl.src.includes(currentImage)) imgEl.src = currentImage;
}

function highlightTodaySchedule() {
    const allDays = document.querySelectorAll('.schedule-day');
    if(allDays.length === 0) return;

    const now = new Date();
    const today = now.getDay();
    const currentHour = now.getHours();

    allDays.forEach(day => {
        day.classList.remove('active-day','live-now');
        const oldLabel = day.querySelector('.live-label');
        if(oldLabel) oldLabel.remove();

        const dayNumber = parseInt(day.getAttribute('data-day'));

        if (dayNumber === today) {
            day.classList.add('active-day');
            const shows = day.querySelectorAll('.show-row');

            shows.forEach(show => {
                const start = parseInt(show.getAttribute('data-start'));
                const end = parseInt(show.getAttribute('data-end'));
                let isLive = false;

                if (start < end) {
                    isLive = currentHour >= start && currentHour < end;
                } else {
                    isLive = currentHour >= start || currentHour < end;
                }

                if (isLive) {
                    day.classList.add('live-now');
                    const label = document.createElement('div');
                    label.className = 'live-label';
                    label.innerText = '🔴 TRENUTNO NA SPOREDU';
                    day.appendChild(label);
                }
            });
        }
    });
}

function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if(!clockElement) return;

    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    clockElement.innerText = `${h}:${m}:${s}`;
}

function acceptCookies() {
    const banner = document.getElementById('cookie-banner');
    if(banner) banner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

function showPhone() {
    const btn = document.getElementById('bookingBtn');
    const link = document.getElementById('phoneLink');
    if(btn && link) {
        btn.style.display = 'none';
        link.style.display = 'inline-flex';
    }
}

function checkLivePopup() {
    const popup = document.getElementById('live-popup');
    if(!popup) return;

    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();

    const isLiveDay = (day === 2 || day === 4 || day === 0);
    const isLiveTime = (hour >= 20 && hour < 22);
    const popupClosed = sessionStorage.getItem('livePopupClosed');

    if (isLiveDay && isLiveTime && !popupClosed) {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

function closeLivePopup() {
    const popup = document.getElementById('live-popup');
    if(popup) popup.style.display = 'none';
    sessionStorage.setItem('livePopupClosed', 'true'); 
}

/* =========================================
   VIP STUDIO LOGIKA (STUDIO.HTML)
   ========================================= */
function checkPassword() {
    const inputField = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('error-message');
    
    if(!inputField) return; // Nismo na studio strani
    
    const input = inputField.value.trim().toUpperCase(); // Avtomatsko pretvori v velike črke
    
    if (input !== "") {
        // Preusmeritev na tvojo skrito stran, poimenovano točno tako kot je geslo.
        // Npr. če uporabnik vpiše "JUNIJ6", ga preusmeri na "JUNIJ6.html"
        window.location.href = input + ".html";
    } else {
        if(errorMessage) {
            errorMessage.style.display = 'block';
            errorMessage.innerText = "Vnesi veljavno geslo!";
        }
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
}

/* =========================================
   ZAGON OB NALAGANJU
   ========================================= */
window.onload = function() {
    const banner = document.getElementById('cookie-banner');
    if(banner && localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'none';
    }

    if(document.getElementById('live-clock')) {
        updateClock();
        setInterval(updateClock, 1000); 
        
        updateSmsButton();
        setInterval(updateSmsButton, 60000);

        updateCurrentShowInfo();
        setInterval(updateCurrentShowInfo, 60000); 

        highlightTodaySchedule();
        setInterval(highlightTodaySchedule, 60000);

        checkLivePopup();
        setInterval(checkLivePopup, 60000);
    }
}
