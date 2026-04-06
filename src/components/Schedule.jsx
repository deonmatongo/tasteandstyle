import { useState } from 'react';

const tabs = ['Evening', 'Afternoon', 'Post-Event'];

const timelineItems = [
  {
    time: '18:00',
    title: 'Doors Open — Champagne Welcome',
    detail: 'Registration, welcome drink, and the first opportunity to explore the venue and meet fellow guests.',
    tag: 'Both',
    tagClass: '',
  },
  {
    time: '19:00',
    title: 'Fashion Presentation by Ania Kuczyńska',
    detail: 'An intimate showcase of the AW25 collection, presented in the venue\'s grand hall.',
    tag: 'Fashion',
    tagClass: 'fashion',
  },
  {
    time: '20:00',
    title: 'Seven-Course Tasting Dinner',
    detail: 'Chef Aleksander Baronas leads a narrative journey through Polish terroir with seven curated courses.',
    tag: 'Culinary',
    tagClass: 'culinary',
  },
  {
    time: '22:30',
    title: 'Panel: Where Does Fashion Feed?',
    detail: "A conversation between Poland's leading fashion editor, a sommelier, and a textile designer.",
    tag: 'Dialogue',
    tagClass: '',
  },
  {
    time: '23:30',
    title: 'After-Hours Lounge & Private Showroom',
    detail: 'Cocktails, live music, and exclusive access to the designer showroom open until 2 AM.',
    tag: 'After Dark',
    tagClass: 'fashion',
  },
];

export default function Schedule() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="schedule" id="schedule">
      <div className="schedule-header">
        <div>
          <div className="section-label reveal">28 June 2025</div>
          <h2 className="section-heading reveal reveal-delay-1">
            The Evening<br /><em>Unfolds</em>.
          </h2>
        </div>
        <div className="schedule-tabs reveal">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`tab-btn${activeTab === i ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline reveal">
        {timelineItems.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="tl-time">{item.time}</div>
            <div className="tl-content">
              <div className="tl-title">{item.title}</div>
              <div className="tl-detail">{item.detail}</div>
              <span className={`tl-tag ${item.tagClass}`}>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
