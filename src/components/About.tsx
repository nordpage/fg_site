import { MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
      <section style={{ padding: '140px 40px', borderTop: '1px solid rgba(139,107,154,0.2)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(20, 20, 25, 0.8)', border: '1px solid rgba(139, 107, 154, 0.35)', fontSize: '10px', letterSpacing: '3px', color: '#8b6b9a', marginBottom: '56px', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Work Sans', sans-serif" }}>
            О проекте
          </div>

          {/* Main Content */}
          <div style={{ padding: '48px', background: 'linear-gradient(135deg, rgba(139, 107, 154, 0.08) 0%, rgba(10, 10, 15, 0.6) 100%)', border: '1px solid rgba(139, 107, 154, 0.25)', marginBottom: '40px' }}>

            <h2 style={{ fontSize: '32px', fontWeight: 400, marginBottom: '32px', lineHeight: 1.3, color: '#b8bcc8', fontFamily: "'Cinzel', serif" }}>
              Сольный проект
            </h2>

            <div style={{ fontSize: '15px', lineHeight: 2, color: '#8a92a0', marginBottom: '28px' }}>
              <p style={{ margin: '0 0 20px' }}>
                Windfall — моя первая полноценная игра. Разработка началась в сентябре 2024. Работаю один: код, арт, дизайн, нарратив.
              </p>
              <p style={{ margin: '0 0 20px' }}>
                Цель — выпустить в 2025 году на itch.io (WebGL) и Steam (Windows). Планирую бесплатную демо-версию и полную игру на 3-5 часов прохождения.
              </p>
              <p style={{ margin: 0, color: '#7a8090' }}>
                Делаю на Unity. Pixel art в Aseprite. Никакого AI. Без инвесторов и издателей.
              </p>
            </div>

            <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(139, 107, 154, 0.15)' }}>
              <div style={{ fontSize: '13px', color: '#8b6b9a', fontFamily: "'Work Sans', sans-serif" }}>
                Минск / Беларусь
              </div>
            </div>
          </div>

          {/* Tools/Stack */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '60px' }}>
            {[
              { label: 'Движок', value: 'Unity 2022' },
              { label: 'Графика', value: 'Aseprite' },
              { label: 'Код', value: 'C#' },
              { label: 'Аудио', value: 'FMOD' }
            ].map((item, idx) => (
                <div key={idx} style={{ padding: '16px', background: 'rgba(139, 107, 154, 0.08)', border: '1px solid rgba(139, 107, 154, 0.2)', textAlign: 'center' }}>
                  <div style={{ fontSize: '9px', letterSpacing: '2px', color: '#7a8090', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Work Sans', sans-serif" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '12px', color: '#a8adb8' }}>
                    {item.value}
                  </div>
                </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ padding: '36px', background: 'rgba(10, 10, 15, 0.7)', border: '1px solid rgba(139, 107, 154, 0.25)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#8b6b9a', marginBottom: '24px', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Work Sans', sans-serif" }}>
              Таймлайн
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                { date: 'Сентябрь 2024', text: 'Начало разработки, первые прототипы' },
                { date: 'Октябрь 2024', text: 'Базовая механика передвижения и инвентаря' },
                { date: 'Ноябрь 2024', text: 'Система крафтинга и первая локация' },
                { date: 'Q1 2025', text: 'Демо-версия на itch.io', highlight: true },
                { date: 'Q2-Q3 2025', text: 'Полная версия на Steam', highlight: true }
              ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '20px', paddingLeft: '12px', borderLeft: item.highlight ? '2px solid #b06080' : '2px solid rgba(139, 107, 154, 0.2)' }}>
                    <div style={{ fontSize: '11px', color: '#6a7280', fontFamily: 'monospace', minWidth: '100px' }}>
                      {item.date}
                    </div>
                    <div style={{ fontSize: '13px', color: item.highlight ? '#a8adb8' : '#7a8090' }}>
                      {item.text}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{ fontSize: '14px', color: '#7a8090', marginBottom: '24px' }}>
              Хотите следить за разработкой или есть вопросы?
            </p>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 32px', background: 'rgba(139, 107, 154, 0.18)', border: '1px solid rgba(139, 107, 154, 0.4)', color: '#a8adb8', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', fontFamily: "'Work Sans', sans-serif", transition: 'all 0.3s ease' }}>
              <MapPin size={14} /> Написать
            </a>
          </div>

        </div>

        <style>{`
        @media (max-width: 640px) {
          section > div > div:nth-child(3) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      </section>
  );
}