'use client';

import { useEffect, useRef, useState } from 'react';

/* ─── Data (unchanged from original) ───────────────────────────────────────── */

const POSTS = [
    { id: '1wIxVNtA-WrMoGPNcHnmIN-OKGLsL40Op', name: 'Post 41' },
    { id: '1G2KFSVpkBh27m9otiPhm9xK7zNFBW-d9', name: 'Post10' },
    { id: '1h-p7dSCykb5UqJ_po62-wtM11ugBovS7', name: 'Post11' },
    { id: '1g-EcvbtAe3lH9rJZrVlsa11XcDUwmc2K', name: 'Post12' },
    { id: '1bD5LC3VNAAlfs_3OQVyz4D0LuHUD2YgU', name: 'Post13' },
    { id: '1kmKzRbaSljuNxTC0vfyE90PkbV0sBia8', name: 'Post14' },
    { id: '1oZ0NcPbZZtKwgLcFzxXq6QHjwKVpuaFc', name: 'Post15' },
    { id: '1Eqv_wn8nns_PNnI27ji15MxoExf9fZkL', name: 'Post 42' },
    { id: '1a0z1KumptoACNLmQKsDRnC-gagAINB6o', name: 'Post16' },
];

const POSTS1 = [
    { id: '13kgJQHqd9uKsjNjNWT9TefXtxcABi3b0', name: 'Post 41' },
    { id: '1xDoP7yYPbW9N_I4QurLaHOz8pQk7lZqk', name: 'Post10' },
    { id: '1bJb2ecv4RwvSly_lUjtUskhIK9Mlobm5', name: 'Post11' },
    { id: '1HcyeRTlA3tt8YdZ8XfFUBAcUjO9TAoW0', name: 'Post12' },
    { id: '1XcxyTWJFunDyb42sE9o0thMezXfOFaOF', name: 'Post13' },
    { id: '1Kb-udI7CVYDHcwIlKYp1v7pgC5duc-HN', name: 'Post14' },
    { id: '1giayqZuZtzWoRs6BWg7QXDP17WjyabnZ', name: 'Post15' },
    { id: '1SncpvYakFxwOHAJxyXwVCo_WEJ48BiKg', name: 'Post 42' },
    { id: '1kzWQxEkRVqKCkeqhPEywBMGF7eGm_pNj', name: 'Post16' },
];

const POSTS2 = [
    { id: '1vfdRtXzwqojMxFZRvUQqix7oQSeDi5ek', name: 'Post03' },
    { id: '1H4FbzClbTkKRH2jg1jW-wNu52eayZEqX', name: 'Post04' },
    { id: '1uh5Q7vFdgRxVOComApuukQRK5emkcYyN', name: 'Post06' },
    { id: '1qDo5AGkBIhxkuG6lJ7mI96To7QNqJeBq', name: 'Post02' },
    { id: '1jR0uJsRJ2jdFRAw2-0mLwZ_DJV_Y3xJJ', name: 'Post01' },
    { id: '1P1xCoHgy5Rc5rd-Bx4PGzIw7KwS_K2yq', name: 'Post07' },
    { id: '17C1u3-_adZzEWv9MZ3ignAt2Hmfv5ToT', name: 'Post9' },
    { id: '1zIAfA_y4DRY9l0nlKMo1Lfio3xmF-wds', name: 'Post05' },
    { id: '1Y9Eu-QROT8oBMJJ7-lbRhJvNXjR_wnD0', name: 'Post08' },
];

