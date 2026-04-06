import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function Venue() {
  return (
    <section className="venue" id="venue">
      <div className="venue-map reveal">
        <div className="map-grid" />
        <div className="map-pin">
          <div className="map-pin-dot" />
          <div className="map-pin-label">Stara Papiernia · Warsaw</div>
        </div>
      </div>

      <div className="venue-info reveal reveal-delay-1">
        <div className="section-label">The Venue</div>
        <h2 className="section-heading">
          An address of<br /><em>distinction</em>.
        </h2>
        <div className="venue-address">Stara Papiernia, Warszawa Śródmieście</div>
        <p className="venue-desc">
          Set within a beautifully restored 19th-century paper mill in the heart of Warsaw, this rare
          venue blends industrial heritage with modern elegance — the perfect backdrop for an evening
          where history meets the future of Polish taste.
        </p>
        <div className="venue-details">
          <div className="venue-detail">
            <Calendar size={16} strokeWidth={1.5} className="venue-detail-icon" /> Saturday, 28 June 2025
          </div>
          <div className="venue-detail">
            <Clock size={16} strokeWidth={1.5} className="venue-detail-icon" /> Doors open at 18:00
          </div>
          <div className="venue-detail">
            <MapPin size={16} strokeWidth={1.5} className="venue-detail-icon" /> Śródmieście, Warsaw
          </div>
          <div className="venue-detail">
            <Users size={16} strokeWidth={1.5} className="venue-detail-icon" /> 120 guests — intimate format
          </div>
        </div>
      </div>
    </section>
  );
}
