import { useMemo, useState } from 'react';
import { places, stats, regions } from './data/demo';

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState('Alle');
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const categories = ['Alle', ...new Set(places.flatMap((place) => place.categories))];

  const visiblePlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesRegion = selectedRegion === 'Alle' || place.region === selectedRegion;
      const matchesCategory =
        selectedCategory === 'Alle' || place.categories.includes(selectedCategory);
      return matchesRegion && matchesCategory;
    });
  }, [selectedCategory, selectedRegion]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Regionales Ökosystem</p>
          <h1>Regio v2</h1>
        </div>
        <button className="primary-btn">Neu anlegen</button>
      </header>

      <section className="hero">
        <div>
          <span className="badge">Live-Übersicht</span>
          <h2>Regionale Angebote und Services auf einen Blick.</h2>
          <p>
            Entdecke Orte, Services und Anlaufstellen in deiner Region – schnell, klar und
            mobil nutzbar.
          </p>
        </div>
        <div className="hero-panel">
          <div>
            <strong>Aktive Orte</strong>
            <span>{places.length}</span>
          </div>
          <div>
            <strong>Regionen</strong>
            <span>{regions.length}</span>
          </div>
          <div>
            <strong>Routen</strong>
            <span>24</span>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.change}</small>
          </article>
        ))}
      </section>

      <section className="toolbar">
        <label>
          <span>Region</span>
          <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
            <option value="Alle">Alle</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Kategorie</span>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </section>

      <main className="content-grid">
        <section className="place-list">
          {visiblePlaces.map((place) => (
            <article key={place.id} className="place-card">
              <div className="place-header">
                <div>
                  <span className="chip">{place.region}</span>
                  <h3>{place.name}</h3>
                </div>
                <span className={`status ${place.status.toLowerCase()}`}>{place.status}</span>
              </div>

              <p>{place.description}</p>

              <div className="tags">
                {place.categories.map((category) => (
                  <span key={`${place.id}-${category}`} className="tag">
                    {category}
                  </span>
                ))}
              </div>

              <div className="meta-row">
                <span>{place.distance}</span>
                <span>{place.openingHours}</span>
              </div>
            </article>
          ))}
        </section>

        <aside className="side-panel">
          <h3>Aktivitäten</h3>
          <ul>
            <li>Gemeinsame Fahrten planen</li>
            <li>Lokale Angebote entdecken</li>
            <li>Verfügbare Einrichtungen prüfen</li>
            <li>Routen mit kurzer Laufzeit</li>
          </ul>

          <div className="mini-card">
            <span>Heute</span>
            <strong>18 Events</strong>
            <small>+6% gegenüber gestern</small>
          </div>
        </aside>
      </main>
    </div>
  );
}