const CAPTIONS = [
    { h: 'The future, fully charged.', b: 'Introducing the NIO EL8 — the smartest SUV in the UAE. AED 359,900. Book your test drive today.', tags: '#NIOUAE #EL8 #BlueSkyComing #ElectricFuture #AbuDhabi' },
    { h: 'Three minutes. Zero queue.', b: 'While the rest of the world is still plugging in, our Power Swap Stations give you a full battery in 180 seconds.', tags: '#PowerSwap #NIOPower #Innovation #UAE' },
    { h: 'Luxury, rewired.', b: 'Italian leather, MEMS suspension, a sommelier mode for wine glasses. Yes, really.', tags: '#EL8Interior #Craftsmanship #Design' },
    { h: 'Built for the long road.', b: '510 km of WLTP-certified range. Abu Dhabi to Ras Al Khaimah and back, without a second thought.', tags: '#NIOEL8 #510km #UAE #Roadtrip' },
    { h: 'Your NIO is watching out for you.', b: 'Banyan 3.0.0 brings next-gen ADAS — 33 sensors, 1,016 TOPS of compute, zero compromise.', tags: '#Banyan #ADAS #Safety #SmartMobility' },
    { h: 'Welcome to NIO House.', b: 'The Galleria, Al Maryah Island. Not a showroom. A living room for a new kind of driver.', tags: '#NIOHouse #AbuDhabi #CommunityFirst' },
    { h: 'NOMI, meet the desert.', b: 'Our AI companion just learned Arabic. And how to recommend the best karak stops on your route.', tags: '#NOMI #AI #UAE #BlueSkyComing' },
    { h: 'The coupe SUV, recoded.', b: "NIO EC6 arriving in the UAE soon. A design that doesn't whisper — it hums.", tags: '#EC6 #ComingSoon #CoupeSUV' },
    { h: 'One swap, infinite journeys.', b: 'Rolling out across the Emirates this year. NIO Power — the fastest way to full.', tags: '#PowerSwap #NIOPower #Infrastructure' },
    { h: 'Abu Dhabi is electric.', b: 'In partnership with CYVN Holdings — building the future of mobility in the Emirates, from the ground up.', tags: '#CYVN #NIOUAE #Partnership' },
    { h: 'Engineered in silence.', b: 'The EL8 cabin is quieter than a library at midnight. We measured.', tags: '#EL8 #Engineering #Quality' },
    { h: 'This is what 0–100 feels like.', b: "4 seconds. A push against the seat. A grin that doesn't leave.", tags: '#EL8Performance #EV #Acceleration' },
    { h: 'NIO ET5 — the smart sedan redefined.', b: 'The sedan that thinks. Coming to the UAE in 2026.', tags: '#ET5 #SmartSedan #Sedan' },
    { h: 'Meet the Second Lounge.', b: 'Recline, rest, recharge — while the car takes the wheel. The EL8 Executive Edition.', tags: '#EL8Executive #SecondLounge #Luxury' },
    { h: 'A studio on wheels.', b: '7.1.4 Dolby Atmos. 23 speakers. Every drive becomes a premiere.', tags: '#DolbyAtmos #EL8 #Sound' },
    { h: 'Design, detailed.', b: 'Every line on the EL8 reduces drag, adds range, and looks beautiful doing it. 0.26 Cd.', tags: '#Design #Aerodynamics #EV' },
    { h: 'Community is a product feature.', b: 'NIO User Enterprise — we build the car with the people who drive it.', tags: '#UserEnterprise #Community #NIO' },
    { h: "This is not a launch. It's a chapter.", b: 'NIO entered the UAE in October 2024. What happens next will be written by you.', tags: '#NIOUAE #Launch #BlueSkyComing' },
    { h: 'Panoramic skylight. Real sky.', b: 'Switchable from transparent to opaque. Because the UAE has some views worth keeping.', tags: '#EL8 #Skylight #Innovation' },
    { h: 'Powered by 22 years of R&D.', b: 'Over 9,000 engineers. 8,500+ patents. A company built to out-invent the next decade.', tags: '#RnD #NIOGlobal #Innovation' },
    { h: "The UAE's first Battery Swap Station.", b: 'Live, operational, and yours to use. Location reveal dropping in 48 hours.', tags: '#PowerSwap #UAE #First' },
    { h: 'Tell us where you want us.', b: "Next NIO House city — Dubai or Sharjah? Drop a comment. We're listening.", tags: '#Poll #CommunityChoice #Dubai #Sharjah' },
    { h: 'Test drive. Stay for karak.', b: 'Every test drive ends with coffee on us at NIO House. This is how we do it.', tags: '#TestDrive #NIOHouse #HomeOfNIO' },
    { h: 'Proud partners of the Emirates.', b: "CYVN Holdings × NIO — investing in the UAE's leadership in electric mobility.", tags: '#CYVN #Partnership #UAE' },
    { h: 'From blueprint to boulevard.', b: 'Months in the making. Minutes to fall in love with.', tags: '#EL8 #UAEDrive #Launch' },
    { h: 'The screen that becomes invisible.', b: "The 12.8\" AMOLED display in the EL8 isn't the star. The drive is.", tags: '#EL8Interior #Display #Tech' },
    { h: 'Your next weekend plan.', b: 'Drive the EL8 to Al Ain. Swap in 3 minutes. Keep going. The desert is calling.', tags: '#WeekendDrive #AlAin #EV' },
    { h: 'Smart is the new luxury.', b: 'When your car learns you faster than your family does.', tags: '#NOMI #SmartEV #Luxury' },
    { h: '6,700+ cars swapped daily — globally.', b: 'NIO has completed over 67 million battery swaps. The UAE is next on the map.', tags: '#GlobalScale #PowerSwap #NIO' },
    { h: 'A promise you can drive.', b: 'Zero emissions. Zero anxiety. Zero compromise. Welcome to the blue sky.', tags: '#BlueSkyComing #ZeroEmission #EV' },
    { h: 'See you at NIO House.', b: 'This Saturday. 4pm. Private test drive event. Link in bio to RSVP.', tags: '#NIOHouse #Event #RSVP' },
];

const TIMEFRAMES = ['2 HOURS AGO', '5 HOURS AGO', '1 DAY AGO', '2 DAYS AGO', '3 DAYS AGO', '4 DAYS AGO', '1 WEEK AGO', '2 WEEKS AGO'];
const LIKE_COUNTS = [438, 712, 894, 1103, 1248, 1419, 1603, 1842, 2014, 2268, 2491, 2703, 2988];

const thumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w400`;
const fullSize = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;

/* ─── Verified Badge ────────────────────────────────────────────────────────── */

function VerifiedBadge() {
    return (
        <span className="verified">
            <svg viewBox="0 0 24 24">
                <path d="M20 12l-2-2 1-3-3-1-1-3-3 1-2-2-2 2-3-1-1 3-3 1 1 3-2 2 2 2-1 3 3 1 1 3 3-1 2 2 2-2 3 1 1-3 3-1-1-3 2-2zm-9.5 4.5l-4-4 1.4-1.4 2.6 2.6 6.6-6.6L18.5 8.5l-8 8z" />
            </svg>
        </span>
    );
}

/* ─── Grid Item ─────────────────────────────────────────────────────────────── */

function GridItem({ post, index, onOpen }) {
    const [loaded, setLoaded] = useState(false);

    let badge = null;
    if (index % 7 === 3) {
        badge = (
            <div className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
            </div>
        );
    } else if (index % 4 === 1) {
        badge = (
            <div className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="14" height="14" />
                    <rect x="7" y="7" width="14" height="14" />
                </svg>
            </div>
        );
    }

    return (
        <div className={`grid-item${loaded ? ' loaded' : ''}`} onClick={() => onOpen(index)}>
            <div className="grid-placeholder">{String(index + 1).padStart(2, '0')}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                loading="lazy"
                alt={post.name}
                src={thumb(post.id)}
                referrerPolicy="no-referrer"
                onLoad={() => setLoaded(true)}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {badge}
        </div>
    );
}

/* ─── Single iPhone mockup with IG profile ──────────────────────────────────── */

function IgPhone({ postsArray, onOpenModal }) {
    const [clock, setClock] = useState('9:41');
    const scrollHintRef = useRef(null);

    useEffect(() => {
        const update = () => {
            const d = new Date();
            const h = d.getHours() % 12 || 12;
            const m = d.getMinutes().toString().padStart(2, '0');
            setClock(`${h}:${m}`);
        };
        update();
        const id = setInterval(update, 30000);
        return () => clearInterval(id);
    }, []);

    const handleScroll = (e) => {
        if (!scrollHintRef?.current) return;
        const el = e.currentTarget;
        const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
        scrollHintRef.current.classList.toggle('hint-hide', pct > 0.1);
    };

    return (
        <div className="iphone">
            <div className="side-btn side-action"></div>
            <div className="side-btn side-volume-up"></div>
            <div className="side-btn side-volume-dn"></div>
            <div className="side-btn side-power"></div>

            <div className="screen">
                <div className="dynamic-island"></div>

                <div className="status-bar">
                    <div className="status-time" suppressHydrationWarning>{clock}</div>
                    <div className="status-icons">
                        <svg width="16" height="10" viewBox="0 0 16 10">
                            <path d="M1 8h2v2H1zM5 6h2v4H5zM9 3h2v7H9zM13 0h2v10h-2z" fill="white" />
                        </svg>
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                            <path d="M7 8.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM7 5.2c1.6 0 3.1.6 4.2 1.7l-1.1 1.1a4.4 4.4 0 00-6.2 0L2.8 6.9A6 6 0 017 5.2zM7 1.6A9.6 9.6 0 0113.8 4.4l-1.1 1.1a8 8 0 00-11.4 0L.2 4.4A9.6 9.6 0 017 1.6z" />
                        </svg>
                        <svg width="24" height="11" viewBox="0 0 24 11">
                            <rect x="0.5" y="0.5" width="20" height="10" rx="2.5" fill="none" stroke="#fff" strokeOpacity="0.5" />
                            <rect x="2" y="2" width="17" height="7" rx="1.2" fill="#fff" />
                            <rect x="21" y="3.5" width="1.5" height="4" rx="0.5" fill="#fff" fillOpacity="0.5" />
                        </svg>
                    </div>
                </div>

                <div className="ig-app">
                    <div className="ig-header">
                        <div className="ig-username">
                            <span>uae.nio</span>
                            <VerifiedBadge />
                        </div>
                        <div className="ig-header-icons">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="5" cy="12" r="1.5" />
                                <circle cx="12" cy="12" r="1.5" />
                                <circle cx="19" cy="12" r="1.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="ig-scroll" onScroll={handleScroll}>
                        <div className="profile-top">
                            <div className="avatar-ring">
                                <div className="avatar-inner">
                                    <div className="avatar-img">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            style={{ width: '100%' }}
                                            src="https://res.cloudinary.com/dje8fshak/image/upload/v1777012337/copy_of_screenshot_2026-04-24_at_115818_am_jvp6io_e55117.png"
                                            alt="NIO UAE"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="profile-stats">
                                <div className="pstat">
                                    <div className="pstat-num">209</div>
                                    <div className="pstat-label">posts</div>
                                </div>
                                <div className="pstat">
                                    <div className="pstat-num">12.3K</div>
                                    <div className="pstat-label">followers</div>
                                </div>
                                <div className="pstat">
                                    <div className="pstat-num">8</div>
                                    <div className="pstat-label">following</div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-bio">
                            <div className="profile-name">NIO UAE</div>
                            <div className="profile-category">Automotive Company</div>
                            <div className="profile-bio-text">
                                Welcome to NIO UAE. We build smart EVs, offer premium services, and innovative charging solutions,
                                shaping a sustainable and brighter future together.
                            </div>
                            <div className="followed-by">Followed by <b>cyvn_holdings</b>, <b>nio_global</b> +41 more</div>
                        </div>

                        <div className="profile-actions">
                            <button className="ig-btn primary">Follow</button>
                            <button className="ig-btn">Message</button>
                            <button className="ig-btn icon-only">▾</button>
                        </div>

                        <div className="tab-row">
                            <div className="tab active">
                                <svg viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                </svg>
                            </div>
                            <div className="tab">
                                <svg viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none">
                                    <polygon points="6 4 20 12 6 20 6 4" />
                                </svg>
                            </div>
                            <div className="tab">
                                <svg viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                        </div>

                        <div className="grid">
                            {postsArray.map((post, i) => (
                                <GridItem key={post.id} post={post} index={i} onOpen={onOpenModal} />
                            ))}
                        </div>
                        <div style={{ height: '12px' }}></div>
                    </div>

                    <div className="ig-bottom">
                        <svg viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12L12 3l9 9M5 10v10h14V10" />
                        </svg>
                        <svg viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.3-4.3" />
                        </svg>
                        <svg viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <polygon points="10 8 16 12 10 16 10 8" fill="#fff" />
                        </svg>
                        <svg viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2h12l3 6-9 14L3 8z" />
                        </svg>
                        <div className="profile-dot">
                            <div>N</div>
                        </div>
                    </div>
                </div>

                {/* Scroll hint on every phone */}
                <div className="scroll-hint" ref={scrollHintRef}>
                    <div className="scroll-hint-track">
                        <div className="scroll-hint-dot"></div>
                    </div>
                    <div className="scroll-hint-label">scroll</div>
                </div>

                <div className="home-ind"></div>
            </div>
        </div>
    );
}

/* ─── Post Modal ────────────────────────────────────────────────────────────── */

function PostModal({ isOpen, onClose, posts, initialIndex }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => { setCurrentIndex(initialIndex); }, [initialIndex]);

    useEffect(() => {
        if (!isOpen) return;
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') setCurrentIndex((i) => (i + 1) % posts.length);
            if (e.key === 'ArrowLeft') setCurrentIndex((i) => (i - 1 + posts.length) % posts.length);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose, posts.length]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen) return null;

    const p = posts[currentIndex];
    const cap = CAPTIONS[currentIndex % CAPTIONS.length];

    return (
        <div className="modal open" onClick={(e) => { if (e.currentTarget === e.target) onClose(); }}>
            <div className="modal-card">
                <div className="modal-media">
                    <div className="modal-counter">{currentIndex + 1} / {posts.length}</div>
                    <button className="modal-nav modal-prev" onClick={() => setCurrentIndex((i) => (i - 1 + posts.length) % posts.length)}>‹</button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={fullSize(p.id)} alt="Post" referrerPolicy="no-referrer" />
                    <button className="modal-nav modal-next" onClick={() => setCurrentIndex((i) => (i + 1) % posts.length)}>›</button>
                </div>
                <div className="modal-side">
                    <div className="modal-post-header">
                        <div className="modal-post-avatar"><div>N</div></div>
                        <div className="modal-post-user">
                            uae.nio
                            <span style={{ display: 'inline-flex', width: 12, height: 12, background: '#3797f0', borderRadius: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="#fff">
                                    <path d="M20 12l-2-2 1-3-3-1-1-3-3 1-2-2-2 2-3-1-1 3-3 1 1 3-2 2 2 2-1 3 3 1 1 3 3-1 2 2 2-2 3 1 1-3 3-1-1-3 2-2z" />
                                </svg>
                            </span>
                        </div>
                        <button className="modal-close" onClick={onClose}>×</button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-caption">
                            <div><span className="h">uae.nio</span> <b>{cap.h}</b></div>
                            <div style={{ marginTop: '6px', color: 'rgba(255,255,255,0.88)' }}>{cap.b}</div>
                            <div className="tags">{cap.tags}</div>
                        </div>
                    </div>
                    <div className="modal-actions-row">
                        <div className="group">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" />
                            </svg>
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
                            </svg>
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </div>
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                    </div>
                    <div className="modal-likes">{LIKE_COUNTS[currentIndex % LIKE_COUNTS.length].toLocaleString()} likes</div>
                    <div className="modal-time">{TIMEFRAMES[currentIndex % TIMEFRAMES.length]}</div>
                </div>
            </div>
        </div>
    );
}

/* ─── Lightbox ──────────────────────────────────────────────────────────────── */

const GALLERY_IMAGES = [
    'https://res.cloudinary.com/dje8fshak/image/upload/v1777023549/Untitled_w77h5q.png',
    'https://res.cloudinary.com/dje8fshak/image/upload/v1777023549/Untitled_1_osra47.png',
];

function Lightbox({ isOpen, index, onClose, onNav }) {
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNav(1);
            if (e.key === 'ArrowLeft') onNav(-1);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose, onNav]);

    if (!isOpen) return null;

    return (
        <div className="lightbox open" onClick={(e) => { if (e.currentTarget === e.target) onClose(); }}>
            <div className="lightbox-inner">
                <button className="lightbox-close" onClick={onClose}>×</button>
                <button className="lightbox-nav lightbox-prev" onClick={() => onNav(-1)}>‹</button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[index]} alt="" />
                <button className="lightbox-nav lightbox-next" onClick={() => onNav(1)}>›</button>
            </div>
        </div>
    );
}

/* ─── Main exported component ───────────────────────────────────────────────── */

export default function NioPitch() {
    const [modal, setModal] = useState({ open: false, posts: POSTS, index: 0 });
    const [lightbox, setLightbox] = useState({ open: false, index: 0 });

    const openModal = (posts, index) => setModal({ open: true, posts, index });
    const closeModal = () => setModal((m) => ({ ...m, open: false }));
    const openLightbox = (i) => { setLightbox({ open: true, index: i }); document.body.style.overflow = 'hidden'; };
    const closeLightbox = () => { setLightbox((lb) => ({ ...lb, open: false })); document.body.style.overflow = ''; };
    const navLightbox = (delta) =>
        setLightbox((lb) => ({ ...lb, index: (lb.index + delta + GALLERY_IMAGES.length) % GALLERY_IMAGES.length }));

    return (
        <>
            {/*
        =====================================================================
        STYLES — every single rule copied verbatim from the original HTML.
        class → kept as-is (used via className in JSX below).
        =====================================================================
      */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }

        :root {
          --nio-black: #0a0a0a;
          --nio-dark: #111418;
          --nio-blue: #00d8ff;
          --nio-accent: #3860ff;
          --ig-gradient: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          --text-primary: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.6);
        }

        html, body {
          background: #000;
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* ===== BACKGROUND ===== */
        .bg-layer {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(1000px 700px at 20% 10%, rgba(56, 96, 255, 0.15), transparent 60%),
            radial-gradient(900px 700px at 85% 85%, rgba(0, 216, 255, 0.12), transparent 60%),
            radial-gradient(600px 500px at 50% 50%, rgba(120, 80, 255, 0.08), transparent 70%),
            linear-gradient(180deg, #05060a 0%, #0a0d14 50%, #05060a 100%);
          z-index: -2;
        }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
          z-index: -1;
        }

        /* ===== HEADER ===== */
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 48px;
          position: relative;
          z-index: 10;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
        }

        .brand-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--nio-blue);
          box-shadow: 0 0 12px var(--nio-blue);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        .confidential {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          padding: 6px 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
        }

        /* ===== HERO LAYOUT ===== */
        .hero {
          display: block;
          grid-template-columns: 1.05fr 1fr;
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 48px 60px;
          align-items: center;
          min-height: calc(100vh - 100px);
        }

        .hero-copy { padding-right: 20px; }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--nio-blue);
          margin-bottom: 28px;
          padding: 8px 16px;
          background: rgba(0, 216, 255, 0.08);
          border: 1px solid rgba(0, 216, 255, 0.25);
          border-radius: 100px;
        }

        .eyebrow svg { width: 14px; height: 14px; }

        h1 {
          font-size: clamp(42px, 5.2vw, 76px);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: -0.03em;
          margin-bottom: 28px;
        }

        h1 em {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-weight: 400;
          background: linear-gradient(135deg, var(--nio-blue) 0%, #a78bfa 50%, #e879f9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .lede {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          max-width: 560px;
          margin-bottom: 36px;
          font-weight: 300;
        }

        .lede b { color: #fff; font-weight: 600; }

        .cta-row { display: flex; gap: 14px; flex-wrap: wrap; }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          font-family: inherit;
        }

        .btn-primary { background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%); color: #000; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255, 255, 255, 0.15); }
        .btn-ghost { background: rgba(255, 255, 255, 0.05); color: #fff; border: 1px solid rgba(255, 255, 255, 0.15); text-decoration: none; }
        .btn-ghost:hover { background: rgba(255, 255, 255, 0.1); }

        .by-line {
          margin-top: 50px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
        }

        .by-line span { color: #fff; margin-left: 6px; }

        /* ===== iPHONE MOCKUP ===== */
        .phone-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 2400px;
          position: relative;
        }

        .phone-stage::before {
          content: '';
          position: absolute;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(56, 96, 255, 0.25) 0%, transparent 60%);
          filter: blur(60px);
          z-index: 0;
          pointer-events: none;
          animation: breathe 6s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50%       { transform: scale(1.15); opacity: 1; }
        }

        .iphone {
          position: relative;
          width: 360px;
          height: 740px;
          border-radius: 55px;
          padding: 11px;
          background:
            linear-gradient(155deg, #4a4d52 0%, #1a1c20 20%, #2e3136 45%, #13161a 68%, #3a3d42 100%);
          box-shadow:
            0 0 0 1.5px rgba(255, 255, 255, 0.1),
            0 50px 100px -20px rgba(0, 0, 0, 0.8),
            0 30px 60px -30px rgba(0, 0, 0, 0.9),
            inset 0 0 0 2px rgba(0, 0, 0, 0.4);
          transform: rotateY(-4deg) rotateX(2deg);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .iphone:hover { transform: rotateY(0deg) rotateX(0deg); }

        .side-btn {
          position: absolute;
          background: linear-gradient(180deg, #3a3d42 0%, #1a1c20 100%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .side-action    { left: -2px; top: 108px; width: 3px; height: 28px; border-radius: 2px 0 0 2px; }
        .side-volume-up { left: -2px; top: 160px; width: 3px; height: 52px; border-radius: 2px 0 0 2px; }
        .side-volume-dn { left: -2px; top: 222px; width: 3px; height: 52px; border-radius: 2px 0 0 2px; }
        .side-power     { right: -2px; top: 175px; width: 3px; height: 90px; border-radius: 0 2px 2px 0; }

        .screen {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 46px;
          background: #000;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .dynamic-island {
          position: absolute;
          top: 11px;
          left: 50%;
          transform: translateX(-50%);
          width: 118px;
          height: 34px;
          background: #000;
          border-radius: 20px;
          z-index: 50;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }

        .dynamic-island::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: radial-gradient(circle, #1a2332 30%, #0a0d14 70%);
          box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.1);
        }

        .status-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 28px 0;
          z-index: 40;
          font-family: 'Inter', system-ui;
        }

        .status-time { font-size: 14px; font-weight: 600; color: #fff; letter-spacing: -0.01em; }
        .status-icons { display: flex; align-items: center; gap: 5px; }
        .status-icons svg { fill: #fff; }

        /* ===== INSTAGRAM APP ===== */
        .ig-app {
          position: absolute;
          inset: 0;
          padding-top: 56px;
          padding-bottom: 70px;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
        }

        .ig-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px 10px;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        .ig-username { display: flex; align-items: center; gap: 6px; font-size: 17px; font-weight: 700; }

        .ig-username .verified {
          width: 14px;
          height: 14px;
          background: #3797f0;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .ig-username .verified svg { width: 10px; height: 10px; fill: #fff; }

        .ig-header-icons { display: flex; gap: 18px; }
        .ig-header-icons svg { width: 22px; height: 22px; stroke: #fff; stroke-width: 2; fill: none; }

        .ig-scroll {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          overscroll-behavior: contain;
        }

        .ig-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        .profile-top { display: flex; align-items: center; gap: 22px; padding: 16px 16px 12px; }

        .avatar-ring {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3860ff, #00d8ff);
          padding: 2.5px;
          flex-shrink: 0;
        }

        .avatar-inner { width: 100%; height: 100%; border-radius: 50%; background: #000; padding: 2px; }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #1a2845, #000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 20px;
          letter-spacing: -0.04em;
          color: #fff;
          overflow: hidden;
        }

        .avatar-img span {
          background: linear-gradient(135deg, #fff 0%, #00d8ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .profile-stats { display: flex; flex: 1; justify-content: space-around; }
        .pstat { text-align: center; }
        .pstat-num { font-size: 17px; font-weight: 700; }
        .pstat-label { font-size: 12px; color: rgba(255, 255, 255, 0.8); margin-top: 2px; }

        .profile-bio { padding: 0 16px 12px; }
        .profile-name { font-size: 13px; font-weight: 600; margin-bottom: 2px; }
        .profile-category { font-size: 12px; color: rgba(255, 255, 255, 0.5); margin-bottom: 4px; }
        .profile-bio-text { font-size: 12.5px; line-height: 1.45; }
        .profile-bio-text .link { color: #b8d6ff; }
        .followed-by { font-size: 11px; color: rgba(255, 255, 255, 0.55); margin-top: 8px; }

        .profile-actions { display: flex; gap: 6px; padding: 12px 16px 10px; }

        .ig-btn {
          flex: 1;
          padding: 7px 0;
          font-size: 13px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          border-radius: 8px;
          cursor: pointer;
        }

        .ig-btn.primary { background: #3797f0; }
        .ig-btn.icon-only { flex: 0 0 34px; }

        .tab-row { display: flex; border-top: 0.5px solid rgba(255, 255, 255, 0.1); flex-shrink: 0; }

        .tab {
          flex: 1;
          padding: 11px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.4;
          cursor: pointer;
          border-bottom: 1px solid transparent;
        }

        .tab.active { opacity: 1; border-bottom-color: #fff; }
        .tab svg { width: 22px; height: 22px; stroke: #fff; stroke-width: 2; fill: none; }

        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; }

        .grid-item {
          aspect-ratio: 1 / 1;
          background: #111;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .grid-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
        .grid-item:hover img { transform: scale(1.06); }

        .grid-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.2s ease;
          pointer-events: none;
        }

        .grid-item:hover::after { background: rgba(0, 0, 0, 0.2); }

        .grid-item .badge {
          position: absolute;
          top: 6px;
          right: 6px;
          color: #fff;
          z-index: 2;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
        }

        .grid-item .badge svg { width: 14px; height: 14px; stroke: #fff; fill: #fff; stroke-width: 1.5; }

        .grid-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a2332 0%, #0a0d14 100%);
          color: rgba(255, 255, 255, 0.4);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.02em;
          position: absolute;
          inset: 0;
        }

        .grid-item.loaded .grid-placeholder { display: none; }

        .ig-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 70px;
          border-top: 0.5px solid rgba(255, 255, 255, 0.1);
          background: #000;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 14px 18px;
          z-index: 40;
        }

        .ig-bottom svg { width: 25px; height: 25px; stroke: #fff; stroke-width: 2; fill: none; }

        .ig-bottom .profile-dot {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3860ff, #00d8ff);
          padding: 1.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
        }

        .ig-bottom .profile-dot > div {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .scroll-hint {
          position: absolute;
          bottom: 78px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 45;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        .scroll-hint.hint-hide { opacity: 0; }

        .scroll-hint-track {
          width: 18px;
          height: 30px;
          border: 1.5px solid rgba(255, 255, 255, 0.55);
          border-radius: 10px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(6px);
        }

        .scroll-hint-dot {
          width: 4px;
          height: 7px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.9);
          animation: scrollDot 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes scrollDot {
          0%   { transform: translateY(0);  opacity: 1; }
          60%  { transform: translateY(9px); opacity: 0.3; }
          100% { transform: translateY(0);  opacity: 1; }
        }

        .scroll-hint-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          white-space: nowrap;
        }

        .home-ind {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 4px;
          z-index: 60;
        }

        /* ===== POST MODAL ===== */
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(20px);
          z-index: 1000;
          display: none;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease;
        }

        .modal.open { display: flex; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .modal-card {
          display: grid;
          grid-template-columns: minmax(420px, 1.2fr) 400px;
          max-width: 1100px;
          width: 100%;
          max-height: 92vh;
          background: #000;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);
          animation: slideUp 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-media {
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          max-height: 92vh;
          position: relative;
        }

        .modal-media img { width: 100%; height: 100%; max-height: 92vh; object-fit: contain; display: block; }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #000;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          transition: transform 0.15s ease;
        }

        .modal-nav:hover { transform: translateY(-50%) scale(1.08); }
        .modal-prev { left: 14px; }
        .modal-next { right: 14px; }

        .modal-side {
          display: flex;
          flex-direction: column;
          background: #000;
          border-left: 0.5px solid rgba(255, 255, 255, 0.1);
        }

        .modal-post-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
        }

        .modal-post-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3860ff, #00d8ff);
          padding: 1.5px;
        }

        .modal-post-avatar > div {
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, #1a2845, #000);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: #fff;
        }

        .modal-post-user { flex: 1; display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 600; color: #fff; }

        .modal-close {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }

        .modal-close:hover { color: #fff; background: rgba(255, 255, 255, 0.1); }

        .modal-body { flex: 1; padding: 16px; color: #fff; overflow-y: auto; }

        .modal-caption { font-size: 13px; line-height: 1.55; color: rgba(255, 255, 255, 0.92); }
        .modal-caption .h { font-weight: 700; margin-right: 5px; }
        .modal-caption .tags { margin-top: 10px; color: #b8d6ff; font-size: 12.5px; line-height: 1.6; }

        .modal-actions-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 14px;
          border-top: 0.5px solid rgba(255, 255, 255, 0.1);
        }

        .modal-actions-row .group { display: flex; gap: 14px; }
        .modal-actions-row svg { width: 24px; height: 24px; stroke: #fff; stroke-width: 1.8; fill: none; cursor: pointer; }
        .modal-actions-row svg:hover { opacity: 0.7; }

        .modal-likes { padding: 6px 16px; font-size: 13px; font-weight: 600; }
        .modal-time  { padding: 4px 16px 12px; font-size: 10px; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(255, 255, 255, 0.5); }

        .modal-counter {
          position: absolute;
          top: 14px; left: 14px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        /* ===== LIGHTBOX for bottom images ===== */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(24px);
          z-index: 2000;
          display: none;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .lightbox.open { display: flex; }

        .lightbox-inner {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
          animation: scaleIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }

        .lightbox-inner img { display: block; max-width: 90vw; max-height: 90vh; object-fit: contain; }

        .lightbox-close {
          position: absolute;
          top: 14px; right: 14px;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
        }

        .lightbox-close:hover { background: rgba(255, 255, 255, 0.15); }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #000;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          font-weight: 700;
          transition: transform 0.15s ease;
        }

        .lightbox-nav:hover { transform: translateY(-50%) scale(1.08); }
        .lightbox-prev { left: -22px; }
        .lightbox-next { right: -22px; }

        /* ===== FOOTER ===== */
        .footer-strip {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          padding: 30px 48px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          max-width: 1400px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .footer-strip .fs-item { font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255, 255, 255, 0.35); }
        .footer-strip .fs-item b { color: #fff; font-weight: 600; }

        /* ===== dFlexBox — exact copy from original HTML ===== */
        .dFlexBox {
          display: flex;
          margin: 0 -15px;
          width: 100%;
          margin-top: 40px;
        }

        .dFlexBox .phone-stage {
          flex: 0 0 33.33%;
          max-width: 33.33%;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .hero { grid-template-columns: 1fr; gap: 20px; padding: 20px 24px 40px; }
          .hero-copy { padding-right: 0; text-align: center; }
          .cta-row { justify-content: center; }
          .phone-stage { margin-top: 20px; }
          .modal-card { grid-template-columns: 1fr; max-height: 95vh; overflow-y: auto; }
          .modal-side { border-left: none; border-top: 0.5px solid rgba(255, 255, 255, 0.1); }
        }

        @media (max-width: 900px) {
          .dFlexBox .phone-stage { flex: 0 0 100%; max-width: 100%; }
          .dFlexBox { display: block; margin: 0; }
        }

        @media (max-width: 640px) {
          .top-bar { padding: 16px 20px; }
          .brand { font-size: 12px; }
          .iphone { transform: none; width: 320px; height: 660px; }
        }
      `}} />

            {/* ─── Page structure — mirrors original HTML exactly ─── */}

            <div className="bg-layer"></div>
            <div className="bg-grid"></div>

            <header className="top-bar">
                <div className="brand">
                    <div className="brand-dot"></div>
                    McCollins Media {'×'} NIO UAE
                </div>
                <div className="confidential">Confidential · Pitch 2026</div>
            </header>

            <section className="hero">
                <div className="hero-copy">
                    <div className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        A proposal for @uae.nio
                    </div>
                    <h1>Creating a digital <em>movement</em> to own the premium EV space.</h1>
                    <p className="lede">
                        Explore our social media feed to experience a curated collection of designs crafted exclusively for NIO—each
                        piece built to reflect innovation, precision, and community. From bold visuals to refined storytelling, every
                        post is designed to embody the spirit of NIO and elevate its digital presence.
                    </p>
                    <div className="cta-row">
                        <button
                            className="btn btn-primary"
                            onClick={() => document.querySelector('.iphone')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        >
                            Explore the feed
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                        </button>
                        <a
                            className="btn btn-ghost"
                            href="https://drive.google.com/drive/folders/1Apn9db9V7X64WI4pIKEZUvfmAtzN0a6G"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Full asset folder
                        </a>
                    </div>
                    <div className="by-line">Prepared by <span>McCollins Media</span></div>
                </div>

                {/*
          Three phones in dFlexBox — exact same DOM structure as original.
          Each phone-stage is a separate div, NOT looped, to match original's
          three explicit <div class="phone-stage"> blocks exactly.
        */}
                <div className="dFlexBox">
                    <div className="phone-stage">
                        <IgPhone
                            postsArray={POSTS}
                            onOpenModal={(i) => openModal(POSTS, i)}
                        />
                    </div>
                    <div className="phone-stage">
                        <IgPhone
                            postsArray={POSTS1}
                            onOpenModal={(i) => openModal(POSTS1, i)}
                        />
                    </div>
                    <div className="phone-stage">
                        <IgPhone
                            postsArray={POSTS2}
                            onOpenModal={(i) => openModal(POSTS2, i)}
                        />
                    </div>
                </div>
            </section>

            {/* Footer — exact text from original */}
            <footer className="footer-strip">
                <div className="fs-item">Instagram Strategy · <b>Content Pillars Reset</b></div>
                <div className="fs-item">Community · <b>User Enterprise</b></div>
                <div className="fs-item">Growth · <b>+300% Engagement Target</b></div>
                <div className="fs-item">NIO House · <b>Always-On Activation</b></div>
            </footer>

            {/* Modals */}
            <PostModal
                isOpen={modal.open}
                onClose={closeModal}
                posts={modal.posts}
                initialIndex={modal.index}
            />

            <Lightbox
                isOpen={lightbox.open}
                index={lightbox.index}
                onClose={closeLightbox}
                onNav={navLightbox}
            />
        </>
    );
}

NioPitch.getLayout = function getLayout(page) {
    return page;
};