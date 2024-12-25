import React, { useState } from 'react';

const MemberDetails = () => {
    const [id, setId] = useState('');
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8080/MembersController/ Read/${id}`);


            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`Member with ID ${id} not found.`);
                }
                throw new Error(`HTTP error! Status: ${response.status}`);
            }


            const data = await response.json();
            setMember(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Find Member Details</h1>


            <form onSubmit={handleSubmit}>
                <label>
                    Enter Member ID:
                    <input
                        type="number"
                        value={id}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Get Member Details</button>
            </form>


            {loading && <p>Loading member details...</p>}


            {error && <p>Error: {error}</p>}


            {member && (
                <div>
                    <h2>Member Details</h2>
                    <p><strong>ID:</strong> {member.id}</p>
                    <p><strong>Name:</strong> {member.name}</p>
                    <p><strong>Email:</strong> {member.email}</p>
                    <p><strong>Mobile:</strong> {member.mobile}</p>
                    <p><strong>Address:</strong> {member.address}</p>

                </div>
            )}


            {!loading && !member && !error && id && (
                <p>No member found with ID {id}</p>
            )}
        </div>
    );
};

export default MemberDetails;
