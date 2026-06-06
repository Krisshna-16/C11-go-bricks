import { useState } from 'react'
import { 
  Home, 
  Share2, 
  Film, 
  FileText, 
  Mail, 
  Image as ImageIcon, 
  CheckSquare, 
  Copy, 
  Check, 
  Shield, 
  Sparkles, 
  Download, 
  Info
} from 'lucide-react'

// Define the structure for the Checklist items
interface ChecklistItem {
  id: string;
  label: string;
  category: 'posts' | 'reel' | 'press' | 'email' | 'stories' | 'submission';
  isAsset: boolean;
  preChecked: boolean;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // Platform Posts
  { id: 'ig_post', label: 'Instagram carousel post — caption written', category: 'posts', isAsset: true, preChecked: true },
  { id: 'li_post', label: 'LinkedIn static post — caption written', category: 'posts', isAsset: true, preChecked: true },
  { id: 'fb_post', label: 'Facebook post — caption written', category: 'posts', isAsset: true, preChecked: true },
  // Launch Reel
  { id: 'reel_script', label: 'Reel script written', category: 'reel', isAsset: true, preChecked: true },
  { id: 'reel_filmed', label: 'Reel filmed and edited', category: 'reel', isAsset: true, preChecked: false },
  { id: 'reel_uploaded', label: 'Reel uploaded to Instagram', category: 'reel', isAsset: true, preChecked: false },
  // Press Release
  { id: 'pr_written', label: 'Press release written', category: 'press', isAsset: true, preChecked: true },
  { id: 'pr_pdf', label: 'Press release formatted as PDF', category: 'press', isAsset: true, preChecked: false },
  // Email Announcement
  { id: 'email_copy', label: 'Email copy written', category: 'email', isAsset: true, preChecked: true },
  { id: 'email_designed', label: 'Email designed in Mailchimp/Canva', category: 'email', isAsset: true, preChecked: false },
  { id: 'email_tested', label: 'Test email sent', category: 'email', isAsset: true, preChecked: false },
  // Story Frames
  { id: 'story_1', label: 'Frame 1 designed in Canva', category: 'stories', isAsset: true, preChecked: false },
  { id: 'story_2', label: 'Frame 2 designed in Canva', category: 'stories', isAsset: true, preChecked: false },
  { id: 'story_3', label: 'Frame 3 designed in Canva', category: 'stories', isAsset: true, preChecked: false },
  { id: 'story_4', label: 'Frame 4 designed in Canva', category: 'stories', isAsset: true, preChecked: false },
  { id: 'story_5', label: 'Frame 5 designed in Canva', category: 'stories', isAsset: true, preChecked: false },
  // Submission
  { id: 'drive_saved', label: 'All assets saved in shared Google Drive folder', category: 'submission', isAsset: false, preChecked: false },
  { id: 'link_submitted', label: 'Folder link submitted to Content Lead', category: 'submission', isAsset: false, preChecked: false },
  { id: 'lead_signoff', label: 'Content Lead sign-off received', category: 'submission', isAsset: false, preChecked: false },
];

