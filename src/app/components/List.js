import React, { useEffect, useState } from 'react';

function List({ firestore }) {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    const getItems = () => {
        // Update automatically
        // firestore.collection('submissions').onSnapshot(snapshots => {
        //     let dataArray = [];
            
        //     snapshots.forEach(item => {
        //         dataArray.push({ id: item.id, ...item.data() })
        //     })
            
        //     setData(dataArray);
        // });

        // Update manually
        firestore.collection('submissions').get().then(data => {
            let dataArray = [];
            
            data.forEach(item => {
                dataArray.push({ id: item.id, ...item.data() })
            })
            
            setData(dataArray);
        });
        
    }


    return (
        <div>
            List component
            <h2>All submissions</h2>
            <ul style={{ listStyle: 'none' }}>
                { data.length > 0 && data.map((item, index) => (
                    <li key={item.id}>
                        <p>
                            {index}: {item.time}s -- {item.quote}
                        </p>
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default List;