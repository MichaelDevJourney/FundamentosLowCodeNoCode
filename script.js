// ==========================================================================
// UNIFECAF × ROCKETSEAT - CURSO DE AUTOMAÇÃO DIGITAL & IA
// Lógica de UI e Componentes (Vanilla React para Máxima Compatibilidade)
// ==========================================================================

const e = React.createElement;

/**
 * Componente de Tabela Comparativa
 * Escrito sem JSX para funcionar localmente sem erros de CORS ou Babel.
 */
function ComparisonTable() {
    const rows = [
        { feat: "Conhecimento", low: "Intermediário", no: "Nenhum" },
        { feat: "Customização", low: "Total (Código)", no: "Limitada" },
        { feat: "Público Alvo", low: "IT / Devs", no: "Negócios / PMs" },
        { feat: "Velocidade", low: "Alta", no: "Instantânea" }
    ];

    return e('div', { className: 'comparison-box' },
        e('table', { className: 'modern-table' },
            e('thead', null,
                e('tr', null,
                    e('th', null, 'Atributo'),
                    e('th', null, 'Low-Code'),
                    e('th', null, 'No-Code')
                )
            ),
            e('tbody', null,
                rows.map((r, i) => 
                    e('tr', { key: i },
                        e('td', { className: 'feat-name' }, r.feat),
                        e('td', null, r.low),
                        e('td', null, r.no)
                    )
                )
            )
        )
    );
}

// Inicialização Direta
document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar React
    const rootDiv = document.getElementById('react-comparison-root');
    if (rootDiv && typeof ReactDOM !== 'undefined') {
        const root = ReactDOM.createRoot(rootDiv);
        root.render(e(ComparisonTable));
    }

    // 2. Lógica de Scroll Reveal (Otimizada)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    document.querySelectorAll('.image-reveal').forEach(el => {
        revealObserver.observe(el);
    });
});