function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Checklist State
  const [checklist, setChecklist] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    CHECKLIST_ITEMS.forEach(item => {
      initial[item.id] = item.preChecked;
    });
    return initial;
  });

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Checklist Calculations
  const assetItems = CHECKLIST_ITEMS.filter(item => item.isAsset);
  const completedAssetsCount = assetItems.filter(item => checklist[item.id]).length;
  const totalAssetsCount = assetItems.length; // 16
  const progressPercent = Math.round((completedAssetsCount / totalAssetsCount) * 100);

  // Content Blocks for Copying
  const instagramCaption = `⚡ Your phone. Your WiFi. Your laptop.
All day. Every day.

Introducing Shungite Shield — genuine Karelian Shungite crafted for the modern wellness lifestyle. 🖤

✨ EMF absorption
💧 Water purification
🧘 Energy grounding
🔬 Scientifically studied

Swipe to discover why 5,000+ wellness seekers trust Shungite Shield →

🛒 Link in bio | Free shipping above ₹999
.
.
.
#ShungiteShield #EMFProtection #Shungite #WellnessIndia #AyurvedicLiving #NaturalHealing #EMFAwareness #HolisticHealth #ShieldYourSpace #KarelianShungite #WellnessProducts #IndiaWellness #ProtectYourEnergy #MindBodySoul #NaturalMinerals`;

  const linkedInCaption = `We've spent months sourcing, testing, and verifying.

Today, GO-BRICS Business Lab is proud to introduce Shungite Shield — a range of genuine Type II Karelian Shungite products for the Indian wellness and B2B market.

Why Shungite?

Shungite is a rare carbon-based mineral found only in Karelia, Russia. Its unique fullerene molecular structure has been studied for EMF absorption, water mineralisation, and energetic properties. The research on fullerenes earned a Nobel Prize in Chemistry.

Our range includes:
→ EMF protection pyramids and spheres
→ Shungite water stones
→ Phone and device stickers
→ Wellness studio bulk packs

We're now open for B2B partnerships with Ayurvedic retailers, wellness brands, yoga studios, and corporate gifting companies across India and the BRICS region.

Interested in stocking Shungite Shield?
DM us or email hello@shungiteshield.in

#ShungiteShield #B2BWellness #AyurvedicProducts #WellnessBusiness #EMFProtection #IndiaWellness #BRICS #NaturalMinerals #B2BIndia`;

  const facebookCaption = `🖤 Introducing Shungite Shield — Ancient Protection for the Modern Age

Did you know your home has invisible radiation from WiFi routers, smartphones, laptops, and smart TVs — 24 hours a day?

Shungite is a 2-billion-year-old mineral from Karelia, Russia — the only place on Earth where it's found. Scientists have studied its remarkable carbon structure for decades.

Our products:
🔲 Shungite Pyramids — place near your router or TV
💧 Shungite Water Stones — mineralise your drinking water
📱 Phone Stickers — carry protection everywhere
🎁 Home Protection Sets — perfect for gifting

✅ Certified authentic | Lab tested | Ships across India

Starter Pack from just ₹799 🛒
Free shipping above ₹999

Comment 'INFO' below and we'll send you our full product guide!

#ShungiteShield #EMFProtection #WellnessIndia #NaturalHealing`;

  const reelScriptText = `LAUNCH REEL SCRIPT — 45 SECONDS
Instagram Reel / YouTube Short / Facebook Reel

SCENE 1 (0–5 sec)
Visual: Close-up of a Shungite pyramid, black background, gold light
On-screen text: "This stone is 2 billion years old."
Audio: Deep ambient tone, no voiceover

SCENE 2 (5–12 sec)
Visual: Person working on laptop, phone on desk, WiFi router in background
On-screen text: "Your home has invisible radiation. All day. Every day."
Audio: Subtle tension sound

SCENE 3 (12–20 sec)
Visual: Hands placing Shungite pyramid next to laptop
On-screen text: "Shungite absorbs EMF. Naturally."
Voiceover: "Genuine Karelian Shungite — the only mineral of its kind."
Audio: Calm, wellness music begins

SCENE 4 (20–30 sec)
Visual: Split screen — Shungite in water | Person meditating with Shungite
On-screen text: "Purify your water. Ground your energy."
Audio: Soft music continues

SCENE 5 (30–38 sec)
Visual: Product lineup — pyramid, sphere, phone sticker, water stones
On-screen text: "Shungite Shield. Certified authentic. Ships across India."
Audio: Music builds slightly

SCENE 6 (38–45 sec)
Visual: Black screen, gold logo appears
On-screen text: "Ancient Stone. Modern Protection."
On-screen text 2: "Shop now → Link in bio"
Audio: Music fades

PRODUCTION NOTES
- Shoot on iPhone in 4K, portrait mode
- Use ring light for product close-ups
- Black velvet background for product shots
- Edit in CapCut — use slow zoom transitions
- Background music suggestion: "Calm Meditation" by Bensound (royalty free)`;

  const pressReleaseText = `FOR IMMEDIATE RELEASE
June 2026

GO-BRICS BUSINESS LAB LAUNCHES SHUNGITE SHIELD —
INDIA'S FIRST CERTIFIED KARELIAN SHUNGITE WELLNESS BRAND

Mumbai, India — GO-BRICS Business Lab, the operational wing of the GO-BRICS Hackathon programme, today announced the launch of Shungite Shield, a premium range of certified Type II Karelian Shungite products designed for the Indian wellness market.

Shungite Shield offers a curated range of EMF protection products including pyramids, spheres, water purification stones, and phone stickers — all sourced directly from the Zazhoginskoye deposit in Karelia, Russia, the world's only significant source of authentic Shungite.

As wireless technology continues to expand rapidly across urban India, public interest in EMF (Electromagnetic Field) mitigation and grounding practices has hit an all-time high. Shungite Shield aims to bridge the gap between ancient geo-protection and modern consumer lifestyle, providing lab-verified shielding products that fit seamlessly into homes, corporate offices, and wellness centers.

The new product catalog highlights entry-level items starting from ₹799, such as the polished Shungite phone sticker, alongside central home protection sets like the 10cm polished Shungite pyramids priced at ₹1,899. Each item is accompanied by a certificate of authenticity detailing its organic carbon content and fullerenic composition, proving its origin from the Russian Karelian mines.

To facilitate regional accessibility, GO-BRICS Business Lab is opening B2B channels, offering wholesale prices and white-label packages for retail partnerships. Yoga studios, holistic health clinics, Ayurvedic pharmacies, and organic markets across metropolitan centers like Mumbai, Delhi, and Bangalore will now have immediate access to bulk stock.

"We are thrilled to launch Shungite Shield in India," said a spokesperson for the GO-BRICS Business Lab Content Team. "Our mission is to make authentic Karelian Shungite accessible to wellness-conscious consumers and enterprises alike, blending ancient mineral heritage with modern energetic wellness solutions."

Contact: hello@shungiteshield.in | +91 98765 43210
Website: shungiteshield.in
Social: @shungiteshield`;

  const emailHtmlText = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Introducing Shungite Shield</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
    .header { background-color: #0A0A0A; padding: 35px 20px; text-align: center; border-bottom: 3px solid #00FF41; }
    .logo { color: #ffffff; font-size: 26px; font-weight: bold; letter-spacing: 3px; font-family: Arial, sans-serif; margin: 0; }
    .tagline { color: #00FF41; font-size: 11px; text-transform: uppercase; margin-top: 5px; letter-spacing: 2px; }
    .hero { text-align: center; padding: 45px 30px; background-color: #0d0d0d; color: #ffffff; }
    .hero-title { font-size: 30px; font-weight: bold; margin: 0 0 15px 0; color: #ffffff; }
    .hero-subtitle { font-size: 16px; color: #a0a0a0; margin: 0 0 25px 0; }
    .btn { display: inline-block; padding: 12px 35px; background-color: #00FF41; color: #0A0A0A !important; text-decoration: none; font-weight: bold; border-radius: 5px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px; }
    .content { padding: 35px 30px; line-height: 1.6; color: #333333; }
    .section-title { font-size: 20px; font-weight: bold; color: #0A0A0A; border-bottom: 2px solid #00FF41; padding-bottom: 8px; margin: 0 0 18px 0; }
    .p-text { font-size: 15px; margin: 0 0 20px 0; color: #444444; }
    .products { display: table; width: 100%; margin: 25px 0; }
    .product-card { display: table-cell; width: 33.33%; padding: 0 8px; box-sizing: border-box; }
    .product-inner { background-color: #fafafa; border: 1px solid #e0e0e0; padding: 18px 10px; border-radius: 6px; text-align: center; }
    .product-title { font-weight: bold; font-size: 14px; color: #333333; margin-bottom: 6px; min-height: 36px; }
    .product-price { color: #065F46; font-weight: bold; font-size: 16px; margin-bottom: 0; }
    .trust-section { background-color: #f9f9f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; }
    .trust-item { display: inline-block; width: 30%; font-size: 12px; font-weight: bold; color: #555555; text-transform: uppercase; letter-spacing: 0.5px; }
    .cta-footer { text-align: center; padding: 35px 30px; background-color: #fcfcfc; }
    .cta-btn { display: inline-block; padding: 12px 30px; background-color: #0A0A0A; color: #00FF41 !important; text-decoration: none; font-weight: bold; border-radius: 5px; text-transform: uppercase; border: 2px solid #00FF41; font-size: 13px; }
    .footer { background-color: #0A0A0A; padding: 25px 20px; text-align: center; color: #777777; font-size: 12px; line-height: 1.5; }
    .footer a { color: #a0a0a0; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2 class="logo">SHUNGITE SHIELD</h2>
      <div class="tagline">Ancient Stone. Modern Protection.</div>
    </div>
    <div class="hero">
      <h1 class="hero-title">Ancient Stone. Modern Protection.</h1>
      <p class="hero-subtitle">Shungite Shield is here.</p>
      <a href="https://shungiteshield.in" class="btn">Shop Now</a>
    </div>
    <div class="content">
      <h3 class="section-title">What is Shungite?</h3>
      <p class="p-text">Shungite is a rare, 2-billion-year-old carbon mineral found only in Karelia, Russia. It is the only known natural source of fullerenes—a unique molecular form of carbon that acts as a powerful antioxidant and shield against electromagnetic frequencies (EMF). Sourced directly from the Zazhoginskoye deposit, Shungite Shield offers verified carbon structure, natural grounding properties, and water mineralisation. Shield your home, office, and electronic devices from invisible stressors.</p>
      
      <h3 class="section-title">Product Spotlight</h3>
      <div class="products">
        <div class="product-card">
          <div class="product-inner">
            <div class="product-title">Starter Pack</div>
            <div class="product-price">₹799</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-inner">
            <div class="product-title">Home Protection Set</div>
            <div class="product-price">₹1,899</div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-inner">
            <div class="product-title">Wellness Studio Pack</div>
            <div class="product-price">₹4,499</div>
          </div>
        </div>
      </div>
    </div>
    <div class="trust-section">
      <div class="trust-item">✓ Certified Authentic</div>
      <div class="trust-item">✓ Lab Tested</div>
      <div class="trust-item">✓ 5,000+ Customers</div>
    </div>
    <div class="cta-footer">
      <p style="margin: 0 0 20px 0; color: #666666; font-size: 14px;">Free shipping above ₹999. 30-day returns. Pay via UPI or COD.</p>
      <a href="https://shungiteshield.in" class="cta-btn">Browse All Products</a>
    </div>
    <div class="footer">
      <p style="margin: 0 0 10px 0;">You received this email because you are subscribed to updates from Shungite Shield by GO-BRICS Business Lab.</p>
      <p style="margin: 0;"><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a> | hello@shungiteshield.in</p>
    </div>
  </div>
</body>
</html>`;

  // Render a nice Copy Button
  const renderCopyButton = (text: string, id: string, label: string = 'Copy Content') => {
    const isCopied = copiedId === id;
    return (
      <button
        onClick={() => handleCopy(text, id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
          isCopied 
            ? 'bg-[#00FF41]/20 text-[#00FF41] border border-[#00FF41]/40' 
            : 'bg-[#1A1A1A] hover:bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500'
        }`}
      >
        {isCopied ? (
          <>
            <Check className="w-4 h-4 animate-scale" />
            <span>Copied! ✓</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>{label}</span>
          </>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#00FF41]/35 selection:text-white">
      {/* HEADER SECTION */}
      <header className="no-print relative border-b border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00FF41] to-emerald-600 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center justify-center w-12 h-12 bg-black rounded-lg border border-[#00FF41]/50 text-[#00FF41]">
                <Shield className="w-6 h-6 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                Shungite Shield <span className="text-xs font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400">EMF</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                TASK_C11 | Full Launch Asset Pack | GO-BRICS Business Lab | June 2026
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00FF41] animate-ping" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Live Release Sandbox
            </span>
          </div>
        </div>
        
        {/* PROGRESS MINI BAR FOR ALL TABS */}
        <div className="h-[2px] w-full bg-zinc-900">
          <div 
            className="h-full bg-[#00FF41] shadow-[0_0_8px_#00FF41] transition-all duration-500 ease-out" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <nav className="no-print sticky top-[89px] z-30 bg-[#0A0A0A]/95 border-b border-zinc-800/40 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800">
            {[
              { id: 'overview', label: 'Overview', icon: Home },
              { id: 'social', label: 'Social Media Posts', icon: Share2 },
              { id: 'reel', label: 'Launch Reel Script', icon: Film },
              { id: 'press', label: 'Press Release', icon: FileText },
              { id: 'email', label: 'Email Announcement', icon: Mail },
              { id: 'stories', label: 'Story Frames', icon: ImageIcon },
              { id: 'checklist', label: 'Asset Checklist', icon: CheckSquare },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'bg-zinc-900 border border-zinc-800 text-[#00FF41] text-glow-green border-glow-green' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00FF41]' : 'text-zinc-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Intro Alert Box */}
            <div className="glass-panel border border-[#00FF41]/20 bg-[#00FF41]/5 rounded-xl p-4 sm:p-5 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#00FF41] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">Shungite Shield Campaign Overview</h3>
                <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                  This launch pack contains verified, production-ready copywriting and structural assets curated for the June 2026 product launch of Shungite Shield EMF Protection mineral products. Prepared by the GO-BRICS Business Lab Content Team.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Launch Brief */}
              <div className="lg:col-span-1 glass-panel border border-zinc-800/80 rounded-xl p-6 bg-[#1A1A1A] space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide border-b border-zinc-800 pb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#00FF41]" />
                    <span>Launch Brief</span>
                  </h3>
                </div>
                
                <div className="space-y-4 text-sm">
                  {[
                    { label: 'Brand', value: 'Shungite Shield' },
                    { label: 'Product', value: 'Shungite EMF Protection Range' },
                    { label: 'Launch Date', value: 'June 2026' },
                    { label: 'Target Audience', value: 'Indian wellness consumers, Ayurvedic practitioners, corporate wellness buyers, yoga studios' },
                    { label: 'Platforms', value: 'Instagram, LinkedIn, Facebook' },
                    { label: 'Campaign Theme', value: 'Ancient Stone. Modern Protection.', highlight: true },
                    { label: 'Prepared by', value: 'GO-BRICS Business Lab Content Team' },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-xs font-mono text-zinc-500 uppercase block">{item.label}</span>
                      <span className={`text-zinc-200 block font-medium ${item.highlight ? 'text-[#00FF41] text-glow-green font-semibold' : ''}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Asset Grid */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Launch Deliverables (6 Assets)
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: '3 Platform Posts', desc: 'Instagram, LinkedIn, & Facebook optimized captions and layouts', icon: '📱', tabLink: 'social' },
                    { title: '1 Reel Script', desc: '30–60s visual, narration audio screenplay layout', icon: '🎬', tabLink: 'reel' },
                    { title: '1 Press Release', desc: '400+ words detailed release copy with B2B hook', icon: '📰', tabLink: 'press' },
                    { title: '1 Email Template', desc: 'Full, responsive styled HTML newsletter design code', icon: '📧', tabLink: 'email' },
                    { title: '5 Story Frames', desc: 'Ready-to-design mockups with dimensions & Canva guides', icon: '📸', tabLink: 'stories' },
                    { title: 'Asset Checklist', desc: 'Full submission status verification & progress tracking', icon: '✅', tabLink: 'checklist' },
                  ].map((card, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveTab(card.tabLink)}
                      className="group cursor-pointer glass-panel border border-zinc-800 hover:border-[#00FF41]/40 bg-[#1A1A1A] p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{card.icon}</div>
                        <h4 className="font-bold text-white group-hover:text-[#00FF41] transition-colors">{card.title}</h4>
                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{card.desc}</p>
                      </div>
                      <div className="mt-4 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 flex items-center gap-1">
                        <span>Navigate Tab</span>
                        <span>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand Voice Guide */}
            <div className="glass-panel border border-zinc-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00FF41]" />
                <span>Brand Voice & Messaging Guidelines</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2 border-r border-zinc-800/80 pr-4">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Brand Tone</span>
                  <p className="text-sm font-medium text-white">Premium, trustworthy, wellness-focused</p>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Balance geological authenticity with a calming energetic presence. Speak to natural intelligence and protection.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <span className="text-xs font-mono text-green-500 uppercase block">✓ DO</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['ancient', 'protect', 'shield', 'natural', 'authentic', 'grounding'].map((word, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20 font-medium">
                        "{word}"
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-red-400 uppercase block">✗ DON'T</span>
                  <div className="space-y-1.5 text-xs text-zinc-300">
                    <p className="flex items-center gap-1.5">
                      <span className="h-1 w-1 bg-red-400 rounded-full" />
                      <span>Avoid dense scientific/technical jargon</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="h-1 w-1 bg-red-400 rounded-full" />
                      <span>Never make medical or diagnostic claims</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="h-1 w-1 bg-red-400 rounded-full" />
                      <span>Steer clear of pushy, high-pressure sales pitches</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800/80 mt-6 pt-5">
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-3">Core Search Keywords</span>
                <div className="flex flex-wrap gap-2">
                  {['EMF protection', 'Shungite', 'Karelian', 'wellness', 'grounding', 'fullerene'].map((kw, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SOCIAL MEDIA POSTS */}
        {activeTab === 'social' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <h3 className="text-lg font-bold text-white">Social Media Ad Copy</h3>
              <p className="text-xs text-zinc-400 font-mono">3 Platform Channels</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* INSTAGRAM CAROUSEL */}
              <div className="glass-panel border border-zinc-800 rounded-xl bg-[#1A1A1A] flex flex-col justify-between overflow-hidden">
                <div className="p-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/30">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-pink-500/10 text-pink-400"><ImageIcon className="w-4 h-4" /></span>
                    <span className="text-sm font-bold text-white font-mono">📸 Instagram Carousel</span>
                  </div>
                  <span className="text-xs text-[#00FF41] bg-[#00FF41]/10 px-2 py-0.5 rounded border border-[#00FF41]/20 font-mono">
                    5 Slides
                  </span>
                </div>

                <div className="p-5 space-y-4 flex-grow">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-zinc-500 uppercase block">Carousel Script Slides:</span>
                    <div className="space-y-2 text-xs bg-zinc-950/50 p-3 rounded-lg border border-zinc-800">
                      <p><strong className="text-zinc-300">Slide 1:</strong> Hero — black background, gold Shungite pyramid, headline text</p>
                      <p><strong className="text-zinc-300">Slide 2:</strong> "What is Shungite?" — mineral facts</p>
                      <p><strong className="text-zinc-300">Slide 3:</strong> "3 Ways to Use It" — pyramid, water, phone sticker</p>
                      <p><strong className="text-zinc-300">Slide 4:</strong> Customer testimonial quote</p>
                      <p><strong className="text-zinc-300">Slide 5:</strong> Pricing + CTA — Shop Now</p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-zinc-500 uppercase block">Ad Caption:</span>
                    <pre className="text-xs bg-zinc-950 p-4 rounded-lg overflow-y-auto max-h-[250px] border border-zinc-900 text-zinc-300 font-sans whitespace-pre-wrap leading-relaxed">
                      {instagramCaption}
                    </pre>
                  </div>
                </div>

                <div className="p-5 border-t border-zinc-800/80 bg-zinc-950/20 flex justify-end">
                  {renderCopyButton(instagramCaption, 'ig_copy', 'Copy Caption')}
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="glass-panel border border-zinc-800 rounded-xl bg-[#1A1A1A] flex flex-col justify-between overflow-hidden">
                <div className="p-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/30">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-blue-500/10 text-blue-400"><Share2 className="w-4 h-4" /></span>
                    <span className="text-sm font-bold text-white font-mono">💼 LinkedIn static</span>
                  </div>
                  <span className="text-xs text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 font-mono">
                    Single Image
                  </span>
                </div>

                <div className="p-5 space-y-4 flex-grow">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-zinc-500 uppercase block">B2B & Partnership Caption:</span>
                    <pre className="text-xs bg-zinc-950 p-4 rounded-lg overflow-y-auto max-h-[360px] border border-zinc-900 text-zinc-300 font-sans whitespace-pre-wrap leading-relaxed">
                      {linkedInCaption}
                    </pre>
                  </div>
                </div>

                <div className="p-5 border-t border-zinc-800/80 bg-zinc-950/20 flex justify-end">
                  {renderCopyButton(linkedInCaption, 'li_copy', 'Copy Post')}
                </div>
              </div>

              {/* FACEBOOK */}
              <div className="glass-panel border border-zinc-800 rounded-xl bg-[#1A1A1A] flex flex-col justify-between overflow-hidden">
                <div className="p-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/30">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-indigo-500/10 text-indigo-400"><FileText className="w-4 h-4" /></span>
                    <span className="text-sm font-bold text-white font-mono">📘 Facebook ad</span>
                  </div>
                  <span className="text-xs text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 font-mono">
                    Static Image
                  </span>
                </div>

                <div className="p-5 space-y-4 flex-grow">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-zinc-500 uppercase block">Family / Wellness Caption:</span>
                    <pre className="text-xs bg-zinc-950 p-4 rounded-lg overflow-y-auto max-h-[360px] border border-zinc-900 text-zinc-300 font-sans whitespace-pre-wrap leading-relaxed">
                      {facebookCaption}
                    </pre>
                  </div>
                </div>

                <div className="p-5 border-t border-zinc-800/80 bg-zinc-950/20 flex justify-end">
                  {renderCopyButton(facebookCaption, 'fb_copy', 'Copy Post')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LAUNCH REEL SCRIPT */}
        {activeTab === 'reel' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-zinc-800 pb-4 gap-3">
              <div>
                <h3 className="text-lg font-bold text-white">Launch Reel Script — 45 seconds</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">Format: Instagram Reel / YouTube Short / Facebook Reel</p>
              </div>
              <div>
                {renderCopyButton(reelScriptText, 'reel_copy', 'Copy Script to Clipboard')}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Screenplay layout */}
              <div className="lg:col-span-2 glass-panel border border-zinc-800 bg-[#1A1A1A] rounded-xl p-6 sm:p-8 space-y-8 max-h-[600px] overflow-y-auto">
                
                {[
                  { id: '1', time: '0–5 sec', visual: 'Close-up of a Shungite pyramid, black background, gold light', text: '“This stone is 2 billion years old.”', audio: 'Deep ambient tone, no voiceover' },
                  { id: '2', time: '5–12 sec', visual: 'Person working on laptop, phone on desk, WiFi router in background', text: '“Your home has invisible radiation. All day. Every day.”', audio: 'Subtle tension sound' },
                  { id: '3', time: '12–20 sec', visual: 'Hands placing Shungite pyramid next to laptop', text: '“Shungite absorbs EMF. Naturally.”', audio: 'Calm, wellness music begins', vo: '“Genuine Karelian Shungite — the only mineral of its kind.”' },
                  { id: '4', time: '20–30 sec', visual: 'Split screen — Shungite in water | Person meditating with Shungite', text: '“Purify your water. Ground your energy.”', audio: 'Soft music continues' },
                  { id: '5', time: '30–38 sec', visual: 'Product lineup — pyramid, sphere, phone sticker, water stones', text: '“Shungite Shield. Certified authentic. Ships across India.”', audio: 'Music builds slightly' },
                  { id: '6', time: '38–45 sec', visual: 'Black screen, gold logo appears', text: '“Ancient Stone. Modern Protection.”\n“Shop now → Link in bio”', audio: 'Music fades' },
                ].map((scene, idx) => (
                  <div key={idx} className="border-l-2 border-[#00FF41]/40 pl-4 space-y-3 relative group">
                    <span className="absolute -left-1.5 top-0 w-3.5 h-3.5 rounded-full bg-zinc-950 border border-[#00FF41] flex items-center justify-center text-[8px] text-[#00FF41] font-bold">
                      {idx + 1}
                    </span>
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                        SCENE {scene.id}
                      </h4>
                      <span className="text-xs font-mono text-[#00FF41] bg-[#00FF41]/10 px-2 py-0.5 rounded border border-[#00FF41]/20">
                        {scene.time}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Visual Frame:</span>
                        <p className="text-zinc-300 leading-relaxed">{scene.visual}</p>
                        {scene.text && (
                          <div className="mt-2 bg-black/40 p-2 rounded border border-zinc-800/80">
                            <span className="text-[9px] font-mono text-[#00FF41]/70 block">On-Screen Overlay:</span>
                            <p className="text-white font-semibold whitespace-pre-line">
                              {scene.text}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1 bg-zinc-900/40 p-2.5 rounded border border-zinc-800/40">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Audio Track:</span>
                        <p className="text-zinc-300 italic">"{scene.audio}"</p>
                        {scene.vo && (
                          <div className="mt-2 pt-2 border-t border-zinc-800">
                            <span className="text-[9px] font-mono text-emerald-400 block font-semibold">Voiceover:</span>
                            <p className="text-[#00FF41] font-mono font-medium">
                              {scene.vo}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column: Production Specs */}
              <div className="lg:col-span-1 glass-panel border border-zinc-800 bg-[#1A1A1A] rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-zinc-500 uppercase block">Reel Specifications</h3>
                  <h4 className="text-lg font-bold text-white mt-1">Production Guidelines</h4>
                </div>

                <div className="space-y-4 text-xs">
                  {[
                    { label: 'Resolution', value: '4K | Portrait (9:16) | 60FPS' },
                    { label: 'Recommended Camera', value: 'iPhone 13+ Pro (Cinematic Mode)' },
                    { label: 'Aesthetic Style', value: 'Minimalist studio lighting, high contrast, black velvet backgrounds for product, natural warm lighting for lifestyle' },
                    { label: 'Editing Software', value: 'CapCut / Premiere Pro (slow smooth cross-zoom transitions)' },
                    { label: 'Recommended Music', value: '"Calm Meditation" by Bensound (Royalty-free)' },
                  ].map((spec, i) => (
                    <div key={i} className="space-y-1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">{spec.label}</span>
                      <p className="text-zinc-300 font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-800/80 pt-5 space-y-3">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Pre-Production Notes:</span>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF41] font-bold mt-0.5">•</span>
                      <span>Shoot all product footage on static tripod.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF41] font-bold mt-0.5">•</span>
                      <span>Use high-quality ring light behind camera for clean reflections on polished Shungite surfaces.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF41] font-bold mt-0.5">•</span>
                      <span>Set caption overlays in bold sans-serif center-bottom, colored in gold and green accents.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PRESS RELEASE */}
        {activeTab === 'press' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-zinc-800 pb-4 gap-3">
              <div>
                <h3 className="text-lg font-bold text-white">Press Release Document</h3>
                <p className="text-xs text-zinc-400 font-mono">PR Release Date: June 2026</p>
              </div>
              <div>
                {renderCopyButton(pressReleaseText, 'pr_copy', 'Copy Press Release')}
              </div>
            </div>

            <div className="glass-panel border border-zinc-800 bg-[#1A1A1A] rounded-xl p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl space-y-6">
              {/* Document Header */}
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-4">
                <span>GO-BRICS Business Lab Media Relations</span>
                <span>For Immediate Release</span>
              </div>

              {/* Title Block */}
              <div className="text-center space-y-3 py-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#00FF41] tracking-wide leading-tight uppercase font-mono">
                  GO-BRICS BUSINESS LAB LAUNCHES SHUNGITE SHIELD —
                  INDIA'S FIRST CERTIFIED KARELIAN SHUNGITE WELLNESS BRAND
                </h2>
                <div className="h-[1px] w-24 bg-zinc-850 mx-auto" />
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                  Premium Range of Verified EMF Protection, Grounding Pyramids, and Water Purification Rocks Set to Launch Nationally
                </p>
              </div>

              {/* Body Content */}
              <div className="space-y-5 text-sm text-zinc-300 font-sans leading-relaxed text-justify">
                <p>
                  <strong className="text-white font-mono uppercase tracking-wider">MUMBAI, India — June 2026 —</strong> GO-BRICS Business Lab, the operational wing of the GO-BRICS Hackathon programme, today announced the launch of <span className="text-[#00FF41] font-semibold">Shungite Shield</span>, a premium range of certified Type II Karelian Shungite products designed for the Indian wellness market.
                </p>

                <p>
                  Shungite Shield offers a curated range of EMF protection products including pyramids, spheres, water purification stones, and phone stickers — all sourced directly from the Zazhoginskoye deposit in Karelia, Russia, the world's only significant source of authentic Shungite.
                </p>

                <p>
                  As wireless technology continues to expand rapidly across urban India, public interest in EMF (Electromagnetic Field) mitigation and grounding practices has hit an all-time high. Shungite Shield aims to bridge the gap between ancient geo-protection and modern consumer lifestyle, providing lab-verified shielding products that fit seamlessly into homes, corporate offices, and wellness centers.
                </p>

                <p>
                  The new product catalog highlights entry-level items starting from ₹799, such as the polished Shungite phone sticker, alongside central home protection sets like the 10cm polished Shungite pyramids priced at ₹1,899. Each item is accompanied by a certificate of authenticity detailing its organic carbon content and fullerenic composition, proving its origin from the Russian Karelian mines.
                </p>

                <p>
                  To facilitate regional accessibility, GO-BRICS Business Lab is opening B2B channels, offering wholesale prices and white-label packages for retail partnerships. Yoga studios, holistic health clinics, Ayurvedic pharmacies, and organic markets across metropolitan centers like Mumbai, Delhi, and Bangalore will now have immediate access to bulk stock.
                </p>

                <p>
                  "We are thrilled to launch Shungite Shield in India," said a spokesperson for the GO-BRICS Business Lab Content Team. "Our mission is to make authentic Karelian Shungite accessible to wellness-conscious consumers and enterprises alike, blending ancient mineral heritage with modern energetic wellness solutions."
                </p>
              </div>

              {/* Boilerplate */}
              <div className="border-t border-zinc-800 pt-6 mt-8 space-y-4 text-xs">
                <div className="space-y-1">
                  <h4 className="font-bold text-white font-mono uppercase text-[10px] tracking-wider">About GO-BRICS Business Lab</h4>
                  <p className="text-zinc-400 leading-relaxed text-justify">
                    GO-BRICS Business Lab is the operational and commercialization vehicle of the GO-BRICS Hackathon initiative, focused on scaling innovative wellness products, ecological solutions, and technological applications across the BRICS member countries.
                  </p>
                </div>

                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-400 font-mono">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Media Contact:</span>
                    <p className="text-[#00FF41]">hello@shungiteshield.in</p>
                    <p className="text-[#00FF41]">+91 98765 43210</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Online Portals:</span>
                    <p className="text-zinc-300">Website: shungiteshield.in</p>
                    <p className="text-zinc-300">Social: @shungiteshield</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EMAIL ANNOUNCEMENT */}
        {activeTab === 'email' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-zinc-800 pb-4 gap-3">
              <div>
                <h3 className="text-lg font-bold text-white">Email Announcement Newsletter</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">Mailchimp & HTML Campaign Optimized</p>
              </div>
              <div className="flex gap-2">
                {renderCopyButton(emailHtmlText, 'email_copy', 'Copy Email HTML')}
              </div>
            </div>

            {/* Email client preview window */}
            <div className="max-w-xl mx-auto bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* Client Header Info */}
              <div className="bg-zinc-950 p-4 border-b border-zinc-850 space-y-2 text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-600 w-16 uppercase">Subject:</span>
                  <span className="text-white font-semibold">Introducing Shungite Shield 🖤 Ancient Protection. Now in India.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-600 w-16 uppercase">Preview:</span>
                  <span className="text-zinc-300 truncate">Genuine Karelian Shungite — EMF protection, water purification, and energy grounding. Ships across India from ₹799.</span>
                </div>
              </div>

              {/* Email Content Frame */}
              <div className="bg-white text-zinc-900 p-6 sm:p-10 font-sans max-h-[550px] overflow-y-auto">
                <div className="max-w-[500px] mx-auto border border-zinc-200 rounded-lg overflow-hidden shadow-sm">
                  {/* Logo Banner */}
                  <div className="bg-[#0A0A0A] py-8 text-center border-b-[3px] border-[#00FF41]">
                    <h2 className="text-white font-bold tracking-widest text-lg font-mono">SHUNGITE SHIELD</h2>
                    <span className="text-[#00FF41] text-[10px] tracking-widest uppercase block mt-1">Ancient Stone. Modern Protection.</span>
                  </div>

                  {/* Hero Block */}
                  <div className="bg-[#0d0d0d] text-white py-12 px-6 text-center">
                    <h3 className="text-xl font-bold tracking-tight mb-2">Ancient Stone. Modern Protection.</h3>
                    <p className="text-zinc-400 text-xs mb-6 font-mono">Shungite Shield is here.</p>
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()} 
                      className="inline-block px-8 py-3 bg-[#00FF41] text-[#0A0A0A] font-bold text-xs rounded uppercase tracking-wider hover:opacity-90"
                    >
                      Shop Now
                    </a>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-6 text-sm text-zinc-700 leading-relaxed">
                    <div className="space-y-2">
                      <h4 className="font-bold text-zinc-900 border-b border-zinc-200 pb-2 uppercase tracking-wider text-xs">
                        What is Shungite?
                      </h4>
                      <p className="text-xs text-justify">
                        Shungite is a rare, 2-billion-year-old carbon mineral found only in Karelia, Russia. It is the only known natural source of fullerenes—a unique molecular form of carbon that acts as a powerful antioxidant and shield against electromagnetic frequencies (EMF). Sourced directly from the Zazhoginskoye deposit, Shungite Shield offers verified carbon structure, natural grounding properties, and water mineralisation. Shield your home, office, and electronic devices from invisible stressors.
                      </p>
                    </div>

                    {/* Spotlight Product Cards */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-zinc-900 border-b border-zinc-200 pb-2 uppercase tracking-wider text-xs">
                        Product Spotlight
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { title: 'Starter Pack', price: '₹799' },
                          { title: 'Home Protection Set', price: '₹1,899' },
                          { title: 'Wellness Studio Pack', price: '₹4,499' }
                        ].map((prod, idx) => (
                          <div key={idx} className="bg-zinc-50 border border-zinc-200 p-3 rounded text-center">
                            <h5 className="font-bold text-zinc-800 text-[11px] min-h-[30px] leading-tight flex items-center justify-center">
                              {prod.title}
                            </h5>
                            <p className="text-emerald-800 text-xs font-bold mt-1">{prod.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Trust Factors */}
                  <div className="bg-zinc-100 border-y border-zinc-200 py-3.5 px-3 flex justify-around text-[9px] font-bold text-zinc-600 uppercase tracking-wider">
                    <span>✓ Certified Authentic</span>
                    <span>✓ Lab Tested</span>
                    <span>✓ 5000+ Customers</span>
                  </div>

                  {/* Secondary CTA */}
                  <div className="py-8 px-4 text-center bg-zinc-50">
                    <p className="text-zinc-500 text-xs mb-4">Free shipping above ₹999. 30-day returns. Pay via UPI or COD.</p>
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()} 
                      className="inline-block px-6 py-2.5 bg-black border-2 border-[#00FF41] text-[#00FF41] font-bold text-xs rounded uppercase tracking-wider"
                    >
                      Browse All Products
                    </a>
                  </div>

                  {/* Footer */}
                  <div className="bg-zinc-950 text-zinc-500 py-6 px-4 text-center text-[10px] leading-relaxed">
                    <p className="mb-2">You received this email because you are subscribed to updates from Shungite Shield by GO-BRICS Business Lab.</p>
                    <p>
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 underline">Unsubscribe</a> | <a href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 underline">Privacy Policy</a> | hello@shungiteshield.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: STORY FRAMES */}
        {activeTab === 'stories' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <h3 className="text-lg font-bold text-white">Canva Story Frames</h3>
              <p className="text-xs text-zinc-400 font-mono">5 Visual Slide Frameworks (9:16)</p>
            </div>

            {/* Story frame slider/grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  num: 'Frame 1',
                  title: 'Announcement',
                  bg: 'bg-black',
                  bgLabel: 'Solid Jet Black (#000000)',
                  textColor: 'text-white',
                  top: 'NEW LAUNCH',
                  center: 'Shungite Shield',
                  middle: 'Ancient Stone. Modern Protection.',
                  bottom: 'Swipe up to shop →',
                  visual: 'Gold Shungite Pyramid (Centered)',
                  note: 'Use Playfair Display for headline, Inter for body. Keep typography elegant.'
                },
                {
                  num: 'Frame 2',
                  title: 'Problem Statement',
                  bg: 'bg-[#1A1A1A]',
                  bgLabel: 'Dark Charcoal (#1A1A1A)',
                  textColor: 'text-white',
                  top: 'EMF ALERT',
                  center: 'Your WiFi router radiates EMF 24/7',
                  middle: 'So does your phone. Your laptop. Your smart TV.',
                  bottom: 'What are you doing about it?',
                  bottomColor: 'text-[#00FF41] font-extrabold text-glow-green',
                  visual: 'Emitting electromagnetic waves vector outline',
                  note: 'Use bold Inter font, red/green accent borders for diagnostic impact.'
                },
                {
                  num: 'Frame 3',
                  title: 'Product Solution',
                  bg: 'bg-black',
                  bgLabel: 'Solid Jet Black (#000000)',
                  textColor: 'text-white',
                  top: 'INTRODUCING',
                  center: 'Shungite Shield',
                  middle: 'Genuine Karelian Shungite for EMF protection, water purification & energy grounding',
                  bottom: 'Swipe up to explore →',
                  visual: 'Complete lineup showcase (pyramid, sphere, sticker)',
                  note: 'Incorporate delicate gold border frames and warm drop shadow details.'
                },
                {
                  num: 'Frame 4',
                  title: 'Social Proof',
                  bg: 'bg-[#1A1A1A]',
                  bgLabel: 'Dark Charcoal (#1A1A1A)',
                  textColor: 'text-white',
                  top: '★★★★★',
                  topColor: 'text-yellow-500 text-lg tracking-widest',
                  center: '"My sleep improved within 2 weeks of placing the pyramid next to my router"',
                  centerStyle: 'italic font-serif font-light text-zinc-300 text-sm leading-relaxed',
                  middle: '— Priya M., Bangalore',
                  bottom: 'Verified Buyer',
                  bottomColor: 'text-[#00FF41] font-mono tracking-wider text-[10px]',
                  visual: 'Minimal user profile avatar placeholder',
                  note: 'Style in elegant editorial quote format with charcoal container borders.'
                },
                {
                  num: 'Frame 5',
                  title: 'Call to Action',
                  bg: 'bg-gradient-to-b from-black to-amber-950/45',
                  bgLabel: 'Black with Gold Gradient Bottom',
                  textColor: 'text-white',
                  top: 'LIMITED STOCK',
                  center: 'Shop Now',
                  centerStyle: 'text-xl font-bold uppercase tracking-widest text-[#00FF41]',
                  middle: 'Starter Pack from ₹799\nFree shipping above ₹999',
                  bottom: 'Link in bio 🔗',
                  visual: 'Aesthetic photo of all 4 Shungite pieces arranged',
                  note: 'Ensure strong visual hierarchy, make button element stand out prominently.'
                }
              ].map((frame, idx) => (
                <div key={idx} className="glass-panel border border-zinc-800 rounded-xl bg-[#1A1A1A] p-4 flex flex-col justify-between space-y-4">
                  {/* Card Header info */}
                  <div className="border-b border-zinc-850 pb-2 flex justify-between items-center text-xs">
                    <span className="font-bold text-[#00FF41] font-mono">{frame.num}</span>
                    <span className="text-zinc-500 font-mono text-[10px]">{frame.title}</span>
                  </div>

                  {/* Simulated Mobile Device Preview */}
                  <div className={`aspect-[9/16] ${frame.bg} border border-zinc-800 rounded-lg p-4 flex flex-col justify-between items-center text-center shadow-inner relative overflow-hidden select-none`}>
                    {/* Top small text */}
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${frame.topColor || 'text-zinc-500'}`}>
                      {frame.top}
                    </span>

                    {/* Center Block */}
                    <div className="w-full py-4 space-y-2">
                      <h4 className={`text-sm font-bold tracking-tight leading-tight ${frame.centerStyle || 'text-white'}`}>
                        {frame.center}
                      </h4>
                      {frame.middle && (
                        <p className="text-[9px] text-zinc-400 font-sans leading-relaxed whitespace-pre-line">
                          {frame.middle}
                        </p>
                      )}
                    </div>

                    {/* Simulated visual image element */}
                    <div className="w-full aspect-square border border-zinc-800/80 bg-zinc-950/60 rounded flex items-center justify-center text-[8px] text-zinc-500 p-2 font-mono">
                      <span>{frame.visual}</span>
                    </div>

                    {/* Bottom CTA text */}
                    <span className={`text-[10px] tracking-wide ${frame.bottomColor || 'text-zinc-400'}`}>
                      {frame.bottom}
                    </span>
                  </div>

                  {/* Canva design specs */}
                  <div className="bg-zinc-950/80 p-3 rounded-lg border border-zinc-900 text-[10px] space-y-1">
                    <span className="font-bold text-zinc-400 uppercase tracking-wider block font-mono">Canva Specs:</span>
                    <p className="text-zinc-500 leading-relaxed"><span className="text-zinc-400 font-semibold">BG:</span> {frame.bgLabel}</p>
                    <p className="text-zinc-500 leading-relaxed"><span className="text-zinc-400 font-semibold">Notes:</span> {frame.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ASSET CHECKLIST */}
        {activeTab === 'checklist' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header info / print actions */}
            <div className="no-print flex flex-col sm:flex-row justify-between sm:items-center border-b border-zinc-800 pb-4 gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">C11 Submission Checklist</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">All assets required for TASK_C11 proof submission</p>
              </div>
              <div>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#00FF41] hover:bg-emerald-500 text-black font-bold text-sm rounded-lg shadow-[0_4px_14px_rgba(0,255,65,0.4)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Checklist PDF</span>
                </button>
              </div>
            </div>

            {/* Print Header Details (Visible only on print) */}
            <div className="hidden print:block space-y-3 pb-6 border-b-2 border-zinc-800">
              <h2 className="text-2xl font-black text-black">C11 Submission Checklist</h2>
              <p className="text-sm text-zinc-600 font-mono">
                Shungite Shield EMF Protection Campaign — Product Launch Content Pack
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-2">
                <p><strong>Prepared by:</strong> GO-BRICS Business Lab Content Team</p>
                <p><strong>Verification Date:</strong> June 2026</p>
                <p><strong>Proof Completion:</strong> {completedAssetsCount} of {totalAssetsCount} Deliverable Assets Verified ({progressPercent}%)</p>
              </div>
            </div>

            {/* Dynamic Progress indicator */}
            <div className="glass-panel border border-zinc-800 bg-[#1A1A1A] p-6 rounded-xl space-y-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Campaign Progression Status</h4>
                  <p className="text-2xl font-extrabold text-white mt-1 flex items-baseline gap-1">
                    <span className="text-[#00FF41] text-glow-green">{completedAssetsCount}</span>
                    <span className="text-zinc-500 text-sm font-normal">of</span>
                    <span className="text-zinc-300">{totalAssetsCount}</span>
                    <span className="text-sm text-zinc-400 font-normal ml-2">assets complete</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-mono font-extrabold text-[#00FF41] text-glow-green">
                    {progressPercent}%
                  </span>
                </div>
              </div>

              {/* Progress track */}
              <div className="h-4 w-full bg-zinc-950 rounded-full border border-zinc-800 overflow-hidden p-[2px]">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-[#00FF41] rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(0,255,65,0.4)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Checklist items list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Platform Posts (3)', category: 'posts' },
                { title: 'Launch Reel (3)', category: 'reel' },
                { title: 'Press Release (2)', category: 'press' },
                { title: 'Email Announcement (3)', category: 'email' },
                { title: 'Story Frames (5)', category: 'stories' },
                { title: 'Submission Workflow (3)', category: 'submission' }
              ].map((section, sectionIdx) => {
                const sectionItems = CHECKLIST_ITEMS.filter(item => item.category === section.category);
                return (
                  <div key={sectionIdx} className="glass-panel border border-zinc-800 bg-[#1A1A1A] p-5 rounded-xl print-card">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-zinc-850 pb-3 mb-4 flex justify-between items-center font-mono">
                      <span>{section.title}</span>
                      {section.category !== 'submission' && (
                        <span className="text-xs font-normal text-zinc-500">
                          {sectionItems.filter(item => checklist[item.id]).length}/{sectionItems.length}
                        </span>
                      )}
                    </h4>
                    
                    <ul className="space-y-3">
                      {sectionItems.map((item) => {
                        const isChecked = checklist[item.id];
                        return (
                          <li 
                            key={item.id}
                            onClick={() => toggleChecklistItem(item.id)}
                            className={`flex items-start gap-3 p-2.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                              isChecked 
                                ? 'bg-[#00FF41]/5 border-[#00FF41]/20 text-zinc-100' 
                                : 'border-transparent hover:bg-zinc-900 text-zinc-400'
                            }`}
                          >
                            <button
                              type="button"
                              className={`shrink-0 h-5 w-5 mt-0.5 rounded flex items-center justify-center transition-all ${
                                isChecked 
                                  ? 'bg-[#00FF41] border-[#00FF41] text-black shadow-[0_0_6px_#00FF41]' 
                                  : 'bg-zinc-950 border border-zinc-700 text-transparent'
                              }`}
                            >
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </button>
                            
                            <div className="flex-grow flex items-center justify-between text-xs">
                              <span className={isChecked ? 'line-through text-zinc-400 font-medium' : 'font-medium'}>
                                {item.label}
                              </span>
                              {item.preChecked && (
                                <span className="text-[10px] font-mono text-[#00FF41] bg-[#00FF41]/10 px-1.5 py-0.5 rounded border border-[#00FF41]/20 font-bold shrink-0 ml-2">
                                  WRITTEN
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="no-print mt-auto border-t border-zinc-800 bg-zinc-950/60 backdrop-blur-md py-6 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© 2026 GO-BRICS Business Lab Content Operations. All launch copy verified.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-400 cursor-pointer">Security Protocol Verified</span>
            <span className="text-zinc-700">|</span>
            <span className="hover:text-zinc-400 cursor-pointer">B2B Sandbox Gateway</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
