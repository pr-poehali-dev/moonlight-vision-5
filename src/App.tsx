import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";
import { CTAForm } from "@/components/CTAForm";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Научное исследование</p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Самооценка,</span>{" "}
            мышление и успеваемость
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Исследование взаимосвязи самооценки, типа мышления и академической успеваемости учащихся 5–9 классов
          </p>

          {/* Decorative bottom element */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Актуальность исследования</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Где внутреннее «я» встречает учёбу
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Самооценка подростка — один из ключевых факторов, определяющих его готовность учиться, принимать вызовы и справляться с трудностями. Исследование охватывает учащихся 5–9 классов в период наиболее интенсивного личностного роста.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Мы изучаем, как тип мышления — фиксированное или развивающееся — влияет на отношение к учёбе и насколько академические результаты зависят от внутреннего образа себя, а не только от способностей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Направления исследования</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Три ключевых аспекта</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Самооценка"
              description="Анализ уровня самооценки у подростков: как она формируется, как связана с эмоциональным состоянием и готовностью к учебным вызовам."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              }
            />
            <ServiceCard
              title="Тип мышления"
              description="Исследование фиксированного и развивающегося мышления по Кэрол Дуэк: как убеждения о собственных способностях определяют учебное поведение."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
                </svg>
              }
            />
            <ServiceCard
              title="Академическая успеваемость"
              description="Выявление корреляций между психологическими характеристиками и учебными результатами: оценками, мотивацией и учебной активностью."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M12 20h9M12 4h9M4 4l4 4-4 4" />
                  <path d="M4 14l4 4-4 4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="relative text-center py-12">
            {/* Quote decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                Не способности определяют успех, а вера в то, что эти способности можно развить. Мышление о росте меняет всё.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Кэрол Дуэк,{" "}
                <span className="text-primary">профессор психологии, Стэнфорд</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Присоединиться к исследованию</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Получить результаты</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Оставьте email — получите сводку результатов исследования и практические рекомендации для педагогов и родителей.
            </p>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            {/* Decorative frame corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">Исследование</span>
              <div className="w-12 h-px bg-primary" />
            </div>

            <p className="text-muted-foreground text-sm text-center max-w-md">
              Взаимосвязь самооценки, мышления и академической успеваемости учащихся 5–9 классов
            </p>

            <div className="flex items-center gap-2 text-muted-foreground/50 text-xs">
              <div className="w-4 h-px bg-muted-foreground/30" />
              <span>© 2024</span>
              <div className="w-4 h-px bg-muted-foreground/30" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
