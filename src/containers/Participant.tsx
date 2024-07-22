import useParticipant from "../hooks/useParticipant.tsx";

function Participant() {
    const {participant} = useParticipant();

    console.log(participant);

    return (
        <>
            {participant && participant.map((p, index) => (
                <ol key={index}>
                    <li>{p.name}</li>
                    <li>{p.gender}</li>
                    <li>{p.age}</li>
                    <li>{p.club}</li>

                </ol>
            ))

            }
        </>
    );
}

export default Participant;