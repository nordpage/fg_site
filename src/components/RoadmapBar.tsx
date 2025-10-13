import { motion } from "framer-motion";
import { CloudSun, Hammer, Layers, Leaf, Lightbulb, Rocket, Settings2, Trees } from "lucide-react";
import type { JSX } from "react";

interface Milestone {
  id: number;
  label: string;
  icon: JSX.Element;
  active: boolean;
  note?: string;
  eta?: string;
}

const milestones: Milestone[] = [
  { id: 1, label: "Игровой цикл (core) онлайн", icon: <Hammer size={16} />, active: true, note: "Играбельный прототип", eta: "сентябрь 2025" },
  { id: 2, label: "Вертикальный срез", icon: <Layers size={16} />, active: true, note: "5–10 минут", eta: "октябрь–ноябрь 2025" },
  { id: 3, label: "Инструменты и пайплайн", icon: <Settings2 size={16} />, active: true, note: "Поток ассетов", eta: "октябрь 2025" },
  { id: 4, label: "Лес и пропсы", icon: <Trees size={16} />, active: false, note: "Пакет #1", eta: "ноябрь 2025" },
  { id: 5, label: "Атмосферный проход", icon: <CloudSun size={16} />, active: false, note: "Свет/погода/аудио", eta: "ноябрь–декабрь 2025" },
  { id: 6, label: "UX и производительность", icon: <Lightbulb size={16} />, active: false, note: "60 FPS", eta: "декабрь 2025" },
  { id: 7, label: "Демо + страница Steam", icon: <Rocket size={16} />, active: false, note: "Публичное демо", eta: "декабрь 2025 / январь 2026" },
  { id: 8, label: "Контент-обновление", icon: <Leaf size={16} />, active: false, note: "Ранний доступ", eta: "Q1 2026" },
];

const activeIndex = Math.max(1, milestones.filter((m) => m.active).length);
const progress = (activeIndex - 1) / (milestones.length - 1);

export default function RoadmapBar() {
  return (
      <section style={{
        background: 'linear-gradient(180deg, #0b0b0f, #0f1115 60%, #0b0b0f)',
        color: '#eaeaf0',
        padding: '56px 0',
        minHeight: '400px'
      }}>
        <div style={{
          width: 'min(100%, 1100px)',
          margin: '0 auto',
          padding: '0 6%'
        }}>
          <header style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: 600,
              letterSpacing: '0.2px'
            }}>
              Дорожная карта
            </h2>
            <span style={{
              color: 'rgba(255,255,255,.6)',
              fontSize: '12px'
            }}>
            {Math.round(progress * 100)}% готово
          </span>
          </header>

          <div style={{
            position: 'relative',
            height: '26px',
            borderRadius: '999px',
            background: '#1f232b',
            border: '1px solid #2b303a',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.03), 0 8px 24px rgba(0,0,0,.35)',
            overflow: 'visible',
            marginTop: '20px',
            marginBottom: '90px'
          }}>
            {/* Track Shine */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '999px',
              background: 'radial-gradient(100% 140% at 50% 0%, rgba(255,255,255,.09) 0%, rgba(255,255,255,0) 55%)',
              pointerEvents: 'none'
            }} />

            {/* Fill */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  borderRadius: '999px 0 0 999px',
                  background: 'linear-gradient(90deg, #f59e0b, #f97316, #ea580c)',
                  boxShadow: '0 0 20px rgba(249,115,22,.35), inset 0 0 0 1px rgba(255,255,255,.05)'
                }}
            />

            {/* Thumb */}
            <motion.div
                initial={{ left: 0 }}
                animate={{ left: `calc(${progress * 100}% - 17px)` }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: '#fff',
                  border: '1px solid #fde68a',
                  boxShadow: '0 0 0 8px rgba(249,115,22,.35), 0 12px 34px rgba(249,115,22,.45)'
                }}
            />

            {/* Markers */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 8px'
            }}>
              {milestones.map((m, i) => {
                const doneOrCurrent = i < activeIndex;
                const isCurrent = i + 1 === activeIndex;
                const isOdd = i % 2 === 0;

                return (
                    <div key={m.id} style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      {/* Icon */}
                      <div
                          title={m.note || m.label}
                          style={{
                            zIndex: 2,
                            display: 'grid',
                            placeItems: 'center',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            border: `1px solid ${doneOrCurrent ? '#fdba74' : '#2b303a'}`,
                            background: doneOrCurrent ? 'rgba(249,115,22,.18)' : '#171922',
                            color: doneOrCurrent ? '#fff' : '#7a7f8a',
                            transition: 'background .25s, color .25s, border-color .25s'
                          }}
                      >
                        {m.icon}
                      </div>

                      {/* Label */}
                      <span style={{
                        position: 'absolute',
                        top: isOdd ? '40px' : '60px',
                        whiteSpace: 'nowrap',
                        fontSize: '11px',
                        color: doneOrCurrent ? '#d8d8e2' : 'rgba(255,255,255,.6)',
                        textAlign: 'center',
                        maxWidth: '120px'
                      }}>
                    {m.label}
                  </span>

                      {/* ETA */}
                      {m.eta && (
                          <span style={{
                            position: 'absolute',
                            top: isOdd ? '56px' : '76px',
                            whiteSpace: 'nowrap',
                            fontSize: '10px',
                            color: 'rgba(255,255,255,.6)',
                            opacity: 0.8,
                            textAlign: 'center'
                          }}>
                      {m.eta}
                    </span>
                      )}

                      {/* Pulse for current step */}
                      {isCurrent && (
                          <motion.span
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: [0.9, 1.05, 0.9] }}
                              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                              style={{
                                position: 'absolute',
                                zIndex: 1,
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(249,115,22,.26)',
                                filter: 'blur(6px)',
                                top: '-4px'
                              }}
                          />
                      )}
                    </div>
                );
              })}
            </div>
          </div>

          <p style={{
            marginTop: '16px',
            color: 'rgba(255,255,255,.6)',
            fontSize: '13px'
          }}>
            <strong>{milestones.length - activeIndex} этапов осталось</strong> — следите за развитием и добавляйте игру в вишлист.
          </p>
        </div>
      </section>
  );
}