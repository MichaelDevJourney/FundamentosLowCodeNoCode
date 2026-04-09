// ==========================================================================
// LÓGICA INTERATIVA - CURSO DE AUTOMAÇÃO DIGITAL & IA
// UNIFECAF + ROCKETSEAT (SIMULAÇÃO LOW-CODE)
// ==========================================================================

const { useState, useEffect } = React;

/**
 * Componente de Comparação Inteligente
 * Demonstra a diferença entre Low-Code e No-Code de forma interativa.
 */
function ComparisonTool() {
    const [activeCategory, setActiveCategory] = useState('all');

    const data = [
        { feature: "Conhecimento Técnico", low: "Básico a Intermediário", no: "Nenhum necessário", category: "tech" },
        { feature: "Customização", low: "Alta (via código)", no: "Limitada pela plataforma", category: "dev" },
        { feature: "Ideal para", low: "Sistemas Core e APIs", no: "MVPs e Apps Internos", category: "use" },
        { feature: "Velocidade", low: "Muito Rápida", no: "Instantânea", category: "speed" }
    ];

    return (
        <div className="comparison-container">
            <div className="table-wrapper animate-in">
                <table>
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>Low-Code</th>
                            <th>No-Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr key={idx} className="fade-in-row" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <td className="feature-name">
                                    <span className="dot"></span>
                                    {item.feature}
                                </td>
                                <td>{item.low}</td>
                                <td>{item.no}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="table-footer-note">
                * Dados baseados no currículo de <strong>Automação Digital & IA</strong>.
            </p>
        </div>
    );
}

// Inicialização segura do React
const rootElement = document.getElementById('react-comparison-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ComparisonTool />);
}

// Efeitos de Scroll para imagens (Efeito Parallax / Lazy Entrance)
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.image-reveal').forEach(img => {
        observer.observe(img);
    });
});
