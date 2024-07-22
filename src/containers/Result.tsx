import useResult from "../hooks/useResult.tsx";

function Result() {
    const {result} = useResult();

    console.log(result);

    return (
        <>
            {result && result.map((p, index) => (
                <ol key={index}>
                    <li>{p.name}</li>
                    <li>{p.resultType}</li>
                    <li>{p.date}</li>
                    <li>{p.resultValue}</li>
                </ol>
            ))

            }
        </>
    );
}

export default Result;