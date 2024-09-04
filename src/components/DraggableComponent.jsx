import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ type, label }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'FORM_COMPONENT',
        item: { type, label },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '8px',
                border: '1px solid #ccc',
                marginBottom: '4px',
                cursor: 'move',
                backgroundColor: 'black',
            }}
        >
            {label}
        </div>
    );
};

export default DraggableComponent;
