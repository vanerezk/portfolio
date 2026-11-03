type SheetProps = {
  id: string;
  code: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Una "hoja" del juego de planos. El TitleBlock observa los
 * `data-sheet` para saber en qué hoja está el lector.
 */
export function Sheet({ id, code, title, children, className = "" }: SheetProps) {
  return (
    <section
      id={id}
      data-sheet={code}
      data-sheet-title={title}
      aria-labelledby={`${id}-title`}
      className={`relative border-t border-line ${className}`}
    >
      <div className="frame">
        <header className="sheet-grid items-baseline pt-6 pb-10 md:pt-8 md:pb-16">
          <span className="annot col-span-1 text-accent-ink md:col-span-2">{code}</span>
          <h2 id={`${id}-title`} className="annot col-span-3 md:col-span-10">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
