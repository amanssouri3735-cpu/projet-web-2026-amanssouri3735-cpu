function SkillBar({ name, level, delay }) {
    const [width, setWidth] = React.useState('0%');
    
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setWidth(level + '%');
        }, delay);
        return () => clearTimeout(timeout);
    }, [level, delay]);
    
    return (
        <div className="skill" style={{animationDelay: `${delay}ms`}}>
            <div className="skill-header">
                <span>{name}</span>
                <span>{level}%</span>
            </div>
            <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: width }}></div>
            </div>
        </div>
    );
}