import useDiscipline from "../hooks/useDiscipline.tsx";

function Discipline() {
    const {discipline} = useDiscipline();

    console.log(discipline);

    return (
        <>
            {discipline && discipline.map((p, index) => (
                <ol key={index}>
                    <li>{p.name}</li>
                    <li>{p.resultType}</li>
                </ol>
            ))

            }
        </>
    );
}

export default Discipline;