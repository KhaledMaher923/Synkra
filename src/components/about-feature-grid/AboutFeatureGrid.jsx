
export default function AboutFeatureGrid({title,subtitle,headerButtonObj,employees}){
    const Icon = headerButtonObj?.icon;
    return(
        <section>
            <header>
                <div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                {headerButtonObj && <button>
                   <span>{headerButtonObj.name}</span>
                    {Icon && <Icon/>}
                </button>}
            </header>
            <ul>
                {employees.map((employee=>{
                    return (
                        <li key={employee.id}>
                            <article>
                                <div>
                                    <img src={employee.image} alt={employee.name} />
                                    <p>{employee.domain}</p>
                                </div>
                                <h3>{employee.name}</h3>
                                <p>{employee.role}</p>
                            </article>
                        </li>
                    );
                }))}
            </ul>
        </section>
    );
}