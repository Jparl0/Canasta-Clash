import DaRules from "./DaRules";

export default function Homepage(): JSX.Element {
    return (
        <div>
            <header>
                Header Here
            </header>
            <div className="main-section-container">
                <h3>Canasta Clash</h3>
                <div className="objective-section">
                    
                </div>
                <div className="rules-section">
                    <div className="rules-outer-container">
                        <DaRules />
                    </div>
                </div>
            </div>
            <footer>
                footer here
            </footer>
        </div>
    )

}